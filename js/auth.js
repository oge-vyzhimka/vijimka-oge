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
    // 0. Автоопределение пользователя Telegram WebApp
    this.detectTelegramWebApp();

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
    this.checkGateState();
  },

  detectTelegramWebApp() {
    try {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;
        if (tgUser) {
          const fullName = [tgUser.first_name, tgUser.last_name].filter(Boolean).join(" ");
          const uname = tgUser.username ? "@" + tgUser.username : "";
          const saved = localStorage.getItem("oge_user_profile");
          if (!saved) {
            this.saveProfile({
              name: fullName || uname || "Telegram Пользователь",
              role: "student",
              grade: "9 «А»",
              school: "МБОУ СОШ №6 им. Д.К. Потапова",
              avatar: "✈️",
              telegram: uname,
              authProvider: "telegram",
              isGuest: false
            });
            localStorage.setItem("oge_auth_gate_passed", "true");
          }
        }
      }
    } catch (e) {
      console.warn("Telegram WebApp detection error:", e);
    }
  },

  getDefaultProfile() {
    return {
      id: "guest_" + Math.random().toString(36).substring(2, 9),
      name: "Гость ОГЭ",
      role: "student", // 'student' | 'teacher'
      school: "МБОУ СОШ №6 им. Д.К. Потапова",
      grade: "9 «А»",
      avatar: "🦊",
      telegram: "",
      authProvider: "local",
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
                <select id="prof-input-role" class="auth-text-input" onchange="Auth.onRoleChange(this.value)">
                  <option value="student" ${p.role === 'student' ? 'selected' : ''}>🎒 Ученик (9 класс)</option>
                  <option value="teacher" ${p.role === 'teacher' ? 'selected' : ''}>👨‍🏫 Учитель / Репетитор</option>
                </select>
              </div>
              <div>
                <label class="auth-field-lbl">Класс / Группа:</label>
                <input type="text" id="prof-input-grade" class="auth-text-input" value="${p.grade || '9А'}" placeholder="9А, 9Б...">
              </div>
            </div>

            <!-- Поле ввода кодового слова для роли учителя -->
            <div id="teacher-code-field" style="display: ${p.role === 'teacher' ? 'block' : 'none'}; background: rgba(147, 51, 234, 0.08); padding: 0.85rem; border-radius: 8px; border: 1px dashed #9333ea;">
              <label class="auth-field-lbl" style="color: #9333ea;">🔑 Секретное кодовое слово преподавателя:</label>
              <input type="password" id="prof-input-teacher-code" class="auth-text-input" placeholder="Введите кодовое слово" value="${p.role === 'teacher' ? 'учитель2026' : ''}">
              <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 0.3rem;">Доступ к журналу класса и ведомостям защищён паролем (учитель2026).</div>
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

    if (viewType === "auth_telegram") {
      bodyEl.innerHTML = `
        <div class="auth-modal-pane">
          <div class="auth-modal-title" style="color: #38bdf8; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#38bdf8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Вход через Telegram
          </div>
          <p class="auth-modal-sub">Привяжите свой Telegram никнейм для быстрой синхронизации тестов и банка ошибок без пароля.</p>

          <form onsubmit="Auth.handleModalTelegramSubmit(event)" style="display: flex; flex-direction: column; gap: 0.9rem; margin-top: 1rem;">
            <div>
              <label class="auth-field-lbl">Ваш никнейм в Telegram (@username):</label>
              <div style="position: relative; display: flex; align-items: center;">
                <span style="position: absolute; left: 1rem; color: #38bdf8; font-weight: 800; font-size: 1.1rem; pointer-events: none;">@</span>
                <input type="text" id="modal-tg-username" class="auth-text-input" required placeholder="ваш_никнейм" value="${(p.telegram || '').replace(/^@/, '')}" style="padding-left: 2.1rem; border-color: rgba(34, 158, 217, 0.45);">
              </div>
              <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 0.25rem;">Имя пользователя из настроек Telegram. Пароль не требуется.</div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
              <div>
                <label class="auth-field-lbl">Класс:</label>
                <input type="text" id="modal-tg-grade" class="auth-text-input" value="${p.grade || '9 «А»'}">
              </div>
              <div>
                <label class="auth-field-lbl">Отображаемое имя:</label>
                <input type="text" id="modal-tg-name" class="auth-text-input" value="${p.name !== 'Гость ОГЭ' ? p.name : ''}" placeholder="Имя">
              </div>
            </div>

            <button type="submit" class="btn-action" style="background: linear-gradient(135deg, #2AABEE, #229ED9); color: white; padding: 0.85rem; font-weight: 800; border-radius: 10px; margin-top: 0.4rem; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(34, 158, 217, 0.4); display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              Войти и сохранить профиль ✈️
            </button>
            <button type="button" class="btn-action btn-secondary" onclick="Auth.renderModalContent('overview')">
              Назад
            </button>
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
            <button class="oauth-login-btn telegram-login-btn" onclick="Auth.signInWithTelegram()" style="background: rgba(34, 158, 217, 0.15); border-color: rgba(34, 158, 217, 0.4); color: #38bdf8;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#38bdf8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              Войти через Telegram
            </button>
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
          <button class="profile-action-btn" onclick="Auth.renderModalContent('auth_telegram')" style="background: rgba(34, 158, 217, 0.08); border-color: rgba(34, 158, 217, 0.35);">
            <span style="color: #38bdf8; font-weight: 700;">✈️ ${p.telegram ? `Telegram: ${p.telegram}` : 'Войти через Telegram'}</span>
            <span style="color: #38bdf8; font-weight: 700;">${p.telegram ? 'Изменить →' : 'Вход →'}</span>
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
          <button class="profile-action-btn" onclick="Auth.showGateScreen()">
            <span>🚪 Сменить пользователя / Выйти на начальный экран</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;
  },

  handleModalTelegramSubmit(e) {
    if (e) e.preventDefault();
    const rawUname = document.getElementById("modal-tg-username")?.value.trim() || "";
    if (!rawUname) {
      alert("Укажите никнейм в Telegram!");
      return;
    }
    const cleanUname = rawUname.startsWith("@") ? rawUname : "@" + rawUname;
    const name = document.getElementById("modal-tg-name")?.value.trim() || cleanUname;
    const grade = document.getElementById("modal-tg-grade")?.value.trim() || "9 «А»";

    this.saveProfile({
      name: name,
      telegram: cleanUname,
      grade: grade,
      avatar: "✈️",
      authProvider: "telegram",
      isGuest: false
    });

    alert(`🎉 Профиль успешно привязан к Telegram (${cleanUname})!`);
    this.renderModalContent("overview");
  },

  selectEmojiAvatar(emoji) {
    document.querySelectorAll(".avatar-pick-btn").forEach(btn => {
      btn.classList.toggle("selected", btn.textContent.trim() === emoji);
    });
    const inp = document.getElementById("prof-input-avatar");
    if (inp) inp.value = emoji;
  },

  onRoleChange(role) {
    const field = document.getElementById("teacher-code-field");
    if (field) {
      field.style.display = (role === "teacher") ? "block" : "none";
    }
  },

  handleProfileSave(e) {
    e.preventDefault();
    const name = document.getElementById("prof-input-name").value.trim();
    const role = document.getElementById("prof-input-role").value;
    const grade = document.getElementById("prof-input-grade").value.trim();
    const school = document.getElementById("prof-input-school").value.trim();
    const avatar = document.getElementById("prof-input-avatar").value;

    // Проверка секретного кодового слова для роли преподавателя
    if (role === "teacher") {
      const codeInput = document.getElementById("prof-input-teacher-code");
      const code = codeInput ? codeInput.value.trim().toLowerCase() : "";
      if (code !== "учитель2026") {
        alert("⛔ Неверное кодовое слово! Доступ к роли Преподавателя закрыт. Введите верное кодовое слово (учитель2026).");
        return;
      }
    }

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
  },

  /* --------------------------------------------------------------------------
     МЕТОДЫ НАЧАЛЬНОГО ЭКРАНА (WELCOME GATE)
     -------------------------------------------------------------------------- */
  checkGateState() {
    const gate = document.getElementById("welcome-gate");
    if (!gate) return;
    const passed = localStorage.getItem("oge_auth_gate_passed");
    if (passed === "true") {
      gate.style.display = "none";
      document.body.style.overflow = "";
    } else {
      gate.style.display = "flex";
      document.body.style.overflow = "hidden";
      if (this.profile && this.profile.name && this.profile.name !== "Гость ОГЭ") {
        const inp = document.getElementById("gate-input-name");
        if (inp) inp.value = this.profile.name;
      }
    }
  },

  signInWithTelegram(prefillUsername) {
    // 1. Проверяем Telegram WebApp контекст (если сайт открыт внутри Telegram)
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      const u = window.Telegram.WebApp.initDataUnsafe.user;
      const fullName = [u.first_name, u.last_name].filter(Boolean).join(" ");
      const uname = u.username ? "@" + u.username : (fullName || "Telegram Пользователь");
      this.saveProfile({
        name: fullName || uname,
        role: "student",
        grade: "9 «А»",
        school: "МБОУ СОШ №6 им. Д.К. Потапова",
        avatar: u.photo_url ? `<img src="${u.photo_url}" style="width:22px;height:22px;border-radius:50%;">` : "✈️",
        telegram: u.username ? "@" + u.username : "",
        isGuest: false,
        authProvider: "telegram"
      });
      this.completeGate();
      alert(`🎉 Добро пожаловать, ${this.profile.name}! Вы успешно вошли через Telegram.`);
      return;
    }

    // 2. Если открыт начальный экран (Welcome Gate) — открываем вкладку Telegram
    const gate = document.getElementById("welcome-gate");
    if (gate && gate.style.display !== "none") {
      this.switchGateTab("telegram");
      if (prefillUsername) {
        const inp = document.getElementById("gate-tg-username");
        if (inp) inp.value = prefillUsername.replace(/^@/, '');
      }
      setTimeout(() => {
        const inp = document.getElementById("gate-tg-username");
        if (inp) inp.focus();
      }, 150);
      return;
    }

    // 3. Если уже внутри сайта — открываем модальное окно Telegram
    this.openProfileModal();
    this.renderModalContent("auth_telegram");
  },

  switchGateTab(tab) {
    const btnStudent = document.getElementById("gate-tab-student");
    const btnTelegram = document.getElementById("gate-tab-telegram");
    const btnTeacher = document.getElementById("gate-tab-teacher");
    const panelStudent = document.getElementById("gate-panel-student");
    const panelTelegram = document.getElementById("gate-panel-telegram");
    const panelTeacher = document.getElementById("gate-panel-teacher");

    if (btnStudent) btnStudent.classList.toggle("active", tab === "student");
    if (btnTelegram) btnTelegram.classList.toggle("active", tab === "telegram");
    if (btnTeacher) btnTeacher.classList.toggle("active", tab === "teacher");

    if (panelStudent) panelStudent.style.display = (tab === "student") ? "block" : "none";
    if (panelTelegram) panelTelegram.style.display = (tab === "telegram") ? "block" : "none";
    if (panelTeacher) panelTeacher.style.display = (tab === "teacher") ? "block" : "none";

    if (tab === "telegram") {
      setTimeout(() => {
        const inp = document.getElementById("gate-tg-username");
        if (inp) inp.focus();
      }, 100);
    }
  },

  submitGateTelegram(e) {
    if (e) e.preventDefault();
    const rawUname = document.getElementById("gate-tg-username")?.value.trim() || "";
    if (!rawUname) {
      alert("Укажите ваш никнейм в Telegram!");
      return;
    }
    const cleanUname = rawUname.startsWith("@") ? rawUname : "@" + rawUname;
    const grade = document.getElementById("gate-tg-grade")?.value || "9 «А»";
    const dispName = document.getElementById("gate-tg-displayname")?.value.trim() || cleanUname;

    this.saveProfile({
      name: dispName,
      role: "student",
      grade: grade,
      school: "МБОУ СОШ №6 им. Д.К. Потапова",
      avatar: "✈️",
      telegram: cleanUname,
      authProvider: "telegram",
      isGuest: false
    });

    this.completeGate();
  },

  selectGateAvatar(emoji, btn) {
    document.querySelectorAll(".gate-avatar-pill").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    const inp = document.getElementById("gate-input-avatar");
    if (inp) inp.value = emoji;
  },

  submitGateStudent(e) {
    e.preventDefault();
    const name = document.getElementById("gate-input-name").value.trim() || "Ученик";
    const grade = document.getElementById("gate-input-grade").value;
    const avatar = document.getElementById("gate-input-avatar").value || "🦊";

    this.saveProfile({
      name: name,
      role: "student",
      grade: grade,
      school: "МБОУ СОШ №6 им. Д.К. Потапова",
      avatar: avatar
    });

    this.completeGate();
  },

  submitGateTeacher(e) {
    e.preventDefault();
    const name = document.getElementById("gate-teacher-name").value.trim() || "Преподаватель";
    const code = document.getElementById("gate-teacher-code").value.trim().toLowerCase();
    const errEl = document.getElementById("gate-teacher-err");

    if (code !== "учитель2026") {
      if (errEl) {
        errEl.textContent = "⛔ Неверное кодовое слово! Доступ открыт только для учителей (учитель2026).";
        errEl.style.display = "block";
      }
      return;
    }

    if (errEl) errEl.style.display = "none";

    this.saveProfile({
      name: name,
      role: "teacher",
      grade: "9А",
      school: "МБОУ СОШ №6 им. Д.К. Потапова",
      avatar: "👨‍🏫"
    });

    this.completeGate();

    // Преподавателя сразу переключаем на вкладку кабинета!
    if (typeof App !== "undefined" && App.switchView) {
      setTimeout(() => App.switchView("cabinet"), 100);
    }
  },

  completeGate() {
    localStorage.setItem("oge_auth_gate_passed", "true");
    const gate = document.getElementById("welcome-gate");
    if (gate) {
      gate.classList.add("fade-out");
      setTimeout(() => {
        gate.style.display = "none";
        document.body.style.overflow = "";
      }, 350);
    }
    if (typeof Gamification !== "undefined" && Gamification.recordActivity) {
      Gamification.recordActivity();
    }
  },

  showGateScreen() {
    localStorage.removeItem("oge_auth_gate_passed");
    const gate = document.getElementById("welcome-gate");
    if (gate) {
      gate.classList.remove("fade-out");
      gate.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
    this.closeProfileModal();
  }
};
