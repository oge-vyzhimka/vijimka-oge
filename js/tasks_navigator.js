/**
 * ОГЭ-ВЫЖИМКА — Интерактивный навигатор по номерам заданий ОГЭ
 * Позволяет нажать на любой номер задания (1, 2, 3...) и получить всю теорию, алгоритм, примеры и ловушки
 */
(function() {
  // 1. Inject responsive styles
  if (!document.getElementById('oge-tasks-nav-styles')) {
    const style = document.createElement('style');
    style.id = 'oge-tasks-nav-styles';
    style.textContent = `
      .tasks-nav-card {
        background: var(--bg-card, #111724);
        border: 1px solid var(--border-color, rgba(255,255,255,0.08));
        border-radius: var(--radius-lg, 14px);
        padding: 1.25rem 1.35rem;
        margin-bottom: 1.5rem;
        box-shadow: var(--shadow-md, 0 4px 16px rgba(0,0,0,0.25));
      }
      .tasks-nav-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }
      .tasks-nav-title {
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--text-primary, #f8fafc);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0;
      }
      .tasks-nav-subtitle {
        font-size: 0.85rem;
        color: var(--text-secondary, #94a3b8);
        margin-top: 0.25rem;
      }
      .tasks-nav-legend {
        display: flex;
        gap: 0.75rem;
        font-size: 0.78rem;
        color: var(--text-secondary, #94a3b8);
      }
      .tasks-legend-item {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
      .tasks-legend-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
      }
      .tasks-legend-dot.part1 { background: #3b82f6; }
      .tasks-legend-dot.part2 { background: #a855f7; }
      .tasks-nav-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
        gap: 0.6rem;
      }
      @media (max-width: 600px) {
        .tasks-nav-grid {
          grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));
          gap: 0.45rem;
        }
        .tasks-nav-card {
          padding: 1rem;
        }
      }
      .task-num-btn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0.65rem 0.75rem;
        background: var(--bg-tertiary, #171f30);
        border: 1.5px solid var(--border-color, rgba(255,255,255,0.08));
        border-left: 3.5px solid #3b82f6;
        border-radius: 10px;
        cursor: pointer;
        text-align: left;
        transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;
        min-height: 66px;
        color: var(--text-primary, #f8fafc);
        font-family: inherit;
      }
      .task-num-btn.is-part2 {
        border-left-color: #a855f7;
      }
      .task-num-btn:hover {
        transform: translateY(-2px);
        border-color: #3b82f6;
        box-shadow: 0 6px 16px rgba(59, 130, 246, 0.22);
      }
      .task-num-btn.is-part2:hover {
        border-color: #a855f7;
        box-shadow: 0 6px 16px rgba(168, 85, 247, 0.22);
      }
      .task-num-btn:active {
        transform: scale(0.97);
      }
      .task-num-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.25rem;
      }
      .task-num-badge {
        font-size: 1.05rem;
        font-weight: 800;
        color: #60a5fa;
      }
      [data-theme="light"] .task-num-badge {
        color: #2563eb;
      }
      .task-num-btn.is-part2 .task-num-badge {
        color: #c084fc;
      }
      [data-theme="light"] .task-num-btn.is-part2 .task-num-badge {
        color: #7e22ce;
      }
      .task-num-part-tag {
        font-size: 0.65rem;
        font-weight: 600;
        opacity: 0.7;
        text-transform: uppercase;
      }
      .task-num-short {
        font-size: 0.75rem;
        line-height: 1.25;
        color: var(--text-secondary, #94a3b8);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Extend TaskDetails to support opening by task number index
  function attachTaskDetailsMethod() {
    if (typeof TaskDetails !== 'undefined' && !TaskDetails.openByNumber) {
      TaskDetails.openByNumber = function(subjectId, idx) {
        const db = window.OGE_TASKS_BY_NUMBER || {};
        const list = db[subjectId];
        if (!list || !list[idx]) return;
        this.currentSubject = subjectId;
        this.taskList = list;
        this.currentTaskIndex = idx;
        this.activeTab = 'theory';
        this.renderModal();
        this.showModal();
      };
    }
  }

  // 3. Render function for the numbered tasks grid
  window.renderTasksNavigator = function(subjectId) {
    attachTaskDetailsMethod();
    const container = document.getElementById('cheatsheet-tasks-grid-container');
    if (!container) return;

    const db = window.OGE_TASKS_BY_NUMBER || {};
    const tasks = db[subjectId];
    if (!tasks || !tasks.length) {
      container.innerHTML = '';
      return;
    }

    const subjTitle = (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[subjectId])
      ? SUBJECTS_DATA[subjectId].title
      : '';

    container.innerHTML = `
      <div class="tasks-nav-card">
        <div class="tasks-nav-header">
          <div>
            <h3 class="tasks-nav-title">🎯 Навигатор по номерам заданий ОГЭ (${subjTitle})</h3>
            <div class="tasks-nav-subtitle">Нажми на любой номер задания — откроется полная теория, алгоритм решения, примеры ФИПИ и ловушки</div>
          </div>
          <div class="tasks-nav-legend">
            <span class="tasks-legend-item"><span class="tasks-legend-dot part1"></span> Часть 1</span>
            <span class="tasks-legend-item"><span class="tasks-legend-dot part2"></span> Часть 2 / ПК / Устная</span>
          </div>
        </div>
        <div class="tasks-nav-grid">
          ${tasks.map((t, idx) => {
            const isPart2 = (t.part || '').includes('2') || (t.part || '').includes('ПК') || (t.part || '').includes('Письмо') || (t.part || '').includes('Говорение');
            return `
              <button type="button"
                      class="task-num-btn ${isPart2 ? 'is-part2' : ''}"
                      onclick="TaskDetails.openByNumber('${subjectId}', ${idx})"
                      title="${t.title}">
                <div class="task-num-top">
                  <span class="task-num-badge">№ ${t.num}</span>
                  <span class="task-num-part-tag">${isPart2 ? 'Ч.2' : 'Ч.1'}</span>
                </div>
                <span class="task-num-short">${t.shortTitle}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  };

  // 4. Hook into App.renderCheatsheet safely
  function hookApp() {
    attachTaskDetailsMethod();
    if (typeof App !== 'undefined' && App.renderCheatsheet && !App._tasksNavHooked) {
      const origRender = App.renderCheatsheet.bind(App);
      App.renderCheatsheet = function() {
        origRender();
        if (typeof window.renderTasksNavigator === 'function') {
          window.renderTasksNavigator(App.currentSubject);
        }
      };
      App._tasksNavHooked = true;
      if (App.currentSubject) {
        window.renderTasksNavigator(App.currentSubject);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookApp);
  } else {
    hookApp();
  }
  setTimeout(hookApp, 250);
  setTimeout(hookApp, 800);
})();
