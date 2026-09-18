/**
 * ОГЭ-ВЫЖИМКА — Главное приложение (Контроллер, Навигация, Поиск, Темы, Трекер)
 */

const App = {
  currentSubject: "math",
  currentCategory: "all",
  currentView: "home", // home | cheatsheet | demos | quiz | calculator | tracker | school | guide | store
  currentDemosSubtab: "fipi", // fipi | umschool | prokudskoe
  currentDemoPartFilter: "all", // all | part1 | part2
  allDemoSolutionsExpanded: false,
  theme: "dark",
  lastUpdateDate: "18.09",
  topicsSearchQuery: "",
  topicsPartFilter: "all", // all | part1 | part2
  topicsStatusFilter: "all", // all | pending | completed
  collapsedTopicSections: {},

  init() {
    this.updateLastChangeBadge();
    this.updateCategoryCounts();
    this.initTheme();
    this.initTimer();
    this.renderHomeSubjects();
    this.renderSubjectCards();

    // Инициализация модулей аккаунтов, банка ошибок и геймификации
    if (typeof Auth !== "undefined" && Auth.init) Auth.init();
    if (typeof MistakesBank !== "undefined" && MistakesBank.init) MistakesBank.init();
    if (typeof Gamification !== "undefined" && Gamification.init) Gamification.init();

    const hash = (window.location.hash || "").replace("#", "");
    if (hash.startsWith("demos")) {
      const parts = hash.split("-");
      if (parts[1]) this.currentDemosSubtab = parts[1];
      this.switchView("demos", false);
    } else if (hash && ["home", "cheatsheet", "guide", "quiz", "calculator", "tracker", "store", "school", "mistakes", "cabinet"].includes(hash)) {
      this.switchView(hash, false);
    } else {
      this.switchView("home", false);
    }
    this.bindGlobalEvents();
    this.initSearch();
    Calculator.init();
  },

  updateCategoryCounts() {
    if (typeof SUBJECTS_DATA === "undefined") return;
    const subjects = Object.values(SUBJECTS_DATA);
    const counts = {
      all: subjects.length,
      mandatory: subjects.filter(s => s.category === "mandatory").length,
      technical: subjects.filter(s => s.category === "technical").length,
      humanities: subjects.filter(s => s.category === "humanities").length,
      science: subjects.filter(s => s.category === "science").length
    };

    document.querySelectorAll(".category-pill, .filter-pill").forEach(pill => {
      const cat = pill.dataset.category;
      if (!cat) return;
      if (cat === "all") pill.textContent = `Все предметы (${counts.all})`;
      else if (cat === "mandatory") pill.textContent = `Обязательные (${counts.mandatory})`;
      else if (cat === "technical") pill.textContent = `Технические (${counts.technical})`;
      else if (cat === "humanities") pill.textContent = `Гуманитарные (${counts.humanities})`;
      else if (cat === "science") pill.textContent = `Естественные (${counts.science})`;
    });
  },

  updateLastChangeBadge() {
    const label = document.querySelector("#last-update-badge .update-label");
    if (!label) return;

    let displayDate = this.lastUpdateDate || "18.09";

    // Автоматическое определение реальной даты последнего изменения файлов сайта
    try {
      if (document.lastModified) {
        const modDate = new Date(document.lastModified);
        if (!isNaN(modDate.getTime()) && modDate.getFullYear() >= 2024) {
          const day = String(modDate.getDate()).padStart(2, "0");
          const month = String(modDate.getMonth() + 1).padStart(2, "0");
          displayDate = `${day}.${month}`;
        }
      }
    } catch (e) {
      console.warn("Could not parse document.lastModified, using fallback date:", e);
    }

    label.textContent = `${displayDate} последнее изменение`;
  },

  /* --------------------------------------------------------------------------
     Темизация (Тёмная / Светлая тема)
     -------------------------------------------------------------------------- */
  initTheme() {
    const savedTheme = localStorage.getItem("oge_theme") || "dark";
    this.setTheme(savedTheme);
  },

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("oge_theme", theme);
    const themeIcon = document.getElementById("theme-toggle-icon");
    if (themeIcon) {
      themeIcon.textContent = (theme === "dark") ? "☀️" : "🌙";
    }
  },

  toggleTheme() {
    this.setTheme(this.theme === "dark" ? "light" : "dark");
  },

  /* --------------------------------------------------------------------------
     Таймер обратного отсчета до ОГЭ
     -------------------------------------------------------------------------- */
  initTimer() {
    const timerElem = document.getElementById("oge-countdown-timer");
    if (!timerElem) return;

    // Примерная дата старта основных дней ОГЭ (конец мая)
    const now = new Date();
    let currentYear = now.getFullYear();
    let targetDate = new Date(currentYear, 4, 21, 10, 0, 0); // 21 мая 10:00
    if (now > targetDate) {
      targetDate = new Date(currentYear + 1, 4, 21, 10, 0, 0);
    }

    const updateTimer = () => {
      const diff = targetDate - new Date();
      if (diff <= 0) {
        timerElem.textContent = "Экзамены начались!";
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      timerElem.textContent = `${days}д ${hours}ч ${minutes}м`;
    };

    updateTimer();
    setInterval(updateTimer, 60000);
  },

  /* --------------------------------------------------------------------------
     Навигация по предметам и фильтры категорий
     -------------------------------------------------------------------------- */
  renderHomeSubjects() {
    const container = document.getElementById("home-subjects-grid");
    if (!container) return;

    if (typeof SUBJECTS_DATA === "undefined") return;

    const subjects = Object.values(SUBJECTS_DATA).filter(subj => {
      if (this.currentCategory === "all") return true;
      return subj.category === this.currentCategory;
    });

    const categoryNames = {
      mandatory: "Обязательный",
      technical: "Технический",
      humanities: "Гуманитарный",
      science: "Естественный"
    };

    container.innerHTML = subjects.map(subj => {
      const catName = categoryNames[subj.category] || "Предмет ОГЭ";
      const duration = subj.examInfo ? subj.examInfo.duration.split("(")[0].trim() : "Экзамен";
      const qCount = subj.examInfo ? subj.examInfo.questionsCount.split("(")[0].trim() : "";
      const maxScore = subj.examInfo ? subj.examInfo.maxScore : 0;
      const passThreshold = subj.examInfo ? subj.examInfo.passThreshold.split("(")[0].trim() : "";

      return `
        <div class="home-subject-card" style="--card-accent: ${subj.accentColor};" onclick="App.openSubject('${subj.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')App.openSubject('${subj.id}')">
          <div class="home-subject-header">
            <div class="home-subject-icon-box" style="background: ${subj.accentColor}18; color: ${subj.accentColor}; border: 1px solid ${subj.accentColor}33;">
              <span class="home-subject-icon">${subj.icon}</span>
            </div>
            <div class="home-subject-badges">
              <span class="home-cat-badge home-cat-${subj.category}">${catName}</span>
              <span class="home-score-badge">макс. ${maxScore} б.</span>
            </div>
          </div>
          <div class="home-subject-body">
            <h3 class="home-subject-title">${subj.title}</h3>
            <p class="home-subject-desc">${subj.tagline || 'Теория, формулы, ловушки и тренировочные задания ФИПИ'}</p>
            <div class="home-subject-meta">
              <span class="meta-item" title="Длительность экзамена"><span class="meta-icon">⏱</span> ${duration}</span>
              <span class="meta-item" title="Количество заданий в КИМ"><span class="meta-icon">📝</span> ${qCount}</span>
            </div>
          </div>
          <div class="home-subject-footer">
            <span class="home-open-link">Перейти к материалам <span class="arrow">→</span></span>
            <span class="home-pass-threshold" title="${subj.examInfo ? subj.examInfo.passThreshold : ''}">Порог: ${passThreshold}</span>
          </div>
        </div>
      `;
    }).join("");
  },

  renderSubjectCards() {
    const container = document.getElementById("subjects-grid");
    if (!container) return;

    if (typeof SUBJECTS_DATA === "undefined") return;

    const subjects = Object.values(SUBJECTS_DATA).filter(subj => {
      if (this.currentCategory === "all") return true;
      return subj.category === this.currentCategory;
    });

    container.innerHTML = subjects.map(subj => {
      const isActive = (subj.id === this.currentSubject);
      const qCount = subj.examInfo ? subj.examInfo.questionsCount.split(' ')[0] : '';
      const maxScore = subj.examInfo ? subj.examInfo.maxScore : '';
      return `
        <button type="button" 
             class="subject-chip subject-card ${isActive ? 'active' : ''}" 
             style="--chip-accent: ${subj.accentColor};"
             onclick="App.openSubject('${subj.id}')"
             title="${subj.title} — ${subj.examInfo ? subj.examInfo.questionsCount : ''}, макс. ${maxScore} б.">
          <span class="chip-icon">${subj.icon}</span>
          <span class="chip-title">${subj.title}</span>
          <span class="chip-badge">${qCount} зад.</span>
        </button>
      `;
    }).join("");
  },

  getCategoryLabel(category) {
    switch (category) {
      case "mandatory": return "Обязательный";
      case "technical": return "Технический";
      case "humanities": return "Гуманитарный";
      case "science": return "Естественный";
      default: return "ОГЭ";
    }
  },

  filterCategory(category) {
    this.currentCategory = category;
    document.querySelectorAll(".category-pill, .filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.dataset.category === category);
    });
    this.renderHomeSubjects();
    this.renderSubjectCards();
  },

  openSubject(subjectId) {
    if (typeof SUBJECTS_DATA !== "undefined" && SUBJECTS_DATA[subjectId]) {
      this.currentSubject = subjectId;
      const subj = SUBJECTS_DATA[subjectId];
      const crumb = document.getElementById("subject-crumb-title");
      if (crumb) crumb.textContent = subj.title;

      // Синхронизируем калькулятор
      if (typeof Calculator !== "undefined") {
        Calculator.currentSubjectId = subjectId;
        const calcSelect = document.getElementById("calc-subject-select");
        if (calcSelect) {
          calcSelect.value = subjectId;
          Calculator.updateSubjectUI();
          Calculator.calculate();
        }
      }
    }
    this.switchView("cheatsheet", false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  goToHome(scroll = true) {
    this.switchView("home", false);
    this.renderHomeSubjects();
    if (scroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  selectSubject(subjectId) {
    this.openSubject(subjectId);
  },

  /* --------------------------------------------------------------------------
     Плавная прокрутка экрана с физической анимацией (requestAnimationFrame)
     Гарантированно работает во всех браузерах и на смартфонах плавно и без рывков
     -------------------------------------------------------------------------- */
  smoothScrollTo(targetY, duration = 650) {
    const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const diff = targetY - startY;

    if (Math.abs(diff) < 5) return; // Уже на нужной высоте

    let startTime = null;

    // Плавная кубическая кривая ускорения и замедления (ease-in-out-cubic)
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      const currentPos = Math.round(startY + diff * ease);
      window.scrollTo(0, currentPos);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  },

  scrollToViewContent(viewName) {
    setTimeout(() => {
      requestAnimationFrame(() => {
        const viewTabs = document.querySelector(".view-tabs");
        const activeSection = document.getElementById(`view-${viewName}`);
        const header = document.querySelector(".site-header");
        const headerHeight = header ? header.offsetHeight : 65;

        // Точка назначения: панель вкладок и начало контента прямо под шапкой
        const target = viewTabs || activeSection;
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const targetY = Math.max(0, Math.round(currentY + rect.top - headerHeight - 12));

        this.smoothScrollTo(targetY, 650);
      });
    }, 60);
  },

  /* --------------------------------------------------------------------------
     Переключение представлений (Linear / Vercel Navigation Bar & Dropdown)
     -------------------------------------------------------------------------- */
  switchView(viewName, autoScroll = false) {
    this.currentView = viewName;

    // Синхронизация всех кнопок навигации и вкладок
    document.querySelectorAll(".view-tab-btn, .nav-item-link, .nav-dropdown-item, .nav-capsule-btn").forEach(btn => {
      if (btn.dataset && btn.dataset.view) {
        btn.classList.toggle("active", btn.dataset.view === viewName);
      }
    });

    // Индикатор родительской кнопки "Ещё", если активен раздел из выпадающего меню
    const moreDropdownViews = ["demos", "tracker", "guide", "school", "store", "cabinet"];
    const moreTrigger = document.querySelector(".nav-more-trigger");
    if (moreTrigger) {
      moreTrigger.classList.toggle("active", moreDropdownViews.includes(viewName));
    }

    // Закрываем выпадающее меню
    this.closeMoreMenu();

    // Мобильная нижняя навигация
    document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });

    // Переключение секций
    const viewSections = ["home", "cheatsheet", "demos", "guide", "quiz", "calculator", "tracker", "store", "school", "mistakes", "cabinet"];
    viewSections.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.style.display = (v === viewName) ? "block" : "none";
    });

    // Управляем видимостью блока предметов: скрываем в школе, гиде, магазине, ошибках, кабинете, главной
    const subjectsNav = document.querySelector(".subjects-nav-section");
    if (subjectsNav) {
      subjectsNav.style.display = (viewName === "home" || viewName === "school" || viewName === "guide" || viewName === "store" || viewName === "mistakes" || viewName === "cabinet") ? "none" : "block";
    }

    // Обновляем хлебные крошки при переходе в cheatsheet
    if (viewName === "cheatsheet" && typeof SUBJECTS_DATA !== "undefined" && SUBJECTS_DATA[this.currentSubject]) {
      const crumb = document.getElementById("subject-crumb-title");
      if (crumb) crumb.textContent = SUBJECTS_DATA[this.currentSubject].title;
    }

    // Достижение при посещении раздела школы №6
    if (viewName === "school" && typeof Gamification !== "undefined") {
      Gamification.unlockAchievement("potapov_school");
    }

    this.renderCurrentView();

    // Плавная прокрутка, только если автоскролл явно запрошен и страница уже прокручена
    if (autoScroll && window.scrollY > 200) {
      this.scrollToViewContent(viewName);
    }
  },

  toggleMoreMenu(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const menu = document.getElementById("nav-more-dropdown");
    if (menu) {
      menu.classList.toggle("open");
    }
  },

  closeMoreMenu() {
    const menu = document.getElementById("nav-more-dropdown");
    if (menu) {
      menu.classList.remove("open");
    }
  },

  renderCurrentView() {
    if (this.currentView === "home") {
      this.renderHomeSubjects();
    } else if (this.currentView === "cheatsheet") {
      this.renderCheatsheet();
    } else if (this.currentView === "demos") {
      this.renderDemosView();
    } else if (this.currentView === "guide") {
      this.renderGuide();
    } else if (this.currentView === "quiz") {
      QuizEngine.start(this.currentSubject);
    } else if (this.currentView === "calculator") {
      Calculator.updateSubjectUI();
      Calculator.calculate();
    } else if (this.currentView === "tracker") {
      this.renderTracker();
    } else if (this.currentView === "store") {
      this.renderStoreView();
    } else if (this.currentView === "mistakes") {
      if (typeof MistakesBank !== "undefined" && MistakesBank.render) MistakesBank.render();
    } else if (this.currentView === "cabinet") {
      if (typeof CabinetView !== "undefined" && CabinetView.render) CabinetView.render();
    }
  },

  /* --------------------------------------------------------------------------
     Отображение раздела «Выжимка»
     -------------------------------------------------------------------------- */
  renderCheatsheet() {
    const subj = SUBJECTS_DATA[this.currentSubject];
    if (!subj) return;

    // Баннер предмета
    const banner = document.getElementById("cheatsheet-banner-container");
    if (banner) {
      banner.innerHTML = `
        <div class="subject-banner">
          <div class="subject-banner-left">
            <div class="subject-banner-icon">${subj.icon}</div>
            <div>
              <h2 class="subject-banner-title">${subj.title} — Выжимка ОГЭ</h2>
              <div class="subject-banner-desc">${subj.tagline}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem;">
                ⏱ Длительность: ${subj.examInfo.duration} • Максимум: ${subj.examInfo.maxScore} баллов • Порог сдачи: ${subj.examInfo.passThreshold}
              </div>
            </div>
          </div>
          <div class="subject-banner-actions">
            <button class="btn-action" onclick="App.switchView('demos')" title="Полная демоверсия ФИПИ, варианты Умскул и задачи села Прокудское" style="background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; border: none; font-weight: 700;">
              📋 Пробники и демо-версии
            </button>
            <button class="btn-action btn-kim-action" onclick="App.openKimModal('${subj.id}')" title="Просмотр официальных сборников КИМ ФИПИ и ориентировочных цен">
              📚 КИМы и цены
            </button>
            <button class="btn-action btn-umschool-action" onclick="App.openUmschoolModal('${subj.id}')" title="Пробник ОГЭ от преподавателей Умскул">
              🟣 Пробник Умскул
            </button>
            <button class="btn-action" onclick="App.switchView('quiz')">
              🎯 Пройти тест
            </button>
            <button class="btn-action" onclick="window.print()">
              🖨️ Печать
            </button>
          </div>
        </div>
      `;
    }

    // Блок разрешенных материалов ФИПИ
    const fipiArea = document.getElementById("cheatsheet-fipi-container");
    if (fipiArea) {
      fipiArea.innerHTML = `
        <div class="callout callout-fipi">
          <strong>📋 Что официально разрешено брать на экзамен по предмету «${subj.title}»:</strong>
          <ul style="margin: 0.4rem 0 0 1.2rem; font-size: 0.88rem;">
            ${subj.fipiAllowed.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    // Блок ловушек и частых ошибок
    const trapsArea = document.getElementById("cheatsheet-traps-container");
    if (trapsArea) {
      trapsArea.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            ⚠️ Опасные ловушки и частые ошибки (Где 70% теряют баллы)
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 0.85rem;">
            ${subj.traps.map(trap => `
              <div class="callout callout-warning" style="margin: 0;">
                <strong>${trap.title}</strong>
                <p style="margin-top: 0.35rem; font-size: 0.86rem;">${trap.text}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Блок официальных демоверсий ФИПИ и тренировочных пробников
    const demosArea = document.getElementById("cheatsheet-demos-container");
    const demoData = (typeof DEMOS_DATA !== "undefined") ? DEMOS_DATA[this.currentSubject] : null;
    const fullDemo = (typeof FULL_DEMOS_DATA !== "undefined") ? FULL_DEMOS_DATA[this.currentSubject] : null;
    if (demosArea && demoData) {
      demosArea.innerHTML = `
        <div class="demo-mock-banner">
          <div class="demo-mock-top">
            <div>
              <span class="demo-mock-badge">📑 ФИПИ & 4ЕГЭ & УМСКУЛ & ПРОКУДСКОЕ</span>
              <h3 class="demo-mock-title">Демоверсии, тренировочные пробники и КИМы</h3>
              <p class="demo-mock-desc">${demoData.overview}</p>
            </div>
            <div class="demo-mock-actions">
              <button class="btn-action demo-action-btn" onclick="App.switchView('demos'); App.setDemosSubtab('fipi');" style="background: var(--accent-blue); color: white;">
                📑 Полная демоверсия ФИПИ (${fullDemo ? fullDemo.totalTasks : 25} зад.)
              </button>
              <button class="btn-action btn-umschool-action" onclick="App.switchView('demos'); App.setDemosSubtab('umschool');">
                🟣 Пробник Умскул
              </button>
              <button class="btn-action btn-prokudskoe-action" onclick="App.switchView('demos'); App.setDemosSubtab('prokudskoe');" style="background: #10b981; color: white; border-color: #10b981;">
                📍 Задачи с. Прокудское
              </button>
              <button class="btn-action btn-kim-action" onclick="App.openKimModal('${this.currentSubject}')">
                📚 КИМы и цены
              </button>
              <a href="${fullDemo ? fullDemo.sourceUrl : demoData.fipiDocUrl}" target="_blank" rel="noopener noreferrer" class="btn-action demo-fipi-link">
                📥 4ЕГЭ / ФИПИ ↗
              </a>
            </div>
          </div>
          ${demoData.fipiChanges ? `
            <div class="demo-changes-box">
              <strong>🔔 Спецификация 2026/2027:</strong> ${demoData.fipiChanges}
            </div>
          ` : ''}
        </div>
      `;
    }

    // Карточки выжимок теории и формул
    const cardsArea = document.getElementById("cheatsheet-cards-container");
    if (cardsArea) {
      cardsArea.innerHTML = `
        <div class="cheatsheet-grid">
          ${subj.cheatsheets.map(section => `
            <div class="cheatsheet-card">
              <div class="cheatsheet-header">
                <div class="cheatsheet-title">
                  <span>📌</span>
                  <span>${section.sectionTitle}</span>
                </div>
              </div>
              <div class="cheatsheet-body">
                ${section.items.map(item => `
                  <div class="formula-item">
                    <div class="formula-title">${item.title}</div>
                    <div class="formula-math">${item.formula.replace(/\n/g, '<br>')}</div>
                    ${item.note ? `<div class="formula-note">${item.note}</div>` : ''}
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }
  },

  /* --------------------------------------------------------------------------
     Отображение Полного Каталога Тем ОГЭ (ФИПИ и Решу ОГЭ)
     -------------------------------------------------------------------------- */
  renderTracker() {
    const container = document.getElementById("tracker-content");
    const subj = SUBJECTS_DATA[this.currentSubject];
    if (!container || !subj) return;

    // Проверяем наличие базы данных тем
    const hasTopicsData = (typeof OGE_TOPICS_DATA !== "undefined" && OGE_TOPICS_DATA[this.currentSubject]);
    const topicsData = hasTopicsData ? OGE_TOPICS_DATA[this.currentSubject] : null;

    // Считываем сохраненный прогресс
    const savedProgress = JSON.parse(localStorage.getItem("oge_topics_tracker") || "{}");
    const subjectProgress = savedProgress[this.currentSubject] || [];

    // Подсчет статистики
    let allTopicsList = [];
    if (topicsData) {
      topicsData.sections.forEach(sec => {
        allTopicsList = allTopicsList.concat(sec.topics);
      });
    } else {
      allTopicsList = subj.checklist || [];
    }

    const totalCount = allTopicsList.length;
    const completedCount = allTopicsList.filter(t => subjectProgress.includes(t.id)).length;
    const pendingCount = totalCount - completedCount;
    const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    const part1Count = allTopicsList.filter(t => t.part === "part1").length;
    const part2Count = allTopicsList.filter(t => t.part === "part2").length;

    // Фильтрация тем
    const q = (this.topicsSearchQuery || "").trim().toLowerCase();

    const filterTopic = (t) => {
      const isCompleted = subjectProgress.includes(t.id);

      // Фильтр по статусу
      if (this.topicsStatusFilter === "completed" && !isCompleted) return false;
      if (this.topicsStatusFilter === "pending" && isCompleted) return false;

      // Фильтр по части
      if (this.topicsPartFilter === "part1" && t.part !== "part1") return false;
      if (this.topicsPartFilter === "part2" && t.part !== "part2") return false;

      // Фильтр по поисковому запросу
      if (q) {
        const titleMatch = (t.title || "").toLowerCase().includes(q);
        const tasksMatch = (t.tasks || "").toLowerCase().includes(q);
        const codeMatch = (t.fipiCode || "").toLowerCase().includes(q);
        const tipMatch = (t.tip || "").toLowerCase().includes(q);
        const termsMatch = (t.keyTerms || []).some(k => k.toLowerCase().includes(q));

        // Поиск по номеру задания (например "задание 6", "№6", "6")
        const taskNumQuery = q.replace(/[^0-9]/g, "");
        const taskNumMatch = taskNumQuery && t.taskNums && t.taskNums.includes(parseInt(taskNumQuery, 10));

        if (!titleMatch && !tasksMatch && !codeMatch && !tipMatch && !termsMatch && !taskNumMatch) {
          return false;
        }
      }

      return true;
    };

    // Подсчет отфильтрованных тем
    const filteredTotal = allTopicsList.filter(filterTopic).length;

    container.innerHTML = `
      <div class="tracker-container">
        <!-- Главная карточка темы -->
        <div class="tracker-hero">
          <div style="flex: 1; min-width: 280px;">
            <div class="topics-hero-badge">
              <span>📚 Официальный кодификатор ФИПИ и Решу ОГЭ</span>
              <span class="topics-hero-tag">Только программа 9 класса</span>
            </div>
            <h2 class="topics-hero-title">Каталог всех тем ОГЭ: ${subj.icon} ${subj.title}</h2>
            <p class="topics-hero-desc">
              Все контролируемые элементы содержания (КЭС), спецификации ФИПИ и тематический классификатор «Решу ОГЭ». 
              Отмечайте изученные темы галочками — прогресс сохраняется в памяти браузера.
            </p>
            <div class="topics-doc-source">
              <span>📄 Документ: ${topicsData ? topicsData.fipiDoc : 'Кодификатор ФИПИ'}</span>
              <span style="margin-left: 0.5rem; color: var(--accent-cyan);">• КИМ: ${subj.examInfo.questionsCount} (макс. ${subj.examInfo.maxScore} б.)</span>
            </div>
          </div>

          <div class="tracker-stats-group">
            <div class="tracker-circle-progress">${pct}%</div>
            <div class="tracker-stats-labels">
              <div>Изучено тем:</div>
              <strong>${completedCount} из ${totalCount}</strong>
              <div class="tracker-stats-sub">
                Часть 1: ${allTopicsList.filter(t => t.part === 'part1' && subjectProgress.includes(t.id)).length}/${part1Count} • Часть 2: ${allTopicsList.filter(t => t.part === 'part2' && subjectProgress.includes(t.id)).length}/${part2Count}
              </div>
            </div>
          </div>
        </div>

        <!-- Быстрый выбор предмета прямо в каталоге тем -->
        <div class="topics-subject-selector">
          <span class="topics-selector-label">Предмет:</span>
          ${Object.values(SUBJECTS_DATA).map(s => `
            <button class="topics-subj-btn ${s.id === this.currentSubject ? 'active' : ''}" onclick="App.selectSubject('${s.id}')">
              <span>${s.icon}</span>
              <span>${s.title}</span>
            </button>
          `).join("")}
        </div>

        <!-- Поисковая панель и фильтры тем -->
        <div class="topics-toolbar">
          <div class="topics-search-box">
            <span class="topics-search-icon">🔍</span>
            <input 
              type="text" 
              id="topics-search-input" 
              class="topics-search-input" 
              placeholder="Поиск темы по названию, коду ФИПИ, ключевым словам или номеру задания (например: 21, дроби, ОВР, Ньютон)..." 
              value="${this.topicsSearchQuery.replace(/"/g, '&quot;')}" 
              oninput="App.onTopicsSearch(this.value)"
            >
            ${this.topicsSearchQuery ? `
              <button class="topics-search-clear" onclick="App.clearTopicsSearch()" title="Очистить поиск">✕</button>
            ` : ''}
          </div>

          <div class="topics-filter-row">
            <div class="topics-filter-pills">
              <button class="topics-filter-btn ${this.topicsPartFilter === 'all' && this.topicsStatusFilter === 'all' ? 'active' : ''}" onclick="App.resetAllTopicsFilters()">
                Все темы (${totalCount})
              </button>
              <button class="topics-filter-btn ${this.topicsPartFilter === 'part1' ? 'active' : ''}" onclick="App.setTopicsPartFilter('part1')">
                Часть 1 (${part1Count})
              </button>
              <button class="topics-filter-btn ${this.topicsPartFilter === 'part2' ? 'active' : ''}" onclick="App.setTopicsPartFilter('part2')">
                Часть 2 (${part2Count})
              </button>
              <button class="topics-filter-btn ${this.topicsStatusFilter === 'pending' ? 'active' : ''}" onclick="App.setTopicsStatusFilter('pending')">
                Не изучено (${pendingCount})
              </button>
              <button class="topics-filter-btn ${this.topicsStatusFilter === 'completed' ? 'active' : ''}" onclick="App.setTopicsStatusFilter('completed')">
                Изучено (${completedCount})
              </button>
            </div>

            <div class="topics-actions-row">
              <button class="btn-action topics-tool-btn" onclick="App.expandAllTopicSections()" title="Развернуть все разделы">
                ▼ Развернуть все
              </button>
              <button class="btn-action topics-tool-btn" onclick="App.collapseAllTopicSections()" title="Свернуть все разделы">
                ▲ Свернуть все
              </button>
              <button class="btn-action topics-tool-btn reset-btn" onclick="App.resetTopicsProgress('${this.currentSubject}')" title="Сбросить отметки">
                ↺ Сбросить
              </button>
            </div>
          </div>

          <!-- Индикатор поиска -->
          ${q || this.topicsPartFilter !== 'all' || this.topicsStatusFilter !== 'all' ? `
            <div class="topics-search-info">
              <span>Найдено: <strong>${filteredTotal}</strong> из ${totalCount} тем</span>
              ${q ? `<span>по запросу «<em>${this.escapeHtml(q)}</em>»</span>` : ''}
              <button class="topics-reset-inline" onclick="App.resetAllTopicsFilters()">Сбросить фильтры</button>
            </div>
          ` : ''}
        </div>

        <!-- Контейнер со списком разделов и тем -->
        <div id="topics-sections-container">
          ${hasTopicsData ? this.renderTopicSections(topicsData, subjectProgress, filterTopic, q) : this.renderFallbackChecklist(subj, subjectProgress)}
        </div>
      </div>
    `;
  },

  renderTopicSections(topicsData, subjectProgress, filterTopic, query) {
    let html = "";
    let visibleSectionsCount = 0;

    topicsData.sections.forEach(section => {
      const visibleTopics = section.topics.filter(filterTopic);
      if (visibleTopics.length === 0) return; // Скрываем пустые разделы при активном поиске

      visibleSectionsCount++;
      const isCollapsed = !query && this.collapsedTopicSections[section.id];
      const sectionTotal = section.topics.length;
      const sectionCompleted = section.topics.filter(t => subjectProgress.includes(t.id)).length;
      const sectionPct = sectionTotal > 0 ? Math.round((sectionCompleted / sectionTotal) * 100) : 0;

      html += `
        <div class="topic-section-card ${isCollapsed ? 'collapsed' : ''}" id="section-card-${section.id}">
          <div class="topic-section-header" onclick="App.toggleTopicSection('${section.id}')">
            <div class="topic-section-title-wrap">
              <span class="topic-section-chevron">${isCollapsed ? '▶' : '▼'}</span>
              <span class="topic-section-name">${this.highlightMatch(section.name, query)}</span>
              <span class="topic-section-fipicode">КЭС ${section.fipiCode}</span>
            </div>
            <div class="topic-section-meta">
              <span class="topic-section-count">${sectionCompleted}/${sectionTotal} изучено (${sectionPct}%)</span>
            </div>
          </div>

          <div class="topic-section-body" style="${isCollapsed ? 'display: none;' : 'display: block;'}">
            <div class="topics-grid-list">
              ${visibleTopics.map(topic => {
                const isChecked = subjectProgress.includes(topic.id);
                const firstTask = (topic.taskNums && topic.taskNums.length > 0) ? topic.taskNums[0] : 1;
                return `
                  <div class="topic-card-item ${isChecked ? 'completed' : ''}" id="topic-item-${topic.id}">
                    <div class="topic-item-main">
                      <label class="topic-checkbox-wrap" onclick="event.stopPropagation();">
                        <input 
                          type="checkbox" 
                          class="topic-checkbox" 
                          ${isChecked ? 'checked' : ''} 
                          onchange="App.toggleTopicProgress('${topic.id}')"
                        >
                        <span class="topic-checkmark"></span>
                      </label>

                      <div class="topic-item-content">
                        <div class="topic-item-header">
                          <span class="topic-fipi-tag">КЭС ${topic.fipiCode}</span>
                          <span class="topic-title-text">${this.highlightMatch(topic.title, query)}</span>
                        </div>

                        <!-- Бейджи задания и сложности -->
                        <div class="topic-badges-row">
                          <button class="topic-task-badge" onclick="App.jumpToDemoTask(${firstTask})" title="Перейти к тренировке в демоверсии">
                            <span>🎯</span>
                            <strong>${topic.tasks}</strong>
                            <span class="task-badge-arrow">↗</span>
                          </button>
                          <span class="topic-part-badge ${topic.part}">
                            ${topic.part === 'part1' ? 'Часть 1 (краткий ответ)' : 'Часть 2 (развернутый ответ)'}
                          </span>
                          <span class="topic-diff-badge ${topic.difficulty}">
                            ${topic.difficulty}
                          </span>
                        </div>

                        <!-- Ключевые термины и формулы -->
                        ${topic.keyTerms && topic.keyTerms.length > 0 ? `
                          <div class="topic-terms-row">
                            <span class="terms-label">Ключевые формулы и правила:</span>
                            <div class="terms-pills">
                              ${topic.keyTerms.map(term => `
                                <span class="term-pill"><code>${this.highlightMatch(term, query)}</code></span>
                              `).join("")}
                            </div>
                          </div>
                        ` : ''}

                        <!-- Совет от эксперта ФИПИ и Решу ОГЭ -->
                        ${topic.tip ? `
                          <div class="topic-tip-box">
                            <span class="tip-bulb">💡</span>
                            <div>
                              <strong>Совет от экспертов ФИПИ / Решу ОГЭ:</strong>
                              <p>${this.highlightMatch(topic.tip, query)}</p>
                            </div>
                          </div>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      `;
    });

    if (visibleSectionsCount === 0) {
      html = `
        <div class="topics-empty-state">
          <div style="font-size: 2.5rem; margin-bottom: 0.6rem;">🔍</div>
          <h3>Темы не найдены</h3>
          <p>По запросу «${this.escapeHtml(query)}» ничего не найдено. Попробуйте изменить формулировку или сбросить фильтры.</p>
          <button class="btn-action" style="margin-top: 1rem;" onclick="App.resetAllTopicsFilters()">Сбросить поиск</button>
        </div>
      `;
    }

    return html;
  },

  renderFallbackChecklist(subj, subjectProgress) {
    return `
      <div class="tracker-section">
        <div class="tracker-section-title">
          <span>Чек-лист основных навыков</span>
          <button class="btn-action" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;" onclick="App.resetTopicsProgress('${this.currentSubject}')">
            Сбросить
          </button>
        </div>
        <div>
          ${(subj.checklist || []).map(item => {
            const isChecked = subjectProgress.includes(item.id);
            return `
              <div class="tracker-item ${isChecked ? 'completed' : ''}" onclick="App.toggleTopicProgress('${item.id}')">
                <input type="checkbox" class="tracker-checkbox" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); App.toggleTopicProgress('${item.id}')">
                <span class="tracker-label">${item.text}</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  },

  onTopicsSearch(val) {
    this.topicsSearchQuery = val;
    // Обновляем только список тем и блок поиска, чтобы не сбивать фокус ввода
    const listContainer = document.getElementById("topics-sections-container");
    const toolbar = document.querySelector(".topics-toolbar");
    if (listContainer) {
      const topicsData = (typeof OGE_TOPICS_DATA !== "undefined" && OGE_TOPICS_DATA[this.currentSubject]);
      const savedProgress = JSON.parse(localStorage.getItem("oge_topics_tracker") || "{}");
      const subjectProgress = savedProgress[this.currentSubject] || [];
      const q = val.trim().toLowerCase();

      const filterTopic = (t) => {
        const isCompleted = subjectProgress.includes(t.id);
        if (this.topicsStatusFilter === "completed" && !isCompleted) return false;
        if (this.topicsStatusFilter === "pending" && isCompleted) return false;
        if (this.topicsPartFilter === "part1" && t.part !== "part1") return false;
        if (this.topicsPartFilter === "part2" && t.part !== "part2") return false;
        if (q) {
          const titleMatch = (t.title || "").toLowerCase().includes(q);
          const tasksMatch = (t.tasks || "").toLowerCase().includes(q);
          const codeMatch = (t.fipiCode || "").toLowerCase().includes(q);
          const tipMatch = (t.tip || "").toLowerCase().includes(q);
          const termsMatch = (t.keyTerms || []).some(k => k.toLowerCase().includes(q));
          const taskNumQuery = q.replace(/[^0-9]/g, "");
          const taskNumMatch = taskNumQuery && t.taskNums && t.taskNums.includes(parseInt(taskNumQuery, 10));
          if (!titleMatch && !tasksMatch && !codeMatch && !tipMatch && !termsMatch && !taskNumMatch) return false;
        }
        return true;
      };

      listContainer.innerHTML = topicsData ? this.renderTopicSections(topicsData, subjectProgress, filterTopic, q) : "";
    }
  },

  clearTopicsSearch() {
    this.topicsSearchQuery = "";
    this.renderTracker();
  },

  setTopicsPartFilter(part) {
    this.topicsPartFilter = (this.topicsPartFilter === part) ? "all" : part;
    this.renderTracker();
  },

  setTopicsStatusFilter(status) {
    this.topicsStatusFilter = (this.topicsStatusFilter === status) ? "all" : status;
    this.renderTracker();
  },

  resetAllTopicsFilters() {
    this.topicsSearchQuery = "";
    this.topicsPartFilter = "all";
    this.topicsStatusFilter = "all";
    this.renderTracker();
  },

  toggleTopicProgress(topicId) {
    const savedProgress = JSON.parse(localStorage.getItem("oge_topics_tracker") || "{}");
    const subjectList = savedProgress[this.currentSubject] || [];

    const index = subjectList.indexOf(topicId);
    if (index > -1) {
      subjectList.splice(index, 1);
    } else {
      subjectList.push(topicId);
    }

    savedProgress[this.currentSubject] = subjectList;
    localStorage.setItem("oge_topics_tracker", JSON.stringify(savedProgress));

    // Геймификация и стрики
    if (typeof Gamification !== "undefined") {
      Gamification.recordActivity();
      let totalChecked = 0;
      Object.values(savedProgress).forEach(arr => { if (Array.isArray(arr)) totalChecked += arr.length; });
      const topicAch = Gamification.achievements.find(a => a.id === "topic_scholar");
      if (topicAch) {
        topicAch.progress = Math.min(totalChecked, 10);
        if (totalChecked >= 10) Gamification.unlockAchievement("topic_scholar");
        Gamification.saveAchievements();
      }
    }

    this.renderTracker();
  },

  toggleTopicSection(secId) {
    this.collapsedTopicSections[secId] = !this.collapsedTopicSections[secId];
    const card = document.getElementById(`section-card-${secId}`);
    if (card) {
      const isCollapsed = this.collapsedTopicSections[secId];
      card.classList.toggle("collapsed", isCollapsed);
      const chevron = card.querySelector(".topic-section-chevron");
      const body = card.querySelector(".topic-section-body");
      if (chevron) chevron.textContent = isCollapsed ? '▶' : '▼';
      if (body) body.style.display = isCollapsed ? 'none' : 'block';
    }
  },

  expandAllTopicSections() {
    this.collapsedTopicSections = {};
    document.querySelectorAll(".topic-section-card").forEach(card => {
      card.classList.remove("collapsed");
      const chevron = card.querySelector(".topic-section-chevron");
      const body = card.querySelector(".topic-section-body");
      if (chevron) chevron.textContent = '▼';
      if (body) body.style.display = 'block';
    });
  },

  collapseAllTopicSections() {
    if (typeof OGE_TOPICS_DATA !== "undefined" && OGE_TOPICS_DATA[this.currentSubject]) {
      OGE_TOPICS_DATA[this.currentSubject].sections.forEach(sec => {
        this.collapsedTopicSections[sec.id] = true;
      });
    }
    document.querySelectorAll(".topic-section-card").forEach(card => {
      card.classList.add("collapsed");
      const chevron = card.querySelector(".topic-section-chevron");
      const body = card.querySelector(".topic-section-body");
      if (chevron) chevron.textContent = '▶';
      if (body) body.style.display = 'none';
    });
  },

  resetTopicsProgress(subjectId) {
    if (!confirm(`Сбросить весь прогресс по предмету ${SUBJECTS_DATA[subjectId].title}?`)) return;
    const savedProgress = JSON.parse(localStorage.getItem("oge_topics_tracker") || "{}");
    savedProgress[subjectId] = [];
    localStorage.setItem("oge_topics_tracker", JSON.stringify(savedProgress));
    this.renderTracker();
  },

  jumpToDemoTask(taskNum) {
    this.currentDemosSubtab = "fipi";
    this.currentDemoPartFilter = "all";
    this.switchView("demos");
    setTimeout(() => {
      const el = document.getElementById(`demo-task-${taskNum}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight-flash");
        setTimeout(() => el.classList.remove("highlight-flash"), 2500);
      }
    }, 120);
  },

  highlightMatch(text, query) {
    if (!query || !text) return text;
    try {
      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      return text.replace(regex, '<mark class="topic-highlight">$1</mark>');
    } catch (e) {
      return text;
    }
  },

  escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  },

  /* --------------------------------------------------------------------------
     Глобальный поиск
     -------------------------------------------------------------------------- */
  initSearch() {
    const input = document.getElementById("global-search-input");
    const overlay = document.getElementById("search-results-overlay");
    const resultsContainer = document.getElementById("search-results-list");

    if (!input || !overlay || !resultsContainer) return;

    input.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (q.length < 2) {
        overlay.classList.remove("open");
        return;
      }

      const results = [];
      Object.values(SUBJECTS_DATA).forEach(subj => {
        // Поиск по ловушкам
        subj.traps.forEach(trap => {
          if (trap.title.toLowerCase().includes(q) || trap.text.toLowerCase().includes(q)) {
            results.push({
              subjectId: subj.id,
              subjectTitle: subj.title,
              subjectIcon: subj.icon,
              title: `⚠️ Ловушка: ${trap.title}`,
              snippet: trap.text
            });
          }
        });

        // Поиск по формулам и выжимкам
        subj.cheatsheets.forEach(section => {
          section.items.forEach(item => {
            if (item.title.toLowerCase().includes(q) || item.formula.toLowerCase().includes(q) || (item.note && item.note.toLowerCase().includes(q))) {
              results.push({
                subjectId: subj.id,
                subjectTitle: subj.title,
                subjectIcon: subj.icon,
                title: `${section.sectionTitle} → ${item.title}`,
                snippet: `${item.formula} | ${item.note || ''}`
              });
            }
          });
        });
      });

      // Поиск по краеведческим задачам с. Прокудское
      if (typeof PROKUDSKOE_TASKS_DATA !== "undefined" && PROKUDSKOE_TASKS_DATA.subjects) {
        Object.entries(PROKUDSKOE_TASKS_DATA.subjects).forEach(([subId, data]) => {
          data.tasks.forEach(task => {
            if (task.text.toLowerCase().includes(q) || task.location.toLowerCase().includes(q) || task.badge.toLowerCase().includes(q)) {
              results.push({
                subjectId: subId,
                subjectTitle: data.subjectTitle,
                subjectIcon: data.icon,
                targetView: "demos",
                targetSubtab: "prokudskoe",
                title: `📍 с. Прокудское: ${task.badge}`,
                snippet: `${task.location} — ${task.text.substring(0, 120)}...`
              });
            }
          });
        });
      }

      // Поиск по полной демоверсии ФИПИ
      if (typeof FULL_DEMOS_DATA !== "undefined") {
        Object.entries(FULL_DEMOS_DATA).forEach(([subId, demo]) => {
          demo.tasks.forEach(task => {
            if (task.question.toLowerCase().includes(q) || task.topic.toLowerCase().includes(q)) {
              results.push({
                subjectId: subId,
                subjectTitle: demo.subjectTitle,
                subjectIcon: demo.icon,
                targetView: "demos",
                targetSubtab: "fipi",
                title: `📑 Демоверсия КИМ №${task.num}: ${task.topic}`,
                snippet: task.question.substring(0, 120) + "..."
              });
            }
          });
        });
      }

      // Поиск по официальным темам ФИПИ из кодификатора
      if (typeof OGE_TOPICS_DATA !== "undefined") {
        Object.entries(OGE_TOPICS_DATA).forEach(([subId, subjData]) => {
          if (!subjData || !subjData.sections) return;
          subjData.sections.forEach(sec => {
            sec.topics.forEach(t => {
              const inTitle = (t.title || "").toLowerCase().includes(q);
              const inTasks = (t.tasks || "").toLowerCase().includes(q);
              const inCode = (t.fipiCode || "").toLowerCase().includes(q);
              const inTip = (t.tip || "").toLowerCase().includes(q);
              const inTerms = (t.keyTerms || []).some(k => k.toLowerCase().includes(q));
              if (inTitle || inTasks || inCode || inTip || inTerms) {
                results.push({
                  subjectId: subId,
                  subjectTitle: subjData.title,
                  subjectIcon: subjData.icon,
                  targetView: "tracker",
                  title: `📚 Тема КЭС ${t.fipiCode}: ${t.title}`,
                  snippet: `${t.tasks} (${t.difficulty}) | ${t.tip || t.keyTerms.join(', ')}`
                });
              }
            });
          });
        });
      }

      overlay.classList.add("open");
      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
            Ничего не найдено по запросу «${e.target.value}». Попробуйте другое слово или формулу.
          </div>
        `;
      } else {
        resultsContainer.innerHTML = results.slice(0, 15).map(res => `
          <div class="search-item" onclick="App.goToSearchResult('${res.subjectId}', '${res.targetView || ''}', '${res.targetSubtab || ''}')">
            <div class="search-item-subject">${res.subjectIcon} ${res.subjectTitle}</div>
            <div class="search-item-title">${res.title}</div>
            <div class="search-item-snippet">${res.snippet}</div>
          </div>
        `).join("");
      }
    });

    // Закрытие при клике вне карточки
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  },

  goToSearchResult(subjectId, targetView, targetSubtab) {
    const overlay = document.getElementById("search-results-overlay");
    if (overlay) overlay.classList.remove("open");
    const input = document.getElementById("global-search-input");
    if (input) input.value = "";
    this.selectSubject(subjectId);
    if (targetView === "demos") {
      if (targetSubtab) this.currentDemosSubtab = targetSubtab;
      this.switchView("demos");
    } else if (targetView === "tracker") {
      this.switchView("tracker");
    } else {
      this.switchView("cheatsheet");
    }
  },

  /* --------------------------------------------------------------------------
     Модальное окно: Подготовка к ЕГЭ (В разработке)
     -------------------------------------------------------------------------- */
  openEgeModal() {
    const modal = document.getElementById("ege-modal");
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  },

  closeEgeModal(event) {
    if (event && event.target.id !== "ege-modal" && !event.target.classList.contains("modal-close-btn")) {
      return;
    }
    const modal = document.getElementById("ege-modal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  },

  /* --------------------------------------------------------------------------
     Модальное окно: Тренировочный пробник ОГЭ с разбором
     -------------------------------------------------------------------------- */
  openMockModal(subjectId) {
    const sId = subjectId || this.currentSubject;
    const demo = (typeof DEMOS_DATA !== "undefined") ? DEMOS_DATA[sId] : null;
    const modal = document.getElementById("mock-modal");
    const container = document.getElementById("mock-modal-content");
    if (!modal || !container || !demo) return;

    container.innerHTML = `
      <div class="mock-card-header">
        <span class="quiz-step-badge">ОГЭ 2025/2026 • ${demo.icon} ${demo.subjectTitle}</span>
        <h2 style="font-size: 1.35rem; font-weight: 800; margin: 0.5rem 0 0.25rem;">${demo.mockVariant.title}</h2>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">
          Тренировочные типовые задания формата КИМ ОГЭ. Выполните задание самостоятельно, а затем нажмите кнопку «Показать ответ и решение» для проверки.
        </p>
      </div>

      <div class="mock-tasks-list">
        ${demo.mockVariant.tasks.map((task, idx) => `
          <div class="mock-task-item">
            <div class="mock-task-top">
              <span class="mock-task-num">Задание №${task.num}</span>
              <span class="mock-task-topic">${task.topic}</span>
            </div>
            <div class="mock-task-text">${task.text.replace(/\n/g, '<br>')}</div>
            <div class="mock-task-actions">
              <button class="btn-action" style="font-size: 0.8rem;" onclick="App.toggleMockSolution('${idx}')">
                👁️ Показать ответ и решение
              </button>
            </div>
            <div id="mock-solution-${idx}" class="mock-solution-box" style="display: none;">
              <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 0.3rem;">
                ✓ Правильный ответ: <code style="background: var(--bg-tertiary); padding: 0.2rem 0.5rem; border-radius: 4px;">${task.answer}</code>
              </div>
              <div style="font-size: 0.88rem; color: var(--text-secondary);">
                <strong>Разбор решения:</strong> ${task.solution}
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div style="margin-top: 1.5rem; text-align: center;">
        <button class="btn-action" style="padding: 0.7rem 1.5rem; background: var(--accent-blue); color: white;" onclick="App.closeMockModal()">
          Закрыть пробник
        </button>
      </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  },

  closeMockModal(event) {
    if (event && event.target.id !== "mock-modal" && !event.target.classList.contains("modal-close-btn")) {
      return;
    }
    const modal = document.getElementById("mock-modal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  },

  toggleMockSolution(idx) {
    const box = document.getElementById(`mock-solution-${idx}`);
    if (box) {
      box.style.display = (box.style.display === "none") ? "block" : "none";
    }
  },

  /* --------------------------------------------------------------------------
     Модальное окно: Просмотр сборников КИМ ФИПИ и ориентировочных цен
     -------------------------------------------------------------------------- */
  openKimModal(subjectId) {
    const sId = subjectId || this.currentSubject;
    const kim = (typeof KIMS_DATA !== "undefined" && KIMS_DATA.subjects) ? KIMS_DATA.subjects[sId] : null;
    const modal = document.getElementById("kim-modal");
    const container = document.getElementById("kim-modal-content");
    if (!modal || !container || !kim) return;

    container.innerHTML = `
      <div class="kim-modal-header">
        <div class="kim-modal-badge">📚 Официальные сборники КИМ ФИПИ 2025/2026</div>
        <h2 style="font-size: 1.4rem; font-weight: 800; margin: 0.5rem 0 0.25rem;">
          ${kim.icon} ${kim.subjectTitle} — Печатные КИМы и цены
        </h2>
        <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
          <strong>Официальные авторы ФИПИ:</strong> ${kim.officialAuthors}
        </div>
        <div style="font-size: 0.84rem; color: var(--text-muted);">
          <strong>Издательство:</strong> ${kim.publisher}
        </div>
      </div>

      <div class="callout callout-fipi" style="margin: 1rem 0;">
        <strong>💡 Рекомендация экспертов ФИПИ:</strong>
        <p style="margin-top: 0.35rem; font-size: 0.86rem;">${kim.recommendation}</p>
      </div>

      <h3 style="font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.75rem;">
        Рекомендуемые форматы сборников и ориентировочные цены:
      </h3>
      <div class="kim-editions-list">
        ${kim.editions.map(ed => `
          <div class="kim-edition-card">
            <div class="kim-edition-top">
              <span class="kim-edition-format">${ed.format}</span>
              <span class="kim-edition-price">${ed.priceRange}</span>
            </div>
            <h4 class="kim-edition-title">${ed.bookTitle}</h4>
            <p class="kim-edition-desc">${ed.description}</p>
            <div class="kim-edition-meta">
              <span>📄 Объем: ~${ed.pages} стр.</span>
              <span>🎯 Назначение: ${ed.bestFor}</span>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="kim-modal-footer-buy">
        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.6rem;">
          Быстрый поиск и заказ книги на маркетплейсах:
        </div>
        <div class="kim-buy-buttons-grid">
          <a href="https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(kim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="kim-btn-wb">
            🟣 Найти на Wildberries
          </a>
          <a href="https://www.ozon.ru/search/?text=${encodeURIComponent(kim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="kim-btn-ozon">
            🔵 Найти на Ozon
          </a>
          <a href="https://market.yandex.ru/search?text=${encodeURIComponent(kim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="kim-btn-market">
            🟡 Найти на Яндекс Маркете
          </a>
          <a href="https://www.chitai-gorod.ru/search?phrase=${encodeURIComponent(kim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="kim-btn-chitai">
            🟢 В Читай-городе
          </a>
        </div>
        <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <button class="btn-action" onclick="App.closeKimModal(); App.switchView('store');" style="font-size: 0.85rem;">
            🏬 Посмотреть магазины в Новосибирской области →
          </button>
          <button class="btn-action" style="padding: 0.6rem 1.4rem; background: var(--accent-blue); color: white;" onclick="App.closeKimModal()">
            Закрыть
          </button>
        </div>
      </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  },

  closeKimModal(event) {
    if (event && event.target.id !== "kim-modal" && !event.target.classList.contains("modal-close-btn")) {
      return;
    }
    const modal = document.getElementById("kim-modal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  },

  /* --------------------------------------------------------------------------
     Модальное окно: Тренировочный пробник от ведущих преподавателей «Умскул»
     -------------------------------------------------------------------------- */
  openUmschoolModal(subjectId) {
    const sId = subjectId || this.currentSubject;
    const um = (typeof UMSCHOOL_DATA !== "undefined") ? UMSCHOOL_DATA[sId] : null;
    const modal = document.getElementById("umschool-modal");
    const container = document.getElementById("umschool-modal-content");
    if (!modal || !container || !um) return;

    container.innerHTML = `
      <div class="umschool-card-header">
        <div class="umschool-brand-badge">🟣 Онлайн-школа «Умскул» • ОГЭ 2025/2026</div>
        <h2 style="font-size: 1.35rem; font-weight: 800; margin: 0.5rem 0 0.25rem;">
          ${um.variantTitle}
        </h2>
        
        <div class="umschool-teacher-row">
          <div class="umschool-teacher-avatar">👨‍🏫</div>
          <div class="umschool-teacher-info">
            <div class="umschool-teacher-name">${um.teacher}</div>
            <div class="umschool-teacher-role">${um.teacherRole}</div>
          </div>
        </div>

        <div class="umschool-quote-box">
          ${um.teacherQuote}
        </div>
      </div>

      <div class="umschool-tasks-list">
        ${um.tasks.map((task, idx) => `
          <div class="umschool-task-item">
            <div class="umschool-task-top">
              <span class="mock-task-num">Задание №${task.num}</span>
              <span class="mock-task-topic">${task.topic}</span>
            </div>
            <div class="mock-task-text">${task.question.replace(/\n/g, '<br>')}</div>
            <div class="mock-task-actions">
              <button class="btn-action btn-umschool-reveal" onclick="App.toggleUmschoolSolution('${idx}')">
                👁️ Показать ответ, разбор и лайфхак Умскул
              </button>
            </div>
            <div id="umschool-solution-${idx}" class="umschool-solution-box" style="display: none;">
              <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 0.35rem;">
                ✓ Правильный ответ: <code style="background: var(--bg-tertiary); padding: 0.2rem 0.5rem; border-radius: 4px;">${task.answer}</code>
              </div>
              <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                <strong>Пошаговое решение:</strong><br>${task.solution.replace(/\n/g, '<br>')}
              </div>
              <div class="umschool-tip-pill">
                💡 <strong>Совет преподавателя:</strong> ${task.teacherTip}
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="umschool-modal-footer">
        <a href="${um.umschoolUrl}" target="_blank" rel="noopener noreferrer" class="btn-action umschool-official-link">
          🌐 Открыть открытые материалы предмета на сайте Умскул ↗
        </a>
        <button class="btn-action" style="padding: 0.6rem 1.4rem; background: var(--accent-blue); color: white;" onclick="App.closeUmschoolModal()">
          Закрыть пробник
        </button>
      </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  },

  closeUmschoolModal(event) {
    if (event && event.target.id !== "umschool-modal" && !event.target.classList.contains("modal-close-btn")) {
      return;
    }
    const modal = document.getElementById("umschool-modal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  },

  toggleUmschoolSolution(idx) {
    const box = document.getElementById(`umschool-solution-${idx}`);
    if (box) {
      box.style.display = (box.style.display === "none") ? "block" : "none";
    }
  },

  /* --------------------------------------------------------------------------
     Раздел: Пробники и демо-версии (4ЕГЭ, ФИПИ, Умскул, с. Прокудское)
     -------------------------------------------------------------------------- */
  renderDemosView() {
    const container = document.getElementById("demos-main-content");
    if (!container) return;

    const sId = this.currentSubject;
    const subj = SUBJECTS_DATA[sId];
    const fullDemo = (typeof FULL_DEMOS_DATA !== "undefined") ? FULL_DEMOS_DATA[sId] : null;
    const um = (typeof UMSCHOOL_DATA !== "undefined") ? UMSCHOOL_DATA[sId] : null;
    const prokudskoe = (typeof PROKUDSKOE_TASKS_DATA !== "undefined" && PROKUDSKOE_TASKS_DATA.subjects) ? PROKUDSKOE_TASKS_DATA.subjects[sId] : null;

    if (!subj) return;

    const totalTasksCount = fullDemo ? fullDemo.totalTasks : (subj.examInfo ? subj.examInfo.questionsCount : 25);
    const maxScoreVal = fullDemo ? fullDemo.maxScore : (subj.examInfo ? subj.examInfo.maxScore : 31);
    const durationVal = fullDemo ? fullDemo.duration : (subj.examInfo ? subj.examInfo.duration : "3 часа 55 минут");
    const sourceLink = fullDemo ? fullDemo.sourceUrl : "https://4ege.ru/gia-in-9/80292-demoversii-oge-2027-v2.html";

    let html = `
      <div class="demos-view-container">
        <!-- Верхний информационный баннер раздела -->
        <div class="demos-hero-header">
          <div class="demos-hero-badges-row">
            <span class="demos-badge-pill">📋 ОГЭ 2026/2027</span>
            <span class="demos-badge-pill official-pill">Официальный банк 4ЕГЭ & ФИПИ</span>
            <span class="demos-badge-pill umschool-pill">Онлайн-школа «Умскул»</span>
            <span class="demos-badge-pill local-pill">📍 Село Прокудское</span>
          </div>

          <h1 class="demos-hero-title">
            <span>${subj.icon}</span> ${subj.title} — Пробники и демо-версии
          </h1>
          <p class="demos-hero-subtitle">
            Полные официальные демонстрационные варианты со ВСЕМИ заданиями (от №1 до последнего) и критериями ФИПИ, тренировочные задания ведущих преподавателей Умскул и практико-ориентированные задачи села Прокудское.
          </p>

          <div class="demos-stats-bar">
            <div class="demos-stat-box">
              <span class="stat-num">${totalTasksCount}</span>
              <span class="stat-lbl">Заданий в КИМ</span>
            </div>
            <div class="demos-stat-box">
              <span class="stat-num">${maxScoreVal}</span>
              <span class="stat-lbl">Макс. балл</span>
            </div>
            <div class="demos-stat-box">
              <span class="stat-num">${durationVal.split(' ')[0]}</span>
              <span class="stat-lbl">${durationVal}</span>
            </div>
            <div class="demos-stat-action">
              <a href="${sourceLink}" target="_blank" rel="noopener noreferrer" class="btn-action demos-source-btn" title="Официальный источник демоверсий 4ЕГЭ">
                📥 Скачать КИМ с 4ЕГЭ ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Переключатель 3 подвкладок -->
        <div class="demos-subtabs-nav">
          <button class="demos-subtab-btn ${this.currentDemosSubtab === 'fipi' ? 'active' : ''}" onclick="App.setDemosSubtab('fipi')">
            📑 Полная демоверсия ФИПИ (${totalTasksCount} зад.)
          </button>
          <button class="demos-subtab-btn subtab-umschool ${this.currentDemosSubtab === 'umschool' ? 'active' : ''}" onclick="App.setDemosSubtab('umschool')">
            🟣 Вариант «Умскул» ${um ? `(${um.tasks.length} зад.)` : ''}
          </button>
          <button class="demos-subtab-btn subtab-prokudskoe ${this.currentDemosSubtab === 'prokudskoe' ? 'active' : ''}" onclick="App.setDemosSubtab('prokudskoe')">
            📍 Задачи с. Прокудское ${prokudskoe ? `(${prokudskoe.tasks.length} зад.)` : '✨'}
          </button>
        </div>
    `;

    if (this.currentDemosSubtab === "fipi") {
      html += this.renderFipiDemoSubtab(fullDemo, subj);
    } else if (this.currentDemosSubtab === "umschool") {
      html += this.renderUmschoolDemoSubtab(um, subj);
    } else if (this.currentDemosSubtab === "prokudskoe") {
      html += this.renderProkudskoeDemoSubtab(prokudskoe, subj);
    }

    html += `</div>`;
    container.innerHTML = html;
  },

  setDemosSubtab(subtab) {
    this.currentDemosSubtab = subtab;
    this.renderDemosView();
  },

  setDemoPartFilter(filter) {
    this.currentDemoPartFilter = filter;
    this.renderDemosView();
  },

  toggleAllDemoSolutions() {
    this.allDemoSolutionsExpanded = !this.allDemoSolutionsExpanded;
    const solutions = document.querySelectorAll(".demo-task-solution-box");
    solutions.forEach(box => {
      box.style.display = this.allDemoSolutionsExpanded ? "block" : "none";
    });
    const btn = document.getElementById("btn-toggle-all-solutions");
    if (btn) {
      btn.textContent = this.allDemoSolutionsExpanded ? "🙈 Свернуть все разборы" : "👁️ Развернуть все разборы";
    }
  },

  toggleDemoSolution(num) {
    const box = document.getElementById(`full-demo-solution-${num}`);
    if (box) {
      box.style.display = (box.style.display === "none" || !box.style.display) ? "block" : "none";
    }
  },

  checkTaskAnswer(num, rawExpected) {
    const input = document.getElementById(`demo-answer-input-${num}`);
    const feedback = document.getElementById(`demo-feedback-${num}`);
    if (!input || !feedback) return;

    const userVal = input.value.trim().toLowerCase().replace(/\s+/g, "");
    const expVal = decodeURIComponent(rawExpected).trim().toLowerCase().replace(/\s+/g, "");
    const possibleAnswers = expVal.split(";").map(s => s.trim());
    const isCorrect = possibleAnswers.some(ans => userVal === ans || userVal === ans.replace(",", "."));

    if (!userVal) {
      feedback.innerHTML = `<span style="color: var(--accent-orange);">⚠️ Введите ваш вариант ответа для быстрой проверки!</span>`;
      feedback.style.display = "block";
      return;
    }

    if (isCorrect) {
      feedback.innerHTML = `<span style="color: var(--accent-green); font-weight: 700;">✓ Верно! Ответ совпал с официальным ключом ФИПИ.</span>`;
      feedback.style.display = "block";
      input.style.borderColor = "var(--accent-green)";
    } else {
      feedback.innerHTML = `<span style="color: var(--accent-red); font-weight: 600;">✕ Не сошлось. Нажмите «Официальный ответ и решение» для разбора.</span>`;
      feedback.style.display = "block";
      input.style.borderColor = "var(--accent-red)";
    }
  },

  renderFipiDemoSubtab(fullDemo, subj) {
    if (!fullDemo || !fullDemo.tasks) {
      return `
        <div class="callout callout-warning">
          <strong>Демоверсия обновляется:</strong> Полный комплект заданий для предмета «${subj.title}» можно скачать напрямую с портала 
          <a href="https://4ege.ru/gia-in-9/80292-demoversii-oge-2027-v2.html" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); text-decoration: underline;">4ЕГЭ ↗</a>.
        </div>
      `;
    }

    let filteredTasks = fullDemo.tasks;
    if (this.currentDemoPartFilter === "part1") {
      filteredTasks = fullDemo.tasks.filter(t => t.part === 1);
    } else if (this.currentDemoPartFilter === "part2") {
      filteredTasks = fullDemo.tasks.filter(t => t.part === 2);
    }

    const part1Count = fullDemo.tasks.filter(t => t.part === 1).length;
    const part2Count = fullDemo.tasks.filter(t => t.part === 2).length;

    return `
      <!-- Предупреждение / Правило ФИПИ -->
      ${fullDemo.fipiRule ? `
        <div class="callout callout-warning" style="margin-bottom: 1rem;">
          ${fullDemo.fipiRule}
        </div>
      ` : ''}

      <!-- Панель фильтрации заданий -->
      <div class="demos-filter-toolbar">
        <div class="demos-part-pills">
          <button class="demos-part-pill ${this.currentDemoPartFilter === 'all' ? 'active' : ''}" onclick="App.setDemoPartFilter('all')">
            Все задания (${fullDemo.tasks.length})
          </button>
          <button class="demos-part-pill ${this.currentDemoPartFilter === 'part1' ? 'active' : ''}" onclick="App.setDemoPartFilter('part1')">
            Часть 1: Краткий ответ (${part1Count})
          </button>
          <button class="demos-part-pill ${this.currentDemoPartFilter === 'part2' ? 'active' : ''}" onclick="App.setDemoPartFilter('part2')">
            Часть 2: Развернутый ответ (${part2Count})
          </button>
        </div>

        <button id="btn-toggle-all-solutions" class="btn-action" onclick="App.toggleAllDemoSolutions()" style="font-size: 0.84rem; padding: 0.4rem 0.85rem;">
          ${this.allDemoSolutionsExpanded ? '🙈 Свернуть все разборы' : '👁️ Развернуть все разборы'}
        </button>
      </div>

      <!-- Список всех заданий -->
      <div class="demos-tasks-list">
        ${filteredTasks.map(task => `
          <div class="demo-task-card ${task.part === 2 ? 'part-2' : ''}">
            <div class="demo-task-top">
              <div class="demo-task-meta-left">
                <span class="demo-task-num-badge">№ ${task.num}</span>
                <span class="demo-task-part-badge ${task.part === 2 ? 'part2' : ''}">Часть ${task.part}</span>
                <span class="demo-task-topic">${task.topic}</span>
              </div>
              <span style="font-size: 0.78rem; color: var(--text-muted);">
                ${task.part === 1 ? '1 балл' : 'Развернутое решение'}
              </span>
            </div>

            <div class="demo-task-question">${task.question.replace(/\n/g, '<br>')}</div>

            <!-- Интерактивная самопроверка -->
            <div class="demo-task-interactive">
              <input type="text" id="demo-answer-input-${task.num}" class="demo-answer-input" placeholder="Введите ваш ответ для проверки...">
              <button class="demo-check-btn" onclick="App.checkTaskAnswer('${task.num}', '${encodeURIComponent(task.answer)}')">
                Проверить
              </button>
              <button class="btn-action demo-reveal-btn" onclick="App.toggleDemoSolution('${task.num}')">
                👁️ Официальный ответ и решение
              </button>
              <div id="demo-feedback-${task.num}" class="demo-feedback-text"></div>
            </div>

            <!-- Блок решения и ответа -->
            <div id="full-demo-solution-${task.num}" class="demo-task-solution-box" style="${this.allDemoSolutionsExpanded ? 'display: block;' : 'display: none;'}">
              <div class="demo-solution-answer-tag">
                ✓ Официальный ответ ФИПИ: <code>${task.answer}</code>
              </div>
              <div class="demo-solution-body">
                <strong>Пошаговое решение и критерии оценивания:</strong><br>
                ${task.solution.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div style="margin: 2rem 0; text-align: center;">
        <a href="${fullDemo.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn-action demos-source-btn">
          📥 Скачать официальный вариант КИМ на 4ЕГЭ ↗
        </a>
      </div>
    `;
  },

  renderUmschoolDemoSubtab(um, subj) {
    if (!um || !um.tasks) {
      return `
        <div class="callout callout-warning">
          <strong>Вариант Умскул готовится:</strong> Открытые тренировочные материалы онлайн-школы можно найти на 
          <a href="https://umschool.net" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); text-decoration: underline;">сайте Умскул ↗</a>.
        </div>
      `;
    }

    return `
      <div class="umschool-card-header" style="border: 1px solid rgba(139, 92, 246, 0.35); background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.08)); border-radius: var(--radius-lg); padding: 1.4rem; margin-bottom: 1.25rem;">
        <div class="umschool-brand-badge">🟣 Онлайн-школа «Умскул» • ОГЭ 2026/2027</div>
        <h2 style="font-size: 1.4rem; font-weight: 800; margin: 0.6rem 0 0.4rem; color: var(--text-primary);">
          ${um.variantTitle}
        </h2>
        
        <div class="umschool-teacher-row" style="display: flex; align-items: center; gap: 0.85rem; margin: 0.85rem 0;">
          <div class="umschool-teacher-avatar" style="font-size: 2rem; background: var(--bg-card); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(139, 92, 246, 0.4);">👨‍🏫</div>
          <div class="umschool-teacher-info">
            <div class="umschool-teacher-name" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">${um.teacher}</div>
            <div class="umschool-teacher-role" style="font-size: 0.82rem; color: var(--text-muted);">${um.teacherRole}</div>
          </div>
        </div>

        <div class="umschool-quote-box" style="font-style: italic; background: var(--bg-card); border-left: 3px solid #a855f7; padding: 0.75rem 1rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.5rem;">
          ${um.teacherQuote}
        </div>
      </div>

      <div class="umschool-tasks-list">
        ${um.tasks.map((task, idx) => `
          <div class="demo-task-card">
            <div class="demo-task-top">
              <div class="demo-task-meta-left">
                <span class="demo-task-num-badge" style="background: linear-gradient(135deg, #7c3aed, #9333ea);">№ ${task.num}</span>
                <span class="demo-task-topic">${task.topic}</span>
              </div>
              <span class="demos-badge-pill umschool-pill">Умскул</span>
            </div>

            <div class="demo-task-question">${task.question.replace(/\n/g, '<br>')}</div>

            <div class="demo-task-interactive">
              <input type="text" id="demo-answer-input-um-${idx}" class="demo-answer-input" placeholder="Введите ответ...">
              <button class="demo-check-btn" onclick="App.checkTaskAnswer('um-${idx}', '${encodeURIComponent(task.answer)}')">
                Проверить
              </button>
              <button class="btn-action demo-reveal-btn" onclick="App.toggleDemoSolution('um-${idx}')">
                👁️ Показать ответ, решение и лайфхак Умскул
              </button>
              <div id="demo-feedback-um-${idx}" class="demo-feedback-text"></div>
            </div>

            <div id="full-demo-solution-um-${idx}" class="demo-task-solution-box" style="border-left-color: #a855f7;">
              <div class="demo-solution-answer-tag" style="color: #c084fc;">
                ✓ Правильный ответ Умскул: <code>${task.answer}</code>
              </div>
              <div class="demo-solution-body">
                <strong>Пошаговое решение:</strong><br>
                ${task.solution.replace(/\n/g, '<br>')}
              </div>
              <div style="margin-top: 0.75rem; padding: 0.6rem 0.9rem; background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-primary);">
                💡 <strong>Лайфхак от преподавателя:</strong> ${task.teacherTip}
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div style="margin: 2rem 0; text-align: center;">
        <a href="${um.umschoolUrl}" target="_blank" rel="noopener noreferrer" class="btn-action" style="background: linear-gradient(135deg, #7c3aed, #9333ea); color: white; border: none; font-weight: 700; padding: 0.65rem 1.4rem;">
          🌐 Открыть открытые уроки на портале Умскул ↗
        </a>
      </div>
    `;
  },

  renderProkudskoeDemoSubtab(prokudskoe, subj) {
    const sId = this.currentSubject;

    let contentHtml = "";

    if (prokudskoe && prokudskoe.tasks) {
      contentHtml = `
        <div class="prokudskoe-hero-card">
          <span class="prokudskoe-hero-badge">📍 с. Прокудское • Коченёвский район</span>
          <h2 class="prokudskoe-hero-title">${prokudskoe.sectionTitle}</h2>
          <p class="prokudskoe-hero-desc">
            ${prokudskoe.intro || 'Практические задания формата реального экзамена ОГЭ, привязанные к объектам села Прокудское.'}
          </p>

          <div class="prokudskoe-meta-grid">
            <div class="prokudskoe-meta-item">🏫 <strong>Школа:</strong> МКОУ Чикская СОШ №6 им. Д.К. Потапова</div>
            <div class="prokudskoe-meta-item">🏛️ <strong>Культура:</strong> МБУ КДЦ «Гармония»</div>
            <div class="prokudskoe-meta-item">🌊 <strong>Водоём:</strong> река Чик (бассейн р. Оби)</div>
            <div class="prokudskoe-meta-item">🚆 <strong>Транспорт:</strong> ст. Чик / о.п. Прокудское (Транссиб)</div>
          </div>
        </div>

        ${prokudskoe.schemeSvg ? `
          <div class="prokudskoe-scheme-wrapper">
            <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.75rem; color: var(--text-primary);">
              🗺️ Генеральный план пришкольной территории СОШ № 6 (ул. Совхозная, 25):
            </div>
            ${prokudskoe.schemeSvg}
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.6rem;">
              Ориентиры: 1 — Главное здание школы №6; 2 — Стадион; 3 — Теплица; 4 — Мемориал Потапова; 5 — Гараж автобуса; 6 — Площадка; 7 — КПП
            </div>
          </div>
        ` : ''}

        <div class="prokudskoe-tasks-list">
          ${prokudskoe.tasks.map((task, idx) => `
            <div class="demo-task-card" style="border-left: 4px solid #10b981;">
              <div class="demo-task-top">
                <div class="demo-task-meta-left">
                  <span class="demo-task-num-badge" style="background: linear-gradient(135deg, #059669, #10b981);">№ ${task.num}</span>
                  <span class="prokudskoe-task-badge">📍 с. Прокудское</span>
                  <span class="demo-task-topic">${task.badge}</span>
                </div>
              </div>

              <div class="prokudskoe-location-line">
                📍 <strong>Локация:</strong> ${task.location}
              </div>

              <div class="demo-task-question" style="margin-top: 0.6rem;">
                ${task.text.replace(/\n/g, '<br>')}
              </div>

              <div class="demo-task-interactive">
                <input type="text" id="prokudskoe-input-${sId}-${idx}" class="demo-answer-input" placeholder="Введите ответ задачи...">
                <button class="demo-check-btn" onclick="App.checkProkudskoeAnswer('${sId}', '${idx}', '${encodeURIComponent(task.answer)}')">
                  Проверить
                </button>
                <button class="btn-action demo-reveal-btn" onclick="App.toggleProkudskoeSolution('${sId}', '${idx}')">
                  👁️ Разбор решения
                </button>
                <div id="prokudskoe-feedback-${sId}-${idx}" class="demo-feedback-text"></div>
              </div>

              <div id="prokudskoe-solution-${sId}-${idx}" class="demo-task-solution-box" style="border-left-color: #10b981;">
                <div class="demo-solution-answer-tag" style="color: #34d399;">
                  ✓ Правильный ответ: <code>${task.answer}</code>
                </div>
                <div class="demo-solution-body">
                  <strong>Решение:</strong><br>
                  ${task.solution.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      contentHtml = `
        <div class="prokudskoe-hero-card">
          <span class="prokudskoe-hero-badge">📍 с. Прокудское • Коченёвский район</span>
          <h2 class="prokudskoe-hero-title">Краеведческие задачи села Прокудское</h2>
          <p class="prokudskoe-hero-desc">
            Для предмета «${subj.title}» задачи адаптируются. Вы можете прямо сейчас решить задачи села Прокудское по другим предметам ОГЭ:
          </p>

          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
            <button class="filter-pill" onclick="App.openProkudskoeTasks('math')">📐 Математика (План СОШ №6)</button>
            <button class="filter-pill" onclick="App.openProkudskoeTasks('physics')">⚡ Физика (р. Чик, КДЦ)</button>
            <button class="filter-pill" onclick="App.openProkudskoeTasks('social')">⚖️ Обществознание (Сельсовет)</button>
            <button class="filter-pill" onclick="App.openProkudskoeTasks('geography')">🌍 География (Климат и пойма Чика)</button>
            <button class="filter-pill" onclick="App.openProkudskoeTasks('informatics')">💻 Информатика (Сеть села)</button>
            <button class="filter-pill" onclick="App.openProkudskoeTasks('biology')">🌿 Биология (Биоценоз Чика)</button>
            <button class="filter-pill" onclick="App.openProkudskoeTasks('chemistry')">🧪 Химия (Удобрения и вода)</button>
          </div>
        </div>
      `;
    }

    return contentHtml;
  },

  toggleProkudskoeSolution(subKey, idx) {
    const box = document.getElementById(`prokudskoe-solution-${subKey}-${idx}`);
    if (box) {
      box.style.display = (box.style.display === "none" || !box.style.display) ? "block" : "none";
    }
  },

  checkProkudskoeAnswer(subKey, idx, rawExpected) {
    const input = document.getElementById(`prokudskoe-input-${subKey}-${idx}`);
    const feedback = document.getElementById(`prokudskoe-feedback-${subKey}-${idx}`);
    if (!input || !feedback) return;

    const userVal = input.value.trim().toLowerCase().replace(/\s+/g, "");
    const expVal = decodeURIComponent(rawExpected).trim().toLowerCase().replace(/\s+/g, "");
    const possibleAnswers = expVal.split(";").map(s => s.trim());
    const isCorrect = possibleAnswers.some(ans => userVal === ans || userVal === ans.replace(",", "."));

    if (!userVal) {
      feedback.innerHTML = `<span style="color: var(--accent-orange);">⚠️ Введите ответ!</span>`;
      feedback.style.display = "block";
      return;
    }

    if (isCorrect) {
      feedback.innerHTML = `<span style="color: var(--accent-green); font-weight: 700;">✓ Верно! Отличный результат для села Прокудское!</span>`;
      feedback.style.display = "block";
      input.style.borderColor = "var(--accent-green)";
    } else {
      feedback.innerHTML = `<span style="color: var(--accent-red); font-weight: 600;">✕ Не сошлось с ключом. Нажмите «Разбор решения» для проверки.</span>`;
      feedback.style.display = "block";
      input.style.borderColor = "var(--accent-red)";
    }
  },

  openProkudskoeTasks(subjectId) {
    if (subjectId) {
      this.currentSubject = subjectId;
      this.renderSubjectCards();
    }
    this.currentDemosSubtab = "prokudskoe";
    this.switchView("demos");
  },

  /* --------------------------------------------------------------------------
     Раздел: Где купить КИМы (Маркетплейсы, Новосибирская область, ПВЗ)
     -------------------------------------------------------------------------- */
  currentStoreSubject: "math",

  selectStoreSubject(subjectId) {
    this.currentStoreSubject = subjectId;
    this.renderStoreView();
  },

  renderStoreView() {
    const container = document.getElementById("store-main-content");
    if (!container || typeof KIMS_DATA === "undefined") return;

    const currentKim = KIMS_DATA.subjects[this.currentStoreSubject] || KIMS_DATA.subjects.math;

    const subjectPills = Object.values(SUBJECTS_DATA).map(s => `
      <button class="filter-pill ${s.id === this.currentStoreSubject ? 'active' : ''}" 
              style="font-size: 0.85rem; padding: 0.4rem 0.85rem;"
              onclick="App.selectStoreSubject('${s.id}')">
        ${s.icon} ${s.title}
      </button>
    `).join("");

    container.innerHTML = `
      <div class="store-hero-banner">
        <div class="store-badge-tag">🛒 Официальные печатные сборники ФИПИ • Цены и магазины</div>
        <h2 class="store-hero-title">Где купить сборники КИМ ОГЭ 2025/2026</h2>
        <p class="store-hero-subtitle">
          Путеводитель по покупке оригинальных сборников типовых вариантов ФИПИ: сравнение цен на маркетплейсах, главный оптово-розничный книжный склад в Новосибирске и пункты выдачи в селе Прокудское и р.п. Чик.
        </p>
      </div>

      <!-- Быстрый выбор предмета для просмотра книги и цен -->
      <div class="store-subject-selector-card">
        <div style="font-weight: 700; font-size: 1rem; margin-bottom: 0.6rem;">
          Выберите предмет для просмотра рекомендованного сборника ФИПИ и цен:
        </div>
        <div style="display: flex; gap: 0.4rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1.25rem;">
          ${subjectPills}
        </div>

        <div class="store-selected-kim-box">
          <div class="store-kim-left">
            <span class="kim-icon-big">${currentKim.icon}</span>
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.3rem;">
                ${currentKim.subjectTitle}: ${currentKim.editions[0].bookTitle}
              </h3>
              <div style="font-size: 0.86rem; color: var(--text-secondary); margin-bottom: 0.3rem;">
                <strong>Официальные авторы ФИПИ:</strong> ${currentKim.officialAuthors}
              </div>
              <div style="font-size: 0.84rem; color: var(--text-muted);">
                <strong>Издательство:</strong> ${currentKim.publisher}
              </div>
              <div style="font-size: 0.84rem; color: var(--accent-green); margin-top: 0.35rem; font-weight: 600;">
                ✓ Ориентировочная цена: ${currentKim.editions[0].priceRange} (36 вариантов)
              </div>
            </div>
          </div>
          <div class="store-kim-buy-actions">
            <a href="https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(currentKim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="kim-btn-wb">
              🟣 Wildberries (${currentKim.editions[0].priceRange})
            </a>
            <a href="https://www.ozon.ru/search/?text=${encodeURIComponent(currentKim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="kim-btn-ozon">
              🔵 Ozon (со скидкой карты)
            </a>
            <a href="https://market.yandex.ru/search?text=${encodeURIComponent(currentKim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="kim-btn-market">
              🟡 Яндекс Маркет
            </a>
            <button class="btn-action" onclick="App.openKimModal('${this.currentStoreSubject}')" style="background: var(--bg-tertiary); font-size: 0.82rem;">
              🔍 Все форматы и детали книги
            </button>
          </div>
        </div>
      </div>

      <!-- Блок 1: Онлайн-маркетплейсы с доставкой -->
      <div class="store-section-box">
        <h3 class="store-section-title">📦 Популярные маркетплейсы с доставкой</h3>
        <p class="store-section-desc">
          Самый простой способ заказать оригинальный сборник с доставкой за 1–3 дня прямо в с. Прокудское или р.п. Чик:
        </p>

        <div class="marketplaces-grid">
          ${KIMS_DATA.marketplaces.map(mp => `
            <div class="marketplace-card" style="border-top: 3px solid ${mp.accentColor};">
              <div class="mp-header">
                <span class="mp-icon">${mp.icon}</span>
                <div>
                  <h4 class="mp-title">${mp.name}</h4>
                  <span class="mp-badge">${mp.badge}</span>
                </div>
              </div>
              <p class="mp-desc">${mp.desc}</p>
              <div class="mp-price-row">
                <span>Средняя цена сборника:</span>
                <strong style="color: var(--text-primary);">${mp.avgPriceRange}</strong>
              </div>
              <div class="mp-perks-list">
                ${mp.perks.map(p => `<span class="mp-perk-tag">✓ ${p}</span>`).join("")}
              </div>
              <div class="mp-actions">
                <a href="${mp.urlSearchTemplate}${encodeURIComponent(currentKim.searchQuery)}" target="_blank" rel="noopener noreferrer" class="btn-action" style="width: 100%; text-align: center; justify-content: center; background: ${mp.accentColor}; color: white; border: none;">
                  Найти КИМ на ${mp.name} ↗
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Блок 2: Книжные склады и магазины в Новосибирской области -->
      <div class="store-section-box">
        <h3 class="store-section-title">🏢 Книжные магазины и оптовые склады в Новосибирской области</h3>
        <p class="store-section-desc">
          Где в Новосибирске можно купить сборники в розницу или оптом на весь класс со скидкой 20–30%:
        </p>

        <div class="nso-stores-list">
          ${KIMS_DATA.novosibirskStores.map(store => `
            <div class="nso-store-card ${store.isRecommended ? 'recommended-store' : ''}">
              <div class="nso-store-header">
                <div>
                  ${store.badge ? `<span class="store-rec-badge">${store.badge}</span>` : ''}
                  <h4 class="nso-store-name">${store.name}</h4>
                  <div class="nso-store-address">📍 ${store.address}</div>
                </div>
                ${store.phone ? `<div class="nso-store-phone">📞 ${store.phone}</div>` : ''}
              </div>

              ${store.filials ? `
                <div class="nso-filials-box">
                  <strong>Популярные филиалы сети:</strong>
                  <ul>
                    ${store.filials.map(f => `<li>${f}</li>`).join("")}
                  </ul>
                </div>
              ` : ''}

              <p class="nso-store-desc">${store.desc}</p>

              <div class="nso-store-tags">
                ${store.tags.map(t => `<span class="store-tag">🏷️ ${t}</span>`).join("")}
                <span class="store-tag">🕒 ${store.workHours}</span>
              </div>

              <div class="nso-store-actions">
                <a href="${store.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action map-btn">
                  🗺️ Открыть на Яндекс.Картах
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Блок 3: Пункты выдачи заказов прямо в с. Прокудское и р.п. Чик -->
      <div class="store-section-box">
        <h3 class="store-section-title">📍 Пункты выдачи (ПВЗ) рядом со школой №6</h3>
        <p class="store-section-desc">
          Точные адреса пунктов выдачи, куда можно заказать сборники КИМ с Wildberries, Ozon и Яндекс Маркета:
        </p>

        <div class="local-pickup-grid">
          ${KIMS_DATA.localPickupPoints.map(group => `
            <div class="local-pickup-group-card">
              <div class="pickup-group-header">
                <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--accent-blue);">${group.settlement}</h4>
                <div style="font-size: 0.82rem; color: var(--text-muted);">${group.distanceNote}</div>
              </div>
              <div class="pickup-items-list">
                ${group.points.map(pt => `
                  <div class="pickup-point-row">
                    <div class="point-network-badge net-${pt.network.toLowerCase().replace(/\s+/g, '')}">${pt.network}</div>
                    <div class="point-details">
                      <div class="point-address"><strong>${pt.address}</strong></div>
                      <div class="point-meta">🕒 ${pt.schedule} • ⚡ ${pt.speed} ${pt.tip ? `• 💡 ${pt.tip}` : ''}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Блок 4: Бесплатный доступ в библиотеках -->
      <div class="callout callout-tip" style="margin-top: 1.5rem;">
        <h4 style="font-weight: 800; font-size: 1.05rem; margin-bottom: 0.5rem;">
          💡 Бесплатный доступ к материалам в селе Прокудское:
        </h4>
        <p style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 0.5rem;">
          <strong>1. Школьная библиотека МКОУ Чикской СОШ № 6:</strong> ул. Совхозная, 25 (1 этаж). Все учащиеся школы могут бесплатно пользоваться фондом демонстрационных вариантов ОГЭ прошлых лет, методичками учителей и атласами по географии.
        </p>
        <p style="font-size: 0.9rem; line-height: 1.5;">
          <strong>2. Библиотека в МБУ КДЦ «Гармония»:</strong> ул. Совхозная, 29 (150 метров от школы). Доступен читальный зал, художественная классика школьной программы для подготовки к сочинению 13.3 по русскому языку и литературе.
        </p>
      </div>

      <!-- Блок 5: Советы по защите от подделок -->
      <div class="store-section-box" style="margin-top: 1.5rem;">
        <h3 class="store-section-title">🛡️ Как отличить настоящий КИМ ФИПИ от подделки</h3>
        <div class="guide-cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
          ${KIMS_DATA.buyingAdvice.map(adv => `
            <div class="guide-plan-card">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">${adv.icon}</div>
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">${adv.title}</h4>
              <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.45;">${adv.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  },

  /* --------------------------------------------------------------------------
     Раздел: Стратегия и методический гид ОГЭ 2025/2026
     -------------------------------------------------------------------------- */
  currentGuideTab: "plans",

  switchGuideTab(tabId) {
    this.currentGuideTab = tabId;
    document.querySelectorAll(".guide-subtab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    this.renderGuideContent();
  },

  renderGuide() {
    const container = document.getElementById("guide-main-content");
    if (!container || typeof GUIDE_DATA === "undefined") return;

    container.innerHTML = `
      <div class="guide-hero-banner">
        <div class="guide-hero-badge">🚀 Методический гид ОГЭ 2025/2026</div>
        <h2 class="guide-hero-title">Стратегия успешной сдачи экзаменов на 4 и 5</h2>
        <p class="guide-hero-desc">
          Полное руководство выпускника 9 класса: пошаговые планы подготовки, официальные правила бланков ФИПИ, поминутный тайминг на экзамене, разбор 15 фатальных ошибок и юридические правила апелляции.
        </p>
        <div class="guide-subtabs">
          <button class="guide-subtab-btn ${this.currentGuideTab === 'plans' ? 'active' : ''}" data-tab="plans" onclick="App.switchGuideTab('plans')">
            🗓 Планы подготовки
          </button>
          <button class="guide-subtab-btn ${this.currentGuideTab === 'blanks' ? 'active' : ''}" data-tab="blanks" onclick="App.switchGuideTab('blanks')">
            📝 Заполнение бланков
          </button>
          <button class="guide-subtab-btn ${this.currentGuideTab === 'timing' ? 'active' : ''}" data-tab="timing" onclick="App.switchGuideTab('timing')">
            ⏱ Тайм-менеджмент
          </button>
          <button class="guide-subtab-btn ${this.currentGuideTab === 'mistakes' ? 'active' : ''}" data-tab="mistakes" onclick="App.switchGuideTab('mistakes')">
            ⚠️ 15 частых ошибок
          </button>
          <button class="guide-subtab-btn ${this.currentGuideTab === 'appeals' ? 'active' : ''}" data-tab="appeals" onclick="App.switchGuideTab('appeals')">
            ⚖️ Апелляция ОГЭ
          </button>
        </div>
      </div>

      <div id="guide-tab-body" class="guide-tab-body"></div>
    `;

    this.renderGuideContent();
  },

  renderGuideContent() {
    const body = document.getElementById("guide-tab-body");
    if (!body || typeof GUIDE_DATA === "undefined") return;

    if (this.currentGuideTab === "plans") {
      body.innerHTML = `
        <div class="guide-cards-grid">
          ${GUIDE_DATA.plans.map(plan => `
            <div class="guide-plan-card">
              <div class="guide-plan-header">
                <span class="guide-plan-badge">${plan.badge}</span>
                <h3 class="guide-plan-title">${plan.title}</h3>
                <p class="guide-plan-tagline">${plan.tagline}</p>
              </div>
              <div class="guide-plan-timeline">
                ${plan.steps.map(step => `
                  <div class="guide-timeline-step">
                    <div class="guide-step-period">${step.period}</div>
                    <ul class="guide-step-tasks">
                      ${step.tasks.map(task => `<li>${task}</li>`).join("")}
                    </ul>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (this.currentGuideTab === "blanks") {
      body.innerHTML = `
        <div class="guide-section-box">
          <h3 class="guide-box-title">📋 ${GUIDE_DATA.blanksGuide.title}</h3>
          <p class="guide-box-desc">
            Каждый год тысячи девятиклассников теряют баллы не из-за незнания предмета, а из-за неверно оформленных бланков ответов. Компьютерный сканер считывает знаки строго по заложенным алгоритмам.
          </p>

          <div class="guide-blanks-grid">
            ${GUIDE_DATA.blanksGuide.criticalRules.map(rule => `
              <div class="guide-blank-rule-card">
                <div class="blank-rule-icon">${rule.icon}</div>
                <div class="blank-rule-content">
                  <h4 class="blank-rule-title">${rule.title}</h4>
                  <p class="blank-rule-desc">${rule.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="guide-sample-box">
            <h4 style="font-weight: 800; margin-bottom: 0.75rem; color: var(--accent-blue);">
              🔤 Образцы написания ключевых символов в Бланке №1:
            </h4>
            <div class="guide-symbols-row">
              ${GUIDE_DATA.blanksGuide.symbolExample.map(item => `
                <div class="guide-symbol-cell">
                  <div class="symbol-char">${item.char}</div>
                  <div class="symbol-note">${item.note}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    } else if (this.currentGuideTab === "timing") {
      body.innerHTML = `
        <div class="guide-section-box">
          <div class="callout callout-warning" style="margin-bottom: 1.5rem;">
            <strong>🎯 ${GUIDE_DATA.timing.twoCirclesRule.title}:</strong>
            <p style="margin-top: 0.4rem; font-size: 0.9rem;">${GUIDE_DATA.timing.twoCirclesRule.text}</p>
          </div>

          ${GUIDE_DATA.timing.strategies.map(strat => `
            <div class="guide-timing-card">
              <h3 class="guide-timing-title">⏱️ ${strat.examName}</h3>
              <div class="guide-timing-table">
                ${strat.breakdown.map(item => `
                  <div class="timing-row">
                    <div class="timing-time">${item.time}</div>
                    <div class="timing-phase">${item.phase}</div>
                    <div class="timing-action">${item.action}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (this.currentGuideTab === "mistakes") {
      body.innerHTML = `
        <div class="guide-section-box">
          <h3 class="guide-box-title">⚠️ Топ-15 фатальных ошибок выпускников на ОГЭ</h3>
          <p class="guide-box-desc">
            Изучите этот список, чтобы не наступить на грабли, на которых ежегодно спотыкаются 70% сдающих:
          </p>

          <div class="guide-mistakes-grid">
            ${GUIDE_DATA.topMistakes.map(m => `
              <div class="guide-mistake-card">
                <div class="guide-mistake-top">
                  <span class="mistake-num">#${m.num}</span>
                  <span class="mistake-category">${m.category}</span>
                </div>
                <h4 class="mistake-title">${m.title}</h4>
                <p class="mistake-desc">${m.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    } else if (this.currentGuideTab === "appeals") {
      body.innerHTML = `
        <div class="guide-section-box">
          <h3 class="guide-box-title">⚖️ ${GUIDE_DATA.appeals.title}</h3>
          
          <div class="guide-appeals-grid">
            ${GUIDE_DATA.appeals.types.map(app => `
              <div class="guide-appeal-card">
                <span class="guide-appeal-badge">${app.badge}</span>
                <h4 class="guide-appeal-title">${app.title}</h4>
                <div class="guide-appeal-timing"><strong>Срок подачи:</strong> ${app.timing}</div>
                <div style="margin-top: 0.75rem;">
                  <strong>Основания для подачи:</strong>
                  <ul style="margin: 0.4rem 0 0 1.2rem; font-size: 0.88rem; color: var(--text-secondary);">
                    ${app.cases.map(c => `<li>${c}</li>`).join("")}
                  </ul>
                </div>
                ${app.consequence ? `
                  <div class="appeal-consequence-box">
                    <strong>Результат:</strong> ${app.consequence}
                  </div>
                ` : ''}
                ${app.risks ? `
                  <div class="appeal-risks-box">
                    ${app.risks.map(r => `<div>⚠️ ${r}</div>`).join("")}
                  </div>
                ` : ''}
              </div>
            `).join("")}
          </div>

          <div class="callout callout-fipi" style="margin-top: 1.5rem;">
            <strong>💡 Советы экспертов перед подачей апелляции:</strong>
            <ul style="margin: 0.4rem 0 0 1.2rem; font-size: 0.88rem;">
              ${GUIDE_DATA.appeals.tips.map(t => `<li>${t}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
    }
  },

  bindGlobalEvents() {
    // Esc закрывает поиск и выпадающее меню
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const overlay = document.getElementById("search-results-overlay");
        if (overlay) overlay.classList.remove("open");
        this.closeMoreMenu();
      }
    });

    // Закрытие выпадающего меню при клике вне него
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-dropdown-wrapper")) {
        this.closeMoreMenu();
      }
    });
  }
};

// Запуск приложения при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
