/**
 * ОГЭ-ВЫЖИМКА — Геймификация, стрики дней 🔥, ачивки и Личный кабинет (Фичи 4 и 5)
 */

const Gamification = {
  streakData: {
    lastActiveDate: null,
    currentStreak: 1,
    bestStreak: 1,
    totalActiveDays: 1,
    history: []
  },

  achievements: [
    {
      id: "first_test",
      icon: "🎯",
      title: "Первый рубеж",
      desc: "Решить свой первый тест в экспресс-тренажёре",
      unlocked: false,
      progress: 0,
      max: 1
    },
    {
      id: "topic_scholar",
      icon: "📚",
      title: "Знаток кодификатора",
      desc: "Отметить 10 изученных тем по кодификатору ФИПИ",
      unlocked: false,
      progress: 0,
      max: 10
    },
    {
      id: "streak_3",
      icon: "🔥",
      title: "Ударный темп",
      desc: "Удерживать серию занятий 3 дня подряд",
      unlocked: false,
      progress: 1,
      max: 3
    },
    {
      id: "perfect_score",
      icon: "💯",
      title: "Снайпер ФИПИ",
      desc: "Завершить любой тест со 100% правильных ответов",
      unlocked: false,
      progress: 0,
      max: 1
    },
    {
      id: "mistake_master",
      icon: "🛠️",
      title: "Работа над ошибками",
      desc: "Исправить 3 задания в персональном банке ошибок",
      unlocked: false,
      progress: 0,
      max: 3
    },
    {
      id: "grade_5",
      icon: "👑",
      title: "Кандидат в отличники",
      desc: "Рассчитать баллы на школьную оценку «5» в калькуляторе",
      unlocked: false,
      progress: 0,
      max: 1
    },
    {
      id: "potapov_school",
      icon: "🏫",
      title: "Патриот 6 школы",
      desc: "Изучить материалы школы №6 им. Д.К. Потапова",
      unlocked: false,
      progress: 0,
      max: 1
    }
  ],

  init() {
    this.loadStreak();
    this.loadAchievements();
    this.recordActivity(); // фиксируем вход сегодня
    this.updateHeaderUI();
    this.checkAchievements();
  },

  getTodayString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },

  getYesterdayString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },

  loadStreak() {
    try {
      const saved = localStorage.getItem("oge_streak_data");
      if (saved) {
        this.streakData = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Streak load error:", e);
    }
  },

  saveStreak() {
    try {
      localStorage.setItem("oge_streak_data", JSON.stringify(this.streakData));
    } catch (e) {}
    this.updateHeaderUI();
  },

  recordActivity() {
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    if (!this.streakData.lastActiveDate) {
      this.streakData.lastActiveDate = today;
      this.streakData.currentStreak = 1;
      this.streakData.bestStreak = 1;
      this.streakData.totalActiveDays = 1;
      this.saveStreak();
      return;
    }

    if (this.streakData.lastActiveDate === today) {
      // Уже занимался сегодня
      return;
    }

    if (this.streakData.lastActiveDate === yesterday) {
      // Занимался вчера — продлеваем стрик!
      this.streakData.currentStreak = (this.streakData.currentStreak || 1) + 1;
      if (this.streakData.currentStreak > (this.streakData.bestStreak || 1)) {
        this.streakData.bestStreak = this.streakData.currentStreak;
      }
      this.streakData.totalActiveDays = (this.streakData.totalActiveDays || 1) + 1;
    } else {
      // Пропустил более одного дня — сброс на 1
      this.streakData.currentStreak = 1;
      this.streakData.totalActiveDays = (this.streakData.totalActiveDays || 1) + 1;
    }

    this.streakData.lastActiveDate = today;
    this.saveStreak();
    this.checkAchievements();
  },

  getStreakData() {
    return this.streakData;
  },

  updateHeaderUI() {
    const badge = document.getElementById("header-streak-badge");
    if (!badge) return;

    const streak = this.streakData.currentStreak || 1;
    badge.innerHTML = `🔥 ${streak} ${this.getStreakWord(streak)}`;
    badge.style.display = "inline-flex";
    badge.title = `Ваша серия занятий: ${streak} ${this.getStreakWord(streak)} подряд! Заходите каждый день.`;
  },

  getStreakWord(num) {
    const n = Math.abs(num) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return "дней";
    if (n1 > 1 && n1 < 5) return "дня";
    if (n1 === 1) return "день";
    return "дней";
  },

  loadAchievements() {
    try {
      const saved = localStorage.getItem("oge_achievements");
      if (saved) {
        const parsed = JSON.parse(saved);
        this.achievements = this.achievements.map(a => {
          const match = parsed.find(p => p.id === a.id);
          return match ? { ...a, unlocked: match.unlocked, progress: match.progress } : a;
        });
      }
    } catch (e) {}
  },

  saveAchievements() {
    try {
      localStorage.setItem("oge_achievements", JSON.stringify(this.achievements));
    } catch (e) {}
  },

  unlockAchievement(id) {
    const ach = this.achievements.find(a => a.id === id);
    if (ach && !ach.unlocked) {
      ach.unlocked = true;
      ach.progress = ach.max;
      this.saveAchievements();
      this.showToastAchievement(ach);
      if (typeof CabinetView !== "undefined") CabinetView.render();
    }
  },

  showToastAchievement(ach) {
    const toast = document.createElement("div");
    toast.className = "achievement-toast-notice";
    toast.innerHTML = `
      <div class="toast-icon">${ach.icon}</div>
      <div class="toast-body">
        <div class="toast-header">Новое достижение разблокировано!</div>
        <div class="toast-title">${ach.title}</div>
        <div class="toast-desc">${ach.desc}</div>
      </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("show");
    }, 50);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  },

  checkAchievements() {
    // 1. Проверка стрика
    const streakAch = this.achievements.find(a => a.id === "streak_3");
    if (streakAch) {
      streakAch.progress = Math.min(this.streakData.currentStreak, 3);
      if (this.streakData.currentStreak >= 3) this.unlockAchievement("streak_3");
    }

    // 2. Проверка тем кодификатора
    try {
      const checkedTopics = JSON.parse(localStorage.getItem("oge_studied_topics") || "[]");
      const topicAch = this.achievements.find(a => a.id === "topic_scholar");
      if (topicAch) {
        topicAch.progress = Math.min(checkedTopics.length, 10);
        if (checkedTopics.length >= 10) this.unlockAchievement("topic_scholar");
      }
    } catch (e) {}

    // 3. Проверка банка ошибок
    if (typeof MistakesBank !== "undefined") {
      const resolvedCount = MistakesBank.mistakes.filter(m => m.resolved).length;
      const mAch = this.achievements.find(a => a.id === "mistake_master");
      if (mAch) {
        mAch.progress = Math.min(resolvedCount, 3);
        if (resolvedCount >= 3) this.unlockAchievement("mistake_master");
      }
    }

    this.saveAchievements();
  },

  getUnlockedAchievementsCount() {
    return this.achievements.filter(a => a.unlocked).length;
  }
};

/**
 * Кабинет Ученика и Преподавателя (Фича 5)
 */
const CabinetView = {
  render() {
    const container = document.getElementById("cabinet-main-content");
    if (!container) return;

    const profile = (typeof Auth !== "undefined" && Auth.profile) ? Auth.profile : {
      name: "Ученик",
      role: "student",
      school: "СОШ №6 им. Д.К. Потапова",
      grade: "9А",
      avatar: "🦊",
      isGuest: true
    };

    const isTeacher = profile.role === "teacher";
    const streak = Gamification.getStreakData();
    const mistakes = (typeof MistakesBank !== "undefined") ? MistakesBank.mistakes : [];
    const unresolvedMistakes = mistakes.filter(m => !m.resolved).length;
    const resolvedMistakes = mistakes.filter(m => m.resolved).length;

    let checkedTopics = [];
    try {
      checkedTopics = JSON.parse(localStorage.getItem("oge_studied_topics") || "[]");
    } catch (e) {}

    container.innerHTML = `
      <div class="cabinet-container">
        <!-- Шапка личного кабинета -->
        <div class="cabinet-header-card">
          <div class="cabinet-user-main">
            <div class="cabinet-avatar-huge">${profile.avatar || '🦊'}</div>
            <div class="cabinet-user-info">
              <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
                <h2 class="cabinet-user-name">${profile.name}</h2>
                <span class="role-pill-badge student">🎒 Ученик 9 класса</span>
                <span class="profile-status-badge ${profile.isGuest ? 'guest-badge' : 'cloud-badge'}">
                  ${profile.isGuest ? 'Локальный режим' : '☁️ Синхронизировано'}
                </span>
              </div>

              <div class="cabinet-meta-line">
                <span>🏫 ${profile.school || 'СОШ №6 им. Д.К. Потапова'}</span> • 
                <span>Класс: <strong>${profile.grade || '9А'}</strong></span> •
                <span>Цель на ОГЭ: <strong>Оценка «${profile.targetGrade || '5'}»</strong></span>
              </div>
            </div>
          </div>

          <div class="cabinet-top-actions">
            <button class="btn-action" style="background: var(--accent-blue); color: white;" onclick="Auth.openProfileModal()">
              ⚙️ Настроить профиль
            </button>
          </div>
        </div>

        ${this.renderStudentDashboard(streak, checkedTopics.length, unresolvedMistakes, resolvedMistakes)}

        <!-- Секция достижений и наград -->
        <div class="cabinet-section-card">
          <div class="sec-card-header">
            <div>
              <h3 class="sec-card-title">🏆 Достижения и награды</h3>
              <p class="sec-card-sub">Открыто ${Gamification.getUnlockedAchievementsCount()} из ${Gamification.achievements.length} бейджей</p>
            </div>
          </div>

          <div class="achievements-grid">
            ${Gamification.achievements.map(ach => `
              <div class="achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}">
                <div class="ach-icon-wrap">${ach.icon}</div>
                <div class="ach-info">
                  <div class="ach-title">${ach.title}</div>
                  <div class="ach-desc">${ach.desc}</div>
                  <div class="ach-progress-bar-wrap">
                    <div class="ach-progress-fill" style="width: ${(ach.progress / ach.max) * 100}%"></div>
                  </div>
                  <div class="ach-progress-lbl">${ach.progress} / ${ach.max} ${ach.unlocked ? '✓ Открыто!' : ''}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderStudentDashboard(streak, topicsCount, unresolvedCount, resolvedCount) {
    return `
      <!-- Статистические виджеты ученика -->
      <div class="cabinet-stats-row">
        <div class="cab-stat-card">
          <div class="cab-stat-icon">🔥</div>
          <div class="cab-stat-data">
            <div class="cab-stat-num">${streak.currentStreak || 1}</div>
            <div class="cab-stat-lbl">Дней стрик подряд</div>
            <div class="cab-stat-hint">Рекорд: ${streak.bestStreak || 1} дн.</div>
          </div>
        </div>

        <div class="cab-stat-card">
          <div class="cab-stat-icon">📚</div>
          <div class="cab-stat-data">
            <div class="cab-stat-num">${topicsCount}</div>
            <div class="cab-stat-lbl">Тем изучено</div>
            <div class="cab-stat-hint">по кодификатору ФИПИ</div>
          </div>
        </div>

        <div class="cab-stat-card">
          <div class="cab-stat-icon">❌</div>
          <div class="cab-stat-data">
            <div class="cab-stat-num" style="color: ${unresolvedCount > 0 ? 'var(--accent-red)' : 'var(--accent-green)'};">
              ${unresolvedCount}
            </div>
            <div class="cab-stat-lbl">Ошибок на разбор</div>
            <div class="cab-stat-hint">Исправлено: ${resolvedCount}</div>
          </div>
        </div>

        <div class="cab-stat-card">
          <div class="cab-stat-icon">🎓</div>
          <div class="cab-stat-data">
            <div class="cab-stat-num">5 / 5</div>
            <div class="cab-stat-lbl">Целевой балл</div>
            <div class="cab-stat-hint">ОГЭ 2026/2027</div>
          </div>
        </div>
      </div>

      <!-- Быстрые действия ученика -->
      <div class="cabinet-quick-actions">
        <button class="btn-action" style="background: var(--accent-blue); color: white;" onclick="CabinetView.generateStudentReport()">
          📋 Сформировать отчёт для учителя
        </button>
        <button class="btn-action btn-secondary" onclick="App.switchView('mistakes')">
          🚀 Работа над ошибками (${unresolvedCount})
        </button>
        <button class="btn-action btn-secondary" onclick="App.switchView('tracker')">
          📚 Чеклист кодификатора тем
        </button>
      </div>

      <div id="student-report-output" style="display: none; margin-top: 1rem;"></div>
    `;
  },

  generateStudentReport() {
    const out = document.getElementById("student-report-output");
    if (!out) return;

    const p = Auth.profile || {};
    const streak = Gamification.getStreakData();
    let checkedTopics = [];
    try {
      checkedTopics = JSON.parse(localStorage.getItem("oge_studied_topics") || "[]");
    } catch (e) {}
    const unresolvedCount = (typeof MistakesBank !== "undefined") ? MistakesBank.getUnresolvedCount() : 0;
    const resolvedCount = (typeof MistakesBank !== "undefined") ? (MistakesBank.mistakes.length - unresolvedCount) : 0;

    const text = `
🎓 ОТЧЁТ О САМОПОДГОТОВКЕ К ОГЭ (Выжимка.Экспресс)
Ученик: ${p.name || 'Ученик'} (${p.grade || '9А'}, ${p.school || 'СОШ №6 им. Д.К. Потапова'})
Дата формирования: ${new Date().toLocaleDateString('ru-RU')}

📊 Ключевые показатели:
• Серия непрерывных занятий (стрик): ${streak.currentStreak || 1} ${Gamification.getStreakWord(streak.currentStreak || 1)}
• Изучено ключевых тем по кодификатору ФИПИ: ${checkedTopics.length} тем
• Заданий в банке ошибок: ${unresolvedCount} требует повторения, ${resolvedCount} успешно отработано
• Целевая оценка на экзамене: «${p.targetGrade || '5'}»

Отчёт сгенерирован автоматически на платформе подготовки к ОГЭ.
    `.trim();

    out.style.display = "block";
    out.innerHTML = `
      <div class="callout callout-tip" style="margin-top: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <strong>📄 Ваш готовый отчёт для учителя:</strong>
          <button class="btn-action-sm" onclick="navigator.clipboard.writeText(decodeURIComponent('${encodeURIComponent(text)}')); alert('Отчёт скопирован в буфер обмена!');">
            📋 Скопировать текст
          </button>
        </div>
        <pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.85rem; background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">${text}</pre>
      </div>
    `;
  },

  copyClassSummary() {
    const summary = `Сводка по 9А классу СОШ №6 (ОГЭ 2026/2027): Средняя готовность 74%. Топ ошибок: ОДЗ корней, знаки в неравенствах, -Н-/-НН-.`;
    navigator.clipboard.writeText(summary).then(() => {
      alert("Сводка успеваемости класса скопирована!");
    });
  },

  printTeacherClassReport() {
    window.print();
  }
};
