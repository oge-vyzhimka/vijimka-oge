/**
 * ОГЭ-ВЫЖИМКА — Интерактивный модуль подробных разборов заданий ОГЭ
 * База знаний составлена на основе официальных кодификаторов ФИПИ и банка заданий Решу ОГЭ
 */

const TaskDetails = {
  currentSubject: "math",
  currentTaskIndex: 0,
  activeTab: "theory", // theory | algorithm | examples | traps
  taskList: [],

  // =========================================================================
  // БАЗА ДЕТАЛЬНЫХ РАЗБОРОВ ЗАДАНИЙ (ФИПИ + РЕШУ ОГЭ)
  // =========================================================================
  db: {
    math: [
      {
        id: "math_1_5",
        matchTitles: ["план", "квартир", "участ", "тепл", "печ", "бумаг", "шин", "террас", "1-5", "1–5", "реальн"],
        title: "Задания 1–5: Практико-ориентированный блок (Реальная математика)",
        fipiSpec: {
          number: "№ 1–5",
          score: "5 первичных баллов (по 1 баллу за каждое задание)",
          time: "15–20 минут",
          difficulty: "Базовый уровень",
          docSource: "Кодификатор ФИПИ (Раздел 1: Практические расчеты)"
        },
        theory: `
          <h4>1. Масштаб и работа с клетчатой сеткой</h4>
          <p>Внимательно посмотрите на условные обозначения схемы. Главная ловушка ФИПИ — <strong>размер стороны клетки</strong>. Часто сторона клетки равна <strong>2 м</strong>, а не 1 м!</p>
          <ul>
            <li>Если сторона клетки \( a = 2\\text{ м} \), то площадь <strong>одной клетки</strong>: \( S_{\\text{кл}} = 2 \\times 2 = 4\\text{ м}^2 \).</li>
            <li>Площадь объекта: \( S = N_{\\text{клеток}} \\times S_{\\text{кл}} = N_{\\text{клеток}} \\times 4\\text{ м}^2 \).</li>
            <li>Периметр объекта: считайте число сторон клеток по контуру и умножайте на длину стороны клетки (на 2 м, а не на 1 м!).</li>
          </ul>

          <h4>2. Расчет упаковок плитки и стройматериалов</h4>
          <p>Формула количества упаковок:</p>
          <div class="task-formula-box">
            $$N_{\\text{упак}} = \\left\\lceil \\frac{S_{\\text{покрытия}}}{S_{\\text{в одной упак}}} \\right\\rceil$$
          </div>
          <p><strong>Золотое правило:</strong> Количество упаковок ВСЕГДА округляется в <strong>БОЛЬШУЮ сторону</strong> (к ближайшему большему целому), даже если получилось 7.1 упаковки — покупаем 8!</p>

          <h4>3. Шины (Маркировка 215/60 R16)</h4>
          <ul>
            <li><strong>215</strong> — ширина шины \( B \) в миллиметрах.</li>
            <li><strong>60</strong> — высота профиля \( H \) в <em>процентах от ширины</em>: \( H = B \\times \\frac{60}{100} = 215 \\times 0.6 = 129\\text{ мм} \).</li>
            <li><strong>R16</strong> — радиальная шина с посадочным диаметром диска \( d \) в <strong>дюймах</strong>. 1 дюйм = 25.4 мм! Диаметр диска: \( d = 16 \\times 25.4 = 406.4\\text{ мм} \).</li>
            <li><strong>Полный диаметр колеса:</strong> \( D = 2H + d = 2 \\times 129 + 406.4 = 664.4\\text{ мм} \).</li>
          </ul>

          <h4>4. Теплицы и дуги</h4>
          <ul>
            <li>Дуга теплицы представляет собой <strong>полуокружность</strong>: \( L_{\\text{дуги}} = \\pi R = \\pi \\times \\frac{D}{2} \\approx 3.14 \\times \\frac{\\text{ширина}}{2} \).</li>
            <li>Площадь пленки для покрытия теплицы (без торцов): \( S = L_{\\text{дуги}} \\times \\text{длина теплицы} \).</li>
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
                <strong>Подсчет площадей (Задания 2–3):</strong> Разбейте сложную фигуру на простые прямоугольники. Посчитайте количество целых клеток. Умножьте на площадь одной клетки (\(a^2\)).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Расчет расстояний (Теорема Пифагора):</strong> Если требуется найти расстояние между двумя углами объектов по прямой — достройте отрезок до прямоугольного треугольника по линиям сетки и примените \( c = \\sqrt{a^2 + b^2} \).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 4</div>
              <div class="task-step-desc">
                <strong>Задание №5 (Выбор оптимального варианта):</strong> Составьте краткую таблицу расходов (газовое vs электрическое отопление). Найдите разницу в стоимости оборудования (\(\\Delta C\)) и экономию в час/месяц (\(\\Delta E\)). Срок окупаемости: \( T = \\frac{\\Delta C}{\\Delta E} \).
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
                <li>Площадь одной плитки: \( 1\\text{ м} \\times 1\\text{ м} = 1\\text{ м}^2 \).</li>
                <li>Одна упаковка покрывает: \( 8 \\times 1 = 8\\text{ м}^2 \).</li>
                <li>Необходимое число упаковок: \( 64 / 8 = 8 \) упаковок.</li>
                <li>Если бы получилось нецелое число (например, 65 м²), то \( 65 / 8 = 8.125 \), и ответом было бы 9 упаковок.</li>
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
                <li>Стоимость в обычном магазине: \( 21\\,000\\text{ руб.} \)</li>
                <li>Стоимость в интернете с учетом доставки: \( 19\\,500 + 600 = 20\\,100\\text{ руб.} \)</li>
                <li>Экономия: \( 21\\,000 - 20\\,100 = 900\\text{ руб.} \)</li>
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
            <p>В маркировке 195/65 R15 второе число 65 — это не миллиметры! Это 65% от 195 мм (\(H = 195 \\times 0.65 = 126.75\\text{ мм}\)).</p>
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
          <ul>
            <li><strong>Сложение и вычитание:</strong> приводим к наименьшему общему знаменателю (НОК):
              $$ \\frac{a}{b} + \\frac{c}{d} = \\frac{a \\cdot d + b \\cdot c}{b \\cdot d} $$
            </li>
            <li><strong>Умножение:</strong> числитель на числитель, знаменатель на знаменатель (обязательно сокращайте перед умножением!):
              $$ \\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} $$
            </li>
            <li><strong>Деление:</strong> умножаем на перевернутую дробь:
              $$ \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c} $$
            </li>
          </ul>

          <h4>2. Свойства степеней с одинаковым основанием</h4>
          <div class="task-formula-box">
            $$ a^m \\cdot a^n = a^{m+n} \\quad | \\quad \\frac{a^m}{a^n} = a^{m-n} \\quad | \\quad (a^m)^n = a^{m \\cdot n} $$
            $$ a^{-n} = \\frac{1}{a^n} \\quad | \\quad a^0 = 1 \\quad (a \\neq 0) $$
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
            <p><strong>Условие:</strong> Найдите значение выражения: \( \\left( \\frac{1}{4} + \\frac{1}{6} \\right) \\cdot 24 \).</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <p>Способ через распределительное свойство (самый быстрый и без ошибок):</p>
              $$ \\left( \\frac{1}{4} + \\frac{1}{6} \\right) \\cdot 24 = \\frac{1}{4} \\cdot 24 + \\frac{1}{6} \\cdot 24 = 6 + 4 = 10 $$
              <div class="task-answer-box">Ответ: <strong>10</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Деление на отрицательную десятичную дробь</strong>
            <p>При делении числа на 0.2 не забудьте перенести запятые: \( 6 : 0.2 = 60 : 2 = 30 \). Не пишите 3!</p>
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
          <h4>1. Полное квадратное уравнение: \( ax^2 + bx + c = 0 \)</h4>
          <div class="task-formula-box">
            $$ D = b^2 - 4ac $$
            $$ x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a} $$
          </div>
          <ul>
            <li>Если \( D > 0 \) — уравнение имеет <strong>два различных корня</strong>.</li>
            <li>Если \( D = 0 \) — уравнение имеет <strong>один корень</strong> (два совпадающих): \( x = -b / (2a) \).</li>
            <li>Если \( D < 0 \) — действительных корней <strong>нет</strong>.</li>
          </ul>

          <h4>2. Неполные квадратные уравнения</h4>
          <ul>
            <li>\( ax^2 + bx = 0 \\implies x(ax + b) = 0 \\implies x_1 = 0, \\; x_2 = -b/a \). <em>Никогда не делите на x!</em></li>
            <li>\( ax^2 + c = 0 \\implies x^2 = -c/a \\implies x = \\pm \\sqrt{-c/a} \).</li>
          </ul>

          <h4>3. Теорема Виета (для приведенного \( x^2 + px + q = 0 \)):</h4>
          <div class="task-formula-box">
            $$ x_1 + x_2 = -p \\quad | \\quad x_1 \\cdot x_2 = q $$
          </div>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Перенос всех слагаемых в левую часть:</strong> Справа обязательно должен остаться 0: \( ax^2 + bx + c = 0 \).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Выпишите коэффициенты:</strong> Четко зафиксируйте \( a, b, c \) со своими знаками (особенно если перед числом стоит минус!).
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
            <p><strong>Условие:</strong> Решите уравнение \( x^2 - 6x = 16 \). Если корней несколько, запишите больший из корней.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <ol>
                <li>Переносим 16 влево: \( x^2 - 6x - 16 = 0 \).</li>
                <li>Коэффициенты: \( a = 1, b = -6, c = -16 \).</li>
                <li>Дискриминант: \( D = (-6)^2 - 4 \\cdot 1 \\cdot (-16) = 36 + 64 = 100 = 10^2 \).</li>
                <li>Корни:
                  $$ x_1 = \\frac{6 + 10}{2} = 8, \\quad x_2 = \\frac{6 - 10}{2} = -2 $$
                </li>
                <li>Больший из корней: \( 8 \).</li>
              </ol>
              <div class="task-answer-box">Ответ: <strong>8</strong></div>
            </div>
          </div>
        `,
        traps: `
          <div class="callout callout-warning">
            <strong>⚠️ Ловушка: Потеря отрицательного корня</strong>
            <p>В уравнении \( x^2 = 25 \) корней ДВА: \( +5 \) и \( -5 \). Если просят меньший корень, ответ <strong>-5</strong>, а не 5!</p>
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
            $$ P(A) = \\frac{m}{n} = \\frac{\\text{число благоприятных исходов}}{\\text{общее число всех равновозможных исходов}} $$
          </div>
          <ul>
            <li>Вероятность любого события ВСЕГДА заключена в пределах: \( 0 \\le P(A) \\le 1 \).</li>
            <li>Ответ записывается <strong>ТОЛЬКО в виде десятичной дроби</strong> (например, 0.25, а не 1/4 и не 25%).</li>
          </ul>

          <h4>2. Противоположное событие</h4>
          <p>Вероятность того, что событие НЕ произойдет: \( P(\\overline{A}) = 1 - P(A) \).</p>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Найдите общее число \( n \):</strong> Сложите все элементы (все пирожки, все фонарики, все спортсмены из всех стран).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Найдите благоприятное число \( m \):</strong> Сколько элементов удовлетворяют условию вопроса (с вишней, исправные, из России).
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
                <li>Общее число фонариков: \( n = 1000 \).</li>
                <li>Число исправных фонариков: \( m = 1000 - 20 = 980 \).</li>
                <li>Вероятность: \( P = \\frac{980}{1000} = 0.98 \).</li>
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
          <h4>1. Линейная функция: \( y = kx + b \) (Прямая)</h4>
          <ul>
            <li>\( k > 0 \) — прямая возрастает (идет снизу-слева вверх-вправо, острый угол с осью \( OX \)).</li>
            <li>\( k < 0 \) — прямая убывает (идет сверху-слева вниз-вправо, тупой угол с осью \( OX \)).</li>
            <li>\( b \) — точка пересечения графика с осью \( OY \) (при \( x = 0, y = b \)).</li>
          </ul>

          <h4>2. Квадратичная функция: \( y = ax^2 + bx + c \) (Парабола)</h4>
          <ul>
            <li>\( a > 0 \) — ветви параболы направлены <strong>вверх</strong>.</li>
            <li>\( a < 0 \) — ветви параболы направлены <strong>вниз</strong>.</li>
            <li>\( c \) — точка пересечения параболы с осью ординат \( OY \).</li>
            <li>Абсцисса вершины параболы: \( x_0 = -\\frac{b}{2a} \).</li>
          </ul>

          <h4>3. Обратная пропорциональность: \( y = \\frac{k}{x} \) (Гипербола)</h4>
          <ul>
            <li>\( k > 0 \) — ветви гиперболы лежат в <strong>I и III координатных четвертях</strong>.</li>
            <li>\( k < 0 \) — ветви гиперболы лежат во <strong>II и IV координатных четвертях</strong>.</li>
          </ul>
        `,
        algorithm: `
          <div class="task-step-list">
            <div class="task-step-item">
              <div class="task-step-num">Шаг 1</div>
              <div class="task-step-desc">
                <strong>Определите тип каждого графика:</strong> Прямая (\(x\)), Парабола (\(x^2\)), Гипербола (\(1/x\)), Корень (\(\\sqrt{x}\)).
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 2</div>
              <div class="task-step-desc">
                <strong>Определите знаки коэффициентов:</strong> Направление ветвей (\(a\)), наклон прямой (\(k\)), четверти гиперболы.
              </div>
            </div>
            <div class="task-step-item">
              <div class="task-step-num">Шаг 3</div>
              <div class="task-step-desc">
                <strong>Метод контрольной точки:</strong> Если сомневаетесь, подставьте \( x = 1 \) или \( x = 0 \) в формулу и посмотрите, какая точка получается на графике!
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
              <p>А) Ветви вниз (\(a < 0\)) и квадратичная: \( y = -x^2 \).<br>
                 Б) Линейная с \( k < 0 \): \( y = -2x \).<br>
                 В) Дробно-рациональная в I и III четв. (\(k > 0\)): \( y = \\frac{2}{x} \).</p>
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
            <li>Сумма углов треугольника: \( \\alpha + \\beta + \\gamma = 180^\\circ \).</li>
            <li>Теорема Пифагора: \( a^2 + b^2 = c^2 \).</li>
            <li>Катет, лежащий напротив угла \( 30^\\circ \), равен <strong>половине гипотенузы</strong>: \( a = c / 2 \).</li>
            <li>Медиана прямоугольного треугольника, проведенная к гипотенузе, равна половине гипотенузы: \( m_c = R = c / 2 \).</li>
            <li>Тригонометрия в прямоугольном треугольнике:
              $$ \\sin A = \\frac{\\text{противолежащий катет}}{\\text{гипотенуза}}, \\quad \\cos A = \\frac{\\text{прилежащий катет}}{\\text{гипотенуза}}, \\quad \\text{tg } A = \\frac{\\sin A}{\\cos A} = \\frac{a}{b} $$
            </li>
          </ul>

          <h4>3. Площади фигур</h4>
          <div class="task-formula-box">
            $$ S_{\\Delta} = \\frac{1}{2} a h_a = \\frac{1}{2} a b \\sin \\gamma $$
            $$ S_{\\text{паралл}} = a h_a = a b \\sin \\gamma \\quad | \\quad S_{\\text{трап}} = \\frac{a + b}{2} \\cdot h $$
            $$ S_{\\text{ромба}} = \\frac{1}{2} d_1 d_2 \\quad | \\quad S_{\\text{круга}} = \\pi R^2 $$
          </div>

          <h4>4. Окружности и углы</h4>
          <ul>
            <li><strong>Центральный угол</strong> равен градусной мере дуги, на которую опирается: \( \\angle AOB = \\cup AB \).</li>
            <li><strong>Вписанный угол</strong> равен <em>половине</em> дуги: \( \\angle ACB = \\frac{1}{2} \\cup AB = \\frac{1}{2} \\angle AOB \).</li>
            <li>Вписанный угол, опирающийся на диаметр, равен <strong>90°</strong> (всегда прямой!).</li>
            <li>Отрезки касательных, проведенных из одной точки к окружности, равны: \( AB = AC \).</li>
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
              <p>По теореме Пифагора: \( b = \\sqrt{c^2 - a^2} = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24 \).</p>
              <div class="task-answer-box">Ответ: <strong>24</strong></div>
            </div>
          </div>

          <div class="task-example-card">
            <div class="task-example-badge">Реальный КИМ ФИПИ (Задание 16)</div>
            <p><strong>Условие:</strong> Точка O — центр окружности, на которой лежат точки A, B и C. Известно, что угол ABC равен 70°. Найдите угол AOC.</p>
            <div class="task-example-solution">
              <strong>Решение:</strong>
              <p>Угол ABC — вписанный, опирается на дугу AC. Значит дуга AC = \( 2 \\times 70^\\circ = 140^\\circ \).<br>
                 Угол AOC — центральный, опирается на ту же дугу AC, значит \( \\angle AOC = 140^\\circ \).</p>
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

    try {
      if (window.renderMathInElement && typeof window.renderMathInElement === "function") {
        window.renderMathInElement(contentEl, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\(", right: "\\)", display: false }
          ]
        });
      }
    } catch (e) {
      console.warn("KaTeX render notice:", e);
    }
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => TaskDetails.init());
} else {
  TaskDetails.init();
}
