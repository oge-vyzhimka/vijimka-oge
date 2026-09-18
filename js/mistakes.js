/**
 * ОГЭ-ВЫЖИМКА — Банк «Мои ошибки» (Фича 3)
 * Автоматический сбор ловушек и персональная работа над ошибками
 */

const MistakesBank = {
  mistakes: [],
  activeFilterSubject: "all",
  activeFilterStatus: "unresolved", // 'all' | 'unresolved' | 'resolved'
  isDrillActive: false,
  drillQuestions: [],
  drillIndex: 0,
  drillScore: 0,

  init() {
    this.loadMistakes();
    this.updateBadge();
  },

  loadMistakes() {
    try {
      const saved = localStorage.getItem("oge_mistakes_bank");
      this.mistakes = saved ? JSON.parse(saved) : [];
    } catch (e) {
      this.mistakes = [];
    }
  },

  saveMistakes() {
    try {
      localStorage.setItem("oge_mistakes_bank", JSON.stringify(this.mistakes));
    } catch (e) {
      console.warn("Mistakes storage error:", e);
    }
    this.updateBadge();
    if (typeof Auth !== "undefined" && Auth.updateUI) {
      Auth.updateUI();
    }
  },

  updateBadge() {
    const badge = document.getElementById("mistakes-tab-badge");
    const count = this.getUnresolvedCount();
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-block" : "none";
    }
  },

  getUnresolvedCount() {
    return this.mistakes.filter(m => !m.resolved).length;
  },

  recordMistake(entry) {
    if (!entry || !entry.question) return;

    // Проверяем, есть ли уже этот вопрос в базе
    const existing = this.mistakes.find(m => m.question.trim() === entry.question.trim() && m.subjectId === entry.subjectId);
    if (existing) {
      // Если вопрос уже был, обновляем дату и статус (снова не решен)
      existing.userAnswer = entry.userAnswer;
      existing.resolved = false;
      existing.updatedAt = new Date().toISOString();
    } else {
      const newMistake = {
        id: "m_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
        subjectId: entry.subjectId || "math",
        question: entry.question,
        options: entry.options || [],
        userAnswer: entry.userAnswer,
        correctAnswer: entry.correctAnswer,
        explanation: entry.explanation || "",
        resolved: false,
        createdAt: new Date().toISOString()
      };
      this.mistakes.unshift(newMistake);
    }

    this.saveMistakes();

    // Проверяем ачивку за добавление первой ошибки
    if (typeof Gamification !== "undefined") {
      Gamification.checkAchievements();
    }
  },

  markResolved(id) {
    const item = this.mistakes.find(m => m.id === id);
    if (item) {
      item.resolved = true;
      item.resolvedAt = new Date().toISOString();
      this.saveMistakes();
      this.render();

      if (typeof Gamification !== "undefined") {
        Gamification.checkAchievements();
      }
    }
  },

  removeMistake(id) {
    this.mistakes = this.mistakes.filter(m => m.id !== id);
    this.saveMistakes();
    this.render();
  },

  clearAllResolved() {
    if (confirm("Удалить все исправленные ошибки из архива?")) {
      this.mistakes = this.mistakes.filter(m => !m.resolved);
      this.saveMistakes();
      this.render();
    }
  },

  setSubjectFilter(subjectId) {
    this.activeFilterSubject = subjectId;
    this.render();
  },

  setStatusFilter(status) {
    this.activeFilterStatus = status;
    this.render();
  },

  getFilteredMistakes() {
    return this.mistakes.filter(m => {
      const matchSubj = (this.activeFilterSubject === "all" || m.subjectId === this.activeFilterSubject);
      let matchStatus = true;
      if (this.activeFilterStatus === "unresolved") matchStatus = !m.resolved;
      if (this.activeFilterStatus === "resolved") matchStatus = m.resolved;
      return matchSubj && matchStatus;
    });
  },

  render() {
    const container = document.getElementById("mistakes-main-content");
    if (!container) return;

    if (this.isDrillActive) {
      this.renderDrillQuestion(container);
      return;
    }

    const filtered = this.getFilteredMistakes();
    const totalCount = this.mistakes.length;
    const unresolvedCount = this.getUnresolvedCount();
    const resolvedCount = totalCount - unresolvedCount;

    // Получаем список предметов, где есть ошибки
    const activeSubjects = [...new Set(this.mistakes.map(m => m.subjectId))];

    container.innerHTML = `
      <div class="mistakes-container">
        <!-- Шапка банка ошибок -->
        <div class="mistakes-header">
          <div>
            <span class="view-tag">🎯 Персональный банк ловушек</span>
            <h2 class="view-title">Мои ошибки и работа над ними</h2>
            <p class="view-subtitle">
              Здесь автоматически сохраняются задания из тестов, где был дан неверный ответ. 
              Регулярно проходите работу над ошибками, чтобы довести решение до автоматизма!
            </p>
          </div>

          <div class="mistakes-stats-card">
            <div class="mstat-item">
              <span class="mstat-val" style="color: var(--accent-red);">${unresolvedCount}</span>
              <span class="mstat-lbl">Осталось исправить</span>
            </div>
            <div class="mstat-item">
              <span class="mstat-val" style="color: var(--accent-green);">${resolvedCount}</span>
              <span class="mstat-lbl">Уже исправлено</span>
            </div>
          </div>
        </div>

        <!-- Кнопка запуска тренировки -->
        <div class="mistakes-action-bar">
          <button class="btn-action start-drill-btn" onclick="MistakesBank.startDrill()" ${unresolvedCount === 0 ? 'disabled' : ''}>
            <span>🚀 Пройти работу над ошибками (${unresolvedCount})</span>
          </button>
          ${resolvedCount > 0 ? `
            <button class="btn-action btn-secondary" onclick="MistakesBank.clearAllResolved()" title="Очистить архив исправленных">
              🧹 Очистить решённые
            </button>
          ` : ''}
        </div>

        <!-- Фильтры -->
        <div class="mistakes-filters-row">
          <div class="filter-pills">
            <button class="filter-pill ${this.activeFilterStatus === 'unresolved' ? 'active' : ''}" onclick="MistakesBank.setStatusFilter('unresolved')">
              🔴 Требуют разбора (${unresolvedCount})
            </button>
            <button class="filter-pill ${this.activeFilterStatus === 'resolved' ? 'active' : ''}" onclick="MistakesBank.setStatusFilter('resolved')">
              🟢 Исправленные (${resolvedCount})
            </button>
            <button class="filter-pill ${this.activeFilterStatus === 'all' ? 'active' : ''}" onclick="MistakesBank.setStatusFilter('all')">
              Все (${totalCount})
            </button>
          </div>

          ${activeSubjects.length > 1 ? `
            <div class="filter-pills" style="margin-top: 0.5rem;">
              <button class="filter-pill ${this.activeFilterSubject === 'all' ? 'active' : ''}" onclick="MistakesBank.setSubjectFilter('all')">
                Все предметы
              </button>
              ${activeSubjects.map(sId => {
                const s = typeof SUBJECTS_DATA !== "undefined" ? SUBJECTS_DATA[sId] : null;
                const name = s ? `${s.icon} ${s.title}` : sId;
                return `
                  <button class="filter-pill ${this.activeFilterSubject === sId ? 'active' : ''}" onclick="MistakesBank.setSubjectFilter('${sId}')">
                    ${name}
                  </button>
                `;
              }).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Список карточек ошибок -->
        <div class="mistakes-list">
          ${filtered.length === 0 ? `
            <div class="empty-mistakes-box">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
              <h3>В этом разделе пока нет ошибок!</h3>
              <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 1rem;">
                ${totalCount === 0 
                  ? 'Отличная работа! Пройдите экспресс-тест в тренажере — если допустите ошибку, мы заботливо сохраним её сюда для разбора.'
                  : 'Все ошибки в этой категории успешно разобраны и исправлены! Так держать!'}
              </p>
              <button class="btn-action" style="background: var(--accent-blue); color: white;" onclick="App.switchView('quiz')">
                Перейти в тренажёр тестов →
              </button>
            </div>
          ` : filtered.map((m, idx) => {
            const subj = typeof SUBJECTS_DATA !== "undefined" ? SUBJECTS_DATA[m.subjectId] : null;
            const subjTitle = subj ? `${subj.icon} ${subj.title}` : m.subjectId;
            return `
              <div class="mistake-card ${m.resolved ? 'is-resolved' : 'is-unresolved'}">
                <div class="mistake-card-top">
                  <span class="mistake-subj-tag">${subjTitle}</span>
                  <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="mistake-status-pill ${m.resolved ? 'resolved' : 'unresolved'}">
                      ${m.resolved ? '✓ Исправлено' : '● Требует повторения'}
                    </span>
                    <button class="mistake-del-btn" onclick="MistakesBank.removeMistake('${m.id}')" title="Удалить карточку">✕</button>
                  </div>
                </div>

                <div class="mistake-card-q">
                  ${m.question}
                </div>

                <div class="mistake-answers-compare">
                  <div class="compare-box your-ans">
                    <span class="compare-lbl">Ваш ошибочный ответ:</span>
                    <span class="compare-val">${m.userAnswer || 'Не указан'}</span>
                  </div>
                  <div class="compare-box correct-ans">
                    <span class="compare-lbl">Правильный ответ ФИПИ:</span>
                    <span class="compare-val">${m.correctAnswer}</span>
                  </div>
                </div>

                ${m.explanation ? `
                  <div class="mistake-explanation">
                    <strong>💡 Разбор ловушки / правило:</strong>
                    <div>${m.explanation}</div>
                  </div>
                ` : ''}

                <div class="mistake-card-bottom">
                  ${!m.resolved ? `
                    <button class="btn-action-sm resolve-now-btn" onclick="MistakesBank.markResolved('${m.id}')">
                      ✓ Я запомнил и исправил
                    </button>
                  ` : `
                    <span style="font-size: 0.85rem; color: var(--accent-green);">Отлично! Задание отработано.</span>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // Режим интерактивной пересдачи ошибок
  startDrill() {
    const unresolved = this.mistakes.filter(m => !m.resolved);
    if (unresolved.length === 0) {
      alert("У вас нет неисправленных ошибок!");
      return;
    }

    // Фильтруем те, у которых есть варианты ответов
    this.drillQuestions = unresolved.filter(m => m.options && m.options.length > 0);
    if (this.drillQuestions.length === 0) {
      // Если вариантов нет, формируем простые вопросы
      this.drillQuestions = unresolved.map(m => ({
        ...m,
        options: [m.correctAnswer, m.userAnswer || "Другой вариант"].filter(Boolean)
      }));
    }

    this.isDrillActive = true;
    this.drillIndex = 0;
    this.drillScore = 0;
    this.render();
  },

  exitDrill() {
    this.isDrillActive = false;
    this.render();
  },

  renderDrillQuestion(container) {
    const q = this.drillQuestions[this.drillIndex];
    if (!q || this.drillIndex >= this.drillQuestions.length) {
      this.renderDrillResults(container);
      return;
    }

    const subj = typeof SUBJECTS_DATA !== "undefined" ? SUBJECTS_DATA[q.subjectId] : null;
    const subjTitle = subj ? `${subj.icon} ${subj.title}` : q.subjectId;

    container.innerHTML = `
      <div class="quiz-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="quiz-step-badge">🚀 Работа над ошибками: ${this.drillIndex + 1} из ${this.drillQuestions.length}</span>
          <button class="btn-action btn-secondary" style="padding: 0.35rem 0.8rem; font-size: 0.85rem;" onclick="MistakesBank.exitDrill()">
            ✕ Завершить тренировку
          </button>
        </div>

        <div class="quiz-header">
          <div>
            <span style="font-size: 0.9rem; color: var(--text-secondary);">${subjTitle}</span>
            <h3 class="quiz-question-text" style="margin-top: 0.5rem;">${q.question}</h3>
          </div>
        </div>

        <div class="quiz-options-list">
          ${q.options.map((opt, idx) => `
            <button class="quiz-option-btn" onclick="MistakesBank.handleDrillAnswer('${q.id}', '${opt.replace(/'/g, "\\'")}')">
              <span class="quiz-opt-marker">${String.fromCharCode(65 + idx)})</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="drill-explanation-area" style="display: none; margin-top: 1rem;"></div>
      </div>
    `;
  },

  handleDrillAnswer(mistakeId, selectedOption) {
    const q = this.drillQuestions[this.drillIndex];
    const isCorrect = (selectedOption.trim() === q.correctAnswer.trim());

    const optButtons = document.querySelectorAll(".quiz-option-btn");
    optButtons.forEach(btn => {
      btn.disabled = true;
      if (btn.innerText.includes(q.correctAnswer)) {
        btn.classList.add("correct");
      } else if (btn.innerText.includes(selectedOption)) {
        btn.classList.add("wrong");
      }
    });

    const expArea = document.getElementById("drill-explanation-area");
    if (expArea) {
      expArea.style.display = "block";
      expArea.innerHTML = `
        <div class="quiz-explanation-box">
          <div class="quiz-explanation-title" style="color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}; font-weight: bold; margin-bottom: 0.4rem;">
            ${isCorrect ? '🎉 Ура! Вы успешно исправили ошибку!' : '⚠️ Снова ошибка. Запомните верный ответ!'}
          </div>
          <div class="quiz-explanation-body">
            <strong>Правильный ответ:</strong> ${q.correctAnswer}<br>
            ${q.explanation || ''}
          </div>
          <button class="btn-action" style="margin-top: 1rem; background: var(--accent-blue); color: white;" onclick="MistakesBank.nextDrillQuestion()">
            Далее →
          </button>
        </div>
      `;
    }

    if (isCorrect) {
      this.drillScore++;
      // Автоматически помечаем ошибку исправленной!
      this.markResolved(mistakeId);
    }
  },

  nextDrillQuestion() {
    this.drillIndex++;
    this.render();
  },

  renderDrillResults(container) {
    const total = this.drillQuestions.length;
    const score = this.drillScore;

    container.innerHTML = `
      <div class="quiz-container" style="text-align: center;">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🏆</div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Работа над ошибками завершена!</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
          Вы успешно отработали и закрыли <strong>${score} из ${total}</strong> трудных заданий!
        </p>

        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button class="btn-action" style="background: var(--accent-blue); color: white;" onclick="MistakesBank.exitDrill()">
            Вернуться в банк ошибок
          </button>
          <button class="btn-action btn-secondary" onclick="App.switchView('quiz')">
            В тренажёр тестов
          </button>
        </div>
      </div>
    `;
  }
};
