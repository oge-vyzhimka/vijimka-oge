/**
 * ОГЭ-ВЫЖИМКА — Интерактивный калькулятор баллов ОГЭ
 * Реализует официальные шкалы ФИПИ и спецправила (геометрия в математике, грамотность в русском)
 */

const Calculator = {
  currentSubjectId: "math",

  init() {
    this.renderSubjectOptions();
    this.bindEvents();
    this.calculate();
  },

  renderSubjectOptions() {
    const select = document.getElementById("calc-subject-select");
    if (!select) return;

    select.innerHTML = Object.values(SUBJECTS_DATA).map(subj => `
      <option value="${subj.id}" ${subj.id === this.currentSubjectId ? "selected" : ""}>
        ${subj.icon} ${subj.title} (макс. ${subj.examInfo.maxScore} б.)
      </option>
    `).join("");
  },

  bindEvents() {
    const select = document.getElementById("calc-subject-select");
    const scoreInput = document.getElementById("calc-score-input");
    const mathGeomGroup = document.getElementById("calc-math-geom-group");
    const rusLitGroup = document.getElementById("calc-rus-lit-group");

    if (select) {
      select.addEventListener("change", (e) => {
        this.currentSubjectId = e.target.value;
        this.updateSubjectUI();
        this.calculate();
      });
    }

    if (scoreInput) {
      scoreInput.addEventListener("input", () => this.calculate());
    }

    const geomInput = document.getElementById("calc-geom-input");
    if (geomInput) {
      geomInput.addEventListener("input", () => this.calculate());
    }

    const litInput = document.getElementById("calc-lit-input");
    if (litInput) {
      litInput.addEventListener("input", () => this.calculate());
    }
  },

  updateSubjectUI() {
    const subj = SUBJECTS_DATA[this.currentSubjectId];
    if (!subj) return;

    const scoreInput = document.getElementById("calc-score-input");
    const scoreMaxLabel = document.getElementById("calc-score-max-label");
    const mathGeomGroup = document.getElementById("calc-math-geom-group");
    const rusLitGroup = document.getElementById("calc-rus-lit-group");

    if (scoreInput) {
      scoreInput.max = subj.examInfo.maxScore;
      scoreInput.value = Math.min(parseInt(scoreInput.value) || 0, subj.examInfo.maxScore);
    }
    if (scoreMaxLabel) {
      scoreMaxLabel.textContent = `из ${subj.examInfo.maxScore} первичных баллов`;
    }

    // Показываем блок геометрии только для математики
    if (mathGeomGroup) {
      mathGeomGroup.style.display = (this.currentSubjectId === "math") ? "block" : "none";
    }

    // Показываем блок грамотности только для русского языка
    if (rusLitGroup) {
      rusLitGroup.style.display = (this.currentSubjectId === "russian") ? "block" : "none";
    }

    this.renderScaleTable();
  },

  renderScaleTable() {
    const container = document.getElementById("calc-scale-table-container");
    const subj = SUBJECTS_DATA[this.currentSubjectId];
    if (!container || !subj) return;

    container.innerHTML = `
      <table class="scale-table">
        <thead>
          <tr>
            <th>Оценка</th>
            <th>Первичные баллы</th>
            <th>Требования и пороги ФИПИ</th>
          </tr>
        </thead>
        <tbody>
          ${subj.scale.map(item => `
            <tr>
              <td><strong class="grade-badge grade-${item.grade}">Оценка «${item.grade}»</strong></td>
              <td>${item.min} – ${item.max} б.</td>
              <td>${item.desc}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  },

  calculate() {
    const subj = SUBJECTS_DATA[this.currentSubjectId];
    if (!subj) return;

    const scoreInput = document.getElementById("calc-score-input");
    const rawScore = parseInt(scoreInput ? scoreInput.value : 0) || 0;
    const clampedScore = Math.max(0, Math.min(rawScore, subj.examInfo.maxScore));

    let finalGrade = 2;
    let statusText = "Экзамен не сдан (двойка)";
    let specialWarning = "";

    // Поиск по шкале
    for (const item of subj.scale) {
      if (clampedScore >= item.min && clampedScore <= item.max) {
        finalGrade = item.grade;
        statusText = item.desc;
        break;
      }
    }

    // Специфическое правило для математики: не менее 2 баллов по геометрии!
    if (this.currentSubjectId === "math") {
      const geomInput = document.getElementById("calc-geom-input");
      const geomScore = parseInt(geomInput ? geomInput.value : 0) || 0;
      if (clampedScore >= 8 && geomScore < 2) {
        finalGrade = 2;
        specialWarning = "⚠️ Внимание: набрано менее 2 баллов по разделу «Геометрия»! По правилам ФИПИ за экзамен выставляется «ДВА», независимо от баллов по алгебре.";
      }
    }

    // Специфическое правило для русского языка: критерии грамотности ГК1-ГК4
    if (this.currentSubjectId === "russian") {
      const litInput = document.getElementById("calc-lit-input");
      const litScore = parseInt(litInput ? litInput.value : 0) || 0;
      if (finalGrade === 4 && litScore < 4) {
        finalGrade = 3;
        specialWarning = "⚠️ Для получения оценки «4» необходимо набрать не менее 4 баллов за грамотность (ГК1-ГК4). Оценка снижена до «3».";
      } else if (finalGrade === 5 && litScore < 6) {
        finalGrade = 4;
        specialWarning = "⚠️ Для получения оценки «5» необходимо набрать не менее 6 баллов за грамотность (ГК1-ГК4). Оценка снижена до «4».";
      }
    }

    // Отображение результата
    const gradeDisplay = document.getElementById("calc-grade-display");
    const statusDisplay = document.getElementById("calc-status-display");
    const warningDisplay = document.getElementById("calc-warning-display");
    const progressFill = document.getElementById("calc-progress-fill");

    if (gradeDisplay) {
      gradeDisplay.textContent = finalGrade;
      gradeDisplay.className = `calc-grade-display grade-${finalGrade}`;
    }

    if (statusDisplay) {
      statusDisplay.textContent = statusText;
    }

    if (warningDisplay) {
      if (specialWarning) {
        warningDisplay.textContent = specialWarning;
        warningDisplay.style.display = "block";
      } else {
        warningDisplay.style.display = "none";
      }
    }

    if (progressFill) {
      const pct = Math.round((clampedScore / subj.examInfo.maxScore) * 100);
      progressFill.style.width = `${pct}%`;
    }

    // Геймификация: разблокировка ачивки за расчет отличной оценки
    if (finalGrade === 5 && typeof Gamification !== "undefined") {
      Gamification.unlockAchievement("grade_5");
    }
  }
};
