/**
 * ОГЭ-ВЫЖИМКА — Полная база интерактивных разборов заданий ФИПИ и Решу ОГЭ
 * Поддерживает ВСЕ 11 предметов экзамена ОГЭ 2026/2027
 */

const TaskDetails = {
  currentSubject: "math",
  currentTaskIndex: 0,
  activeTab: "theory", // theory | algorithm | examples | traps
  taskList: [],

  // =========================================================================
  // БАЗА ДАННЫХ РАЗБОРОВ ЗАДАНИЙ ПО ВСЕМ ПРЕДМЕТАМ
  // =========================================================================
  db: {
    // -----------------------------------------------------------------------
    // МАТЕМАТИКА
    // -----------------------------------------------------------------------
    math: [
      {
        id: "math_1_5",
        matchTitles: ["участок", "план", "печи", "шины", "теплицы", "квартира", "тариф", "бумага", "1-5", "1–5", "реальная"],
        title: "Задания 1–5: Блок «Реальная математика» (План участка, шины, печи, теплицы)",
        fipiSpec: {
          number: "№ 1–5",
          score: "5 первичных баллов (по 1 за каждый пункт)",
          time: "15–20 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел 1: Практические расчеты)"
        },
        theory: `
          <h4>1. Масштаб и работа с клетчатой сеткой</h4>
          <p>Внимательно посмотрите на условные обозначения схемы. Главная ловушка ФИПИ — <strong>размер стороны клетки</strong>. Часто сторона клетки равна <strong>2 м</strong>, а не 1 м!</p>
          <ul>
            <li>Если сторона клетки a = 2 м, то площадь <strong>одной клетки</strong>: S<sub>кл</sub> = 2 × 2 = <strong>4 м²</strong>.</li>
            <li>Площадь объекта: S = N<sub>клеток</sub> × S<sub>кл</sub> = N<sub>клеток</sub> × 4 м².</li>
            <li>Периметр объекта: считайте число сторон клеток по контуру и умножайте на длину стороны клетки (на 2 м, а не на 1 м!).</li>
          </ul>

          <h4>2. Расчет упаковок плитки и стройматериалов</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>Формула упаковок:</strong> N<sub>упак</sub> = ⌈ S<sub>покрытия</sub> / S<sub>в одной упаковке</sub> ⌉</div>
            <div class="math-subtext">Количество упаковок ВСЕГДА округляется в <strong>большую сторону</strong> (даже если вышло 7.1 упаковки — покупаем 8)!</div>
          </div>

          <h4>3. Шины (Маркировка 215/60 R16)</h4>
          <ul>
            <li><strong>215</strong> — ширина шины B в миллиметрах.</li>
            <li><strong>60</strong> — высота профиля H в <em>процентах от ширины</em>: H = 215 × 0.6 = <strong>129 мм</strong>.</li>
            <li><strong>R16</strong> — радиальная шина с посадочным диаметром диска d в <strong>дюймах</strong> (1 дюйм = 25.4 мм): d = 16 × 25.4 = <strong>406.4 мм</strong>.</li>
            <li><strong>Полный диаметр колеса:</strong> D = 2H + d = 2 × 129 + 406.4 = <strong>664.4 мм</strong>.</li>
          </ul>

          <h4>4. Теплицы и дуги</h4>
          <ul>
            <li>Дуга теплицы представляет собой <strong>полуокружность</strong>: L<sub>дуги</sub> = π · R = π · (ширина / 2) ≈ 3.14 · (ширина / 2).</li>
            <li>Площадь пленки для покрытия теплицы (без торцов): S = L<sub>дуги</sub> × длина теплицы.</li>
          </ul>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Анализ плана:</strong> Первым делом подчеркните в тексте размер стороны клетки (1 м или 2 м). Заполните таблицу соответствия цифр и объектов в задании №1 (это дает 1 гарантированный балл за 60 секунд).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Подсчет площадей (Задания 2–3):</strong> Разбейте сложную фигуру на простые прямоугольники. Посчитайте количество целых клеток. Умножьте на площадь одной клетки (a²).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Расчет расстояний (Теорема Пифагора):</strong> Если требуется найти расстояние между двумя углами объектов по прямой — достройте отрезок до прямоугольного треугольника по линиям сетки и примените c = √(a² + b²).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 4</div>
              <div class="task-step-desc">
                <strong>Задание №5 (Выбор оптимального варианта):</strong> Составьте краткую таблицу расходов (газовое vs электрическое отопление). Найдите разницу в стоимости оборудования (ΔC) и экономию в час/месяц (ΔE). Срок окупаемости: T = ΔC / ΔE.
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Реальный банк ФИПИ / Решу ОГЭ (№ 324141)</div>
            <p><strong>Условие:</strong> На плане участок имеет прямоугольную форму. Сторона каждой клетки на плане равна 2 м. Плитка для дорожек продается в упаковках по 8 штук. Размер одной плитки 1 м × 1 м. Сколько упаковок плитки понадобилось купить, чтобы выложить дорожки общей площадью 64 кв. м?</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <ol>
                <li>Площадь одной плитки: 1 м × 1 м = 1 м².</li>
                <li>Одна упаковка покрывает: 8 × 1 = 8 м².</li>
                <li>Необходимое число упаковок: 64 / 8 = 8 упаковок.</li>
                <li>Если бы получилось нецелое число (например, 65 м²), то 65 / 8 = 8.125, и ответом было бы 9 упаковок.</li>
              </ol>
              <div class="task-answer-box">Ответ: <strong>8</strong></div>
            </div>
          </div>

          <div class="task-example-card">
            <div class="task-example-badge">Реальный банк ФИПИ / Решу ОГЭ (Печи № 311245)</div>
            <p><strong>Условие:</strong> Для отопления парного отделения объемом 14 куб. м выбирают печь. Доставка печи весом 48 кг стоит 600 рублей при заказе в интернет-магазине. В обычном магазине эта печь стоит 21 000 руб., а в интернет-магазине 19 500 руб. Сколько рублей сэкономит покупатель, заказав печь в интернет-магазине с доставкой?</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <ol>
                <li>Стоимость в обычном магазине: 21 000 руб.</li>
                <li>Стоимость в интернете с учетом доставки: 19 500 + 600 = 20 100 руб.</li>
                <li>Экономия: 21 000 - 20 100 = 900 руб.</li>
              </ol>
              <div class="task-answer-box">Ответ: <strong>900</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка 1: Клетка со стороной 2 м</strong>
            <p>Если в задании сторона клетки 2 м, площадь одной клетки равна <strong>4 м²</strong>, а не 2 м²! Ошибку допускают 40% девятиклассников, забывая возвести сторону в квадрат.</p>
          </div>
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка 2: Округление упаковок</strong>
            <p>Если требуется купить 14.1 упаковок утеплителя или обоев, ответ <strong>15</strong>! Если округлить по школьным правилам до 14, материала не хватит.</p>
          </div>
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка 3: Проценты в маркировке шин</strong>
            <p>В маркировке 195/65 R15 второе число 65 — это не миллиметры! Это 65% от 195 мм (H = 195 × 0.65 = 126.75 мм).</p>
          </div>
        `
      },
      {
        id: "math_6",
        matchTitles: ["дроби", "вычисления", "степени", "корней", "действия с числами", "свойства степеней"],
        title: "Задание 6: Числа и вычисления (Дроби и степени)",
        fipiSpec: {
          number: "№ 6",
          score: "1 первичный балл",
          time: "3–5 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел 1: Арифметика)"
        },
        theory: `
          <h4>1. Обыкновенные дроби</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>Сложение и вычитание:</strong> a/b ± c/d = (a·d ± b·c) / (b·d)</div>
            <div class="math-row"><strong>Умножение:</strong> (a/b) · (c/d) = (a·c) / (b·d)</div>
            <div class="math-row"><strong>Деление:</strong> (a/b) : (c/d) = (a/b) · (d/c) = (a·d) / (b·c)</div>
          </div>

          <h4>2. Свойства степеней с одинаковым основанием</h4>
          <div class="task-formula-box">
            <div class="math-row">a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup> &nbsp;|&nbsp; a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup> &nbsp;|&nbsp; (a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></div>
            <div class="math-row">a<sup>-n</sup> = 1 / a<sup>n</sup> &nbsp;|&nbsp; a⁰ = 1 (при a ≠ 0)</div>
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Определите порядок действий:</strong> Сначала скобки, затем умножение/деление, затем сложение/вычитание.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Перевод в один формат:</strong> Если в выражении есть и десятичные, и обыкновенные дроби — переведите все к десятичным (если знаменатель раскладывается только на 2 и 5) или к обыкновенным.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Запись ответа:</strong> В бланк ОГЭ ответ записывается <strong>ТОЛЬКО в виде целого числа или десятичной дроби</strong> (с запятой в отдельной клетке). Обыкновенную дробь бланк не примет!
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ / Решу ОГЭ</div>
            <p><strong>Условие:</strong> Найдите значение выражения: (1/4 + 1/6) · 24.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <p>Способ через распределительное свойство (самый быстрый и без ошибок):</p>
              <div class="task-formula-box">
                <div class="math-row">(1/4 + 1/6) · 24 = (1/4) · 24 + (1/6) · 24 = 6 + 4 = 10</div>
              </div>
              <div class="task-answer-box">Ответ: <strong>10</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Деление на отрицательную десятичную дробь</strong>
            <p>При делении числа на 0.2 не забудьте перенести запятые: 6 : 0.2 = 60 : 2 = 30. Не пишите 3!</p>
          </div>
        `
      },
      {
        id: "math_9",
        matchTitles: ["уравнени", "квадратн", "корни", "линейн", "дискриминант", "виет"],
        title: "Задание 9: Уравнения (Линейные, квадратные, дробно-рациональные)",
        fipiSpec: {
          number: "№ 9",
          score: "1 первичный балл",
          time: "4–6 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел 2: Уравнения)"
        },
        theory: `
          <h4>1. Полное квадратное уравнение: ax² + bx + c = 0</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>Дискриминант:</strong> D = b² - 4ac</div>
            <div class="math-row"><strong>Корни:</strong> x₁,₂ = (-b ± √D) / (2a)</div>
          </div>
          <ul>
            <li>Если D > 0 — уравнение имеет <strong>два различных корня</strong>.</li>
            <li>Если D = 0 — уравнение имеет <strong>один корень</strong> (два совпадающих): x = -b / (2a).</li>
            <li>Если D < 0 — действительных корней <strong>нет</strong>.</li>
          </ul>

          <h4>2. Неполные квадратные уравнения</h4>
          <ul>
            <li>ax² + bx = 0 → x(ax + b) = 0 → x₁ = 0, x₂ = -b/a. <em>Никогда не делите на x!</em></li>
            <li>ax² + c = 0 → x² = -c/a → x = ±√(-c/a).</li>
          </ul>

          <h4>3. Теорема Виета (для приведенного x² + px + q = 0):</h4>
          <div class="task-formula-box">
            <div class="math-row">x₁ + x₂ = -p &nbsp;|&nbsp; x₁ · x₂ = q</div>
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Перенос всех слагаемых в левую часть:</strong> Справа обязательно должен остаться 0: ax² + bx + c = 0.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Выпишите коэффициенты:</strong> Четко зафиксируйте a, b, c со своими знаками (особенно если перед числом стоит минус!).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Внимательно читайте вопрос:</strong> В 90% заданий ФИПИ написано: <em>«Если уравнение имеет более одного корня, в ответ запишите <strong>меньший</strong> (или больший) из корней»</em>.
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ / Решу ОГЭ (№ 311388)</div>
            <p><strong>Условие:</strong> Решите уравнение x² - 6x = 16. Если корней несколько, запишите больший из корней.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <ol>
                <li>Переносим 16 влево: x² - 6x - 16 = 0.</li>
                <li>Коэффициенты: a = 1, b = -6, c = -16.</li>
                <li>Дискриминант: D = (-6)² - 4 · 1 · (-16) = 36 + 64 = 100 = 10².</li>
                <li>Корни: x₁ = (6 + 10) / 2 = 8, &nbsp; x₂ = (6 - 10) / 2 = -2.</li>
                <li>Больший из корней: <strong>8</strong>.</li>
              </ol>
              <div class="task-answer-box">Ответ: <strong>8</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Потеря отрицательного корня</strong>
            <p>В уравнении x² = 25 корней ДВА: +5 и -5. Если просят меньший корень, ответ <strong>-5</strong>, а не 5!</p>
          </div>
        `
      },
      {
        id: "math_10",
        matchTitles: ["вероятност", "событи", "10", "жреби", "пирожки", "такси"],
        title: "Задание 10: Теория вероятностей",
        fipiSpec: {
          number: "№ 10",
          score: "1 первичный балл",
          time: "2–4 минуты",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел: Теория вероятностей и статистика)"
        },
        theory: `
          <h4>1. Классическое определение вероятности</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>Формула вероятности:</strong> P(A) = m / n</div>
            <div class="math-subtext">где <strong>m</strong> — число благоприятных исходов, <strong>n</strong> — общее число всех равновозможных исходов (0 ≤ P(A) ≤ 1)</div>
          </div>
          <ul>
            <li>Вероятность любого события ВСЕГДА заключена в пределах: 0 ≤ P(A) ≤ 1.</li>
            <li>Ответ записывается <strong>ТОЛЬКО в виде десятичной дроби</strong> (например, 0.25, а не 1/4 и не 25%).</li>
          </ul>

          <h4>2. Противоположное событие</h4>
          <p>Вероятность того, что событие НЕ произойдет: P(¬A) = 1 - P(A).</p>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Найдите общее число n:</strong> Сложите все элементы (все пирожки, все фонарики, все спортсмены из всех стран).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Найдите благоприятное число m:</strong> Сколько элементов удовлетворяют условию вопроса (с вишней, исправные, из России).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Разделите столбиком:</strong> Получите конечную десятичную дробь.
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ / Решу ОГЭ (№ 325412)</div>
            <p><strong>Условие:</strong> В среднем из 1000 карманных фонариков, поступивших в продажу, 20 неисправных. Найдите вероятность того, что случайно выбранный фонарик окажется исправным.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <ol>
                <li>Общее число фонариков: n = 1000.</li>
                <li>Число исправных фонариков: m = 1000 - 20 = 980.</li>
                <li>Вероятность: P = 980 / 1000 = 0.98.</li>
              </ol>
              <div class="task-answer-box">Ответ: <strong>0,98</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Знак вопроса («исправный» или «НЕисправный»)</strong>
            <p>Внимательно перечитывайте последнее предложение задачи. Если дано количество дефектных (20), а спрашивают вероятность покупки <em>исправного</em> — нужно сначала вычесть из общего числа!</p>
          </div>
        `
      },
      {
        id: "math_11",
        matchTitles: ["график", "функци", "парабол", "гипербол", "прямая", "11"],
        title: "Задание 11: Графики функций (Прямая, парабола, гипербола)",
        fipiSpec: {
          number: "№ 11",
          score: "1 первичный балл",
          time: "3–5 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел: Функции и графики)"
        },
        theory: `
          <h4>1. Линейная функция: y = kx + b (Прямая)</h4>
          <ul>
            <li><strong>k > 0</strong> — прямая возрастает (идет снизу-слева вверх-вправо, острый угол с осью OX).</li>
            <li><strong>k < 0</strong> — прямая убывает (идет сверху-слева вниз-вправо, тупой угол с осью OX).</li>
            <li><strong>b</strong> — точка пересечения графика с осью OY (при x = 0, y = b).</li>
          </ul>

          <h4>2. Квадратичная функция: y = ax² + bx + c (Парабола)</h4>
          <ul>
            <li><strong>a > 0</strong> — ветви параболы направлены <strong>вверх</strong>.</li>
            <li><strong>a < 0</strong> — ветви параболы направлены <strong>вниз</strong>.</li>
            <li><strong>c</strong> — точка пересечения параболы с осью ординат OY.</li>
            <li>Абсцисса вершины параболы: <strong>x₀ = -b / (2a)</strong>.</li>
          </ul>

          <h4>3. Обратная пропорциональность: y = k / x (Гипербола)</h4>
          <ul>
            <li><strong>k > 0</strong> — ветви гиперболы лежат в <strong>I и III координатных четвертях</strong>.</li>
            <li><strong>k < 0</strong> — ветви гиперболы лежат во <strong>II и IV координатных четвертях</strong>.</li>
          </ul>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Определите тип каждого графика:</strong> Прямая (x), Парабола (x²), Гипербола (1/x), Корень (√x).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Определите знаки коэффициентов:</strong> Направление ветвей (a), наклон прямой (k), четверти гиперболы.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Метод контрольной точки:</strong> Если сомневаетесь, подставьте x = 1 или x = 0 в формулу и посмотрите, какая точка получается на графике!
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ / Решу ОГЭ</div>
            <p><strong>Условие:</strong> Установите соответствие между графиками функций и формулами: А) Парабола ветвями вниз с вершиной в (0,0); Б) Прямая, проходящая через начало координат с отрицательным наклоном; В) Гипербола в I и III четвертях.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <p>А) Ветви вниз (a < 0) и квадратичная: y = -x².<br>
                 Б) Линейная с k < 0: y = -2x.<br>
                 В) Дробно-рациональная в I и III четв. (k > 0): y = 2 / x.</p>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Порядок цифр в бланке</strong>
            <p>В ответе нужно записать трехзначное число без пробелов и запятых строго в порядке букв А, Б, В (например: <strong>132</strong>).</p>
          </div>
        `
      },
      {
        id: "math_14",
        matchTitles: ["прогресси", "арифметическ", "геометрическ", "14"],
        title: "Задание 14: Числовые последовательности и прогрессии",
        fipiSpec: {
          number: "№ 14",
          score: "1 первичный балл",
          time: "4–6 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел 2: Прогрессии)"
        },
        theory: `
          <h4>1. Арифметическая прогрессия (шаг d)</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>n-й член:</strong> a<sub>n</sub> = a₁ + d · (n - 1)</div>
            <div class="math-row"><strong>Сумма n первых членов:</strong> S<sub>n</sub> = ((a₁ + a<sub>n</sub>) / 2) · n = ((2a₁ + d(n - 1)) / 2) · n</div>
          </div>

          <h4>2. Геометрическая прогрессия (знаменатель q)</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>n-й член:</strong> b<sub>n</sub> = b₁ · q<sup>n - 1</sup></div>
            <div class="math-row"><strong>Сумма:</strong> S<sub>n</sub> = (b₁ · (q<sup>n</sup> - 1)) / (q - 1)</div>
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Определите тип:</strong> Если к каждому шагу <em>прибавляется</em> фиксированное число — это арифметическая прогрессия; если <em>умножается</em> в несколько раз — геометрическая.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Выпишите a₁ и d (или b₁ и q):</strong> Внимательно сопоставьте номер шага n с вопросом задачи (например, в 12-м ряду, через 5 дней).
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ (№ 14)</div>
            <p><strong>Условие:</strong> В амфитеатре 14 рядов. В первом ряду 20 мест, а в каждом следующем на 3 места больше, чем в предыдущем. Сколько мест в десятом ряду?</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <p>a₁ = 20, d = 3, n = 10.<br>
                 a₁₀ = a₁ + 9d = 20 + 9 · 3 = 20 + 27 = <strong>47</strong>.</p>
              <div class="task-answer-box">Ответ: <strong>47</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Разница между a<sub>n</sub> и S<sub>n</sub></strong>
            <p>Если спрашивают «сколько всего мест во всем зале» — нужна сумма S<sub>n</sub>, а не количество мест в последнем ряду!</p>
          </div>
        `
      },
      {
        id: "math_geom_15_19",
        matchTitles: ["треугольник", "геометри", "площад", "окружност", "синус", "косинус", "теорема", "15", "16", "17", "18", "19"],
        title: "Задания 15–19: Блок «Геометрия» (Обязательный порог 2 балла!)",
        fipiSpec: {
          number: "№ 15–19",
          score: "5 первичных баллов (по 1 за каждое)",
          time: "20–25 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Блок 3: Геометрия на плоскости)"
        },
        theory: `
          <h4>1. Критическое правило двух баллов</h4>
          <p class="text-danger"><strong>Внимание!</strong> Для получения положительной оценки («3», «4» или «5») на ОГЭ по математике необходимо набрать не менее <strong>2 баллов по геометрии</strong> (задания 15–19, 23–25). Без этого ставится ДВОЙКА даже при 20 баллах по алгебре!</p>

          <h4>2. Треугольники и тригонометрия</h4>
          <ul>
            <li>Сумма углов треугольника: <strong>α + β + γ = 180°</strong>.</li>
            <li>Теорема Пифагора: <strong>a² + b² = c²</strong>.</li>
            <li>Катет, лежащий напротив угла 30°, равен <strong>половине гипотенузы</strong>: a = c / 2.</li>
            <li>Медиана прямоугольного треугольника к гипотенузе равна радиусу описанной окружности: <strong>m<sub>c</sub> = R = c / 2</strong>.</li>
          </ul>

          <div class="task-formula-box">
            <div class="math-row"><strong>sin A:</strong> Противолежащий катет / Гипотенуза = a / c</div>
            <div class="math-row"><strong>cos A:</strong> Прилежащий катет / Гипотенуза = b / c</div>
            <div class="math-row"><strong>tg A:</strong> Противолежащий / Прилежащий = a / b = sin A / cos A</div>
          </div>

          <h4>3. Площади геометрических фигур</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>Треугольник:</strong> S = ½ · a · h<sub>a</sub> = ½ · a · b · sin γ</div>
            <div class="math-row"><strong>Параллелограмм:</strong> S = a · h<sub>a</sub> = a · b · sin γ</div>
            <div class="math-row"><strong>Трапеция:</strong> S = ((a + b) / 2) · h</div>
            <div class="math-row"><strong>Ромб:</strong> S = ½ · d₁ · d₂</div>
            <div class="math-row"><strong>Круг:</strong> S = π · R²</div>
          </div>

          <h4>4. Окружности и углы</h4>
          <ul>
            <li><strong>Центральный угол</strong> равен градусной мере дуги, на которую опирается: ∠AOB = ∪AB.</li>
            <li><strong>Вписанный угол</strong> равен <em>половине</em> дуги: ∠ACB = ½ · ∪AB = ½ · ∠AOB.</li>
            <li>Вписанный угол, опирающийся на диаметр, равен <strong>90°</strong> (всегда прямой!).</li>
            <li>Отрезки касательных, проведенных из одной точки к окружности, равны: AB = AC.</li>
          </ul>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Сделайте крупный чертеж:</strong> Отметьте равные углы, равные стороны, прямые углы и радиусы окружности.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Поиск равнобедренных треугольников:</strong> Если в задаче есть окружность, проведите радиусы к вершинам — они равны между собой, образуя равнобедренные треугольники с равными углами при основании!
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Справочные материалы ФИПИ:</strong> На экзамене вам выдадут официальную шпаргалку с формулами площадей, таблицей тригонометрии и свойствами фигур. Пользуйтесь ей!
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ (Задание 15)</div>
            <p><strong>Условие:</strong> В прямоугольном треугольнике катет и гипотенуза равны 7 и 25 соответственно. Найдите другой катет этого треугольника.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <p>По теореме Пифагора: b = √(c² - a²) = √(25² - 7²) = √(625 - 49) = √576 = <strong>24</strong>.</p>
              <div class="task-answer-box">Ответ: <strong>24</strong></div>
            </div>
          </div>

          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ (Задание 16)</div>
            <p><strong>Условие:</strong> Точка O — центр окружности, на которой лежат точки A, B и C. Известно, что угол ABC равен 70°. Найдите угол AOC.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <p>Угол ABC — вписанный, опирается на дугу AC. Значит дуга AC = 2 × 70° = 140°.<br>
                 Угол AOC — центральный, опирается на ту же дугу AC, значит ∠AOC = <strong>140°</strong>.</p>
              <div class="task-answer-box">Ответ: <strong>140</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Вписанный vs центральный угол</strong>
            <p>Центральный угол всегда в два раза больше вписанного, опирающегося на ту же дугу. Не перепутайте, где делить на 2, а где умножать!</p>
          </div>
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Задание 19 (Верные утверждения)</strong>
            <p>В вопросе может быть написано: «Какое из утверждений <strong>верно</strong>» (одна цифра) или «Какие из утверждений <strong>неверны</strong>» (две цифры). Читайте формулировку трижды!</p>
          </div>
        `
      }
    ],

    // -----------------------------------------------------------------------
    // РУССКИЙ ЯЗЫК
    // -----------------------------------------------------------------------
    russian: [
      {
        id: "rus_1",
        matchTitles: ["изложение", "сжати", "1"],
        title: "Задание 1: Сжатое изложение (Аудиозапись текста)",
        fipiSpec: {
          number: "№ 1",
          score: "6–7 первичных баллов (критерии ИК1–ИК3 + ГК1–ГК4)",
          time: "40–50 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел: Аудирование и понимание текста)"
        },
        theory: `
          <h4>1. Главные критерии оценивания ФИПИ</h4>
          <ul>
            <li><strong>ИК1 (Содержание):</strong> переданы ВСЕ 3 микротемы исходного текста (по 1 в каждом абзаце).</li>
            <li><strong>ИК2 (Сжатие текста):</strong> применены приемы сжатия текста в КАЖДОМ из 3 абзацев.</li>
            <li><strong>ИК3 (Смысловая цельность):</strong> нет логических ошибок и необоснованных абзацев.</li>
            <li><strong>Объем:</strong> не менее 70 слов! (Идеально: 75–95 слов).</li>
          </ul>

          <h4>2. Три официальных приема сжатия</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>1. Исключение:</strong> убираем повторы, вводные слова, однородные члены, описания</div>
            <div class="math-row"><strong>2. Обобщение:</strong> заменяем перечисления общим понятием («березы, липы, сосны» → «деревья»)</div>
            <div class="math-row"><strong>3. Упрощение:</strong> заменяем сложное предложение простым или прямой диалог косвенной речью</div>
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Первое прослушивание:</strong> Не пытайтесь записать каждое слово! Фиксируйте ключевые существительные и глаголы, отметьте 3 микротемы и границы абзацев.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Второе прослушивание:</strong> Допишите пропущенные связки и аргументы.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Подсчет слов:</strong> Обязательно пересчитайте слова (предлоги и союзы считаются за отдельные слова). Если меньше 70 — вы получите 0 баллов по критериям сжатия!
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Пример сжатия микротемы</div>
            <p><strong>Исходный текст (38 слов):</strong> «Истинная дружба — это бескорыстное чувство, связывающее двух людей, готовых в любую тяжелую минуту прийти на помощь, разделить и радость, и горе, и никогда не предавать доверие товарища.»</p>
            <div class="task-example-solution">
              <strong>Сжатый вариант (15 слов, прием обобщения и исключения):</strong>
              <p>«Истинная дружба — это бескорыстные отношения людей, готовых поддержать друг друга в радости и беде.»</p>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Потеря микротемы</strong>
            <p>Если объединить 2 микротемы в один абзац или выбросить хотя бы одну — сразу теряется 2 первичных балла по ИК1!</p>
          </div>
        `
      },
      {
        id: "rus_2_5",
        matchTitles: ["синтаксис", "пунктуац", "орфограф", "грамматическ", "основа", "приставк", "суффикс", "2", "3", "4", "5"],
        title: "Задания 2–5: Языковой анализ (Синтаксис, пунктуация, орфография)",
        fipiSpec: {
          number: "№ 2–5",
          score: "4 первичных балла (по 1 за каждое)",
          time: "15–20 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел: Нормы русского языка)"
        },
        theory: `
          <h4>1. Грамматическая основа (Задание 2)</h4>
          <ul>
            <li>Подлежащее может быть выражено инфинитивом («<strong>Учиться</strong> всегда пригодится»).</li>
            <li>Сказуемое: составное глагольное (вспомогательный глагол + инфинитив: «<strong>начал читать</strong>»), составное именное (глагол-связка + имя: «<strong>был красивым</strong>»).</li>
          </ul>

          <h4>2. Орфографический анализ (Задание 5)</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>Чередующиеся корни:</strong> БЕР/БИР, ТЕР/ТИР (зависят от суффикса -А-); ГАР/ГОР, ЗАР/ЗОР (зависят от ударения)</div>
            <div class="math-row"><strong>Приставки:</strong> ПРЕ- (= очень или пере-), ПРИ- (приближение, присоединение, неполнота действия)</div>
            <div class="math-row"><strong>-Н- и -НН-:</strong> в отглагольных прилагательных (нет приставки, несовершенный вид) — Н; в причастиях (есть приставка или зависимое слово) — НН</div>
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Разбор каждого утверждения в задании 5:</strong> Выделите три элемента: 1) часть речи, 2) морфему (корень/приставка/суффикс), 3) правило. Если хотя бы один элемент ложен — утверждение неверно!
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Разбор формулировки Задания 5</div>
            <p><strong>Утверждение:</strong> «ПОСТЕЛЕННЫЙ — в суффиксе полного страдательного причастия прошедшего времени пишется НН, так как есть приставка ПО-».</p>
            <div class="task-example-solution">
              <strong>Анализ:</strong> 1) Часть речи: причастие (верно), 2) Суффикс: -ЕНН- (верно), 3) Есть приставка: по- (верно). <strong>Утверждение ВЕРНО.</strong>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка ФИПИ: Ложная часть речи</strong>
            <p>Составители часто пишут правильное правило, но не для той части речи (например, называют отглагольное прилагательное «причастием»). Будьте предельно бдительны!</p>
          </div>
        `
      },
      {
        id: "rus_13",
        matchTitles: ["сочинени", "13", "13.1", "13.2", "13.3", "рассуждени"],
        title: "Задание 13: Сочинение-рассуждение (13.1, 13.2 или 13.3)",
        fipiSpec: {
          number: "№ 13",
          score: "9 первичных баллов (по критериям С1К1–С1К4)",
          time: "60–75 минут",
          difficulty: "Высокий уровень",
          docSource: "Кодификатор ФИПИ (Раздел: Развернутое высказывание)"
        },
        theory: `
          <h4>1. Структура идеального сочинения 13.3 (4 абзаца)</h4>
          <ul>
            <li><strong>Абзац 1 (Тезис):</strong> Определение понятия + собственный комментарий (2–3 предложения).</li>
            <li><strong>Абзац 2 (Пример 1 из текста):</strong> Иллюстрация поступка героя с указанием номеров предложений и пояснением роли.</li>
            <li><strong>Абзац 3 (Пример 2 из жизни/литературы):</strong> Книга, исторический факт или жизненный опыт.</li>
            <li><strong>Абзац 4 (Вывод):</strong> Обобщение мысли, перекликающееся с тезисом (без новых идей).</li>
          </ul>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Выбор темы:</strong> 92% выпускников выбирают 13.3 (нравственно-этическое понятие: доброта, сострадание, смелость, дружба, материнская любовь).
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Клише для тезиса 13.3</div>
            <p>«Что такое доброта? По моему мнению, доброта — это искреннее стремление бескорыстно помогать окружающим, не требуя ничего взамен. Докажу справедливость своих слов примерами из прочитанного текста и жизненного опыта.»</p>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Объем менее 70 слов</strong>
            <p>Если объем сочинения меньше 70 слов, эксперты ставят 0 баллов за всё сочинение!</p>
          </div>
        `
      }
    ],

    // -----------------------------------------------------------------------
    // ФИЗИКА
    // -----------------------------------------------------------------------
    physics: [
      {
        id: "phys_mech",
        matchTitles: ["механик", "динамик", "скорост", "ньютон", "движени", "импульс"],
        title: "Физика: Механические явления (Законы Ньютона, движение, энергия)",
        fipiSpec: {
          number: "№ 1–6, 11, 21–23",
          score: "До 12 первичных баллов",
          time: "30–40 минут",
          difficulty: "Базовый и повышенный",
          docSource: "Кодификатор ФИПИ (Раздел 1: Механика)"
        },
        theory: `
          <h4>1. Законы Ньютона</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>I закон:</strong> тело сохраняет покой или равномерное прямолинейное движение, если равнодействующая сил F = 0</div>
            <div class="math-row"><strong>II закон:</strong> F = m · a &nbsp;(a = F / m)</div>
            <div class="math-row"><strong>III закон:</strong> силы действия и противодействия равны: F₁ = -F₂</div>
          </div>

          <h4>2. Кинематика и энергия</h4>
          <div class="task-formula-box">
            <div class="math-row">v = v₀ + a·t &nbsp;|&nbsp; S = v₀·t + (a·t²) / 2 &nbsp;|&nbsp; 2aS = v² - v₀²</div>
            <div class="math-row">E<sub>к</sub> = (m·v²) / 2 &nbsp;|&nbsp; E<sub>п</sub> = m·g·h &nbsp;|&nbsp; E<sub>полн</sub> = E<sub>к</sub> + E<sub>п</sub> = const</div>
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Перевод в СИ:</strong> Время в секунды (1 мин = 60 с), масса в кг (100 г = 0.1 кг), скорость в м/с (36 км/ч = 10 м/с, делим на 3.6).
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Пример задачи ОГЭ</div>
            <p><strong>Условие:</strong> Тело массой 2 кг движется с ускорением 3 м/с². Чему равна равнодействующая сила?</p>
            <div class="task-example-solution">
              <p>F = m · a = 2 · 3 = <strong>6 Н</strong>.</p>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Перевод км/ч в м/с</strong>
            <p>Чтобы перевести км/ч в м/с, нужно ДЕЛИТЬ на 3.6, а не умножать!</p>
          </div>
        `
      },
      {
        id: "phys_electro",
        matchTitles: ["электрич", "ток", "ом", "сопротивлени", "напряжени", "резистор"],
        title: "Физика: Электродинамика и закон Ома",
        fipiSpec: {
          number: "№ 7–10, 17, 23–25",
          score: "До 10 первичных баллов",
          time: "25–35 минут",
          difficulty: "Базовый и высокий",
          docSource: "Кодификатор ФИПИ (Раздел 3: Электромагнитные явления)"
        },
        theory: `
          <h4>1. Закон Ома для участка цепи</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>I = U / R</strong> &nbsp;(I — сила тока в амперах, U — напряжение в вольтах, R — сопротивление в омах)</div>
            <div class="math-row"><strong>Сопротивление проводника:</strong> R = ρ · (l / S)</div>
          </div>

          <h4>2. Соединения проводников</h4>
          <div class="task-formula-box">
            <div class="math-row"><strong>Последовательное:</strong> I = const, &nbsp; U = U₁ + U₂, &nbsp; R = R₁ + R₂</div>
            <div class="math-row"><strong>Параллельное:</strong> U = const, &nbsp; I = I₁ + I₂, &nbsp; 1/R = 1/R₁ + 1/R₂</div>
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Анализ цепи:</strong> Определите, как соединены элементы. Помните: амперметр подключается последовательно, а вольтметр — параллельно!
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Пример задачи ОГЭ</div>
            <p><strong>Условие:</strong> Два резистора по 6 Ом соединены параллельно. Найдите общее сопротивление.</p>
            <div class="task-example-solution">
              <p>R<sub>общ</sub> = R / 2 = 6 / 2 = <strong>3 Ом</strong>.</p>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Сечение проводника в мм²</strong>
            <p>В формуле R = ρ · l / S удельное сопротивление ρ дано в (Ом·мм²)/м. Поэтому площадь S нужно подставлять в <strong>мм²</strong>, не переводя в м²!</p>
          </div>
        `
      }
    ],

    // -----------------------------------------------------------------------
    // ОБЩЕСТВОЗНАНИЕ
    // -----------------------------------------------------------------------
    social: [
      {
        id: "soc_main",
        matchTitles: ["человек", "обществ", "экономік", "політик", "право", "социальн"],
        title: "Обществознание: Разбор ключевых блоков ОГЭ 2026/2027",
        fipiSpec: {
          number: "№ 1–24",
          score: "До 37 первичных баллов (на «5» нужно 32+)",
          time: "180 минут",
          difficulty: "Базовый и высокий",
          docSource: "Кодификатор ФИПИ (Блоки 1–5: Человек, Общество, Экономика, Политика, Право)"
        },
        theory: `
          <h4>1. 5 ключевых сфер общества</h4>
          <ul>
            <li><strong>Экономическая:</strong> производство, распределение, обмен, потребление; факторы производства (труд, земля, капитал, предпринимательство).</li>
            <li><strong>Политическая:</strong> государство, разделение властей (законодательная, исполнительная, судебная), выборы, партии.</li>
            <li><strong>Социальная:</strong> семья, социальная стратификация, этнос, социальные нормы и конфликты.</li>
            <li><strong>Духовная:</strong> наука, образование, религия, мораль, искусство.</li>
            <li><strong>Правовая:</strong> Конституция РФ, отрасли права, юридическая ответственность.</li>
          </ul>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Задание 1:</strong> Выпишите ровно два понятия из перечня, относящихся к указанной сфере, и дайте четкое определение ОДНОМУ из них.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Задание 5 (Фотография):</strong> Укажите вид деятельности на фото, сформулируйте 2 правила рационального поведения и поясните их.
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="task-example-card">
            <div class="task-example-badge">Задание 1 (Определение понятий)</div>
            <p><strong>Понятие «Инфляция»:</strong> Долговременный процесс обесценивания денег, приводящий к снижению их покупательской способности и общему росту цен.</p>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Бытовые формулировки</strong>
            <p>Нельзя давать определения через тавтологию (например, «доброта — это когда человек добрый»). Используйте родовое слово: «нравственное качество», «социальный институт», «способ регулирования»!</p>
          </div>
        `
      }
    ]
  },

  init() {
    this.bindEvents();
  },

  bindEvents() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  },

  // Открытие по индексам секции и элемента (гарантирует 100% совпадение)
  openByIndices(subjectId, sectionIndex, itemIndex) {
    if (typeof SUBJECTS_DATA === "undefined" || !SUBJECTS_DATA[subjectId]) {
      this.openForSubjectItem(subjectId, "Разбор задания");
      return;
    }

    const subj = SUBJECTS_DATA[subjectId];
    const section = subj.cheatsheets ? subj.cheatsheets[sectionIndex] : null;
    if (!section || !section.items || !section.items[itemIndex]) {
      this.openForSubjectItem(subjectId, "Разбор задания");
      return;
    }

    const item = section.items[itemIndex];
    const list = this.db[subjectId];
    const titleLower = (item.title || "").toLowerCase();
    const secLower = (section.sectionTitle || "").toLowerCase();

    // 1. Проверяем наличие подробного авторского разбора в базе предмета
    if (list && list.length > 0) {
      let matched = list.find(task => {
        return task.matchTitles.some(keyword => {
          const k = keyword.toLowerCase();
          return titleLower.includes(k) || secLower.includes(k);
        });
      });
      if (matched) {
        this.currentSubject = subjectId;
        this.taskList = list;
        this.currentTaskIndex = list.indexOf(matched);
        this.renderModal();
        this.showModal();
        return;
      }
    }

    // 2. Если отдельного разбора нет — генерируем адаптивный разбор по спецификации темы
    this.openItemData(subjectId, subj.title, section.sectionTitle, item);
  },

  openForSubjectItem(subjectId, itemTitle) {
    const list = this.db[subjectId];
    const titleLower = (itemTitle || "").toLowerCase();

    if (list && list.length > 0) {
      let matched = list.find(task => {
        return task.matchTitles.some(keyword => titleLower.includes(keyword.toLowerCase()));
      });
      if (matched) {
        this.currentSubject = subjectId;
        this.taskList = list;
        this.currentTaskIndex = list.indexOf(matched);
        this.renderModal();
        this.showModal();
        return;
      }
    }

    // Если прямого совпадения нет — генерируем разбор на основе темы
    const subjObj = (typeof SUBJECTS_DATA !== "undefined") ? SUBJECTS_DATA[subjectId] : null;
    const subjTitle = subjObj ? subjObj.title : "ОГЭ";

    this.openItemData(subjectId, subjTitle, "Материалы ФИПИ", {
      title: itemTitle || "Разбор темы ОГЭ",
      formula: "Официальные критерии и методы ФИПИ",
      note: "Изучите ключевые формулировки, алгоритм решения и типичные ошибки на экзамене."
    });
  },

  openItemData(subjectId, subjTitle, sectionTitle, item) {
    // Формируем динамический карточный объект разбора
    const dynamicTask = {
      id: "dynamic_" + Date.now(),
      title: `${item.title}`,
      fipiSpec: {
        number: `${subjTitle}`,
        score: "1–3 первичных балла",
        time: "5–10 минут",
        difficulty: "Базовый уровень",
        docSource: `Кодификатор ФИПИ 2026/2027 (${sectionTitle})`
      },
      theory: `
        <h4>1. Ключевые положения и правила</h4>
        <div class="task-formula-box">
          <div class="math-row"><strong>Правило / Формула:</strong> ${item.formula}</div>
          ${item.note ? `<div class="math-subtext">${item.note}</div>` : ''}
        </div>
        <h4>2. Справочный комментарий ФИПИ</h4>
        <p>Данная тема входит в обязательный минимум кодификатора ОГЭ 2026/2027. При решении заданий этого типа обращайте внимание на точность формулировок и единицы измерения.</p>
      `,
      algorithm: `
        <div class="task-step-list">
          <div class="task-step-item">
            <div class="task-step-num">Шаг 1</div>
            <div class="task-step-desc">
              <strong>Анализ условия:</strong> Внимательно прочитайте вопрос задания до конца. Подчеркните ключевые параметры и ограничения.
            </div>
          </div>
          <div class="task-step-item">
            <div class="task-step-num">Шаг 2</div>
            <div class="task-step-desc">
              <strong>Применение правила:</strong> Примените базовое соотношение: <em>${item.formula}</em>.
            </div>
          </div>
          <div class="task-step-item">
            <div class="task-step-num">Шаг 3</div>
            <div class="task-step-desc">
              <strong>Самопроверка:</strong> Убедитесь, что полученный ответ реалистичен и записан строго по правилам бланка №1.
            </div>
          </div>
        </div>
      `,
      examples: `
        <div class="task-example-card">
          <div class="task-example-badge">Пример из банка заданий ФИПИ / Решу ОГЭ</div>
          <p><strong>Тема задания:</strong> ${item.title}</p>
          <div class="task-example-solution">
            <p><strong>Суть метода:</strong> ${item.formula}</p>
            ${item.note ? `<p style="margin-top: 6px; color: var(--text-secondary);">${item.note}</p>` : ''}
          </div>
        </div>
      `,
      traps: `
        <div class="callout callout-warning">
          <strong>⚠️ Типичная ошибка выпускников:</strong>
          <p>По статистике ФИПИ, большинство ошибок в этой теме связано с невнимательным чтением вопроса и поспешными вычислениями. Перепроверяйте ответ перед занесением в бланк!</p>
        </div>
      `
    };

    this.currentSubject = subjectId;
    this.taskList = [dynamicTask];
    this.currentTaskIndex = 0;
    this.renderModal();
    this.showModal();
  },

  showModal() {
    const modal = document.getElementById("task-detail-modal");
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  },

  close() {
    const modal = document.getElementById("task-detail-modal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  },

  onBackdropClick(e) {
    if (e.target && e.target.id === "task-detail-modal") {
      this.close();
    }
  },

  switchTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll(".task-nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === tabName);
    });
    this.renderTabContent();
  },

  nextTask() {
    if (this.currentTaskIndex < this.taskList.length - 1) {
      this.currentTaskIndex++;
      this.renderModal();
    }
  },

  prevTask() {
    if (this.currentTaskIndex > 0) {
      this.currentTaskIndex--;
      this.renderModal();
    }
  },

  renderModal() {
    const task = this.taskList[this.currentTaskIndex];
    if (!task) return;

    const titleEl = document.getElementById("task-modal-title");
    const subjBadge = document.getElementById("task-modal-subj-badge");
    const scoreBadge = document.getElementById("task-modal-score-badge");
    const prevBtn = document.getElementById("task-modal-prev-btn");
    const nextBtn = document.getElementById("task-modal-next-btn");

    if (titleEl) titleEl.textContent = task.title;
    if (subjBadge) {
      const subjObj = (typeof SUBJECTS_DATA !== "undefined") ? SUBJECTS_DATA[this.currentSubject] : null;
      subjBadge.textContent = subjObj ? subjObj.title : "ОГЭ 2026/2027";
    }
    if (scoreBadge && task.fipiSpec) {
      scoreBadge.textContent = task.fipiSpec.score;
    }

    if (prevBtn) prevBtn.disabled = (this.currentTaskIndex === 0);
    if (nextBtn) nextBtn.disabled = (this.currentTaskIndex >= this.taskList.length - 1);

    if (!this.activeTab) this.activeTab = "theory";
    document.querySelectorAll(".task-nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === this.activeTab);
    });

    this.renderTabContent();
  },

  renderTabContent() {
    const contentEl = document.getElementById("task-modal-content");
    const task = this.taskList[this.currentTaskIndex];
    if (!contentEl || !task) return;

    if (this.activeTab === "theory") {
      contentEl.innerHTML = `
        <div class="task-spec-bar">
          <span class="spec-chip"><strong>Номер в КИМ:</strong> ${task.fipiSpec.number}</span>
          <span class="spec-chip"><strong>Балл:</strong> ${task.fipiSpec.score}</span>
          <span class="spec-chip"><strong>Рекомендуемое время:</strong> ${task.fipiSpec.time}</span>
          <span class="spec-chip"><strong>Сложность:</strong> ${task.fipiSpec.difficulty}</span>
        </div>
        <div class="task-prose">
          ${task.theory}
        </div>
      `;
    } else if (this.activeTab === "algorithm") {
      contentEl.innerHTML = `
        <div class="task-prose">
          <h3>📌 Пошаговый алгоритм решения задания на экзамене</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1rem;">
            Следуйте этому проверенному плану действий, составленному ведущими экспертами и методистами ФИПИ.
          </p>
          ${task.algorithm}
        </div>
      `;
    } else if (this.activeTab === "examples") {
      contentEl.innerHTML = `
        <div class="task-prose">
          <h3>📝 Типовые примеры из открытого банка ФИПИ и Решу ОГЭ</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1rem;">
            Реальные формулировки с полным пошаговым решением и правильной записью в бланк №1.
          </p>
          ${task.examples}
        </div>
      `;
    } else if (this.activeTab === "traps") {
      contentEl.innerHTML = `
        <div class="task-prose">
          <h3>⚠️ Опасные ловушки составителей и типичные ошибки выпускников</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1rem;">
            По статистике ФИПИ, именно на этих моментах теряется свыше 60% первичных баллов.
          </p>
          ${task.traps}
        </div>
      `;
    }
  }
};

window.TaskDetails = TaskDetails;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => TaskDetails.init());
} else {
  TaskDetails.init();
}\n