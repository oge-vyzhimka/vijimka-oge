/**
 * ОГЭ-ВЫЖИМКА — Интерактивный движок мини-тестов и экспресс-тренажера
 */

const QuizEngine = {
  currentSubjectId: "math",
  currentIndex: 0,
  score: 0,
  answered: false,

  getQuestions(subjectId) {
    const sId = subjectId || this.currentSubjectId;
    if (typeof QUIZZES_DATA !== "undefined" && QUIZZES_DATA[sId] && QUIZZES_DATA[sId].length > 0) {
      return QUIZZES_DATA[sId];
    }
    const subj = SUBJECTS_DATA[sId];
    return (subj && subj.quiz) ? subj.quiz : [];
  },

  start(subjectId) {
    this.currentSubjectId = subjectId || this.currentSubjectId;
    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;
    this.renderQuestion();
  },

  renderQuestion() {
    const container = document.getElementById("quiz-main-content");
    const subj = SUBJECTS_DATA[this.currentSubjectId];
    const questions = this.getQuestions(this.currentSubjectId);

    if (!container || !subj || questions.length === 0) {
      if (container) {
        container.innerHTML = `
          <div class="callout callout-tip">
            В данный момент вопросы для этого предмета обновляются в соответствии с демоверсией 2025/2026.
          </div>
        `;
      }
      return;
    }

    if (this.currentIndex >= questions.length) {
      this.renderResults();
      return;
    }

    const q = questions[this.currentIndex];
    this.answered = false;

    // Быстрый переключатель предметов внутри тренажёра
    const subjectPills = Object.values(SUBJECTS_DATA).map(s => `
      <button class="filter-pill ${s.id === this.currentSubjectId ? 'active' : ''}" 
              style="font-size: 0.82rem; padding: 0.35rem 0.75rem;"
              onclick="QuizEngine.start('${s.id}')">
        ${s.icon} ${s.title}
      </button>
    `).join("");

    // Точки-индикаторы вопросов
    const stepIndicators = questions.map((_, idx) => `
      <span class="quiz-step-dot ${idx === this.currentIndex ? 'active' : (idx < this.currentIndex ? 'done' : '')}">
        ${idx + 1}
      </span>
    `).join("");

    container.innerHTML = `
      <div class="quiz-container">
        <!-- Панель быстрого выбора предмета -->
        <div style="display: flex; gap: 0.4rem; overflow-x: auto; padding-bottom: 0.6rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
          ${subjectPills}
        </div>

        <div class="quiz-header">
          <div>
            <span class="quiz-step-badge">${subj.icon} ${subj.title} • Вопрос ${this.currentIndex + 1} из ${questions.length}</span>
            <div class="quiz-dots-row" style="display: flex; gap: 0.35rem; margin-top: 0.5rem;">
              ${stepIndicators}
            </div>
          </div>
          <span class="quiz-score-badge">Правильно: ${this.score} из ${this.currentIndex}</span>
        </div>
        
        <h3 class="quiz-question-text">${q.question}</h3>
        
        <div class="quiz-options-list">
          ${q.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}" onclick="QuizEngine.selectAnswer(${idx})">
              <span class="quiz-opt-marker">${String.fromCharCode(65 + idx)})</span>
              <span>${opt}</span>
            </button>
          `).join("")}
        </div>

        <div id="quiz-explanation-area" style="display: none;"></div>

        <div class="quiz-footer" id="quiz-footer-area" style="display: none;">
          <button class="btn-action" onclick="QuizEngine.nextQuestion()" style="background: var(--accent-blue); color: white;">
            Следующий вопрос →
          </button>
        </div>
      </div>
    `;
  },

  selectAnswer(selectedIndex) {
    if (this.answered) return;
    this.answered = true;

    const questions = this.getQuestions(this.currentSubjectId);
    const q = questions[this.currentIndex];
    const optionButtons = document.querySelectorAll(".quiz-option-btn");
    const explanationArea = document.getElementById("quiz-explanation-area");
    const footerArea = document.getElementById("quiz-footer-area");

    const isCorrect = (selectedIndex === q.correctIndex);
    if (isCorrect) {
      this.score++;
    }

    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex) {
        btn.classList.add("wrong");
      }
    });

    if (explanationArea) {
      explanationArea.style.display = "block";
      explanationArea.innerHTML = `
        <div class="quiz-explanation-box">
          <div class="quiz-explanation-title" style="color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}">
            ${isCorrect ? '✓ Верно!' : '✗ Ошибка!'} Правильный ответ: ${String.fromCharCode(65 + q.correctIndex)})
          </div>
          <div class="quiz-explanation-body">
            ${q.explanation}
          </div>
        </div>
      `;
    }

    if (footerArea) {
      footerArea.style.display = "flex";
    }
  },

  nextQuestion() {
    this.currentIndex++;
    this.renderQuestion();
  },

  renderResults() {
    const container = document.getElementById("quiz-main-content");
    const subj = SUBJECTS_DATA[this.currentSubjectId];
    const questions = this.getQuestions(this.currentSubjectId);
    const total = questions.length;
    const percentage = Math.round((this.score / total) * 100);

    let verdict = "Нужно ещё потренироваться и повторить теорию!";
    let gradeEstimate = "3";
    if (percentage >= 85) {
      verdict = "Великолепный результат! Отличные шансы получить «5» на ОГЭ!";
      gradeEstimate = "5";
    } else if (percentage >= 60) {
      verdict = "Хороший уровень знаний (уверенная «4»), но разберите ошибки!";
      gradeEstimate = "4";
    }

    container.innerHTML = `
      <div class="quiz-container" style="text-align: center;">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🎉</div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Тест по предмету «${subj.title}» завершён!</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${verdict}</p>
        
        <div class="calc-result-box" style="max-width: 400px; margin: 0 auto 1.5rem;">
          <div style="font-size: 0.9rem; color: var(--text-secondary);">Ваш результат:</div>
          <div class="calc-grade-display grade-${gradeEstimate}">${this.score} / ${total}</div>
          <div style="font-weight: 700;">${percentage}% правильных ответов</div>
        </div>

        <div style="display: flex; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
          <button class="btn-action" onclick="QuizEngine.start('${this.currentSubjectId}')">
            Пройти тест заново 🔄
          </button>
          <button class="btn-action" onclick="App.openKimModal('${this.currentSubjectId}')" style="background: var(--bg-tertiary);">
            📚 Посмотреть сборники КИМ ФИПИ
          </button>
          <button class="btn-action" onclick="App.openUmschoolModal('${this.currentSubjectId}')" style="background: #7c3aed; color: white;">
            🟣 Пробник Умскул с решениями
          </button>
          <button class="btn-action" onclick="App.switchView('cheatsheet')">
            Вернуться к шпаргалкам 📖
          </button>
        </div>
      </div>
    `;
  }
};
