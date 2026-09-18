/**
 * ОГЭ-ВЫЖИМКА — Модуль авторизации и профиля (Supabase + LocalStorage)
 */

const SUPABASE_CONFIG = {
  url: "https://rkzzfszozgleeujkxzlb.supabase.co",
  anonKey: "sb_publishable_j8gwUIM7s9zENnA5LAiiCw_PN3FIIEj"
};

const Auth = {
  client: null,
  currentUser: null,
  profile: null,

  init() {
    // 1. Инициализация Supabase клиента (если библиотека загружена)
    try {
      if (window.supabase && typeof window.supabase.createClient === "function") {
        this.client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      }
    } catch (e) {
      console.warn("Supabase init notice:", e);
    }

    // 2. Загрузка локального профиля
    this.loadProfile();

    // 3. Проверка облачной сессии Supabase
    if (this.client) {
      this.client.auth.getSession().then(({ data: { session } }) => {
        if (session && session.user) {
          this.handleCloudUser(session.user);
        }
      }).catch(err => console.warn("Supabase session check:", err));

      this.client.auth.onAuthStateChange((event, session) => {
        if (session && session.user) {
          this.handleCloudUser(session.user);
        } else if (event === "SIGNED_OUT") {
          this.handleSignOutLocal();
        }
      });
    }

    this.updateUI();
  },

  getDefaultProfile() {
    return {
      id: "guest_" + Math.random().toString(36).substring(2, 9),
      name: "Гость ОГЭ",
      role: "student", // 'student' | 'teacher'
      school: "СОШ №6 им. Д.К. Потапова",
      grade: "9А",
      avatar: "🦊",
      targetGrade: "5",
      isGuest: true,
      email: ""
    };
  },

  loadProfile() {
    try {
      const saved = localStorage.getItem("oge_user_profile");
      if (saved) {
        this.profile = JSON.parse(saved);
      } else {
        this.profile = this.getDefaultProfile();
        this.saveProfile(this.profile);
      }
    } catch (e) {
      this.profile = this.getDefaultProfile();
    }
  },

  saveProfile(profileData) {
    this.profile = { ...this.profile, ...profileData };
    try {
      localStorage.setItem("oge_user_profile", JSON.stringify(this.profile));
    } catch (e) {
      console.warn("Storage error:", e);
    }
    this.updateUI();

    // Обновляем отображение кабинета, если открыт
    if (typeof CabinetView !== "undefined" && typeof CabinetView.render === "function") {
      CabinetView.render();
    }
  },

  handleCloudUser(user) {
    this.currentUser = user;
    const meta = user.user_metadata || {};
    this.saveProfile({
      id: user.id,
      email: user.email || "",
      name: meta.full_name || meta.name || user.email?.split("@")[0] || "Ученик",
      avatar: meta.avatar_url ? `<img src="${meta.avatar_url}" style="width:20px;height:20px;border-radius:50%;">` : "🎓",
      isGuest: false
    });
  },

  handleSignOutLocal() {
    this.currentUser = null;
    this.profile = this.getDefaultProfile();
    localStorage.removeItem("oge_user_profile");
    this.updateUI();
    if (typeof CabinetView !== "undefined") CabinetView.render();
  },

  updateUI() {
    const avatarEl = document.getElementById("header-profile-avatar");
    const nameEl = document.getElementById("header-profile-name");
    const headerBtn = document.getElementById("header-profile-btn");

    if (!avatarEl || !nameEl) return;

    if (this.profile) {
      avatarEl.innerHTML = this.profile.avatar || "👤";
      nameEl.textContent = this.profile.name || (this.profile.isGuest ? "Войти" : "Профиль");
      if (headerBtn) {
        headerBtn.title = `${this.profile.name} (${this.profile.grade || '9 класс'}, ${this.profile.school || 'СОШ №6'})`;
      }
    }
  },

  // Открытие модального окна профиля / входа
  openProfileModal() {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;
    this.renderModalContent();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeProfileModal() {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
  },

  renderModalContent(viewType = "overview") {
    const bodyEl = document.getElementById("auth-modal-body");
    if (!bodyEl) return;

    const p = this.profile || this.getDefaultProfile();
    const isGuest = p.isGuest;

    if (viewType === "edit_profile") {
      bodyEl.innerHTML = `
        <div class="auth-modal-pane">
          <div class="auth-modal-title">✏️ Редактирование профиля</div>
          <p class="auth-modal-sub">Настройте свои данные для персонализации подготовки и отчётов для учителей.</p>
          
          <form id="profile-edit-form" onsubmit="Auth.handleProfileSave(event)" style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
            <div>
              <label class="auth-field-lbl">Ваше имя или ник:</label>
              <input type="text" id="prof-input-name" class="auth-text-input" value="${p.name || ''}" required placeholder="Например, Алексей">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
              <div>
                <label class="auth-field-lbl">Роль:</label>
                <select id="prof-input-role" class="auth-text-input">
                  <option value="student" ${p.role === 'student' ? 'selected' : ''}>🎒 Ученик (9 класс)</option>
                  <option value="teacher" ${p.role === 'teacher' ? 'selected' : ''}>👨‍🏫 Учитель / Репетитор</option>
                </select>
              </div>
              <div>
                <label class="auth-field-lbl">Класс / Группа:</label>
                <input type="text" id="prof-input-grade" class="auth-text-input" value="${p.grade || '9А'}" placeholder="9А, 9Б...">
              </div>
            </div>

            <div>
              <label class="auth-field-lbl">Школа / Учебное заведение:</label>
              <input type="text" id="prof-input-school" class="auth-text-input" value="${p.school || 'СОШ №6 им. Д.К. Потапова'}" placeholder="СОШ №6...">
            </div>

            <div>
              <label class="auth-field-lbl">Выберите аватарку-эмодзи:</label>
              <div class="avatar-picker-row">
                ${['🦊', '🐱', '🚀', '🦉', '⚡', '🏆', '🎯', '🦁', '🐻', '🎓'].map(emoji => `
                  <button type="button" class="avatar-pick-btn ${p.avatar === emoji ? 'selected' : ''}" onclick="Auth.selectEmojiAvatar('${emoji}')">
                    ${emoji}
                  </button>
                `).join('')}
              </div>
              <input type="hidden" id="prof-input-avatar" value="${p.avatar || '🦊'}">
            </div>

            <div style="display: flex; gap: 0.8rem; margin-top: 0.5rem;">
              <button type="submit" class="btn-action" style="flex: 1; background: var(--accent-blue); color: white; padding: 0.75rem;">
                Сохранить изменения
              </button>
              <button type="button" class="btn-action btn-secondary" onclick="Auth.renderModalContent('overview')">
                Назад
              </button>
            </div>
          </form>
        </div>
      `;
      return;
    }

    if (viewType === "auth_login") {
      bodyEl.innerHTML = `
        <div class="auth-modal-pane">
          <div class="auth-modal-title">🔐 Вход в облачный аккаунт</div>
          <p class="auth-modal-sub">Облачный аккаунт Supabase позволяет синхронизировать прогресс между ПК и телефоном.</p>

          <form id="auth-login-form" onsubmit="Auth.handleEmailSignIn(event)" style="display: flex; flex-direction: column; gap: 0.9rem; margin-top: 1rem;">
            <div>
              <label class="auth-field-lbl">Email:</label>
              <input type="email" id="login-email" class="auth-text-input" required placeholder="student@example.com">
            </div>
            <div>
              <label class="auth-field-lbl">Пароль:</label>
              <input type="password" id="login-pwd" class="auth-text-input" required placeholder="Ваш пароль">
            </div>

            <div id="login-err-msg" style="color: var(--accent-red); font-size: 0.85rem; display: none;"></div>

            <button type="submit" class="btn-action" style="background: var(--accent-blue); color: white; padding: 0.75rem; margin-top: 0.4rem;">
              Войти
            </button>
          </form>

          <div class="auth-divider-line"><span>Или</span></div>

          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <button class="oauth-login-btn google-btn" onclick="Auth.signInWithGoogle()">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              Войти через Google
            </button>
            <button class="btn-action btn-secondary" onclick="Auth.renderModalContent('auth_register')">
              Нет аккаунта? Зарегистрироваться
            </button>
            <button class="btn-action btn-secondary" onclick="Auth.renderModalContent('overview')">
              Назад к профилю
            </button>
          </div>
        </div>
      `;
      return;
    }

    if (viewType === "auth_register") {
      bodyEl.innerHTML = `
        <div class="auth-modal-pane">
          <div class="auth-modal-title">✨ Регистрация в Supabase</div>
          <p class="auth-modal-sub">Создайте персональный аккаунт для сохранения стриков и прогресса в облаке.</p>

          <form id="auth-reg-form" onsubmit="Auth.handleEmailSignUp(event)" style="display: flex; flex-direction: column; gap: 0.9rem; margin-top: 1rem;">
            <div>
              <label class="auth-field-lbl">Имя:</label>
              <input type="text" id="reg-name" class="auth-text-input" required placeholder="Ваше имя">
            </div>
            <div>
              <label class="auth-field-lbl">Email:</label>
              <input type="email" id="reg-email" class="auth-text-input" required placeholder="student@example.com">
            </div>
            <div>
              <label class="auth-field-lbl">Пароль (от 6 символов):</label>
              <input type="password" id="reg-pwd" class="auth-text-input" minlength="6" required placeholder="Придумайте пароль">
            </div>

            <div id="reg-err-msg" style="color: var(--accent-red); font-size: 0.85rem; display: none;"></div>

            <button type="submit" class="btn-action" style="background: var(--accent-green); color: white; padding: 0.75rem; margin-top: 0.4rem;">
              Создать аккаунт
            </button>
            <button type="button" class="btn-action btn-secondary" onclick="Auth.renderModalContent('auth_login')">
              Уже есть аккаунт? Войти
            </button>
          </form>
        </div>
      `;
      return;
    }

    // Default: 'overview'
    const streakData = (typeof Gamification !== "undefined") ? Gamification.getStreakData() : { currentStreak: 1 };
    const mistakeCount = (typeof MistakesBank !== "undefined") ? MistakesBank.getUnresolvedCount() : 0;

    bodyEl.innerHTML = `
      <div class="auth-modal-pane">
        <div class="profile-card-header">
          <div class="profile-card-avatar">${p.avatar || '🦊'}</div>
          <div style="flex: 1;">
            <div class="profile-card-name">${p.name || 'Ученик'}</div>
            <div class="profile-card-meta">
              <span>${p.role === 'teacher' ? '👨‍🏫 Преподаватель' : '🎒 Ученик'}</span> • 
              <span>${p.grade || '9 класс'}</span> • 
              <span>${p.school || 'СОШ №6'}</span>
            </div>
          </div>
          <span class="profile-status-badge ${isGuest ? 'guest-badge' : 'cloud-badge'}">
            ${isGuest ? 'Локальный режим' : '☁️ Облако'}
          </span>
        </div>

        <div class="profile-stats-grid">
          <div class="profile-stat-box">
            <div class="stat-number">🔥 ${streakData.currentStreak || 1}</div>
            <div class="stat-label">Дней стрик</div>
          </div>
          <div class="profile-stat-box">
            <div class="stat-number" style="color: ${mistakeCount > 0 ? 'var(--accent-red)' : 'var(--accent-green)'};">
              ${mistakeCount}
            </div>
            <div class="stat-label">Ошибок в банке</div>
          </div>
          <div class="profile-stat-box">
            <div class="stat-number" style="color: var(--accent-blue);">
              ${(typeof Gamification !== "undefined") ? Gamification.getUnlockedAchievementsCount() : 0}
            </div>
            <div class="stat-label">Ачивок открыто</div>
          </div>
        </div>

        <div class="profile-actions-list">
          <button class="profile-action-btn" onclick="Auth.renderModalContent('edit_profile')">
            <span>✏️ Настроить профиль (имя, класс, роль)</span>
            <span>→</span>
          </button>
          <button class="profile-action-btn" onclick="App.switchView('mistakes'); Auth.closeProfileModal();">
            <span>❌ Перейти в «Мои ошибки» (${mistakeCount})</span>
            <span>→</span>
          </button>
          <button class="profile-action-btn" onclick="App.switchView('cabinet'); Auth.closeProfileModal();">
            <span>🏆 Полный кабинет и ачивки</span>
            <span>→</span>
          </button>
          ${isGuest ? `
            <button class="profile-action-btn cloud-promo-btn" onclick="Auth.renderModalContent('auth_login')">
              <span>☁️ Войти в облако Supabase (для синхронизации с телефоном)</span>
              <span>Вход →</span>
            </button>
          ` : `
            <button class="profile-action-btn" style="color: var(--accent-red);" onclick="Auth.signOut()">
              <span>🚪 Выйти из аккаунта (${p.email})</span>
              <span>✕</span>
            </button>
          `}
        </div>
      </div>
    `;
  },

  selectEmojiAvatar(emoji) {
    document.querySelectorAll(".avatar-pick-btn").forEach(btn => {
      btn.classList.toggle("selected", btn.textContent.trim() === emoji);
    });
    const inp = document.getElementById("prof-input-avatar");
    if (inp) inp.value = emoji;
  },

  handleProfileSave(e) {
    e.preventDefault();
    const name = document.getElementById("prof-input-name").value.trim();
    const role = document.getElementById("prof-input-role").value;
    const grade = document.getElementById("prof-input-grade").value.trim();
    const school = document.getElementById("prof-input-school").value.trim();
    const avatar = document.getElementById("prof-input-avatar").value;

    this.saveProfile({
      name: name || "Ученик",
      role: role || "student",
      grade: grade || "9А",
      school: school || "СОШ №6",
      avatar: avatar || "🦊"
    });

    this.renderModalContent("overview");
  },

  async handleEmailSignIn(e) {
    e.preventDefault();
    if (!this.client) {
      alert("Сервер авторизации подключается. Попробуйте через пару секунд.");
      return;
    }
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-pwd").value;
    const errEl = document.getElementById("login-err-msg");

    try {
      const { data, error } = await this.client.auth.signInWithPassword({ email, password });
      if (error) {
        if (errEl) {
          errEl.textContent = "Ошибка входа: " + (error.message || "Неверный логин или пароль");
          errEl.style.display = "block";
        }
        return;
      }
      this.handleCloudUser(data.user);
      this.renderModalContent("overview");
    } catch (err) {
      if (errEl) {
        errEl.textContent = "Ошибка сети при обращении к базе.";
        errEl.style.display = "block";
      }
    }
  },

  async handleEmailSignUp(e) {
    e.preventDefault();
    if (!this.client) {
      alert("Клиент базы данных не инициализирован.");
      return;
    }
    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-pwd").value;
    const errEl = document.getElementById("reg-err-msg");

    try {
      const { data, error } = await this.client.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name }
        }
      });
      if (error) {
        if (errEl) {
          errEl.textContent = "Ошибка регистрации: " + error.message;
          errEl.style.display = "block";
        }
        return;
      }

      if (data.user) {
        this.handleCloudUser(data.user);
        alert("🎉 Аккаунт успешно создан! Вы вошли в систему.");
        this.renderModalContent("overview");
      }
    } catch (err) {
      if (errEl) {
        errEl.textContent = "Не удалось связаться с базой Supabase.";
        errEl.style.display = "block";
      }
    }
  },

  async signInWithGoogle() {
    if (!this.client) {
      alert("Supabase клиент инициализируется...");
      return;
    }
    try {
      const { data, error } = await this.client.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + window.location.pathname
        }
      });
      if (error) {
        alert("Google вход: " + error.message);
      }
    } catch (e) {
      alert("Ошибка при вызове Google OAuth: " + e.message);
    }
  },

  async signOut() {
    if (this.client) {
      try {
        await this.client.auth.signOut();
      } catch (e) {}
    }
    this.handleSignOutLocal();
    this.renderModalContent("overview");
  }
};
