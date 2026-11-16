// AI Tutor Widget for "Выжимка ОГЭ" (Чикская СОШ № 6)
// Real AI Engine with instant answer generation & subject navigation

(function() {
  // 1. Inject Styles
  const style = document.createElement('style');
  style.id = 'ai-tutor-styles';
  style.textContent = `
    /* Floating AI Button */
    .ai-tutor-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 62px;
      height: 62px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
      z-index: 999999;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      user-select: none;
      border: 2.5px solid rgba(255, 255, 255, 0.3);
    }
    .ai-tutor-fab:hover {
      transform: scale(1.08) translateY(-3px);
      box-shadow: 0 12px 32px rgba(99, 102, 241, 0.7);
    }
    .ai-tutor-fab:active {
      transform: scale(0.95);
    }
    .ai-tutor-fab .ai-icon {
      font-size: 30px;
      line-height: 1;
    }
    .ai-tutor-fab .ai-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 15px;
      height: 15px;
      background: #10b981;
      border: 2.5px solid #18181b;
      border-radius: 50%;
      animation: pulse-green 2s infinite;
    }
    @keyframes pulse-green {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }

    /* Chat Window */
    .ai-tutor-window {
      position: fixed;
      bottom: 98px;
      right: 24px;
      width: 390px;
      max-width: calc(100vw - 32px);
      height: 560px;
      max-height: calc(100vh - 120px);
      border-radius: 22px;
      display: flex;
      flex-direction: column;
      z-index: 999999;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      pointer-events: none;
    }
    .ai-tutor-window.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    [data-theme="dark"] .ai-tutor-window {
      background: rgba(22, 27, 46, 0.96);
      border: 1px solid rgba(255, 255, 255, 0.14);
      backdrop-filter: blur(18px);
      color: #f1f5f9;
    }
    [data-theme="light"] .ai-tutor-window {
      background: rgba(255, 255, 255, 0.98);
      border: 1.5px solid #cbd5e1;
      backdrop-filter: blur(18px);
      color: #0f172a;
    }

    /* Header */
    .ai-tutor-header {
      padding: 14px 18px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(217, 70, 239, 0.18));
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .ai-tutor-title-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .ai-tutor-avatar {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6366f1, #d946ef);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }
    .ai-tutor-title {
      font-size: 15px;
      font-weight: 700;
      line-height: 1.2;
    }
    .ai-tutor-subtitle {
      font-size: 11px;
      opacity: 0.75;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .ai-tutor-subtitle::before {
      content: "";
      width: 6px;
      height: 6px;
      background: #10b981;
      border-radius: 50%;
      display: inline-block;
    }
    .ai-tutor-close-btn {
      background: transparent;
      border: none;
      color: inherit;
      font-size: 20px;
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: all 0.2s;
    }
    .ai-tutor-close-btn:hover {
      opacity: 1;
      background: rgba(125, 125, 125, 0.15);
    }

    /* Quick Chips */
    .ai-tutor-chips {
      padding: 8px 12px;
      display: flex;
      gap: 6px;
      overflow-x: auto;
      white-space: nowrap;
      border-bottom: 1px solid rgba(125, 125, 125, 0.1);
      scrollbar-width: none;
    }
    .ai-tutor-chips::-webkit-scrollbar {
      display: none;
    }
    .ai-chip {
      background: rgba(99, 102, 241, 0.12);
      color: #6366f1;
      border: 1px solid rgba(99, 102, 241, 0.25);
      border-radius: 12px;
      padding: 5px 11px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      flex-shrink: 0;
    }
    [data-theme="light"] .ai-chip {
      background: #eef2ff;
      color: #4338ca;
      border-color: #c7d2fe;
    }
    .ai-chip:hover {
      background: #6366f1;
      color: #fff;
    }

    /* Messages List */
    .ai-tutor-messages {
      flex: 1;
      padding: 14px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-size: 13.5px;
      line-height: 1.5;
    }
    .ai-msg {
      max-width: 88%;
      padding: 10px 14px;
      border-radius: 14px;
      word-wrap: break-word;
      animation: msg-in 0.25s ease-out;
    }
    @keyframes msg-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .ai-msg-bot {
      align-self: flex-start;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-bottom-left-radius: 4px;
    }
    [data-theme="light"] .ai-msg-bot {
      background: #f1f5f9;
      border-color: #e2e8f0;
      color: #1e293b;
    }
    .ai-msg-user {
      align-self: flex-end;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #fff;
      border-bottom-right-radius: 4px;
    }

    /* Action Links in Chat */
    .ai-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      margin-right: 6px;
      padding: 6px 12px;
      background: #6366f1;
      color: #fff !important;
      font-weight: 600;
      font-size: 12.5px;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.35);
    }
    .ai-link-btn:hover {
      background: #4f46e5;
      transform: translateY(-1px);
    }

    /* Input Footer */
    .ai-tutor-footer {
      padding: 10px 14px;
      border-top: 1px solid rgba(125, 125, 125, 0.1);
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .ai-tutor-input {
      flex: 1;
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid rgba(125, 125, 125, 0.25);
      background: rgba(125, 125, 125, 0.08);
      color: inherit;
      font-size: 13.5px;
      outline: none;
      transition: border 0.2s;
    }
    .ai-tutor-input:focus {
      border-color: #6366f1;
    }
    .ai-tutor-send-btn {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: #6366f1;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
      transition: all 0.2s;
    }
    .ai-tutor-send-btn:hover {
      background: #4f46e5;
    }
    .ai-typing-indicator {
      display: flex;
      gap: 4px;
      padding: 8px 12px;
    }
    .ai-typing-dot {
      width: 6px;
      height: 6px;
      background: #6366f1;
      border-radius: 50%;
      animation: typing 1.4s infinite ease-in-out;
    }
    .ai-typing-dot:nth-child(1) { animation-delay: 0s; }
    .ai-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .ai-typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing {
      0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
      40% { transform: scale(1.1); opacity: 1; }
    }

    /* Mobile */
    @media (max-width: 600px) {
      .ai-tutor-fab {
        bottom: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
      }
      .ai-tutor-window {
        bottom: 86px;
        right: 12px;
        left: 12px;
        width: auto;
        max-width: none;
        height: 500px;
      }
    }
  `;
  document.head.appendChild(style);

  // 2. Build DOM
  const fab = document.createElement('div');
  fab.className = 'ai-tutor-fab';
  fab.title = 'ИИ-Репетитор ОГЭ (Нажми для открытия)';
  fab.innerHTML = `
    <span class="ai-icon">🤖</span>
    <span class="ai-badge"></span>
  `;

  const win = document.createElement('div');
  win.className = 'ai-tutor-window';
  win.innerHTML = `
    <div class="ai-tutor-header">
      <div class="ai-tutor-title-wrap">
        <div class="ai-tutor-avatar">🤖</div>
        <div>
          <div class="ai-tutor-title">ИИ-Репетитор ОГЭ</div>
          <div class="ai-tutor-subtitle">Чикская СОШ № 6 • В сети</div>
        </div>
      </div>
      <button class="ai-tutor-close-btn" id="ai-close-btn" title="Закрыть">✕</button>
    </div>
    <div class="ai-tutor-chips">
      <button class="ai-chip" data-query="дай ссылку на математику">📐 Математика</button>
      <button class="ai-chip" data-query="дай ссылку на русский язык">📖 Русский</button>
      <button class="ai-chip" data-query="дай ссылку на обществознание">🏛️ Общество</button>
      <button class="ai-chip" data-query="дай ссылку на информатику">💻 Информатика</button>
      <button class="ai-chip" data-query="дай ссылку на физику">⚡ Физика</button>
      <button class="ai-chip" data-query="дай ссылку на историю">📜 История</button>
      <button class="ai-chip" data-query="дай ссылку на химию">🧪 Химия</button>
      <button class="ai-chip" data-query="где потренировать тесты ОГЭ?">🎯 Тесты</button>
    </div>
    <div class="ai-tutor-messages" id="ai-msg-list">
      <div class="ai-msg ai-msg-bot">
        👋 Привет! Я настоящий ИИ-репетитор по ОГЭ.<br><br>
        Задай мне <b>любой вопрос</b> по школьной программе — я объясню тему простыми словами и без занудства! А если тебе нужна ссылка на предмет или тесты — просто напиши, и я сразу переведу тебя на нужную страницу сайта.
      </div>
    </div>
    <div class="ai-tutor-footer">
      <input type="text" class="ai-tutor-input" id="ai-input" placeholder="Задай любой вопрос по ОГЭ..." autocomplete="off">
      <button class="ai-tutor-send-btn" id="ai-send-btn" title="Отправить">➤</button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(win);

  const msgList = win.querySelector('#ai-msg-list');
  const input = win.querySelector('#ai-input');
  const sendBtn = win.querySelector('#ai-send-btn');
  const closeBtn = win.querySelector('#ai-close-btn');

  function toggleChat() {
    win.classList.toggle('open');
    if (win.classList.contains('open')) {
      input.focus();
    }
  }

  fab.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', () => win.classList.remove('open'));

  // Quick Chips
  win.querySelectorAll('.ai-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query');
      if (q) {
        input.value = q;
        sendMessage();
      }
    });
  });

  // Navigate to site sections
  function navigateToSection(target) {
    if (!target) return;
    target = target.replace('#', '').trim().toLowerCase();

    const subjectMap = {
      'math': 'math',
      'russian': 'russian',
      'social': 'social',
      'informatics': 'informatics',
      'history': 'history',
      'physics': 'physics',
      'chemistry': 'chemistry'
    };

    if (subjectMap[target] && typeof App !== 'undefined' && App.selectSubject) {
      App.selectSubject(subjectMap[target]);
      if (window.innerWidth < 600) win.classList.remove('open');
      return;
    }

    if (target === 'quiz' && typeof App !== 'undefined' && App.switchView) {
      App.switchView('quiz');
      if (window.innerWidth < 600) win.classList.remove('open');
      return;
    }

    if (target === 'calculator' && typeof App !== 'undefined' && App.switchView) {
      App.switchView('calculator');
      if (window.innerWidth < 600) win.classList.remove('open');
      return;
    }

    if (target === 'cheatsheet' && typeof App !== 'undefined' && App.switchView) {
      App.switchView('cheatsheet');
      if (window.innerWidth < 600) win.classList.remove('open');
      return;
    }
  }

  // Intercept links inside messages
  msgList.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        navigateToSection(href);
      }
    }
  });

  // Format message text and markdown links
  function formatBotText(raw) {
    let clean = raw.replace(/\n/g, '<br>');
    clean = clean.replace(/\\\(|\\\)/g, '').replace(/\\\[|\\\]/g, '');
    clean = clean.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    clean = clean.replace(/\[([^\]]+)\]\((#[a-z0-9_\-]+)\)/gi, function(match, label, hash) {
      return `<a href="${hash}" class="ai-link-btn">👉 ${label}</a>`;
    });
    clean = clean.replace(/href="https:\/\/oge-vyzhimka\.github\.io\/vijimka-oge\/#(math|russian|physics|social|history|informatics|chemistry|quiz|calculator)"/gi, 'href="#$1" class="ai-link-btn"');
    return clean;
  }

  function addMessage(text, isUser = false) {
    const msg = document.createElement('div');
    msg.className = `ai-msg ${isUser ? 'ai-msg-user' : 'ai-msg-bot'}`;
    if (isUser) {
      msg.textContent = text;
    } else {
      msg.innerHTML = formatBotText(text);
    }
    msgList.appendChild(msg);
    msgList.scrollTop = msgList.scrollHeight;
  }

  // Real AI Query function
  async function queryAI(prompt) {
    // 1. Primary: Supabase Cloud Function with Education Engine & LLM
    try {
      const sRes = await fetch('https://rkzzfszozgleeujkxzlb.supabase.co/functions/v1/telegram-bot?ai_ask=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt })
      });
      if (sRes.ok) {
        const sData = await sRes.json();
        if (sData && sData.ok && sData.answer) {
          return sData.answer;
        }
      }
    } catch (e) {
      console.warn('Supabase AI endpoint error, trying browser Wikipedia engine:', e);
    }

    // 2. Backup: Wikipedia Knowledge Engine directly in Browser
    try {
      const clean = prompt.replace(/(что такое|кто такой|кто такая|как решить|как решать|объясни|расскажи о|расскажи про|формула|правило|теорема|закон|дай ссылку на|ссылка на)/gi, '').trim();
      if (clean.length >= 2) {
        const searchUrl = `https://ru.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(clean)}&limit=1&namespace=0&format=json&origin=*`;
        const sRes = await fetch(searchUrl);
        const sData = await sRes.json();
        if (Array.isArray(sData) && sData.length > 1 && sData[1].length > 0) {
          const pageTitle = sData[1][0];
          const sumUrl = `https://ru.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`;
          const sumRes = await fetch(sumUrl);
          const sumData = await sumRes.json();
          if (sumData && sumData.extract) {
            let extract = sumData.extract;
            const sentences = extract.split(/(?<=[.!?])\s+/);
            if (sentences.length > 3) extract = sentences.slice(0, 3).join(' ');

            let link = '\n\n[Перейти к материалам](#quiz)';
            const combo = (prompt + ' ' + pageTitle + ' ' + extract).toLowerCase();
            if (combo.match(/(матем|алгебр|геомет|уравнен|дискриминант|пифагор|синус|косинус|дробь|треугольн|квадрат|число)/)) {
              link = '\n\n[Открыть раздел «Математика»](#math)';
            } else if (combo.match(/(русск|орфограф|пунктуац|запят|причаст|деепричаст|сочинен|изложен|падеж|глагол)/)) {
              link = '\n\n[Открыть раздел «Русский язык»](#russian)';
            } else if (combo.match(/(физик|ом|ньютон|паскал|джоул|напряжен|ток|скорост|ускорен|сил|масс|энерги)/)) {
              link = '\n\n[Открыть раздел «Физика»](#physics)';
            } else if (combo.match(/(обществ|государств|прав|закон|конституц|экономик|политик|инфляц|бюджет)/)) {
              link = '\n\n[Открыть раздел «Обществознание»](#social)';
            } else if (combo.match(/(истор|войн|битв|цар|век|русь|революц|ленин|сталин|петр|княз)/)) {
              link = '\n\n[Открыть раздел «История»](#history)';
            } else if (combo.match(/(информ|байт|бит|паскал|питон|алгоритм|excel|граф|код)/)) {
              link = '\n\n[Открыть раздел «Информатика»](#informatics)';
            } else if (combo.match(/(хим|реакц|веществ|кислот|оксид|валентност|менделеев|молекул)/)) {
              link = '\n\n[Открыть раздел «Химия»](#chemistry)';
            }
            return `💡 **${sumData.title}:**\n${extract}${link}`;
          }
        }
      }
    } catch (e) {
      console.warn('Wiki browser search error:', e);
    }

    // 3. Fallback smart subject rules
    const p = prompt.toLowerCase();
    if (p.includes('матем') || p.includes('алгебр') || p.includes('геомет')) {
      return 'В математике на ОГЭ главное — набрать не менее 2 баллов по геометрии! Все формулы и алгоритмы собраны у нас: [Открыть раздел «Математика»](#math)';
    }
    if (p.includes('русск') || p.includes('сочинен') || p.includes('изложен')) {
      return 'Для успешной сдачи русского языка важно помнить правила орфографии и структуру сочинения 13.3. Переходи в раздел: [Открыть раздел «Русский язык»](#russian)';
    }
    if (p.includes('обществ')) {
      return 'По обществознанию нужно знать пять сфер: экономика, политика, право, общество и духовная сфера. Все конспекты тут: [Открыть раздел «Обществознание»](#social)';
    }
    if (p.includes('информ')) {
      return 'В информатике важно тренировать задания на графы, кодирование и электронные таблицы. Полная выжимка: [Открыть раздел «Информатика»](#informatics)';
    }
    if (p.includes('физик')) {
      return 'Физика требует знания основных формул кинематики, динамики и законов Ньютона. Все шпаргалки здесь: [Открыть раздел «Физика»](#physics)';
    }
    if (p.includes('истор')) {
      return 'В истории учи хронологию по векам и сопоставление событий с правителями. Все даты: [Открыть раздел «История»](#history)';
    }
    if (p.includes('хим')) {
      return 'В химии важно знать таблицу Менделеева, типы реакций и формулы солей и кислот. Разбор тем: [Открыть раздел «Химия»](#chemistry)';
    }
    if (p.includes('тест') || p.includes('тренаж')) {
      return 'Интерактивные мини-тесты с моментальной проверкой ответов: [Открыть тесты](#quiz)';
    }
    if (p.includes('калькулятор') || p.includes('балл')) {
      return 'Калькулятор баллов ОГЭ: [Открыть калькулятор](#calculator)';
    }

    return 'Я твой виртуальный репетитор по ОГЭ! Задай мне любой вопрос по школьной программе, и я помогу разобраться. Выбирай предмет: [Математика](#math), [Русский язык](#russian), [Физика](#physics), [Обществознание](#social), [История](#history), [Информатика](#informatics), [Химия](#chemistry) или [Тесты](#quiz).';
  }

  
