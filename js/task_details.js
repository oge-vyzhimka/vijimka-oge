/**
 * ОГЭ-ВЫЖИМКА — Интерактивный разбор заданий ФИПИ и Решу ОГЭ
 * Модуль подробного изучения заданий ОГЭ 2026/2027
 */

const TaskDetails = {
  currentSubject: "math",
  currentTaskIndex: 0,
  activeTab: "theory", // theory | algorithm | examples | traps
  taskList: [],

  // =========================================================================
  // БАЗА ДАННЫХ РАЗБОРОВ ЗАДАНИЙ (МАТЕМАТИКА)
  // =========================================================================
  db: {
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

  openForSubjectItem(subjectId, itemTitle) {
    const list = this.db[subjectId] || this.db["math"];
    const titleLower = (itemTitle || "").toLowerCase();

    let matched = list.find(task => {
      return task.matchTitles.some(keyword => titleLower.includes(keyword.toLowerCase()));
    });

    if (!matched) {
      matched = list[0];
    }

    this.currentSubject = subjectId;
    this.taskList = list;
    this.currentTaskIndex = list.indexOf(matched);
    if (this.currentTaskIndex < 0) this.currentTaskIndex = 0;

    this.renderModal();
    const modal = document.getElementById("task-detail-modal");
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  },

  open(subjectId, taskIndex = 0) {
    const list = this.db[subjectId] || this.db["math"];
    this.currentSubject = subjectId;
    this.taskList = list;
    this.currentTaskIndex = Math.max(0, Math.min(taskIndex, list.length - 1));

    this.renderModal();
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
      subjBadge.textContent = subjObj ? subjObj.title : "ОГЭ";
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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => TaskDetails.init());
} else {
  TaskDetails.init();
}\n