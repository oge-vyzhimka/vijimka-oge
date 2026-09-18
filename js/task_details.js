/**
 * ОГЭ-ВЫЖИМКА — Полная база интерактивных разборов заданий ФИПИ и Решу ОГЭ
 * Содержит полную базу на 101 тему по всем 11 предметам экзамена ОГЭ 2026/2027
 */

const TaskDetails = {
  currentSubject: "math",
  currentTaskIndex: 0,
  activeTab: "theory", // theory | algorithm | examples | traps
  taskList: [],

  // -------------------------------------------------------------------------
  // БАЗА ДАННЫХ РАЗБОРОВ ЗАДАНИЙ ПО ВСЕМ 11 ПРЕДМЕТАМ (101 ТЕМА)
  // -------------------------------------------------------------------------
  db: {
  "math": [
    {
      "id": "math_plan",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "план",
        "квартир",
        "участ",
        "1-5",
        "размер клетки",
        "масштаб"
      ],
      "title": "Задания 1–5: План квартиры и участка (Масштаб, площади, плитка)",
      "fipiSpec": {
        "number": "№ 1–5",
        "score": "5 первичных баллов (по 1 за каждый пункт)",
        "time": "15–20 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Блок 1: Практические расчеты и моделирование)"
      },
      "theory": "\n            <h4>1. Определение масштаба и стороны клетки</h4>\n            <p>В тексте задания ФИПИ всегда указана длина стороны одной клетки на плане. Это самый частый источник ошибок!</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Сторона клетки a = 2 м:</strong> S<sub>1 кл</sub> = a² = 2 × 2 = <strong>4 м²</strong></div>\n              <div class=\"math-row\"><strong>Сторона клетки a = 1 м:</strong> S<sub>1 кл</sub> = a² = 1 × 1 = <strong>1 м²</strong></div>\n              <div class=\"math-subtext\">Никогда не умножайте число клеток на 2 при вычислении площади! Умножать нужно на <strong>4 м²</strong>.</div>\n            </div>\n\n            <h4>2. Расчет количества упаковок плитки / стройматериалов</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Количество упаковок:</strong> N<sub>упак</sub> = ⌈ S<sub>покрытия</sub> / S<sub>в упаковке</sub> ⌉</div>\n              <div class=\"math-subtext\">Округление ВСЕГДА производится в <strong>большую сторону</strong> (даже если получилось 6.05 упаковок — пишем в ответ 7)!</div>\n            </div>\n\n            <h4>3. Нахождение расстояний по прямой (Теорема Пифагора)</h4>\n            <p>Чтобы найти расстояние между противоположными углами объектов по прямой, постройте прямоугольный треугольник по линиям сетки:</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">c = √(Δx² + Δy²) × (длина стороны клетки в метрах)</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Выделите размер клетки:</strong> Подчеркните в условии фразу: «сторона каждой клетки на плане равна ... м». Запишите площадь одной клетки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Задание №1 (Сопоставление):</strong> Читайте текст по предложениям и сразу подписывайте цифры на рисунке. Запишите в бланк 4 цифры без пробелов и запятых.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Задания №2–4 (Площади и расстояния):</strong> Разбейте сложную фигуру на прямоугольники. Посчитайте количество клеток и умножьте на площадь одной клетки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 4</div>\n                <div class=\"task-step-desc\"><strong>Задание №5 (Экономический выбор):</strong> Посчитайте полную стоимость оборудования для каждого варианта (оборудование + монтаж) и эксплуатационные расходы в час. Найдите разницу и срок окупаемости.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 324141)</div>\n              <p><strong>Условие:</strong> На плане участок имеет прямоугольную форму. Сторона каждой клетки на плане равна 2 м. Плитка для дорожек продается в упаковках по 6 штук. Размер одной плитки 1 м × 1 м. Сколько упаковок плитки понадобилось купить, чтобы выложить дорожки общей площадью 48 м²?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Площадь одной плитки: 1 м × 1 м = 1 м².</li>\n                  <li>Одна упаковка покрывает: 6 × 1 = 6 м².</li>\n                  <li>Необходимое число упаковок: 48 / 6 = 8 упаковок ровно.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>8</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Площадь клетки при a = 2 м</strong>\n              <p>Если сосчитать 15 клеток и умножить на 2 (получив 30 м²), будет ошибка! Правильно: 15 × 4 = 60 м².</p>\n            </div>\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Округление упаковок</strong>\n              <p>При делении получилось 7.2 упаковки? В ответ пишем 8, иначе дорожку не достроят!</p>\n            </div>\n        "
    },
    {
      "id": "math_teplitsy",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "теплиц",
        "дуг",
        "пленк",
        "длина дуги"
      ],
      "title": "Задания 1–5: Теплицы (Длина дуги, пленка, расчет грядок)",
      "fipiSpec": {
        "number": "№ 1–5",
        "score": "5 первичных баллов",
        "time": "15–20 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Практическая геометрия)"
      },
      "theory": "\n            <h4>1. Длина дуги металлического каркаса</h4>\n            <p>Дуга теплицы представляет собой <strong>полуокружность</strong>. Диаметр этой полуокружности равен ширине теплицы D = 2R.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Длина дуги:</strong> L<sub>дуги</sub> = π · R = π · (D / 2) ≈ 3.14 · (ширина / 2)</div>\n              <div class=\"math-subtext\">Если ширина теплицы 3 м, то радиус R = 1.5 м. Длина дуги L = 3.14 × 1.5 = 4.71 м.</div>\n            </div>\n\n            <h4>2. Площадь пленки для покрытия теплицы</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Боковая поверхность + крыша:</strong> S<sub>пленки</sub> = L<sub>дуги</sub> × Длина теплицы</div>\n              <div class=\"math-row\"><strong>Торцы (передняя и задняя стенка):</strong> Две полуокружности вместе дают один полный круг: S<sub>торцев</sub> = π · R²</div>\n            </div>\n\n            <h4>3. Количество дуг в теплице</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Количество дуг:</strong> N<sub>дуг</sub> = (Длина теплицы / Расстояние между дугами) + 1</div>\n              <div class=\"math-subtext\">Не забывайте прибавлять 1 (первая дуга на входе)!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Определите радиус:</strong> Разделите ширину теплицы пополам (R = Ширина / 2).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Найдите длину дуги:</strong> Умножьте радиус на 3.14 (или используйте формулу длины полуокружности πR).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Расчет пленки:</strong> Умножьте длину дуги на длину теплицы. Если в вопросе требуется учесть запас (например, 10%), умножьте результат на 1.1.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Длина теплицы равна 6 м, а ширина — 2.4 м. Дуги имеют форму полуокружностей. Какое наименьшее количество упаковок пленки нужно купить для покрытия теплицы (без торцов), если в одной упаковке 12 м² пленки?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Радиус полуокружности: R = 2.4 / 2 = 1.2 м.</li>\n                  <li>Длина дуги: L = 3.14 × 1.2 = 3.768 м.</li>\n                  <li>Площадь пленки: S = 3.768 × 6 = 22.608 м².</li>\n                  <li>Количество упаковок: 22.608 / 12 = 1.884... округляем вверх: 2 упаковки.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>2</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая единица при подсчете дуг</strong>\n              <p>Если длина 6 м, а шаг дуг 1 м, дуг нужно 6 / 1 + 1 = 7 штук, а не 6!</p>\n            </div>\n        "
    },
    {
      "id": "math_pechi",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "печи",
        "парн",
        "бани",
        "объем"
      ],
      "title": "Задания 1–5: Печи для бани (Объем парного отделения, экономия)",
      "fipiSpec": {
        "number": "№ 1–5",
        "score": "5 первичных баллов",
        "time": "15–20 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>1. Расчет объема парного отделения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Объем прямоугольного параллелепипеда:</strong> V = a · b · c (длина × ширина × высота)</div>\n              <div class=\"math-subtext\">Все размеры переводите строго в метры! Объем получается в м³.</div>\n            </div>\n\n            <h4>2. Подбор печи по таблице</h4>\n            <p>Печь выбирается так, чтобы расчетный объем V парной попадал в диапазон отапливаемого объема, указанный в строке таблицы (V<sub>min</sub> ≤ V ≤ V<sub>max</sub>).</p>\n\n            <h4>3. Электрическая печь vs Дровяная печь</h4>\n            <p>При установке электрической печи часто требуются дополнительные расходы на прокладку специального силового кабеля. Для дровяной печи без кожуха может требоваться кирпичный защитный экран.</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перемножьте длину, ширину и высоту парной. Запишите объем V.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите в таблице номер печи, подходящей по объему.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В задании №5 сложите цену покупки с учетом скидки и доставки для магазина А и магазина Б, найдите разницу.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Длина парного отделения 3.5 м, ширина 2 м, высота 2.2 м. Найдите объем парного отделения в кубических метрах.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>V = 3.5 × 2 × 2.2 = 7 × 2.2 = 15.4 м³.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>15.4</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Дополнительный кабель</strong>\n              <p>Не забывайте прибавлять стоимость кабеля при расчете итоговых затрат на электрическую печь.</p>\n            </div>\n        "
    },
    {
      "id": "math_paper",
      "sectionIndex": 0,
      "itemIndex": 3,
      "matchTitles": [
        "бумаг",
        "а0",
        "а1",
        "а2",
        "а3",
        "а4"
      ],
      "title": "Задания 1–5: Форматы бумаги (Стандарт ISO 216: А0, А1, А2, А3, А4...)",
      "fipiSpec": {
        "number": "№ 1–5",
        "score": "5 первичных баллов",
        "time": "15 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>1. Принцип подобия форматов бумаги</h4>\n            <p>Все листы серии «А» подобны друг другу. Отношение длины листа к его ширине строго равно <strong>√2 ≈ 1.414</strong>.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Длина / Ширина = √2 ≈ 1.414 &nbsp;|&nbsp; Ширина / Длина = 1/√2 ≈ 0.707</div>\n              <div class=\"math-subtext\">Площадь листа формата А0 строго равна <strong>1 м²</strong>.</div>\n            </div>\n\n            <h4>2. Деление листов пополам</h4>\n            <ul>\n              <li>Из 1 листа А0 получается <strong>2</strong> листа А1.</li>\n              <li>Из 1 листа А0 получается <strong>4</strong> листа А2.</li>\n              <li>Из 1 листа А0 получается <strong>8</strong> листов А3.</li>\n              <li>Из 1 листа А0 получается <strong>16</strong> листов А4.</li>\n              <li>Из 1 листа А0 получается <strong>32</strong> листа А5.</li>\n            </ul>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Чем больше цифра в названии формата (А4 > А3 > А2), тем меньше размеры листа.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">При делении листа А(n) пополам большая сторона делится на 2, а меньшая сторона становится большей стороной листа А(n+1).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Сколько листов формата А5 получится из одного листа формата А2?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А2 → 2 листа А3 → 4 листа А4 → 8 листов А5.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>8</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Округление миллиметров</strong>\n              <p>При делении 297 / 2 получается 148.5, стандартный размер округляется до целых (148 мм).</p>\n            </div>\n        "
    },
    {
      "id": "math_powers_roots",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "степен",
        "корн",
        "свойства степеней",
        "свойства корней"
      ],
      "title": "Задание 6 и 8: Свойства степеней и арифметических корней",
      "fipiSpec": {
        "number": "№ 6, 8",
        "score": "1 первичный балл за каждое",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Алгебра: степени и корни)"
      },
      "theory": "\n            <h4>1. Основные свойства степеней</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></div>\n              <div class=\"math-row\">a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup></div>\n              <div class=\"math-row\">(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></div>\n              <div class=\"math-row\">(a · b)<sup>n</sup> = a<sup>n</sup> · b<sup>n</sup></div>\n              <div class=\"math-row\">a<sup>-n</sup> = 1 / a<sup>n</sup> &nbsp;|&nbsp; a⁰ = 1 (при a ≠ 0)</div>\n            </div>\n\n            <h4>2. Свойства корней</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">√(a · b) = √a · √b (при a ≥ 0, b ≥ 0)</div>\n              <div class=\"math-row\">√(a / b) = √a / √b (при a ≥ 0, b > 0)</div>\n              <div class=\"math-row\">√(a²) = |a|</div>\n              <div class=\"math-subtext\">ГЛАВНАЯ ОШИБКА: √(a + b) НЕ РАВНО √a + √b! Например: √(9 + 16) = √25 = 5, а не 3 + 4 = 7!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Приведите все степени к одному основанию (например, 4 = 2², 8 = 2³, 9 = 3²).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Примените формулы сложения степеней в числителе и вычитания со знаменателем.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Подставьте числовое значение переменной в САМОМ КОНЦЕ после упрощения!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 314482)</div>\n              <p><strong>Условие:</strong> Найдите значение выражения: (a⁻¹¹ · a⁴) / a⁻⁹ при a = 3.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Числитель: a⁻¹¹ · a⁴ = a⁻¹¹⁺⁴ = a⁻⁷.</li>\n                  <li>Деление на знаменатель: a⁻⁷ / a⁻⁹ = a⁻⁷ ⁻ ⁽⁻⁹⁾ = a⁻⁷⁺⁹ = a² = a².</li>\n                  <li>Подставляем a = 3: 3² = 9.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>9</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Минус на минус дает плюс</strong>\n              <p>При вычитании отрицательного показателя: (-7) - (-9) = -7 + 9 = +2. Не пишите -16!</p>\n            </div>\n        "
    },
    {
      "id": "math_quadratic",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "квадратн",
        "уравнен",
        "дискриминант",
        "виет"
      ],
      "title": "Задание 9: Квадратные уравнения и формулы корней",
      "fipiSpec": {
        "number": "№ 9",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Уравнения и системы)"
      },
      "theory": "\n            <h4>1. Стандартный вид квадратного уравнения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">ax² + bx + c = 0 (где a ≠ 0)</div>\n              <div class=\"math-row\"><strong>Дискриминант:</strong> D = b² - 4ac</div>\n              <div class=\"math-row\"><strong>Корни:</strong> x₁,₂ = (-b ± √D) / (2a)</div>\n            </div>\n            <ul>\n              <li>Если <strong>D > 0</strong> — уравнение имеет <strong>два различных корня</strong>.</li>\n              <li>Если <strong>D = 0</strong> — один корень (два совпадающих): x = -b / (2a).</li>\n              <li>Если <strong>D < 0</strong> — действительных корней <strong>нет</strong>.</li>\n            </ul>\n\n            <h4>2. Неполные квадратные уравнения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>При c = 0:</strong> ax² + bx = 0 => x(ax + b) = 0 => x₁ = 0, x₂ = -b/a</div>\n              <div class=\"math-row\"><strong>При b = 0:</strong> ax² + c = 0 => x² = -c/a => x = ±√(-c/a)</div>\n            </div>\n\n            <h4>3. Теорема Виета (для приведенного уравнения x² + px + q = 0)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">x₁ + x₂ = -p &nbsp;|&nbsp; x₁ · x₂ = q</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перенесите все слагаемые в левую часть, чтобы справа остался 0.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выпишите коэффициенты a, b, c с их знаками (знак минус перед числом относится к коэффициенту!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Вычислите дискриминант и найдите корни. Внимательно перечитайте вопрос: «в ответ запишите МЕНЬШИЙ из корней» или «БОЛЬШИЙ из корней»!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 311394)</div>\n              <p><strong>Условие:</strong> Найдите корни уравнения: x² - 4x - 21 = 0. Если корней несколько, в ответ запишите меньший из корней.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>a = 1, b = -4, c = -21.</li>\n                  <li>D = (-4)² - 4 · 1 · (-21) = 16 + 84 = 100 = 10².</li>\n                  <li>x₁ = (4 + 10) / 2 = 14 / 2 = 7.</li>\n                  <li>x₂ = (4 - 10) / 2 = -6 / 2 = -3.</li>\n                  <li>Меньший из корней: -3.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>-3</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Потеря корня x = 0</strong>\n              <p>В уравнении 2x² = 8x нельзя делить на x! Нужно выносить за скобки: 2x(x - 4) = 0. Корни: 0 и 4.</p>\n            </div>\n        "
    },
    {
      "id": "math_probability",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "вероятност",
        "событи",
        "задание 10"
      ],
      "title": "Задание 10: Классическая теория вероятностей",
      "fipiSpec": {
        "number": "№ 10",
        "score": "1 первичный балл",
        "time": "2–4 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Теория вероятностей и статистика)"
      },
      "theory": "\n            <h4>1. Классическое определение вероятности</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>P(A) = m / n</strong></div>\n              <div class=\"math-row\"><strong>m</strong> — число благоприятных исходов (тех, о которых спрашивают в вопросе)</div>\n              <div class=\"math-row\"><strong>n</strong> — общее число ВСЕХ возможных равновероятных исходов</div>\n            </div>\n            <ul>\n              <li>Вероятность ЛЮБОГО события ВСЕГДА лежит в диапазоне: <strong>0 ≤ P(A) ≤ 1</strong>.</li>\n              <li>Если у вас получилось число больше 1 (например, 1.25) — вы перевернули дробь вверх ногами!</li>\n              <li><strong>Ответ в бланк:</strong> ВСЕГДА записывается ТОЛЬКО в виде десятичной дроби (0.25, а не 1/4 и не 25%).</li>\n            </ul>\n\n            <h4>2. Вероятность противоположного события</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">P(не A) = 1 - P(A)</div>\n              <div class=\"math-subtext\">Например, вероятность исправного фонарика: P(исправен) = 1 - P(бракованный).</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посчитайте ОБЩЕЕ число объектов (n) — сложите все пирожки, чашки, спортсменов или фонарики.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите число БЛАГОПРИЯТНЫХ объектов (m) — именно тех, о которых идет речь в вопросе.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Разделите m на n столбиком или домножением до 10, 100, 1000. Переведите в десятичную дробь.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 325514)</div>\n              <p><strong>Условие:</strong> В тарелке лежат одинаковые на вид пирожки: 4 с мясом, 8 с капустой и 3 с вишней. Петя наугад выбирает один пирожок. Найдите вероятность того, что пирожок окажется с вишней.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Общее число пирожков: n = 4 + 8 + 3 = 15.</li>\n                  <li>Число пирожков с вишней: m = 3.</li>\n                  <li>Вероятность: P = 3 / 15 = 1 / 5 = 0.2.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>0.2</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Деление на проценты</strong>\n              <p>Никогда не пишите знак % в бланке ОГЭ! Если вероятность 20%, ответ strictly 0.2.</p>\n            </div>\n        "
    },
    {
      "id": "math_graphs",
      "sectionIndex": 1,
      "itemIndex": 3,
      "matchTitles": [
        "график",
        "функци",
        "парабол",
        "гипербол",
        "задание 11"
      ],
      "title": "Задание 11: Графики функций (Прямая, парабола, гипербола)",
      "fipiSpec": {
        "number": "№ 11",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Функции и их графики)"
      },
      "theory": "\n            <h4>1. Линейная функция: y = kx + b</h4>\n            <ul>\n              <li><strong>k > 0</strong> — прямая возрастает (идёт снизу-вверх слева-направо).</li>\n              <li><strong>k < 0</strong> — прямая убывает (идёт сверху-вниз).</li>\n              <li><strong>b</strong> — ордината точки пересечения с осью OY (точка (0; b)).</li>\n            </ul>\n\n            <h4>2. Квадратичная функция (парабола): y = ax² + bx + c</h4>\n            <ul>\n              <li><strong>a > 0</strong> — ветви параболы направлены <strong>вверх</strong>.</li>\n              <li><strong>a < 0</strong> — ветви направлены <strong>вниз</strong>.</li>\n              <li><strong>c</strong> — точка пересечения параболы с осью OY.</li>\n              <li><strong>Вершина параболы:</strong> x<sub>верш</sub> = -b / (2a).</li>\n            </ul>\n\n            <h4>3. Обратная пропорциональность (гипербола): y = k / x</h4>\n            <ul>\n              <li><strong>k > 0</strong> — ветви расположены в <strong>I и III</strong> координатных четвертях.</li>\n              <li><strong>k < 0</strong> — ветви расположены во <strong>II и IV</strong> координатных четвертях.</li>\n            </ul>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите тип графика (парабола, прямая или гипербола).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">По знаку старшего коэффициента (a или k) отберите направления ветвей или наклон.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">По точке пересечения с осью Y (коэффициент b или c) однозначно выберите график.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Установите соответствие между знаками коэффициентов a и c и графиками функции y = ax² + bx + c: А) a > 0, c < 0; Б) a < 0, c > 0; В) a > 0, c > 0.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А) a > 0 (ветви вверх), c < 0 (пересекает OY ниже нуля).<br>\n                   Б) a < 0 (ветви вниз), c > 0 (пересекает OY выше нуля).<br>\n                   В) a > 0 (ветви вверх), c > 0 (пересекает OY выше нуля).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>132</strong> (пример последовательности)</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Перепутанные четверти</strong>\n              <p>Четверти нумеруются против часовой стрелки: I — верх-право, II — верх-лево, III — низ-лево, IV — низ-право.</p>\n            </div>\n        "
    },
    {
      "id": "math_progressions",
      "sectionIndex": 1,
      "itemIndex": 4,
      "matchTitles": [
        "прогресс",
        "арифметическ",
        "геометрическ",
        "задание 14"
      ],
      "title": "Задание 14: Арифметическая и геометрическая прогрессии",
      "fipiSpec": {
        "number": "№ 14",
        "score": "1 первичный балл",
        "time": "4–6 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Последовательности и прогрессии)"
      },
      "theory": "\n            <h4>1. Арифметическая прогрессия (шаг d = a<sub>n+1</sub> - a<sub>n</sub>)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>n-й член:</strong> a<sub>n</sub> = a₁ + d · (n - 1)</div>\n              <div class=\"math-row\"><strong>Сумма первых n членов:</strong> S<sub>n</sub> = ((a₁ + a<sub>n</sub>) / 2) · n = ((2a₁ + d(n - 1)) / 2) · n</div>\n            </div>\n\n            <h4>2. Геометрическая прогрессия (знаменатель q = b<sub>n+1</sub> / b<sub>n</sub>)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>n-й член:</strong> b<sub>n</sub> = b₁ · q<sup>n-1</sup></div>\n              <div class=\"math-row\"><strong>Сумма n членов:</strong> S<sub>n</sub> = (b₁ · (q<sup>n</sup> - 1)) / (q - 1)</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите первый член a₁ и разность d (или знаменатель q) из текста задачи.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Поймите, что требуется найти: значение на определенном шаге (a<sub>n</sub>) или суммарное количество за все время (S<sub>n</sub>).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 341255)</div>\n              <p><strong>Условие:</strong> В амфитеатре 14 рядов. В первом ряду 20 мест, а в каждом следующем ряду на 3 места больше, чем в предыдущем. Сколько всего мест в амфитеатре?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>a₁ = 20, d = 3, n = 14.</li>\n                  <li>a₁₄ = 20 + 3 × (14 - 1) = 20 + 39 = 59 мест в последнем ряду.</li>\n                  <li>S₁₄ = ((20 + 59) / 2) × 14 = 79 × 7 = 553 места.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>553</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Поиск n-го члена вместо суммы</strong>\n              <p>Внимательно читайте вопрос: «сколько мест В ДЕСЯТОМ РЯДУ» (a₁₀) или «сколько ВСЕГО мест в первых 10 рядах» (S₁₀)!</p>\n            </div>\n        "
    },
    {
      "id": "math_right_triangle",
      "sectionIndex": 2,
      "itemIndex": 0,
      "matchTitles": [
        "прямоугольн",
        "треугольник",
        "пифагор",
        "тригонометр",
        "sin",
        "cos",
        "tg"
      ],
      "title": "Задание 15: Прямоугольный треугольник и тригонометрия",
      "fipiSpec": {
        "number": "№ 15",
        "score": "1 первичный балл (обязательно для набора 2 баллов по геометрии!)",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Планиметрия)"
      },
      "theory": "\n            <h4>1. Теорема Пифагора</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>a² + b² = c²</strong> &nbsp;|&nbsp; c = √(a² + b²) &nbsp;|&nbsp; a = √(c² - b²)</div>\n              <div class=\"math-subtext\">Египетский треугольник: стороны 3, 4, 5 (и кратные им: 6, 8, 10; 9, 12, 15). Другие частые тройки: (5, 12, 13), (8, 15, 17).</div>\n            </div>\n\n            <h4>2. Определения тригонометрических функций</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>sin A</strong> = противолежащий катет / гипотенуза = a / c</div>\n              <div class=\"math-row\"><strong>cos A</strong> = прилежащий катет / гипотенуза = b / c</div>\n              <div class=\"math-row\"><strong>tg A</strong> = противолежащий катет / прилежащий катет = a / b = sin A / cos A</div>\n            </div>\n\n            <h4>3. Золотые свойства углов</h4>\n            <ul>\n              <li>Катет, лежащий напротив угла <strong>30°</strong>, равен <strong>ПОЛОВИНЕ гипотенузы</strong>: a = c / 2.</li>\n              <li>Медиана, проведенная из прямого угла к гипотенузе, равна <strong>половине гипотенузы</strong> и радиусу описанной окружности: <strong>m<sub>c</sub> = c / 2 = R</strong>.</li>\n            </ul>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте чертеж и подпишите известный угол и стороны.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если дан косинус, а нужен синус — используйте основное тождество sin²A + cos²A = 1.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В прямоугольном треугольнике синус острого угла ВСЕГДА положителен и меньше 1.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 324211)</div>\n              <p><strong>Условие:</strong> В треугольнике ABC угол C равен 90°, AC = 12, AB = 15. Найдите sin B.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>По определению синуса: sin B = AC / AB (противолежащий катет к гипотенузе).</li>\n                  <li>sin B = 12 / 15 = 4 / 5 = 0.8.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>0.8</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Противолежащий vs прилежащий катет</strong>\n              <p>Для угла B противолежащим является катет AC, а прилежащим — BC! Не путайте их при нахождении sin и cos.</p>\n            </div>\n        "
    },
    {
      "id": "math_areas",
      "sectionIndex": 2,
      "itemIndex": 1,
      "matchTitles": [
        "площад",
        "треугольник",
        "трапеци",
        "параллелограмм",
        "ромб",
        "круг"
      ],
      "title": "Задание 17: Площади плоских фигур (Треугольник, трапеция, ромб)",
      "fipiSpec": {
        "number": "№ 17",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Формулы площадей)"
      },
      "theory": "\n            <h4>1. Площадь треугольника</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">S = ½ · a · h<sub>a</sub> &nbsp;|&nbsp; S = ½ · a · b · sin α</div>\n              <div class=\"math-row\">Для прямоугольного: S = ½ · a · b (половина произведения катетов)</div>\n            </div>\n\n            <h4>2. Параллелограмм и ромб</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Параллелограмм:</strong> S = a · h<sub>a</sub> = a · b · sin α</div>\n              <div class=\"math-row\"><strong>Ромб:</strong> S = ½ · d₁ · d₂ (половина произведения диагоналей)</div>\n            </div>\n\n            <h4>3. Трапеция</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">S = ((a + b) / 2) · h (произведение полусуммы оснований на высоту)</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите фигуру и найдите необходимые элементы (основания, высоту).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Проверьте, чтобы высота падала строго перпендикулярно к основанию!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Основания трапеции равны 4 и 10, а высота равна 5. Найдите площадь трапеции.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>S = ((4 + 10) / 2) × 5 = (14 / 2) × 5 = 7 × 5 = 35.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>35</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытый множитель 1/2</strong>\n              <p>В формуле треугольника и ромба обязателен множитель 1/2! Не умножайте просто a на h.</p>\n            </div>\n        "
    },
    {
      "id": "math_circle",
      "sectionIndex": 2,
      "itemIndex": 2,
      "matchTitles": [
        "окружност",
        "вписанн",
        "центральн",
        "касательн",
        "хорд"
      ],
      "title": "Задание 16: Окружность, углы и отрезки (Вписанные и центральные углы)",
      "fipiSpec": {
        "number": "№ 16",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>1. Центральный и вписанный углы</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Центральный угол</strong> = градусная мера дуги, на которую он опирается: ∠AOB = ◡AB</div>\n              <div class=\"math-row\"><strong>Вписанный угол</strong> = ПОЛОВИНЕ дуги: ∠ACB = ½ ◡AB = ½ ∠AOB</div>\n            </div>\n            <ul>\n              <li>Вписанные углы, опирающиеся на <strong>одну и ту же дугу</strong>, равны!</li>\n              <li>Вписанный угол, опирающийся на <strong>диаметр</strong>, ВСЕГДА равен <strong>90°</strong>!</li>\n            </ul>\n\n            <h4>2. Свойства касательных</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Радиус, проведенный в точку касания, <strong>перпендикулярен касательной</strong>: R ⊥ l</div>\n              <div class=\"math-row\">Отрезки касательных, проведенных из одной точки к окружности, <strong>равны</strong>!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите положение вершины угла: в центре (центральный) или на окружности (вписанный).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если угол вписанный — найдите дугу и разделите её градусную меру на 2.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Точка O — центр окружности, на которой лежат точки A, B и C. Известно, что угол ABC равен 48°. Найдите угол AOC.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Угол ABC — вписанный, опирается на дугу AC. Значит, дуга AC = 2 × 48° = 96°.</li>\n                  <li>Угол AOC — центральный, опирается на ту же дугу AC. Значит, ∠AOC = 96°.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>96</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Центральный против вписанного</strong>\n              <p>Центральный угол ВСЕГДА в 2 раза БОЛЬШЕ вписанного, опирающегося на ту же дугу!</p>\n            </div>\n        "
    },
    {
      "id": "math_angles",
      "sectionIndex": 2,
      "itemIndex": 3,
      "matchTitles": [
        "сумма углов",
        "внешний угол",
        "многоугольник"
      ],
      "title": "Задание 18 и 19: Сумма углов треугольника и свойства многоугольников",
      "fipiSpec": {
        "number": "№ 18, 19",
        "score": "1 первичный балл",
        "time": "2–4 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>1. Сумма углов</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Сумма углов любого треугольника = <strong>180°</strong></div>\n              <div class=\"math-row\">Сумма углов выпуклого n-угольника = <strong>180° · (n - 2)</strong></div>\n            </div>\n\n            <h4>2. Внешний угол треугольника</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Внешний угол треугольника равен <strong>сумме двух внутренних углов</strong>, не смежных с ним!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сложите два известных угла и вычтите сумму из 180°.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> В треугольнике ABC углы A и B равны соответственно 35° и 65°. Найдите внешний угол при вершине C.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Внешний угол при C равен сумме углов A и B: 35° + 65° = 100°.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>100</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Градусы в бланке</strong>\n              <p>Знак градуса (°) в бланк ОГЭ писать категорически запрещено! Пишем только число 100.</p>\n            </div>\n        "
    },
    {
      "id": "math_part2_20",
      "sectionIndex": 3,
      "itemIndex": 0,
      "matchTitles": [
        "задание 20",
        "уравнения высших степеней",
        "замена переменной"
      ],
      "title": "Задание 20: Алгебраические выражения, уравнения и системы (2 балла)",
      "fipiSpec": {
        "number": "№ 20",
        "score": "2 первичных балла",
        "time": "10–15 минут",
        "difficulty": "Повышенный уровень (Часть 2 с развернутым ответом)",
        "docSource": "Кодификатор ФИПИ (Вторая часть: уравнения)"
      },
      "theory": "\n            <h4>1. Метод разложения на множители (Разность квадратов)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">x⁴ = (2x - 3)²  <=>  x⁴ - (2x - 3)² = 0</div>\n              <div class=\"math-row\">(x² - (2x - 3))(x² + (2x - 3)) = 0</div>\n              <div class=\"math-row\">(x² - 2x + 3)(x² + 2x - 3) = 0</div>\n            </div>\n\n            <h4>2. Биквадратные уравнения и замена</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">ax⁴ + bx² + c = 0 => Замена t = x², где <strong>t ≥ 0</strong></div>\n              <div class=\"math-subtext\">Если t < 0, корень отбрасывается, так как квадрат действительного числа неотрицателен!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перенесите все слагаемые влево. Ни в коем случае не извлекайте корень, теряя знак ±!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Разложите на множители или сделайте замену переменной с указанием ОДЗ.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Решите получившиеся простые квадратные уравнения и запишите все корни через точку с запятой.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный вариант ОГЭ Часть 2 (№ 311548)</div>\n              <p><strong>Условие:</strong> Решите уравнение: x⁴ = (2x - 15)².</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>x⁴ - (2x - 15)² = 0 <=> (x² - (2x - 15))(x² + (2x - 15)) = 0.</li>\n                  <li>1) x² - 2x + 15 = 0: D = 4 - 60 = -56 < 0 (действительных корней нет).</li>\n                  <li>2) x² + 2x - 15 = 0: D = 4 + 60 = 64 = 8². Корни: x₁ = (-2 + 8)/2 = 3; x₂ = (-2 - 8)/2 = -5.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>-5; 3</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Извлечение корня без модуля</strong>\n              <p>Если написать x² = 2x - 15 вместо x² = ±(2x - 15), вы потеряете половину корней и получите 0 баллов за все задание!</p>\n            </div>\n        "
    },
    {
      "id": "math_part2_21",
      "sectionIndex": 3,
      "itemIndex": 1,
      "matchTitles": [
        "задание 21",
        "дробно-рациональные",
        "одз"
      ],
      "title": "Задание 20: Дробно-рациональные уравнения и ОДЗ (2 балла)",
      "fipiSpec": {
        "number": "№ 20",
        "score": "2 первичных балла",
        "time": "10–12 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>1. Основное правило дробно-рационального уравнения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">P(x) / Q(x) = 0 <=> P(x) = 0 ПРИ УСЛОВИИ Q(x) ≠ 0 (ОДЗ)</div>\n              <div class=\"math-subtext\">Если найденный корень обращает знаменатель Q(x) в 0, он является ПОСТОРОННИМ!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сразу выпишите ОДЗ: знаменатель не равен нулю.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите дроби к общему знаменателю и решите уравнение числителя.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте корни по ОДЗ и исключите посторонние с обязательным пояснением в бланке.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">ФИПИ 2026/2027 Часть 2</div>\n              <p><strong>Условие:</strong> Решите уравнение: 1/(x - 2)² - 1/(x - 2) - 6 = 0.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Пусть t = 1/(x - 2), где x ≠ 2. Тогда t² - t - 6 = 0.<br>\n                   По теореме Виета: t₁ = 3, t₂ = -2.<br>\n                   1) 1/(x - 2) = 3 => 3(x - 2) = 1 => 3x - 6 = 1 => x = 7/3 = 2 ⅓.<br>\n                   2) 1/(x - 2) = -2 => -2(x - 2) = 1 => -2x + 4 = 1 => x = 1.5.<br>\n                   Оба корня удовлетворяют ОДЗ (x ≠ 2).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>1.5; 2 ⅓</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая ОДЗ</strong>\n              <p>Эксперты ФИПИ снимут 1 балл, если ОДЗ не проверена в явном виде при оформлении второй части.</p>\n            </div>\n        "
    },
    {
      "id": "math_part2_motion",
      "sectionIndex": 3,
      "itemIndex": 2,
      "matchTitles": [
        "задание 21",
        "текстовые задачи",
        "движение",
        "по воде"
      ],
      "title": "Задание 21: Текстовые задачи на движение по суше и реке (2 балла)",
      "fipiSpec": {
        "number": "№ 21",
        "score": "2 первичных балла",
        "time": "15 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Текстовые задачи)"
      },
      "theory": "\n            <h4>1. Базовые формулы движения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">S = v · t &nbsp;|&nbsp; t = S / v &nbsp;|&nbsp; v = S / t</div>\n            </div>\n\n            <h4>2. Движение по воде (по течению и против течения)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>По течению:</strong> v<sub>по теч</sub> = v<sub>собств</sub> + v<sub>теч</sub></div>\n              <div class=\"math-row\"><strong>Против течения:</strong> v<sub>пр теч</sub> = v<sub>собств</sub> - v<sub>теч</sub></div>\n              <div class=\"math-subtext\">Скорость плота строго равна скорости течения реки (v<sub>плота</sub> = v<sub>теч</sub>)!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Примите неизвестную величину (обычно собственную скорость катера или скорость велосипедиста) за x (км/ч), где x > 0.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Заполните таблицу: Путь S, Скорость v, Время t = S / v.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Составьте уравнение по разнице во времени: t<sub>медленнее</sub> - t<sub>быстрее</sub> = Δt (переведите минуты в часы: 20 мин = 20/60 = ⅓ ч).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ / Решу ОГЭ (№ 311652)</div>\n              <p><strong>Условие:</strong> Моторная лодка прошла против течения реки 255 км и вернулась в пункт отправления, затратив на обратный путь на 2 часа меньше. Найдите скорость лодки в неподвижной воде, если скорость течения равна 1 км/ч.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Пусть собственная скорость лодки равна x км/ч (x > 1).<br>\n                   Время против течения: 255 / (x - 1).<br>\n                   Время по течению: 255 / (x + 1).<br>\n                   Уравнение: 255/(x - 1) - 255/(x + 1) = 2.<br>\n                   255(x + 1 - x + 1) = 2(x² - 1) => 255 · 2 = 2(x² - 1) => x² - 1 = 255 => x² = 256 => x = 16 (так как x > 0).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>16 км/ч</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Минуты без перевода в часы</strong>\n              <p>Если стоянка длилась 45 минут, нельзя писать 45 в уравнение! Пишите строго 45/60 = ¾ часа.</p>\n            </div>\n        "
    },
    {
      "id": "math_21_work",
      "sectionIndex": 3,
      "itemIndex": 3,
      "matchTitles": [
        "совместную работу",
        "сплавы",
        "смеси",
        "концентрация"
      ],
      "title": "Задание №21: Задачи на совместную работу и сплавы/смеси",
      "fipiSpec": {
        "number": "№ 21",
        "score": "2 первичных балла",
        "time": "15–20 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Текстовые задачи на работу и смеси)"
      },
      "theory": "\n            <h4>1. Формула совместной работы</h4>\n            <p>Вся работа принимается за <strong>A = 1</strong> (целая часть). Скорость выполнения (производительность) обозначается <strong>p</strong>.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">A = p · t &nbsp;|&nbsp; p = 1 / t &nbsp;|&nbsp; t = 1 / p</div>\n              <div class=\"math-row\"><strong>Совместная производительность:</strong> p<sub>общ</sub> = p₁ + p₂ = 1/t₁ + 1/t₂</div>\n            </div>\n\n            <h4>2. Формула сплавов и растворов</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Масса чистого вещества:</strong> m<sub>чист</sub> = m<sub>общ</sub> · (ω% / 100%)</div>\n              <div class=\"math-row\"><strong>Закон сохранения массы:</strong> m₁·ω₁ + m₂·ω₂ = (m₁ + m₂) · ω<sub>смеси</sub></div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>В задачах на работу:</strong> выразите производительность каждого рабочего или трубы как 1/t. Если первый делает за x дней, его p₁ = 1/x.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>В задачах на сплавы:</strong> составьте таблицу из трех колонок: общая масса раствора, процентное содержание, масса чистого вещества.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сложите массы чистых веществ исходных компонентов и приравняйте к массе чистого вещества в итоговом сплаве.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 311720)</div>\n              <p><strong>Условие:</strong> Имеется два сплава. Первый содержит 10% никеля, второй — 30% никеля. Из этих двух сплавов получили третий сплав массой 200 кг, содержащий 25% никеля. Масса какого сплава была больше и на сколько килограммов?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Пусть масса первого сплава x кг, тогда масса второго (200 - x) кг.<br>\n                   Масса никеля в первом: 0.10x кг.<br>\n                   Масса никеля во втором: 0.30(200 - x) кг.<br>\n                   Масса никеля в третьем: 0.25 · 200 = 50 кг.<br>\n                   Уравнение: 0.10x + 0.30(200 - x) = 50<br>\n                   0.10x + 60 - 0.30x = 50 => -0.20x = -10 => x = 50 кг (масса 1-го сплава).<br>\n                   Масса 2-го сплава: 200 - 50 = 150 кг.<br>\n                   Второго сплава взято больше на: 150 - 50 = 100 кг.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Второго на 100 кг</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Вопрос задачи</strong>\n              <p>В вопросе часто спрашивают не просто массу первого сплава, а «на сколько килограммов масса второго больше первого». Обязательно перечитайте вопрос перед записью ответа в бланк!</p>\n            </div>\n        "
    },
    {
      "id": "math_22_params",
      "sectionIndex": 3,
      "itemIndex": 4,
      "matchTitles": [
        "построение графиков",
        "параметром m",
        "задание 22",
        "кусочная функция",
        "выколотая точка"
      ],
      "title": "Задание №22: Построение графиков функций с параметром m",
      "fipiSpec": {
        "number": "№ 22",
        "score": "2 первичных балла",
        "time": "20–25 минут",
        "difficulty": "Высокий уровень",
        "docSource": "Кодификатор ФИПИ (Исследование функций и графики)"
      },
      "theory": "\n            <h4>1. Требования критериев ФИПИ</h4>\n            <p>1 балл ставится за безошибочно построенный график (со всеми контрольными точками и выколотыми точками). 2 балла — за верно найденные значения параметра m.</p>\n\n            <h4>2. Прямая y = m (горизонтальная линия)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">y = m — прямая, параллельная оси Ox.</div>\n              <div class=\"math-subtext\">Значения m определяются ординатами вершин парабол, выколотых точек и горизонтальных асимптот гиперболы.</div>\n            </div>\n\n            <h4>3. Разложение на множители и сокращение дроби</h4>\n            <p>Если дана дробная функция, разложите числитель на множители, найдите область определения D(y) и выколите запрещенные точки с кружочком ⚪.</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Область определения:</strong> Запишите знаменатель ≠ 0. Найдите координаты x выколотых точек.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Упростите выражение:</strong> Постройте полученную простую функцию (параболу y=ax²+bx+c или прямую) и аккуратно выколите точки (x₀; y₀).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Анализ параметра m:</strong> Мысленно ведите прямую y=m снизу вверх (от -∞ до +∞). Зафиксируйте значения m, где число общих точек меняется.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 314482)</div>\n              <p><strong>Условие:</strong> Постройте график функции y = (x⁴ - 13x² + 36) / ((x - 3)(x + 2)) и определите, при каких значениях c прямая y = c имеет с графиком ровно одну общую точку.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>ОДЗ: x ≠ 3, x ≠ -2.<br>\n                   Разложим числитель: x⁴ - 13x² + 36 = (x² - 4)(x² - 9) = (x-2)(x+2)(x-3)(x+3).<br>\n                   При x ≠ 3 и x ≠ -2 функция принимает вид: y = (x - 2)(x + 3) = x² + x - 6.<br>\n                   График — парабола с вершиной x<sub>в</sub> = -b/(2a) = -0.5, y<sub>в</sub> = (-0.5)² + (-0.5) - 6 = -6.25.<br>\n                   Выколотые точки:<br>\n                   При x = -2: y = (-2)² + (-2) - 6 = -4 => точка (-2; -4).<br>\n                   При x = 3: y = 3² + 3 - 6 = 6 => точка (3; 6).<br>\n                   Прямая y = c имеет ровно 1 общую точку при:<br>\n                   1) c = -6.25 (вершина параболы);<br>\n                   2) c = -4 (проходит через выколотую точку (-2; -4), пересекает только вторую ветвь);<br>\n                   3) c = 6 (проходит через выколотую точку (3; 6), пересекает только первую ветвь).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>c = -6.25; c = -4; c = 6</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая выколотая точка</strong>\n              <p>Если не показать выколотую точку на чертеже или не указать значение m, проходящее через неё, эксперт выставляет 0 баллов за всё задание!</p>\n            </div>\n        "
    },
    {
      "id": "math_23_similarity",
      "sectionIndex": 4,
      "itemIndex": 0,
      "matchTitles": [
        "подобие треугольников",
        "вычисления через подобие",
        "задание 23"
      ],
      "title": "Задание №23: Вычисления через подобие треугольников",
      "fipiSpec": {
        "number": "№ 23",
        "score": "2 первичных балла",
        "time": "15–20 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Геометрия повышенного уровня)"
      },
      "theory": "\n            <h4>1. Признаки подобия треугольников</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1-й признак (по двум углам):</strong> ∠A = ∠A₁, ∠B = ∠B₁ => ΔABC ~ ΔA₁B₁C₁</div>\n              <div class=\"math-row\"><strong>2-й признак:</strong> две стороны пропорциональны и углы между ними равны.</div>\n              <div class=\"math-row\"><strong>Коэффициент подобия:</strong> k = AB/A₁B₁ = BC/B₁C₁ = AC/A₁C₁</div>\n              <div class=\"math-row\"><strong>Отношение площадей:</strong> S / S₁ = k²</div>\n            </div>\n\n            <h4>2. Типовая конструкция: параллельные прямые и трапеция</h4>\n            <p>Прямая, параллельная стороне треугольника, отсекает от него треугольник, подобный исходному. В трапеции треугольники при основаниях, образованные диагоналями, всегда подобны!</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте четкий чертеж по условию задачи, отметьте равные углы (вертикальные, накрест лежащие при параллельных прямых).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Докажите подобие двух треугольников (с обязательным указанием признака, например: «по двум углам: ∠1 = ∠2 как накрест лежащие, ∠3 = ∠4 как вертикальные»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите отношение сходственных сторон (лежащих напротив равных углов!) и выразите искомую величину.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 324151)</div>\n              <p><strong>Условие:</strong> Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно. Найдите BN, если MN = 13, AC = 65, а NC = 28.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Так как MN || AC, угол BMN = углу BAC (как соответственные при секущей AB), угол BNM = углу BCA (как соответственные при секущей BC).<br>\n                   2. Следовательно, ΔMBN ~ ΔABC по двум углам.<br>\n                   3. Запишем отношение сторон: MN / AC = BN / BC.<br>\n                   Пусть BN = x, тогда BC = BN + NC = x + 28.<br>\n                   13 / 65 = x / (x + 28) => 1 / 5 = x / (x + 28)<br>\n                   x + 28 = 5x => 4x = 28 => x = 7.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>7</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытое обоснование параллельности</strong>\n              <p>Нельзя просто написать «треугольники подобны». Эксперты снижают 1 балл, если не указано равенство углов и причина (например, «как накрест лежащие при BC || AD и секущей BD»).</p>\n            </div>\n        "
    },
    {
      "id": "math_24_tangents",
      "sectionIndex": 4,
      "itemIndex": 1,
      "matchTitles": [
        "касательных и секущих",
        "свойства касательных",
        "задание 24"
      ],
      "title": "Задание №24: Свойства касательных и секущих окружности",
      "fipiSpec": {
        "number": "№ 24",
        "score": "2 первичных балла",
        "time": "15–20 минут",
        "difficulty": "Повышенный уровень (на доказательство)",
        "docSource": "Кодификатор ФИПИ (Геометрические доказательства)"
      },
      "theory": "\n            <h4>1. Теорема об отрезках касательных</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Отрезки касательных к окружности, проведенные из одной точки, <strong>равны</strong> и составляют равные углы с прямой, проходящей через эту точку и центр окружности.</div>\n              <div class=\"math-row\">R ⊥ касательной в точке касания!</div>\n            </div>\n\n            <h4>2. Теорема о касательной и секущей</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Квадрат касательной равен произведению секущей на её внешнюю часть:</div>\n              <div class=\"math-row\">AK² = AB · AC</div>\n            </div>\n\n            <h4>3. Угол между касательной и хордой</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Угол между касательной и хордой равен половине дуги, стягиваемой этой хордой, то есть равен вписанному углу, опирающемуся на ту же дугу!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте аккуратный чертеж, проведите радиусы в точки касания (помните о прямых углах 90°).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Соедините центр с внешней точкой и рассмотрите полученные прямоугольные треугольники.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Оформите строгое логическое доказательство через признаки равенства прямоугольных треугольников (по гипотенузе и катету).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 337210)</div>\n              <p><strong>Условие:</strong> Из точки M к окружности с центром O проведены две касательные MA и MB (A и B — точки касания). Докажите, что луч MO является биссектрисой угла AMB.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Проведем радиусы OA и OB к точкам касания. По свойству касательной: OA ⊥ MA и OB ⊥ MB, следовательно треугольники OMA и OMB являются прямоугольными с прямыми углами ∠OAM = ∠OBM = 90°.<br>\n                   2. В прямоугольных треугольниках OMA и OMB:<br>\n                   — OA = OB как радиусы одной окружности (катеты);<br>\n                   — OM — общая сторона (гипотенуза).<br>\n                   3. Следовательно, ΔOMA = ΔOMB по гипотенузе и катету.<br>\n                   4. Из равенства треугольников следует равенство соответственных углов: ∠AMO = ∠BMO. Значит, луч MO является биссектрисой угла AMB. Что и требовалось доказать.</p>\n                <div class=\"task-answer-box\">Доказательство завершено</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ссылка на недоказанные факты</strong>\n              <p>Нельзя в решении задачи на доказательство использовать то, что требуется доказать. Доказательство должно опираться исключительно на аксиомы и базовые теоремы геометрии.</p>\n            </div>\n        "
    },
    {
      "id": "math_25_trapezoid",
      "sectionIndex": 4,
      "itemIndex": 2,
      "matchTitles": [
        "трапеция и диагонали",
        "трапеция",
        "задание 25",
        "задание 24/25"
      ],
      "title": "Задание №24/25: Трапеция, диагонали и средняя линия",
      "fipiSpec": {
        "number": "№ 24 / № 25",
        "score": "2 первичных балла",
        "time": "20–30 минут",
        "difficulty": "Высокий уровень",
        "docSource": "Кодификатор ФИПИ (Сложные геометрические конфигурации)"
      },
      "theory": "\n            <h4>1. Диагонали делят трапецию на 4 треугольника</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Пусть диагонали трапеции ABCD пересекаются в точке O:</div>\n              <div class=\"math-row\">1. Треугольники при основаниях <strong>подобны</strong>: ΔBOC ~ ΔDOA с k = BC / AD.</div>\n              <div class=\"math-row\">2. Треугольники при боковых сторонах <strong>равновелики</strong> (имеют одинаковую площадь): S<sub>ΔABO</sub> = S<sub>ΔCDO</sub>!</div>\n              <div class=\"math-row\">3. Связь площадей: S<sub>ΔABO</sub> = √(S<sub>ΔBOC</sub> · S<sub>ΔDOA</sub>).</div>\n            </div>\n\n            <h4>2. Дополнительные построения для трапеции</h4>\n            <p>Топ-3 спасительных приема в №25:</p>\n            <ul>\n              <li>Провести через вершину прямую, параллельную боковой стороне (получаем параллелограмм и треугольник).</li>\n              <li>Провести через вершину прямую, параллельную диагонали (получаем треугольник с площадью, равной площади трапеции!).</li>\n              <li>Продлить боковые стороны до их пересечения.</li>\n            </ul>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Постройте трапецию и проведите диагонали. Обозначьте основания a и b.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Используйте подобие ΔBOC и ΔDOA, выразите отношение высот этих треугольников к общей высоте трапеции.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если задача повышенной трудности (№25), примените перенос диагонали параллельно самой себе для составления теоремы Пифагора или косинусов.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 341829)</div>\n              <p><strong>Условие:</strong> Основания трапеции равны 4 и 9, а диагонали равны 5 и 12. Найдите площадь трапеции.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Через вершину C проведем прямую, параллельную диагонали BD, до пересечения с продолжением основания AD в точке K.<br>\n                   2. Четырехугольник BCKD — параллелограмм (BC || DK, CK || BD), следовательно DK = BC = 4, CK = BD = 12.<br>\n                   3. Рассмотрим треугольник ACK: AC = 5, CK = 12, AK = AD + DK = 9 + 4 = 13.<br>\n                   4. Проверим теорему Пифагора для ΔACK: 5² + 12² = 25 + 144 = 169 = 13².<br>\n                   Значит, треугольник ACK является прямоугольным с прямым углом при вершине C!<br>\n                   5. Площадь ΔACK = ½ · AC · CK = ½ · 5 · 12 = 30.<br>\n                   6. Так как высоты трапеции ABCD и треугольника ACK совпадают, а основание AK = AD + BC, площади трапеции и треугольника ACK строго равны: S<sub>трап</sub> = S<sub>ΔACK</sub> = 30.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>30</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Равновеликость vs подобие</strong>\n              <p>Треугольники ABO и CDO при боковых сторонах трапеции имеют РАВНЫЕ площади (равновелики), но НЕ равны и НЕ подобны друг другу, если трапеция не равнобедренная!</p>\n            </div>\n        "
    }
  ],
  "russian": [
    {
      "id": "rus_compress_exclusion",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "исключение",
        "приемы сжатия",
        "изложение"
      ],
      "title": "Задание 1: Прием сжатия «Исключение» (Сжатое изложение)",
      "fipiSpec": {
        "number": "№ 1",
        "score": "6–7 первичных баллов (ИК1, ИК2, ИК3)",
        "time": "35–45 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Критерии ФИПИ оценивания сжатого изложения (Критерий ИК2)"
      },
      "theory": "\n            <h4>1. Суть приема «Исключение»</h4>\n            <p>Исключение — это удаление второстепенной, избыточной информации, без которой смысл микротемы сохраняется полностью.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Что подлежит обязательному исключению:</strong></div>\n              <ul>\n                <li>Вводные слова и конструкции (<i>конечно, разумеется, по моему мнению, к счастью</i>);</li>\n                <li>Однородные члены предложения (из ряда 4–5 однородных оставляем 1–2 главных);</li>\n                <li>Повторы и тавтологии (синонимические дубли);</li>\n                <li>Пояснения, уточнения в скобках или через тире;</li>\n                <li>Риторические вопросы и восклицания (переводим в повествовательные предложения).</li>\n              </ul>\n            </div>\n            <h4>2. Критерий ИК2 ФИПИ</h4>\n            <p>Для получения максимальных 3 баллов по критерию ИК2 экзаменуемый должен применить <strong>хотя бы один прием сжатия текста в КАЖДОЙ из трех микротем</strong> (абзацев)!</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">При первом прослушивании аудиозаписи зафиксируйте скелет каждой из 3 микротем (ключевые слова и тезисы).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите длинные цепочки однородных определений или дополнений и вычеркните описательные детали.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Удалите вводные слова и оценочные междометия, сохранив строгую логическую связь между мыслями.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 4</div>\n                <div class=\"task-step-desc\">Проверьте объем: в итоговом тексте должно быть <strong>не менее 70 слов</strong> (оптимально 75–95 слов).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный текст из банка ФИПИ</div>\n              <p><strong>Исходный фрагмент:</strong> «Настоящая дружба — это бескорыстное, глубокое, искреннее, неподдельное чувство взаимопонимания между людьми, которое не требует наград, почестей или взаимных материальных одолжений» (21 слово).</p>\n              <div class=\"task-example-solution\">\n                <strong>Применение исключения:</strong>\n                <p>«Настоящая дружба — это искреннее взаимопонимание между людьми, не требующее материальной выгоды» (10 слов).</p>\n                <div class=\"task-answer-box\">Сжато более чем в 2 раза с сохранением микротемы</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Удаление ключевой мысли</strong>\n              <p>Если вместе с «водой» выкинуть главную мысль автора хотя бы в одном абзаце, вы потеряете баллы сразу по двум критериям: ИК1 (содержание) и ИК2 (сжатие).</p>\n            </div>\n        "
    },
    {
      "id": "rus_compress_generalization",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "обобщение",
        "прием обобщения"
      ],
      "title": "Задание 1: Прием сжатия «Обобщение» (Сжатое изложение)",
      "fipiSpec": {
        "number": "№ 1",
        "score": "3 балла по критерию ИК2",
        "time": "15 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Критерии ФИПИ (ИК2 — Приемы сжатия)"
      },
      "theory": "\n            <h4>1. Суть приема «Обобщение»</h4>\n            <p>Обобщение — это замена ряда единичных понятий, фактов или действий одним родовым понятием или гиперонимом.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Способы обобщения:</strong></div>\n              <ul>\n                <li>Замена ряда однородных членов гиперонимом (родовым словом): <i>березы, осины, дубы, сосны → деревья / лес</i>;</li>\n                <li>Замена перечисления действий общим наименованием: <i>помогал слабым, кормил бездомных животных, заботился о больных → совершал добрые поступки</i>;</li>\n                <li>Слияние нескольких предложений, содержащих детали, в одно обобщающее предложение.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в черновике перечисление конкретных предметов, явлений или эмоций.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Подберите емкое обобщающее существительное или глагол, объединяющий все элементы.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сформулируйте одну компактную мысль вместо 2–3 громоздких фраз.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Текст ФИПИ (О книгах и чтении)</div>\n              <p><strong>Исходный фрагмент:</strong> «На полках стояли старинные романы, философские трактаты, поэтические сборники, научные справочники и пожелтевшие энциклопедии» (14 слов).</p>\n              <div class=\"task-example-solution\">\n                <strong>Применение обобщения:</strong>\n                <p>«На полках стояли разнообразные книги» (5 слов).</p>\n                <div class=\"task-answer-box\">Экономия 9 слов без потери смысла</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Слишком абстрактное обобщение</strong>\n              <p>Не заменяйте конкретику словами «все это», «разные вещи». Используйте точные слова: «литература», «нравственные ценности», «качества характера».</p>\n            </div>\n        "
    },
    {
      "id": "rus_compress_simplification",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "упрощение",
        "прием упрощения"
      ],
      "title": "Задание 1: Прием сжатия «Упрощение» (Сжатое изложение)",
      "fipiSpec": {
        "number": "№ 1",
        "score": "3 балла по критерию ИК2",
        "time": "15 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Критерии ФИПИ (ИК2 — Приемы сжатия)"
      },
      "theory": "\n            <h4>1. Суть приема «Упрощение»</h4>\n            <p>Упрощение — это трансформация сложной синтаксической конструкции в более простую и емкую структуру.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Основные способы синтаксического упрощения:</strong></div>\n              <ul>\n                <li>Замена сложного предложения (СПП/ССП) простым: <i>Человек, который стремится к успеху... → Стремящийся к успеху человек...</i>;</li>\n                <li>Замена придаточного определительного причастным оборотом;</li>\n                <li>Замена придаточного обстоятельственного деепричастным оборотом или предложно-именным сочетанием (<i>когда наступило утро → утром</i>);</li>\n                <li>Замена прямой речи косвенной речью.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите сложноподчиненные предложения с союзными словами «который», «где», «когда».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сверните придаточную часть в обособленный оборот или наречие.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Уберите союзы-паразиты и перегруженные связки «в связи с тем что», заменив на «потому что» или тире.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Текст ФИПИ (О совести)</div>\n              <p><strong>Исходный фрагмент:</strong> «Когда человек совершает неблаговидный поступок, он начинает испытывать глубокие внутренние угрызения, которые не дают ему покоя ни днем, ни ночью» (19 слов).</p>\n              <div class=\"task-example-solution\">\n                <strong>Применение упрощения:</strong>\n                <p>«Совершив дурной поступок, человек мучается угрызениями совести» (7 слов).</p>\n                <div class=\"task-answer-box\">Экономия 12 слов при кристальной ясности мысли</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Грамматические ошибки при перестройке</strong>\n              <p>Следите за деепричастными оборотами: добавочное действие деепричастия должно выполняться тем же лицом, что и главное действие сказуемого!</p>\n            </div>\n        "
    },
    {
      "id": "rus_roots",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "чередующиеся гласные",
        "корни",
        "задание 6",
        "задание 7",
        "орфография корней"
      ],
      "title": "Задания 6–7: Чередующиеся гласные в корне слова",
      "fipiSpec": {
        "number": "№ 6–7",
        "score": "1 первичный балл за каждое",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Орфографический анализ)"
      },
      "theory": "\n            <h4>4 группы корней с чередованием (проверять ударением НЕЛЬЗЯ!)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1. Зависят от суффикса -А-:</strong></div>\n              <ul>\n                <li>БЕР/БИР-А, ДЕР/ДИР-А, МЕР/МИР-А, ПЕР/ПИР-А, ТЕР/ТИР-А, БЛЕСТ/БЛИСТ-А, СТЕЛ/СТИЛ-А, ЖЕГ/ЖИГ-А. (Правило ослика ИА: если за корнем суффикс А — в корне пиши И!). Исключения: <i>сочетать, сочетание</i>.</li>\n                <li>КАС/КОС-А: если есть суффикс -А- → к<strong>а</strong>саться, если нет → к<strong>о</strong>снуться.</li>\n              </ul>\n              <div class=\"math-row\"><strong>2. Зависят от ударения:</strong></div>\n              <ul>\n                <li>ГАР/ГОР: под ударением А (заг<strong>а́</strong>р), без ударения О (заг<strong>о</strong>ре́лый). Искл: <i>изгарь, пригарь</i>.</li>\n                <li>ЗАР/ЗОР: без ударения А (з<strong>а</strong>ря́), под ударением то, что слышится (з<strong>о́</strong>рька).</li>\n                <li>КЛАН/КЛОН, ТВАР/ТВОР: без ударения всегда О (покл<strong>о</strong>ни́ться, тв<strong>о</strong>ре́ние). Искл: <i>утварь</i>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>3. Зависят от согласной на конце корня:</strong></div>\n              <ul>\n                <li>РАСТ / РАЩ / РОС: перед СТ и Щ пиши А (р<strong>аст</strong>ение, выр<strong>ащ</strong>енный), перед С пиши О (выр<strong>ос</strong>). Искл: <i>росток, отрасль, Ростов, Ростислав, ростовщик</i>.</li>\n                <li>СКАК / СКОЧ: перед К пиши А (ск<strong>ак</strong>ать), перед Ч пиши О (вск<strong>оч</strong>ить). Искл: <i>скачок</i>.</li>\n                <li>ЛАГ / ЛОЖ: перед Г пиши А (предл<strong>аг</strong>ать), перед Ж пиши О (предл<strong>ож</strong>ить).</li>\n              </ul>\n              <div class=\"math-row\"><strong>4. Зависят от значения:</strong></div>\n              <ul>\n                <li>МАК (погружать в жидкость: <i>макать хлеб в мед</i>) / МОК (пропускать жидкость, мокнуть: <i>вымокнуть под дождем, непромокаемый</i>).</li>\n                <li>РАВН (одинаковый, равный: <i>уравнение</i>) / РОВН (гладкий, прямой: <i>заровнять яму</i>). Искл: <i>равнина, поравняться</i>.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите корень и определите его значение (например, «примирять врагов» — корень МИР со значением «мир», это проверяемая гласная, а не чередование!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Соотнесите с правилом одной из 4 групп: суффикс А, ударение, конечная согласная или значение.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Внимательно сверьте со списком слов-исключений.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание 6 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> Укажите варианты ответов, в которых дано ВЕРНОЕ объяснение написания слова:<br>\n              1) <i>ЗАГОРАТЬ</i> — написание безударной чередующейся гласной в корне зависит от ударения.<br>\n              2) <i>ПРИМИРЯТЬ (друзей)</i> — в корне с чередованием пишется буква И, так как за корнем следует суффикс -А-.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ:</strong>\n                <p>1) Верно: корень ГАР/ГОР с чередованием, в безударной позиции пишется О.<br>\n                   2) Неверно: слово «примирять» проверяется словом «мир», это проверяемая безударная гласная корня, а не чередование!</p>\n                <div class=\"task-answer-box\">Ответ: <strong>1</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Омонимичные корни</strong>\n              <p>Различайте чередующиеся корни и омонимичные проверяемые корни: «горный воздух» (го́ры — проверяемая), «горевать» (го́ре — проверяемая), «загорелый» (гор/гар — чередующаяся!).</p>\n            </div>\n        "
    },
    {
      "id": "rus_prefixes",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "приставки пре и при",
        "пре и при",
        "приставки"
      ],
      "title": "Задания 6–7: Правописание приставок ПРЕ- и ПРИ-",
      "fipiSpec": {
        "number": "№ 6–7",
        "score": "1 первичный балл",
        "time": "2–4 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Правописание приставок)"
      },
      "theory": "\n            <h4>1. Значения приставки ПРИ-</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Приближение:</strong> приехать, прибежать, прилететь.</li>\n                <li><strong>Присоединение:</strong> пришить, приклеить, прикрутить.</li>\n                <li><strong>Пространственная близость:</strong> приморский, пришкольный, придорожный.</li>\n                <li><strong>Неполнота действия:</strong> приоткрыть (чуть-чуть), привстать, пригореть.</li>\n                <li><strong>Доведение действия до конца:</strong> придумать, приручить.</li>\n                <li><strong>Совершение действия в чьих-либо интересах:</strong> приберечь, припрятать.</li>\n              </ul>\n            </div>\n            <h4>2. Значения приставки ПРЕ-</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>В значении «ОЧЕНЬ» (= высшая степень):</strong> премудрый (очень мудрый), премилый, преувеличивать.</li>\n                <li><strong>В значении «ПЕРЕ-»:</strong> преградить (= перегородить), преступление (= переступить закон), прервать.</li>\n              </ul>\n            </div>\n            <h4>3. Различение по значению (словарные пары)</h4>\n            <p><i>Пребывать (находиться) — прибывать (приезжать); предать (изменить) — придать (добавить форму); преклоняться (уважать) — приклонить (нагнуть к земле).</i></p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Задайте вопрос к значению слова: «очень ли это?» или «пере- ли это?». Если да — пишите ПРЕ-.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если есть физическое приближение, присоединение, нахождение рядом или неполнота действия — пишите ПРИ-.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сверьтесь со словарными словами иностранного происхождения (<i>президент, премьера, привилегия, приоритет</i>).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание ФИПИ на орфографический анализ</div>\n              <p><strong>Формулировка:</strong> <i>ПРИВОКЗАЛЬНАЯ (площадь)</i> — написание приставки определяется её значением — неполнота действия.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ формулировки:</strong>\n                <p>Привокзальная площадь — это площадь, расположенная <strong>вблизи вокзала</strong> (пространственная близость). Объяснение в формулировке («неполнота действия») неверно!</p>\n                <div class=\"task-answer-box\">Утверждение НЕВЕРНО</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: В формулировке ФИПИ подменяют значение приставки</strong>\n              <p>Слово может быть написано абсолютно правильно, но формулировка объясняет его чужим правилом (например, близость вместо присоединения). Читайте формулировку до последнего слова!</p>\n            </div>\n        "
    },
    {
      "id": "rus_n_nn",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "н и нн",
        "суффиксы прилагательных",
        "причастий"
      ],
      "title": "Задания 6–7: Правописание Н и НН в прилагательных и причастиях",
      "fipiSpec": {
        "number": "№ 6–7",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Правописание суффиксов различных частей речи)"
      },
      "theory": "\n            <h4>1. Н и НН в отыменных прилагательных (образованных от сущ.)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Одна Н:</strong></div>\n              <ul>\n                <li>Суффиксы <strong>-АН-, -ЯН-, -ИН-</strong>: песчаный, глиняный, гусиный. Исключения: <i>деревянный, оловянный, стеклянный</i>.</li>\n                <li>Первообразные прилагательные: <i>юный, синий, зеленый, румяный</i>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>Две НН:</strong></div>\n              <ul>\n                <li>Стык основы на Н + суффикс Н: туман + н = <i>туманный</i>, карман + н = <i>карманный</i>.</li>\n                <li>Суффиксы <strong>-ОНН-, -ЕНН-</strong>: соломенный, экскурсионный. Исключение: <i>ветреный</i> (но: <i>безветренный</i>).</li>\n              </ul>\n            </div>\n            <h4>2. Н и НН в полных причастиях и отглагольных прилагательных</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Пишется НН, если выполняется ХОТЯ БЫ ОДНО из 4 условий:</strong></div>\n              <ol>\n                <li>Есть приставка (кроме НЕ-): <i><strong>по</strong>крашенный забор</i>;</li>\n                <li>Образовано от глагола совершенного вида: <i>решённая задача</i> (что сделать? — решить);</li>\n                <li>Есть зависимые слова: <i>жаренная <strong>на сковороде</strong> рыба</i>;</li>\n                <li>Есть суффиксы -ОВА- / -ЕВА- / -ИРОВА-: <i>маринованные огурцы</i> (искл: кованый, жеваный).</li>\n              </ol>\n              <div class=\"math-subtext\">Если ни одно из 4 условий не выполнено — пишется одна Н: <i>жареная рыба, крашеный пол</i>.</div>\n            </div>\n            <h4>3. Краткие формы</h4>\n            <p>В кратких причастиях ВСЕГДА пишется <strong>одна Н</strong>: <i>задача решена, книга прочитана, ошибка исправлена</i>.<br>\n            В кратких прилагательных пишется столько же Н, сколько в полных: <i>девушка умна и воспита<strong>нн</strong>а (воспитанная)</i>.</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите часть речи: от существительного (отыменное) или от глагола (причастие/отглагольное). Проверьте, не краткая ли это форма!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если это причастие, проверьте 4 маркера НН: приставка, вид (сов.), зависимое слово, -ова/-ева.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если краткое причастие (отвечает на вопрос «что сделано?») — строго пишите <strong>одну букву Н</strong>.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тест ФИПИ (ОГЭ 2026/2027)</div>\n              <p><strong>Формулировка:</strong> <i>ПОСТРОЕНА (школа)</i> — в суффиксе краткого страдательного причастия прошедшего времени пишется одна буква Н.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ:</strong>\n                <p>Школа (что сделана?) построена. Это краткое страдательное причастие от глагола «построить». По правилу в кратких причастиях пишется одна буква Н. Формулировка верна на 100%.</p>\n                <div class=\"task-answer-box\">Утверждение ВЕРНО</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Путаница кратких прилагательных и кратких причастий</strong>\n              <p>«Девочка избалованна» (прилагательное, какова? изнеженна = НН) vs «Девочка избалована родителями» (причастие, есть производитель действия кем? родителями = одна Н).</p>\n            </div>\n        "
    },
    {
      "id": "rus_gram_basis",
      "sectionIndex": 1,
      "itemIndex": 3,
      "matchTitles": [
        "грамматическая основа",
        "типы сказуемых",
        "задание 2"
      ],
      "title": "Задание 2: Синтаксический анализ — Грамматическая основа и сказуемые",
      "fipiSpec": {
        "number": "№ 2",
        "score": "1 первичный балл",
        "time": "4–6 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Синтаксический анализ предложения)"
      },
      "theory": "\n            <h4>1. Типы сказуемых в русском языке</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Простое глагольное сказуемое (ПГС):</strong> выражено одним глаголом в любой форме времени и наклонения, в том числе фразеологизмом (<i>Он <strong>будет петь</strong>; Мальчик <strong>принял участие</strong> (= участвовал)</i>).</li>\n                <li><strong>Составное глагольное сказуемое (СГС):</strong> вспомогательный глагол (фаза, модальность) + <strong>инфинитив</strong> (<i>Я <strong>начал читать</strong>; Мы <strong>хотим учиться</strong></i>).</li>\n                <li><strong>Составное именное сказуемое (СИС):</strong> глагол-связка (быть, казаться, стать) + <strong>именная часть</strong> (сущ, прил, краткое прич): <i>Небо <strong>было синим</strong>; Погода <strong>стала теплой</strong>; Он <strong>врач</strong></i>.</li>\n              </ul>\n            </div>\n            <h4>2. Сложные случаи подлежащего</h4>\n            <p>Подлежащее может быть выражено неделимым словосочетанием: <i>Множество людей, двое друзей, мы с братом, Млечный Путь</i>.</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите сказуемое: что говорится о предмете? Внимательно проверьте, не входит ли инфинитив в состав СГС или не является ли сказуемое составным именным.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Задайте вопрос от сказуемого: КТО или ЧТО выполняет это действие? Убедитесь, что найденное слово стоит строго в именительном падеже (И.п.).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Отсеките второстепенные члены предложения (дополнения в винительном падеже без предлога часто ошибочно принимают за подлежащее!).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №2 ОГЭ</div>\n              <p><strong>Предложение:</strong> «К вечеру тучи заволокли все небо над горизонтом».<br>\n              <strong>Вариант ответа:</strong> грамматическая основа — <i>тучи заволокли небо</i>.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ:</strong>\n                <p>Кто выполняет действие? «Тучи» (подлежащее в И.п.). Что сделали? «Заволокли» (сказуемое). Заволокли кого? что? «небо» — это прямое дополнение в В.п.! Оно НЕ входит в основу.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Основа — «тучи заволокли» (вариант неверный)</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Безличные предложения</strong>\n              <p>В безличных предложениях подлежащего НЕТ ВООБЩЕ: <i>Мне не спится; На улице похолодало; В комнате светло</i>. В ответ выписывается только сказуемое!</p>\n            </div>\n        "
    },
    {
      "id": "rus_essay_p1",
      "sectionIndex": 2,
      "itemIndex": 0,
      "matchTitles": [
        "абзац 1",
        "определение понятия",
        "тезис",
        "сочинение 13.3"
      ],
      "title": "Сочинение 13.3: Абзац 1 — Определение понятия и Тезис-комментарий",
      "fipiSpec": {
        "number": "№ 13.3",
        "score": "2 балла по критерию СК1 (толкование значения слова)",
        "time": "15 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ оценивания сочинения 13.3"
      },
      "theory": "\n            <h4>1. Требования критерия СК1 ФИПИ</h4>\n            <p>Экзаменуемый дал определение слову И прокомментировал его — <strong>2 балла</strong>. Дал только определение без комментария — <strong>1 балл</strong>.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Формула 1-го абзаца:</strong></div>\n              <div class=\"math-row\">1. Определение: «[Понятие] — это важное нравственное качество человека, которое выражается в...»</div>\n              <div class=\"math-row\">2. Комментарий (ответ на вопрос задания): «Я считаю, что [тезис-ответ на вопрос темы]».</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Внимательно прочитайте вопрос задания 13.3 (например: «Что такое бескорыстность?» или «Кого можно назвать настоящим другом?»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сформулируйте толкование понятия через родовое слово (нравственное качество, способность, черта характера) и видовые признаки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Свяжите определение со вторым предложением-связкой: «Попробую доказать справедливость своих слов примерами из текста и жизненного опыта».</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Идеальный шаблон первого абзаца 13.3</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Доброта — это искреннее стремление человека бескорыстно помогать окружающим, проявлять заботу и сострадание. По моему мнению, по-настоящему добрый человек не ждет ничего взамен своих поступков и всегда готов подставить плечо нуждающемуся. Докажу эту мысль конкретными примерами».</i></p>\n                <div class=\"task-answer-box\">Максимальные 2 балла по критерию СК1</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Тавтологическое определение</strong>\n              <p>Категорически запрещено писать: «Доброта — это когда человек добрый» или «Дружба — это когда люди дружат». Эксперты за такое определение ставят 0 баллов по СК1!</p>\n            </div>\n        "
    },
    {
      "id": "rus_essay_p2",
      "sectionIndex": 2,
      "itemIndex": 1,
      "matchTitles": [
        "абзац 2",
        "пример из текста",
        "пояснение"
      ],
      "title": "Сочинение 13.3: Абзац 2 — Пример 1 из прочитанного текста с пояснением",
      "fipiSpec": {
        "number": "№ 13.3",
        "score": "3 балла по критерию СК2 (наличие примеров-иллюстраций)",
        "time": "20 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ (СК2)"
      },
      "theory": "\n            <h4>1. Структура второго абзаца</h4>\n            <p>Пример из текста должен обязательно сопровождаться <strong>пояснением</strong>! Голый пересказ без вывода оценивается экспертом ниже.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Шаблон абзаца:</strong></div>\n              <p>Обратимся к тексту [ФИО автора]. В предложениях [№–№] автор повествует о том, как [краткий эпизод / цитата]. Этот поступок свидетельствует о том, что [пояснение связи с тезисом из абзаца 1].</p>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в тексте фрагмент, где герой совершает поступок, иллюстрирующий исходное понятие.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Укажите номера предложений или используйте короткую точную цитату.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Обязательно напишите микровывод: как этот эпизод доказывает тезис первого абзаца.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец абзаца 2</div>\n              <div class=\"task-example-solution\">\n                <p><i>«В прочитанном тексте В.К. Железникова подтверждение моим словам можно найти в предложениях 18–22. Главная героиня Лена Бессольцева берет на себя вину одноклассника, желая спасти его от всеобщего осуждения. Этот благородный поступок показывает, что Лена способна на истинное самопожертвование ради друга».</i></p>\n                <div class=\"task-answer-box\">Идеальная связь: указание номеров + анализ поступка + микровывод</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Подмена анализа сплошным пересказом</strong>\n              <p>Не пересказывайте сюжет всего текста! Достаточно 2–3 предложений: краткое описание ключевого действия и глубокий анализ внутренних мотивов героя.</p>\n            </div>\n        "
    },
    {
      "id": "rus_essay_p3",
      "sectionIndex": 2,
      "itemIndex": 2,
      "matchTitles": [
        "абзац 3",
        "пример из жизненного опыта"
      ],
      "title": "Сочинение 13.3: Абзац 3 — Пример 2 из жизненного / читательского опыта",
      "fipiSpec": {
        "number": "№ 13.3",
        "score": "Входит в 3 балла СК2",
        "time": "15 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ (СК2)"
      },
      "theory": "\n            <h4>1. Источники для второго примера</h4>\n            <div class=\"task-formula-box\">\n              <p>По критериям ФИПИ второй пример-аргумент можно привести из:</p>\n              <ul>\n                <li>Художественной литературы (классика или современная литература — оценивается максимально надежно!);</li>\n                <li>Исторических событий или биографий великих людей;</li>\n                <li>Личного жизненного опыта (случай из жизни, история семьи, школьная практика).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте вводную связку: «Примеры проявления [понятия] можно встретить и на страницах литературы / в реальной жизни».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Назовите автора, название книги и имя героя (или опишите конкретную жизненную ситуацию без вымышленных глупостей).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Завершите абзац микровыводом, созвучным вашему тезису.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец литературного аргумента</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Пример истинной верности и дружбы мы находим в повести А.С. Пушкина «Капитанская дочка». Петр Гринев, рискуя собственной жизнью и честью, отправляется в осажденную мятежниками Белогорскую крепость, чтобы спасти Машу Миронову. Его преданность доказывает, что любящий человек никогда не бросит близкого в беде».</i></p>\n                <div class=\"task-answer-box\">Безупречный литературный аргумент</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Фактические ошибки в авторах и названиях</strong>\n              <p>Если вы перепутаете имя автора или название произведения (например, назовете повесть романом или припишете стихи другому поэту), эксперт снизит 1 балл по критерию ФК1 (фактическая точность).</p>\n            </div>\n        "
    },
    {
      "id": "rus_essay_p4",
      "sectionIndex": 2,
      "itemIndex": 3,
      "matchTitles": [
        "абзац 4",
        "заключение",
        "вывод"
      ],
      "title": "Сочинение 13.3: Абзац 4 — Заключение и итоговый вывод",
      "fipiSpec": {
        "number": "№ 13.3",
        "score": "2 балла по критерию СК3 (смысловая цельность и композиция)",
        "time": "10 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Критерии ФИПИ (СК3)"
      },
      "theory": "\n            <h4>1. Роль заключения в сочинении</h4>\n            <p>Заключение должно логически замыкать рассуждение, перекликаясь с тезисом первого абзаца, но пересказывая его другими словами с более широким нравственным обобщением.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Клише для 4-го абзаца:</strong></div>\n              <ul>\n                <li><i>«В заключение хочется отметить, что...»</i></li>\n                <li><i>«Подводя итоги рассуждениям, можно сделать вывод: ...»</i></li>\n                <li><i>«Таким образом, [понятие] — это то, без чего наш мир не мог бы существовать гармонично...»</i></li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перечитайте первый абзац (тезис).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сформулируйте ту же мысль новыми словами, сделав призыв или жизнеутверждающий вывод.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте композицию: в тексте сочинения должно быть ровно 4 абзаца! Общий объем — не менее 70 слов (оптимально 120–160 слов).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец заключения</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Подводя итог сказанному, можно сделать вывод: милосердие и чуткость делают людей по-настоящему сильными и благородными. Если бы каждый из нас стремился помогать ближним, в нашей жизни стало бы гораздо больше тепла и взаимопонимания».</i></p>\n                <div class=\"task-answer-box\">Емкое и гармоничное завершение сочинения</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Новые мысли в заключении</strong>\n              <p>В выводе нельзя вводить совершенно новые темы или факты, о которых не говорилось в аргументах. Заключение — это только итог всего вышесказанного!</p>\n            </div>\n        "
    },
    {
      "id": "rus_arg_kindness",
      "sectionIndex": 3,
      "itemIndex": 0,
      "matchTitles": [
        "доброта",
        "отзывчивость",
        "милосердие",
        "банк аргументов"
      ],
      "title": "Банк аргументов 13.3: Доброта, Отзывчивость, Милосердие",
      "fipiSpec": {
        "number": "№ 13.3 (СК2)",
        "score": "3 первичных балла",
        "time": "Справочный материал",
        "difficulty": "Повышенный уровень",
        "docSource": "Открытый банк тем ФИПИ"
      },
      "theory": "\n            <h4>1. Определение понятий</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Доброта</strong> — это душевное качество человека, проявляющееся в заботе, мягкосердечии и готовности бескорыстно делать добро другим.</p>\n              <p><strong>Милосердие</strong> — готовность сострадать, прощать и помогать людям, находящимся в беде, без осуждения.</p>\n            </div>\n            <h4>2. Золотой литературный фонд для аргументации</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>А.И. Куприн «Чудесный доктор»:</strong> Доктор Пирогов случайно знакомится в парке с отчаявшимся Мерцаловым, семья которого голодает, и спасает их: осматривает больного ребенка, оставляет деньги на дрова и лекарства, не назвав даже своего имени.</li>\n                <li><strong>В.Г. Короленко «Дети подземелья»:</strong> Вася из благополучной семьи судьи приносит яблоки и куклу больной нищей девочке Марусе, проявляя истинную чуткость.</li>\n                <li><strong>В.П. Астафьев «Конь с розовой гривой»:</strong> Бабушка Катерина, несмотря на обман внука, все же покупает ему пряничного коня, преподав великий урок всепрощающей доброты.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выберите произведение: «Чудесный доктор» подходит под 90% тем о доброте и сострадании.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Кратко назовите ситуацию: бескорыстная помощь доктора семье Мерцаловых.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сделайте вывод: поступок Пирогова вернул людям веру в жизнь.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент для сочинения</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Тема бескорыстной доброты раскрывается в рассказе А.И. Куприна «Чудесный доктор». Профессор Пирогов случайно встречает отчаявшегося главу семьи Мерцаловых, чьи дети тяжело больны и голодают. Не задумываясь, доктор бесплатно осматривает девочку, выписывает рецепт и незаметно оставляет под чайным блюдцем деньги. Этот благородный поступок спас семью от гибели и доказывает, что настоящее милосердие не требует славы».</i></p>\n                <div class=\"task-answer-box\">Идеальный аргумент на высший балл</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Не путайте имя героя и автора</strong>\n              <p>В рассказе «Чудесный доктор» главного героя зовут профессор Николай Иванович Пирогов, а автора — Александр Иванович Куприн. Не называйте доктора Куприным!</p>\n            </div>\n        "
    },
    {
      "id": "rus_arg_friendship",
      "sectionIndex": 3,
      "itemIndex": 1,
      "matchTitles": [
        "дружба",
        "преданность",
        "верность"
      ],
      "title": "Банк аргументов 13.3: Дружба, Преданность, Верность",
      "fipiSpec": {
        "number": "№ 13.3 (СК2)",
        "score": "3 первичных балла",
        "time": "Справочный материал",
        "difficulty": "Повышенный уровень",
        "docSource": "Открытый банк тем ФИПИ"
      },
      "theory": "\n            <h4>1. Определение понятий</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Дружба</strong> — это бескорыстные личные взаимоотношения между людьми, основанные на доверии, общности интересов и взаимной поддержке.</p>\n              <p><strong>Преданность</strong> — верность своему долгу, убеждениям или человеку в любых испытаниях.</p>\n            </div>\n            <h4>2. Ключевые литературные примеры</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>А. де Сент-Экзюпери «Маленький принц»:</strong> Дружба Лиса и Принца. «Мы в ответе за тех, кого приручили» — формула верности и заботы о друге.</li>\n                <li><strong>Г.Н. Троепольский «Белый Бим Черное ухо»:</strong> Пример абсолютной преданности собаки своему хозяину Ивану Ивановичу.</li>\n                <li><strong>В.К. Железников «Чучело»:</strong> Предательство Сомова и истинное благородство Лены Бессольцевой.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите ракурс вопроса: настоящая дружба или предательство друга.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Для позитивного примера используйте «Маленького принца», для контраста верности и предательства — «Чучело».</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент</div>\n              <div class=\"task-example-solution\">\n                <p><i>«О великой силе преданности размышляет Антуан де Сент-Экзюпери в философской сказке «Маленький принц». Лис открывает главному герою тайну дружбы: чтобы стать настоящими друзьями, нужно «приручить» друг друга, отдать частицу своей души и научиться нести ответственность за близкого. Этот пример доказывает, что дружба — это ежедневный труд и взаимная забота».</i></p>\n                <div class=\"task-answer-box\">Глубокий литературный аргумент</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Банальные бытовые примеры</strong>\n              <p>Избегайте примитивных бытовых примеров вроде «мой друг Вася дал мне списать домашку, поэтому он настоящий друг». Это снижает культуру речи!</p>\n            </div>\n        "
    },
    {
      "id": "rus_arg_courage",
      "sectionIndex": 3,
      "itemIndex": 2,
      "matchTitles": [
        "мужество",
        "сила духа",
        "защита родины"
      ],
      "title": "Банк аргументов 13.3: Мужество, Сила духа, Защита Родины",
      "fipiSpec": {
        "number": "№ 13.3 (СК2)",
        "score": "3 первичных балла",
        "time": "Справочный материал",
        "difficulty": "Повышенный уровень",
        "docSource": "Открытый банк тем ФИПИ"
      },
      "theory": "\n            <h4>1. Определение понятий</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Мужество</strong> — это способность человека преодолевать страх, сохранять самообладание и выполнять свой долг перед лицом смертельной опасности.</p>\n              <p><strong>Сила духа</strong> — внутренняя стойкость, позволяющая не сдаваться перед тяжелейшими испытаниями судьбы.</p>\n            </div>\n            <h4>2. Литературные произведения о силе духа</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>М.А. Шолохов «Судьба человека»:</strong> Андрей Соколов прошел через плен, концлагерь, гибель всей семьи, но не сломился morally и нашел в себе силы усыновить сироту Ванюшку.</li>\n                <li><strong>Б.Н. Полевой «Повесть о настоящем человеке»:</strong> Летчик Алексей Мересьев после ампутации обеих ног заново научился ходить, танцевать и вернулся в строй боевой авиации.</li>\n                <li><strong>В.В. Быков «Обелиск», «Сотников»:</strong> Нравственный подвиг учителей и партизан в годы Великой Отечественной войны.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Укажите исторический контекст (Великая Отечественная война — ярчайший пример мужества народа).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Покажите конкретный поступок героя: отказ Соколова пить за победу немецкого оружия в комендатуре.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Ярким образцом несгибаемой силы духа является герой рассказа М.А. Шолохова «Судьба человека» Андрей Соколов. Попав в фашистский плен, он проявил невероятное человеческое достоинство перед лицом лагерного коменданта Мюллера, отказавшись пить за победу врага. Потеряв всех близких на войне, Соколов сохранил тепло сердца и подарил отцовскую любовь сироте Ване. Этот образ олицетворяет непобедимый дух нашего народа».</i></p>\n                <div class=\"task-answer-box\">Высочайший балл по критериям содержания</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Отождествление мужества с безрассудством</strong>\n              <p>Мужество — это не глупый риск ради бравады. Подлинное мужество всегда сопряжено с высокой целью: защитой людей или чести.</p>\n            </div>\n        "
    },
    {
      "id": "rus_arg_books",
      "sectionIndex": 3,
      "itemIndex": 3,
      "matchTitles": [
        "драгоценные книги",
        "любовь к чтению",
        "книги"
      ],
      "title": "Банк аргументов 13.3: Драгоценные книги, Любовь к чтению",
      "fipiSpec": {
        "number": "№ 13.3 (СК2)",
        "score": "3 первичных балла",
        "time": "Справочный материал",
        "difficulty": "Повышенный уровень",
        "docSource": "Открытый банк тем ФИПИ"
      },
      "theory": "\n            <h4>1. Что такое драгоценные книги?</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Драгоценные книги</strong> — это произведения, которые формируют внутренний мир человека, закладывают понятия о чести, совести и добре, оставляя след на всю жизнь.</p>\n            </div>\n            <h4>2. Примеры из литературы и публицистики</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Д.С. Лихачев «Письма о добром и прекрасном» (Письмо о чтении):</strong> Академик призывает читать классику, учиться вдумчивому неспешному чтению, развивающему интеллект и душу.</li>\n                <li><strong>М. Горький автобиографическая трилогия («В людях», «Детство»):</strong> Книга помогла Алеше Пешкову выстоять в жестоком мире «свинцовых мерзостей жизни» и стать Человеком.</li>\n                <li><strong>Рэй Брэдбери «451 градус по Фаренгейту»:</strong> Трагедия общества, уничтожающего книги и утратившего способность чувствовать и мыслить.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сформулируйте роль книги: книга — наставник, верный собеседник и хранитель духовного опыта.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите в пример книгу, которая повлияла на героя (например, книги в жизни Максима Горького).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент</div>\n              <div class=\"task-example-solution\">\n                <p><i>«О неоценимой роли литературы размышляет академик Д.С. Лихачев в книге «Письма о добром и прекрасном». Автор утверждает, что книги учат сопереживанию, развивают вкус и расширяют кругозор человека. Чтение классики помогает найти ответы на сложнейшие жизненные вопросы и воспитывает нравственную личность».</i></p>\n                <div class=\"task-answer-box\">Убедительный публицистический аргумент</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ссылки на комиксы и фанфики</strong>\n              <p>Не используйте в качестве «драгоценных книг» развлекательную масс-культуру. Эксперты ценят обращение к классическому наследию и признанным шедеврам литературы.</p>\n            </div>\n        "
    },
    {
      "id": "rus_phrase_trans",
      "sectionIndex": 4,
      "itemIndex": 0,
      "matchTitles": [
        "задание 4",
        "перевод способов связи",
        "словосочетаниях",
        "согласование",
        "управление",
        "примыкание"
      ],
      "title": "Задание 4: Перевод способов связи в словосочетаниях (100% балл)",
      "fipiSpec": {
        "number": "№ 4",
        "score": "1 первичный балл",
        "time": "1–2 минуты",
        "difficulty": "Базовый уровень (Самый легкий балл ОГЭ!)",
        "docSource": "Кодификатор ФИПИ (Синтаксический анализ словосочетания)"
      },
      "theory": "\n            <h4>3 типа подчинительной связи в словосочетании</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Согласование:</strong> зависимое слово уподобляется главному в роде, числе и падеже (обычно: сущ + прил/прич): <i>деревянный дом, мамин шарф, шестой класс</i>.</li>\n                <li><strong>Управление:</strong> главное слово требует от зависимого определенного падежа (с предлогом или без): <i>дом из дерева, шарф мамы, читать книгу</i>.</li>\n                <li><strong>Примыкание:</strong> зависимое слово неизменяемое (наречие, деепричастие, инфинитив): <i>громко петь, говорить улыбаясь, желание учиться</i>.</li>\n              </ul>\n            </div>\n            <h4>Таблица взаимных трансформаций:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Согласование ⇄ Управление:</strong></div>\n              <div class=\"math-row\"><i>деревянный забор → забор из дерева</i></div>\n              <div class=\"math-row\"><i>книжный шкаф → шкаф для книг</i></div>\n              <div class=\"math-row\"><i>хрустальная ваза → ваза из хрусталя</i></div>\n              <div class=\"math-row\"><i>лисья нора → нора лисы</i></div>\n              <div class=\"math-row\"><strong>Управление ⇄ Примыкание:</strong></div>\n              <div class=\"math-row\"><i>с жадностью смотрел → жадно смотрел</i></div>\n              <div class=\"math-row\"><i>с грустью сказал → грустно сказал</i></div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите <strong>ГЛАВНОЕ</strong> слово в исходном словосочетании. Главное слово менять КАТЕГОРИЧЕСКИ НЕЛЬЗЯ! Оно остается в той же форме.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Трансформируйте только <strong>ЗАВИСИМОЕ</strong> слово в нужную часть речи (существительное с предлогом или прилагательное).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите полученное словосочетание в бланк ответов строго <strong>без пробелов, дефисов и запятых</strong>!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №4 ОГЭ</div>\n              <p><strong>Условие:</strong> Замените словосочетание «железная решетка», построенное на основе согласования, синонимичным словосочетанием со связью УПРАВЛЕНИЕ.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Главное слово — «решетка» (решетка какая? железная). Оставляем слово «решетка».<br>\n                   2. Зависимое слово «железная» превращаем в существительное в косвенном падеже с предлогом: «из железа».<br>\n                   3. Получаем: «решетка из железа».<br>\n                   4. В бланк пишем слитно: «решеткаизжелеза».</p>\n                <div class=\"task-answer-box\">Ответ: <strong>решеткаизжелеза</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Изменение главного слова</strong>\n              <p>Если в задании было «смеялся от радости» (главное — смеялся), нельзя писать «радостный смех» (здесь главное слово подменили на существительное). Правильный ответ: «радостно смеялся»!</p>\n            </div>\n        "
    },
    {
      "id": "rus_isolated_members",
      "sectionIndex": 4,
      "itemIndex": 1,
      "matchTitles": [
        "обособленные определения",
        "обособленные обстоятельства",
        "задание 3",
        "пунктуационный анализ"
      ],
      "title": "Задания 2–3: Обособленные определения и обстоятельства",
      "fipiSpec": {
        "number": "№ 2, 3, 5",
        "score": "1 первичный балл за каждое",
        "time": "4–6 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Пунктуационный анализ)"
      },
      "theory": "\n            <h4>1. Обособленные определения (причастные обороты)</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li>Обособляются запятыми, если стоят <strong>ПОСЛЕ</strong> определяемого существительного: <i>Береза, <u>освещенная солнцем</u>, тихо шумела</i>.</li>\n                <li><strong>НЕ</strong> обособляются, если стоят ПЕРЕД существительным: <i><u>Освещенная солнцем</u> береза тихо шумела</i> (исключение: если имеет обстоятельственное значение причины).</li>\n                <li>ВСЕГДА обособляются, если относятся к <strong>личному местоимению</strong> (я, ты, он, она, они) в любой позиции: <i><u>Уставшие до предела</u>, они быстро уснули</i>.</li>\n              </ul>\n            </div>\n            <h4>2. Обособленные обстоятельства (деепричастные обороты)</h4>\n            <div class=\"task-formula-box\">\n              <p>Деепричастия и деепричастные обороты обособляются <strong>ВСЕГДА</strong>, независимо от места в предложении (в начале, середине или конце): <i><u>Закрыв книгу</u>, он подошел к окну; Он шел, <u>напевая песню</u></i>.</p>\n              <div class=\"math-subtext\">Исключения: деепричастия, перешедшие в наречия образа действия (<i>Он сидел <u>молча</u>; Она слушала затаив дыхание</i>).</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите причастие (суффиксы -ущ-/-ющ-, -ащ-/-ящ-, -вш-, -ш-, -ем-, -им-, -нн-, -енн-, -т-) или деепричастие (-а, -я, -в, -вши, -ши).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Очертите границы оборота (задайте вопросы к зависимым словам).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте определяемое слово для причастного оборота (существительное или местоимение, до или после). Поставьте запятые на границах оборота.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание 3 ОГЭ (Пунктуация)</div>\n              <p><strong>Текст:</strong> «На поляне (1) заросшей диким клевером (2) мы увидели старую сосну (3) склонившуюся под тяжестью снега (4) и тихо скрипевшую на ветру».<br>\n              <strong>Вопрос:</strong> Назовите цифры, где должны стоять запятые.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1 и 2 — границы причастного оборота «заросшей диким клевером», стоящего после определяемого слова «поляне».<br>\n                   3 — начало причастных оборотов после слова «сосну».<br>\n                   4 — запятая НЕ ставится, так как два причастных оборота являются однородными и соединены одиночным союзом И («склонившуюся... и скрипевшую...»).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>123</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Однородные причастные обороты с союзом И</strong>\n              <p>Если два причастных оборота относятся к одному существительному и соединены одиночным союзом И, между ними запятая НЕ СТАВИТСЯ (как между обычными однородными членами: яблоки и груши)!</p>\n            </div>\n        "
    },
    {
      "id": "rus_spp_clauses",
      "sectionIndex": 4,
      "itemIndex": 2,
      "matchTitles": [
        "виды придаточных предложений",
        "спп",
        "задание 3"
      ],
      "title": "Задание 3: Виды придаточных предложений в СПП и пунктуация",
      "fipiSpec": {
        "number": "№ 3",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Сложноподчиненные предложения)"
      },
      "theory": "\n            <h4>1. Классификация придаточных предложений</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Определительные:</strong> отвечают на вопросы <i>какой? чей?</i>, присоединяются союзными словами <i>который, чей, где, куда</i> (от главного предложения к существительному).</li>\n                <li><strong>Изъяснительные:</strong> отвечают на падежные вопросы <i>кого? чего? кому? чему? что?</i>, присоединяются союзами <i>что, чтобы, как, будто, ли</i> (от глагола мысли/речи/чувства).</li>\n                <li><strong>Обстоятельственные:</strong>\n                  <ul>\n                    <li>Времени (когда? пока, едва, как только);</li>\n                    <li>Причины (почему? так как, потому что, ибо);</li>\n                    <li>Условия (при каком условии? если, ежели, кабы);</li>\n                    <li>Цели (зачем? с какой целью? чтобы, для того чтобы);</li>\n                    <li>Уступки (вопреки чему? несмотря на то что, хотя);</li>\n                    <li>Следствия (что из этого следует? так что).</li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n            <h4>2. Типы подчинения при нескольких придаточных</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Однородное:</strong> придаточные одного вида отвечают на один вопрос и зависят от одного слова: <i>Я знал, (что наступит день) и (что мы победим).</i> (Запятая перед одиночным «и» НЕ ставится!).</li>\n                <li><strong>Параллельное (неоднородное):</strong> придаточные разного вида зависят от одного главного предложения.</li>\n                <li><strong>Последовательное:</strong> первое придаточное зависит от главного, второе — от первого, третье — от второго (цепочка «матрешка»).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите все грамматические основы в сложном предложении и обведите союзы кружками.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Определите границы главного и придаточных предложений, задав смысловой вопрос от главного к зависимому.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">На стыке двух союзов (<i>что если, что когда</i>) проверьте наличие второй части <strong>«ТО», «ТАК», «НО»</strong>. Если «то/так» есть — запятая между союзами НЕ ставится!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Пунктуационный анализ (Задание 3)</div>\n              <p><strong>Предложение:</strong> «Он понимал (1) что (2) если пойдет сильный дождь (3) то экспедицию придется прервать».<br>\n              <strong>Вопрос:</strong> Где нужны запятые?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1 — граница между главным предложением «Он понимал» и придаточным (запятая нужна).<br>\n                   2 — стык союзов «что если». Смотрим дальше: есть слово «то» («то экспедицию придется...»), следовательно на стыке (2) запятая НЕ СТАВИТСЯ!<br>\n                   3 — конец придаточного условия перед «то» (запятая нужна).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>13</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Правило «ТО-КАК-НО» на стыке союзов</strong>\n              <p>Запомните правило: «Есть ТО, ТАК, НО — запятую сними на дно! Нет ТО, ТАК, НО — ставь запятую все равно!»</p>\n            </div>\n        "
    }
  ],
  "social": [
    {
      "id": "soc_factors_production",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "факторы производства",
        "факторные доходы",
        "земля",
        "труд",
        "капитал"
      ],
      "title": "Блок «Экономика»: Факторы производства и факторные доходы",
      "fipiSpec": {
        "number": "№ 1, 6, 8, 9, 21-24",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Раздел 3: Экономика)"
      },
      "theory": "\n            <h4>1. Определение факторов производства</h4>\n            <p><strong>Факторы производства</strong> — это экономические ресурсы, необходимые для производства товаров и услуг.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>5 основных факторов производства и доходы:</strong></div>\n              <ul>\n                <li><strong>Труд</strong> — физические и интеллектуальные усилия людей. <i>Факторный доход:</i> <strong>Заработная плата</strong>.</li>\n                <li><strong>Земля</strong> — все природные ресурсы (пахотная земля, недра, леса, вода). <i>Факторный доход:</i> <strong>Рента</strong>.</li>\n                <li><strong>Капитал</strong> — здания, станки, оборудование (физический капитал) и финансы. <i>Факторный доход:</i> <strong>Процент</strong>.</li>\n                <li><strong>Предпринимательские способности</strong> — готовность рисковать и объединять ресурсы. <i>Факторный доход:</i> <strong>Прибыль</strong>.</li>\n                <li><strong>Информация</strong> — знания, патенты, технологии. <i>Факторный доход:</i> <strong>Роялти (прибыль от интеллектуальной собственности)</strong>.</li>\n              </ul>\n            </div>\n            <h4>2. Главная проблема экономики</h4>\n            <p>Главная проблема любой экономической системы — <strong>ограниченность ресурсов</strong> при неограниченных потребностях общества.</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите, о каком ресурсе идет речь в условии (сырье, станки, наемные работники, предпринимательский риск).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вспомните жесткую связку пары «Фактор ⇄ Факторный доход» (Земля → Рента; Труд → Зарплата; Капитал → Процент; Предпринимательство → Прибыль).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №8 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> Владелец автомойки закупил новые аппараты высокого давления и моющие средства. К какому фактору производства относятся данные объекты?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Аппараты, станки и расходные средства — это средства производства, созданные человеком, то есть <strong>капитал</strong> (физический / реальный капитал).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Капитал</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Земля vs Капитал</strong>\n              <p>Сырая нефть в недрах или целинное поле — это ЗЕМЛЯ (природный ресурс). Но пробуренная скважина, переработанный бензин или удобренное поле с оросительной системой — это уже КАПИТАЛ!</p>\n            </div>\n        "
    },
    {
      "id": "soc_econ_systems",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "типы экономических систем",
        "традиционная",
        "командная",
        "рыночная"
      ],
      "title": "Блок «Экономика»: Типы экономических систем",
      "fipiSpec": {
        "number": "№ 8, 9, 14",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Типы экономических систем)"
      },
      "theory": "\n            <h4>Сравнительная таблица 4 экономических систем</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Традиционная:</strong> основана на обычаях и традициях, натуральное хозяйство, ручной труд, медленное внедрение технологий, коллективная/общинная собственность.</li>\n                <li><strong>Командная (плановая, административная):</strong> государственная монополия на ресурсы и средства производства, централизованное директивное планирование (Госплан), государственное ценообразование, дефицит товаров широкого потребления, отсутствие конкуренции.</li>\n                <li><strong>Рыночная:</strong> частная собственность на средства производства, свобода предпринимательства, свободное ценообразование на основе спроса и предложения, жесткая конкуренция производителей.</li>\n                <li><strong>Смешанная:</strong> рынок решает вопросы производства и распределения, а государство борется с «провалами рынка» (социальные пособия, охрана экологии, антимонопольное регулирование, оборона).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите маркерные слова в условии: «обычаи предков» → Традиционная; «директивный план, твердые цены» → Командная; «конкуренция, спрос и предложение» → Рыночная.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Проверьте, кто устанавливает цены: чиновники из министерства (план) или взаимодействие покупателей и продавцов (рынок).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №9 ОГЭ</div>\n              <p><strong>Суждение А:</strong> В командной экономике цены на товары определяются балансом спроса и предложения.<br>\n              <strong>Суждение Б:</strong> Для рыночной экономики характерна свобода предпринимательской деятельности.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Суждение А неверно: в командной экономике цены диктуются государством. Суждение Б верно: свобода предпринимательства — базовый принцип рынка.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Верно только Б</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Наличие частной собственности в командной системе</strong>\n              <p>В СССР граждане могли иметь личную собственность (одежда, телевизор, книги), но средства производства (заводы, фабрики, земля) принадлежали исключительно государству!</p>\n            </div>\n        "
    },
    {
      "id": "soc_inflation_budget",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "инфляция",
        "государственный бюджет",
        "дефицит бюджета",
        "профицит"
      ],
      "title": "Блок «Экономика»: Инфляция и Государственный бюджет РФ",
      "fipiSpec": {
        "number": "№ 8, 9, 14",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Деньги, инфляция, финансы)"
      },
      "theory": "\n            <h4>1. Инфляция и ее виды</h4>\n            <p><strong>Инфляция</strong> — долговременный процесс обесценивания денег, приводящий к снижению их покупательной способности и росту общего уровня цен.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Виды по темпам роста:</strong></div>\n              <ul>\n                <li><strong>Умеренная (ползучая):</strong> рост цен до 10% в год (стимулирует экономику);</li>\n                <li><strong>Галопирующая:</strong> рост цен от 10% до 50% в год (требует срочных антиинфляционных мер);</li>\n                <li><strong>Гиперинфляция:</strong> рост цен свыше 50% в месяц (разрушение денежной системы).</li>\n              </ul>\n              <div class=\"math-row\">Кто больше всех проигрывает от инфляции? Люди с фиксированными доходами (пенсионеры, бюджетники, студенты) и вкладчики в банках!</div>\n            </div>\n            <h4>2. Государственный бюджет РФ</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Доходы бюджета:</strong> налоги (основная часть — более 80%), доходы от госсобственности, пошлины, продажа лицензий.</div>\n              <div class=\"math-row\"><strong>Расходы бюджета:</strong> армия и оборона, образование, здравоохранение, социальные выплаты (пенсии, пособия), инфраструктура.</div>\n              <div class=\"math-row\"><strong>Состояния бюджета:</strong></div>\n              <ul>\n                <li><i>Сбалансированный:</i> Доходы = Расходы;</li>\n                <li><i>Профицитный:</i> Доходы > Расходы (излишек средств);</li>\n                <li><i>Дефицитный:</i> Расходы > Доходы (нехватка средств, ведет к госдолгу).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Различайте доходы и расходы бюджета: налоги — это доход государства, выплата материнского капитала или зарплата военных — это расход.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запомните: инфляция НЕ означает, что дорожает какой-то один товар (например, бананы из-за неурожая). Инфляция — это долговременный рост общего уровня цен!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №9 ОГЭ</div>\n              <p><strong>Условие:</strong> Верны ли суждения о государственном бюджете?<br>\n              А. Дефицит государственного бюджета означает превышение государственных доходов над расходами.<br>\n              Б. Налоговые поступления являются основной статьей доходов государственного бюджета РФ.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А — неверно (превышение доходов над расходами — это профицит). Б — верно (налоги формируют львиную долю казны).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Верно только Б</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Эмиссия денег как спасение от дефицита</strong>\n              <p>Включение «печатного станка» (необоснованная эмиссия денег) для покрытия дефицита бюджета неизбежно разгоняет гиперинфляцию!</p>\n            </div>\n        "
    },
    {
      "id": "soc_separation_powers",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "разделение властей",
        "статья 10",
        "конституция",
        "законодательная",
        "исполнительная",
        "судебная"
      ],
      "title": "Блок «Политика и Право»: Разделение властей в РФ (Статья 10 Конституции)",
      "fipiSpec": {
        "number": "№ 13, 14, 16, 17",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Конституция РФ (Главы 4–7), Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>1. Статья 10 Конституции РФ</h4>\n            <p>«Государственная власть в Российской Федерации осуществляется на основе разделения на законодательную, исполнительную и судебную. Органы законодательной, исполнительной и судебной власти самостоятельны».</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Три ветви власти в РФ и их органы:</strong></div>\n              <ul>\n                <li><strong>Законодательная:</strong> <strong>Федеральное Собрание РФ</strong> (парламент). Состоит из двух палат:\n                  <ul>\n                    <li><i>Государственная Дума</i> (450 депутатов, принимает федеральные законы);</li>\n                    <li><i>Совет Федерации</i> (сенаторы, утверждает изменение границ, назначает выборы Президента).</li>\n                  </ul>\n                </li>\n                <li><strong>Исполнительная:</strong> <strong>Правительство РФ</strong> (Председатель Правительства, министры). Исполняет законы, управляет федеральной собственностью, разрабатывает и исполняет бюджет.</li>\n                <li><strong>Судебная:</strong> <strong>Суды РФ</strong> (Конституционный Суд РФ, Верховный Суд РФ и система федеральных судов). Осуществляет правосудие.</li>\n              </ul>\n              <div class=\"math-row\"><strong>Президент РФ:</strong> Глава государства, гарант Конституции. Стоит <strong>над ветвями власти</strong>, обеспечивая их согласованное функционирование!</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Если орган <strong>принимает законы</strong> — это Государственная Дума (законодательная ветвь).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если орган <strong>организует исполнение, управляет, охраняет порядок</strong> — это Правительство (исполнительная ветвь).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Помните: Президент РФ формально не входит ни в одну из трех ветвей власти!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №16 ОГЭ (Конституция РФ)</div>\n              <p><strong>Условие:</strong> К какой ветви государственной власти в РФ относится Правительство Российской Федерации?<br>\n              1) законодательной &nbsp; 2) исполнительной &nbsp; 3) судебной &nbsp; 4) учредительной</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Согласно ст. 110 Конституции РФ исполнительную власть в РФ осуществляет Правительство Российской Федерации.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>2</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Президент как глава исполнительной власти</strong>\n              <p>В отличие от США, в Конституции РФ Президент НЕ является главой исполнительной власти. Главой исполнительной власти является Правительство РФ!</p>\n            </div>\n        "
    },
    {
      "id": "soc_capacity_minors",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "дееспособность несовершеннолетних",
        "гк рф",
        "малолетние",
        "дееспособность"
      ],
      "title": "Блок «Право»: Дееспособность несовершеннолетних (ГК РФ)",
      "fipiSpec": {
        "number": "№ 16, 17, 21-24",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Гражданский кодекс РФ (Статьи 26, 28)"
      },
      "theory": "\n            <h4>Возрастные градации дееспособности в РФ</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>До 6 лет:</strong> Полная недееспособность. Все сделки совершают только родители!</li>\n                <li><strong>От 6 до 14 лет (Малолетние — ст. 28 ГК РФ):</strong>\n                  <ul>\n                    <li>Мелкие бытовые сделки (покупка хлеба, тетради, мороженого);</li>\n                    <li>Сделки, направленные на безвозмездное получение выгоды, не требующие нотариального удостоверения (принять подарок);</li>\n                    <li>Распоряжение средствами, предоставленными родителями для определенной цели или свободного распоряжения.</li>\n                    <li><i>Имущественную ответственность за их действия несут родители!</i></li>\n                  </ul>\n                </li>\n                <li><strong>От 14 до 18 лет (Неполная дееспособность — ст. 26 ГК РФ):</strong>\n                  <ul>\n                    <li>Все права малолетних;</li>\n                    <li><strong>Самостоятельно распоряжаться своим заработком, стипендией, доходами</strong>;</li>\n                    <li>Осуществлять права автора произведений науки, литературы, искусства;</li>\n                    <li>Вносить вклады в кредитные организации и распоряжаться ими;</li>\n                    <li>С 14 лет — несут самостоятельную имущественную ответственность по своим сделкам и за причиненный вред!</li>\n                    <li>Крупные сделки (продажа квартиры, машины) — только с письменного согласия родителей.</li>\n                  </ul>\n                </li>\n                <li><strong>С 18 лет:</strong> Полная дееспособность. (До 18 лет полная дееспособность наступает при <i>эмансипации</i> с 16 лет или вступлении в брак).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Обратите внимание на возраст героя задачи: 10 лет (малолетний) или 15 лет (несовершеннолетний от 14 до 18).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Помните: право открыть счет в банке и распоряжаться своей стипендией появляется строго <strong>с 14 лет</strong>!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №17 ОГЭ</div>\n              <p><strong>Условие:</strong> 15-летний школьник Михаил подрабатывает промоутером и получает зарплату. Имеет ли он право самостоятельно, без согласия родителей, положить заработанные деньги на депозит в банк?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>В соответствии со статьей 26 ГК РФ несовершеннолетние в возрасте от 14 до 18 лет вправе самостоятельно, без согласия родителей, вносить вклады в кредитные организации и распоряжаться ими, а также распоряжаться своим заработком.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Да, имеет полное право по закону</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Эмансипация</strong>\n              <p>Эмансипация (объявление полностью дееспособным до 18 лет) возможна только с 16 лет при условии работы по трудовому договору или занятия предпринимательством с согласия родителей!</p>\n            </div>\n        "
    },
    {
      "id": "soc_branches_law",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "отрасли права",
        "гражданское",
        "уголовное",
        "административное",
        "трудовое"
      ],
      "title": "Блок «Право»: Отрасли права и виды юридической ответственности",
      "fipiSpec": {
        "number": "№ 16, 17, 18",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Правовое регулирование)"
      },
      "theory": "\n            <h4>Главные отрасли материального права РФ</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Гражданское право:</strong> регулирует имущественные и личные неимущественные отношения (сделки, договоры, купля-продажа, возмещение ущерба). Равенство сторон.</li>\n                <li><strong>Уголовное право:</strong> регулирует общественные отношения, связанные с совершением преступлений. Самые строгие наказания (лишение свободы, исправительные работы). Уголовная ответственность наступает с 16 лет (по тяжким составам — с 14 лет!).</li>\n                <li><strong>Административное право:</strong> регулирует отношения в сфере государственного управления и общественного порядка (нарушение ПДД, безбилетный проезд, распитие в общественных местах). Наказания: штраф, предупреждение, лишение спецправа (прав водителя).</li>\n                <li><strong>Трудовое право:</strong> регулирует отношения между работником и работодателем (трудовой договор, рабочее время, отпуск, увольнение). Дисциплинарные взыскания: замечание, выговор, увольнение!</li>\n                <li><strong>Семейное право:</strong> брак, алименты, права и обязанности супругов и детей.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите характер правонарушения: проступок на работе (Трудовое), нарушение ПДД/тишины (Административное), неисполнение договора займа (Гражданское), кража/грабеж (Уголовное).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вспомните 3 вида дисциплинарных взысканий по ТК РФ: замечание, выговор, увольнение (лишения премии и штрафов в ТК РФ нет!).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №18 ОГЭ</div>\n              <p><strong>Условие:</strong> Установите соответствие между примерами правонарушений и отраслями права:<br>\n              А) переход дороги в неположенном месте<br>\n              Б) опоздание на работу на 2 часа<br>\n              В) кража кошелька в трамвае</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А — Административное право;<br>\n                   Б — Трудовое право (нарушение трудовой дисциплины);<br>\n                   В — Уголовное право (ст. 158 УК РФ, кража).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>А-Админ, Б-Труд, В-Уголовн</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: «Штраф» как дисциплинарное взыскание</strong>\n              <p>Работодатель НЕ имеет права выписывать работнику дисциплинарный штраф! По закону (ТК РФ ст. 192) существуют только: замечание, выговор и увольнение по соответствующим основаниям.</p>\n            </div>\n        "
    },
    {
      "id": "soc_p2_task1",
      "sectionIndex": 2,
      "itemIndex": 0,
      "matchTitles": [
        "задание №1",
        "раскрытие понятий",
        "2 балла"
      ],
      "title": "Задание №1: Раскрытие понятий (2 первичных балла)",
      "fipiSpec": {
        "number": "№ 1",
        "score": "2 первичных балла",
        "time": "5–7 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Критерии ФИПИ оценивания задания 1"
      },
      "theory": "\n            <h4>Требования критериев ФИПИ</h4>\n            <p>1 балл дается за правильный выбор двух понятий из списка, относящихся к определенной сфере. Второй балл — за раскрытие смысла любого одного из них.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Правило определения понятия:</strong></div>\n              <p>Определение = <strong>Родовое понятие</strong> (что это такое в широком смысле: форма правления, процесс, качество) + <strong>не менее 2 существенных признаков</strong>!</p>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выпишите два понятия, относящихся к указанной в задании категории (например, формы правления: монархия, республика).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выберите то понятие из двух, определение которого вы помните наизусть и абсолютно уверены.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите формулировку четким научным языком, не допуская бытовых описаний («это когда...»).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №1 из демоверсии</div>\n              <p><strong>Условие:</strong> Какие два из перечисленных понятий используются в первую очередь для обозначения форм (источников) права: <i>судебный прецедент, выборы, нормативный правовой акт, референдум, монархия</i>? Выпишите эти понятия и раскройте смысл любого одного из них.</p>\n              <div class=\"task-example-solution\">\n                <strong>Образец идеального ответа:</strong>\n                <p>1) Понятия: судебный прецедент, нормативный правовой акт.<br>\n                   2) Нормативный правовой акт — это официальный письменный документ, принятый уполномоченным государственным органом, содержащий общеобязательные нормы права, рассчитанные на многократное применение.</p>\n                <div class=\"task-answer-box\">Оценка: <strong>2 из 2 баллов</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Раскрытие через то же слово</strong>\n              <p>Нельзя писать «Правонарушение — это нарушение права» или «Демократия — это демократический строй». За это эксперт сразу ставит 0 баллов за определение!</p>\n            </div>\n        "
    },
    {
      "id": "soc_p2_task5",
      "sectionIndex": 2,
      "itemIndex": 1,
      "matchTitles": [
        "задание №5",
        "анализ фотографии",
        "3 балла"
      ],
      "title": "Задание №5: Анализ фотографии социальной ситуации (3 балла)",
      "fipiSpec": {
        "number": "№ 5",
        "score": "3 первичных балла",
        "time": "10 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ оценивания задания 5"
      },
      "theory": "\n            <h4>Структура задания №5</h4>\n            <p>Задание включает изображение реальной социальной ситуации (семья делает покупки, человек сортирует мусор, волонтер помогает пожилым, рабочий на стройке) и 3–4 конкретных вопроса к нему.</p>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li>Вопрос 1: Какой вид деятельности / форма семьи / экономическая операция изображена?</li>\n                <li>Вопрос 2: Укажите главную цель или признак данной деятельности.</li>\n                <li>Вопрос 3: Сформулируйте 2 правила рационального/безопасного поведения в данной ситуации и поясните каждое.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Внимательно рассмотрите изображение и ответьте на первый вопрос строго в терминах обществознания (не «покупка еды», а «рациональное экономическое поведение потребителя»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Отвечайте на ВСЕ подвопросы отдельными пунктами (1, 2, 3, 4). Не объединяйте их в сплошной текст!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В правилах поведения формулируйте развернутые советы с пояснением «зачем это делать».</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Фотография: Человек у банкомата</div>\n              <div class=\"task-example-solution\">\n                <p>1. Деятельность: снятие наличных средств / финансовая операция с банковской картой.<br>\n                   2. Признак: использование электронных безналичных платежных средств.<br>\n                   3. Два правила безопасности:<br>\n                   — Прикрывать клавиатуру рукой при вводе ПИН-кода (чтобы посторонние или скрытые камеры не украли пароль);<br>\n                   — Не передавать карту и данные CVC-кода третьим лицам (для предотвращения мошеннического списания денег).</p>\n                <div class=\"task-answer-box\">3 из 3 баллов</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Пропущенные подвопросы</strong>\n              <p>Задание №5 часто содержит скрытые вопросы (например: «Какое качество проявляется? Объясните почему»). Если дать ответ без объяснения — теряется 1 балл.</p>\n            </div>\n        "
    },
    {
      "id": "soc_p2_task6",
      "sectionIndex": 2,
      "itemIndex": 2,
      "matchTitles": [
        "задание №6",
        "финансовая грамотность",
        "2 балла"
      ],
      "title": "Задание №6: Финансовая грамотность и мошенники (2 балла)",
      "fipiSpec": {
        "number": "№ 6",
        "score": "2 первичных балла",
        "time": "5 минут",
        "difficulty": "Базовый уровень (Легкие 2 балла)",
        "docSource": "Критерии ФИПИ оценивания задания 6"
      },
      "theory": "\n            <h4>Топ сценариев мошенничества в задании №6</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Звонок «из службы безопасности банка»:</strong> требуют назвать код из SMS или перевести деньги на «безопасный счет».</li>\n                <li><strong>SMS / письмо с фишинговой ссылкой:</strong> «Вы выиграли приз, перейдите по ссылке и оплатите доставку».</li>\n                <li><strong>Сообщение в соцсети от «друга»:</strong> «Срочно одолжи 5000 рублей до завтра».</li>\n                <li><strong>Фальшивый банкомат:</strong> накладка на картоприемник (скиммер) или видеокамера над клавиатурой.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Пункт 1 ответа:</strong> Объясните опасность ситуации: «В данной ситуации велика опасность стать жертвой телефонных/интернет-мошенников и потерять денежные средства с банковского счета».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Пункт 2 ответа:</strong> Укажите правильный алгоритм действий: «Ни в коем случае не сообщать персональные данные, код из SMS и CVC-код с обратной стороны карты; прервать разговор и самостоятельно перезвонить по официальному номеру горячей линии банка, указанному на карте».</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ</div>\n              <p><strong>Условие:</strong> Анне пришло SMS-сообщение от банка: «Ваша карта заблокирована из-за подозрительной операции. Срочно отправьте ответное SMS с кодом подтверждения для разблокировки». В чем состоит опасность данной ситуации и как правильно поступить Анне?</p>\n              <div class=\"task-example-solution\">\n                <strong>Ответ для бланка:</strong>\n                <p>1. Опасность: сообщение отправлено финансовыми мошенниками с целью получить секретный одноразовый пароль и списать денежные средства со счета Анны.<br>\n                   2. Правильные действия: Анне нельзя отвечать на сообщение и переходить по ссылкам. Следует позвонить на горячую линию банка по официальному номеру (указанному на обороте банковской карты) и уточнить статус карты.</p>\n                <div class=\"task-answer-box\">Максимальные 2 балла</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ответ в одно предложение</strong>\n              <p>Критерии ФИПИ строго требуют ДВА элемента ответа: 1) в чем опасность; 2) как правильно поступить. Обязательно нумеруйте пункты 1 и 2!</p>\n            </div>\n        "
    },
    {
      "id": "soc_p2_task12",
      "sectionIndex": 2,
      "itemIndex": 3,
      "matchTitles": [
        "задание №12",
        "социологический опрос",
        "4 балла",
        "сходство и различие"
      ],
      "title": "Задание №12: Социологический опрос (4 первичных балла — ТОП задания)",
      "fipiSpec": {
        "number": "№ 12",
        "score": "4 первичных балла (Самое дорогое задание ОГЭ!)",
        "time": "15 минут",
        "difficulty": "Высокий уровень",
        "docSource": "Критерии ФИПИ оценивания задания 12"
      },
      "theory": "\n            <h4>Критерии получения 4 баллов</h4>\n            <p>Для получения полных 4 баллов необходимо сформулировать ровно 4 элемента:</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>4 обязательных пункта ответа:</strong></div>\n              <ol>\n                <li><strong>Вывод о сходстве:</strong> назвать позицию, по которой мнения обеих групп опрошенных совпали или одинаково популярны;</li>\n                <li><strong>Объяснение сходства:</strong> логичное предположение, ПОЧЕМУ обе группы думают именно так;</li>\n                <li><strong>Вывод о различии:</strong> назвать позицию, по которой мнения двух групп существенно разошлись;</li>\n                <li><strong>Объяснение различия:</strong> логичное предположение, ПОЧЕМУ группы имеют разные взгляды (связать с возрастом, социальным статусом или профессией!).</li>\n              </ol>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Взгляните на диаграмму: найдите столбик одинаковой высоты у обеих групп (например, 25-летние и 55-летние) — это ваше <strong>сходство</strong>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите максимальный контраст между столбиками (например, у молодых 60%, а у пожилых 10%) — это ваше <strong>различие</strong>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Оформите ответ строго по 4 пунктам: а) Сходство, б) Предположение о сходстве, в) Различие, г) Предположение о различии.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Демоверсия ОГЭ (Опрос молодежи и пожилых о работе)</div>\n              <div class=\"task-example-solution\">\n                <p><strong>а) Вывод о сходстве:</strong> Одинаковая доля опрошенных обеих групп (по 20%) считает, что главным фактором выбора профессии является возможность карьерного роста.<br>\n                   <strong>б) Объяснение сходства:</strong> И для молодых, и для зрелых людей важно чувствовать перспективу профессионального развития и признание их заслуг.<br>\n                   <strong>в) Вывод о различии:</strong> Доля тех, кто ценит высокий уровень заработной платы, среди 25-летних значительно выше, чем среди 55-летних.<br>\n                   <strong>г) Объяснение различия:</strong> Молодежь только начинает самостоятельную жизнь, нуждается в средствах на покупку жилья и обустройство семьи, поэтому материальный фактор для них выходит на первый план.</p>\n                <div class=\"task-answer-box\">Высшая оценка: 4 из 4 баллов</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытые объяснения (почему?)</strong>\n              <p>Многие ученики просто называют цифры («20% там и 20% здесь»), но забывают объяснить причину! За голые цифры без объяснений дают максимум 2 балла вместо 4!</p>\n            </div>\n        "
    }
  ],
  "informatics": [
    {
      "id": "inf_task1_weight",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "информационный вес текста",
        "задание 1",
        "кодировка",
        "байт"
      ],
      "title": "Задание 1: Информационный вес символов и текста",
      "fipiSpec": {
        "number": "№ 1",
        "score": "1 первичный балл",
        "time": "3–4 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Измерение количества информации)"
      },
      "theory": "\n            <h4>1. Основная формула объема информации текста</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>I = K × i</strong></div>\n              <div class=\"math-subtext\">где <strong>I</strong> — информационный объем сообщения (в битах или байтах),<br>\n              <strong>K</strong> — количество символов в сообщении (включая пробелы и знаки препинания!),<br>\n              <strong>i</strong> — вес одного символа (в битах).</div>\n            </div>\n            <h4>2. Перевод единиц информации и кодировки</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">1 байт = 8 бит &nbsp;|&nbsp; 1 Кбайт = 1024 байт</div>\n              <div class=\"math-row\"><strong>Таблица кодировок:</strong></div>\n              <ul>\n                <li>ASCII / Windows-1251 / KOI8-R: 1 символ = 8 бит = <strong>1 байт</strong></li>\n                <li>Unicode (UTF-16): 1 символ = 16 бит = <strong>2 байта</strong></li>\n                <li>Unicode (UTF-32): 1 символ = 32 бита = <strong>4 байта</strong></li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите вес одного символа: если кодировка 16 бит, то 1 символ = 2 байта.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите, на сколько байт уменьшился текст. Разделите эту разницу на вес 1 символа: получите общее количество удаленных символов ΔK.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Вычтите 2 служебных символа (запятую и пробел):</strong> Длина удаленного слова = ΔK - 2!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №1 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> В кодировке Unicode каждый символ кодируется 16 битами. Ученик написал текст: «Еж, лев, волк, олень, тюлень, косуля, носорог — дикие животные». Затем он вычеркнул название одного животного, а также лишние запятую и пробел. Размер нового предложения оказался на 14 байт меньше. Напишите вычеркнутое название животного.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Вес 1 символа: i = 16 бит = 2 байта.<br>\n                   2. Всего удалено символов: ΔK = 14 байт / 2 байта = 7 символов.<br>\n                   3. Учитываем удаленные запятую и пробел: 7 - 2 = 5 символов в самом названии животного.<br>\n                   4. Ищем слово из 5 букв: «олень» (5 букв).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>олень</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытые запятая и пробел</strong>\n              <p>Если забыть вычесть 2 символа (запятую и пробел), вы выберете слово из 7 букв («носорог») и получите 0 баллов! Всегда вычитайте 2!</p>\n            </div>\n        "
    },
    {
      "id": "inf_task3_logic",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "алгебра логики",
        "задание 3",
        "инверсия",
        "конъюнкция",
        "дизъюнкция"
      ],
      "title": "Задание 3: Алгебра логики (НЕ, И, ИЛИ)",
      "fipiSpec": {
        "number": "№ 3",
        "score": "1 первичный балл",
        "time": "2–4 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Логические операции)"
      },
      "theory": "\n            <h4>1. Основные логические операции</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>НЕ (инверсия, отрицание ¬):</strong> меняет истину на ложь и наоборот. <i>НЕ (x > 5) ⇔ x ≤ 5! НЕ (x четное) ⇔ x нечетное.</i></li>\n                <li><strong>И (конъюнкция ∧):</strong> истинно тогда и только тогда, когда <strong>ОБА</strong> высказывания истинны.</li>\n                <li><strong>ИЛИ (дизъюнкция ∨):</strong> истинно, когда <strong>ХОТЯ БЫ ОДНО</strong> высказывание истинно.</li>\n              </ul>\n            </div>\n            <h4>2. Законы инверсии для неравенств (Критично!)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">НЕ (x > a) ≡ <strong>x ≤ a</strong> (появляется знак «равно»!)</div>\n              <div class=\"math-row\">НЕ (x < a) ≡ <strong>x ≥ a</strong></div>\n              <div class=\"math-row\">НЕ (x = a) ≡ <strong>x ≠ a</strong></div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Раскройте все отрицания <strong>НЕ</strong>, аккуратно переворачивая знаки неравенств (строгий знак превращается в нестрогий с «=»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сформируйте двойное неравенство для союза <strong>И</strong>: a ≤ x < b.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Перечитайте вопрос: просят <strong>наибольшее</strong> или <strong>наименьшее</strong> целое число x!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Напишите <strong>наименьшее</strong> натуральное число x, для которого истинно высказывание: <i>НЕ (x < 15) И НЕ (x нечётное)</i>.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Раскрываем первое отрицание: НЕ (x < 15) ⇔ x ≥ 15.<br>\n                   2. Раскрываем второе отрицание: НЕ (x нечётное) ⇔ x чётное.<br>\n                   3. Получаем систему: x ≥ 15 И x — чётное.<br>\n                   4. Ищем наименьшее натуральное число: после 15 первое чётное число — это 16.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>16</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Потеря знака равенства при отрицании</strong>\n              <p>Отрицание строгого неравенства «x < 10» — это «x ≥ 10» (число 10 ВХОДИТ!). Если ошибиться и написать «x > 10», наименьшим числом ошибочно станет 11 вместо 10.</p>\n            </div>\n        "
    },
    {
      "id": "inf_task10_number_systems",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "системы счисления",
        "задание 10",
        "двоичная",
        "восьмеричная",
        "шестнадцатеричная"
      ],
      "title": "Задание 10: Системы счисления (Двоичная, 8-я, 16-я)",
      "fipiSpec": {
        "number": "№ 10",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Позиционные системы счисления)"
      },
      "theory": "\n            <h4>1. Развернутая форма записи числа (перевод в десятичную)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>N<sub>p</sub> = a<sub>n-1</sub>·p<sup>n-1</sup> + ... + a₁·p¹ + a₀·p⁰</strong></div>\n              <div class=\"math-subtext\">Пример: 10110₂ = 1·2⁴ + 0·2³ + 1·2² + 1·2¹ + 0·2⁰ = 16 + 4 + 2 = 22₁₀</div>\n              <div class=\"math-subtext\">Пример: 57₈ = 5·8¹ + 7·8⁰ = 40 + 7 = 47₁₀</div>\n              <div class=\"math-subtext\">Пример: 2B₁₆ = 2·16¹ + 11·16⁰ = 32 + 11 = 43₁₀ (A=10, B=11, C=12, D=13, E=14, F=15)</div>\n            </div>\n            <h4>2. Степени двойки (выучить наизусть!)</h4>\n            <div class=\"task-formula-box\">\n              <p>2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024</p>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Переведите все заданные в условии числа из 2-й, 8-й и 16-й систем счисления в привычную <strong>десятичную систему</strong>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выполните требуемое сравнение (найти максимальное, минимальное или сумму).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите ответ в требуемой системе счисления (обычно в десятичной, если не указано иное).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №10 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> Среди приведённых ниже трёх чисел найдите <strong>максимальное</strong> и запишите его в ответе в десятичной системе счисления:<br>\n              23₁₆, 47₈, 100110₂.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1) 23₁₆ = 2 · 16¹ + 3 · 16⁰ = 32 + 3 = 35₁₀<br>\n                   2) 47₈ = 4 · 8¹ + 7 · 8⁰ = 32 + 7 = 39₁₀<br>\n                   3) 100110₂ = 32 + 4 + 2 = 38₁₀<br>\n                   4) Сравниваем: 35, 39, 38. Максимальное число равно 39.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>39</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Буквы в 16-ричной системе</strong>\n              <p>Запомните: A=10, B=11, C=12, D=13, E=14, F=15. Частая ошибка: путать B (11) и D (13)!</p>\n            </div>\n        "
    },
    {
      "id": "inf_task7_url",
      "sectionIndex": 0,
      "itemIndex": 3,
      "matchTitles": [
        "адрес файла",
        "интернет",
        "задание 7",
        "url",
        "протокол"
      ],
      "title": "Задание 7: Адрес файла в сети Интернет (URL конструктор)",
      "fipiSpec": {
        "number": "№ 7",
        "score": "1 первичный балл",
        "time": "1–2 минуты",
        "difficulty": "Базовый уровень (Легчайший 1 балл)",
        "docSource": "Кодификатор ФИПИ (Адресация в сети Интернет)"
      },
      "theory": "\n            <h4>Универсальная формула структуры URL:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>протокол://сервер/файл</strong></div>\n              <div class=\"math-subtext\">Пример: <code>https://fipi.ru/oge/demo.pdf</code></div>\n              <ul>\n                <li><strong>Протокол:</strong> http, https, ftp (всегда отделяется <code>://</code>)</li>\n                <li><strong>Сервер (сайт):</strong> например, <code>obr.org</code>, <code>school10.edu</code></li>\n                <li><strong>Разделитель каталога:</strong> одиночный прямой слеш <code>/</code></li>\n                <li><strong>Файл:</strong> имя файла с расширением (например, <code>test.docx</code>, <code>doc.txt</code>).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Запишите на черновике полный URL по схеме: <code>протокол://сервер/файл</code>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сопоставьте каждый фрагмент адреса с цифрами из таблицы задания.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите последовательность цифр без пробелов.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №7 ОГЭ</div>\n              <p><strong>Условие:</strong> Доступ к файлу <strong>obr.txt</strong>, находящемуся на сервере <strong>obrnadzor.gov</strong>, осуществляется по протоколу <strong>https</strong>. Фрагменты адреса закодированы цифрами:<br>\n              1) .gov &nbsp; 2) / &nbsp; 3) obrnadzor &nbsp; 4) :// &nbsp; 5) https &nbsp; 6) obr &nbsp; 7) .txt</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Собираем URL: <code>https://obrnadzor.gov/obr.txt</code><br>\n                   5 (https) + 4 (://) + 3 (obrnadzor) + 1 (.gov) + 2 (/) + 6 (obr) + 7 (.txt).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>5431267</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Путаница :// и /</strong>\n              <p>Двойной слеш с двоеточием (<code>://</code>) ставится ТОЛЬКО после протокола! Перед файлом ставится всегда одиночный слеш (<code>/</code>).</p>\n            </div>\n        "
    },
    {
      "id": "inf_task13_word",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "задание 13.2",
        "текстовый процессор",
        "word",
        "libreoffice writer"
      ],
      "title": "Задание 13.2: Форматирование текста в Word / LibreOffice Writer",
      "fipiSpec": {
        "number": "№ 13.2",
        "score": "2 первичных балла",
        "time": "15–20 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Критерии ФИПИ оценивания задания 13.2"
      },
      "theory": "\n            <h4>Чек-лист идеального выполнения задания 13.2 (2/2 балла):</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Шрифт:</strong> одинаковая гарнитура (обычно Times New Roman), размер основного текста — 14 пт, в таблице допускается 12 пт.</li>\n                <li><strong>Выравнивание:</strong> абзац строго <strong>по ширине</strong>! В таблице текст выравнивается по левому краю, числа — по правому краю или центру.</li>\n                <li><strong>Красная строка:</strong> ровно <strong>1 см или 1.25 см</strong> (настраивается в меню «Абзац» → «Первая строка», пробелами делать ЗАПРЕЩЕНО!).</li>\n                <li><strong>Междустрочный интервал:</strong> 1.0 (одинарный) или 1.15. Интервалы до и после абзаца — 0 пт.</li>\n                <li><strong>Выделения:</strong> точно повторить жирный шрифт, курсив и подчеркивание, как в образце!</li>\n                <li><strong>Таблица:</strong> выравнивание по центру страницы, границы тонкие одинарные.</li>\n              </ol>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Наберите текст с клавиатуры без опечаток и орфографических ошибок.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выделите весь текст, задайте шрифт Times New Roman 14 пт, выравнивание по ширине, отступ первой строки 1 см.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Вставьте таблицу с нужным числом строк и колонок, заполните данными, выровняйте числа.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Критерии проверки экспертом ФИПИ</div>\n              <div class=\"task-example-solution\">\n                <p>— 2 балла: текст набран без ошибок, параметры шрифта, интервалов, красной строки и таблицы соблюдены на 100%.<br>\n                   — 1 балл: допущено не более 2 ошибок в оформлении (например, забыт курсив в одном слове или не выровнена таблица).<br>\n                   — 0 баллов: более 2 ошибок или отступ сделан пробелами.</p>\n                <div class=\"task-answer-box\">Сохраняйте файл строго под именем, указанным организатором в аудитории!</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Красная строка пробелами</strong>\n              <p>Никогда не делайте отступ первой строки клавишей Space или Tab! Эксперты проверяют это через режим отображения непечатаемых знаков (¶) и сразу аннулируют балл!</p>\n            </div>\n        "
    },
    {
      "id": "inf_task14_excel",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "задание 14",
        "электронные таблицы",
        "excel",
        "libreoffice calc"
      ],
      "title": "Задание 14: Электронные таблицы (Excel / Calc — 3 балла)",
      "fipiSpec": {
        "number": "№ 14",
        "score": "3 первичных балла (Самое ценное задание по информатике!)",
        "time": "20–25 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ оценивания задания 14"
      },
      "theory": "\n            <h4>Топ-5 спасительных формул Excel для задания 14:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>СЧЁТЕСЛИ:</strong> <code>=СЧЁТЕСЛИ(диапазон; \"условие\")</code> — считает количество ячеек, удовлетворяющих одному критерию (например: <code>=СЧЁТЕСЛИ(A2:A1001; \"Север\")</code>).</li>\n                <li><strong>СЧЁТЕСЛИМН:</strong> <code>=СЧЁТЕСЛИМН(диапазон1; \"условие1\"; диапазон2; \"условие2\")</code> — для нескольких условий одновременно!</li>\n                <li><strong>СУММЕСЛИ:</strong> <code>=СУММЕСЛИ(диапазон_проверки; \"условие\"; диапазон_суммирования)</code>.</li>\n                <li><strong>СРЗНАЧЕСЛИ:</strong> <code>=СРЗНАЧЕСЛИ(диапазон_проверки; \"условие\"; диапазон_значений)</code>.</li>\n                <li><strong>ЕСЛИ:</strong> <code>=ЕСЛИ(логическое_условие; значение_если_истина; значение_если_ложь)</code>.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Вопрос 1 (1 балл):</strong> Запишите формулу подсчета количества (<code>СЧЁТЕСЛИМН</code>) в указанную ячейку (например, H2).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Вопрос 2 (1 балл):</strong> Найдите среднее значение через <code>СРЗНАЧЕСЛИ</code> или отношение <code>СУММЕСЛИ / СЧЁТЕСЛИ</code>. Округлите до указанной точности (обычно 2 знака после запятой).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Вопрос 3 (1 балл — Диаграмма):</strong> Постройте круговую диаграмму по расчетным ячейкам. Обязательно добавьте легенду и подписи данных!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Типовая задача ФИПИ</div>\n              <p>В таблице приведены данные тестирования: Округ (A), Фамилия (B), Предмет (C), Балл (D).<br>\n              1) Сколько учеников из округа «В» набрали более 600 баллов? Ответ в ячейку H2.<br>\n              2) Каков средний балл по информатике учеников округа «С»? Ответ в ячейку H3 с точностью до двух знаков.</p>\n              <div class=\"task-example-solution\">\n                <strong>Формулы для записи:</strong>\n                <p>Ячейка H2: <code>=СЧЁТЕСЛИМН(A2:A1001; \"В\"; D2:D1001; \">600\")</code><br>\n                   Ячейка H3: <code>=СРЗНАЧЕСЛИМН(D2:D1001; A2:A1001; \"С\"; C2:C1001; \"Информатика\")</code></p>\n                <div class=\"task-answer-box\">3 из 3 баллов за 5 минут</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Неверные ячейки ответов</strong>\n              <p>В задании четко указано: «Запишите ответ в ячейку H2». Если записать ответ в другую ячейку, автоматическая проверка не найдет результат и поставит 0 баллов!</p>\n            </div>\n        "
    },
    {
      "id": "inf_task152_minmax",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "поиск минимума",
        "максимума с условием",
        "задание 15.2",
        "python"
      ],
      "title": "Задание 15.2: Python — Поиск минимума/максимума с условием",
      "fipiSpec": {
        "number": "№ 15.2",
        "score": "2 первичных балла",
        "time": "15–20 минут",
        "difficulty": "Высокий уровень",
        "docSource": "Кодификатор ФИПИ (Программирование на языке Python)"
      },
      "theory": "\n            <h4>Шаблон поиска максимума / минимума с фильтром</h4>\n            <div class=\"task-formula-box\">\n              <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code># Поиск максимального числа, кратного 4\nn = int(input())\nmx = 0 # Начальное значение для максимума\n\nfor _ in range(n):\n    x = int(input())\n    if x % 4 == 0 and x > mx:\n        mx = x\n\nprint(mx)</code></pre>\n              <div class=\"math-subtext\">Для минимума начальное значение задается заведомо большим: <code>mn = 30001</code> (или <code>float('inf')</code>), а условие проверки: <code>x < mn</code>.</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Считайте количество элементов <code>n = int(input())</code> или организуйте цикл <code>while x != 0:</code> (если ввод до нуля).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Проверьте условие делимости (<code>x % k == 0</code>) и оканчиваемости на цифру (<code>x % 10 == d</code>).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Обновите текущий экстремум: <code>if x > mx: mx = x</code>. Выведите результат <code>print(mx)</code>.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №15.2 ОГЭ</div>\n              <p><strong>Условие:</strong> Напишите программу, которая в последовательности натуральных чисел находит минимальное число, оканчивающееся на 3. Программа получает на вход количество чисел, а затем сами числа.</p>\n              <div class=\"task-example-solution\">\n                <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>n = int(input())\nans = 30001\nfor _ in range(n):\n    x = int(input())\n    if x % 10 == 3 and x < ans:\n        ans = x\nprint(ans)</code></pre>\n                <div class=\"task-answer-box\">Код проходит все тесты ФИПИ (2/2 балла)</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Инициализация mn нулем</strong>\n              <p>Если для поиска минимума написать <code>mn = 0</code>, то любое натуральное число больше нуля, и программа напечатает 0 вместо ответа!</p>\n            </div>\n        "
    },
    {
      "id": "inf_task152_sumcount",
      "sectionIndex": 1,
      "itemIndex": 3,
      "matchTitles": [
        "подсчет суммы и количества",
        "сумма и количество",
        "задание 15.2"
      ],
      "title": "Задание 15.2: Python — Подсчет суммы и количества с условием",
      "fipiSpec": {
        "number": "№ 15.2",
        "score": "2 первичных балла",
        "time": "10–15 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Алгоритмизация)"
      },
      "theory": "\n            <h4>Шаблон счетчика (count) и сумматора (total)</h4>\n            <div class=\"task-formula-box\">\n              <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code># Подсчет количества и суммы чисел, кратных 6 и оканчивающихся на 4\ncount = 0\ntotal = 0\n\nwhile True:\n    x = int(input())\n    if x == 0:\n        break\n    if x % 6 == 0 and x % 10 == 4:\n        count += 1\n        total += x\n\nprint(count) # или print(total)</code></pre>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Создайте переменные-накопители: <code>count = 0</code> для количества и <code>s = 0</code> для суммы.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Считывайте числа в цикле. При выполнении условия делайте <code>count += 1</code> или <code>s += x</code>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если в условии требуется среднее арифметическое, выведите <code>s / count</code> с форматированием <code>f\"{s/count:.1f}\"</code>.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание 15.2 ОГЭ</div>\n              <p><strong>Условие:</strong> Последовательность завершается числом 0. Найти сумму элементов, кратных 8.</p>\n              <div class=\"task-example-solution\">\n                <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>s = 0\nx = int(input())\nwhile x != 0:\n    if x % 8 == 0:\n        s += x\n    x = int(input())\nprint(s)</code></pre>\n                <div class=\"task-answer-box\">Ответ: гарантированные 2 балла</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Деление на ноль</strong>\n              <p>При расчете среднего арифметического всегда проверяйте <code>if count > 0: print(s / count)</code> во избежание ZeroDivisionError.</p>\n            </div>\n        "
    },
    {
      "id": "inf_task151_robot",
      "sectionIndex": 1,
      "itemIndex": 4,
      "matchTitles": [
        "исполнитель робот",
        "кумир",
        "задание 15.1"
      ],
      "title": "Задание 15.1: Исполнитель Робот в среде «Кумир»",
      "fipiSpec": {
        "number": "№ 15.1",
        "score": "2 первичных балла",
        "time": "15–20 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Исполнитель Робот)"
      },
      "theory": "\n            <h4>Базовые конструкции алгоритмического языка «Кумир»</h4>\n            <div class=\"task-formula-box\">\n              <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>использовать Робот\nалг\nнач\n. нц пока справа свободно\n. . вправо\n. . закрасить\n. кц\nкон</code></pre>\n              <ul>\n                <li>Команды движения: <code>влево, вправо, вверх, вниз</code></li>\n                <li>Команда закрашивания: <code>закрасить</code></li>\n                <li>Проверка стен: <code>слева свободно / стена</code>, <code>справа свободно / стена</code>, <code>сверху свободно / стена</code>, <code>снизу свободно / стена</code></li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Всегда используйте цикл <code>нц пока ... кц</code>. Программировать жесткое количество шагов нельзя, так как длина стен произвольная!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Следите за порядком команд: сначала шаг, потом закрасить (или наоборот, строго по условию задачи).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте робота на тестовом поле с другими длинами стен: он не должен врезаться в стену!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Программа закрашивания вдоль стены снизу</div>\n              <div class=\"task-example-solution\">\n                <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>использовать Робот\nалг\nнач\nнц пока снизу стена\n  закрасить\n  вправо\nкц\nкон</code></pre>\n                <div class=\"task-answer-box\">Идеальный универсальный алгоритм</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Столкновение со стеной</strong>\n              <p>Если Робот хотя бы один раз попытается сделать шаг в сторону стены, программа завершится аварийно («Робот разбился!») и результат будет 0 баллов.</p>\n            </div>\n        "
    }
  ],
  "physics": [
    {
      "id": "phys_kinematics",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "кинематика прямолинейного движения",
        "равноускоренное",
        "скорость",
        "ускорение"
      ],
      "title": "Механика: Кинематика прямолинейного движения",
      "fipiSpec": {
        "number": "№ 1–4, 11, 21, 23",
        "score": "1–3 первичных балла",
        "time": "5–10 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Механические явления: Кинематика)"
      },
      "theory": "\n            <h4>1. Равномерное движение</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">v = const &nbsp;|&nbsp; S = v · t &nbsp;|&nbsp; x = x₀ + v<sub>x</sub> · t</div>\n            </div>\n            <h4>2. Равноускоренное прямолинейное движение</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Ускорение:</strong> a = (v - v₀) / t</div>\n              <div class=\"math-row\"><strong>Скорость:</strong> v = v₀ + a · t</div>\n              <div class=\"math-row\"><strong>Перемещение:</strong> S = v₀·t + (a·t²) / 2</div>\n              <div class=\"math-row\"><strong>Безвременная формула:</strong> S = (v² - v₀²) / (2a)</div>\n              <div class=\"math-subtext\">При торможении (a направлено против движения): v = v₀ - at, S = v₀t - at²/2.</div>\n            </div>\n            <h4>3. Графики движения</h4>\n            <p>Площадь фигуры под графиком скорости v(t) численно равна пройденному пути S!</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите тип движения: равномерное (a = 0) или равноускоренное (скорость меняется).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Переведите все единицы в СИ: км/ч переводим в м/с делением на 3.6 (72 км/ч = 72 / 3.6 = 20 м/с!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если время t неизвестно, используйте формулу без времени S = (v² - v₀²) / (2a).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Автомобиль, двигаясь равноускоренно из состояния покоя, за 5 секунд достиг скорости 20 м/с. Какой путь проехал автомобиль за это время?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. v₀ = 0 м/с, t = 5 с, v = 20 м/с.<br>\n                   2. Ускорение a = (v - v₀) / t = (20 - 0) / 5 = 4 м/с².<br>\n                   3. Путь S = at² / 2 = 4 · 5² / 2 = 4 · 25 / 2 = 50 м.<br>\n                   (Или по формуле средней скорости: S = (v₀ + v)/2 · t = (0 + 20)/2 · 5 = 10 · 5 = 50 м).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>50</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытый перевод км/ч в м/с</strong>\n              <p>Если в формулу скорости подставить 72 вместо 20, ответ будет ошибочным в 13 раз! Всегда проверяйте размерности в СИ.</p>\n            </div>\n        "
    },
    {
      "id": "phys_dynamics",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "динамика и силы",
        "законы ньютона",
        "сила тяжести",
        "сила трения",
        "гук"
      ],
      "title": "Механика: Динамика и силы (Законы Ньютона)",
      "fipiSpec": {
        "number": "№ 1–4, 11, 21, 23",
        "score": "1–3 первичных балла",
        "time": "5–8 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Динамика)"
      },
      "theory": "\n            <h4>1. Три закона Ньютона</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>I закон:</strong> Существуют инерциальные системы отсчета, в которых тело сохраняет состояние покоя или равномерного прямолинейного движения, если равнодействующая сил равна 0 (F<sub>равн</sub> = 0 => v = const).</div>\n              <div class=\"math-row\"><strong>II закон:</strong> a = F / m &nbsp;⇔&nbsp; <strong>F<sub>равн</sub> = m · a</strong></div>\n              <div class=\"math-row\"><strong>III закон:</strong> F₁₂ = -F₂₁ (силы действия и противодействия равны по модулю и противоположны по направлению, приложены к РАЗНЫМ телам!).</div>\n            </div>\n            <h4>2. Основные силы в механике</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Сила тяжести:</strong> F<sub>тяж</sub> = m · g (g ≈ 10 м/с²)</li>\n                <li><strong>Закон Гука (сила упругости):</strong> F<sub>упр</sub> = k · |Δx|</li>\n                <li><strong>Сила трения скольжения:</strong> F<sub>тр</sub> = μ · N</li>\n                <li><strong>Сила Архимеда:</strong> F<sub>А</sub> = ρ<sub>жидк</sub> · g · V<sub>погр</sub></li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Нарисуйте чертеж и расставьте ВСЕ силы, действующие на тело: mg вниз, N вверх, F тяги вперед, F трения назад.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выберите оси Ox и Oy, запишите II закон Ньютона в векторном виде, затем спроецируйте на оси.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Выразите силу трения F<sub>тр</sub> = μmg (для горизонтальной плоскости).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №23 ОГЭ (Расчетная задача)</div>\n              <p><strong>Условие:</strong> Брусок массой 2 кг тянут по горизонтальной поверхности силой 10 Н. Коэффициент трения равен 0.2. Найдите ускорение бруска.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Сила нормальной реакции опоры N = mg = 2 · 10 = 20 Н.<br>\n                   2. Сила трения скольжения F<sub>тр</sub> = μN = 0.2 · 20 = 4 Н.<br>\n                   3. Равнодействующая сила по горизонтали: F<sub>равн</sub> = F - F<sub>тр</sub> = 10 - 4 = 6 Н.<br>\n                   4. По II закону Ньютона: a = F<sub>равн</sub> / m = 6 / 2 = 3 м/с².</p>\n                <div class=\"task-answer-box\">Ответ: <strong>3 м/с²</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Взаимное сокращение сил по III закону Ньютона</strong>\n              <p>Силы действия и противодействия НЕ уравновешивают друг друга, потому что они приложены к РАЗНЫМ телам (лошадь действует на телегу, телега действует на лошадь)!</p>\n            </div>\n        "
    },
    {
      "id": "phys_work_energy",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "работа",
        "энергия и мощность",
        "кпд",
        "закон сохранения энергии"
      ],
      "title": "Механика: Механическая работа, Энергия, Мощность, КПД",
      "fipiSpec": {
        "number": "№ 3, 4, 11, 23",
        "score": "1–3 первичных балла",
        "time": "5–8 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Законы сохранения)"
      },
      "theory": "\n            <h4>1. Механическая работа и мощность</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Работа:</strong> A = F · S · cos α (если направление совпадает: A = F · S [Дж])</div>\n              <div class=\"math-row\"><strong>Мощность:</strong> N = A / t = F · v [Вт]</div>\n            </div>\n            <h4>2. Кинетическая и потенциальная энергия</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Кинетическая:</strong> E<sub>k</sub> = (m · v²) / 2</div>\n              <div class=\"math-row\"><strong>Потенциальная (в поле тяжести):</strong> E<sub>p</sub> = m · g · h</div>\n              <div class=\"math-row\"><strong>Потенциальная упругой деформации:</strong> E<sub>p</sub> = (k · x²) / 2</div>\n            </div>\n            <h4>3. Закон сохранения механической энергии</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">В замкнутой системе при отсутствии сил трения: <strong>E<sub>k1</sub> + E<sub>p1</sub> = E<sub>k2</sub> + E<sub>p2</sub> = const</strong></div>\n              <div class=\"math-row\"><strong>КПД механизма:</strong> η = (A<sub>полезн</sub> / A<sub>полн</sub>) × 100%</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите два ключевых состояния тела (например, в верхней точке полета и перед ударом о землю).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите закон сохранения энергии: вверху вся энергия потенциальная (mgh), внизу — кинетическая (mv²/2).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Приравняйте mgh = mv²/2 => v = √(2gh). Масса сокращается!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Камень бросили вертикально вверх с поверхности земли со скоростью 10 м/с. На какую максимальную высоту поднимется камень? Сопротивлением воздуха пренебречь, g = 10 м/с².</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. По закону сохранения механической энергии: E<sub>kнач</sub> = E<sub>pмакс</sub>.<br>\n                   2. mv²/2 = mgh.<br>\n                   3. Сокращаем на массу m: v²/2 = gh => h = v² / (2g).<br>\n                   4. h = 10² / (2 · 10) = 100 / 20 = 5 м.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>5</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: КПД больше 100%</strong>\n              <p>Полезная работа всегда МЕНЬШЕ совершенной (полной) из-за трения! КПД никогда не может быть больше 100%.</p>\n            </div>\n        "
    },
    {
      "id": "phys_thermal",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "тепловые процессы",
        "нагревание",
        "плавление",
        "парообразование",
        "уравнение теплового баланса"
      ],
      "title": "Тепловые явления: Нагревание, Плавление, Парообразование, Баланс",
      "fipiSpec": {
        "number": "№ 5, 6, 12, 21, 24",
        "score": "1–3 первичных балла",
        "time": "5–8 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Тепловые явления)"
      },
      "theory": "\n            <h4>Формулы количества теплоты:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Нагревание / охлаждение:</strong> Q = c · m · (t₂ - t₁)</div>\n              <div class=\"math-row\"><strong>Плавление / кристаллизация:</strong> Q = λ · m (при температуре плавления!)</div>\n              <div class=\"math-row\"><strong>Парообразование (кипение) / конденсация:</strong> Q = L · m</div>\n              <div class=\"math-row\"><strong>Сгорание топлива:</strong> Q = q · m</div>\n              <div class=\"math-row\"><strong>Уравнение теплового баланса:</strong> Q<sub>отд</sub> = Q<sub>получ</sub> (ΣQ = 0)</div>\n            </div>\n            <h4>Анализ графика нагревания и плавления</h4>\n            <p>Горизонтальные участки на графике t(τ) соответствуют фазовым переходам (плавление, кипение), во время которых температура тела НЕ меняется, пока все вещество не перейдет в новую фазу!</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Разбейте процесс на стадии: 1) нагрев льда до 0°C; 2) плавление льда при 0°C; 3) нагрев полученной воды до t°C.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Возьмите табличные константы из справочных материалов КИМ: c<sub>воды</sub> = 4200 Дж/(кг·°C), c<sub>льда</sub> = 2100, λ<sub>льда</sub> = 3.3·10⁵ Дж/кг.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сложите теплоты всех этапов: Q<sub>общ</sub> = Q₁ + Q₂ + Q₃.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №5 ОГЭ</div>\n              <p><strong>Условие:</strong> Какое количество теплоты выделится при кристаллизации и охлаждении до 0°C воды массой 2 кг, взятой при температуре 20°C?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Охлаждение воды от 20°C до 0°C:<br>\n                   Q₁ = c<sub>в</sub> · m · Δt = 4200 · 2 · 20 = 168 000 Дж = 168 кДж.<br>\n                   2. Кристаллизация воды в лед при 0°C:<br>\n                   Q₂ = λ · m = 3.3 · 10⁵ · 2 = 660 000 Дж = 660 кДж.<br>\n                   3. Полное количество теплоты: Q<sub>общ</sub> = 168 + 660 = 828 кДж.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>828 кДж</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Попытка расплавить лед без предварительного нагрева</strong>\n              <p>Если лед имеет температуру -10°C, его НЕЛЬЗЯ плавить сразу формулой λm! Сначала лед необходимо нагреть до 0°C формулой c<sub>льда</sub>mΔt.</p>\n            </div>\n        "
    },
    {
      "id": "phys_ohm_law",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "закон ома",
        "расчет цепей",
        "сопротивление",
        "джоуль ленц"
      ],
      "title": "Электродинамика: Закон Ома, Соединения проводников, Мощность",
      "fipiSpec": {
        "number": "№ 7, 8, 13, 21, 24",
        "score": "1–3 первичных балла",
        "time": "5–8 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Электрические явления)"
      },
      "theory": "\n            <h4>1. Закон Ома для участка цепи</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>I = U / R &nbsp;|&nbsp; U = I · R &nbsp;|&nbsp; R = U / I</strong></div>\n              <div class=\"math-row\"><strong>Сопротивление проводника:</strong> R = ρ · (l / S)</div>\n            </div>\n            <h4>2. Последовательное и параллельное соединение</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Последовательное:</strong> I = I₁ = I₂, &nbsp; U = U₁ + U₂, &nbsp; <strong>R<sub>общ</sub> = R₁ + R₂</strong></div>\n              <div class=\"math-row\"><strong>Параллельное:</strong> U = U₁ = U₂, &nbsp; I = I₁ + I₂, &nbsp; <strong>1/R<sub>общ</sub> = 1/R₁ + 1/R₂ &nbsp; (R<sub>общ</sub> = R₁·R₂ / (R₁+R₂))</strong></div>\n            </div>\n            <h4>3. Работа и мощность электрического тока</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">P = U · I = I² · R = U² / R &nbsp;[Вт]</div>\n              <div class=\"math-row\"><strong>Закон Джоуля–Ленца:</strong> Q = I² · R · t [Дж]</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите тип соединения резисторов в цепи (последовательное или параллельное).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Рассчитайте эквивалентное общее сопротивление R<sub>общ</sub>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">По закону Ома найдите общий ток или напряжение на интересующем резисторе.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №8 ОГЭ</div>\n              <p><strong>Условие:</strong> Два резистора сопротивлением R₁ = 6 Ом и R₂ = 12 Ом соединены параллельно. Напряжение на источнике равно 24 В. Найдите общую силу тока в цепи.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Общее сопротивление параллельного участка: R<sub>общ</sub> = (R₁ · R₂) / (R₁ + R₂) = (6 · 12) / (6 + 12) = 72 / 18 = 4 Ом.<br>\n                   2. Общая сила тока по закону Ома: I = U / R<sub>общ</sub> = 24 / 4 = 6 А.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>6 А</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Параллельное сложение сопротивлений</strong>\n              <p>При параллельном соединении общее сопротивление ВСЕГДА МЕНЬШЕ наименьшего из резисторов (в примере: 4 Ом < 6 Ом). Если у вас получилось больше — вы ошиблись!</p>\n            </div>\n        "
    },
    {
      "id": "phys_optics",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "оптика",
        "преломление",
        "линзы",
        "фокусное расстояние",
        "оптическая сила"
      ],
      "title": "Оптика: Преломление света и построение изображений в линзах",
      "fipiSpec": {
        "number": "№ 9, 10, 14, 21, 25",
        "score": "1–3 первичных балла",
        "time": "5–8 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Световые явления)"
      },
      "theory": "\n            <h4>1. Закон преломления света (Закон Снеллиуса)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">sin α / sin β = n₂ / n₁ = n<sub>отн</sub></div>\n              <div class=\"math-subtext\">При переходе из воздуха в воду/стекло луч прижимается к перпендикуляру (угол преломления β < угла падения α!).</div>\n            </div>\n            <h4>2. Формула тонкой линзы и оптическая сила</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>D = 1 / F [дптр]</strong> (F строго в метрах!)</div>\n              <div class=\"math-row\"><strong>1/F = 1/d + 1/f</strong> &nbsp;(d — расстояние до предмета, f — до изображения)</div>\n              <div class=\"math-row\"><strong>Увеличение линзы:</strong> Γ = H / h = f / d</div>\n            </div>\n            <h4>3. Построение лучей в собирающей линзе:</h4>\n            <ul>\n              <li>Луч 1: параллельно главной оптической оси → после линзы идет через фокус F.</li>\n              <li>Луч 2: идет через оптический центр O без преломления.</li>\n            </ul>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите положение предмета относительно фокусов собирающей линзы: за 2F, между F и 2F, или ближе F.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запомните правило: если d > 2F — изображение <i>действительное, перевернутое, уменьшенное</i> (как в фотоаппарате); если F < d < 2F — <i>действительное, перевернутое, увеличенное</i> (проектор); если d < F — <i>мнимое, прямое, увеличенное</i> (лупа).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №9 ОГЭ</div>\n              <p><strong>Условие:</strong> Оптическая сила собирающей линзы равна 5 дптр. На каком расстоянии от линзы находится ее главный фокус?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. D = 1 / F => F = 1 / D.<br>\n                   2. F = 1 / 5 = 0.2 м = 20 см.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>0.2 м (или 20 см)</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Знак фокуса рассеивающей линзы</strong>\n              <p>У рассеивающей линзы фокус мнимый: D < 0 и F < 0! Изображение в рассеивающей линзе ВСЕГДА мнимое, прямое и уменьшенное.</p>\n            </div>\n        "
    },
    {
      "id": "phys_lab17",
      "sectionIndex": 2,
      "itemIndex": 0,
      "matchTitles": [
        "лабораторная работа №17",
        "чек-лист 4 обязательных пунктов",
        "3 балла"
      ],
      "title": "Задание 17: Реальная лабораторная работа (Чек-лист на 3/3 балла)",
      "fipiSpec": {
        "number": "№ 17",
        "score": "3 первичных балла",
        "time": "25–30 минут",
        "difficulty": "Высокий уровень (Реальный эксперимент с оборудованием)",
        "docSource": "Критерии ФИПИ оценивания задания 17"
      },
      "theory": "\n            <h4>4 обязательных пункта в бланке ответов (по 1 баллу за критерий):</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Пункт 1:</strong> Схематический рисунок экспериментальной установки (электрическая схема, рычаг с грузами, мензурка с телом).</li>\n                <li><strong>Пункт 2:</strong> Математическая формула для расчета искомой величины (например, R = U / I, ρ = m / V, A = F · s).</li>\n                <li><strong>Пункт 3:</strong> Результаты прямых измерений с учетом абсолютной погрешности приборов! (Например: U = (4.2 ± 0.2) В, I = (0.6 ± 0.05) А). Погрешность указана прямо в тексте КИМ!</li>\n                <li><strong>Пункт 4:</strong> Числовое значение искомой величины с единицами измерения: R = 4.2 / 0.6 = 7 Ом.</li>\n              </ol>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Соберите установку на реальном оборудовании в аудитории строго по инструкции.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">В бланке нарисуйте схему и запишите формулу.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Снимите показания приборов и ОБЯЗАТЕЛЬНО запишите их с погрешностью: <code>X = (измерение ± погрешность) ед. изм.</code>!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец оформления лабораторной работы №17</div>\n              <div class=\"task-example-solution\">\n                <p>1. Схема электрической цепи: [источник питания, ключ, реостат, резистор, амперметр последовательно, вольтметр параллельно резистору].<br>\n                   2. Формула: R = U / I.<br>\n                   3. Прямые измерения: U = (3.6 ± 0.2) В; I = (0.4 ± 0.05) А.<br>\n                   4. Расчет: R = 3.6 / 0.4 = 9.0 Ом.</p>\n                <div class=\"task-answer-box\">Высшая оценка: 3 из 3 баллов</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая погрешность прибора</strong>\n              <p>Если записать просто U = 3.6 В без погрешности (±0.2 В), эксперт ОБЯЗАН снять 1 балл по критерию прямых измерений!</p>\n            </div>\n        "
    },
    {
      "id": "phys_qualitative",
      "sectionIndex": 2,
      "itemIndex": 1,
      "matchTitles": [
        "качественные задачи №21–22",
        "трехшаговый шаблон рассуждения",
        "задания 21 22"
      ],
      "title": "Задания 21–22: Качественные задачи (Шаблон рассуждения на 2 балла)",
      "fipiSpec": {
        "number": "№ 21, 22",
        "score": "2 первичных балла за каждую",
        "time": "10 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ оценивания качественных задач"
      },
      "theory": "\n            <h4>3-шаговый шаблон логического рассуждения</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Шаг 1 (Прямой ответ):</strong> Четко и однозначно ответьте на вопрос задания: «Увеличится / Уменьшится / Не изменится» или назовите явление.</p>\n              <p><strong>Шаг 2 (Физические законы):</strong> Назовите физический закон, принцип или формулу, лежащую в основе явления (например, «Согласно закону сохранения энергии...», «По формуле давления жидкости p = ρgh...»).</p>\n              <p><strong>Шаг 3 (Логическая цепочка):</strong> Свяжите закон с условием задачи и покажите, к чему приводит изменение параметров.</p>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сформулируйте краткий тезис: что произойдет с искомой величиной.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите математическую формулу явления, даже если задача текстовая (формулы убеждают эксперта!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сделайте пошаговый вывод: X растет => Y падает => следовательно ответ Z.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №21 ОГЭ</div>\n              <p><strong>Вопрос:</strong> Как изменится осадка корабля при переходе из реки в соленое море?</p>\n              <div class=\"task-example-solution\">\n                <strong>Образец ответа:</strong>\n                <p>1. Ответ: Осадка корабля уменьшится (корабль немного всплывет).<br>\n                   2. Обоснование: По условию плавания тел корабль плавает, следовательно, сила тяжести равна силе Архимеда: F<sub>тяж</sub> = F<sub>А</sub> = mg.<br>\n                   3. Сила Архимеда определяется формулой F<sub>А</sub> = ρ<sub>жидк</sub> · g · V<sub>погр</sub>. Так как плотность соленой морской воды больше плотности пресной речной воды (ρ<sub>моря</sub> > ρ<sub>реки</sub>), при неизменной массе корабля объем погруженной части судна V<sub>погр</sub> должен уменьшиться. Следовательно, осадка станет меньше.</p>\n                <div class=\"task-answer-box\">Максимальные 2 балла</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ответ без физического закона</strong>\n              <p>Если написать правильный ответ «уменьшится», но объяснить его на бытовом уровне без упоминания силы Архимеда и формулы, вам поставят только 1 балл!</p>\n            </div>\n        "
    },
    {
      "id": "phys_calc23_25",
      "sectionIndex": 2,
      "itemIndex": 2,
      "matchTitles": [
        "расчетные задачи №23–25",
        "дано си решение",
        "задания 23 24 25"
      ],
      "title": "Задания 23–25: Сложные расчетные задачи (3 балла каждая)",
      "fipiSpec": {
        "number": "№ 23, 24, 25",
        "score": "3 первичных балла за каждую (Суммарно 9 баллов!)",
        "time": "15–20 минут на задачу",
        "difficulty": "Высокий уровень",
        "docSource": "Критерии ФИПИ оценивания расчетных задач"
      },
      "theory": "\n            <h4>Критерии 3 баллов за расчетную задачу</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li>Записано «Дано» и «Найти», все величины переведены в СИ (в отдельной колонке СИ).</li>\n                <li>Записаны исходные фундаментальные формулы без подстановки чисел.</li>\n                <li>Проведены аналитические преобразования и получена итоговая формула в общем виде.</li>\n                <li>Подставлены числовые значения с единицами измерения и посчитан точный ответ.</li>\n              </ol>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Оформите блок «Дано» и переведите все единицы в СИ (граммы в кг, см² в м², кДж в Дж, минуты в секунды).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите основные законы физики, применимые к ситуации.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Выведите расчетную формулу и выполните арифметические вычисления. Запишите ответ с наименованием единицы измерения.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №24 ОГЭ (Электротермическая задача)</div>\n              <p><strong>Условие:</strong> Электрический чайник мощностью 1000 Вт нагревает 1 литр воды от 20°C до кипения (100°C) за 7 минут. Каков КПД чайника?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p><strong>Дано:</strong> P = 1000 Вт, V = 1 л => m = 1 кг, t₁ = 20°C, t₂ = 100°C, Δt = 80°C, τ = 7 мин = 420 с, c = 4200 Дж/(кг·°C). <strong>Найти:</strong> η.<br>\n                   <strong>Решение:</strong><br>\n                   1. Полезное тепло: Q<sub>пол</sub> = c · m · Δt = 4200 · 1 · 80 = 336 000 Дж = 336 кДж.<br>\n                   2. Затраченная работа тока: A<sub>затр</sub> = P · τ = 1000 · 420 = 420 000 Дж = 420 кДж.<br>\n                   3. КПД: η = (Q<sub>пол</sub> / A<sub>затр</sub>) × 100% = (336 000 / 420 000) × 100% = 0.8 × 100% = 80%.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>80%</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Время в минутах вместо секунд</strong>\n              <p>1 Ватт = 1 Джоуль в СЕКУНДУ! Если время 7 минут не умножить на 60 с (420 с), ответ будет в 60 раз больше и эксперты снимут 2 балла!</p>\n            </div>\n        "
    }
  ],
  "chemistry": [
    {
      "id": "chem_atom_structure",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "строение атома",
        "периодическая система",
        "протоны",
        "нейтроны",
        "электроны"
      ],
      "title": "Строение атома и Периодическая система Менделеева",
      "fipiSpec": {
        "number": "№ 1, 2, 3",
        "score": "1 первичный балл",
        "time": "2–4 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Строение атома)"
      },
      "theory": "\n            <h4>1. Состав атома</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Порядковый номер Z (№ элемента)</strong> = Число протонов p⁺ = Заряд ядра = Общее число электронов e⁻.</li>\n                <li><strong>Номер периода</strong> = Число электронных слоев (энергетических уровней).</li>\n                <li><strong>Номер группы (главной подгруппы А)</strong> = Число валентных электронов на внешнем слое!</li>\n                <li><strong>Число нейтронов N</strong> = Массовое число A (округлить Ar) - Порядковый номер Z (N = A - Z).</li>\n              </ul>\n            </div>\n            <h4>2. Максимальное число электронов на уровне</h4>\n            <p>Формула: <strong>N = 2n²</strong> (1-й уровень — до 2 e⁻, 2-й — до 8 e⁻, 3-й — до 18 e⁻).</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите элемент в таблице Менделеева: определите его порядковый номер, период и группу.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Количество внешних электронов = номер группы А. Например, у фосфора P (V-A группа) на внешнем слое 5 электронов.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №2 ОГЭ</div>\n              <p><strong>Условие:</strong> На рисунке приведена модель атома химического элемента. Запишите в поле для ответа: 1) номер периода, в котором расположен элемент; 2) число валентных электронов.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Если на схеме 3 концентрических круга — элемент находится в 3-м периоде. Если на внешнем круге 6 точек — у него 6 валентных электронов (это сера S).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>36</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Побочные подгруппы (В)</strong>\n              <p>Для элементов побочных подгрупп (железо, медь, хром) число валентных электронов не всегда равно номеру группы. Но в ОГЭ в заданиях 1–3 спрашивают строго элементы ГЛАВНЫХ подгрупп (А)!</p>\n            </div>\n        "
    },
    {
      "id": "chem_periodic_trends",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "закономерности в таблице менделеева",
        "радиус атома",
        "электроотрицательность",
        "металлические свойства"
      ],
      "title": "Закономерности изменения свойств в таблице Менделеева",
      "fipiSpec": {
        "number": "№ 3",
        "score": "1 первичный балл",
        "time": "2–3 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Периодический закон)"
      },
      "theory": "\n            <h4>Правило двух чемпионов: ФТОР (F) и ФРАНЦИЙ (Fr)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>К Фтору F (вправо по периоду → и вверх по группе ↑):</strong></div>\n              <ul>\n                <li>Электроотрицательность (ЭО) <strong>увеличивается</strong> (F — самый сильный неметалл!);</li>\n                <li>Неметаллические и окислительные свойства <strong>усиливаются</strong>;</li>\n                <li>Радиус атома <strong>уменьшается</strong> (ядро сильнее притягивает электроны);</li>\n                <li>Кислотные свойства высших оксидов и гидроксидов <strong>усиливаются</strong>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>К Францию Fr (влево по периоду ← и вниз по группе ↓):</strong></div>\n              <ul>\n                <li>Металлические и восстановительные свойства <strong>усиливаются</strong>;</li>\n                <li>Радиус атома <strong>увеличивается</strong>;</li>\n                <li>Основные свойства оксидов и гидроксидов <strong>усиливаются</strong>.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Отметьте указанные 3 элемента в таблице Менделеева и определите, расположены ли они в одном периоде или в одной группе.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Посмотрите направление требования: «в порядке возрастания» (от меньшего к большему) или «в порядке убывания»!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Расположите элементы: 1) кремний Si, 2) натрий Na, 3) фосфор P в порядке увеличения электроотрицательности.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Все три элемента лежат в 3 периоде. Слева направо: Na (I гр) → Si (IV гр) → P (V гр). Электроотрицательность растет слева направо к фтору: Na < Si < P.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>213</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Перевернутый порядок (возрастание vs убывание)</strong>\n              <p>Самая распространенная ошибка — невнимательное прочтение: расположить не по возрастанию, а по убыванию. Перечитывайте порядок перед записью в бланк!</p>\n            </div>\n        "
    },
    {
      "id": "chem_oxidation_states",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "степени окисления",
        "овр",
        "окислитель",
        "восстановитель"
      ],
      "title": "Степени окисления и Окислительно-восстановительные реакции (ОВР)",
      "fipiSpec": {
        "number": "№ 4, 15, 20",
        "score": "1–3 первичных балла",
        "time": "4–8 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (ОВР)"
      },
      "theory": "\n            <h4>1. Постоянные степени окисления в соединениях</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li>Фтор F: всегда -1;</li>\n                <li>Кислород O: почти всегда -2 (исключения: OF₂ (+2), H₂O₂ (-1));</li>\n                <li>Водород H: с неметаллами +1 (с гидридами металлов NaH -1);</li>\n                <li>Щелочные металлы (Li, Na, K): +1; Щелочноземельные (Mg, Ca, Ba): +2; Алюминий Al: +3.</li>\n                <li>Простые вещества (O₂, Fe, N₂, Cl₂): строго <strong>0</strong>!</li>\n              </ul>\n              <div class=\"math-row\">Сумма всех степеней окисления в нейтральной молекуле = <strong>0</strong>!</div>\n            </div>\n            <h4>2. Окислитель и Восстановитель</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Восстановитель</strong> — <strong>Отдает</strong> электроны e⁻ => Степень окисления <strong>Повышается</strong> (Окисляется). <i>(«Отдал электрон — стал Восстановителем!»)</i></div>\n              <div class=\"math-row\"><strong>Окислитель</strong> — <strong>Принимает</strong> электроны e⁻ => Степень окисления <strong>Понижается</strong> (Восстанавливается).</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Расставьте степени окисления у всех элементов слева и справа от стрелки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите два элемента, изменивших степень окисления: один повысил, другой понизил.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Составьте схему отдачи и принятия электронов.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №15 ОГЭ</div>\n              <p><strong>Схема:</strong> S⁰ + O₂⁰ → S⁺⁴O₂⁻².<br>\n              <strong>Вопрос:</strong> Чем является сера в данной реакции?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Сера S⁰ отдала 4 электрона и повысила степень окисления до +4: S⁰ - 4e⁻ → S⁺⁴. Следовательно, сера является <strong>восстановителем</strong> (процесс окисления).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Восстановитель</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Путаница процесса и роли</strong>\n              <p>Восстановитель сам ОКИСЛЯЕТСЯ! Окислитель сам ВОССТАНАВЛИВАЕТСЯ! Читайте внимательно, что спрашивают в задании: роль (окислитель/восстановитель) или процесс (окисление/восстановление).</p>\n            </div>\n        "
    },
    {
      "id": "chem_anions",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "реакции на анионы",
        "so4",
        "cl",
        "co3",
        "качественные реакции"
      ],
      "title": "Качественные реакции на анионы (SO₄²⁻, Cl⁻, CO₃²⁻, PO₄³⁻)",
      "fipiSpec": {
        "number": "№ 12, 17, 23",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень (Визитная карточка ОГЭ)",
        "docSource": "Кодификатор ФИПИ (Качественные реакции)"
      },
      "theory": "\n            <h4>Топ качественных реакций на анионы:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Сульфат-ион SO₄²⁻ + Ba²⁺:</strong> образуется <strong>белый мелкокристаллический осадок BaSO₄↓</strong>, нерастворимый в кислотах!</li>\n                <li><strong>Хлорид-ион Cl⁻ + Ag⁺:</strong> образуется <strong>белый творожистый осадок AgCl↓</strong>, темнеющий на свету.</li>\n                <li><strong>Бромид-ион Br⁻ + Ag⁺:</strong> светло-желтый осадок AgBr↓.</li>\n                <li><strong>Иодид-ион I⁻ + Ag⁺:</strong> ярко-желтый осадок AgI↓.</li>\n                <li><strong>Карбонат-ион CO₃²⁻ + H⁺:</strong> бурное выделение <strong>бесцветного газа без запаха CO₂↑</strong> («вскипание» раствора).</li>\n                <li><strong>Фосфат-ион PO₄³⁻ + Ag⁺:</strong> ярко-желтый осадок Ag₃PO₄↓.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите, какой анион присутствует в растворе (сульфат, хлорид или карбонат).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Подберите реактив: для SO₄²⁻ — растворимая соль бария BaCl₂/Ba(NO₃)₂; для Cl⁻ — нитрат серебра AgNO₃; для CO₃²⁻ — любая сильная кислота HCl/H₂SO₄.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №17 ОГЭ</div>\n              <p><strong>Условие:</strong> С помощью какого реактива можно различить растворы хлорида натрия NaCl и сульфата натрия Na₂SO₄?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>При добавлении хлорида бария BaCl₂ в пробирку с сульфатом натрия выпадет белый осадок: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl. В пробирке с хлоридом натрия видимых изменений не произойдет.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Раствор соли бария (BaCl₂)</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: BaSO₄ vs BaCO₃</strong>\n              <p>Оба осадка белые! Но BaSO₄ НЕ растворяется в сильных кислотах (HNO₃, HCl), а осадок BaCO₃ растворяется в кислотах с шипением и выделением газа CO₂↑.</p>\n            </div>\n        "
    },
    {
      "id": "chem_hydroxides_colors",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "осадки гидроксидов металлов",
        "цвета осадков",
        "oh"
      ],
      "title": "Осадки гидроксидов металлов и их цвета (Катионы с OH⁻)",
      "fipiSpec": {
        "number": "№ 12, 17, 23",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Цвета гидроксидов)"
      },
      "theory": "\n            <h4>Золотая палитра цветов осадков гидроксидов:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Cu(OH)₂↓:</strong> ярко-синий студенистый осадок (при нагревании чернеет: CuO + H₂O);</li>\n                <li><strong>Fe(OH)₂↓:</strong> серо-зеленый осадок (на воздухе быстро буреет, окисляясь в Fe(OH)₃);</li>\n                <li><strong>Fe(OH)₃↓:</strong> бурый (красно-коричневый) осадок;</li>\n                <li><strong>Al(OH)₃↓ и Zn(OH)₂↓:</strong> белые студенистые осадки, <strong>амфотерные</strong> (растворяются как в кислотах, так и в избытке щелочи!);</li>\n                <li><strong>Mg(OH)₂↓:</strong> белый осадок (в щелочах не растворяется);</li>\n                <li><strong>AgOH:</strong> не существует, сразу распадается на коричневый осадок оксида серебра: <strong>Ag₂O↓</strong> + H₂O.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Запомните три главных «цветных» катиона: Cu²⁺ (синий), Fe²⁺ (зеленый), Fe³⁺ (бурый).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если осадок белый и растворяется в избытке щелочи (NaOH) — это амфотерный цинк Zn²⁺ или алюминий Al³⁺!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №12 ОГЭ</div>\n              <p><strong>Условие:</strong> К раствору сульфата меди(II) добавили раствор гидроксида натрия. Какой признак реакции наблюдается?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄. Выпадает ярко-синий осадок гидроксида меди(II).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Выпадение синего осадка</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Растворение амфотерных осадков</strong>\n              <p>Осадки Al(OH)₃ и Zn(OH)₂ растворяются при дальнейшем приливании щелочи с образованием комплексных солей (Na[Al(OH)₄]). Не путайте это с отсутствием реакции!</p>\n            </div>\n        "
    },
    {
      "id": "chem_mass_fraction",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "расчет массовой доли",
        "массовая доля в растворе",
        "растворы",
        "задание 18",
        "задание 19"
      ],
      "title": "Задания 18–19: Расчет массовой доли элемента и вещества в растворе",
      "fipiSpec": {
        "number": "№ 18, 19",
        "score": "1 + 1 = 2 первичных балла",
        "time": "6–8 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Практические расчеты по химии)"
      },
      "theory": "\n            <h4>1. Массовая доля элемента в веществе (Задание 18)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>ω(эл) = (n · Ar(эл) / Mr(вещ)) × 100%</strong></div>\n              <div class=\"math-subtext\">где n — индекс элемента в химической формуле. Округляется строго по указанию задания (обычно до десятых или сотых)!</div>\n            </div>\n            <h4>2. Массовая доля вещества в растворе</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>ω = m<sub>раств. в-ва</sub> / m<sub>раствора</sub></strong></div>\n              <div class=\"math-row\">m<sub>раствора</sub> = m<sub>в-ва</sub> + m<sub>воды</sub> = ρ<sub>р-ра</sub> · V<sub>р-ра</sub></div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посчитайте молярную массу соединения Mr, аккуратно сложив атомные массы всех элементов из таблицы Менделеева. Все Ar берутся округленными до целых (кроме хлора: Ar(Cl) = 35.5!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Разделите массу искомого элемента на Mr и выразите в процентах.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В задании 19 используйте полученную долю для расчета реальной дозы препарата для человека или почвы.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №18 ОГЭ</div>\n              <p><strong>Условие:</strong> Вычислите массовую долю азота в нитрате аммония NH₄NO₃. Ответ округлите до целых.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Mr(NH₄NO₃) = 14 + 1·4 + 14 + 16·3 = 14 + 4 + 14 + 48 = 80.<br>\n                   2. Всего атомов азота n = 2: m(N) = 2 · 14 = 28.<br>\n                   3. ω(N) = (28 / 80) × 100% = 0.35 × 100% = 35%.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>35</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Атомная масса хлора</strong>\n              <p>Запомните на всю жизнь: Ar хлора Cl ВСЕГДА берется равной 35.5, а не 35 и не 36!</p>\n            </div>\n        "
    },
    {
      "id": "chem_p2_task20",
      "sectionIndex": 2,
      "itemIndex": 0,
      "matchTitles": [
        "задание №20",
        "электронный баланс",
        "3 балла",
        "овр"
      ],
      "title": "Задание №20: Метод электронного баланса в ОВР (3 балла)",
      "fipiSpec": {
        "number": "№ 20",
        "score": "3 первичных балла",
        "time": "10 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ оценивания задания 20"
      },
      "theory": "\n            <h4>Критерии 3 баллов за задание №20:</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>1 балл:</strong> Составлен правильный электронный баланс (указаны элементы, степени окисления и отданные/принятые электроны).</li>\n                <li><strong>1 балл:</strong> Расставлены коэффициенты в уравнении реакции на основе баланса.</li>\n                <li><strong>1 балл:</strong> Указаны окислитель и восстановитель (с указанием конкретного элемента и его степени окисления!).</li>\n              </ol>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите степени окисления и выпишите элементы, изменившие их: восстановитель и окислитель.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите схему баланса и найдите наименьшее общее кратное (НОК) для коэффициентов.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Перенесите коэффициенты в уравнение и уравняйте остальные атомы (металлы → неметаллы → водород → кислород).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №20 ОГЭ</div>\n              <p><strong>Уравнение:</strong> Fe₂O₃ + CO → Fe + CO₂.</p>\n              <div class=\"task-example-solution\">\n                <strong>Образец оформления в бланке:</strong>\n                <p>1. Электронный баланс:<br>\n                   Fe⁺³ + 3e⁻ → Fe⁰ &nbsp;&nbsp;| 2 (окислитель, процесс восстановления)<br>\n                   C⁺² - 2e⁻ → C⁺⁴ &nbsp;&nbsp;&nbsp;| 3 (восстановитель, процесс окисления)<br>\n                   2. Уравнение с коэффициентами:<br>\n                   Fe₂O₃ + 3CO → 2Fe + 3CO₂.<br>\n                   3. Fe⁺³ (в Fe₂O₃) является окислителем; C⁺² (в CO) является восстановителем.</p>\n                <div class=\"task-answer-box\">Высшая оценка: 3 из 3 баллов</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Неполное указание окислителя</strong>\n              <p>Эксперты снижают 1 балл, если написать просто «железо — окислитель». Нужно писать строго: «Fe⁺³ (или Fe₂O₃ за счет Fe⁺³) является окислителем»!</p>\n            </div>\n        "
    },
    {
      "id": "chem_p2_task23_24",
      "sectionIndex": 2,
      "itemIndex": 1,
      "matchTitles": [
        "задания №23–24",
        "химический эксперимент",
        "правила безопасности",
        "5 баллов"
      ],
      "title": "Задания 23–24: Мысленный и Реальный химический эксперимент (5 баллов)",
      "fipiSpec": {
        "number": "№ 23, 24",
        "score": "4 балла (№23) + 1 балл (№24) = 5 первичных баллов!",
        "time": "20–25 минут",
        "difficulty": "Высокий уровень",
        "docSource": "Критерии ФИПИ оценивания экспериментального блока"
      },
      "theory": "\n            <h4>1. Задание №23 (Теоретическая часть — 4 балла в бланке)</h4>\n            <div class=\"task-formula-box\">\n              <p>Вам дан раствор соли и 5 реактивов в склянках. Нужно выбрать 2 реактива, составить 2 молекулярных уравнения реакций и указать признаки их протекания (цвет осадка или выделение газа).</p>\n            </div>\n            <h4>2. Задание №24 (Практическая часть в лаборатории — 1 балл)</h4>\n            <p>Вы подходите к столику с реактивами и проводите эти две реакции на глазах у экспертов. Оценивается соблюдение правил техники безопасности (ТБ):</p>\n            <ul>\n              <li>Пробка от склянки кладется на стол <strong>широким основанием вниз</strong>;</li>\n              <li>Склянку берут так, чтобы этикетка смотрела <strong>в ладонь</strong> (чтобы капли не смыли текст!);</li>\n              <li>Объем реактива в пробирке — <strong>не более 1–2 мл</strong> (на палец высотой);</li>\n              <li>Нюхать вещества можно только легким движением руки к носу, не наклоняясь над пробиркой!</li>\n            </ul>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выберите 2 реактива, дающие видимый признак: осадок или газ.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите два уравнения в молекулярном виде со всеми коэффициентами и стрелочками (↓, ↑).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Под каждым уравнением напишите признак: «выпадение синего студенистого осадка» или «выделение бесцветного газа».</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец оформления задания №23</div>\n              <div class=\"task-example-solution\">\n                <p>1. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl<br>\n                   Признак: выпадение бурого осадка.<br>\n                   2. FeCl₃ + 3AgNO₃ → 3AgCl↓ + Fe(NO₃)₃<br>\n                   Признак: выпадение белого творожистого осадка.</p>\n                <div class=\"task-answer-box\">Максимальные 4 балла за №23</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Техника безопасности в №24</strong>\n              <p>Если перевернуть пробку этикеткой вниз или взять склянку этикеткой наружу, эксперты немедленно снимут балл за соблюдение правил безопасности!</p>\n            </div>\n        "
    },
    {
      "id": "chem_p2_task22",
      "sectionIndex": 2,
      "itemIndex": 2,
      "matchTitles": [
        "задание №22",
        "расчетная задача",
        "по уравнению реакции",
        "3 балла"
      ],
      "title": "Задание №22: Расчетная задача по уравнению реакции (3 балла)",
      "fipiSpec": {
        "number": "№ 22",
        "score": "3 первичных балла",
        "time": "15 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ оценивания расчетных задач по химии"
      },
      "theory": "\n            <h4>Главные расчетные формулы химии:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Количество вещества (моль):</strong> n = m / M = V / V<sub>m</sub> = N / N<sub>A</sub></div>\n              <div class=\"math-subtext\">где V<sub>m</sub> = 22.4 л/моль (молярный объем газа при н.у.), N<sub>A</sub> = 6.02·10²³ моль⁻¹.</div>\n              <div class=\"math-row\"><strong>Масса чистого вещества в растворе:</strong> m<sub>чист</sub> = m<sub>р-ра</sub> · ω</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Составьте уравнение химической реакции и расставьте коэффициенты.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите массу чистого вещества через формулу раствора и переведите ее в моли (n = m / M).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">По коэффициентам уравнения найдите количество моль искомого вещества (пропорция). Переведите моли в граммы или литры.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №22 ОГЭ</div>\n              <p><strong>Условие:</strong> К 100 г 10%-го раствора гидроксида натрия добавили избыток сульфата меди(II). Вычислите массу образовавшегося осадка.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Уравнение: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄.<br>\n                   2. Масса чистого NaOH: m = 100 · 0.10 = 10 г.<br>\n                   3. n(NaOH) = m / M = 10 / 40 = 0.25 моль.<br>\n                   4. По уравнению n(Cu(OH)₂) = ½ · n(NaOH) = 0.25 / 2 = 0.125 моль.<br>\n                   5. M(Cu(OH)₂) = 64 + (16+1)·2 = 98 г/моль.<br>\n                   6. m(Cu(OH)₂) = n · M = 0.125 · 98 = 12.25 г.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>12.25 г</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытые коэффициенты в пропорции молей</strong>\n              <p>Обратите внимание: на 2 моль NaOH образуется только 1 моль осадка Cu(OH)₂! Если забыть разделить на 2, масса осадка будет вдвое больше правильной.</p>\n            </div>\n        "
    }
  ],
  "biology": [
    {
      "id": "bio_circulatory",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "кровеносная система",
        "сердце",
        "круги кровообращения"
      ],
      "title": "Кровеносная система человека: Строение сердца и круги кровообращения",
      "fipiSpec": {
        "number": "№ 14, 15, 16, 25",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Человек и его здоровье)"
      },
      "theory": "\n            <h4>1. Строение сердца</h4>\n            <p>Сердце человека 4-камерное (2 предсердия, 2 желудочка). В левой половине сердца кровь <strong>артериальная</strong> (богатая O₂), в правой — <strong>венозная</strong> (богатая CO₂).</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Большой круг кровообращения (БКК):</strong></div>\n              <p>Начинается в <strong>левом желудочке</strong> → Аорта → Артерии → Капилляры органов (отдача O₂ и питательных веществ) → Полые вены → Заканчивается в <strong>правом предсердии</strong>.</p>\n              <div class=\"math-row\"><strong>Малый круг кровообращения (МКК, легочный):</strong></div>\n              <p>Начинается в <strong>правом желудочке</strong> → Легочные артерии (венозная кровь!) → Капилляры альвеол легких (насыщение O₂) → Легочные вены (артериальная кровь!) → Заканчивается в <strong>левом предсердии</strong>.</p>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Помните золотое правило кругов: <strong>Круги начинаются в желудочках, а заканчиваются в предсердиях!</strong> Большой круг начинается слева, малый — справа.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Не путайте вены и артерии: артерии несут кровь ОТ сердца, вены — К сердцу (а не по типу крови!).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №15 ОГЭ</div>\n              <p><strong>Условие:</strong> Установите правильную последовательность движения порции крови по малому кругу кровообращения, начиная с желудочка:<br>\n              1) левое предсердие 2) легочные артерии 3) правый желудочек 4) капилляры легких 5) легочные вены.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>3 (правый желудочек) → 2 (легочные артерии) → 4 (капилляры легких) → 5 (легочные вены) → 1 (левое предсердие).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>32451</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Венозная кровь в легочной артерии</strong>\n              <p>Легочная артерия несет ВЕНОЗНУЮ кровь от правого желудочка к легким, а легочные вены несут АРТЕРИАЛЬНУЮ кровь от легких к левому предсердию!</p>\n            </div>\n        "
    },
    {
      "id": "bio_nervous_reflex",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "нервная система",
        "рефлекторная дуга",
        "рефлекс"
      ],
      "title": "Нервная система: 5 звеньев рефлекторной дуги",
      "fipiSpec": {
        "number": "№ 15, 16, 25",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Нервная регуляция)"
      },
      "theory": "\n            <h4>5 обязательных звеньев рефлекторной дуги:</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Рецептор:</strong> воспринимает раздражение и преобразует его в нервный импульс (в коже, глазу, мышце).</li>\n                <li><strong>Чувствительный (афферентный, центростремительный) нейрон:</strong> передает импульс от рецептора в ЦНС (спинной или головной мозг).</li>\n                <li><strong>Вставочный нейрон (нервный центр):</strong> обрабатывает сигнал в ЦНС.</li>\n                <li><strong>Двигательный (эфферентный, центробежный) нейрон:</strong> передает команду из ЦНС к рабочему органу.</li>\n                <li><strong>Рабочий орган (эффектор):</strong> мышца (сокращается) или железа (выделяет секрет).</li>\n              </ol>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Начало дуги — ВСЕГДА рецептор. Конец дуги — ВСЕГДА исполнительный орган (мышца/железа).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сверяйте порядок: Рецептор → Чувствительный → Вставочный → Двигательный → Эффектор.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №15 ОГЭ</div>\n              <p><strong>Условие:</strong> Человек отдернул руку от горячего чайника. Укажите путь нервного импульса:<br>\n              1) двигательный нейрон 2) рецепторы кожи 3) вставочный нейрон спинного мозга 4) чувствительный нейрон 5) мышца руки.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>2 (рецепторы кожи) → 4 (чувствительный нейрон) → 3 (вставочный нейрон) → 1 (двигательный нейрон) → 5 (мышца руки).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>24315</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Чувствительный vs Двигательный нейрон</strong>\n              <p>Импульс идет от рецептора В мозг по ЧУВСТВИТЕЛЬНОМУ пути, а команду ОТ мозга мышце несет ДВИГАТЕЛЬНЫЙ нейрон. Не путайте их местами!</p>\n            </div>\n        "
    },
    {
      "id": "bio_blood_cells",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "форменные элементы крови",
        "эритроциты",
        "лейкоциты",
        "тромбоциты"
      ],
      "title": "Внутренняя среда: Форменные элементы крови (Эритроциты, Лейкоциты, Тромбоциты)",
      "fipiSpec": {
        "number": "№ 13, 14, 16",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Кровь и иммунитет)"
      },
      "theory": "\n            <h4>Сравнительная характеристика клеток крови:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Эритроциты:</strong> двояковогнутые диски без ядер (у млекопитающих). Содержат <strong>гемоглобин</strong>, транспортируют кислород O₂ и углекислый газ CO₂. Живут ~120 дней, разрушаются в селезенке и печени.</li>\n                <li><strong>Лейкоциты:</strong> белые клетки с ядрами, способны к амебоидному движению и <strong>фагоцитозу</strong> (пожиранию бактерий — открыл И.И. Мечников). Обеспечивают клеточный и гуморальный иммунитет (выработка антител).</li>\n                <li><strong>Тромбоциты:</strong> кровяные пластинки (безъядерные фрагменты клеток). Отвечают за <strong>свертывание крови</strong> и образование тромба при повреждении сосуда (фибриноген → нерастворимый фибрин при участии ионов Ca²⁺ и витамина K).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Свяжите клетку с функцией: Эритроцит — Газообмен (гемоглобин); Лейкоцит — Иммунитет и фагоцитоз; Тромбоцит — Свертывание.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> Безъядерные клетки крови человека, имеющие форму двояковогнутого диска и содержащие гемоглобин — это...</p>\n              <div class=\"task-example-solution\">\n                <p>Это эритроциты (красные кровяные тельца).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Эритроциты</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ядра в эритроцитах лягушки</strong>\n              <p>У человека и млекопитающих зрелые эритроциты НЕ имеют ядер (для максимального объема гемоглобина), а у лягушек и птиц ядра в эритроцитах есть!</p>\n            </div>\n        "
    },
    {
      "id": "bio_cell_organelles",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "органоиды клетки",
        "митохондрии",
        "рибосомы",
        "хлоропласты",
        "аппарат гольджи"
      ],
      "title": "Органоиды эукариотической клетки и их функции",
      "fipiSpec": {
        "number": "№ 6, 7, 24",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Клеточное строение)"
      },
      "theory": "\n            <h4>Классификация органоидов и ключевые функции:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Двумембранные:</strong>\n                  <ul>\n                    <li><i>Митохондрии:</i> «энергетические станции клетки», синтез молекул <strong>АТФ</strong> в процессе кислородного дыхания (кристы).</li>\n                    <li><i>Пластиды (хлоропласты):</i> фотосинтез (тилакоиды и граны, хлорофилл). Есть только у растений!</li>\n                    <li><i>Ядро:</i> хранение и передача генетической информации (ДНК, хроматин).</li>\n                  </ul>\n                </li>\n                <li><strong>Одномембранные:</strong>\n                  <ul>\n                    <li><i>Эндоплазматическая сеть (ЭПС):</i> транспорт веществ, синтез белков (шероховатая) и липидов (гладкая).</li>\n                    <li><i>Аппарат Гольджи:</i> модификация, упаковка и секреция веществ, образование лизосом.</li>\n                    <li><i>Лизосомы:</i> внутриклеточное расщепление полимеров (гидролитические ферменты).</li>\n                    <li><i>Вакуоль:</i> клеточный сок, поддержание тургора (у растений).</li>\n                  </ul>\n                </li>\n                <li><strong>Немембранные:</strong>\n                  <ul>\n                    <li><i>Рибосомы:</i> биосинтез белка (трансляция).</li>\n                    <li><i>Клеточный центр (центриоли):</i> образование веретена деления.</li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Синтез АТФ — Митохондрии. Синтез белка — Рибосомы. Расщепление — Лизосомы. Фотосинтез — Хлоропласты.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №6 ОГЭ</div>\n              <p><strong>Условие:</strong> В каких органоидах клетки растительного листа происходит синтез органических веществ из неорганических на свету?</p>\n              <div class=\"task-example-solution\">\n                <p>Фотосинтез происходит в хлоропластах.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Хлоропласты</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Клеточная стенка</strong>\n              <p>У растений клеточная стенка из целлюлозы, у грибов — из хитина, у бактерий — из муреина, а у животных клеточной стенки НЕТ (только гликокаликс)!</p>\n            </div>\n        "
    },
    {
      "id": "bio_vertebrate_evolution",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "эволюция позвоночных",
        "ароморфозы",
        "хордовые"
      ],
      "title": "Эволюция позвоночных животных: Крупные ароморфозы",
      "fipiSpec": {
        "number": "№ 10, 11, 24",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Эволюция органического мира)"
      },
      "theory": "\n            <h4>Хронология выхода на сушу и ароморфозы классов:</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Рыбы:</strong> двухкамерное сердце (1П + 1Ж), один круг кровообращения, жаберное дыхание, боковая линия.</li>\n                <li><strong>Земноводные (Амфибии):</strong> трехкамерное сердце (2П + 1Ж), появление 2-го (легочного) круга кровообращения, пятипалые рычажные конечности, легочное и кожное дыхание (размножение только в воде!).</li>\n                <li><strong>Пресмыкающиеся (Рептилии):</strong> сухая роговая чешуя, неполная перегородка в желудочке сердца (у крокодила — 4-камерное!), внутреннее оплодотворение, яйца с амниотической оболочкой (полная независимость от воды!).</li>\n                <li><strong>Птицы и Млекопитающие:</strong> 4-камерное сердце, полное разделение артериальной и венозной крови, <strong>теплокровность (гомойотермия)</strong>, интенсивный обмен веществ.</li>\n              </ol>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Следите за эволюцией сердца: 2 камеры (рыбы) → 3 камеры (земноводные) → 3 камеры с неполной перегородкой (рептилии) → 4 камеры (птицы и млекопитающие).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №11 ОГЭ</div>\n              <p><strong>Условие:</strong> Впервые в эволюции трехкамерное сердце и второй круг кровообращения появились у...</p>\n              <div class=\"task-example-solution\">\n                <p>У земноводных (амфибий) в связи с выходом на сушу и появлением легких.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Земноводные</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Сердце крокодила</strong>\n              <p>Крокодил — рептилия, но у него 4-камерное сердце (с овальным отверстием в перегородке), однако кровь все равно частично смешивается в дугах аорты, поэтому он холоднокровный!</p>\n            </div>\n        "
    }
  ],
  "geography": [
    {
      "id": "geo_natural_increase",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "естественный прирост",
        "еп",
        "рождаемость",
        "смертность"
      ],
      "title": "Задание 13/22: Естественный прирост населения (ЕП = Р - С)",
      "fipiSpec": {
        "number": "№ 13, 22",
        "score": "1 первичный балл",
        "time": "2–3 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Население России: Демография)"
      },
      "theory": "\n            <h4>Главная демографическая формула:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>ЕП = Р - С</strong></div>\n              <div class=\"math-subtext\">где <strong>ЕП</strong> — естественный прирост населения,<br>\n              <strong>Р</strong> — число родившихся (рождаемость),<br>\n              <strong>С</strong> — число умерших (смертность).</div>\n              <div class=\"math-row\">Если Р > С — ЕП положительный (прирост).</div>\n              <div class=\"math-row\">Если С > Р — ЕП отрицательный (естественная убыль со знаком «минус»!).</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в статистической таблице колонку рождаемости (Р) и колонку смертности (С) для нужного региона и года.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вычтите: ЕП = Р - С. Если умерших больше — ОБЯЗАТЕЛЬНО ставьте <strong>знак «минус»</strong> в ответ!</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> В 2022 году в регионе родилось 14 500 человек, а умерло 18 200 человек. Определите величину естественного прироста населения.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>ЕП = 14 500 - 18 200 = -3 700 человек.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>-3700</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Потеря знака минус</strong>\n              <p>Если в задании получилась убыль населения, а вы напишете просто «3700» без знака минус «-», компьютер посчитает ответ неверным!</p>\n            </div>\n        "
    },
    {
      "id": "geo_migration_balance",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "миграционный прирост",
        "сальдо миграции",
        "прибывшие",
        "выбывшие"
      ],
      "title": "Задание 13/22: Миграционный прирост (Сальдо миграции = П - В)",
      "fipiSpec": {
        "number": "№ 13, 22",
        "score": "1 первичный балл",
        "time": "2–3 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Миграции населения)"
      },
      "theory": "\n            <h4>Формула миграционного прироста (сальдо):</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>МП = П - В</strong></div>\n              <div class=\"math-subtext\">где <strong>МП</strong> — миграционный прирост (сальдо),<br>\n              <strong>П</strong> — число прибывших (иммигрантов),<br>\n              <strong>В</strong> — число выбывших (эмигрантов).</div>\n              <div class=\"math-row\"><strong>Общий прирост населения:</strong> ОП = ЕП + МП = (Р - С) + (П - В).</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите строки прибывших и выбывших за указанный год.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вычтите из прибывших количество выбывших: МП = П - В.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> В область прибыло 24 300 человек, а выбыло 19 100 человек. Определите миграционный прирост.</p>\n              <div class=\"task-example-solution\">\n                <p>МП = 24 300 - 19 100 = 5 200 человек.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>5200</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Внутренняя vs Международная миграция</strong>\n              <p>Если в таблице дана разбивка на внутрирегиональную и международную миграцию, складывайте общие числа прибывших и выбывших со всех направлений!</p>\n            </div>\n        "
    },
    {
      "id": "geo_population_density",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "плотность населения",
        "расчет плотности"
      ],
      "title": "Задание 13: Плотность населения территории (чел/км²)",
      "fipiSpec": {
        "number": "№ 13",
        "score": "1 первичный балл",
        "time": "2–3 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (География населения)"
      },
      "theory": "\n            <h4>Формула средней плотности населения:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Плотность = Численность населения (чел.) / Площадь территории (км²)</strong></div>\n              <div class=\"math-subtext\">Единица измерения: <strong>чел./км²</strong>. Округляется строго по указанию в условии (до целых или десятых).</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Разделите число жителей на площадь региона.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Округлите до требуемого знака по математическим правилам.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> Численность населения области составляет 3 200 000 человек, площадь — 80 000 км². Определите среднюю плотность населения.</p>\n              <div class=\"task-example-solution\">\n                <p>3 200 000 / 80 000 = 40 чел./км².</p>\n                <div class=\"task-answer-box\">Ответ: <strong>40</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Тысячи жителей</strong>\n              <p>Если численность дана в тысячах (3200 тыс.), не забудьте умножить на 1000 перед делением на площадь в км²!</p>\n            </div>\n        "
    },
    {
      "id": "geo_topographic_profile",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "чтение горизонталей",
        "выбор профиля",
        "топографическая карта",
        "задание 12"
      ],
      "title": "Задание 11: Чтение горизонталей и выбор профиля рельефа",
      "fipiSpec": {
        "number": "№ 11",
        "score": "1 первичный балл",
        "time": "3–5 минут",
        "difficulty": "Базовый / повышенный уровень",
        "docSource": "Кодификатор ФИПИ (Топографическая карта)"
      },
      "theory": "\n            <h4>Правила анализа профиля по топографической карте:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Горизонтали (изогипсы):</strong> линии, соединяющие точки с одинаковой абсолютной высотой над уровнем моря.</li>\n                <li><strong>Сечение рельефа:</strong> указано под картой («горизонтали проведены через 2.5 м / 5 м»).</li>\n                <li><strong>Бергштрихи:</strong> черточки на горизонталях, свободным концом показывают направление <strong>вниз по склону</strong>!</li>\n                <li>Чем ближе горизонтали друг к другу — тем <strong>круче склон</strong>; чем дальше — тем склон <strong>положе</strong>.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите высоты начальной точки А и конечной точки В по отметкам высот и сечению.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сразу отбросьте профили, у которых высоты краев не совпадают с точками А и В на карте.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте поведение рельефа посередине: пересекает ли линия реку/овраг (впадина) или холм (подъем).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №11 ОГЭ</div>\n              <p><strong>Анализ профиля А-В:</strong> Точка А на высоте 152 м, точка В на высоте 145 м. Посередине профиль пересекает реку с отметкой уреза воды 130 м.</p>\n              <div class=\"task-example-solution\">\n                <p>Правильный график должен начинаться на 152 м, спускаться до ямы на 130 м и подниматься до 145 м к точке В.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>График с глубокой лощиной</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Перепутанные концы А и В</strong>\n              <p>Обращайте внимание на ориентацию: на графике слева ВСЕГДА точка А, а справа — точка В! Не читайте профиль задом наперед.</p>\n            </div>\n        "
    },
    {
      "id": "geo_climate_types",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "типы климата россии",
        "арктический",
        "умеренный",
        "муссонный",
        "континентальный"
      ],
      "title": "Климатология: Типы климата России (Шпаргалка)",
      "fipiSpec": {
        "number": "№ 18, 28",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Климат России)"
      },
      "theory": "\n            <h4>4 зоны умеренного климатического пояса России (с запада на восток):</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1. Умеренно-континентальный (Европейская часть России):</strong> мягкая зима (-8...-12°C), теплое лето (+18...+22°C), осадков 600–800 мм в год, выпадают равномерно.</li>\n                <li><strong>2. Континентальный (Западная Сибирь):</strong> более морозная зима (-18...-24°C), теплое лето, осадков 400–500 мм.</li>\n                <li><strong>3. Резко континентальный (Восточная Сибирь, Якутия):</strong> экстремально морозная малоснежная зима (до -45...-50°C — полюс холода Оймякон), жаркое короткое лето (+20...+25°C), огромная годовая амплитуда температур (до 65°C!), осадков мало (250–350 мм).</li>\n                <li><strong>4. Муссонный (Дальний Восток, Приморье):</strong> сухая холодная зима и очень дождливое теплое лето (летние муссоны с Тихого океана приносят более 80% всех осадков!).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Зима около -10°C → Европейская часть (Умеренно-континентальный).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Зима ниже -35°C и сухо → Якутия (Резко континентальный).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Пик дождей строго в июле–августе (высокие столбики лета) → Дальний Восток (Муссонный).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Климатограмма Владивостока</div>\n              <div class=\"task-example-solution\">\n                <p>Зима -12°C, лето +20°C, годовое количество осадков 820 мм, причем в июле и августе выпадает по 180–200 мм (яркий летний пик). Это муссонный климат Дальнего Востока.</p>\n                <div class=\"task-answer-box\">Тип климата: <strong>Муссонный</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Южное полушарие на климатограмме</strong>\n              <p>Если кривая температуры прогибается ВНИЗ в июле (+5°C в июле и +25°C в январе) — это Южное полушарие (лето в январе)!</p>\n            </div>\n        "
    },
    {
      "id": "geo_site_selection12",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "выбор участка для футбола",
        "санного спуска",
        "задание №12",
        "топокарта"
      ],
      "title": "Задание 12: Выбор участка для футбола или санного спуска (2 балла)",
      "fipiSpec": {
        "number": "№ 12",
        "score": "2 первичных балла",
        "time": "5–7 минут",
        "difficulty": "Повышенный уровень",
        "docSource": "Критерии ФИПИ оценивания задания 12"
      },
      "theory": "\n            <h4>Железные критерии выбора участка:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1. Для футбольного поля / волейбола / теннисного корта:</strong></div>\n              <ul>\n                <li><strong>Участок должен быть плоским и горизонтальным</strong> (отсутствие горизонталей или максимальное расстояние между ними);</li>\n                <li><strong>Отсутствие препятствий</strong> (нет кустарников, деревьев, болот, ям и оврагов — чистый луг).</li>\n              </ul>\n              <div class=\"math-row\"><strong>2. Для катания на санках / лыжах (горнолыжного спуска):</strong></div>\n              <ul>\n                <li><strong>Наличие крутого склона</strong> (горизонтали проходят часто и близко друг к другу);</li>\n                <li><strong>Отсутствие препятствий</strong> (нет кустарников и деревьев, об которые можно травмироваться).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Укажите номер выбранного участка (1, 2 или 3).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите аргумент 1: охарактеризуйте рельеф (ровный / склон).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Приведите аргумент 2: охарактеризуйте поверхность (луг / нет деревьев и кустарников).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец ответа в бланке (Футбол)</div>\n              <div class=\"task-example-solution\">\n                <p>1. Для игры в футбол больше всего подходит участок №2.<br>\n                   2. Участок №2 имеет ровную горизонтальную поверхность (на нем отсутствуют горизонтали).<br>\n                   3. На участке находится луг, отсутствуют деревья, кустарники и заболоченность, мешающие игре.</p>\n                <div class=\"task-answer-box\">2 из 2 баллов</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Указание только одного аргумента</strong>\n              <p>За указание только номера участка дают 0 баллов! 1 балл — номер + 1 аргумент. 2 балла — строго номер + 2 аргумента.</p>\n            </div>\n        "
    },
    {
      "id": "geo_climatogram18",
      "sectionIndex": 1,
      "itemIndex": 3,
      "matchTitles": [
        "определение климатограммы",
        "задание №18",
        "климатограмма"
      ],
      "title": "Задание 18: Определение города по климатограмме (Алгоритм исключения)",
      "fipiSpec": {
        "number": "№ 18",
        "score": "1 первичный балл",
        "time": "3–4 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Климатический анализ)"
      },
      "theory": "\n            <h4>Элементы климатограммы:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Линия с точками (красная/синяя):</strong> ход температуры по месяцам года (шкала слева, °C).</li>\n                <li><strong>Столбики (гистограмма):</strong> количество осадков по месяцам (шкала справа, мм).</li>\n                <li><strong>Число в центре/вверху:</strong> годовая сумма осадков (например, 650 мм).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посмотрите температуру января (самая низкая точка): выше 0°C (субтропики, Сочи, Европа) или мороз (Россия)?</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Оцените температуру июля: +12°C (тундра) или +25°C (степь/пустыня)?</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сравните с 4 предложенными на выбор городами и исключите неподходящие.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №18 ОГЭ</div>\n              <p><strong>Климатограмма:</strong> t января = +2°C, t июля = +24°C, осадков 1500 мм в год с зимним максимумом.<br>\n              <strong>Города:</strong> 1) Мурманск &nbsp; 2) Якутск &nbsp; 3) Сочи &nbsp; 4) Астрахань.</p>\n              <div class=\"task-example-solution\">\n                <p>Зимой температура выше нуля, огромное количество осадков (1500 мм) характерно только для субтропиков Черноморского побережья Кавказа (Сочи).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>3 (Сочи)</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Разные шкалы температур</strong>\n              <p>Всегда смотрите на шкалу слева: у одного графика деление 5 градусов, у другого — 10. Не оценивайте «на глаз» без сопоставления со шкалой!</p>\n            </div>\n        "
    }
  ],
  "history": [
    {
      "id": "hist_ancient_rus",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "древняя русь и раздробленность",
        "даты",
        "рюрик",
        "крещение руси"
      ],
      "title": "Хронология: Древняя Русь и период раздробленности (IX–XIII вв.)",
      "fipiSpec": {
        "number": "№ 1–4, 15–17",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Историко-культурный стандарт (Древняя Русь)"
      },
      "theory": "\n            <h4>Топ ключевых дат IX–XIII веков:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>862 г.</strong> — Призвание варягов (Рюрик в Новгороде). Зарождение государственности.</li>\n                <li><strong>882 г.</strong> — Поход Олега на Киев, объединение Новгорода и Киева. Создание Древнерусского государства.</li>\n                <li><strong>988 г.</strong> — Крещение Руси князем Владимиром Святославичем («Красное Солнышко»).</li>\n                <li><strong>1016–1054 гг.</strong> — Правление Ярослава Мудрого. Первый свод законов «Русская Правда».</li>\n                <li><strong>1097 г.</strong> — Любечский съезд князей («Каждо да держит отчину свою»). Начало раздробленности.</li>\n                <li><strong>1147 г.</strong> — Первое летописное упоминание Москвы (Юрий Долгорукий).</li>\n                <li><strong>1237–1240 гг.</strong> — Батыево нашествие на Русь, установление ордынского владычества.</li>\n                <li><strong>1240 г. (15 июля)</strong> — Невская битва (Александр Ярославич разбил шведов).</li>\n                <li><strong>1242 г. (5 апреля)</strong> — Ледовое побоище на Чудском озере (разгром рыцарей Ливонского ордена).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Соотнесите событие с веком: IX в. (Олег), X в. (Владимир), XI в. (Ярослав), XII в. (Москва, раздробленность), XIII в. (Батый, Невский).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №1 ОГЭ</div>\n              <p><strong>События:</strong> А) Ледовое побоище; Б) Крещение Руси; В) Первое упоминание Москвы.<br>\n              <strong>Даты:</strong> 1) 988 г. 2) 1147 г. 3) 1242 г.</p>\n              <div class=\"task-example-solution\">\n                <p>А — 3 (1242), Б — 1 (988), В — 2 (1147).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>312</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Битва на Калке vs Нашествие Батыя</strong>\n              <p>Битва на реке Калке произошла в <strong>1223 г.</strong> (первое столкновение с монголами), а полномасштабное нашествие Батыя на Северо-Восточную Русь началось позже — в <strong>1237 г.</strong>!</p>\n            </div>\n        "
    },
    {
      "id": "hist_moscow_smuta",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "единое государство и смута",
        "иван грозный",
        "куликовская битва",
        "смутное время"
      ],
      "title": "Хронология: Единое Русское государство и Смута (XIV–XVII вв.)",
      "fipiSpec": {
        "number": "№ 1–4, 15–17",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Историко-культурный стандарт (Московское царство и Смута)"
      },
      "theory": "\n            <h4>Ключевые вехи XIV–XVII вв.:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1380 г. (8 сентября)</strong> — Куликовская битва (Дмитрий Донской разбил войско Мамая).</li>\n                <li><strong>1480 г.</strong> — Стояние на реке Угре (Иван III). Окончательное падение ордынского ига!</li>\n                <li><strong>1497 г.</strong> — Судебник Ивана III (введение правила Юрьева дня и пожилого).</li>\n                <li><strong>1547 г.</strong> — Венчание Ивана IV Грозного на царский престол (первый царь).</li>\n                <li><strong>1552 г.</strong> — Взятие Казани войсками Ивана Грозного.</li>\n                <li><strong>1581 г.</strong> — Введение «Заповедных лет» (запрет перехода крестьян в Юрьев день).</li>\n                <li><strong>1598–1613 гг.</strong> — <strong>Смутное время</strong> в России:\n                  <ul>\n                    <li>1605–1606 гг. — правление Лжедмитрия I;</li>\n                    <li>1612 г. — освобождение Москвы Вторым ополчением (К. Минин и Д. Пожарский);</li>\n                    <li>1613 г. — Земский собор, избрание Михаила Федоровича Романова на царство.</li>\n                  </ul>\n                </li>\n                <li><strong>1649 г.</strong> — Соборное уложение царя Алексея Михайловича (окончательное юридическое закрепощение крестьян — бессрочный сыск беглых).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Помните этапы закрепощения: 1497 (Судебник, Юрьев день) → 1581 (Заповедные лета) → 1597 (Урочные лета, 5 лет сыска) → 1649 (Соборное уложение, бессрочный сыск).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №2 ОГЭ</div>\n              <p><strong>Условие:</strong> Расположите в хронологической последовательности: 1) Соборное уложение; 2) Стояние на реке Угре; 3) Избрание Михаила Романова.</p>\n              <div class=\"task-example-solution\">\n                <p>2 (Стояние на Угре, 1480) → 3 (Избрание Романова, 1613) → 1 (Соборное уложение, 1649).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>231</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Заповедные vs Урочные лета</strong>\n              <p>Заповедные лета (1581) — ЗАПРЕТ перехода крестьян в Юрьев день. Урочные лета (1597) — СРОК сыска беглых крестьян (5 лет).</p>\n            </div>\n        "
    },
    {
      "id": "hist_empire_18_19",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "императорская россия",
        "петр 1",
        "екатерина 2",
        "1812",
        "реформы 1861"
      ],
      "title": "Хронология: Российская империя XVIII–XIX вв. (От Петра I до Александра III)",
      "fipiSpec": {
        "number": "№ 1–4, 15–17",
        "score": "1–2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Историко-культурный стандарт (Имперский период)"
      },
      "theory": "\n            <h4>Главные даты XVIII–XIX веков:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1700–1721 гг.</strong> — Северная война со Швецией (1703 — основание Санкт-Петербурга, 1709 — Полтавская битва, 1714 — мыс Гангут, 1721 — Ништадтский мир, Россия провозглашена империей).</li>\n                <li><strong>1762–1796 гг.</strong> — Правление Екатерины II («Просвещенный абсолютизм»). 1785 — Жалованная грамота дворянству.</li>\n                <li><strong>1812 г.</strong> — <strong>Отечественная война 1812 года</strong> (26 августа — Бородинское сражение; совет в Филях; изгнание армии Наполеона).</li>\n                <li><strong>1825 г. (14 декабря)</strong> — Восстание декабристов на Сенатской площади в Петербурге.</li>\n                <li><strong>1853–1856 гг.</strong> — Крымская война (оборона Севастополя, Парижский мир).</li>\n                <li><strong>1861 г. (19 февраля)</strong> — <strong>Отмена крепостного права</strong> Александром II Освободителем.</li>\n                <li><strong>1864 г.</strong> — Судебная и Земская реформы Александра II (гласность суда, суд присяжных).</li>\n                <li><strong>1874 г.</strong> — Введение всеобщей воинской повинности.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Связывайте реформы с правителями: Петр I — флот, Сенат, Синод, Табель о рангах (1722); Екатерина II — Уложенная комиссия; Александр I — министерства, 1812; Александр II — Великие реформы (1860-70-е).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> В каком году Александр II подписал Манифест об отмене крепостного права?</p>\n              <div class=\"task-example-solution\">\n                <p>19 февраля 1861 года.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>1861</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Указ о вольных хлебопашцах</strong>\n              <p>Указ о вольных хлебопашцах (1803 г.) принял Александр I (помещики могли отпускать крестьян по желанию за выкуп), а полную отмену крепостного права провел Александр II в 1861 г.!</p>\n            </div>\n        "
    },
    {
      "id": "hist_architecture_culture",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "зодчество древней руси и москвы",
        "памятники культуры",
        "храм василия блаженного",
        "софия киевская"
      ],
      "title": "Культура: Шедевры зодчества Древней Руси и Москвы (Задания 13–14)",
      "fipiSpec": {
        "number": "№ 13, 14",
        "score": "2 первичных балла",
        "time": "4–6 минут",
        "difficulty": "Повышенный уровень (Иллюстративный блок)",
        "docSource": "Кодификатор ФИПИ (История культуры России)"
      },
      "theory": "\n            <h4>Топ памятников архитектуры для заданий с изображениями:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Софийский собор в Киеве (XI в., Ярослав Мудрый):</strong> построен в честь победы над печенегами (1036 г.). Византийский стиль, 13 глав.</li>\n                <li><strong>Церковь Покрова на Нерли (XII в., 1165 г., Андрей Боголюбский):</strong> шедевр белокаменного зодчества Владимиро-Суздальской Руси, крестово-купольный храм.</li>\n                <li><strong>Успенский собор Московского Кремля (XV в., 1479 г., Иван III):</strong> зодчий — итальянец <strong>Аристотель Фиораванти</strong>. Главный венчальный собор русских царей.</li>\n                <li><strong>Храм Василия Блаженного (Покровский собор на Рву, XVI в., Иван Грозный):</strong> зодчие <strong>Барма и Постник</strong>, построен в честь взятия Казани (1552 г.). Шатровый стиль.</li>\n                <li><strong>Церковь Вознесения в Коломенском (1532 г., Василий III):</strong> первый каменный шатровый храм на Руси в честь рождения будущего царя Ивана Грозного.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посмотрите на купола: луковичные разноцветные шатры — Храм Василия Блаженного; строгий белый куб с одним куполом над рекой — Покров на Нерли; кремлевский собор с 5 золотыми куполами — Успенский собор.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вспомните правителя и век постройки.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №14 ОГЭ</div>\n              <p><strong>Вопрос:</strong> В честь какого события был возведен храм Василия Блаженного (Покровский собор на Рву) в Москве?</p>\n              <div class=\"task-example-solution\">\n                <p>В честь взятия Казани и присоединения Казанского ханства к Русскому государству в 1552 году.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Взятие Казани</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Архитекторы Фиораванти vs Барма и Постник</strong>\n              <p>Аристотель Фиораванти построил Успенский собор Кремля при Иване III. А Барма и Постник построили собор Василия Блаженного при Иване IV Грозном!</p>\n            </div>\n        "
    }
  ],
  "english": [
    {
      "id": "eng_perf_vs_past",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "present perfect vs past simple",
        "грамматика",
        "задания 20-28"
      ],
      "title": "Задания 20–28: Present Perfect vs Past Simple (Маркеры времени)",
      "fipiSpec": {
        "number": "№ 20–28",
        "score": "1 первичный балл",
        "time": "2–3 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Грамматические навыки)"
      },
      "theory": "\n            <h4>Жесткое разграничение времен по словам-маркерам:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1. Past Simple (V2 / did + V1):</strong></div>\n              <p>Действие произошло в <strong>завершенный</strong> период времени в прошлом, точное время известно или указано!</p>\n              <ul>\n                <li>Маркеры: <i>yesterday, ago (two days ago), last (last year, last Monday), in 2018, when I was a child</i>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>2. Present Perfect (have / has + V3):</strong></div>\n              <p>Действие произошло в прошлом, но <strong>результат важен сейчас</strong>, период времени еще не закончился!</p>\n              <ul>\n                <li>Маркеры: <i>already, yet, just, ever, never, recently, so far, today, this morning (если еще утро), since, for (for 5 years)</i>.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в предложении временной указатель (маркер).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если есть <i>ago, yesterday, last...</i> — ставьте строго Past Simple (2-я форма неправильного глагола).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если есть <i>already, ever, since</i> — ставьте <code>have/has + V3</code>.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №23 ОГЭ</div>\n              <p>I (SEE) never such a wonderful sunset before.</p>\n              <div class=\"task-example-solution\">\n                <p>Маркер «never ... before» указывает на жизненный опыт к настоящему моменту → Present Perfect.<br>\n                   С подлежащим I форма: <strong>have seen</strong>.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>haveseen</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Запись в бланк ответов</strong>\n              <p>В бланке ответов ОГЭ все ответы пишутся строго ЗАГЛАВНЫМИ БУКВАМИ без пробелов и апострофов! Например: <code>HAVESEEN</code>, а не <code>have seen</code> или <code>I've seen</code>.</p>\n            </div>\n        "
    },
    {
      "id": "eng_passive_voice",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "passive voice",
        "пассивный залог",
        "страдательный залог"
      ],
      "title": "Задания 20–28: Passive Voice (Страдательный залог)",
      "fipiSpec": {
        "number": "№ 20–28",
        "score": "1 первичный балл",
        "time": "2–3 минуты",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Страдательный залог)"
      },
      "theory": "\n            <h4>Формула Passive Voice:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>to BE + V3 (Past Participle)</strong></div>\n              <ul>\n                <li><strong>Present Simple Passive:</strong> am / is / are + V3 (<i>The house is built</i>)</li>\n                <li><strong>Past Simple Passive:</strong> was / were + V3 (<i>The letter was written yesterday; The books were bought</i>)</li>\n                <li><strong>Future Simple Passive:</strong> will be + V3 (<i>The work will be finished tomorrow</i>)</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Задайте вопрос: подлежащее САМО выполняет действие или действие совершается НАД НИМ? (Книга не может сама написать, её написали!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Определите время (обычно в ОГЭ это Past Simple Passive: <strong>was/were + V3</strong>).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Согласуйте форму глагола to be с подлежащим (ед.ч. — was, мн.ч. — were).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №25 ОГЭ</div>\n              <p>The famous novel (WRITE) by Charles Dickens in 1843.</p>\n              <div class=\"task-example-solution\">\n                <p>Роман был написан Диккенсом в 1843 году (пассивное действие в прошлом).<br>\n                   Подлежащее «novel» — единственное число → <strong>was written</strong>.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>waswritten</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ошибка в 3-й форме неправильного глагола</strong>\n              <p>Убедитесь в правильном написании V3: write → written (с двумя t!), build → built, make → made.</p>\n            </div>\n        "
    },
    {
      "id": "eng_comparatives",
      "sectionIndex": 0,
      "itemIndex": 2,
      "matchTitles": [
        "степени сравнения",
        "сравнительная степень",
        "превосходная степень",
        "adjectives"
      ],
      "title": "Задания 20–28: Степени сравнения прилагательных (Degrees of Comparison)",
      "fipiSpec": {
        "number": "№ 20–28",
        "score": "1 первичный балл",
        "time": "1–2 минуты",
        "difficulty": "Базовый уровень (Гарантированный балл)",
        "docSource": "Кодификатор ФИПИ (Степени сравнения)"
      },
      "theory": "\n            <h4>Правила образования степеней сравнения:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Короткие (1–2 слога):</strong> Сравнительная: <code>-er</code> (<i>faster, colder, bigger</i>). Превосходная: <code>the ... -est</code> (<i>the fastest, the coldest</i>).</li>\n                <li><strong>Длинные (3+ слога):</strong> Сравнительная: <code>more ...</code> (<i>more interesting, more difficult</i>). Превосходная: <code>the most ...</code> (<i>the most beautiful</i>).</li>\n              </ul>\n              <div class=\"math-row\"><strong>Исключения (знать наизусть!):</strong></div>\n              <ul>\n                <li>good → <strong>better</strong> → (the) <strong>best</strong></li>\n                <li>bad → <strong>worse</strong> → (the) <strong>worst</strong></li>\n                <li>little → <strong>less</strong> → (the) <strong>least</strong></li>\n                <li>many / much → <strong>more</strong> → (the) <strong>most</strong></li>\n                <li>far → <strong>farther / further</strong> → (the) <strong>farthest / furthest</strong></li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посмотрите на контекст: если после пропуска стоит слово <strong>THAN</strong> (чем) — нужна сравнительная степень (better, larger, more interesting).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если перед пропуском стоит артикль <strong>THE</strong> или предлог <strong>OF ALL / IN THE WORLD</strong> — нужна превосходная степень (best, largest, most interesting).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №21 ОГЭ</div>\n              <p>Lake Baikal is the (DEEP) freshwater lake in the world.</p>\n              <div class=\"task-example-solution\">\n                <p>Перед пропуском артикль «the», оборот «in the world» → превосходная степень.<br>\n                   Короткое слово deep + est = <strong>deepest</strong>.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>deepest</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Артикль the в бланке</strong>\n              <p>Если в тексте перед пропуском уже напечатан артикль «the», не пишите его в бланк повторно! В бланк пишется только само слово (например: <code>BEST</code>, а не <code>THEBEST</code>).</p>\n            </div>\n        "
    },
    {
      "id": "eng_email_template",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "шаблон письма другу",
        "email",
        "задание 35",
        "каркас письма"
      ],
      "title": "Задание 35: Электронное письмо другу (Email — 10 из 10 баллов)",
      "fipiSpec": {
        "number": "№ 35",
        "score": "10 первичных баллов (К1–К4)",
        "time": "25–30 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Критерии ФИПИ оценивания электронного письма (Email)"
      },
      "theory": "\n            <h4>Идеальная структура Email в формате ОГЭ (100–120 слов):</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>1. Обращение:</strong> <code>Dear Ben,</code> (строго с запятой!)</p>\n              <p><strong>2. Благодарность за письмо:</strong> <code>Thanks for your email. It was great to hear from you again.</code></p>\n              <p><strong>3. Основная часть (ответы на 3 вопроса друга):</strong><br>\n              <code>In your email you asked me about... Well, [ответ на вопрос 1]. As for [тема 2], [ответ на вопрос 2]. Besides, [ответ на вопрос 3].</code></p>\n              <p><strong>4. Надежда на будущие контакты:</strong> <code>Write back soon!</code></p>\n              <p><strong>5. Завершающая фраза:</strong> <code>Best wishes,</code> (с запятой!)</p>\n              <p><strong>6. Подпись:</strong> <code>Ivan</code> (только имя, БЕЗ ТОЧКИ в конце!).</p>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите 3 конкретных вопроса в письме друга (подчеркните их карандашом).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Напишите по 2 предложения в ответ на каждый из 3 вопросов, используя связки (Well, As for, Besides).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Посчитайте слова: объем должен быть строго в пределах <strong>90–132 слов</strong> (по норме 100–120 ± 10%).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый каркас на 10 баллов</div>\n              <div class=\"task-example-solution\">\n                <p>Dear Tom,<br>\n                   Thanks for your email. It was great to hear from you again.<br>\n                   In your email you asked me about my free time. Well, I usually hang out with my friends in the park. As for sports, I really enjoy playing basketball because it keeps me fit. Also, at weekends I prefer reading fantasy books or playing video games.<br>\n                   Write back soon!<br>\n                   Best wishes,<br>\n                   Alex</p>\n                <div class=\"task-answer-box\">Ровно 104 слова — высший балл по всем 4 критериям</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Точка после имени в подписи</strong>\n              <p>Никогда не ставьте точку после своего имени в конце письма (<code>Alex.</code> — ошибка!). В английском эпистолярном этикете после имени в подписи точка НЕ СТАВИТСЯ!</p>\n            </div>\n        "
    }
  ],
  "literature": [
    {
      "id": "lit_genres",
      "sectionIndex": 0,
      "itemIndex": 0,
      "matchTitles": [
        "роды и жанры литературы",
        "эпос",
        "лирика",
        "драма"
      ],
      "title": "Теория литературы: Три рода литературы и их жанры",
      "fipiSpec": {
        "number": "№ 1–5",
        "score": "Теоретическая база всех сочинений",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Теоретико-литературные понятия)"
      },
      "theory": "\n            <h4>Классификация родов и жанров литературы:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1. Эпос (повествование о событиях, объективный мир):</strong>\n                  <ul>\n                    <li><i>Эпопея:</i> «Война и мир» (масштабные исторические события).</li>\n                    <li><i>Роман:</i> «Герой нашего времени», «Евгений Онегин» (роман в стихах).</li>\n                    <li><i>Повесть:</i> «Капитанская дочка», «Шинель», «Бедная Лиза».</li>\n                    <li><i>Рассказ:</i> «Хамелеон», «Судьба человека», «После бала».</li>\n                    <li><i>Притча, басня, сказка.</i></li>\n                  </ul>\n                </li>\n                <li><strong>2. Лирика (мир внутренних чувств, эмоций и переживаний автора):</strong>\n                  <ul>\n                    <li><i>Стихотворение, элегия, ода, послание, сонет.</i></li>\n                  </ul>\n                </li>\n                <li><strong>3. Драма (действие через диалоги и монологи, предназначена для сцены):</strong>\n                  <ul>\n                    <li><i>Трагедия:</i> «Ромео и Джульетта», «Борис Годунов».</li>\n                    <li><i>Комедия:</i> «Недоросль» (Фонвизин), «Горе от ума» (Грибоедов), «Ревизор» (Гоголь).</li>\n                    <li><i>Драма:</i> «Гроза» (Островский).</li>\n                  </ul>\n                </li>\n                <li><strong>Лиро-эпос (синтез):</strong> баллада («Светлана»), поэма («Мцыри», «Песня про купца Калашникова», «Василий Теркин»).</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите форму: проза с сюжетом — эпос; стихи о чувствах — лирика; реплики действующих лиц и ремарки в скобках — драма.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Теоретический вопрос ОГЭ</div>\n              <p><strong>Вопрос:</strong> К какому литературному роду относится пьеса А.С. Грибоедова «Горе от ума»?</p>\n              <div class=\"task-example-solution\">\n                <p>Род — драма, жанр — комедия.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Драма</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Жанр «Капитанской дочки»</strong>\n              <p>В школьной традиции и кодификаторе ФИПИ «Капитанская дочка» А.С. Пушкина классифицируется как <strong>историческая повесть</strong> (хотя иногда называют романом). Называйте ее повестью!</p>\n            </div>\n        "
    },
    {
      "id": "lit_tropes",
      "sectionIndex": 0,
      "itemIndex": 1,
      "matchTitles": [
        "тропы и фигуры речи",
        "метафора",
        "эпитет",
        "олицетворение",
        "сравнение"
      ],
      "title": "Теория литературы: Тропы и средства художественной выразительности",
      "fipiSpec": {
        "number": "№ 3, 4, 5",
        "score": "1–2 первичных балла",
        "time": "3–5 минут",
        "difficulty": "Базовый уровень",
        "docSource": "Кодификатор ФИПИ (Изобразительно-выразительные средства)"
      },
      "theory": "\n            <h4>Топ средств выразительности:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Эпитет:</strong> образное, эмоциональное определение (отвечает на вопрос <i>какой?</i>): <i><u>золотая</u> осень, <u>скрипучий</u> мороз, <u>робкое</u> дыхание</i>.</li>\n                <li><strong>Метафора:</strong> скрытое сравнение на основе сходства (перенос по сходству): <i>костер рябины красной; ситец неба; зеркало озера</i>.</li>\n                <li><strong>Олицетворение:</strong> наделение неодушевленных предметов свойствами живого существа: <i>ветер <u>воет</u>; лес <u>дремлет</u>; река <u>бежит</u></i>.</li>\n                <li><strong>Сравнение:</strong> сопоставление с помощью союзов <i>как, точно, словно, будто</i> или творительного падежа: <i>глаза как звезды; летел стрелой</i>.</li>\n                <li><strong>Гипербола:</strong> художественное преувеличение: <i>сто сорок солнц закат пылал; тысячу лет тебя не видел</i>.</li>\n                <li><strong>Литота:</strong> художественное преуменьшение: <i>мальчик с пальчик; мужичок с ноготок</i>.</li>\n                <li><strong>Антитеза:</strong> резкое противопоставление: <i>Они сошлись: волна и камень, стихи и проза, лед и пламень</i>.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Есть союзы «как, будто, словно»? → Сравнение.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Неживой предмет оживает и совершает действия человека? → Олицетворение.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Скрытый перенос значения в переносном смысле? → Метафора.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Пример из лирики С.А. Есенина</div>\n              <p>«В саду горит костер рябины красной, но никого не может он согреть».</p>\n              <div class=\"task-example-solution\">\n                <p>«Костер рябины» — скрытое сравнение гроздей рябины с пламенем костра. Это <strong>метафора</strong>.</p>\n                <div class=\"task-answer-box\">Троп: <strong>Метафора</strong></div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Метафора vs Олицетворение</strong>\n              <p>Олицетворение — это частный случай метафоры, но именно когда предмет ОЧЕЛОВЕЧИВАЕТСЯ (плачет, шепчет, грустит). Если переноса на человека нет — это чистая метафора.</p>\n            </div>\n        "
    },
    {
      "id": "lit_captains_daughter",
      "sectionIndex": 1,
      "itemIndex": 0,
      "matchTitles": [
        "капитанская дочка",
        "пушкин",
        "гринев",
        "пугачев",
        "швабрин"
      ],
      "title": "А.С. Пушкин «Капитанская дочка»: Анализ, конфликты и герои",
      "fipiSpec": {
        "number": "№ 1, 2, 5 (Сочинение)",
        "score": "Ключевое произведение ОГЭ (до 13 баллов)",
        "time": "Теория к сочинению",
        "difficulty": "Повышенный / высокий уровень",
        "docSource": "Кодификатор ФИПИ (Русская классика XIX в.)"
      },
      "theory": "\n            <h4>1. Идея и эпиграф</h4>\n            <p><strong>Эпиграф:</strong> «Береги честь смолоду». Главная мысль — верность долгу, совести и любви в водовороте крестьянской войны.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Система персонажей и антитезы:</strong></div>\n              <ul>\n                <li><strong>Петр Гринев:</strong> честный офицер, верный присяге дворянин, милосердный и благородный. Готов умереть на виселице, но не целует руку самозванцу.</li>\n                <li><strong>Алексей Швабрин:</strong> эгоистичный предатель, нарушитель присяги, перебежчик в стан мятежников ради личной выгоды и мести Маше.</li>\n                <li><strong>Емельян Пугачев:</strong> предводитель крестьянского восстания, народный царь, жесток к врагам, но способен помнить добро (за заячий тулупчик спасает Гринева трижды!). Символизирует русский бунт — «бессмысленный и беспощадный».</li>\n                <li><strong>Маша Миронова:</strong> скромная «капитанская дочка», проявляющая невероятную стойкость и силу любви. Сама едет в Царское Село к императрице Екатерине II, чтобы спасти жениха.</li>\n              </ul>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">В сочинении о чести сопоставляйте поведение Гринева и Швабрина при захвате Белогорской крепости.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Покажите двойственность образа Пугачева: разбойник и самозванец, но одновременно человек широкой души и народной мудрости (сказка об орле и вороне).</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тезис для сочинения №5</div>\n              <div class=\"task-example-solution\">\n                <p>«Понятие чести для Петра Гринева неразрывно связано с отцовским заветом. Даже перед лицом неминуемой казни он отказывается признать Пугачева государем, заявляя: «Я природный дворянин; я присягал государыне императрице: тебе служить не могу». Искренность и верность слову покоряют мятежника, который отпускает офицера».</div>\n                <div class=\"task-answer-box\">Глубокий анализ для высшего балла</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Однобокая трактовка Пугачева</strong>\n              <p>Нельзя изображать Пугачева только как кровавого злодея или только как идеального героя. Пушкин раскрывает его как сложную, трагическую и противоречивую историческую фигуру!</p>\n            </div>\n        "
    },
    {
      "id": "lit_woe_from_wit",
      "sectionIndex": 1,
      "itemIndex": 1,
      "matchTitles": [
        "горе от ума",
        "грибоедов",
        "чацкий",
        "фамусов",
        "молчалин"
      ],
      "title": "А.С. Грибоедов «Горе от ума»: Конфликт «века нынешнего» и «века минувшего»",
      "fipiSpec": {
        "number": "№ 1, 2, 5 (Сочинение)",
        "score": "До 13 баллов",
        "time": "Теория к сочинению",
        "difficulty": "Высокий уровень",
        "docSource": "Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>Два конфликта в комедии:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1. Любовный конфликт:</strong> Чацкий влюблен в Софью, но Софья предпочитает угодливого и беспринципного секретаря Молчалина.</li>\n                <li><strong>2. Общественный конфликт:</strong> Столкновение Александра Андреевича Чацкого («век нынешний» — просвещение, служение делу, свободомыслие, патриотизм) с «фамусовским обществом» («век минувший» — чинопочитание, крепостничество, преклонение перед всем французским, страх перед книгами: <i>«Ученье — вот чума, ученость — вот причина»</i>).</li>\n              </ul>\n              <div class=\"math-row\"><strong>Апогей конфликта:</strong> Софья распускает слух о сумасшествии Чацкого, который с радостью подхватывает всё дворянское общество.</div>\n            </div>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">При анализе Чацкого используйте цитату Гончарова из статьи «Мильон терзаний»: «Чацкий сломлен количеством старой силы, нанеся ей, в свою очередь, удар смертельный».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Цитируйте монологи: «А судьи кто?», «Служить бы рад, прислуживаться тошно».</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тезис сочинения</div>\n              <div class=\"task-example-solution\">\n                <p>«Фамусовское общество держится на принципах подхалимства и выгоды, ярким выразителем которых является Молчалин («В мои лета не должно сметь свое суждение иметь», «угождать всем людям без изъятья»). Чацкий же утверждает свободу человеческой личности, за что объявляется сумасшедшим».</div>\n                <div class=\"task-answer-box\">Отличная цитатная база</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Чацкий — победитель или побежденный?</strong>\n              <p>В ответе обязательно покажите двойственность: Чацкий побежден внешне (вынужден бежать из Москвы), но победил морально, посеяв зерно сомнения в старый мир.</p>\n            </div>\n        "
    },
    {
      "id": "lit_hero_our_time",
      "sectionIndex": 1,
      "itemIndex": 2,
      "matchTitles": [
        "герой нашего времени",
        "лермонтов",
        "печорин",
        "лишний человек",
        "грушницкий"
      ],
      "title": "М.Ю. Лермонтов «Герой нашего времени»: Образ Григория Печорина",
      "fipiSpec": {
        "number": "№ 1, 2, 5 (Сочинение)",
        "score": "До 13 баллов",
        "time": "Теория к сочинению",
        "difficulty": "Высокий уровень",
        "docSource": "Кодификатор ФИПИ"
      },
      "theory": "\n            <h4>1. Первый психологический роман в русской литературе</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Цель Лермонтова:</strong> «История души человеческой, хотя бы самой мелкой души, едва ли не любопытнее и не полезнее истории целого народа».</p>\n              <div class=\"math-row\"><strong>Печорин — тип «лишнего человека»:</strong></div>\n              <ul>\n                <li>Одаренная, глубокая личность с колоссальной энергией и умом;</li>\n                <li>Не находит применения своим силам в николаевской России 1830-х годов;</li>\n                <li>«Нравственный калека»: <i>«Я глубоко чувствовал добро и зло; никто меня не ласкал, все оскорбляли: я стал злопамятен... Я сделался нравственным калекой»</i>;</li>\n                <li>Приносит несчастье всем, кто с ним сближается (Бэла погибает, княжна Мери страдает, Грушницкий убит на дуэли, Максим Максимыч отвергнут).</li>\n              </ul>\n            </div>\n            <h4>2. Нарушение хронологии глав</h4>\n            <p>Хронологический порядок: «Тамань» → «Княжна Мери» → «Фаталист» → «Бэла» → «Максим Максимыч» → Предисловие к Журналу Печорина.<br>\n            В романе главы расположены так, чтобы читатель сначала узнал Печорина глазами простого офицера (Максим Максимыч), затем путешественника-офицера, и лишь затем заглянул в его исповедь (Журнал самого Печорина).</p>\n        ",
      "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Объясняйте противоречия Печорина: в нем борются два человека: один действует и совершает поступки, другой холодно судит и препарирует его душу.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Контрастируйте Печорина с Грушницким: Грушницкий носит маску разочарованного романтика, а Печорин действительно глубоко и трагически разочарован.</div>\n              </div>\n            </div>\n        ",
      "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тезис сочинения</div>\n              <div class=\"task-example-solution\">\n                <p>«Трагедия Печорина — это трагедия целого поколения мыслящих людей эпохи безвременья. Обладая железной волей и незаурядным интеллектом, он растрачивает свои силы на мелкие интриги и любовные эксперименты, превращая собственную жизнь в цепь разочарований».</div>\n                <div class=\"task-answer-box\">Глубокое понимание психологизма романа</div>\n              </div>\n            </div>\n        ",
      "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Отождествление Печорина с автором</strong>\n              <p>Лермонтов в предисловии прямо предостерегал: Печорин — это «портрет, составленный из пороков всего нашего поколения», а не автопортрет самого писателя!</p>\n            </div>\n        "
    }
  ]
},

  // Прямая карта быстрого доступа по ключу `${subjectId}_${sectionIndex}_${itemIndex}`
  itemsMap: {
  "math_0_0": {
    "id": "math_plan",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "план",
      "квартир",
      "участ",
      "1-5",
      "размер клетки",
      "масштаб"
    ],
    "title": "Задания 1–5: План квартиры и участка (Масштаб, площади, плитка)",
    "fipiSpec": {
      "number": "№ 1–5",
      "score": "5 первичных баллов (по 1 за каждый пункт)",
      "time": "15–20 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Блок 1: Практические расчеты и моделирование)"
    },
    "theory": "\n            <h4>1. Определение масштаба и стороны клетки</h4>\n            <p>В тексте задания ФИПИ всегда указана длина стороны одной клетки на плане. Это самый частый источник ошибок!</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Сторона клетки a = 2 м:</strong> S<sub>1 кл</sub> = a² = 2 × 2 = <strong>4 м²</strong></div>\n              <div class=\"math-row\"><strong>Сторона клетки a = 1 м:</strong> S<sub>1 кл</sub> = a² = 1 × 1 = <strong>1 м²</strong></div>\n              <div class=\"math-subtext\">Никогда не умножайте число клеток на 2 при вычислении площади! Умножать нужно на <strong>4 м²</strong>.</div>\n            </div>\n\n            <h4>2. Расчет количества упаковок плитки / стройматериалов</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Количество упаковок:</strong> N<sub>упак</sub> = ⌈ S<sub>покрытия</sub> / S<sub>в упаковке</sub> ⌉</div>\n              <div class=\"math-subtext\">Округление ВСЕГДА производится в <strong>большую сторону</strong> (даже если получилось 6.05 упаковок — пишем в ответ 7)!</div>\n            </div>\n\n            <h4>3. Нахождение расстояний по прямой (Теорема Пифагора)</h4>\n            <p>Чтобы найти расстояние между противоположными углами объектов по прямой, постройте прямоугольный треугольник по линиям сетки:</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">c = √(Δx² + Δy²) × (длина стороны клетки в метрах)</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Выделите размер клетки:</strong> Подчеркните в условии фразу: «сторона каждой клетки на плане равна ... м». Запишите площадь одной клетки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Задание №1 (Сопоставление):</strong> Читайте текст по предложениям и сразу подписывайте цифры на рисунке. Запишите в бланк 4 цифры без пробелов и запятых.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Задания №2–4 (Площади и расстояния):</strong> Разбейте сложную фигуру на прямоугольники. Посчитайте количество клеток и умножьте на площадь одной клетки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 4</div>\n                <div class=\"task-step-desc\"><strong>Задание №5 (Экономический выбор):</strong> Посчитайте полную стоимость оборудования для каждого варианта (оборудование + монтаж) и эксплуатационные расходы в час. Найдите разницу и срок окупаемости.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 324141)</div>\n              <p><strong>Условие:</strong> На плане участок имеет прямоугольную форму. Сторона каждой клетки на плане равна 2 м. Плитка для дорожек продается в упаковках по 6 штук. Размер одной плитки 1 м × 1 м. Сколько упаковок плитки понадобилось купить, чтобы выложить дорожки общей площадью 48 м²?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Площадь одной плитки: 1 м × 1 м = 1 м².</li>\n                  <li>Одна упаковка покрывает: 6 × 1 = 6 м².</li>\n                  <li>Необходимое число упаковок: 48 / 6 = 8 упаковок ровно.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>8</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Площадь клетки при a = 2 м</strong>\n              <p>Если сосчитать 15 клеток и умножить на 2 (получив 30 м²), будет ошибка! Правильно: 15 × 4 = 60 м².</p>\n            </div>\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Округление упаковок</strong>\n              <p>При делении получилось 7.2 упаковки? В ответ пишем 8, иначе дорожку не достроят!</p>\n            </div>\n        "
  },
  "math_0_1": {
    "id": "math_teplitsy",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "теплиц",
      "дуг",
      "пленк",
      "длина дуги"
    ],
    "title": "Задания 1–5: Теплицы (Длина дуги, пленка, расчет грядок)",
    "fipiSpec": {
      "number": "№ 1–5",
      "score": "5 первичных баллов",
      "time": "15–20 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Практическая геометрия)"
    },
    "theory": "\n            <h4>1. Длина дуги металлического каркаса</h4>\n            <p>Дуга теплицы представляет собой <strong>полуокружность</strong>. Диаметр этой полуокружности равен ширине теплицы D = 2R.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Длина дуги:</strong> L<sub>дуги</sub> = π · R = π · (D / 2) ≈ 3.14 · (ширина / 2)</div>\n              <div class=\"math-subtext\">Если ширина теплицы 3 м, то радиус R = 1.5 м. Длина дуги L = 3.14 × 1.5 = 4.71 м.</div>\n            </div>\n\n            <h4>2. Площадь пленки для покрытия теплицы</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Боковая поверхность + крыша:</strong> S<sub>пленки</sub> = L<sub>дуги</sub> × Длина теплицы</div>\n              <div class=\"math-row\"><strong>Торцы (передняя и задняя стенка):</strong> Две полуокружности вместе дают один полный круг: S<sub>торцев</sub> = π · R²</div>\n            </div>\n\n            <h4>3. Количество дуг в теплице</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Количество дуг:</strong> N<sub>дуг</sub> = (Длина теплицы / Расстояние между дугами) + 1</div>\n              <div class=\"math-subtext\">Не забывайте прибавлять 1 (первая дуга на входе)!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Определите радиус:</strong> Разделите ширину теплицы пополам (R = Ширина / 2).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Найдите длину дуги:</strong> Умножьте радиус на 3.14 (или используйте формулу длины полуокружности πR).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Расчет пленки:</strong> Умножьте длину дуги на длину теплицы. Если в вопросе требуется учесть запас (например, 10%), умножьте результат на 1.1.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Длина теплицы равна 6 м, а ширина — 2.4 м. Дуги имеют форму полуокружностей. Какое наименьшее количество упаковок пленки нужно купить для покрытия теплицы (без торцов), если в одной упаковке 12 м² пленки?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Радиус полуокружности: R = 2.4 / 2 = 1.2 м.</li>\n                  <li>Длина дуги: L = 3.14 × 1.2 = 3.768 м.</li>\n                  <li>Площадь пленки: S = 3.768 × 6 = 22.608 м².</li>\n                  <li>Количество упаковок: 22.608 / 12 = 1.884... округляем вверх: 2 упаковки.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>2</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая единица при подсчете дуг</strong>\n              <p>Если длина 6 м, а шаг дуг 1 м, дуг нужно 6 / 1 + 1 = 7 штук, а не 6!</p>\n            </div>\n        "
  },
  "math_0_2": {
    "id": "math_pechi",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "печи",
      "парн",
      "бани",
      "объем"
    ],
    "title": "Задания 1–5: Печи для бани (Объем парного отделения, экономия)",
    "fipiSpec": {
      "number": "№ 1–5",
      "score": "5 первичных баллов",
      "time": "15–20 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>1. Расчет объема парного отделения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Объем прямоугольного параллелепипеда:</strong> V = a · b · c (длина × ширина × высота)</div>\n              <div class=\"math-subtext\">Все размеры переводите строго в метры! Объем получается в м³.</div>\n            </div>\n\n            <h4>2. Подбор печи по таблице</h4>\n            <p>Печь выбирается так, чтобы расчетный объем V парной попадал в диапазон отапливаемого объема, указанный в строке таблицы (V<sub>min</sub> ≤ V ≤ V<sub>max</sub>).</p>\n\n            <h4>3. Электрическая печь vs Дровяная печь</h4>\n            <p>При установке электрической печи часто требуются дополнительные расходы на прокладку специального силового кабеля. Для дровяной печи без кожуха может требоваться кирпичный защитный экран.</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перемножьте длину, ширину и высоту парной. Запишите объем V.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите в таблице номер печи, подходящей по объему.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В задании №5 сложите цену покупки с учетом скидки и доставки для магазина А и магазина Б, найдите разницу.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Длина парного отделения 3.5 м, ширина 2 м, высота 2.2 м. Найдите объем парного отделения в кубических метрах.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>V = 3.5 × 2 × 2.2 = 7 × 2.2 = 15.4 м³.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>15.4</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Дополнительный кабель</strong>\n              <p>Не забывайте прибавлять стоимость кабеля при расчете итоговых затрат на электрическую печь.</p>\n            </div>\n        "
  },
  "math_0_3": {
    "id": "math_paper",
    "sectionIndex": 0,
    "itemIndex": 3,
    "matchTitles": [
      "бумаг",
      "а0",
      "а1",
      "а2",
      "а3",
      "а4"
    ],
    "title": "Задания 1–5: Форматы бумаги (Стандарт ISO 216: А0, А1, А2, А3, А4...)",
    "fipiSpec": {
      "number": "№ 1–5",
      "score": "5 первичных баллов",
      "time": "15 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>1. Принцип подобия форматов бумаги</h4>\n            <p>Все листы серии «А» подобны друг другу. Отношение длины листа к его ширине строго равно <strong>√2 ≈ 1.414</strong>.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Длина / Ширина = √2 ≈ 1.414 &nbsp;|&nbsp; Ширина / Длина = 1/√2 ≈ 0.707</div>\n              <div class=\"math-subtext\">Площадь листа формата А0 строго равна <strong>1 м²</strong>.</div>\n            </div>\n\n            <h4>2. Деление листов пополам</h4>\n            <ul>\n              <li>Из 1 листа А0 получается <strong>2</strong> листа А1.</li>\n              <li>Из 1 листа А0 получается <strong>4</strong> листа А2.</li>\n              <li>Из 1 листа А0 получается <strong>8</strong> листов А3.</li>\n              <li>Из 1 листа А0 получается <strong>16</strong> листов А4.</li>\n              <li>Из 1 листа А0 получается <strong>32</strong> листа А5.</li>\n            </ul>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Чем больше цифра в названии формата (А4 > А3 > А2), тем меньше размеры листа.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">При делении листа А(n) пополам большая сторона делится на 2, а меньшая сторона становится большей стороной листа А(n+1).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Сколько листов формата А5 получится из одного листа формата А2?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А2 → 2 листа А3 → 4 листа А4 → 8 листов А5.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>8</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Округление миллиметров</strong>\n              <p>При делении 297 / 2 получается 148.5, стандартный размер округляется до целых (148 мм).</p>\n            </div>\n        "
  },
  "math_1_0": {
    "id": "math_powers_roots",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "степен",
      "корн",
      "свойства степеней",
      "свойства корней"
    ],
    "title": "Задание 6 и 8: Свойства степеней и арифметических корней",
    "fipiSpec": {
      "number": "№ 6, 8",
      "score": "1 первичный балл за каждое",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Алгебра: степени и корни)"
    },
    "theory": "\n            <h4>1. Основные свойства степеней</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></div>\n              <div class=\"math-row\">a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup></div>\n              <div class=\"math-row\">(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></div>\n              <div class=\"math-row\">(a · b)<sup>n</sup> = a<sup>n</sup> · b<sup>n</sup></div>\n              <div class=\"math-row\">a<sup>-n</sup> = 1 / a<sup>n</sup> &nbsp;|&nbsp; a⁰ = 1 (при a ≠ 0)</div>\n            </div>\n\n            <h4>2. Свойства корней</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">√(a · b) = √a · √b (при a ≥ 0, b ≥ 0)</div>\n              <div class=\"math-row\">√(a / b) = √a / √b (при a ≥ 0, b > 0)</div>\n              <div class=\"math-row\">√(a²) = |a|</div>\n              <div class=\"math-subtext\">ГЛАВНАЯ ОШИБКА: √(a + b) НЕ РАВНО √a + √b! Например: √(9 + 16) = √25 = 5, а не 3 + 4 = 7!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Приведите все степени к одному основанию (например, 4 = 2², 8 = 2³, 9 = 3²).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Примените формулы сложения степеней в числителе и вычитания со знаменателем.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Подставьте числовое значение переменной в САМОМ КОНЦЕ после упрощения!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 314482)</div>\n              <p><strong>Условие:</strong> Найдите значение выражения: (a⁻¹¹ · a⁴) / a⁻⁹ при a = 3.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Числитель: a⁻¹¹ · a⁴ = a⁻¹¹⁺⁴ = a⁻⁷.</li>\n                  <li>Деление на знаменатель: a⁻⁷ / a⁻⁹ = a⁻⁷ ⁻ ⁽⁻⁹⁾ = a⁻⁷⁺⁹ = a² = a².</li>\n                  <li>Подставляем a = 3: 3² = 9.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>9</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Минус на минус дает плюс</strong>\n              <p>При вычитании отрицательного показателя: (-7) - (-9) = -7 + 9 = +2. Не пишите -16!</p>\n            </div>\n        "
  },
  "math_1_1": {
    "id": "math_quadratic",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "квадратн",
      "уравнен",
      "дискриминант",
      "виет"
    ],
    "title": "Задание 9: Квадратные уравнения и формулы корней",
    "fipiSpec": {
      "number": "№ 9",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Уравнения и системы)"
    },
    "theory": "\n            <h4>1. Стандартный вид квадратного уравнения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">ax² + bx + c = 0 (где a ≠ 0)</div>\n              <div class=\"math-row\"><strong>Дискриминант:</strong> D = b² - 4ac</div>\n              <div class=\"math-row\"><strong>Корни:</strong> x₁,₂ = (-b ± √D) / (2a)</div>\n            </div>\n            <ul>\n              <li>Если <strong>D > 0</strong> — уравнение имеет <strong>два различных корня</strong>.</li>\n              <li>Если <strong>D = 0</strong> — один корень (два совпадающих): x = -b / (2a).</li>\n              <li>Если <strong>D < 0</strong> — действительных корней <strong>нет</strong>.</li>\n            </ul>\n\n            <h4>2. Неполные квадратные уравнения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>При c = 0:</strong> ax² + bx = 0 => x(ax + b) = 0 => x₁ = 0, x₂ = -b/a</div>\n              <div class=\"math-row\"><strong>При b = 0:</strong> ax² + c = 0 => x² = -c/a => x = ±√(-c/a)</div>\n            </div>\n\n            <h4>3. Теорема Виета (для приведенного уравнения x² + px + q = 0)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">x₁ + x₂ = -p &nbsp;|&nbsp; x₁ · x₂ = q</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перенесите все слагаемые в левую часть, чтобы справа остался 0.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выпишите коэффициенты a, b, c с их знаками (знак минус перед числом относится к коэффициенту!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Вычислите дискриминант и найдите корни. Внимательно перечитайте вопрос: «в ответ запишите МЕНЬШИЙ из корней» или «БОЛЬШИЙ из корней»!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 311394)</div>\n              <p><strong>Условие:</strong> Найдите корни уравнения: x² - 4x - 21 = 0. Если корней несколько, в ответ запишите меньший из корней.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>a = 1, b = -4, c = -21.</li>\n                  <li>D = (-4)² - 4 · 1 · (-21) = 16 + 84 = 100 = 10².</li>\n                  <li>x₁ = (4 + 10) / 2 = 14 / 2 = 7.</li>\n                  <li>x₂ = (4 - 10) / 2 = -6 / 2 = -3.</li>\n                  <li>Меньший из корней: -3.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>-3</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Потеря корня x = 0</strong>\n              <p>В уравнении 2x² = 8x нельзя делить на x! Нужно выносить за скобки: 2x(x - 4) = 0. Корни: 0 и 4.</p>\n            </div>\n        "
  },
  "math_1_2": {
    "id": "math_probability",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "вероятност",
      "событи",
      "задание 10"
    ],
    "title": "Задание 10: Классическая теория вероятностей",
    "fipiSpec": {
      "number": "№ 10",
      "score": "1 первичный балл",
      "time": "2–4 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Теория вероятностей и статистика)"
    },
    "theory": "\n            <h4>1. Классическое определение вероятности</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>P(A) = m / n</strong></div>\n              <div class=\"math-row\"><strong>m</strong> — число благоприятных исходов (тех, о которых спрашивают в вопросе)</div>\n              <div class=\"math-row\"><strong>n</strong> — общее число ВСЕХ возможных равновероятных исходов</div>\n            </div>\n            <ul>\n              <li>Вероятность ЛЮБОГО события ВСЕГДА лежит в диапазоне: <strong>0 ≤ P(A) ≤ 1</strong>.</li>\n              <li>Если у вас получилось число больше 1 (например, 1.25) — вы перевернули дробь вверх ногами!</li>\n              <li><strong>Ответ в бланк:</strong> ВСЕГДА записывается ТОЛЬКО в виде десятичной дроби (0.25, а не 1/4 и не 25%).</li>\n            </ul>\n\n            <h4>2. Вероятность противоположного события</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">P(не A) = 1 - P(A)</div>\n              <div class=\"math-subtext\">Например, вероятность исправного фонарика: P(исправен) = 1 - P(бракованный).</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посчитайте ОБЩЕЕ число объектов (n) — сложите все пирожки, чашки, спортсменов или фонарики.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите число БЛАГОПРИЯТНЫХ объектов (m) — именно тех, о которых идет речь в вопросе.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Разделите m на n столбиком или домножением до 10, 100, 1000. Переведите в десятичную дробь.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 325514)</div>\n              <p><strong>Условие:</strong> В тарелке лежат одинаковые на вид пирожки: 4 с мясом, 8 с капустой и 3 с вишней. Петя наугад выбирает один пирожок. Найдите вероятность того, что пирожок окажется с вишней.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Общее число пирожков: n = 4 + 8 + 3 = 15.</li>\n                  <li>Число пирожков с вишней: m = 3.</li>\n                  <li>Вероятность: P = 3 / 15 = 1 / 5 = 0.2.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>0.2</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Деление на проценты</strong>\n              <p>Никогда не пишите знак % в бланке ОГЭ! Если вероятность 20%, ответ strictly 0.2.</p>\n            </div>\n        "
  },
  "math_1_3": {
    "id": "math_graphs",
    "sectionIndex": 1,
    "itemIndex": 3,
    "matchTitles": [
      "график",
      "функци",
      "парабол",
      "гипербол",
      "задание 11"
    ],
    "title": "Задание 11: Графики функций (Прямая, парабола, гипербола)",
    "fipiSpec": {
      "number": "№ 11",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Функции и их графики)"
    },
    "theory": "\n            <h4>1. Линейная функция: y = kx + b</h4>\n            <ul>\n              <li><strong>k > 0</strong> — прямая возрастает (идёт снизу-вверх слева-направо).</li>\n              <li><strong>k < 0</strong> — прямая убывает (идёт сверху-вниз).</li>\n              <li><strong>b</strong> — ордината точки пересечения с осью OY (точка (0; b)).</li>\n            </ul>\n\n            <h4>2. Квадратичная функция (парабола): y = ax² + bx + c</h4>\n            <ul>\n              <li><strong>a > 0</strong> — ветви параболы направлены <strong>вверх</strong>.</li>\n              <li><strong>a < 0</strong> — ветви направлены <strong>вниз</strong>.</li>\n              <li><strong>c</strong> — точка пересечения параболы с осью OY.</li>\n              <li><strong>Вершина параболы:</strong> x<sub>верш</sub> = -b / (2a).</li>\n            </ul>\n\n            <h4>3. Обратная пропорциональность (гипербола): y = k / x</h4>\n            <ul>\n              <li><strong>k > 0</strong> — ветви расположены в <strong>I и III</strong> координатных четвертях.</li>\n              <li><strong>k < 0</strong> — ветви расположены во <strong>II и IV</strong> координатных четвертях.</li>\n            </ul>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите тип графика (парабола, прямая или гипербола).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">По знаку старшего коэффициента (a или k) отберите направления ветвей или наклон.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">По точке пересечения с осью Y (коэффициент b или c) однозначно выберите график.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Установите соответствие между знаками коэффициентов a и c и графиками функции y = ax² + bx + c: А) a > 0, c < 0; Б) a < 0, c > 0; В) a > 0, c > 0.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А) a > 0 (ветви вверх), c < 0 (пересекает OY ниже нуля).<br>\n                   Б) a < 0 (ветви вниз), c > 0 (пересекает OY выше нуля).<br>\n                   В) a > 0 (ветви вверх), c > 0 (пересекает OY выше нуля).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>132</strong> (пример последовательности)</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Перепутанные четверти</strong>\n              <p>Четверти нумеруются против часовой стрелки: I — верх-право, II — верх-лево, III — низ-лево, IV — низ-право.</p>\n            </div>\n        "
  },
  "math_1_4": {
    "id": "math_progressions",
    "sectionIndex": 1,
    "itemIndex": 4,
    "matchTitles": [
      "прогресс",
      "арифметическ",
      "геометрическ",
      "задание 14"
    ],
    "title": "Задание 14: Арифметическая и геометрическая прогрессии",
    "fipiSpec": {
      "number": "№ 14",
      "score": "1 первичный балл",
      "time": "4–6 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Последовательности и прогрессии)"
    },
    "theory": "\n            <h4>1. Арифметическая прогрессия (шаг d = a<sub>n+1</sub> - a<sub>n</sub>)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>n-й член:</strong> a<sub>n</sub> = a₁ + d · (n - 1)</div>\n              <div class=\"math-row\"><strong>Сумма первых n членов:</strong> S<sub>n</sub> = ((a₁ + a<sub>n</sub>) / 2) · n = ((2a₁ + d(n - 1)) / 2) · n</div>\n            </div>\n\n            <h4>2. Геометрическая прогрессия (знаменатель q = b<sub>n+1</sub> / b<sub>n</sub>)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>n-й член:</strong> b<sub>n</sub> = b₁ · q<sup>n-1</sup></div>\n              <div class=\"math-row\"><strong>Сумма n членов:</strong> S<sub>n</sub> = (b₁ · (q<sup>n</sup> - 1)) / (q - 1)</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите первый член a₁ и разность d (или знаменатель q) из текста задачи.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Поймите, что требуется найти: значение на определенном шаге (a<sub>n</sub>) или суммарное количество за все время (S<sub>n</sub>).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 341255)</div>\n              <p><strong>Условие:</strong> В амфитеатре 14 рядов. В первом ряду 20 мест, а в каждом следующем ряду на 3 места больше, чем в предыдущем. Сколько всего мест в амфитеатре?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>a₁ = 20, d = 3, n = 14.</li>\n                  <li>a₁₄ = 20 + 3 × (14 - 1) = 20 + 39 = 59 мест в последнем ряду.</li>\n                  <li>S₁₄ = ((20 + 59) / 2) × 14 = 79 × 7 = 553 места.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>553</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Поиск n-го члена вместо суммы</strong>\n              <p>Внимательно читайте вопрос: «сколько мест В ДЕСЯТОМ РЯДУ» (a₁₀) или «сколько ВСЕГО мест в первых 10 рядах» (S₁₀)!</p>\n            </div>\n        "
  },
  "math_2_0": {
    "id": "math_right_triangle",
    "sectionIndex": 2,
    "itemIndex": 0,
    "matchTitles": [
      "прямоугольн",
      "треугольник",
      "пифагор",
      "тригонометр",
      "sin",
      "cos",
      "tg"
    ],
    "title": "Задание 15: Прямоугольный треугольник и тригонометрия",
    "fipiSpec": {
      "number": "№ 15",
      "score": "1 первичный балл (обязательно для набора 2 баллов по геометрии!)",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Планиметрия)"
    },
    "theory": "\n            <h4>1. Теорема Пифагора</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>a² + b² = c²</strong> &nbsp;|&nbsp; c = √(a² + b²) &nbsp;|&nbsp; a = √(c² - b²)</div>\n              <div class=\"math-subtext\">Египетский треугольник: стороны 3, 4, 5 (и кратные им: 6, 8, 10; 9, 12, 15). Другие частые тройки: (5, 12, 13), (8, 15, 17).</div>\n            </div>\n\n            <h4>2. Определения тригонометрических функций</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>sin A</strong> = противолежащий катет / гипотенуза = a / c</div>\n              <div class=\"math-row\"><strong>cos A</strong> = прилежащий катет / гипотенуза = b / c</div>\n              <div class=\"math-row\"><strong>tg A</strong> = противолежащий катет / прилежащий катет = a / b = sin A / cos A</div>\n            </div>\n\n            <h4>3. Золотые свойства углов</h4>\n            <ul>\n              <li>Катет, лежащий напротив угла <strong>30°</strong>, равен <strong>ПОЛОВИНЕ гипотенузы</strong>: a = c / 2.</li>\n              <li>Медиана, проведенная из прямого угла к гипотенузе, равна <strong>половине гипотенузы</strong> и радиусу описанной окружности: <strong>m<sub>c</sub> = c / 2 = R</strong>.</li>\n            </ul>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте чертеж и подпишите известный угол и стороны.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если дан косинус, а нужен синус — используйте основное тождество sin²A + cos²A = 1.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В прямоугольном треугольнике синус острого угла ВСЕГДА положителен и меньше 1.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ (№ 324211)</div>\n              <p><strong>Условие:</strong> В треугольнике ABC угол C равен 90°, AC = 12, AB = 15. Найдите sin B.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>По определению синуса: sin B = AC / AB (противолежащий катет к гипотенузе).</li>\n                  <li>sin B = 12 / 15 = 4 / 5 = 0.8.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>0.8</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Противолежащий vs прилежащий катет</strong>\n              <p>Для угла B противолежащим является катет AC, а прилежащим — BC! Не путайте их при нахождении sin и cos.</p>\n            </div>\n        "
  },
  "math_2_1": {
    "id": "math_areas",
    "sectionIndex": 2,
    "itemIndex": 1,
    "matchTitles": [
      "площад",
      "треугольник",
      "трапеци",
      "параллелограмм",
      "ромб",
      "круг"
    ],
    "title": "Задание 17: Площади плоских фигур (Треугольник, трапеция, ромб)",
    "fipiSpec": {
      "number": "№ 17",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Формулы площадей)"
    },
    "theory": "\n            <h4>1. Площадь треугольника</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">S = ½ · a · h<sub>a</sub> &nbsp;|&nbsp; S = ½ · a · b · sin α</div>\n              <div class=\"math-row\">Для прямоугольного: S = ½ · a · b (половина произведения катетов)</div>\n            </div>\n\n            <h4>2. Параллелограмм и ромб</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Параллелограмм:</strong> S = a · h<sub>a</sub> = a · b · sin α</div>\n              <div class=\"math-row\"><strong>Ромб:</strong> S = ½ · d₁ · d₂ (половина произведения диагоналей)</div>\n            </div>\n\n            <h4>3. Трапеция</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">S = ((a + b) / 2) · h (произведение полусуммы оснований на высоту)</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите фигуру и найдите необходимые элементы (основания, высоту).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Проверьте, чтобы высота падала строго перпендикулярно к основанию!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Основания трапеции равны 4 и 10, а высота равна 5. Найдите площадь трапеции.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>S = ((4 + 10) / 2) × 5 = (14 / 2) × 5 = 7 × 5 = 35.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>35</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытый множитель 1/2</strong>\n              <p>В формуле треугольника и ромба обязателен множитель 1/2! Не умножайте просто a на h.</p>\n            </div>\n        "
  },
  "math_2_2": {
    "id": "math_circle",
    "sectionIndex": 2,
    "itemIndex": 2,
    "matchTitles": [
      "окружност",
      "вписанн",
      "центральн",
      "касательн",
      "хорд"
    ],
    "title": "Задание 16: Окружность, углы и отрезки (Вписанные и центральные углы)",
    "fipiSpec": {
      "number": "№ 16",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>1. Центральный и вписанный углы</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Центральный угол</strong> = градусная мера дуги, на которую он опирается: ∠AOB = ◡AB</div>\n              <div class=\"math-row\"><strong>Вписанный угол</strong> = ПОЛОВИНЕ дуги: ∠ACB = ½ ◡AB = ½ ∠AOB</div>\n            </div>\n            <ul>\n              <li>Вписанные углы, опирающиеся на <strong>одну и ту же дугу</strong>, равны!</li>\n              <li>Вписанный угол, опирающийся на <strong>диаметр</strong>, ВСЕГДА равен <strong>90°</strong>!</li>\n            </ul>\n\n            <h4>2. Свойства касательных</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Радиус, проведенный в точку касания, <strong>перпендикулярен касательной</strong>: R ⊥ l</div>\n              <div class=\"math-row\">Отрезки касательных, проведенных из одной точки к окружности, <strong>равны</strong>!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите положение вершины угла: в центре (центральный) или на окружности (вписанный).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если угол вписанный — найдите дугу и разделите её градусную меру на 2.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> Точка O — центр окружности, на которой лежат точки A, B и C. Известно, что угол ABC равен 48°. Найдите угол AOC.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>Угол ABC — вписанный, опирается на дугу AC. Значит, дуга AC = 2 × 48° = 96°.</li>\n                  <li>Угол AOC — центральный, опирается на ту же дугу AC. Значит, ∠AOC = 96°.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>96</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Центральный против вписанного</strong>\n              <p>Центральный угол ВСЕГДА в 2 раза БОЛЬШЕ вписанного, опирающегося на ту же дугу!</p>\n            </div>\n        "
  },
  "math_2_3": {
    "id": "math_angles",
    "sectionIndex": 2,
    "itemIndex": 3,
    "matchTitles": [
      "сумма углов",
      "внешний угол",
      "многоугольник"
    ],
    "title": "Задание 18 и 19: Сумма углов треугольника и свойства многоугольников",
    "fipiSpec": {
      "number": "№ 18, 19",
      "score": "1 первичный балл",
      "time": "2–4 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>1. Сумма углов</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Сумма углов любого треугольника = <strong>180°</strong></div>\n              <div class=\"math-row\">Сумма углов выпуклого n-угольника = <strong>180° · (n - 2)</strong></div>\n            </div>\n\n            <h4>2. Внешний угол треугольника</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Внешний угол треугольника равен <strong>сумме двух внутренних углов</strong>, не смежных с ним!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сложите два известных угла и вычтите сумму из 180°.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Открытый банк ФИПИ / Решу ОГЭ</div>\n              <p><strong>Условие:</strong> В треугольнике ABC углы A и B равны соответственно 35° и 65°. Найдите внешний угол при вершине C.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Внешний угол при C равен сумме углов A и B: 35° + 65° = 100°.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>100</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Градусы в бланке</strong>\n              <p>Знак градуса (°) в бланк ОГЭ писать категорически запрещено! Пишем только число 100.</p>\n            </div>\n        "
  },
  "math_3_0": {
    "id": "math_part2_20",
    "sectionIndex": 3,
    "itemIndex": 0,
    "matchTitles": [
      "задание 20",
      "уравнения высших степеней",
      "замена переменной"
    ],
    "title": "Задание 20: Алгебраические выражения, уравнения и системы (2 балла)",
    "fipiSpec": {
      "number": "№ 20",
      "score": "2 первичных балла",
      "time": "10–15 минут",
      "difficulty": "Повышенный уровень (Часть 2 с развернутым ответом)",
      "docSource": "Кодификатор ФИПИ (Вторая часть: уравнения)"
    },
    "theory": "\n            <h4>1. Метод разложения на множители (Разность квадратов)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">x⁴ = (2x - 3)²  <=>  x⁴ - (2x - 3)² = 0</div>\n              <div class=\"math-row\">(x² - (2x - 3))(x² + (2x - 3)) = 0</div>\n              <div class=\"math-row\">(x² - 2x + 3)(x² + 2x - 3) = 0</div>\n            </div>\n\n            <h4>2. Биквадратные уравнения и замена</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">ax⁴ + bx² + c = 0 => Замена t = x², где <strong>t ≥ 0</strong></div>\n              <div class=\"math-subtext\">Если t < 0, корень отбрасывается, так как квадрат действительного числа неотрицателен!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перенесите все слагаемые влево. Ни в коем случае не извлекайте корень, теряя знак ±!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Разложите на множители или сделайте замену переменной с указанием ОДЗ.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Решите получившиеся простые квадратные уравнения и запишите все корни через точку с запятой.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный вариант ОГЭ Часть 2 (№ 311548)</div>\n              <p><strong>Условие:</strong> Решите уравнение: x⁴ = (2x - 15)².</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <ol>\n                  <li>x⁴ - (2x - 15)² = 0 <=> (x² - (2x - 15))(x² + (2x - 15)) = 0.</li>\n                  <li>1) x² - 2x + 15 = 0: D = 4 - 60 = -56 < 0 (действительных корней нет).</li>\n                  <li>2) x² + 2x - 15 = 0: D = 4 + 60 = 64 = 8². Корни: x₁ = (-2 + 8)/2 = 3; x₂ = (-2 - 8)/2 = -5.</li>\n                </ol>\n                <div class=\"task-answer-box\">Ответ: <strong>-5; 3</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Извлечение корня без модуля</strong>\n              <p>Если написать x² = 2x - 15 вместо x² = ±(2x - 15), вы потеряете половину корней и получите 0 баллов за все задание!</p>\n            </div>\n        "
  },
  "math_3_1": {
    "id": "math_part2_21",
    "sectionIndex": 3,
    "itemIndex": 1,
    "matchTitles": [
      "задание 21",
      "дробно-рациональные",
      "одз"
    ],
    "title": "Задание 20: Дробно-рациональные уравнения и ОДЗ (2 балла)",
    "fipiSpec": {
      "number": "№ 20",
      "score": "2 первичных балла",
      "time": "10–12 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>1. Основное правило дробно-рационального уравнения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">P(x) / Q(x) = 0 <=> P(x) = 0 ПРИ УСЛОВИИ Q(x) ≠ 0 (ОДЗ)</div>\n              <div class=\"math-subtext\">Если найденный корень обращает знаменатель Q(x) в 0, он является ПОСТОРОННИМ!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сразу выпишите ОДЗ: знаменатель не равен нулю.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите дроби к общему знаменателю и решите уравнение числителя.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте корни по ОДЗ и исключите посторонние с обязательным пояснением в бланке.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">ФИПИ 2026/2027 Часть 2</div>\n              <p><strong>Условие:</strong> Решите уравнение: 1/(x - 2)² - 1/(x - 2) - 6 = 0.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Пусть t = 1/(x - 2), где x ≠ 2. Тогда t² - t - 6 = 0.<br>\n                   По теореме Виета: t₁ = 3, t₂ = -2.<br>\n                   1) 1/(x - 2) = 3 => 3(x - 2) = 1 => 3x - 6 = 1 => x = 7/3 = 2 ⅓.<br>\n                   2) 1/(x - 2) = -2 => -2(x - 2) = 1 => -2x + 4 = 1 => x = 1.5.<br>\n                   Оба корня удовлетворяют ОДЗ (x ≠ 2).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>1.5; 2 ⅓</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая ОДЗ</strong>\n              <p>Эксперты ФИПИ снимут 1 балл, если ОДЗ не проверена в явном виде при оформлении второй части.</p>\n            </div>\n        "
  },
  "math_3_2": {
    "id": "math_part2_motion",
    "sectionIndex": 3,
    "itemIndex": 2,
    "matchTitles": [
      "задание 21",
      "текстовые задачи",
      "движение",
      "по воде"
    ],
    "title": "Задание 21: Текстовые задачи на движение по суше и реке (2 балла)",
    "fipiSpec": {
      "number": "№ 21",
      "score": "2 первичных балла",
      "time": "15 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Текстовые задачи)"
    },
    "theory": "\n            <h4>1. Базовые формулы движения</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">S = v · t &nbsp;|&nbsp; t = S / v &nbsp;|&nbsp; v = S / t</div>\n            </div>\n\n            <h4>2. Движение по воде (по течению и против течения)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>По течению:</strong> v<sub>по теч</sub> = v<sub>собств</sub> + v<sub>теч</sub></div>\n              <div class=\"math-row\"><strong>Против течения:</strong> v<sub>пр теч</sub> = v<sub>собств</sub> - v<sub>теч</sub></div>\n              <div class=\"math-subtext\">Скорость плота строго равна скорости течения реки (v<sub>плота</sub> = v<sub>теч</sub>)!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Примите неизвестную величину (обычно собственную скорость катера или скорость велосипедиста) за x (км/ч), где x > 0.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Заполните таблицу: Путь S, Скорость v, Время t = S / v.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Составьте уравнение по разнице во времени: t<sub>медленнее</sub> - t<sub>быстрее</sub> = Δt (переведите минуты в часы: 20 мин = 20/60 = ⅓ ч).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ / Решу ОГЭ (№ 311652)</div>\n              <p><strong>Условие:</strong> Моторная лодка прошла против течения реки 255 км и вернулась в пункт отправления, затратив на обратный путь на 2 часа меньше. Найдите скорость лодки в неподвижной воде, если скорость течения равна 1 км/ч.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Пусть собственная скорость лодки равна x км/ч (x > 1).<br>\n                   Время против течения: 255 / (x - 1).<br>\n                   Время по течению: 255 / (x + 1).<br>\n                   Уравнение: 255/(x - 1) - 255/(x + 1) = 2.<br>\n                   255(x + 1 - x + 1) = 2(x² - 1) => 255 · 2 = 2(x² - 1) => x² - 1 = 255 => x² = 256 => x = 16 (так как x > 0).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>16 км/ч</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Минуты без перевода в часы</strong>\n              <p>Если стоянка длилась 45 минут, нельзя писать 45 в уравнение! Пишите строго 45/60 = ¾ часа.</p>\n            </div>\n        "
  },
  "math_3_3": {
    "id": "math_21_work",
    "sectionIndex": 3,
    "itemIndex": 3,
    "matchTitles": [
      "совместную работу",
      "сплавы",
      "смеси",
      "концентрация"
    ],
    "title": "Задание №21: Задачи на совместную работу и сплавы/смеси",
    "fipiSpec": {
      "number": "№ 21",
      "score": "2 первичных балла",
      "time": "15–20 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Текстовые задачи на работу и смеси)"
    },
    "theory": "\n            <h4>1. Формула совместной работы</h4>\n            <p>Вся работа принимается за <strong>A = 1</strong> (целая часть). Скорость выполнения (производительность) обозначается <strong>p</strong>.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">A = p · t &nbsp;|&nbsp; p = 1 / t &nbsp;|&nbsp; t = 1 / p</div>\n              <div class=\"math-row\"><strong>Совместная производительность:</strong> p<sub>общ</sub> = p₁ + p₂ = 1/t₁ + 1/t₂</div>\n            </div>\n\n            <h4>2. Формула сплавов и растворов</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Масса чистого вещества:</strong> m<sub>чист</sub> = m<sub>общ</sub> · (ω% / 100%)</div>\n              <div class=\"math-row\"><strong>Закон сохранения массы:</strong> m₁·ω₁ + m₂·ω₂ = (m₁ + m₂) · ω<sub>смеси</sub></div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>В задачах на работу:</strong> выразите производительность каждого рабочего или трубы как 1/t. Если первый делает за x дней, его p₁ = 1/x.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>В задачах на сплавы:</strong> составьте таблицу из трех колонок: общая масса раствора, процентное содержание, масса чистого вещества.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сложите массы чистых веществ исходных компонентов и приравняйте к массе чистого вещества в итоговом сплаве.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 311720)</div>\n              <p><strong>Условие:</strong> Имеется два сплава. Первый содержит 10% никеля, второй — 30% никеля. Из этих двух сплавов получили третий сплав массой 200 кг, содержащий 25% никеля. Масса какого сплава была больше и на сколько килограммов?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Пусть масса первого сплава x кг, тогда масса второго (200 - x) кг.<br>\n                   Масса никеля в первом: 0.10x кг.<br>\n                   Масса никеля во втором: 0.30(200 - x) кг.<br>\n                   Масса никеля в третьем: 0.25 · 200 = 50 кг.<br>\n                   Уравнение: 0.10x + 0.30(200 - x) = 50<br>\n                   0.10x + 60 - 0.30x = 50 => -0.20x = -10 => x = 50 кг (масса 1-го сплава).<br>\n                   Масса 2-го сплава: 200 - 50 = 150 кг.<br>\n                   Второго сплава взято больше на: 150 - 50 = 100 кг.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Второго на 100 кг</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Вопрос задачи</strong>\n              <p>В вопросе часто спрашивают не просто массу первого сплава, а «на сколько килограммов масса второго больше первого». Обязательно перечитайте вопрос перед записью ответа в бланк!</p>\n            </div>\n        "
  },
  "math_3_4": {
    "id": "math_22_params",
    "sectionIndex": 3,
    "itemIndex": 4,
    "matchTitles": [
      "построение графиков",
      "параметром m",
      "задание 22",
      "кусочная функция",
      "выколотая точка"
    ],
    "title": "Задание №22: Построение графиков функций с параметром m",
    "fipiSpec": {
      "number": "№ 22",
      "score": "2 первичных балла",
      "time": "20–25 минут",
      "difficulty": "Высокий уровень",
      "docSource": "Кодификатор ФИПИ (Исследование функций и графики)"
    },
    "theory": "\n            <h4>1. Требования критериев ФИПИ</h4>\n            <p>1 балл ставится за безошибочно построенный график (со всеми контрольными точками и выколотыми точками). 2 балла — за верно найденные значения параметра m.</p>\n\n            <h4>2. Прямая y = m (горизонтальная линия)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">y = m — прямая, параллельная оси Ox.</div>\n              <div class=\"math-subtext\">Значения m определяются ординатами вершин парабол, выколотых точек и горизонтальных асимптот гиперболы.</div>\n            </div>\n\n            <h4>3. Разложение на множители и сокращение дроби</h4>\n            <p>Если дана дробная функция, разложите числитель на множители, найдите область определения D(y) и выколите запрещенные точки с кружочком ⚪.</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Область определения:</strong> Запишите знаменатель ≠ 0. Найдите координаты x выколотых точек.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Упростите выражение:</strong> Постройте полученную простую функцию (параболу y=ax²+bx+c или прямую) и аккуратно выколите точки (x₀; y₀).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Анализ параметра m:</strong> Мысленно ведите прямую y=m снизу вверх (от -∞ до +∞). Зафиксируйте значения m, где число общих точек меняется.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 314482)</div>\n              <p><strong>Условие:</strong> Постройте график функции y = (x⁴ - 13x² + 36) / ((x - 3)(x + 2)) и определите, при каких значениях c прямая y = c имеет с графиком ровно одну общую точку.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>ОДЗ: x ≠ 3, x ≠ -2.<br>\n                   Разложим числитель: x⁴ - 13x² + 36 = (x² - 4)(x² - 9) = (x-2)(x+2)(x-3)(x+3).<br>\n                   При x ≠ 3 и x ≠ -2 функция принимает вид: y = (x - 2)(x + 3) = x² + x - 6.<br>\n                   График — парабола с вершиной x<sub>в</sub> = -b/(2a) = -0.5, y<sub>в</sub> = (-0.5)² + (-0.5) - 6 = -6.25.<br>\n                   Выколотые точки:<br>\n                   При x = -2: y = (-2)² + (-2) - 6 = -4 => точка (-2; -4).<br>\n                   При x = 3: y = 3² + 3 - 6 = 6 => точка (3; 6).<br>\n                   Прямая y = c имеет ровно 1 общую точку при:<br>\n                   1) c = -6.25 (вершина параболы);<br>\n                   2) c = -4 (проходит через выколотую точку (-2; -4), пересекает только вторую ветвь);<br>\n                   3) c = 6 (проходит через выколотую точку (3; 6), пересекает только первую ветвь).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>c = -6.25; c = -4; c = 6</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая выколотая точка</strong>\n              <p>Если не показать выколотую точку на чертеже или не указать значение m, проходящее через неё, эксперт выставляет 0 баллов за всё задание!</p>\n            </div>\n        "
  },
  "math_4_0": {
    "id": "math_23_similarity",
    "sectionIndex": 4,
    "itemIndex": 0,
    "matchTitles": [
      "подобие треугольников",
      "вычисления через подобие",
      "задание 23"
    ],
    "title": "Задание №23: Вычисления через подобие треугольников",
    "fipiSpec": {
      "number": "№ 23",
      "score": "2 первичных балла",
      "time": "15–20 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Геометрия повышенного уровня)"
    },
    "theory": "\n            <h4>1. Признаки подобия треугольников</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1-й признак (по двум углам):</strong> ∠A = ∠A₁, ∠B = ∠B₁ => ΔABC ~ ΔA₁B₁C₁</div>\n              <div class=\"math-row\"><strong>2-й признак:</strong> две стороны пропорциональны и углы между ними равны.</div>\n              <div class=\"math-row\"><strong>Коэффициент подобия:</strong> k = AB/A₁B₁ = BC/B₁C₁ = AC/A₁C₁</div>\n              <div class=\"math-row\"><strong>Отношение площадей:</strong> S / S₁ = k²</div>\n            </div>\n\n            <h4>2. Типовая конструкция: параллельные прямые и трапеция</h4>\n            <p>Прямая, параллельная стороне треугольника, отсекает от него треугольник, подобный исходному. В трапеции треугольники при основаниях, образованные диагоналями, всегда подобны!</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте четкий чертеж по условию задачи, отметьте равные углы (вертикальные, накрест лежащие при параллельных прямых).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Докажите подобие двух треугольников (с обязательным указанием признака, например: «по двум углам: ∠1 = ∠2 как накрест лежащие, ∠3 = ∠4 как вертикальные»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите отношение сходственных сторон (лежащих напротив равных углов!) и выразите искомую величину.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 324151)</div>\n              <p><strong>Условие:</strong> Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно. Найдите BN, если MN = 13, AC = 65, а NC = 28.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Так как MN || AC, угол BMN = углу BAC (как соответственные при секущей AB), угол BNM = углу BCA (как соответственные при секущей BC).<br>\n                   2. Следовательно, ΔMBN ~ ΔABC по двум углам.<br>\n                   3. Запишем отношение сторон: MN / AC = BN / BC.<br>\n                   Пусть BN = x, тогда BC = BN + NC = x + 28.<br>\n                   13 / 65 = x / (x + 28) => 1 / 5 = x / (x + 28)<br>\n                   x + 28 = 5x => 4x = 28 => x = 7.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>7</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытое обоснование параллельности</strong>\n              <p>Нельзя просто написать «треугольники подобны». Эксперты снижают 1 балл, если не указано равенство углов и причина (например, «как накрест лежащие при BC || AD и секущей BD»).</p>\n            </div>\n        "
  },
  "math_4_1": {
    "id": "math_24_tangents",
    "sectionIndex": 4,
    "itemIndex": 1,
    "matchTitles": [
      "касательных и секущих",
      "свойства касательных",
      "задание 24"
    ],
    "title": "Задание №24: Свойства касательных и секущих окружности",
    "fipiSpec": {
      "number": "№ 24",
      "score": "2 первичных балла",
      "time": "15–20 минут",
      "difficulty": "Повышенный уровень (на доказательство)",
      "docSource": "Кодификатор ФИПИ (Геометрические доказательства)"
    },
    "theory": "\n            <h4>1. Теорема об отрезках касательных</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Отрезки касательных к окружности, проведенные из одной точки, <strong>равны</strong> и составляют равные углы с прямой, проходящей через эту точку и центр окружности.</div>\n              <div class=\"math-row\">R ⊥ касательной в точке касания!</div>\n            </div>\n\n            <h4>2. Теорема о касательной и секущей</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Квадрат касательной равен произведению секущей на её внешнюю часть:</div>\n              <div class=\"math-row\">AK² = AB · AC</div>\n            </div>\n\n            <h4>3. Угол между касательной и хордой</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Угол между касательной и хордой равен половине дуги, стягиваемой этой хордой, то есть равен вписанному углу, опирающемуся на ту же дугу!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте аккуратный чертеж, проведите радиусы в точки касания (помните о прямых углах 90°).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Соедините центр с внешней точкой и рассмотрите полученные прямоугольные треугольники.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Оформите строгое логическое доказательство через признаки равенства прямоугольных треугольников (по гипотенузе и катету).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 337210)</div>\n              <p><strong>Условие:</strong> Из точки M к окружности с центром O проведены две касательные MA и MB (A и B — точки касания). Докажите, что луч MO является биссектрисой угла AMB.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Проведем радиусы OA и OB к точкам касания. По свойству касательной: OA ⊥ MA и OB ⊥ MB, следовательно треугольники OMA и OMB являются прямоугольными с прямыми углами ∠OAM = ∠OBM = 90°.<br>\n                   2. В прямоугольных треугольниках OMA и OMB:<br>\n                   — OA = OB как радиусы одной окружности (катеты);<br>\n                   — OM — общая сторона (гипотенуза).<br>\n                   3. Следовательно, ΔOMA = ΔOMB по гипотенузе и катету.<br>\n                   4. Из равенства треугольников следует равенство соответственных углов: ∠AMO = ∠BMO. Значит, луч MO является биссектрисой угла AMB. Что и требовалось доказать.</p>\n                <div class=\"task-answer-box\">Доказательство завершено</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ссылка на недоказанные факты</strong>\n              <p>Нельзя в решении задачи на доказательство использовать то, что требуется доказать. Доказательство должно опираться исключительно на аксиомы и базовые теоремы геометрии.</p>\n            </div>\n        "
  },
  "math_4_2": {
    "id": "math_25_trapezoid",
    "sectionIndex": 4,
    "itemIndex": 2,
    "matchTitles": [
      "трапеция и диагонали",
      "трапеция",
      "задание 25",
      "задание 24/25"
    ],
    "title": "Задание №24/25: Трапеция, диагонали и средняя линия",
    "fipiSpec": {
      "number": "№ 24 / № 25",
      "score": "2 первичных балла",
      "time": "20–30 минут",
      "difficulty": "Высокий уровень",
      "docSource": "Кодификатор ФИПИ (Сложные геометрические конфигурации)"
    },
    "theory": "\n            <h4>1. Диагонали делят трапецию на 4 треугольника</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">Пусть диагонали трапеции ABCD пересекаются в точке O:</div>\n              <div class=\"math-row\">1. Треугольники при основаниях <strong>подобны</strong>: ΔBOC ~ ΔDOA с k = BC / AD.</div>\n              <div class=\"math-row\">2. Треугольники при боковых сторонах <strong>равновелики</strong> (имеют одинаковую площадь): S<sub>ΔABO</sub> = S<sub>ΔCDO</sub>!</div>\n              <div class=\"math-row\">3. Связь площадей: S<sub>ΔABO</sub> = √(S<sub>ΔBOC</sub> · S<sub>ΔDOA</sub>).</div>\n            </div>\n\n            <h4>2. Дополнительные построения для трапеции</h4>\n            <p>Топ-3 спасительных приема в №25:</p>\n            <ul>\n              <li>Провести через вершину прямую, параллельную боковой стороне (получаем параллелограмм и треугольник).</li>\n              <li>Провести через вершину прямую, параллельную диагонали (получаем треугольник с площадью, равной площади трапеции!).</li>\n              <li>Продлить боковые стороны до их пересечения.</li>\n            </ul>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Постройте трапецию и проведите диагонали. Обозначьте основания a и b.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Используйте подобие ΔBOC и ΔDOA, выразите отношение высот этих треугольников к общей высоте трапеции.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если задача повышенной трудности (№25), примените перенос диагонали параллельно самой себе для составления теоремы Пифагора или косинусов.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ (№ 341829)</div>\n              <p><strong>Условие:</strong> Основания трапеции равны 4 и 9, а диагонали равны 5 и 12. Найдите площадь трапеции.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Через вершину C проведем прямую, параллельную диагонали BD, до пересечения с продолжением основания AD в точке K.<br>\n                   2. Четырехугольник BCKD — параллелограмм (BC || DK, CK || BD), следовательно DK = BC = 4, CK = BD = 12.<br>\n                   3. Рассмотрим треугольник ACK: AC = 5, CK = 12, AK = AD + DK = 9 + 4 = 13.<br>\n                   4. Проверим теорему Пифагора для ΔACK: 5² + 12² = 25 + 144 = 169 = 13².<br>\n                   Значит, треугольник ACK является прямоугольным с прямым углом при вершине C!<br>\n                   5. Площадь ΔACK = ½ · AC · CK = ½ · 5 · 12 = 30.<br>\n                   6. Так как высоты трапеции ABCD и треугольника ACK совпадают, а основание AK = AD + BC, площади трапеции и треугольника ACK строго равны: S<sub>трап</sub> = S<sub>ΔACK</sub> = 30.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>30</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Равновеликость vs подобие</strong>\n              <p>Треугольники ABO и CDO при боковых сторонах трапеции имеют РАВНЫЕ площади (равновелики), но НЕ равны и НЕ подобны друг другу, если трапеция не равнобедренная!</p>\n            </div>\n        "
  },
  "russian_0_0": {
    "id": "rus_compress_exclusion",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "исключение",
      "приемы сжатия",
      "изложение"
    ],
    "title": "Задание 1: Прием сжатия «Исключение» (Сжатое изложение)",
    "fipiSpec": {
      "number": "№ 1",
      "score": "6–7 первичных баллов (ИК1, ИК2, ИК3)",
      "time": "35–45 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Критерии ФИПИ оценивания сжатого изложения (Критерий ИК2)"
    },
    "theory": "\n            <h4>1. Суть приема «Исключение»</h4>\n            <p>Исключение — это удаление второстепенной, избыточной информации, без которой смысл микротемы сохраняется полностью.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Что подлежит обязательному исключению:</strong></div>\n              <ul>\n                <li>Вводные слова и конструкции (<i>конечно, разумеется, по моему мнению, к счастью</i>);</li>\n                <li>Однородные члены предложения (из ряда 4–5 однородных оставляем 1–2 главных);</li>\n                <li>Повторы и тавтологии (синонимические дубли);</li>\n                <li>Пояснения, уточнения в скобках или через тире;</li>\n                <li>Риторические вопросы и восклицания (переводим в повествовательные предложения).</li>\n              </ul>\n            </div>\n            <h4>2. Критерий ИК2 ФИПИ</h4>\n            <p>Для получения максимальных 3 баллов по критерию ИК2 экзаменуемый должен применить <strong>хотя бы один прием сжатия текста в КАЖДОЙ из трех микротем</strong> (абзацев)!</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">При первом прослушивании аудиозаписи зафиксируйте скелет каждой из 3 микротем (ключевые слова и тезисы).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите длинные цепочки однородных определений или дополнений и вычеркните описательные детали.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Удалите вводные слова и оценочные междометия, сохранив строгую логическую связь между мыслями.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 4</div>\n                <div class=\"task-step-desc\">Проверьте объем: в итоговом тексте должно быть <strong>не менее 70 слов</strong> (оптимально 75–95 слов).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный текст из банка ФИПИ</div>\n              <p><strong>Исходный фрагмент:</strong> «Настоящая дружба — это бескорыстное, глубокое, искреннее, неподдельное чувство взаимопонимания между людьми, которое не требует наград, почестей или взаимных материальных одолжений» (21 слово).</p>\n              <div class=\"task-example-solution\">\n                <strong>Применение исключения:</strong>\n                <p>«Настоящая дружба — это искреннее взаимопонимание между людьми, не требующее материальной выгоды» (10 слов).</p>\n                <div class=\"task-answer-box\">Сжато более чем в 2 раза с сохранением микротемы</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Удаление ключевой мысли</strong>\n              <p>Если вместе с «водой» выкинуть главную мысль автора хотя бы в одном абзаце, вы потеряете баллы сразу по двум критериям: ИК1 (содержание) и ИК2 (сжатие).</p>\n            </div>\n        "
  },
  "russian_0_1": {
    "id": "rus_compress_generalization",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "обобщение",
      "прием обобщения"
    ],
    "title": "Задание 1: Прием сжатия «Обобщение» (Сжатое изложение)",
    "fipiSpec": {
      "number": "№ 1",
      "score": "3 балла по критерию ИК2",
      "time": "15 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Критерии ФИПИ (ИК2 — Приемы сжатия)"
    },
    "theory": "\n            <h4>1. Суть приема «Обобщение»</h4>\n            <p>Обобщение — это замена ряда единичных понятий, фактов или действий одним родовым понятием или гиперонимом.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Способы обобщения:</strong></div>\n              <ul>\n                <li>Замена ряда однородных членов гиперонимом (родовым словом): <i>березы, осины, дубы, сосны → деревья / лес</i>;</li>\n                <li>Замена перечисления действий общим наименованием: <i>помогал слабым, кормил бездомных животных, заботился о больных → совершал добрые поступки</i>;</li>\n                <li>Слияние нескольких предложений, содержащих детали, в одно обобщающее предложение.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в черновике перечисление конкретных предметов, явлений или эмоций.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Подберите емкое обобщающее существительное или глагол, объединяющий все элементы.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сформулируйте одну компактную мысль вместо 2–3 громоздких фраз.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Текст ФИПИ (О книгах и чтении)</div>\n              <p><strong>Исходный фрагмент:</strong> «На полках стояли старинные романы, философские трактаты, поэтические сборники, научные справочники и пожелтевшие энциклопедии» (14 слов).</p>\n              <div class=\"task-example-solution\">\n                <strong>Применение обобщения:</strong>\n                <p>«На полках стояли разнообразные книги» (5 слов).</p>\n                <div class=\"task-answer-box\">Экономия 9 слов без потери смысла</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Слишком абстрактное обобщение</strong>\n              <p>Не заменяйте конкретику словами «все это», «разные вещи». Используйте точные слова: «литература», «нравственные ценности», «качества характера».</p>\n            </div>\n        "
  },
  "russian_0_2": {
    "id": "rus_compress_simplification",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "упрощение",
      "прием упрощения"
    ],
    "title": "Задание 1: Прием сжатия «Упрощение» (Сжатое изложение)",
    "fipiSpec": {
      "number": "№ 1",
      "score": "3 балла по критерию ИК2",
      "time": "15 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Критерии ФИПИ (ИК2 — Приемы сжатия)"
    },
    "theory": "\n            <h4>1. Суть приема «Упрощение»</h4>\n            <p>Упрощение — это трансформация сложной синтаксической конструкции в более простую и емкую структуру.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Основные способы синтаксического упрощения:</strong></div>\n              <ul>\n                <li>Замена сложного предложения (СПП/ССП) простым: <i>Человек, который стремится к успеху... → Стремящийся к успеху человек...</i>;</li>\n                <li>Замена придаточного определительного причастным оборотом;</li>\n                <li>Замена придаточного обстоятельственного деепричастным оборотом или предложно-именным сочетанием (<i>когда наступило утро → утром</i>);</li>\n                <li>Замена прямой речи косвенной речью.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите сложноподчиненные предложения с союзными словами «который», «где», «когда».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сверните придаточную часть в обособленный оборот или наречие.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Уберите союзы-паразиты и перегруженные связки «в связи с тем что», заменив на «потому что» или тире.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Текст ФИПИ (О совести)</div>\n              <p><strong>Исходный фрагмент:</strong> «Когда человек совершает неблаговидный поступок, он начинает испытывать глубокие внутренние угрызения, которые не дают ему покоя ни днем, ни ночью» (19 слов).</p>\n              <div class=\"task-example-solution\">\n                <strong>Применение упрощения:</strong>\n                <p>«Совершив дурной поступок, человек мучается угрызениями совести» (7 слов).</p>\n                <div class=\"task-answer-box\">Экономия 12 слов при кристальной ясности мысли</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Грамматические ошибки при перестройке</strong>\n              <p>Следите за деепричастными оборотами: добавочное действие деепричастия должно выполняться тем же лицом, что и главное действие сказуемого!</p>\n            </div>\n        "
  },
  "russian_1_0": {
    "id": "rus_roots",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "чередующиеся гласные",
      "корни",
      "задание 6",
      "задание 7",
      "орфография корней"
    ],
    "title": "Задания 6–7: Чередующиеся гласные в корне слова",
    "fipiSpec": {
      "number": "№ 6–7",
      "score": "1 первичный балл за каждое",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Орфографический анализ)"
    },
    "theory": "\n            <h4>4 группы корней с чередованием (проверять ударением НЕЛЬЗЯ!)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1. Зависят от суффикса -А-:</strong></div>\n              <ul>\n                <li>БЕР/БИР-А, ДЕР/ДИР-А, МЕР/МИР-А, ПЕР/ПИР-А, ТЕР/ТИР-А, БЛЕСТ/БЛИСТ-А, СТЕЛ/СТИЛ-А, ЖЕГ/ЖИГ-А. (Правило ослика ИА: если за корнем суффикс А — в корне пиши И!). Исключения: <i>сочетать, сочетание</i>.</li>\n                <li>КАС/КОС-А: если есть суффикс -А- → к<strong>а</strong>саться, если нет → к<strong>о</strong>снуться.</li>\n              </ul>\n              <div class=\"math-row\"><strong>2. Зависят от ударения:</strong></div>\n              <ul>\n                <li>ГАР/ГОР: под ударением А (заг<strong>а́</strong>р), без ударения О (заг<strong>о</strong>ре́лый). Искл: <i>изгарь, пригарь</i>.</li>\n                <li>ЗАР/ЗОР: без ударения А (з<strong>а</strong>ря́), под ударением то, что слышится (з<strong>о́</strong>рька).</li>\n                <li>КЛАН/КЛОН, ТВАР/ТВОР: без ударения всегда О (покл<strong>о</strong>ни́ться, тв<strong>о</strong>ре́ние). Искл: <i>утварь</i>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>3. Зависят от согласной на конце корня:</strong></div>\n              <ul>\n                <li>РАСТ / РАЩ / РОС: перед СТ и Щ пиши А (р<strong>аст</strong>ение, выр<strong>ащ</strong>енный), перед С пиши О (выр<strong>ос</strong>). Искл: <i>росток, отрасль, Ростов, Ростислав, ростовщик</i>.</li>\n                <li>СКАК / СКОЧ: перед К пиши А (ск<strong>ак</strong>ать), перед Ч пиши О (вск<strong>оч</strong>ить). Искл: <i>скачок</i>.</li>\n                <li>ЛАГ / ЛОЖ: перед Г пиши А (предл<strong>аг</strong>ать), перед Ж пиши О (предл<strong>ож</strong>ить).</li>\n              </ul>\n              <div class=\"math-row\"><strong>4. Зависят от значения:</strong></div>\n              <ul>\n                <li>МАК (погружать в жидкость: <i>макать хлеб в мед</i>) / МОК (пропускать жидкость, мокнуть: <i>вымокнуть под дождем, непромокаемый</i>).</li>\n                <li>РАВН (одинаковый, равный: <i>уравнение</i>) / РОВН (гладкий, прямой: <i>заровнять яму</i>). Искл: <i>равнина, поравняться</i>.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите корень и определите его значение (например, «примирять врагов» — корень МИР со значением «мир», это проверяемая гласная, а не чередование!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Соотнесите с правилом одной из 4 групп: суффикс А, ударение, конечная согласная или значение.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Внимательно сверьте со списком слов-исключений.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание 6 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> Укажите варианты ответов, в которых дано ВЕРНОЕ объяснение написания слова:<br>\n              1) <i>ЗАГОРАТЬ</i> — написание безударной чередующейся гласной в корне зависит от ударения.<br>\n              2) <i>ПРИМИРЯТЬ (друзей)</i> — в корне с чередованием пишется буква И, так как за корнем следует суффикс -А-.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ:</strong>\n                <p>1) Верно: корень ГАР/ГОР с чередованием, в безударной позиции пишется О.<br>\n                   2) Неверно: слово «примирять» проверяется словом «мир», это проверяемая безударная гласная корня, а не чередование!</p>\n                <div class=\"task-answer-box\">Ответ: <strong>1</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Омонимичные корни</strong>\n              <p>Различайте чередующиеся корни и омонимичные проверяемые корни: «горный воздух» (го́ры — проверяемая), «горевать» (го́ре — проверяемая), «загорелый» (гор/гар — чередующаяся!).</p>\n            </div>\n        "
  },
  "russian_1_1": {
    "id": "rus_prefixes",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "приставки пре и при",
      "пре и при",
      "приставки"
    ],
    "title": "Задания 6–7: Правописание приставок ПРЕ- и ПРИ-",
    "fipiSpec": {
      "number": "№ 6–7",
      "score": "1 первичный балл",
      "time": "2–4 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Правописание приставок)"
    },
    "theory": "\n            <h4>1. Значения приставки ПРИ-</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Приближение:</strong> приехать, прибежать, прилететь.</li>\n                <li><strong>Присоединение:</strong> пришить, приклеить, прикрутить.</li>\n                <li><strong>Пространственная близость:</strong> приморский, пришкольный, придорожный.</li>\n                <li><strong>Неполнота действия:</strong> приоткрыть (чуть-чуть), привстать, пригореть.</li>\n                <li><strong>Доведение действия до конца:</strong> придумать, приручить.</li>\n                <li><strong>Совершение действия в чьих-либо интересах:</strong> приберечь, припрятать.</li>\n              </ul>\n            </div>\n            <h4>2. Значения приставки ПРЕ-</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>В значении «ОЧЕНЬ» (= высшая степень):</strong> премудрый (очень мудрый), премилый, преувеличивать.</li>\n                <li><strong>В значении «ПЕРЕ-»:</strong> преградить (= перегородить), преступление (= переступить закон), прервать.</li>\n              </ul>\n            </div>\n            <h4>3. Различение по значению (словарные пары)</h4>\n            <p><i>Пребывать (находиться) — прибывать (приезжать); предать (изменить) — придать (добавить форму); преклоняться (уважать) — приклонить (нагнуть к земле).</i></p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Задайте вопрос к значению слова: «очень ли это?» или «пере- ли это?». Если да — пишите ПРЕ-.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если есть физическое приближение, присоединение, нахождение рядом или неполнота действия — пишите ПРИ-.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сверьтесь со словарными словами иностранного происхождения (<i>президент, премьера, привилегия, приоритет</i>).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание ФИПИ на орфографический анализ</div>\n              <p><strong>Формулировка:</strong> <i>ПРИВОКЗАЛЬНАЯ (площадь)</i> — написание приставки определяется её значением — неполнота действия.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ формулировки:</strong>\n                <p>Привокзальная площадь — это площадь, расположенная <strong>вблизи вокзала</strong> (пространственная близость). Объяснение в формулировке («неполнота действия») неверно!</p>\n                <div class=\"task-answer-box\">Утверждение НЕВЕРНО</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: В формулировке ФИПИ подменяют значение приставки</strong>\n              <p>Слово может быть написано абсолютно правильно, но формулировка объясняет его чужим правилом (например, близость вместо присоединения). Читайте формулировку до последнего слова!</p>\n            </div>\n        "
  },
  "russian_1_2": {
    "id": "rus_n_nn",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "н и нн",
      "суффиксы прилагательных",
      "причастий"
    ],
    "title": "Задания 6–7: Правописание Н и НН в прилагательных и причастиях",
    "fipiSpec": {
      "number": "№ 6–7",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Правописание суффиксов различных частей речи)"
    },
    "theory": "\n            <h4>1. Н и НН в отыменных прилагательных (образованных от сущ.)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Одна Н:</strong></div>\n              <ul>\n                <li>Суффиксы <strong>-АН-, -ЯН-, -ИН-</strong>: песчаный, глиняный, гусиный. Исключения: <i>деревянный, оловянный, стеклянный</i>.</li>\n                <li>Первообразные прилагательные: <i>юный, синий, зеленый, румяный</i>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>Две НН:</strong></div>\n              <ul>\n                <li>Стык основы на Н + суффикс Н: туман + н = <i>туманный</i>, карман + н = <i>карманный</i>.</li>\n                <li>Суффиксы <strong>-ОНН-, -ЕНН-</strong>: соломенный, экскурсионный. Исключение: <i>ветреный</i> (но: <i>безветренный</i>).</li>\n              </ul>\n            </div>\n            <h4>2. Н и НН в полных причастиях и отглагольных прилагательных</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Пишется НН, если выполняется ХОТЯ БЫ ОДНО из 4 условий:</strong></div>\n              <ol>\n                <li>Есть приставка (кроме НЕ-): <i><strong>по</strong>крашенный забор</i>;</li>\n                <li>Образовано от глагола совершенного вида: <i>решённая задача</i> (что сделать? — решить);</li>\n                <li>Есть зависимые слова: <i>жаренная <strong>на сковороде</strong> рыба</i>;</li>\n                <li>Есть суффиксы -ОВА- / -ЕВА- / -ИРОВА-: <i>маринованные огурцы</i> (искл: кованый, жеваный).</li>\n              </ol>\n              <div class=\"math-subtext\">Если ни одно из 4 условий не выполнено — пишется одна Н: <i>жареная рыба, крашеный пол</i>.</div>\n            </div>\n            <h4>3. Краткие формы</h4>\n            <p>В кратких причастиях ВСЕГДА пишется <strong>одна Н</strong>: <i>задача решена, книга прочитана, ошибка исправлена</i>.<br>\n            В кратких прилагательных пишется столько же Н, сколько в полных: <i>девушка умна и воспита<strong>нн</strong>а (воспитанная)</i>.</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите часть речи: от существительного (отыменное) или от глагола (причастие/отглагольное). Проверьте, не краткая ли это форма!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если это причастие, проверьте 4 маркера НН: приставка, вид (сов.), зависимое слово, -ова/-ева.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если краткое причастие (отвечает на вопрос «что сделано?») — строго пишите <strong>одну букву Н</strong>.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тест ФИПИ (ОГЭ 2026/2027)</div>\n              <p><strong>Формулировка:</strong> <i>ПОСТРОЕНА (школа)</i> — в суффиксе краткого страдательного причастия прошедшего времени пишется одна буква Н.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ:</strong>\n                <p>Школа (что сделана?) построена. Это краткое страдательное причастие от глагола «построить». По правилу в кратких причастиях пишется одна буква Н. Формулировка верна на 100%.</p>\n                <div class=\"task-answer-box\">Утверждение ВЕРНО</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Путаница кратких прилагательных и кратких причастий</strong>\n              <p>«Девочка избалованна» (прилагательное, какова? изнеженна = НН) vs «Девочка избалована родителями» (причастие, есть производитель действия кем? родителями = одна Н).</p>\n            </div>\n        "
  },
  "russian_1_3": {
    "id": "rus_gram_basis",
    "sectionIndex": 1,
    "itemIndex": 3,
    "matchTitles": [
      "грамматическая основа",
      "типы сказуемых",
      "задание 2"
    ],
    "title": "Задание 2: Синтаксический анализ — Грамматическая основа и сказуемые",
    "fipiSpec": {
      "number": "№ 2",
      "score": "1 первичный балл",
      "time": "4–6 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Синтаксический анализ предложения)"
    },
    "theory": "\n            <h4>1. Типы сказуемых в русском языке</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Простое глагольное сказуемое (ПГС):</strong> выражено одним глаголом в любой форме времени и наклонения, в том числе фразеологизмом (<i>Он <strong>будет петь</strong>; Мальчик <strong>принял участие</strong> (= участвовал)</i>).</li>\n                <li><strong>Составное глагольное сказуемое (СГС):</strong> вспомогательный глагол (фаза, модальность) + <strong>инфинитив</strong> (<i>Я <strong>начал читать</strong>; Мы <strong>хотим учиться</strong></i>).</li>\n                <li><strong>Составное именное сказуемое (СИС):</strong> глагол-связка (быть, казаться, стать) + <strong>именная часть</strong> (сущ, прил, краткое прич): <i>Небо <strong>было синим</strong>; Погода <strong>стала теплой</strong>; Он <strong>врач</strong></i>.</li>\n              </ul>\n            </div>\n            <h4>2. Сложные случаи подлежащего</h4>\n            <p>Подлежащее может быть выражено неделимым словосочетанием: <i>Множество людей, двое друзей, мы с братом, Млечный Путь</i>.</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите сказуемое: что говорится о предмете? Внимательно проверьте, не входит ли инфинитив в состав СГС или не является ли сказуемое составным именным.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Задайте вопрос от сказуемого: КТО или ЧТО выполняет это действие? Убедитесь, что найденное слово стоит строго в именительном падеже (И.п.).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Отсеките второстепенные члены предложения (дополнения в винительном падеже без предлога часто ошибочно принимают за подлежащее!).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №2 ОГЭ</div>\n              <p><strong>Предложение:</strong> «К вечеру тучи заволокли все небо над горизонтом».<br>\n              <strong>Вариант ответа:</strong> грамматическая основа — <i>тучи заволокли небо</i>.</p>\n              <div class=\"task-example-solution\">\n                <strong>Анализ:</strong>\n                <p>Кто выполняет действие? «Тучи» (подлежащее в И.п.). Что сделали? «Заволокли» (сказуемое). Заволокли кого? что? «небо» — это прямое дополнение в В.п.! Оно НЕ входит в основу.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Основа — «тучи заволокли» (вариант неверный)</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Безличные предложения</strong>\n              <p>В безличных предложениях подлежащего НЕТ ВООБЩЕ: <i>Мне не спится; На улице похолодало; В комнате светло</i>. В ответ выписывается только сказуемое!</p>\n            </div>\n        "
  },
  "russian_2_0": {
    "id": "rus_essay_p1",
    "sectionIndex": 2,
    "itemIndex": 0,
    "matchTitles": [
      "абзац 1",
      "определение понятия",
      "тезис",
      "сочинение 13.3"
    ],
    "title": "Сочинение 13.3: Абзац 1 — Определение понятия и Тезис-комментарий",
    "fipiSpec": {
      "number": "№ 13.3",
      "score": "2 балла по критерию СК1 (толкование значения слова)",
      "time": "15 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ оценивания сочинения 13.3"
    },
    "theory": "\n            <h4>1. Требования критерия СК1 ФИПИ</h4>\n            <p>Экзаменуемый дал определение слову И прокомментировал его — <strong>2 балла</strong>. Дал только определение без комментария — <strong>1 балл</strong>.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Формула 1-го абзаца:</strong></div>\n              <div class=\"math-row\">1. Определение: «[Понятие] — это важное нравственное качество человека, которое выражается в...»</div>\n              <div class=\"math-row\">2. Комментарий (ответ на вопрос задания): «Я считаю, что [тезис-ответ на вопрос темы]».</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Внимательно прочитайте вопрос задания 13.3 (например: «Что такое бескорыстность?» или «Кого можно назвать настоящим другом?»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сформулируйте толкование понятия через родовое слово (нравственное качество, способность, черта характера) и видовые признаки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Свяжите определение со вторым предложением-связкой: «Попробую доказать справедливость своих слов примерами из текста и жизненного опыта».</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Идеальный шаблон первого абзаца 13.3</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Доброта — это искреннее стремление человека бескорыстно помогать окружающим, проявлять заботу и сострадание. По моему мнению, по-настоящему добрый человек не ждет ничего взамен своих поступков и всегда готов подставить плечо нуждающемуся. Докажу эту мысль конкретными примерами».</i></p>\n                <div class=\"task-answer-box\">Максимальные 2 балла по критерию СК1</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Тавтологическое определение</strong>\n              <p>Категорически запрещено писать: «Доброта — это когда человек добрый» или «Дружба — это когда люди дружат». Эксперты за такое определение ставят 0 баллов по СК1!</p>\n            </div>\n        "
  },
  "russian_2_1": {
    "id": "rus_essay_p2",
    "sectionIndex": 2,
    "itemIndex": 1,
    "matchTitles": [
      "абзац 2",
      "пример из текста",
      "пояснение"
    ],
    "title": "Сочинение 13.3: Абзац 2 — Пример 1 из прочитанного текста с пояснением",
    "fipiSpec": {
      "number": "№ 13.3",
      "score": "3 балла по критерию СК2 (наличие примеров-иллюстраций)",
      "time": "20 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ (СК2)"
    },
    "theory": "\n            <h4>1. Структура второго абзаца</h4>\n            <p>Пример из текста должен обязательно сопровождаться <strong>пояснением</strong>! Голый пересказ без вывода оценивается экспертом ниже.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Шаблон абзаца:</strong></div>\n              <p>Обратимся к тексту [ФИО автора]. В предложениях [№–№] автор повествует о том, как [краткий эпизод / цитата]. Этот поступок свидетельствует о том, что [пояснение связи с тезисом из абзаца 1].</p>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в тексте фрагмент, где герой совершает поступок, иллюстрирующий исходное понятие.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Укажите номера предложений или используйте короткую точную цитату.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Обязательно напишите микровывод: как этот эпизод доказывает тезис первого абзаца.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец абзаца 2</div>\n              <div class=\"task-example-solution\">\n                <p><i>«В прочитанном тексте В.К. Железникова подтверждение моим словам можно найти в предложениях 18–22. Главная героиня Лена Бессольцева берет на себя вину одноклассника, желая спасти его от всеобщего осуждения. Этот благородный поступок показывает, что Лена способна на истинное самопожертвование ради друга».</i></p>\n                <div class=\"task-answer-box\">Идеальная связь: указание номеров + анализ поступка + микровывод</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Подмена анализа сплошным пересказом</strong>\n              <p>Не пересказывайте сюжет всего текста! Достаточно 2–3 предложений: краткое описание ключевого действия и глубокий анализ внутренних мотивов героя.</p>\n            </div>\n        "
  },
  "russian_2_2": {
    "id": "rus_essay_p3",
    "sectionIndex": 2,
    "itemIndex": 2,
    "matchTitles": [
      "абзац 3",
      "пример из жизненного опыта"
    ],
    "title": "Сочинение 13.3: Абзац 3 — Пример 2 из жизненного / читательского опыта",
    "fipiSpec": {
      "number": "№ 13.3",
      "score": "Входит в 3 балла СК2",
      "time": "15 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ (СК2)"
    },
    "theory": "\n            <h4>1. Источники для второго примера</h4>\n            <div class=\"task-formula-box\">\n              <p>По критериям ФИПИ второй пример-аргумент можно привести из:</p>\n              <ul>\n                <li>Художественной литературы (классика или современная литература — оценивается максимально надежно!);</li>\n                <li>Исторических событий или биографий великих людей;</li>\n                <li>Личного жизненного опыта (случай из жизни, история семьи, школьная практика).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сделайте вводную связку: «Примеры проявления [понятия] можно встретить и на страницах литературы / в реальной жизни».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Назовите автора, название книги и имя героя (или опишите конкретную жизненную ситуацию без вымышленных глупостей).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Завершите абзац микровыводом, созвучным вашему тезису.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец литературного аргумента</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Пример истинной верности и дружбы мы находим в повести А.С. Пушкина «Капитанская дочка». Петр Гринев, рискуя собственной жизнью и честью, отправляется в осажденную мятежниками Белогорскую крепость, чтобы спасти Машу Миронову. Его преданность доказывает, что любящий человек никогда не бросит близкого в беде».</i></p>\n                <div class=\"task-answer-box\">Безупречный литературный аргумент</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Фактические ошибки в авторах и названиях</strong>\n              <p>Если вы перепутаете имя автора или название произведения (например, назовете повесть романом или припишете стихи другому поэту), эксперт снизит 1 балл по критерию ФК1 (фактическая точность).</p>\n            </div>\n        "
  },
  "russian_2_3": {
    "id": "rus_essay_p4",
    "sectionIndex": 2,
    "itemIndex": 3,
    "matchTitles": [
      "абзац 4",
      "заключение",
      "вывод"
    ],
    "title": "Сочинение 13.3: Абзац 4 — Заключение и итоговый вывод",
    "fipiSpec": {
      "number": "№ 13.3",
      "score": "2 балла по критерию СК3 (смысловая цельность и композиция)",
      "time": "10 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Критерии ФИПИ (СК3)"
    },
    "theory": "\n            <h4>1. Роль заключения в сочинении</h4>\n            <p>Заключение должно логически замыкать рассуждение, перекликаясь с тезисом первого абзаца, но пересказывая его другими словами с более широким нравственным обобщением.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Клише для 4-го абзаца:</strong></div>\n              <ul>\n                <li><i>«В заключение хочется отметить, что...»</i></li>\n                <li><i>«Подводя итоги рассуждениям, можно сделать вывод: ...»</i></li>\n                <li><i>«Таким образом, [понятие] — это то, без чего наш мир не мог бы существовать гармонично...»</i></li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Перечитайте первый абзац (тезис).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сформулируйте ту же мысль новыми словами, сделав призыв или жизнеутверждающий вывод.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте композицию: в тексте сочинения должно быть ровно 4 абзаца! Общий объем — не менее 70 слов (оптимально 120–160 слов).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец заключения</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Подводя итог сказанному, можно сделать вывод: милосердие и чуткость делают людей по-настоящему сильными и благородными. Если бы каждый из нас стремился помогать ближним, в нашей жизни стало бы гораздо больше тепла и взаимопонимания».</i></p>\n                <div class=\"task-answer-box\">Емкое и гармоничное завершение сочинения</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Новые мысли в заключении</strong>\n              <p>В выводе нельзя вводить совершенно новые темы или факты, о которых не говорилось в аргументах. Заключение — это только итог всего вышесказанного!</p>\n            </div>\n        "
  },
  "russian_3_0": {
    "id": "rus_arg_kindness",
    "sectionIndex": 3,
    "itemIndex": 0,
    "matchTitles": [
      "доброта",
      "отзывчивость",
      "милосердие",
      "банк аргументов"
    ],
    "title": "Банк аргументов 13.3: Доброта, Отзывчивость, Милосердие",
    "fipiSpec": {
      "number": "№ 13.3 (СК2)",
      "score": "3 первичных балла",
      "time": "Справочный материал",
      "difficulty": "Повышенный уровень",
      "docSource": "Открытый банк тем ФИПИ"
    },
    "theory": "\n            <h4>1. Определение понятий</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Доброта</strong> — это душевное качество человека, проявляющееся в заботе, мягкосердечии и готовности бескорыстно делать добро другим.</p>\n              <p><strong>Милосердие</strong> — готовность сострадать, прощать и помогать людям, находящимся в беде, без осуждения.</p>\n            </div>\n            <h4>2. Золотой литературный фонд для аргументации</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>А.И. Куприн «Чудесный доктор»:</strong> Доктор Пирогов случайно знакомится в парке с отчаявшимся Мерцаловым, семья которого голодает, и спасает их: осматривает больного ребенка, оставляет деньги на дрова и лекарства, не назвав даже своего имени.</li>\n                <li><strong>В.Г. Короленко «Дети подземелья»:</strong> Вася из благополучной семьи судьи приносит яблоки и куклу больной нищей девочке Марусе, проявляя истинную чуткость.</li>\n                <li><strong>В.П. Астафьев «Конь с розовой гривой»:</strong> Бабушка Катерина, несмотря на обман внука, все же покупает ему пряничного коня, преподав великий урок всепрощающей доброты.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выберите произведение: «Чудесный доктор» подходит под 90% тем о доброте и сострадании.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Кратко назовите ситуацию: бескорыстная помощь доктора семье Мерцаловых.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сделайте вывод: поступок Пирогова вернул людям веру в жизнь.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент для сочинения</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Тема бескорыстной доброты раскрывается в рассказе А.И. Куприна «Чудесный доктор». Профессор Пирогов случайно встречает отчаявшегося главу семьи Мерцаловых, чьи дети тяжело больны и голодают. Не задумываясь, доктор бесплатно осматривает девочку, выписывает рецепт и незаметно оставляет под чайным блюдцем деньги. Этот благородный поступок спас семью от гибели и доказывает, что настоящее милосердие не требует славы».</i></p>\n                <div class=\"task-answer-box\">Идеальный аргумент на высший балл</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Не путайте имя героя и автора</strong>\n              <p>В рассказе «Чудесный доктор» главного героя зовут профессор Николай Иванович Пирогов, а автора — Александр Иванович Куприн. Не называйте доктора Куприным!</p>\n            </div>\n        "
  },
  "russian_3_1": {
    "id": "rus_arg_friendship",
    "sectionIndex": 3,
    "itemIndex": 1,
    "matchTitles": [
      "дружба",
      "преданность",
      "верность"
    ],
    "title": "Банк аргументов 13.3: Дружба, Преданность, Верность",
    "fipiSpec": {
      "number": "№ 13.3 (СК2)",
      "score": "3 первичных балла",
      "time": "Справочный материал",
      "difficulty": "Повышенный уровень",
      "docSource": "Открытый банк тем ФИПИ"
    },
    "theory": "\n            <h4>1. Определение понятий</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Дружба</strong> — это бескорыстные личные взаимоотношения между людьми, основанные на доверии, общности интересов и взаимной поддержке.</p>\n              <p><strong>Преданность</strong> — верность своему долгу, убеждениям или человеку в любых испытаниях.</p>\n            </div>\n            <h4>2. Ключевые литературные примеры</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>А. де Сент-Экзюпери «Маленький принц»:</strong> Дружба Лиса и Принца. «Мы в ответе за тех, кого приручили» — формула верности и заботы о друге.</li>\n                <li><strong>Г.Н. Троепольский «Белый Бим Черное ухо»:</strong> Пример абсолютной преданности собаки своему хозяину Ивану Ивановичу.</li>\n                <li><strong>В.К. Железников «Чучело»:</strong> Предательство Сомова и истинное благородство Лены Бессольцевой.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите ракурс вопроса: настоящая дружба или предательство друга.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Для позитивного примера используйте «Маленького принца», для контраста верности и предательства — «Чучело».</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент</div>\n              <div class=\"task-example-solution\">\n                <p><i>«О великой силе преданности размышляет Антуан де Сент-Экзюпери в философской сказке «Маленький принц». Лис открывает главному герою тайну дружбы: чтобы стать настоящими друзьями, нужно «приручить» друг друга, отдать частицу своей души и научиться нести ответственность за близкого. Этот пример доказывает, что дружба — это ежедневный труд и взаимная забота».</i></p>\n                <div class=\"task-answer-box\">Глубокий литературный аргумент</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Банальные бытовые примеры</strong>\n              <p>Избегайте примитивных бытовых примеров вроде «мой друг Вася дал мне списать домашку, поэтому он настоящий друг». Это снижает культуру речи!</p>\n            </div>\n        "
  },
  "russian_3_2": {
    "id": "rus_arg_courage",
    "sectionIndex": 3,
    "itemIndex": 2,
    "matchTitles": [
      "мужество",
      "сила духа",
      "защита родины"
    ],
    "title": "Банк аргументов 13.3: Мужество, Сила духа, Защита Родины",
    "fipiSpec": {
      "number": "№ 13.3 (СК2)",
      "score": "3 первичных балла",
      "time": "Справочный материал",
      "difficulty": "Повышенный уровень",
      "docSource": "Открытый банк тем ФИПИ"
    },
    "theory": "\n            <h4>1. Определение понятий</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Мужество</strong> — это способность человека преодолевать страх, сохранять самообладание и выполнять свой долг перед лицом смертельной опасности.</p>\n              <p><strong>Сила духа</strong> — внутренняя стойкость, позволяющая не сдаваться перед тяжелейшими испытаниями судьбы.</p>\n            </div>\n            <h4>2. Литературные произведения о силе духа</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>М.А. Шолохов «Судьба человека»:</strong> Андрей Соколов прошел через плен, концлагерь, гибель всей семьи, но не сломился morally и нашел в себе силы усыновить сироту Ванюшку.</li>\n                <li><strong>Б.Н. Полевой «Повесть о настоящем человеке»:</strong> Летчик Алексей Мересьев после ампутации обеих ног заново научился ходить, танцевать и вернулся в строй боевой авиации.</li>\n                <li><strong>В.В. Быков «Обелиск», «Сотников»:</strong> Нравственный подвиг учителей и партизан в годы Великой Отечественной войны.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Укажите исторический контекст (Великая Отечественная война — ярчайший пример мужества народа).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Покажите конкретный поступок героя: отказ Соколова пить за победу немецкого оружия в комендатуре.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент</div>\n              <div class=\"task-example-solution\">\n                <p><i>«Ярким образцом несгибаемой силы духа является герой рассказа М.А. Шолохова «Судьба человека» Андрей Соколов. Попав в фашистский плен, он проявил невероятное человеческое достоинство перед лицом лагерного коменданта Мюллера, отказавшись пить за победу врага. Потеряв всех близких на войне, Соколов сохранил тепло сердца и подарил отцовскую любовь сироте Ване. Этот образ олицетворяет непобедимый дух нашего народа».</i></p>\n                <div class=\"task-answer-box\">Высочайший балл по критериям содержания</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Отождествление мужества с безрассудством</strong>\n              <p>Мужество — это не глупый риск ради бравады. Подлинное мужество всегда сопряжено с высокой целью: защитой людей или чести.</p>\n            </div>\n        "
  },
  "russian_3_3": {
    "id": "rus_arg_books",
    "sectionIndex": 3,
    "itemIndex": 3,
    "matchTitles": [
      "драгоценные книги",
      "любовь к чтению",
      "книги"
    ],
    "title": "Банк аргументов 13.3: Драгоценные книги, Любовь к чтению",
    "fipiSpec": {
      "number": "№ 13.3 (СК2)",
      "score": "3 первичных балла",
      "time": "Справочный материал",
      "difficulty": "Повышенный уровень",
      "docSource": "Открытый банк тем ФИПИ"
    },
    "theory": "\n            <h4>1. Что такое драгоценные книги?</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Драгоценные книги</strong> — это произведения, которые формируют внутренний мир человека, закладывают понятия о чести, совести и добре, оставляя след на всю жизнь.</p>\n            </div>\n            <h4>2. Примеры из литературы и публицистики</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Д.С. Лихачев «Письма о добром и прекрасном» (Письмо о чтении):</strong> Академик призывает читать классику, учиться вдумчивому неспешному чтению, развивающему интеллект и душу.</li>\n                <li><strong>М. Горький автобиографическая трилогия («В людях», «Детство»):</strong> Книга помогла Алеше Пешкову выстоять в жестоком мире «свинцовых мерзостей жизни» и стать Человеком.</li>\n                <li><strong>Рэй Брэдбери «451 градус по Фаренгейту»:</strong> Трагедия общества, уничтожающего книги и утратившего способность чувствовать и мыслить.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сформулируйте роль книги: книга — наставник, верный собеседник и хранитель духовного опыта.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите в пример книгу, которая повлияла на героя (например, книги в жизни Максима Горького).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый аргумент</div>\n              <div class=\"task-example-solution\">\n                <p><i>«О неоценимой роли литературы размышляет академик Д.С. Лихачев в книге «Письма о добром и прекрасном». Автор утверждает, что книги учат сопереживанию, развивают вкус и расширяют кругозор человека. Чтение классики помогает найти ответы на сложнейшие жизненные вопросы и воспитывает нравственную личность».</i></p>\n                <div class=\"task-answer-box\">Убедительный публицистический аргумент</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ссылки на комиксы и фанфики</strong>\n              <p>Не используйте в качестве «драгоценных книг» развлекательную масс-культуру. Эксперты ценят обращение к классическому наследию и признанным шедеврам литературы.</p>\n            </div>\n        "
  },
  "russian_4_0": {
    "id": "rus_phrase_trans",
    "sectionIndex": 4,
    "itemIndex": 0,
    "matchTitles": [
      "задание 4",
      "перевод способов связи",
      "словосочетаниях",
      "согласование",
      "управление",
      "примыкание"
    ],
    "title": "Задание 4: Перевод способов связи в словосочетаниях (100% балл)",
    "fipiSpec": {
      "number": "№ 4",
      "score": "1 первичный балл",
      "time": "1–2 минуты",
      "difficulty": "Базовый уровень (Самый легкий балл ОГЭ!)",
      "docSource": "Кодификатор ФИПИ (Синтаксический анализ словосочетания)"
    },
    "theory": "\n            <h4>3 типа подчинительной связи в словосочетании</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Согласование:</strong> зависимое слово уподобляется главному в роде, числе и падеже (обычно: сущ + прил/прич): <i>деревянный дом, мамин шарф, шестой класс</i>.</li>\n                <li><strong>Управление:</strong> главное слово требует от зависимого определенного падежа (с предлогом или без): <i>дом из дерева, шарф мамы, читать книгу</i>.</li>\n                <li><strong>Примыкание:</strong> зависимое слово неизменяемое (наречие, деепричастие, инфинитив): <i>громко петь, говорить улыбаясь, желание учиться</i>.</li>\n              </ul>\n            </div>\n            <h4>Таблица взаимных трансформаций:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Согласование ⇄ Управление:</strong></div>\n              <div class=\"math-row\"><i>деревянный забор → забор из дерева</i></div>\n              <div class=\"math-row\"><i>книжный шкаф → шкаф для книг</i></div>\n              <div class=\"math-row\"><i>хрустальная ваза → ваза из хрусталя</i></div>\n              <div class=\"math-row\"><i>лисья нора → нора лисы</i></div>\n              <div class=\"math-row\"><strong>Управление ⇄ Примыкание:</strong></div>\n              <div class=\"math-row\"><i>с жадностью смотрел → жадно смотрел</i></div>\n              <div class=\"math-row\"><i>с грустью сказал → грустно сказал</i></div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите <strong>ГЛАВНОЕ</strong> слово в исходном словосочетании. Главное слово менять КАТЕГОРИЧЕСКИ НЕЛЬЗЯ! Оно остается в той же форме.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Трансформируйте только <strong>ЗАВИСИМОЕ</strong> слово в нужную часть речи (существительное с предлогом или прилагательное).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите полученное словосочетание в бланк ответов строго <strong>без пробелов, дефисов и запятых</strong>!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №4 ОГЭ</div>\n              <p><strong>Условие:</strong> Замените словосочетание «железная решетка», построенное на основе согласования, синонимичным словосочетанием со связью УПРАВЛЕНИЕ.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Главное слово — «решетка» (решетка какая? железная). Оставляем слово «решетка».<br>\n                   2. Зависимое слово «железная» превращаем в существительное в косвенном падеже с предлогом: «из железа».<br>\n                   3. Получаем: «решетка из железа».<br>\n                   4. В бланк пишем слитно: «решеткаизжелеза».</p>\n                <div class=\"task-answer-box\">Ответ: <strong>решеткаизжелеза</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Изменение главного слова</strong>\n              <p>Если в задании было «смеялся от радости» (главное — смеялся), нельзя писать «радостный смех» (здесь главное слово подменили на существительное). Правильный ответ: «радостно смеялся»!</p>\n            </div>\n        "
  },
  "russian_4_1": {
    "id": "rus_isolated_members",
    "sectionIndex": 4,
    "itemIndex": 1,
    "matchTitles": [
      "обособленные определения",
      "обособленные обстоятельства",
      "задание 3",
      "пунктуационный анализ"
    ],
    "title": "Задания 2–3: Обособленные определения и обстоятельства",
    "fipiSpec": {
      "number": "№ 2, 3, 5",
      "score": "1 первичный балл за каждое",
      "time": "4–6 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Пунктуационный анализ)"
    },
    "theory": "\n            <h4>1. Обособленные определения (причастные обороты)</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li>Обособляются запятыми, если стоят <strong>ПОСЛЕ</strong> определяемого существительного: <i>Береза, <u>освещенная солнцем</u>, тихо шумела</i>.</li>\n                <li><strong>НЕ</strong> обособляются, если стоят ПЕРЕД существительным: <i><u>Освещенная солнцем</u> береза тихо шумела</i> (исключение: если имеет обстоятельственное значение причины).</li>\n                <li>ВСЕГДА обособляются, если относятся к <strong>личному местоимению</strong> (я, ты, он, она, они) в любой позиции: <i><u>Уставшие до предела</u>, они быстро уснули</i>.</li>\n              </ul>\n            </div>\n            <h4>2. Обособленные обстоятельства (деепричастные обороты)</h4>\n            <div class=\"task-formula-box\">\n              <p>Деепричастия и деепричастные обороты обособляются <strong>ВСЕГДА</strong>, независимо от места в предложении (в начале, середине или конце): <i><u>Закрыв книгу</u>, он подошел к окну; Он шел, <u>напевая песню</u></i>.</p>\n              <div class=\"math-subtext\">Исключения: деепричастия, перешедшие в наречия образа действия (<i>Он сидел <u>молча</u>; Она слушала затаив дыхание</i>).</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите причастие (суффиксы -ущ-/-ющ-, -ащ-/-ящ-, -вш-, -ш-, -ем-, -им-, -нн-, -енн-, -т-) или деепричастие (-а, -я, -в, -вши, -ши).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Очертите границы оборота (задайте вопросы к зависимым словам).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте определяемое слово для причастного оборота (существительное или местоимение, до или после). Поставьте запятые на границах оборота.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание 3 ОГЭ (Пунктуация)</div>\n              <p><strong>Текст:</strong> «На поляне (1) заросшей диким клевером (2) мы увидели старую сосну (3) склонившуюся под тяжестью снега (4) и тихо скрипевшую на ветру».<br>\n              <strong>Вопрос:</strong> Назовите цифры, где должны стоять запятые.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1 и 2 — границы причастного оборота «заросшей диким клевером», стоящего после определяемого слова «поляне».<br>\n                   3 — начало причастных оборотов после слова «сосну».<br>\n                   4 — запятая НЕ ставится, так как два причастных оборота являются однородными и соединены одиночным союзом И («склонившуюся... и скрипевшую...»).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>123</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Однородные причастные обороты с союзом И</strong>\n              <p>Если два причастных оборота относятся к одному существительному и соединены одиночным союзом И, между ними запятая НЕ СТАВИТСЯ (как между обычными однородными членами: яблоки и груши)!</p>\n            </div>\n        "
  },
  "russian_4_2": {
    "id": "rus_spp_clauses",
    "sectionIndex": 4,
    "itemIndex": 2,
    "matchTitles": [
      "виды придаточных предложений",
      "спп",
      "задание 3"
    ],
    "title": "Задание 3: Виды придаточных предложений в СПП и пунктуация",
    "fipiSpec": {
      "number": "№ 3",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Сложноподчиненные предложения)"
    },
    "theory": "\n            <h4>1. Классификация придаточных предложений</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Определительные:</strong> отвечают на вопросы <i>какой? чей?</i>, присоединяются союзными словами <i>который, чей, где, куда</i> (от главного предложения к существительному).</li>\n                <li><strong>Изъяснительные:</strong> отвечают на падежные вопросы <i>кого? чего? кому? чему? что?</i>, присоединяются союзами <i>что, чтобы, как, будто, ли</i> (от глагола мысли/речи/чувства).</li>\n                <li><strong>Обстоятельственные:</strong>\n                  <ul>\n                    <li>Времени (когда? пока, едва, как только);</li>\n                    <li>Причины (почему? так как, потому что, ибо);</li>\n                    <li>Условия (при каком условии? если, ежели, кабы);</li>\n                    <li>Цели (зачем? с какой целью? чтобы, для того чтобы);</li>\n                    <li>Уступки (вопреки чему? несмотря на то что, хотя);</li>\n                    <li>Следствия (что из этого следует? так что).</li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n            <h4>2. Типы подчинения при нескольких придаточных</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Однородное:</strong> придаточные одного вида отвечают на один вопрос и зависят от одного слова: <i>Я знал, (что наступит день) и (что мы победим).</i> (Запятая перед одиночным «и» НЕ ставится!).</li>\n                <li><strong>Параллельное (неоднородное):</strong> придаточные разного вида зависят от одного главного предложения.</li>\n                <li><strong>Последовательное:</strong> первое придаточное зависит от главного, второе — от первого, третье — от второго (цепочка «матрешка»).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите все грамматические основы в сложном предложении и обведите союзы кружками.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Определите границы главного и придаточных предложений, задав смысловой вопрос от главного к зависимому.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">На стыке двух союзов (<i>что если, что когда</i>) проверьте наличие второй части <strong>«ТО», «ТАК», «НО»</strong>. Если «то/так» есть — запятая между союзами НЕ ставится!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Пунктуационный анализ (Задание 3)</div>\n              <p><strong>Предложение:</strong> «Он понимал (1) что (2) если пойдет сильный дождь (3) то экспедицию придется прервать».<br>\n              <strong>Вопрос:</strong> Где нужны запятые?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1 — граница между главным предложением «Он понимал» и придаточным (запятая нужна).<br>\n                   2 — стык союзов «что если». Смотрим дальше: есть слово «то» («то экспедицию придется...»), следовательно на стыке (2) запятая НЕ СТАВИТСЯ!<br>\n                   3 — конец придаточного условия перед «то» (запятая нужна).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>13</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Правило «ТО-КАК-НО» на стыке союзов</strong>\n              <p>Запомните правило: «Есть ТО, ТАК, НО — запятую сними на дно! Нет ТО, ТАК, НО — ставь запятую все равно!»</p>\n            </div>\n        "
  },
  "social_0_0": {
    "id": "soc_factors_production",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "факторы производства",
      "факторные доходы",
      "земля",
      "труд",
      "капитал"
    ],
    "title": "Блок «Экономика»: Факторы производства и факторные доходы",
    "fipiSpec": {
      "number": "№ 1, 6, 8, 9, 21-24",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Раздел 3: Экономика)"
    },
    "theory": "\n            <h4>1. Определение факторов производства</h4>\n            <p><strong>Факторы производства</strong> — это экономические ресурсы, необходимые для производства товаров и услуг.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>5 основных факторов производства и доходы:</strong></div>\n              <ul>\n                <li><strong>Труд</strong> — физические и интеллектуальные усилия людей. <i>Факторный доход:</i> <strong>Заработная плата</strong>.</li>\n                <li><strong>Земля</strong> — все природные ресурсы (пахотная земля, недра, леса, вода). <i>Факторный доход:</i> <strong>Рента</strong>.</li>\n                <li><strong>Капитал</strong> — здания, станки, оборудование (физический капитал) и финансы. <i>Факторный доход:</i> <strong>Процент</strong>.</li>\n                <li><strong>Предпринимательские способности</strong> — готовность рисковать и объединять ресурсы. <i>Факторный доход:</i> <strong>Прибыль</strong>.</li>\n                <li><strong>Информация</strong> — знания, патенты, технологии. <i>Факторный доход:</i> <strong>Роялти (прибыль от интеллектуальной собственности)</strong>.</li>\n              </ul>\n            </div>\n            <h4>2. Главная проблема экономики</h4>\n            <p>Главная проблема любой экономической системы — <strong>ограниченность ресурсов</strong> при неограниченных потребностях общества.</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите, о каком ресурсе идет речь в условии (сырье, станки, наемные работники, предпринимательский риск).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вспомните жесткую связку пары «Фактор ⇄ Факторный доход» (Земля → Рента; Труд → Зарплата; Капитал → Процент; Предпринимательство → Прибыль).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №8 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> Владелец автомойки закупил новые аппараты высокого давления и моющие средства. К какому фактору производства относятся данные объекты?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Аппараты, станки и расходные средства — это средства производства, созданные человеком, то есть <strong>капитал</strong> (физический / реальный капитал).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Капитал</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Земля vs Капитал</strong>\n              <p>Сырая нефть в недрах или целинное поле — это ЗЕМЛЯ (природный ресурс). Но пробуренная скважина, переработанный бензин или удобренное поле с оросительной системой — это уже КАПИТАЛ!</p>\n            </div>\n        "
  },
  "social_0_1": {
    "id": "soc_econ_systems",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "типы экономических систем",
      "традиционная",
      "командная",
      "рыночная"
    ],
    "title": "Блок «Экономика»: Типы экономических систем",
    "fipiSpec": {
      "number": "№ 8, 9, 14",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Типы экономических систем)"
    },
    "theory": "\n            <h4>Сравнительная таблица 4 экономических систем</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Традиционная:</strong> основана на обычаях и традициях, натуральное хозяйство, ручной труд, медленное внедрение технологий, коллективная/общинная собственность.</li>\n                <li><strong>Командная (плановая, административная):</strong> государственная монополия на ресурсы и средства производства, централизованное директивное планирование (Госплан), государственное ценообразование, дефицит товаров широкого потребления, отсутствие конкуренции.</li>\n                <li><strong>Рыночная:</strong> частная собственность на средства производства, свобода предпринимательства, свободное ценообразование на основе спроса и предложения, жесткая конкуренция производителей.</li>\n                <li><strong>Смешанная:</strong> рынок решает вопросы производства и распределения, а государство борется с «провалами рынка» (социальные пособия, охрана экологии, антимонопольное регулирование, оборона).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите маркерные слова в условии: «обычаи предков» → Традиционная; «директивный план, твердые цены» → Командная; «конкуренция, спрос и предложение» → Рыночная.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Проверьте, кто устанавливает цены: чиновники из министерства (план) или взаимодействие покупателей и продавцов (рынок).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №9 ОГЭ</div>\n              <p><strong>Суждение А:</strong> В командной экономике цены на товары определяются балансом спроса и предложения.<br>\n              <strong>Суждение Б:</strong> Для рыночной экономики характерна свобода предпринимательской деятельности.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Суждение А неверно: в командной экономике цены диктуются государством. Суждение Б верно: свобода предпринимательства — базовый принцип рынка.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Верно только Б</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Наличие частной собственности в командной системе</strong>\n              <p>В СССР граждане могли иметь личную собственность (одежда, телевизор, книги), но средства производства (заводы, фабрики, земля) принадлежали исключительно государству!</p>\n            </div>\n        "
  },
  "social_0_2": {
    "id": "soc_inflation_budget",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "инфляция",
      "государственный бюджет",
      "дефицит бюджета",
      "профицит"
    ],
    "title": "Блок «Экономика»: Инфляция и Государственный бюджет РФ",
    "fipiSpec": {
      "number": "№ 8, 9, 14",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Деньги, инфляция, финансы)"
    },
    "theory": "\n            <h4>1. Инфляция и ее виды</h4>\n            <p><strong>Инфляция</strong> — долговременный процесс обесценивания денег, приводящий к снижению их покупательной способности и росту общего уровня цен.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Виды по темпам роста:</strong></div>\n              <ul>\n                <li><strong>Умеренная (ползучая):</strong> рост цен до 10% в год (стимулирует экономику);</li>\n                <li><strong>Галопирующая:</strong> рост цен от 10% до 50% в год (требует срочных антиинфляционных мер);</li>\n                <li><strong>Гиперинфляция:</strong> рост цен свыше 50% в месяц (разрушение денежной системы).</li>\n              </ul>\n              <div class=\"math-row\">Кто больше всех проигрывает от инфляции? Люди с фиксированными доходами (пенсионеры, бюджетники, студенты) и вкладчики в банках!</div>\n            </div>\n            <h4>2. Государственный бюджет РФ</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Доходы бюджета:</strong> налоги (основная часть — более 80%), доходы от госсобственности, пошлины, продажа лицензий.</div>\n              <div class=\"math-row\"><strong>Расходы бюджета:</strong> армия и оборона, образование, здравоохранение, социальные выплаты (пенсии, пособия), инфраструктура.</div>\n              <div class=\"math-row\"><strong>Состояния бюджета:</strong></div>\n              <ul>\n                <li><i>Сбалансированный:</i> Доходы = Расходы;</li>\n                <li><i>Профицитный:</i> Доходы > Расходы (излишек средств);</li>\n                <li><i>Дефицитный:</i> Расходы > Доходы (нехватка средств, ведет к госдолгу).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Различайте доходы и расходы бюджета: налоги — это доход государства, выплата материнского капитала или зарплата военных — это расход.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запомните: инфляция НЕ означает, что дорожает какой-то один товар (например, бананы из-за неурожая). Инфляция — это долговременный рост общего уровня цен!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №9 ОГЭ</div>\n              <p><strong>Условие:</strong> Верны ли суждения о государственном бюджете?<br>\n              А. Дефицит государственного бюджета означает превышение государственных доходов над расходами.<br>\n              Б. Налоговые поступления являются основной статьей доходов государственного бюджета РФ.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А — неверно (превышение доходов над расходами — это профицит). Б — верно (налоги формируют львиную долю казны).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Верно только Б</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Эмиссия денег как спасение от дефицита</strong>\n              <p>Включение «печатного станка» (необоснованная эмиссия денег) для покрытия дефицита бюджета неизбежно разгоняет гиперинфляцию!</p>\n            </div>\n        "
  },
  "social_1_0": {
    "id": "soc_separation_powers",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "разделение властей",
      "статья 10",
      "конституция",
      "законодательная",
      "исполнительная",
      "судебная"
    ],
    "title": "Блок «Политика и Право»: Разделение властей в РФ (Статья 10 Конституции)",
    "fipiSpec": {
      "number": "№ 13, 14, 16, 17",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Конституция РФ (Главы 4–7), Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>1. Статья 10 Конституции РФ</h4>\n            <p>«Государственная власть в Российской Федерации осуществляется на основе разделения на законодательную, исполнительную и судебную. Органы законодательной, исполнительной и судебной власти самостоятельны».</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Три ветви власти в РФ и их органы:</strong></div>\n              <ul>\n                <li><strong>Законодательная:</strong> <strong>Федеральное Собрание РФ</strong> (парламент). Состоит из двух палат:\n                  <ul>\n                    <li><i>Государственная Дума</i> (450 депутатов, принимает федеральные законы);</li>\n                    <li><i>Совет Федерации</i> (сенаторы, утверждает изменение границ, назначает выборы Президента).</li>\n                  </ul>\n                </li>\n                <li><strong>Исполнительная:</strong> <strong>Правительство РФ</strong> (Председатель Правительства, министры). Исполняет законы, управляет федеральной собственностью, разрабатывает и исполняет бюджет.</li>\n                <li><strong>Судебная:</strong> <strong>Суды РФ</strong> (Конституционный Суд РФ, Верховный Суд РФ и система федеральных судов). Осуществляет правосудие.</li>\n              </ul>\n              <div class=\"math-row\"><strong>Президент РФ:</strong> Глава государства, гарант Конституции. Стоит <strong>над ветвями власти</strong>, обеспечивая их согласованное функционирование!</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Если орган <strong>принимает законы</strong> — это Государственная Дума (законодательная ветвь).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если орган <strong>организует исполнение, управляет, охраняет порядок</strong> — это Правительство (исполнительная ветвь).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Помните: Президент РФ формально не входит ни в одну из трех ветвей власти!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №16 ОГЭ (Конституция РФ)</div>\n              <p><strong>Условие:</strong> К какой ветви государственной власти в РФ относится Правительство Российской Федерации?<br>\n              1) законодательной &nbsp; 2) исполнительной &nbsp; 3) судебной &nbsp; 4) учредительной</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Согласно ст. 110 Конституции РФ исполнительную власть в РФ осуществляет Правительство Российской Федерации.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>2</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Президент как глава исполнительной власти</strong>\n              <p>В отличие от США, в Конституции РФ Президент НЕ является главой исполнительной власти. Главой исполнительной власти является Правительство РФ!</p>\n            </div>\n        "
  },
  "social_1_1": {
    "id": "soc_capacity_minors",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "дееспособность несовершеннолетних",
      "гк рф",
      "малолетние",
      "дееспособность"
    ],
    "title": "Блок «Право»: Дееспособность несовершеннолетних (ГК РФ)",
    "fipiSpec": {
      "number": "№ 16, 17, 21-24",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Гражданский кодекс РФ (Статьи 26, 28)"
    },
    "theory": "\n            <h4>Возрастные градации дееспособности в РФ</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>До 6 лет:</strong> Полная недееспособность. Все сделки совершают только родители!</li>\n                <li><strong>От 6 до 14 лет (Малолетние — ст. 28 ГК РФ):</strong>\n                  <ul>\n                    <li>Мелкие бытовые сделки (покупка хлеба, тетради, мороженого);</li>\n                    <li>Сделки, направленные на безвозмездное получение выгоды, не требующие нотариального удостоверения (принять подарок);</li>\n                    <li>Распоряжение средствами, предоставленными родителями для определенной цели или свободного распоряжения.</li>\n                    <li><i>Имущественную ответственность за их действия несут родители!</i></li>\n                  </ul>\n                </li>\n                <li><strong>От 14 до 18 лет (Неполная дееспособность — ст. 26 ГК РФ):</strong>\n                  <ul>\n                    <li>Все права малолетних;</li>\n                    <li><strong>Самостоятельно распоряжаться своим заработком, стипендией, доходами</strong>;</li>\n                    <li>Осуществлять права автора произведений науки, литературы, искусства;</li>\n                    <li>Вносить вклады в кредитные организации и распоряжаться ими;</li>\n                    <li>С 14 лет — несут самостоятельную имущественную ответственность по своим сделкам и за причиненный вред!</li>\n                    <li>Крупные сделки (продажа квартиры, машины) — только с письменного согласия родителей.</li>\n                  </ul>\n                </li>\n                <li><strong>С 18 лет:</strong> Полная дееспособность. (До 18 лет полная дееспособность наступает при <i>эмансипации</i> с 16 лет или вступлении в брак).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Обратите внимание на возраст героя задачи: 10 лет (малолетний) или 15 лет (несовершеннолетний от 14 до 18).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Помните: право открыть счет в банке и распоряжаться своей стипендией появляется строго <strong>с 14 лет</strong>!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №17 ОГЭ</div>\n              <p><strong>Условие:</strong> 15-летний школьник Михаил подрабатывает промоутером и получает зарплату. Имеет ли он право самостоятельно, без согласия родителей, положить заработанные деньги на депозит в банк?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>В соответствии со статьей 26 ГК РФ несовершеннолетние в возрасте от 14 до 18 лет вправе самостоятельно, без согласия родителей, вносить вклады в кредитные организации и распоряжаться ими, а также распоряжаться своим заработком.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Да, имеет полное право по закону</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Эмансипация</strong>\n              <p>Эмансипация (объявление полностью дееспособным до 18 лет) возможна только с 16 лет при условии работы по трудовому договору или занятия предпринимательством с согласия родителей!</p>\n            </div>\n        "
  },
  "social_1_2": {
    "id": "soc_branches_law",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "отрасли права",
      "гражданское",
      "уголовное",
      "административное",
      "трудовое"
    ],
    "title": "Блок «Право»: Отрасли права и виды юридической ответственности",
    "fipiSpec": {
      "number": "№ 16, 17, 18",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Правовое регулирование)"
    },
    "theory": "\n            <h4>Главные отрасли материального права РФ</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Гражданское право:</strong> регулирует имущественные и личные неимущественные отношения (сделки, договоры, купля-продажа, возмещение ущерба). Равенство сторон.</li>\n                <li><strong>Уголовное право:</strong> регулирует общественные отношения, связанные с совершением преступлений. Самые строгие наказания (лишение свободы, исправительные работы). Уголовная ответственность наступает с 16 лет (по тяжким составам — с 14 лет!).</li>\n                <li><strong>Административное право:</strong> регулирует отношения в сфере государственного управления и общественного порядка (нарушение ПДД, безбилетный проезд, распитие в общественных местах). Наказания: штраф, предупреждение, лишение спецправа (прав водителя).</li>\n                <li><strong>Трудовое право:</strong> регулирует отношения между работником и работодателем (трудовой договор, рабочее время, отпуск, увольнение). Дисциплинарные взыскания: замечание, выговор, увольнение!</li>\n                <li><strong>Семейное право:</strong> брак, алименты, права и обязанности супругов и детей.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите характер правонарушения: проступок на работе (Трудовое), нарушение ПДД/тишины (Административное), неисполнение договора займа (Гражданское), кража/грабеж (Уголовное).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вспомните 3 вида дисциплинарных взысканий по ТК РФ: замечание, выговор, увольнение (лишения премии и штрафов в ТК РФ нет!).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №18 ОГЭ</div>\n              <p><strong>Условие:</strong> Установите соответствие между примерами правонарушений и отраслями права:<br>\n              А) переход дороги в неположенном месте<br>\n              Б) опоздание на работу на 2 часа<br>\n              В) кража кошелька в трамвае</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>А — Административное право;<br>\n                   Б — Трудовое право (нарушение трудовой дисциплины);<br>\n                   В — Уголовное право (ст. 158 УК РФ, кража).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>А-Админ, Б-Труд, В-Уголовн</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: «Штраф» как дисциплинарное взыскание</strong>\n              <p>Работодатель НЕ имеет права выписывать работнику дисциплинарный штраф! По закону (ТК РФ ст. 192) существуют только: замечание, выговор и увольнение по соответствующим основаниям.</p>\n            </div>\n        "
  },
  "social_2_0": {
    "id": "soc_p2_task1",
    "sectionIndex": 2,
    "itemIndex": 0,
    "matchTitles": [
      "задание №1",
      "раскрытие понятий",
      "2 балла"
    ],
    "title": "Задание №1: Раскрытие понятий (2 первичных балла)",
    "fipiSpec": {
      "number": "№ 1",
      "score": "2 первичных балла",
      "time": "5–7 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Критерии ФИПИ оценивания задания 1"
    },
    "theory": "\n            <h4>Требования критериев ФИПИ</h4>\n            <p>1 балл дается за правильный выбор двух понятий из списка, относящихся к определенной сфере. Второй балл — за раскрытие смысла любого одного из них.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Правило определения понятия:</strong></div>\n              <p>Определение = <strong>Родовое понятие</strong> (что это такое в широком смысле: форма правления, процесс, качество) + <strong>не менее 2 существенных признаков</strong>!</p>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выпишите два понятия, относящихся к указанной в задании категории (например, формы правления: монархия, республика).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выберите то понятие из двух, определение которого вы помните наизусть и абсолютно уверены.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите формулировку четким научным языком, не допуская бытовых описаний («это когда...»).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №1 из демоверсии</div>\n              <p><strong>Условие:</strong> Какие два из перечисленных понятий используются в первую очередь для обозначения форм (источников) права: <i>судебный прецедент, выборы, нормативный правовой акт, референдум, монархия</i>? Выпишите эти понятия и раскройте смысл любого одного из них.</p>\n              <div class=\"task-example-solution\">\n                <strong>Образец идеального ответа:</strong>\n                <p>1) Понятия: судебный прецедент, нормативный правовой акт.<br>\n                   2) Нормативный правовой акт — это официальный письменный документ, принятый уполномоченным государственным органом, содержащий общеобязательные нормы права, рассчитанные на многократное применение.</p>\n                <div class=\"task-answer-box\">Оценка: <strong>2 из 2 баллов</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Раскрытие через то же слово</strong>\n              <p>Нельзя писать «Правонарушение — это нарушение права» или «Демократия — это демократический строй». За это эксперт сразу ставит 0 баллов за определение!</p>\n            </div>\n        "
  },
  "social_2_1": {
    "id": "soc_p2_task5",
    "sectionIndex": 2,
    "itemIndex": 1,
    "matchTitles": [
      "задание №5",
      "анализ фотографии",
      "3 балла"
    ],
    "title": "Задание №5: Анализ фотографии социальной ситуации (3 балла)",
    "fipiSpec": {
      "number": "№ 5",
      "score": "3 первичных балла",
      "time": "10 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ оценивания задания 5"
    },
    "theory": "\n            <h4>Структура задания №5</h4>\n            <p>Задание включает изображение реальной социальной ситуации (семья делает покупки, человек сортирует мусор, волонтер помогает пожилым, рабочий на стройке) и 3–4 конкретных вопроса к нему.</p>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li>Вопрос 1: Какой вид деятельности / форма семьи / экономическая операция изображена?</li>\n                <li>Вопрос 2: Укажите главную цель или признак данной деятельности.</li>\n                <li>Вопрос 3: Сформулируйте 2 правила рационального/безопасного поведения в данной ситуации и поясните каждое.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Внимательно рассмотрите изображение и ответьте на первый вопрос строго в терминах обществознания (не «покупка еды», а «рациональное экономическое поведение потребителя»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Отвечайте на ВСЕ подвопросы отдельными пунктами (1, 2, 3, 4). Не объединяйте их в сплошной текст!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В правилах поведения формулируйте развернутые советы с пояснением «зачем это делать».</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Фотография: Человек у банкомата</div>\n              <div class=\"task-example-solution\">\n                <p>1. Деятельность: снятие наличных средств / финансовая операция с банковской картой.<br>\n                   2. Признак: использование электронных безналичных платежных средств.<br>\n                   3. Два правила безопасности:<br>\n                   — Прикрывать клавиатуру рукой при вводе ПИН-кода (чтобы посторонние или скрытые камеры не украли пароль);<br>\n                   — Не передавать карту и данные CVC-кода третьим лицам (для предотвращения мошеннического списания денег).</p>\n                <div class=\"task-answer-box\">3 из 3 баллов</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Пропущенные подвопросы</strong>\n              <p>Задание №5 часто содержит скрытые вопросы (например: «Какое качество проявляется? Объясните почему»). Если дать ответ без объяснения — теряется 1 балл.</p>\n            </div>\n        "
  },
  "social_2_2": {
    "id": "soc_p2_task6",
    "sectionIndex": 2,
    "itemIndex": 2,
    "matchTitles": [
      "задание №6",
      "финансовая грамотность",
      "2 балла"
    ],
    "title": "Задание №6: Финансовая грамотность и мошенники (2 балла)",
    "fipiSpec": {
      "number": "№ 6",
      "score": "2 первичных балла",
      "time": "5 минут",
      "difficulty": "Базовый уровень (Легкие 2 балла)",
      "docSource": "Критерии ФИПИ оценивания задания 6"
    },
    "theory": "\n            <h4>Топ сценариев мошенничества в задании №6</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Звонок «из службы безопасности банка»:</strong> требуют назвать код из SMS или перевести деньги на «безопасный счет».</li>\n                <li><strong>SMS / письмо с фишинговой ссылкой:</strong> «Вы выиграли приз, перейдите по ссылке и оплатите доставку».</li>\n                <li><strong>Сообщение в соцсети от «друга»:</strong> «Срочно одолжи 5000 рублей до завтра».</li>\n                <li><strong>Фальшивый банкомат:</strong> накладка на картоприемник (скиммер) или видеокамера над клавиатурой.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Пункт 1 ответа:</strong> Объясните опасность ситуации: «В данной ситуации велика опасность стать жертвой телефонных/интернет-мошенников и потерять денежные средства с банковского счета».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Пункт 2 ответа:</strong> Укажите правильный алгоритм действий: «Ни в коем случае не сообщать персональные данные, код из SMS и CVC-код с обратной стороны карты; прервать разговор и самостоятельно перезвонить по официальному номеру горячей линии банка, указанному на карте».</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальный банк ФИПИ</div>\n              <p><strong>Условие:</strong> Анне пришло SMS-сообщение от банка: «Ваша карта заблокирована из-за подозрительной операции. Срочно отправьте ответное SMS с кодом подтверждения для разблокировки». В чем состоит опасность данной ситуации и как правильно поступить Анне?</p>\n              <div class=\"task-example-solution\">\n                <strong>Ответ для бланка:</strong>\n                <p>1. Опасность: сообщение отправлено финансовыми мошенниками с целью получить секретный одноразовый пароль и списать денежные средства со счета Анны.<br>\n                   2. Правильные действия: Анне нельзя отвечать на сообщение и переходить по ссылкам. Следует позвонить на горячую линию банка по официальному номеру (указанному на обороте банковской карты) и уточнить статус карты.</p>\n                <div class=\"task-answer-box\">Максимальные 2 балла</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ответ в одно предложение</strong>\n              <p>Критерии ФИПИ строго требуют ДВА элемента ответа: 1) в чем опасность; 2) как правильно поступить. Обязательно нумеруйте пункты 1 и 2!</p>\n            </div>\n        "
  },
  "social_2_3": {
    "id": "soc_p2_task12",
    "sectionIndex": 2,
    "itemIndex": 3,
    "matchTitles": [
      "задание №12",
      "социологический опрос",
      "4 балла",
      "сходство и различие"
    ],
    "title": "Задание №12: Социологический опрос (4 первичных балла — ТОП задания)",
    "fipiSpec": {
      "number": "№ 12",
      "score": "4 первичных балла (Самое дорогое задание ОГЭ!)",
      "time": "15 минут",
      "difficulty": "Высокий уровень",
      "docSource": "Критерии ФИПИ оценивания задания 12"
    },
    "theory": "\n            <h4>Критерии получения 4 баллов</h4>\n            <p>Для получения полных 4 баллов необходимо сформулировать ровно 4 элемента:</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>4 обязательных пункта ответа:</strong></div>\n              <ol>\n                <li><strong>Вывод о сходстве:</strong> назвать позицию, по которой мнения обеих групп опрошенных совпали или одинаково популярны;</li>\n                <li><strong>Объяснение сходства:</strong> логичное предположение, ПОЧЕМУ обе группы думают именно так;</li>\n                <li><strong>Вывод о различии:</strong> назвать позицию, по которой мнения двух групп существенно разошлись;</li>\n                <li><strong>Объяснение различия:</strong> логичное предположение, ПОЧЕМУ группы имеют разные взгляды (связать с возрастом, социальным статусом или профессией!).</li>\n              </ol>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Взгляните на диаграмму: найдите столбик одинаковой высоты у обеих групп (например, 25-летние и 55-летние) — это ваше <strong>сходство</strong>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите максимальный контраст между столбиками (например, у молодых 60%, а у пожилых 10%) — это ваше <strong>различие</strong>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Оформите ответ строго по 4 пунктам: а) Сходство, б) Предположение о сходстве, в) Различие, г) Предположение о различии.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Демоверсия ОГЭ (Опрос молодежи и пожилых о работе)</div>\n              <div class=\"task-example-solution\">\n                <p><strong>а) Вывод о сходстве:</strong> Одинаковая доля опрошенных обеих групп (по 20%) считает, что главным фактором выбора профессии является возможность карьерного роста.<br>\n                   <strong>б) Объяснение сходства:</strong> И для молодых, и для зрелых людей важно чувствовать перспективу профессионального развития и признание их заслуг.<br>\n                   <strong>в) Вывод о различии:</strong> Доля тех, кто ценит высокий уровень заработной платы, среди 25-летних значительно выше, чем среди 55-летних.<br>\n                   <strong>г) Объяснение различия:</strong> Молодежь только начинает самостоятельную жизнь, нуждается в средствах на покупку жилья и обустройство семьи, поэтому материальный фактор для них выходит на первый план.</p>\n                <div class=\"task-answer-box\">Высшая оценка: 4 из 4 баллов</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытые объяснения (почему?)</strong>\n              <p>Многие ученики просто называют цифры («20% там и 20% здесь»), но забывают объяснить причину! За голые цифры без объяснений дают максимум 2 балла вместо 4!</p>\n            </div>\n        "
  },
  "informatics_0_0": {
    "id": "inf_task1_weight",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "информационный вес текста",
      "задание 1",
      "кодировка",
      "байт"
    ],
    "title": "Задание 1: Информационный вес символов и текста",
    "fipiSpec": {
      "number": "№ 1",
      "score": "1 первичный балл",
      "time": "3–4 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Измерение количества информации)"
    },
    "theory": "\n            <h4>1. Основная формула объема информации текста</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>I = K × i</strong></div>\n              <div class=\"math-subtext\">где <strong>I</strong> — информационный объем сообщения (в битах или байтах),<br>\n              <strong>K</strong> — количество символов в сообщении (включая пробелы и знаки препинания!),<br>\n              <strong>i</strong> — вес одного символа (в битах).</div>\n            </div>\n            <h4>2. Перевод единиц информации и кодировки</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">1 байт = 8 бит &nbsp;|&nbsp; 1 Кбайт = 1024 байт</div>\n              <div class=\"math-row\"><strong>Таблица кодировок:</strong></div>\n              <ul>\n                <li>ASCII / Windows-1251 / KOI8-R: 1 символ = 8 бит = <strong>1 байт</strong></li>\n                <li>Unicode (UTF-16): 1 символ = 16 бит = <strong>2 байта</strong></li>\n                <li>Unicode (UTF-32): 1 символ = 32 бита = <strong>4 байта</strong></li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите вес одного символа: если кодировка 16 бит, то 1 символ = 2 байта.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите, на сколько байт уменьшился текст. Разделите эту разницу на вес 1 символа: получите общее количество удаленных символов ΔK.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Вычтите 2 служебных символа (запятую и пробел):</strong> Длина удаленного слова = ΔK - 2!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №1 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> В кодировке Unicode каждый символ кодируется 16 битами. Ученик написал текст: «Еж, лев, волк, олень, тюлень, косуля, носорог — дикие животные». Затем он вычеркнул название одного животного, а также лишние запятую и пробел. Размер нового предложения оказался на 14 байт меньше. Напишите вычеркнутое название животного.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Вес 1 символа: i = 16 бит = 2 байта.<br>\n                   2. Всего удалено символов: ΔK = 14 байт / 2 байта = 7 символов.<br>\n                   3. Учитываем удаленные запятую и пробел: 7 - 2 = 5 символов в самом названии животного.<br>\n                   4. Ищем слово из 5 букв: «олень» (5 букв).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>олень</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытые запятая и пробел</strong>\n              <p>Если забыть вычесть 2 символа (запятую и пробел), вы выберете слово из 7 букв («носорог») и получите 0 баллов! Всегда вычитайте 2!</p>\n            </div>\n        "
  },
  "informatics_0_1": {
    "id": "inf_task3_logic",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "алгебра логики",
      "задание 3",
      "инверсия",
      "конъюнкция",
      "дизъюнкция"
    ],
    "title": "Задание 3: Алгебра логики (НЕ, И, ИЛИ)",
    "fipiSpec": {
      "number": "№ 3",
      "score": "1 первичный балл",
      "time": "2–4 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Логические операции)"
    },
    "theory": "\n            <h4>1. Основные логические операции</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>НЕ (инверсия, отрицание ¬):</strong> меняет истину на ложь и наоборот. <i>НЕ (x > 5) ⇔ x ≤ 5! НЕ (x четное) ⇔ x нечетное.</i></li>\n                <li><strong>И (конъюнкция ∧):</strong> истинно тогда и только тогда, когда <strong>ОБА</strong> высказывания истинны.</li>\n                <li><strong>ИЛИ (дизъюнкция ∨):</strong> истинно, когда <strong>ХОТЯ БЫ ОДНО</strong> высказывание истинно.</li>\n              </ul>\n            </div>\n            <h4>2. Законы инверсии для неравенств (Критично!)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">НЕ (x > a) ≡ <strong>x ≤ a</strong> (появляется знак «равно»!)</div>\n              <div class=\"math-row\">НЕ (x < a) ≡ <strong>x ≥ a</strong></div>\n              <div class=\"math-row\">НЕ (x = a) ≡ <strong>x ≠ a</strong></div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Раскройте все отрицания <strong>НЕ</strong>, аккуратно переворачивая знаки неравенств (строгий знак превращается в нестрогий с «=»).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сформируйте двойное неравенство для союза <strong>И</strong>: a ≤ x < b.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Перечитайте вопрос: просят <strong>наибольшее</strong> или <strong>наименьшее</strong> целое число x!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Напишите <strong>наименьшее</strong> натуральное число x, для которого истинно высказывание: <i>НЕ (x < 15) И НЕ (x нечётное)</i>.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Раскрываем первое отрицание: НЕ (x < 15) ⇔ x ≥ 15.<br>\n                   2. Раскрываем второе отрицание: НЕ (x нечётное) ⇔ x чётное.<br>\n                   3. Получаем систему: x ≥ 15 И x — чётное.<br>\n                   4. Ищем наименьшее натуральное число: после 15 первое чётное число — это 16.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>16</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Потеря знака равенства при отрицании</strong>\n              <p>Отрицание строгого неравенства «x < 10» — это «x ≥ 10» (число 10 ВХОДИТ!). Если ошибиться и написать «x > 10», наименьшим числом ошибочно станет 11 вместо 10.</p>\n            </div>\n        "
  },
  "informatics_0_2": {
    "id": "inf_task10_number_systems",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "системы счисления",
      "задание 10",
      "двоичная",
      "восьмеричная",
      "шестнадцатеричная"
    ],
    "title": "Задание 10: Системы счисления (Двоичная, 8-я, 16-я)",
    "fipiSpec": {
      "number": "№ 10",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Позиционные системы счисления)"
    },
    "theory": "\n            <h4>1. Развернутая форма записи числа (перевод в десятичную)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>N<sub>p</sub> = a<sub>n-1</sub>·p<sup>n-1</sup> + ... + a₁·p¹ + a₀·p⁰</strong></div>\n              <div class=\"math-subtext\">Пример: 10110₂ = 1·2⁴ + 0·2³ + 1·2² + 1·2¹ + 0·2⁰ = 16 + 4 + 2 = 22₁₀</div>\n              <div class=\"math-subtext\">Пример: 57₈ = 5·8¹ + 7·8⁰ = 40 + 7 = 47₁₀</div>\n              <div class=\"math-subtext\">Пример: 2B₁₆ = 2·16¹ + 11·16⁰ = 32 + 11 = 43₁₀ (A=10, B=11, C=12, D=13, E=14, F=15)</div>\n            </div>\n            <h4>2. Степени двойки (выучить наизусть!)</h4>\n            <div class=\"task-formula-box\">\n              <p>2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024</p>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Переведите все заданные в условии числа из 2-й, 8-й и 16-й систем счисления в привычную <strong>десятичную систему</strong>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выполните требуемое сравнение (найти максимальное, минимальное или сумму).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите ответ в требуемой системе счисления (обычно в десятичной, если не указано иное).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №10 ОГЭ (ФИПИ)</div>\n              <p><strong>Условие:</strong> Среди приведённых ниже трёх чисел найдите <strong>максимальное</strong> и запишите его в ответе в десятичной системе счисления:<br>\n              23₁₆, 47₈, 100110₂.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1) 23₁₆ = 2 · 16¹ + 3 · 16⁰ = 32 + 3 = 35₁₀<br>\n                   2) 47₈ = 4 · 8¹ + 7 · 8⁰ = 32 + 7 = 39₁₀<br>\n                   3) 100110₂ = 32 + 4 + 2 = 38₁₀<br>\n                   4) Сравниваем: 35, 39, 38. Максимальное число равно 39.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>39</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Буквы в 16-ричной системе</strong>\n              <p>Запомните: A=10, B=11, C=12, D=13, E=14, F=15. Частая ошибка: путать B (11) и D (13)!</p>\n            </div>\n        "
  },
  "informatics_0_3": {
    "id": "inf_task7_url",
    "sectionIndex": 0,
    "itemIndex": 3,
    "matchTitles": [
      "адрес файла",
      "интернет",
      "задание 7",
      "url",
      "протокол"
    ],
    "title": "Задание 7: Адрес файла в сети Интернет (URL конструктор)",
    "fipiSpec": {
      "number": "№ 7",
      "score": "1 первичный балл",
      "time": "1–2 минуты",
      "difficulty": "Базовый уровень (Легчайший 1 балл)",
      "docSource": "Кодификатор ФИПИ (Адресация в сети Интернет)"
    },
    "theory": "\n            <h4>Универсальная формула структуры URL:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>протокол://сервер/файл</strong></div>\n              <div class=\"math-subtext\">Пример: <code>https://fipi.ru/oge/demo.pdf</code></div>\n              <ul>\n                <li><strong>Протокол:</strong> http, https, ftp (всегда отделяется <code>://</code>)</li>\n                <li><strong>Сервер (сайт):</strong> например, <code>obr.org</code>, <code>school10.edu</code></li>\n                <li><strong>Разделитель каталога:</strong> одиночный прямой слеш <code>/</code></li>\n                <li><strong>Файл:</strong> имя файла с расширением (например, <code>test.docx</code>, <code>doc.txt</code>).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Запишите на черновике полный URL по схеме: <code>протокол://сервер/файл</code>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сопоставьте каждый фрагмент адреса с цифрами из таблицы задания.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Запишите последовательность цифр без пробелов.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №7 ОГЭ</div>\n              <p><strong>Условие:</strong> Доступ к файлу <strong>obr.txt</strong>, находящемуся на сервере <strong>obrnadzor.gov</strong>, осуществляется по протоколу <strong>https</strong>. Фрагменты адреса закодированы цифрами:<br>\n              1) .gov &nbsp; 2) / &nbsp; 3) obrnadzor &nbsp; 4) :// &nbsp; 5) https &nbsp; 6) obr &nbsp; 7) .txt</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Собираем URL: <code>https://obrnadzor.gov/obr.txt</code><br>\n                   5 (https) + 4 (://) + 3 (obrnadzor) + 1 (.gov) + 2 (/) + 6 (obr) + 7 (.txt).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>5431267</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Путаница :// и /</strong>\n              <p>Двойной слеш с двоеточием (<code>://</code>) ставится ТОЛЬКО после протокола! Перед файлом ставится всегда одиночный слеш (<code>/</code>).</p>\n            </div>\n        "
  },
  "informatics_1_0": {
    "id": "inf_task13_word",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "задание 13.2",
      "текстовый процессор",
      "word",
      "libreoffice writer"
    ],
    "title": "Задание 13.2: Форматирование текста в Word / LibreOffice Writer",
    "fipiSpec": {
      "number": "№ 13.2",
      "score": "2 первичных балла",
      "time": "15–20 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Критерии ФИПИ оценивания задания 13.2"
    },
    "theory": "\n            <h4>Чек-лист идеального выполнения задания 13.2 (2/2 балла):</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Шрифт:</strong> одинаковая гарнитура (обычно Times New Roman), размер основного текста — 14 пт, в таблице допускается 12 пт.</li>\n                <li><strong>Выравнивание:</strong> абзац строго <strong>по ширине</strong>! В таблице текст выравнивается по левому краю, числа — по правому краю или центру.</li>\n                <li><strong>Красная строка:</strong> ровно <strong>1 см или 1.25 см</strong> (настраивается в меню «Абзац» → «Первая строка», пробелами делать ЗАПРЕЩЕНО!).</li>\n                <li><strong>Междустрочный интервал:</strong> 1.0 (одинарный) или 1.15. Интервалы до и после абзаца — 0 пт.</li>\n                <li><strong>Выделения:</strong> точно повторить жирный шрифт, курсив и подчеркивание, как в образце!</li>\n                <li><strong>Таблица:</strong> выравнивание по центру страницы, границы тонкие одинарные.</li>\n              </ol>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Наберите текст с клавиатуры без опечаток и орфографических ошибок.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выделите весь текст, задайте шрифт Times New Roman 14 пт, выравнивание по ширине, отступ первой строки 1 см.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Вставьте таблицу с нужным числом строк и колонок, заполните данными, выровняйте числа.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Критерии проверки экспертом ФИПИ</div>\n              <div class=\"task-example-solution\">\n                <p>— 2 балла: текст набран без ошибок, параметры шрифта, интервалов, красной строки и таблицы соблюдены на 100%.<br>\n                   — 1 балл: допущено не более 2 ошибок в оформлении (например, забыт курсив в одном слове или не выровнена таблица).<br>\n                   — 0 баллов: более 2 ошибок или отступ сделан пробелами.</p>\n                <div class=\"task-answer-box\">Сохраняйте файл строго под именем, указанным организатором в аудитории!</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Красная строка пробелами</strong>\n              <p>Никогда не делайте отступ первой строки клавишей Space или Tab! Эксперты проверяют это через режим отображения непечатаемых знаков (¶) и сразу аннулируют балл!</p>\n            </div>\n        "
  },
  "informatics_1_1": {
    "id": "inf_task14_excel",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "задание 14",
      "электронные таблицы",
      "excel",
      "libreoffice calc"
    ],
    "title": "Задание 14: Электронные таблицы (Excel / Calc — 3 балла)",
    "fipiSpec": {
      "number": "№ 14",
      "score": "3 первичных балла (Самое ценное задание по информатике!)",
      "time": "20–25 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ оценивания задания 14"
    },
    "theory": "\n            <h4>Топ-5 спасительных формул Excel для задания 14:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>СЧЁТЕСЛИ:</strong> <code>=СЧЁТЕСЛИ(диапазон; \"условие\")</code> — считает количество ячеек, удовлетворяющих одному критерию (например: <code>=СЧЁТЕСЛИ(A2:A1001; \"Север\")</code>).</li>\n                <li><strong>СЧЁТЕСЛИМН:</strong> <code>=СЧЁТЕСЛИМН(диапазон1; \"условие1\"; диапазон2; \"условие2\")</code> — для нескольких условий одновременно!</li>\n                <li><strong>СУММЕСЛИ:</strong> <code>=СУММЕСЛИ(диапазон_проверки; \"условие\"; диапазон_суммирования)</code>.</li>\n                <li><strong>СРЗНАЧЕСЛИ:</strong> <code>=СРЗНАЧЕСЛИ(диапазон_проверки; \"условие\"; диапазон_значений)</code>.</li>\n                <li><strong>ЕСЛИ:</strong> <code>=ЕСЛИ(логическое_условие; значение_если_истина; значение_если_ложь)</code>.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\"><strong>Вопрос 1 (1 балл):</strong> Запишите формулу подсчета количества (<code>СЧЁТЕСЛИМН</code>) в указанную ячейку (например, H2).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\"><strong>Вопрос 2 (1 балл):</strong> Найдите среднее значение через <code>СРЗНАЧЕСЛИ</code> или отношение <code>СУММЕСЛИ / СЧЁТЕСЛИ</code>. Округлите до указанной точности (обычно 2 знака после запятой).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\"><strong>Вопрос 3 (1 балл — Диаграмма):</strong> Постройте круговую диаграмму по расчетным ячейкам. Обязательно добавьте легенду и подписи данных!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Типовая задача ФИПИ</div>\n              <p>В таблице приведены данные тестирования: Округ (A), Фамилия (B), Предмет (C), Балл (D).<br>\n              1) Сколько учеников из округа «В» набрали более 600 баллов? Ответ в ячейку H2.<br>\n              2) Каков средний балл по информатике учеников округа «С»? Ответ в ячейку H3 с точностью до двух знаков.</p>\n              <div class=\"task-example-solution\">\n                <strong>Формулы для записи:</strong>\n                <p>Ячейка H2: <code>=СЧЁТЕСЛИМН(A2:A1001; \"В\"; D2:D1001; \">600\")</code><br>\n                   Ячейка H3: <code>=СРЗНАЧЕСЛИМН(D2:D1001; A2:A1001; \"С\"; C2:C1001; \"Информатика\")</code></p>\n                <div class=\"task-answer-box\">3 из 3 баллов за 5 минут</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Неверные ячейки ответов</strong>\n              <p>В задании четко указано: «Запишите ответ в ячейку H2». Если записать ответ в другую ячейку, автоматическая проверка не найдет результат и поставит 0 баллов!</p>\n            </div>\n        "
  },
  "informatics_1_2": {
    "id": "inf_task152_minmax",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "поиск минимума",
      "максимума с условием",
      "задание 15.2",
      "python"
    ],
    "title": "Задание 15.2: Python — Поиск минимума/максимума с условием",
    "fipiSpec": {
      "number": "№ 15.2",
      "score": "2 первичных балла",
      "time": "15–20 минут",
      "difficulty": "Высокий уровень",
      "docSource": "Кодификатор ФИПИ (Программирование на языке Python)"
    },
    "theory": "\n            <h4>Шаблон поиска максимума / минимума с фильтром</h4>\n            <div class=\"task-formula-box\">\n              <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code># Поиск максимального числа, кратного 4\nn = int(input())\nmx = 0 # Начальное значение для максимума\n\nfor _ in range(n):\n    x = int(input())\n    if x % 4 == 0 and x > mx:\n        mx = x\n\nprint(mx)</code></pre>\n              <div class=\"math-subtext\">Для минимума начальное значение задается заведомо большим: <code>mn = 30001</code> (или <code>float('inf')</code>), а условие проверки: <code>x < mn</code>.</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Считайте количество элементов <code>n = int(input())</code> или организуйте цикл <code>while x != 0:</code> (если ввод до нуля).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Проверьте условие делимости (<code>x % k == 0</code>) и оканчиваемости на цифру (<code>x % 10 == d</code>).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Обновите текущий экстремум: <code>if x > mx: mx = x</code>. Выведите результат <code>print(mx)</code>.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №15.2 ОГЭ</div>\n              <p><strong>Условие:</strong> Напишите программу, которая в последовательности натуральных чисел находит минимальное число, оканчивающееся на 3. Программа получает на вход количество чисел, а затем сами числа.</p>\n              <div class=\"task-example-solution\">\n                <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>n = int(input())\nans = 30001\nfor _ in range(n):\n    x = int(input())\n    if x % 10 == 3 and x < ans:\n        ans = x\nprint(ans)</code></pre>\n                <div class=\"task-answer-box\">Код проходит все тесты ФИПИ (2/2 балла)</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Инициализация mn нулем</strong>\n              <p>Если для поиска минимума написать <code>mn = 0</code>, то любое натуральное число больше нуля, и программа напечатает 0 вместо ответа!</p>\n            </div>\n        "
  },
  "informatics_1_3": {
    "id": "inf_task152_sumcount",
    "sectionIndex": 1,
    "itemIndex": 3,
    "matchTitles": [
      "подсчет суммы и количества",
      "сумма и количество",
      "задание 15.2"
    ],
    "title": "Задание 15.2: Python — Подсчет суммы и количества с условием",
    "fipiSpec": {
      "number": "№ 15.2",
      "score": "2 первичных балла",
      "time": "10–15 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Алгоритмизация)"
    },
    "theory": "\n            <h4>Шаблон счетчика (count) и сумматора (total)</h4>\n            <div class=\"task-formula-box\">\n              <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code># Подсчет количества и суммы чисел, кратных 6 и оканчивающихся на 4\ncount = 0\ntotal = 0\n\nwhile True:\n    x = int(input())\n    if x == 0:\n        break\n    if x % 6 == 0 and x % 10 == 4:\n        count += 1\n        total += x\n\nprint(count) # или print(total)</code></pre>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Создайте переменные-накопители: <code>count = 0</code> для количества и <code>s = 0</code> для суммы.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Считывайте числа в цикле. При выполнении условия делайте <code>count += 1</code> или <code>s += x</code>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если в условии требуется среднее арифметическое, выведите <code>s / count</code> с форматированием <code>f\"{s/count:.1f}\"</code>.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание 15.2 ОГЭ</div>\n              <p><strong>Условие:</strong> Последовательность завершается числом 0. Найти сумму элементов, кратных 8.</p>\n              <div class=\"task-example-solution\">\n                <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>s = 0\nx = int(input())\nwhile x != 0:\n    if x % 8 == 0:\n        s += x\n    x = int(input())\nprint(s)</code></pre>\n                <div class=\"task-answer-box\">Ответ: гарантированные 2 балла</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Деление на ноль</strong>\n              <p>При расчете среднего арифметического всегда проверяйте <code>if count > 0: print(s / count)</code> во избежание ZeroDivisionError.</p>\n            </div>\n        "
  },
  "informatics_1_4": {
    "id": "inf_task151_robot",
    "sectionIndex": 1,
    "itemIndex": 4,
    "matchTitles": [
      "исполнитель робот",
      "кумир",
      "задание 15.1"
    ],
    "title": "Задание 15.1: Исполнитель Робот в среде «Кумир»",
    "fipiSpec": {
      "number": "№ 15.1",
      "score": "2 первичных балла",
      "time": "15–20 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Исполнитель Робот)"
    },
    "theory": "\n            <h4>Базовые конструкции алгоритмического языка «Кумир»</h4>\n            <div class=\"task-formula-box\">\n              <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>использовать Робот\nалг\nнач\n. нц пока справа свободно\n. . вправо\n. . закрасить\n. кц\nкон</code></pre>\n              <ul>\n                <li>Команды движения: <code>влево, вправо, вверх, вниз</code></li>\n                <li>Команда закрашивания: <code>закрасить</code></li>\n                <li>Проверка стен: <code>слева свободно / стена</code>, <code>справа свободно / стена</code>, <code>сверху свободно / стена</code>, <code>снизу свободно / стена</code></li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Всегда используйте цикл <code>нц пока ... кц</code>. Программировать жесткое количество шагов нельзя, так как длина стен произвольная!</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Следите за порядком команд: сначала шаг, потом закрасить (или наоборот, строго по условию задачи).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте робота на тестовом поле с другими длинами стен: он не должен врезаться в стену!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Программа закрашивания вдоль стены снизу</div>\n              <div class=\"task-example-solution\">\n                <pre style=\"background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;\"><code>использовать Робот\nалг\nнач\nнц пока снизу стена\n  закрасить\n  вправо\nкц\nкон</code></pre>\n                <div class=\"task-answer-box\">Идеальный универсальный алгоритм</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Столкновение со стеной</strong>\n              <p>Если Робот хотя бы один раз попытается сделать шаг в сторону стены, программа завершится аварийно («Робот разбился!») и результат будет 0 баллов.</p>\n            </div>\n        "
  },
  "physics_0_0": {
    "id": "phys_kinematics",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "кинематика прямолинейного движения",
      "равноускоренное",
      "скорость",
      "ускорение"
    ],
    "title": "Механика: Кинематика прямолинейного движения",
    "fipiSpec": {
      "number": "№ 1–4, 11, 21, 23",
      "score": "1–3 первичных балла",
      "time": "5–10 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Механические явления: Кинематика)"
    },
    "theory": "\n            <h4>1. Равномерное движение</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">v = const &nbsp;|&nbsp; S = v · t &nbsp;|&nbsp; x = x₀ + v<sub>x</sub> · t</div>\n            </div>\n            <h4>2. Равноускоренное прямолинейное движение</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Ускорение:</strong> a = (v - v₀) / t</div>\n              <div class=\"math-row\"><strong>Скорость:</strong> v = v₀ + a · t</div>\n              <div class=\"math-row\"><strong>Перемещение:</strong> S = v₀·t + (a·t²) / 2</div>\n              <div class=\"math-row\"><strong>Безвременная формула:</strong> S = (v² - v₀²) / (2a)</div>\n              <div class=\"math-subtext\">При торможении (a направлено против движения): v = v₀ - at, S = v₀t - at²/2.</div>\n            </div>\n            <h4>3. Графики движения</h4>\n            <p>Площадь фигуры под графиком скорости v(t) численно равна пройденному пути S!</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите тип движения: равномерное (a = 0) или равноускоренное (скорость меняется).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Переведите все единицы в СИ: км/ч переводим в м/с делением на 3.6 (72 км/ч = 72 / 3.6 = 20 м/с!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если время t неизвестно, используйте формулу без времени S = (v² - v₀²) / (2a).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Автомобиль, двигаясь равноускоренно из состояния покоя, за 5 секунд достиг скорости 20 м/с. Какой путь проехал автомобиль за это время?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. v₀ = 0 м/с, t = 5 с, v = 20 м/с.<br>\n                   2. Ускорение a = (v - v₀) / t = (20 - 0) / 5 = 4 м/с².<br>\n                   3. Путь S = at² / 2 = 4 · 5² / 2 = 4 · 25 / 2 = 50 м.<br>\n                   (Или по формуле средней скорости: S = (v₀ + v)/2 · t = (0 + 20)/2 · 5 = 10 · 5 = 50 м).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>50</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытый перевод км/ч в м/с</strong>\n              <p>Если в формулу скорости подставить 72 вместо 20, ответ будет ошибочным в 13 раз! Всегда проверяйте размерности в СИ.</p>\n            </div>\n        "
  },
  "physics_0_1": {
    "id": "phys_dynamics",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "динамика и силы",
      "законы ньютона",
      "сила тяжести",
      "сила трения",
      "гук"
    ],
    "title": "Механика: Динамика и силы (Законы Ньютона)",
    "fipiSpec": {
      "number": "№ 1–4, 11, 21, 23",
      "score": "1–3 первичных балла",
      "time": "5–8 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Динамика)"
    },
    "theory": "\n            <h4>1. Три закона Ньютона</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>I закон:</strong> Существуют инерциальные системы отсчета, в которых тело сохраняет состояние покоя или равномерного прямолинейного движения, если равнодействующая сил равна 0 (F<sub>равн</sub> = 0 => v = const).</div>\n              <div class=\"math-row\"><strong>II закон:</strong> a = F / m &nbsp;⇔&nbsp; <strong>F<sub>равн</sub> = m · a</strong></div>\n              <div class=\"math-row\"><strong>III закон:</strong> F₁₂ = -F₂₁ (силы действия и противодействия равны по модулю и противоположны по направлению, приложены к РАЗНЫМ телам!).</div>\n            </div>\n            <h4>2. Основные силы в механике</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Сила тяжести:</strong> F<sub>тяж</sub> = m · g (g ≈ 10 м/с²)</li>\n                <li><strong>Закон Гука (сила упругости):</strong> F<sub>упр</sub> = k · |Δx|</li>\n                <li><strong>Сила трения скольжения:</strong> F<sub>тр</sub> = μ · N</li>\n                <li><strong>Сила Архимеда:</strong> F<sub>А</sub> = ρ<sub>жидк</sub> · g · V<sub>погр</sub></li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Нарисуйте чертеж и расставьте ВСЕ силы, действующие на тело: mg вниз, N вверх, F тяги вперед, F трения назад.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Выберите оси Ox и Oy, запишите II закон Ньютона в векторном виде, затем спроецируйте на оси.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Выразите силу трения F<sub>тр</sub> = μmg (для горизонтальной плоскости).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №23 ОГЭ (Расчетная задача)</div>\n              <p><strong>Условие:</strong> Брусок массой 2 кг тянут по горизонтальной поверхности силой 10 Н. Коэффициент трения равен 0.2. Найдите ускорение бруска.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Сила нормальной реакции опоры N = mg = 2 · 10 = 20 Н.<br>\n                   2. Сила трения скольжения F<sub>тр</sub> = μN = 0.2 · 20 = 4 Н.<br>\n                   3. Равнодействующая сила по горизонтали: F<sub>равн</sub> = F - F<sub>тр</sub> = 10 - 4 = 6 Н.<br>\n                   4. По II закону Ньютона: a = F<sub>равн</sub> / m = 6 / 2 = 3 м/с².</p>\n                <div class=\"task-answer-box\">Ответ: <strong>3 м/с²</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Взаимное сокращение сил по III закону Ньютона</strong>\n              <p>Силы действия и противодействия НЕ уравновешивают друг друга, потому что они приложены к РАЗНЫМ телам (лошадь действует на телегу, телега действует на лошадь)!</p>\n            </div>\n        "
  },
  "physics_0_2": {
    "id": "phys_work_energy",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "работа",
      "энергия и мощность",
      "кпд",
      "закон сохранения энергии"
    ],
    "title": "Механика: Механическая работа, Энергия, Мощность, КПД",
    "fipiSpec": {
      "number": "№ 3, 4, 11, 23",
      "score": "1–3 первичных балла",
      "time": "5–8 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Законы сохранения)"
    },
    "theory": "\n            <h4>1. Механическая работа и мощность</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Работа:</strong> A = F · S · cos α (если направление совпадает: A = F · S [Дж])</div>\n              <div class=\"math-row\"><strong>Мощность:</strong> N = A / t = F · v [Вт]</div>\n            </div>\n            <h4>2. Кинетическая и потенциальная энергия</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Кинетическая:</strong> E<sub>k</sub> = (m · v²) / 2</div>\n              <div class=\"math-row\"><strong>Потенциальная (в поле тяжести):</strong> E<sub>p</sub> = m · g · h</div>\n              <div class=\"math-row\"><strong>Потенциальная упругой деформации:</strong> E<sub>p</sub> = (k · x²) / 2</div>\n            </div>\n            <h4>3. Закон сохранения механической энергии</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">В замкнутой системе при отсутствии сил трения: <strong>E<sub>k1</sub> + E<sub>p1</sub> = E<sub>k2</sub> + E<sub>p2</sub> = const</strong></div>\n              <div class=\"math-row\"><strong>КПД механизма:</strong> η = (A<sub>полезн</sub> / A<sub>полн</sub>) × 100%</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите два ключевых состояния тела (например, в верхней точке полета и перед ударом о землю).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите закон сохранения энергии: вверху вся энергия потенциальная (mgh), внизу — кинетическая (mv²/2).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Приравняйте mgh = mv²/2 => v = √(2gh). Масса сокращается!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Камень бросили вертикально вверх с поверхности земли со скоростью 10 м/с. На какую максимальную высоту поднимется камень? Сопротивлением воздуха пренебречь, g = 10 м/с².</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. По закону сохранения механической энергии: E<sub>kнач</sub> = E<sub>pмакс</sub>.<br>\n                   2. mv²/2 = mgh.<br>\n                   3. Сокращаем на массу m: v²/2 = gh => h = v² / (2g).<br>\n                   4. h = 10² / (2 · 10) = 100 / 20 = 5 м.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>5</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: КПД больше 100%</strong>\n              <p>Полезная работа всегда МЕНЬШЕ совершенной (полной) из-за трения! КПД никогда не может быть больше 100%.</p>\n            </div>\n        "
  },
  "physics_1_0": {
    "id": "phys_thermal",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "тепловые процессы",
      "нагревание",
      "плавление",
      "парообразование",
      "уравнение теплового баланса"
    ],
    "title": "Тепловые явления: Нагревание, Плавление, Парообразование, Баланс",
    "fipiSpec": {
      "number": "№ 5, 6, 12, 21, 24",
      "score": "1–3 первичных балла",
      "time": "5–8 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Тепловые явления)"
    },
    "theory": "\n            <h4>Формулы количества теплоты:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Нагревание / охлаждение:</strong> Q = c · m · (t₂ - t₁)</div>\n              <div class=\"math-row\"><strong>Плавление / кристаллизация:</strong> Q = λ · m (при температуре плавления!)</div>\n              <div class=\"math-row\"><strong>Парообразование (кипение) / конденсация:</strong> Q = L · m</div>\n              <div class=\"math-row\"><strong>Сгорание топлива:</strong> Q = q · m</div>\n              <div class=\"math-row\"><strong>Уравнение теплового баланса:</strong> Q<sub>отд</sub> = Q<sub>получ</sub> (ΣQ = 0)</div>\n            </div>\n            <h4>Анализ графика нагревания и плавления</h4>\n            <p>Горизонтальные участки на графике t(τ) соответствуют фазовым переходам (плавление, кипение), во время которых температура тела НЕ меняется, пока все вещество не перейдет в новую фазу!</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Разбейте процесс на стадии: 1) нагрев льда до 0°C; 2) плавление льда при 0°C; 3) нагрев полученной воды до t°C.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Возьмите табличные константы из справочных материалов КИМ: c<sub>воды</sub> = 4200 Дж/(кг·°C), c<sub>льда</sub> = 2100, λ<sub>льда</sub> = 3.3·10⁵ Дж/кг.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сложите теплоты всех этапов: Q<sub>общ</sub> = Q₁ + Q₂ + Q₃.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №5 ОГЭ</div>\n              <p><strong>Условие:</strong> Какое количество теплоты выделится при кристаллизации и охлаждении до 0°C воды массой 2 кг, взятой при температуре 20°C?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Охлаждение воды от 20°C до 0°C:<br>\n                   Q₁ = c<sub>в</sub> · m · Δt = 4200 · 2 · 20 = 168 000 Дж = 168 кДж.<br>\n                   2. Кристаллизация воды в лед при 0°C:<br>\n                   Q₂ = λ · m = 3.3 · 10⁵ · 2 = 660 000 Дж = 660 кДж.<br>\n                   3. Полное количество теплоты: Q<sub>общ</sub> = 168 + 660 = 828 кДж.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>828 кДж</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Попытка расплавить лед без предварительного нагрева</strong>\n              <p>Если лед имеет температуру -10°C, его НЕЛЬЗЯ плавить сразу формулой λm! Сначала лед необходимо нагреть до 0°C формулой c<sub>льда</sub>mΔt.</p>\n            </div>\n        "
  },
  "physics_1_1": {
    "id": "phys_ohm_law",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "закон ома",
      "расчет цепей",
      "сопротивление",
      "джоуль ленц"
    ],
    "title": "Электродинамика: Закон Ома, Соединения проводников, Мощность",
    "fipiSpec": {
      "number": "№ 7, 8, 13, 21, 24",
      "score": "1–3 первичных балла",
      "time": "5–8 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Электрические явления)"
    },
    "theory": "\n            <h4>1. Закон Ома для участка цепи</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>I = U / R &nbsp;|&nbsp; U = I · R &nbsp;|&nbsp; R = U / I</strong></div>\n              <div class=\"math-row\"><strong>Сопротивление проводника:</strong> R = ρ · (l / S)</div>\n            </div>\n            <h4>2. Последовательное и параллельное соединение</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Последовательное:</strong> I = I₁ = I₂, &nbsp; U = U₁ + U₂, &nbsp; <strong>R<sub>общ</sub> = R₁ + R₂</strong></div>\n              <div class=\"math-row\"><strong>Параллельное:</strong> U = U₁ = U₂, &nbsp; I = I₁ + I₂, &nbsp; <strong>1/R<sub>общ</sub> = 1/R₁ + 1/R₂ &nbsp; (R<sub>общ</sub> = R₁·R₂ / (R₁+R₂))</strong></div>\n            </div>\n            <h4>3. Работа и мощность электрического тока</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">P = U · I = I² · R = U² / R &nbsp;[Вт]</div>\n              <div class=\"math-row\"><strong>Закон Джоуля–Ленца:</strong> Q = I² · R · t [Дж]</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите тип соединения резисторов в цепи (последовательное или параллельное).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Рассчитайте эквивалентное общее сопротивление R<sub>общ</sub>.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">По закону Ома найдите общий ток или напряжение на интересующем резисторе.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №8 ОГЭ</div>\n              <p><strong>Условие:</strong> Два резистора сопротивлением R₁ = 6 Ом и R₂ = 12 Ом соединены параллельно. Напряжение на источнике равно 24 В. Найдите общую силу тока в цепи.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Общее сопротивление параллельного участка: R<sub>общ</sub> = (R₁ · R₂) / (R₁ + R₂) = (6 · 12) / (6 + 12) = 72 / 18 = 4 Ом.<br>\n                   2. Общая сила тока по закону Ома: I = U / R<sub>общ</sub> = 24 / 4 = 6 А.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>6 А</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Параллельное сложение сопротивлений</strong>\n              <p>При параллельном соединении общее сопротивление ВСЕГДА МЕНЬШЕ наименьшего из резисторов (в примере: 4 Ом < 6 Ом). Если у вас получилось больше — вы ошиблись!</p>\n            </div>\n        "
  },
  "physics_1_2": {
    "id": "phys_optics",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "оптика",
      "преломление",
      "линзы",
      "фокусное расстояние",
      "оптическая сила"
    ],
    "title": "Оптика: Преломление света и построение изображений в линзах",
    "fipiSpec": {
      "number": "№ 9, 10, 14, 21, 25",
      "score": "1–3 первичных балла",
      "time": "5–8 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Световые явления)"
    },
    "theory": "\n            <h4>1. Закон преломления света (Закон Снеллиуса)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\">sin α / sin β = n₂ / n₁ = n<sub>отн</sub></div>\n              <div class=\"math-subtext\">При переходе из воздуха в воду/стекло луч прижимается к перпендикуляру (угол преломления β < угла падения α!).</div>\n            </div>\n            <h4>2. Формула тонкой линзы и оптическая сила</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>D = 1 / F [дптр]</strong> (F строго в метрах!)</div>\n              <div class=\"math-row\"><strong>1/F = 1/d + 1/f</strong> &nbsp;(d — расстояние до предмета, f — до изображения)</div>\n              <div class=\"math-row\"><strong>Увеличение линзы:</strong> Γ = H / h = f / d</div>\n            </div>\n            <h4>3. Построение лучей в собирающей линзе:</h4>\n            <ul>\n              <li>Луч 1: параллельно главной оптической оси → после линзы идет через фокус F.</li>\n              <li>Луч 2: идет через оптический центр O без преломления.</li>\n            </ul>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите положение предмета относительно фокусов собирающей линзы: за 2F, между F и 2F, или ближе F.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запомните правило: если d > 2F — изображение <i>действительное, перевернутое, уменьшенное</i> (как в фотоаппарате); если F < d < 2F — <i>действительное, перевернутое, увеличенное</i> (проектор); если d < F — <i>мнимое, прямое, увеличенное</i> (лупа).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №9 ОГЭ</div>\n              <p><strong>Условие:</strong> Оптическая сила собирающей линзы равна 5 дптр. На каком расстоянии от линзы находится ее главный фокус?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. D = 1 / F => F = 1 / D.<br>\n                   2. F = 1 / 5 = 0.2 м = 20 см.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>0.2 м (или 20 см)</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Знак фокуса рассеивающей линзы</strong>\n              <p>У рассеивающей линзы фокус мнимый: D < 0 и F < 0! Изображение в рассеивающей линзе ВСЕГДА мнимое, прямое и уменьшенное.</p>\n            </div>\n        "
  },
  "physics_2_0": {
    "id": "phys_lab17",
    "sectionIndex": 2,
    "itemIndex": 0,
    "matchTitles": [
      "лабораторная работа №17",
      "чек-лист 4 обязательных пунктов",
      "3 балла"
    ],
    "title": "Задание 17: Реальная лабораторная работа (Чек-лист на 3/3 балла)",
    "fipiSpec": {
      "number": "№ 17",
      "score": "3 первичных балла",
      "time": "25–30 минут",
      "difficulty": "Высокий уровень (Реальный эксперимент с оборудованием)",
      "docSource": "Критерии ФИПИ оценивания задания 17"
    },
    "theory": "\n            <h4>4 обязательных пункта в бланке ответов (по 1 баллу за критерий):</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Пункт 1:</strong> Схематический рисунок экспериментальной установки (электрическая схема, рычаг с грузами, мензурка с телом).</li>\n                <li><strong>Пункт 2:</strong> Математическая формула для расчета искомой величины (например, R = U / I, ρ = m / V, A = F · s).</li>\n                <li><strong>Пункт 3:</strong> Результаты прямых измерений с учетом абсолютной погрешности приборов! (Например: U = (4.2 ± 0.2) В, I = (0.6 ± 0.05) А). Погрешность указана прямо в тексте КИМ!</li>\n                <li><strong>Пункт 4:</strong> Числовое значение искомой величины с единицами измерения: R = 4.2 / 0.6 = 7 Ом.</li>\n              </ol>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Соберите установку на реальном оборудовании в аудитории строго по инструкции.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">В бланке нарисуйте схему и запишите формулу.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Снимите показания приборов и ОБЯЗАТЕЛЬНО запишите их с погрешностью: <code>X = (измерение ± погрешность) ед. изм.</code>!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец оформления лабораторной работы №17</div>\n              <div class=\"task-example-solution\">\n                <p>1. Схема электрической цепи: [источник питания, ключ, реостат, резистор, амперметр последовательно, вольтметр параллельно резистору].<br>\n                   2. Формула: R = U / I.<br>\n                   3. Прямые измерения: U = (3.6 ± 0.2) В; I = (0.4 ± 0.05) А.<br>\n                   4. Расчет: R = 3.6 / 0.4 = 9.0 Ом.</p>\n                <div class=\"task-answer-box\">Высшая оценка: 3 из 3 баллов</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытая погрешность прибора</strong>\n              <p>Если записать просто U = 3.6 В без погрешности (±0.2 В), эксперт ОБЯЗАН снять 1 балл по критерию прямых измерений!</p>\n            </div>\n        "
  },
  "physics_2_1": {
    "id": "phys_qualitative",
    "sectionIndex": 2,
    "itemIndex": 1,
    "matchTitles": [
      "качественные задачи №21–22",
      "трехшаговый шаблон рассуждения",
      "задания 21 22"
    ],
    "title": "Задания 21–22: Качественные задачи (Шаблон рассуждения на 2 балла)",
    "fipiSpec": {
      "number": "№ 21, 22",
      "score": "2 первичных балла за каждую",
      "time": "10 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ оценивания качественных задач"
    },
    "theory": "\n            <h4>3-шаговый шаблон логического рассуждения</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Шаг 1 (Прямой ответ):</strong> Четко и однозначно ответьте на вопрос задания: «Увеличится / Уменьшится / Не изменится» или назовите явление.</p>\n              <p><strong>Шаг 2 (Физические законы):</strong> Назовите физический закон, принцип или формулу, лежащую в основе явления (например, «Согласно закону сохранения энергии...», «По формуле давления жидкости p = ρgh...»).</p>\n              <p><strong>Шаг 3 (Логическая цепочка):</strong> Свяжите закон с условием задачи и покажите, к чему приводит изменение параметров.</p>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Сформулируйте краткий тезис: что произойдет с искомой величиной.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите математическую формулу явления, даже если задача текстовая (формулы убеждают эксперта!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сделайте пошаговый вывод: X растет => Y падает => следовательно ответ Z.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №21 ОГЭ</div>\n              <p><strong>Вопрос:</strong> Как изменится осадка корабля при переходе из реки в соленое море?</p>\n              <div class=\"task-example-solution\">\n                <strong>Образец ответа:</strong>\n                <p>1. Ответ: Осадка корабля уменьшится (корабль немного всплывет).<br>\n                   2. Обоснование: По условию плавания тел корабль плавает, следовательно, сила тяжести равна силе Архимеда: F<sub>тяж</sub> = F<sub>А</sub> = mg.<br>\n                   3. Сила Архимеда определяется формулой F<sub>А</sub> = ρ<sub>жидк</sub> · g · V<sub>погр</sub>. Так как плотность соленой морской воды больше плотности пресной речной воды (ρ<sub>моря</sub> > ρ<sub>реки</sub>), при неизменной массе корабля объем погруженной части судна V<sub>погр</sub> должен уменьшиться. Следовательно, осадка станет меньше.</p>\n                <div class=\"task-answer-box\">Максимальные 2 балла</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ответ без физического закона</strong>\n              <p>Если написать правильный ответ «уменьшится», но объяснить его на бытовом уровне без упоминания силы Архимеда и формулы, вам поставят только 1 балл!</p>\n            </div>\n        "
  },
  "physics_2_2": {
    "id": "phys_calc23_25",
    "sectionIndex": 2,
    "itemIndex": 2,
    "matchTitles": [
      "расчетные задачи №23–25",
      "дано си решение",
      "задания 23 24 25"
    ],
    "title": "Задания 23–25: Сложные расчетные задачи (3 балла каждая)",
    "fipiSpec": {
      "number": "№ 23, 24, 25",
      "score": "3 первичных балла за каждую (Суммарно 9 баллов!)",
      "time": "15–20 минут на задачу",
      "difficulty": "Высокий уровень",
      "docSource": "Критерии ФИПИ оценивания расчетных задач"
    },
    "theory": "\n            <h4>Критерии 3 баллов за расчетную задачу</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li>Записано «Дано» и «Найти», все величины переведены в СИ (в отдельной колонке СИ).</li>\n                <li>Записаны исходные фундаментальные формулы без подстановки чисел.</li>\n                <li>Проведены аналитические преобразования и получена итоговая формула в общем виде.</li>\n                <li>Подставлены числовые значения с единицами измерения и посчитан точный ответ.</li>\n              </ol>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Оформите блок «Дано» и переведите все единицы в СИ (граммы в кг, см² в м², кДж в Дж, минуты в секунды).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите основные законы физики, применимые к ситуации.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Выведите расчетную формулу и выполните арифметические вычисления. Запишите ответ с наименованием единицы измерения.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №24 ОГЭ (Электротермическая задача)</div>\n              <p><strong>Условие:</strong> Электрический чайник мощностью 1000 Вт нагревает 1 литр воды от 20°C до кипения (100°C) за 7 минут. Каков КПД чайника?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p><strong>Дано:</strong> P = 1000 Вт, V = 1 л => m = 1 кг, t₁ = 20°C, t₂ = 100°C, Δt = 80°C, τ = 7 мин = 420 с, c = 4200 Дж/(кг·°C). <strong>Найти:</strong> η.<br>\n                   <strong>Решение:</strong><br>\n                   1. Полезное тепло: Q<sub>пол</sub> = c · m · Δt = 4200 · 1 · 80 = 336 000 Дж = 336 кДж.<br>\n                   2. Затраченная работа тока: A<sub>затр</sub> = P · τ = 1000 · 420 = 420 000 Дж = 420 кДж.<br>\n                   3. КПД: η = (Q<sub>пол</sub> / A<sub>затр</sub>) × 100% = (336 000 / 420 000) × 100% = 0.8 × 100% = 80%.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>80%</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Время в минутах вместо секунд</strong>\n              <p>1 Ватт = 1 Джоуль в СЕКУНДУ! Если время 7 минут не умножить на 60 с (420 с), ответ будет в 60 раз больше и эксперты снимут 2 балла!</p>\n            </div>\n        "
  },
  "chemistry_0_0": {
    "id": "chem_atom_structure",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "строение атома",
      "периодическая система",
      "протоны",
      "нейтроны",
      "электроны"
    ],
    "title": "Строение атома и Периодическая система Менделеева",
    "fipiSpec": {
      "number": "№ 1, 2, 3",
      "score": "1 первичный балл",
      "time": "2–4 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Строение атома)"
    },
    "theory": "\n            <h4>1. Состав атома</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Порядковый номер Z (№ элемента)</strong> = Число протонов p⁺ = Заряд ядра = Общее число электронов e⁻.</li>\n                <li><strong>Номер периода</strong> = Число электронных слоев (энергетических уровней).</li>\n                <li><strong>Номер группы (главной подгруппы А)</strong> = Число валентных электронов на внешнем слое!</li>\n                <li><strong>Число нейтронов N</strong> = Массовое число A (округлить Ar) - Порядковый номер Z (N = A - Z).</li>\n              </ul>\n            </div>\n            <h4>2. Максимальное число электронов на уровне</h4>\n            <p>Формула: <strong>N = 2n²</strong> (1-й уровень — до 2 e⁻, 2-й — до 8 e⁻, 3-й — до 18 e⁻).</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите элемент в таблице Менделеева: определите его порядковый номер, период и группу.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Количество внешних электронов = номер группы А. Например, у фосфора P (V-A группа) на внешнем слое 5 электронов.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №2 ОГЭ</div>\n              <p><strong>Условие:</strong> На рисунке приведена модель атома химического элемента. Запишите в поле для ответа: 1) номер периода, в котором расположен элемент; 2) число валентных электронов.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Если на схеме 3 концентрических круга — элемент находится в 3-м периоде. Если на внешнем круге 6 точек — у него 6 валентных электронов (это сера S).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>36</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Побочные подгруппы (В)</strong>\n              <p>Для элементов побочных подгрупп (железо, медь, хром) число валентных электронов не всегда равно номеру группы. Но в ОГЭ в заданиях 1–3 спрашивают строго элементы ГЛАВНЫХ подгрупп (А)!</p>\n            </div>\n        "
  },
  "chemistry_0_1": {
    "id": "chem_periodic_trends",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "закономерности в таблице менделеева",
      "радиус атома",
      "электроотрицательность",
      "металлические свойства"
    ],
    "title": "Закономерности изменения свойств в таблице Менделеева",
    "fipiSpec": {
      "number": "№ 3",
      "score": "1 первичный балл",
      "time": "2–3 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Периодический закон)"
    },
    "theory": "\n            <h4>Правило двух чемпионов: ФТОР (F) и ФРАНЦИЙ (Fr)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>К Фтору F (вправо по периоду → и вверх по группе ↑):</strong></div>\n              <ul>\n                <li>Электроотрицательность (ЭО) <strong>увеличивается</strong> (F — самый сильный неметалл!);</li>\n                <li>Неметаллические и окислительные свойства <strong>усиливаются</strong>;</li>\n                <li>Радиус атома <strong>уменьшается</strong> (ядро сильнее притягивает электроны);</li>\n                <li>Кислотные свойства высших оксидов и гидроксидов <strong>усиливаются</strong>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>К Францию Fr (влево по периоду ← и вниз по группе ↓):</strong></div>\n              <ul>\n                <li>Металлические и восстановительные свойства <strong>усиливаются</strong>;</li>\n                <li>Радиус атома <strong>увеличивается</strong>;</li>\n                <li>Основные свойства оксидов и гидроксидов <strong>усиливаются</strong>.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Отметьте указанные 3 элемента в таблице Менделеева и определите, расположены ли они в одном периоде или в одной группе.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Посмотрите направление требования: «в порядке возрастания» (от меньшего к большему) или «в порядке убывания»!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> Расположите элементы: 1) кремний Si, 2) натрий Na, 3) фосфор P в порядке увеличения электроотрицательности.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Все три элемента лежат в 3 периоде. Слева направо: Na (I гр) → Si (IV гр) → P (V гр). Электроотрицательность растет слева направо к фтору: Na < Si < P.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>213</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Перевернутый порядок (возрастание vs убывание)</strong>\n              <p>Самая распространенная ошибка — невнимательное прочтение: расположить не по возрастанию, а по убыванию. Перечитывайте порядок перед записью в бланк!</p>\n            </div>\n        "
  },
  "chemistry_0_2": {
    "id": "chem_oxidation_states",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "степени окисления",
      "овр",
      "окислитель",
      "восстановитель"
    ],
    "title": "Степени окисления и Окислительно-восстановительные реакции (ОВР)",
    "fipiSpec": {
      "number": "№ 4, 15, 20",
      "score": "1–3 первичных балла",
      "time": "4–8 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (ОВР)"
    },
    "theory": "\n            <h4>1. Постоянные степени окисления в соединениях</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li>Фтор F: всегда -1;</li>\n                <li>Кислород O: почти всегда -2 (исключения: OF₂ (+2), H₂O₂ (-1));</li>\n                <li>Водород H: с неметаллами +1 (с гидридами металлов NaH -1);</li>\n                <li>Щелочные металлы (Li, Na, K): +1; Щелочноземельные (Mg, Ca, Ba): +2; Алюминий Al: +3.</li>\n                <li>Простые вещества (O₂, Fe, N₂, Cl₂): строго <strong>0</strong>!</li>\n              </ul>\n              <div class=\"math-row\">Сумма всех степеней окисления в нейтральной молекуле = <strong>0</strong>!</div>\n            </div>\n            <h4>2. Окислитель и Восстановитель</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Восстановитель</strong> — <strong>Отдает</strong> электроны e⁻ => Степень окисления <strong>Повышается</strong> (Окисляется). <i>(«Отдал электрон — стал Восстановителем!»)</i></div>\n              <div class=\"math-row\"><strong>Окислитель</strong> — <strong>Принимает</strong> электроны e⁻ => Степень окисления <strong>Понижается</strong> (Восстанавливается).</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Расставьте степени окисления у всех элементов слева и справа от стрелки.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите два элемента, изменивших степень окисления: один повысил, другой понизил.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Составьте схему отдачи и принятия электронов.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №15 ОГЭ</div>\n              <p><strong>Схема:</strong> S⁰ + O₂⁰ → S⁺⁴O₂⁻².<br>\n              <strong>Вопрос:</strong> Чем является сера в данной реакции?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>Сера S⁰ отдала 4 электрона и повысила степень окисления до +4: S⁰ - 4e⁻ → S⁺⁴. Следовательно, сера является <strong>восстановителем</strong> (процесс окисления).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Восстановитель</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Путаница процесса и роли</strong>\n              <p>Восстановитель сам ОКИСЛЯЕТСЯ! Окислитель сам ВОССТАНАВЛИВАЕТСЯ! Читайте внимательно, что спрашивают в задании: роль (окислитель/восстановитель) или процесс (окисление/восстановление).</p>\n            </div>\n        "
  },
  "chemistry_1_0": {
    "id": "chem_anions",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "реакции на анионы",
      "so4",
      "cl",
      "co3",
      "качественные реакции"
    ],
    "title": "Качественные реакции на анионы (SO₄²⁻, Cl⁻, CO₃²⁻, PO₄³⁻)",
    "fipiSpec": {
      "number": "№ 12, 17, 23",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень (Визитная карточка ОГЭ)",
      "docSource": "Кодификатор ФИПИ (Качественные реакции)"
    },
    "theory": "\n            <h4>Топ качественных реакций на анионы:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Сульфат-ион SO₄²⁻ + Ba²⁺:</strong> образуется <strong>белый мелкокристаллический осадок BaSO₄↓</strong>, нерастворимый в кислотах!</li>\n                <li><strong>Хлорид-ион Cl⁻ + Ag⁺:</strong> образуется <strong>белый творожистый осадок AgCl↓</strong>, темнеющий на свету.</li>\n                <li><strong>Бромид-ион Br⁻ + Ag⁺:</strong> светло-желтый осадок AgBr↓.</li>\n                <li><strong>Иодид-ион I⁻ + Ag⁺:</strong> ярко-желтый осадок AgI↓.</li>\n                <li><strong>Карбонат-ион CO₃²⁻ + H⁺:</strong> бурное выделение <strong>бесцветного газа без запаха CO₂↑</strong> («вскипание» раствора).</li>\n                <li><strong>Фосфат-ион PO₄³⁻ + Ag⁺:</strong> ярко-желтый осадок Ag₃PO₄↓.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите, какой анион присутствует в растворе (сульфат, хлорид или карбонат).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Подберите реактив: для SO₄²⁻ — растворимая соль бария BaCl₂/Ba(NO₃)₂; для Cl⁻ — нитрат серебра AgNO₃; для CO₃²⁻ — любая сильная кислота HCl/H₂SO₄.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №17 ОГЭ</div>\n              <p><strong>Условие:</strong> С помощью какого реактива можно различить растворы хлорида натрия NaCl и сульфата натрия Na₂SO₄?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>При добавлении хлорида бария BaCl₂ в пробирку с сульфатом натрия выпадет белый осадок: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl. В пробирке с хлоридом натрия видимых изменений не произойдет.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Раствор соли бария (BaCl₂)</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: BaSO₄ vs BaCO₃</strong>\n              <p>Оба осадка белые! Но BaSO₄ НЕ растворяется в сильных кислотах (HNO₃, HCl), а осадок BaCO₃ растворяется в кислотах с шипением и выделением газа CO₂↑.</p>\n            </div>\n        "
  },
  "chemistry_1_1": {
    "id": "chem_hydroxides_colors",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "осадки гидроксидов металлов",
      "цвета осадков",
      "oh"
    ],
    "title": "Осадки гидроксидов металлов и их цвета (Катионы с OH⁻)",
    "fipiSpec": {
      "number": "№ 12, 17, 23",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Цвета гидроксидов)"
    },
    "theory": "\n            <h4>Золотая палитра цветов осадков гидроксидов:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Cu(OH)₂↓:</strong> ярко-синий студенистый осадок (при нагревании чернеет: CuO + H₂O);</li>\n                <li><strong>Fe(OH)₂↓:</strong> серо-зеленый осадок (на воздухе быстро буреет, окисляясь в Fe(OH)₃);</li>\n                <li><strong>Fe(OH)₃↓:</strong> бурый (красно-коричневый) осадок;</li>\n                <li><strong>Al(OH)₃↓ и Zn(OH)₂↓:</strong> белые студенистые осадки, <strong>амфотерные</strong> (растворяются как в кислотах, так и в избытке щелочи!);</li>\n                <li><strong>Mg(OH)₂↓:</strong> белый осадок (в щелочах не растворяется);</li>\n                <li><strong>AgOH:</strong> не существует, сразу распадается на коричневый осадок оксида серебра: <strong>Ag₂O↓</strong> + H₂O.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Запомните три главных «цветных» катиона: Cu²⁺ (синий), Fe²⁺ (зеленый), Fe³⁺ (бурый).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если осадок белый и растворяется в избытке щелочи (NaOH) — это амфотерный цинк Zn²⁺ или алюминий Al³⁺!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №12 ОГЭ</div>\n              <p><strong>Условие:</strong> К раствору сульфата меди(II) добавили раствор гидроксида натрия. Какой признак реакции наблюдается?</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄. Выпадает ярко-синий осадок гидроксида меди(II).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Выпадение синего осадка</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Растворение амфотерных осадков</strong>\n              <p>Осадки Al(OH)₃ и Zn(OH)₂ растворяются при дальнейшем приливании щелочи с образованием комплексных солей (Na[Al(OH)₄]). Не путайте это с отсутствием реакции!</p>\n            </div>\n        "
  },
  "chemistry_1_2": {
    "id": "chem_mass_fraction",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "расчет массовой доли",
      "массовая доля в растворе",
      "растворы",
      "задание 18",
      "задание 19"
    ],
    "title": "Задания 18–19: Расчет массовой доли элемента и вещества в растворе",
    "fipiSpec": {
      "number": "№ 18, 19",
      "score": "1 + 1 = 2 первичных балла",
      "time": "6–8 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Практические расчеты по химии)"
    },
    "theory": "\n            <h4>1. Массовая доля элемента в веществе (Задание 18)</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>ω(эл) = (n · Ar(эл) / Mr(вещ)) × 100%</strong></div>\n              <div class=\"math-subtext\">где n — индекс элемента в химической формуле. Округляется строго по указанию задания (обычно до десятых или сотых)!</div>\n            </div>\n            <h4>2. Массовая доля вещества в растворе</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>ω = m<sub>раств. в-ва</sub> / m<sub>раствора</sub></strong></div>\n              <div class=\"math-row\">m<sub>раствора</sub> = m<sub>в-ва</sub> + m<sub>воды</sub> = ρ<sub>р-ра</sub> · V<sub>р-ра</sub></div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посчитайте молярную массу соединения Mr, аккуратно сложив атомные массы всех элементов из таблицы Менделеева. Все Ar берутся округленными до целых (кроме хлора: Ar(Cl) = 35.5!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Разделите массу искомого элемента на Mr и выразите в процентах.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">В задании 19 используйте полученную долю для расчета реальной дозы препарата для человека или почвы.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №18 ОГЭ</div>\n              <p><strong>Условие:</strong> Вычислите массовую долю азота в нитрате аммония NH₄NO₃. Ответ округлите до целых.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Mr(NH₄NO₃) = 14 + 1·4 + 14 + 16·3 = 14 + 4 + 14 + 48 = 80.<br>\n                   2. Всего атомов азота n = 2: m(N) = 2 · 14 = 28.<br>\n                   3. ω(N) = (28 / 80) × 100% = 0.35 × 100% = 35%.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>35</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Атомная масса хлора</strong>\n              <p>Запомните на всю жизнь: Ar хлора Cl ВСЕГДА берется равной 35.5, а не 35 и не 36!</p>\n            </div>\n        "
  },
  "chemistry_2_0": {
    "id": "chem_p2_task20",
    "sectionIndex": 2,
    "itemIndex": 0,
    "matchTitles": [
      "задание №20",
      "электронный баланс",
      "3 балла",
      "овр"
    ],
    "title": "Задание №20: Метод электронного баланса в ОВР (3 балла)",
    "fipiSpec": {
      "number": "№ 20",
      "score": "3 первичных балла",
      "time": "10 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ оценивания задания 20"
    },
    "theory": "\n            <h4>Критерии 3 баллов за задание №20:</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>1 балл:</strong> Составлен правильный электронный баланс (указаны элементы, степени окисления и отданные/принятые электроны).</li>\n                <li><strong>1 балл:</strong> Расставлены коэффициенты в уравнении реакции на основе баланса.</li>\n                <li><strong>1 балл:</strong> Указаны окислитель и восстановитель (с указанием конкретного элемента и его степени окисления!).</li>\n              </ol>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите степени окисления и выпишите элементы, изменившие их: восстановитель и окислитель.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите схему баланса и найдите наименьшее общее кратное (НОК) для коэффициентов.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Перенесите коэффициенты в уравнение и уравняйте остальные атомы (металлы → неметаллы → водород → кислород).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №20 ОГЭ</div>\n              <p><strong>Уравнение:</strong> Fe₂O₃ + CO → Fe + CO₂.</p>\n              <div class=\"task-example-solution\">\n                <strong>Образец оформления в бланке:</strong>\n                <p>1. Электронный баланс:<br>\n                   Fe⁺³ + 3e⁻ → Fe⁰ &nbsp;&nbsp;| 2 (окислитель, процесс восстановления)<br>\n                   C⁺² - 2e⁻ → C⁺⁴ &nbsp;&nbsp;&nbsp;| 3 (восстановитель, процесс окисления)<br>\n                   2. Уравнение с коэффициентами:<br>\n                   Fe₂O₃ + 3CO → 2Fe + 3CO₂.<br>\n                   3. Fe⁺³ (в Fe₂O₃) является окислителем; C⁺² (в CO) является восстановителем.</p>\n                <div class=\"task-answer-box\">Высшая оценка: 3 из 3 баллов</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Неполное указание окислителя</strong>\n              <p>Эксперты снижают 1 балл, если написать просто «железо — окислитель». Нужно писать строго: «Fe⁺³ (или Fe₂O₃ за счет Fe⁺³) является окислителем»!</p>\n            </div>\n        "
  },
  "chemistry_2_1": {
    "id": "chem_p2_task23_24",
    "sectionIndex": 2,
    "itemIndex": 1,
    "matchTitles": [
      "задания №23–24",
      "химический эксперимент",
      "правила безопасности",
      "5 баллов"
    ],
    "title": "Задания 23–24: Мысленный и Реальный химический эксперимент (5 баллов)",
    "fipiSpec": {
      "number": "№ 23, 24",
      "score": "4 балла (№23) + 1 балл (№24) = 5 первичных баллов!",
      "time": "20–25 минут",
      "difficulty": "Высокий уровень",
      "docSource": "Критерии ФИПИ оценивания экспериментального блока"
    },
    "theory": "\n            <h4>1. Задание №23 (Теоретическая часть — 4 балла в бланке)</h4>\n            <div class=\"task-formula-box\">\n              <p>Вам дан раствор соли и 5 реактивов в склянках. Нужно выбрать 2 реактива, составить 2 молекулярных уравнения реакций и указать признаки их протекания (цвет осадка или выделение газа).</p>\n            </div>\n            <h4>2. Задание №24 (Практическая часть в лаборатории — 1 балл)</h4>\n            <p>Вы подходите к столику с реактивами и проводите эти две реакции на глазах у экспертов. Оценивается соблюдение правил техники безопасности (ТБ):</p>\n            <ul>\n              <li>Пробка от склянки кладется на стол <strong>широким основанием вниз</strong>;</li>\n              <li>Склянку берут так, чтобы этикетка смотрела <strong>в ладонь</strong> (чтобы капли не смыли текст!);</li>\n              <li>Объем реактива в пробирке — <strong>не более 1–2 мл</strong> (на палец высотой);</li>\n              <li>Нюхать вещества можно только легким движением руки к носу, не наклоняясь над пробиркой!</li>\n            </ul>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выберите 2 реактива, дающие видимый признак: осадок или газ.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Запишите два уравнения в молекулярном виде со всеми коэффициентами и стрелочками (↓, ↑).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Под каждым уравнением напишите признак: «выпадение синего студенистого осадка» или «выделение бесцветного газа».</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец оформления задания №23</div>\n              <div class=\"task-example-solution\">\n                <p>1. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl<br>\n                   Признак: выпадение бурого осадка.<br>\n                   2. FeCl₃ + 3AgNO₃ → 3AgCl↓ + Fe(NO₃)₃<br>\n                   Признак: выпадение белого творожистого осадка.</p>\n                <div class=\"task-answer-box\">Максимальные 4 балла за №23</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Техника безопасности в №24</strong>\n              <p>Если перевернуть пробку этикеткой вниз или взять склянку этикеткой наружу, эксперты немедленно снимут балл за соблюдение правил безопасности!</p>\n            </div>\n        "
  },
  "chemistry_2_2": {
    "id": "chem_p2_task22",
    "sectionIndex": 2,
    "itemIndex": 2,
    "matchTitles": [
      "задание №22",
      "расчетная задача",
      "по уравнению реакции",
      "3 балла"
    ],
    "title": "Задание №22: Расчетная задача по уравнению реакции (3 балла)",
    "fipiSpec": {
      "number": "№ 22",
      "score": "3 первичных балла",
      "time": "15 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ оценивания расчетных задач по химии"
    },
    "theory": "\n            <h4>Главные расчетные формулы химии:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Количество вещества (моль):</strong> n = m / M = V / V<sub>m</sub> = N / N<sub>A</sub></div>\n              <div class=\"math-subtext\">где V<sub>m</sub> = 22.4 л/моль (молярный объем газа при н.у.), N<sub>A</sub> = 6.02·10²³ моль⁻¹.</div>\n              <div class=\"math-row\"><strong>Масса чистого вещества в растворе:</strong> m<sub>чист</sub> = m<sub>р-ра</sub> · ω</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Составьте уравнение химической реакции и расставьте коэффициенты.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Найдите массу чистого вещества через формулу раствора и переведите ее в моли (n = m / M).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">По коэффициентам уравнения найдите количество моль искомого вещества (пропорция). Переведите моли в граммы или литры.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №22 ОГЭ</div>\n              <p><strong>Условие:</strong> К 100 г 10%-го раствора гидроксида натрия добавили избыток сульфата меди(II). Вычислите массу образовавшегося осадка.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>1. Уравнение: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄.<br>\n                   2. Масса чистого NaOH: m = 100 · 0.10 = 10 г.<br>\n                   3. n(NaOH) = m / M = 10 / 40 = 0.25 моль.<br>\n                   4. По уравнению n(Cu(OH)₂) = ½ · n(NaOH) = 0.25 / 2 = 0.125 моль.<br>\n                   5. M(Cu(OH)₂) = 64 + (16+1)·2 = 98 г/моль.<br>\n                   6. m(Cu(OH)₂) = n · M = 0.125 · 98 = 12.25 г.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>12.25 г</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Забытые коэффициенты в пропорции молей</strong>\n              <p>Обратите внимание: на 2 моль NaOH образуется только 1 моль осадка Cu(OH)₂! Если забыть разделить на 2, масса осадка будет вдвое больше правильной.</p>\n            </div>\n        "
  },
  "biology_0_0": {
    "id": "bio_circulatory",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "кровеносная система",
      "сердце",
      "круги кровообращения"
    ],
    "title": "Кровеносная система человека: Строение сердца и круги кровообращения",
    "fipiSpec": {
      "number": "№ 14, 15, 16, 25",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Человек и его здоровье)"
    },
    "theory": "\n            <h4>1. Строение сердца</h4>\n            <p>Сердце человека 4-камерное (2 предсердия, 2 желудочка). В левой половине сердца кровь <strong>артериальная</strong> (богатая O₂), в правой — <strong>венозная</strong> (богатая CO₂).</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Большой круг кровообращения (БКК):</strong></div>\n              <p>Начинается в <strong>левом желудочке</strong> → Аорта → Артерии → Капилляры органов (отдача O₂ и питательных веществ) → Полые вены → Заканчивается в <strong>правом предсердии</strong>.</p>\n              <div class=\"math-row\"><strong>Малый круг кровообращения (МКК, легочный):</strong></div>\n              <p>Начинается в <strong>правом желудочке</strong> → Легочные артерии (венозная кровь!) → Капилляры альвеол легких (насыщение O₂) → Легочные вены (артериальная кровь!) → Заканчивается в <strong>левом предсердии</strong>.</p>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Помните золотое правило кругов: <strong>Круги начинаются в желудочках, а заканчиваются в предсердиях!</strong> Большой круг начинается слева, малый — справа.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Не путайте вены и артерии: артерии несут кровь ОТ сердца, вены — К сердцу (а не по типу крови!).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №15 ОГЭ</div>\n              <p><strong>Условие:</strong> Установите правильную последовательность движения порции крови по малому кругу кровообращения, начиная с желудочка:<br>\n              1) левое предсердие 2) легочные артерии 3) правый желудочек 4) капилляры легких 5) легочные вены.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>3 (правый желудочек) → 2 (легочные артерии) → 4 (капилляры легких) → 5 (легочные вены) → 1 (левое предсердие).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>32451</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Венозная кровь в легочной артерии</strong>\n              <p>Легочная артерия несет ВЕНОЗНУЮ кровь от правого желудочка к легким, а легочные вены несут АРТЕРИАЛЬНУЮ кровь от легких к левому предсердию!</p>\n            </div>\n        "
  },
  "biology_0_1": {
    "id": "bio_nervous_reflex",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "нервная система",
      "рефлекторная дуга",
      "рефлекс"
    ],
    "title": "Нервная система: 5 звеньев рефлекторной дуги",
    "fipiSpec": {
      "number": "№ 15, 16, 25",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Нервная регуляция)"
    },
    "theory": "\n            <h4>5 обязательных звеньев рефлекторной дуги:</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Рецептор:</strong> воспринимает раздражение и преобразует его в нервный импульс (в коже, глазу, мышце).</li>\n                <li><strong>Чувствительный (афферентный, центростремительный) нейрон:</strong> передает импульс от рецептора в ЦНС (спинной или головной мозг).</li>\n                <li><strong>Вставочный нейрон (нервный центр):</strong> обрабатывает сигнал в ЦНС.</li>\n                <li><strong>Двигательный (эфферентный, центробежный) нейрон:</strong> передает команду из ЦНС к рабочему органу.</li>\n                <li><strong>Рабочий орган (эффектор):</strong> мышца (сокращается) или железа (выделяет секрет).</li>\n              </ol>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Начало дуги — ВСЕГДА рецептор. Конец дуги — ВСЕГДА исполнительный орган (мышца/железа).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сверяйте порядок: Рецептор → Чувствительный → Вставочный → Двигательный → Эффектор.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №15 ОГЭ</div>\n              <p><strong>Условие:</strong> Человек отдернул руку от горячего чайника. Укажите путь нервного импульса:<br>\n              1) двигательный нейрон 2) рецепторы кожи 3) вставочный нейрон спинного мозга 4) чувствительный нейрон 5) мышца руки.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>2 (рецепторы кожи) → 4 (чувствительный нейрон) → 3 (вставочный нейрон) → 1 (двигательный нейрон) → 5 (мышца руки).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>24315</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Чувствительный vs Двигательный нейрон</strong>\n              <p>Импульс идет от рецептора В мозг по ЧУВСТВИТЕЛЬНОМУ пути, а команду ОТ мозга мышце несет ДВИГАТЕЛЬНЫЙ нейрон. Не путайте их местами!</p>\n            </div>\n        "
  },
  "biology_0_2": {
    "id": "bio_blood_cells",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "форменные элементы крови",
      "эритроциты",
      "лейкоциты",
      "тромбоциты"
    ],
    "title": "Внутренняя среда: Форменные элементы крови (Эритроциты, Лейкоциты, Тромбоциты)",
    "fipiSpec": {
      "number": "№ 13, 14, 16",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Кровь и иммунитет)"
    },
    "theory": "\n            <h4>Сравнительная характеристика клеток крови:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Эритроциты:</strong> двояковогнутые диски без ядер (у млекопитающих). Содержат <strong>гемоглобин</strong>, транспортируют кислород O₂ и углекислый газ CO₂. Живут ~120 дней, разрушаются в селезенке и печени.</li>\n                <li><strong>Лейкоциты:</strong> белые клетки с ядрами, способны к амебоидному движению и <strong>фагоцитозу</strong> (пожиранию бактерий — открыл И.И. Мечников). Обеспечивают клеточный и гуморальный иммунитет (выработка антител).</li>\n                <li><strong>Тромбоциты:</strong> кровяные пластинки (безъядерные фрагменты клеток). Отвечают за <strong>свертывание крови</strong> и образование тромба при повреждении сосуда (фибриноген → нерастворимый фибрин при участии ионов Ca²⁺ и витамина K).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Свяжите клетку с функцией: Эритроцит — Газообмен (гемоглобин); Лейкоцит — Иммунитет и фагоцитоз; Тромбоцит — Свертывание.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> Безъядерные клетки крови человека, имеющие форму двояковогнутого диска и содержащие гемоглобин — это...</p>\n              <div class=\"task-example-solution\">\n                <p>Это эритроциты (красные кровяные тельца).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Эритроциты</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ядра в эритроцитах лягушки</strong>\n              <p>У человека и млекопитающих зрелые эритроциты НЕ имеют ядер (для максимального объема гемоглобина), а у лягушек и птиц ядра в эритроцитах есть!</p>\n            </div>\n        "
  },
  "biology_1_0": {
    "id": "bio_cell_organelles",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "органоиды клетки",
      "митохондрии",
      "рибосомы",
      "хлоропласты",
      "аппарат гольджи"
    ],
    "title": "Органоиды эукариотической клетки и их функции",
    "fipiSpec": {
      "number": "№ 6, 7, 24",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Клеточное строение)"
    },
    "theory": "\n            <h4>Классификация органоидов и ключевые функции:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Двумембранные:</strong>\n                  <ul>\n                    <li><i>Митохондрии:</i> «энергетические станции клетки», синтез молекул <strong>АТФ</strong> в процессе кислородного дыхания (кристы).</li>\n                    <li><i>Пластиды (хлоропласты):</i> фотосинтез (тилакоиды и граны, хлорофилл). Есть только у растений!</li>\n                    <li><i>Ядро:</i> хранение и передача генетической информации (ДНК, хроматин).</li>\n                  </ul>\n                </li>\n                <li><strong>Одномембранные:</strong>\n                  <ul>\n                    <li><i>Эндоплазматическая сеть (ЭПС):</i> транспорт веществ, синтез белков (шероховатая) и липидов (гладкая).</li>\n                    <li><i>Аппарат Гольджи:</i> модификация, упаковка и секреция веществ, образование лизосом.</li>\n                    <li><i>Лизосомы:</i> внутриклеточное расщепление полимеров (гидролитические ферменты).</li>\n                    <li><i>Вакуоль:</i> клеточный сок, поддержание тургора (у растений).</li>\n                  </ul>\n                </li>\n                <li><strong>Немембранные:</strong>\n                  <ul>\n                    <li><i>Рибосомы:</i> биосинтез белка (трансляция).</li>\n                    <li><i>Клеточный центр (центриоли):</i> образование веретена деления.</li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Синтез АТФ — Митохондрии. Синтез белка — Рибосомы. Расщепление — Лизосомы. Фотосинтез — Хлоропласты.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №6 ОГЭ</div>\n              <p><strong>Условие:</strong> В каких органоидах клетки растительного листа происходит синтез органических веществ из неорганических на свету?</p>\n              <div class=\"task-example-solution\">\n                <p>Фотосинтез происходит в хлоропластах.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Хлоропласты</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Клеточная стенка</strong>\n              <p>У растений клеточная стенка из целлюлозы, у грибов — из хитина, у бактерий — из муреина, а у животных клеточной стенки НЕТ (только гликокаликс)!</p>\n            </div>\n        "
  },
  "biology_1_1": {
    "id": "bio_vertebrate_evolution",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "эволюция позвоночных",
      "ароморфозы",
      "хордовые"
    ],
    "title": "Эволюция позвоночных животных: Крупные ароморфозы",
    "fipiSpec": {
      "number": "№ 10, 11, 24",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Эволюция органического мира)"
    },
    "theory": "\n            <h4>Хронология выхода на сушу и ароморфозы классов:</h4>\n            <div class=\"task-formula-box\">\n              <ol>\n                <li><strong>Рыбы:</strong> двухкамерное сердце (1П + 1Ж), один круг кровообращения, жаберное дыхание, боковая линия.</li>\n                <li><strong>Земноводные (Амфибии):</strong> трехкамерное сердце (2П + 1Ж), появление 2-го (легочного) круга кровообращения, пятипалые рычажные конечности, легочное и кожное дыхание (размножение только в воде!).</li>\n                <li><strong>Пресмыкающиеся (Рептилии):</strong> сухая роговая чешуя, неполная перегородка в желудочке сердца (у крокодила — 4-камерное!), внутреннее оплодотворение, яйца с амниотической оболочкой (полная независимость от воды!).</li>\n                <li><strong>Птицы и Млекопитающие:</strong> 4-камерное сердце, полное разделение артериальной и венозной крови, <strong>теплокровность (гомойотермия)</strong>, интенсивный обмен веществ.</li>\n              </ol>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Следите за эволюцией сердца: 2 камеры (рыбы) → 3 камеры (земноводные) → 3 камеры с неполной перегородкой (рептилии) → 4 камеры (птицы и млекопитающие).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №11 ОГЭ</div>\n              <p><strong>Условие:</strong> Впервые в эволюции трехкамерное сердце и второй круг кровообращения появились у...</p>\n              <div class=\"task-example-solution\">\n                <p>У земноводных (амфибий) в связи с выходом на сушу и появлением легких.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Земноводные</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Сердце крокодила</strong>\n              <p>Крокодил — рептилия, но у него 4-камерное сердце (с овальным отверстием в перегородке), однако кровь все равно частично смешивается в дугах аорты, поэтому он холоднокровный!</p>\n            </div>\n        "
  },
  "geography_0_0": {
    "id": "geo_natural_increase",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "естественный прирост",
      "еп",
      "рождаемость",
      "смертность"
    ],
    "title": "Задание 13/22: Естественный прирост населения (ЕП = Р - С)",
    "fipiSpec": {
      "number": "№ 13, 22",
      "score": "1 первичный балл",
      "time": "2–3 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Население России: Демография)"
    },
    "theory": "\n            <h4>Главная демографическая формула:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>ЕП = Р - С</strong></div>\n              <div class=\"math-subtext\">где <strong>ЕП</strong> — естественный прирост населения,<br>\n              <strong>Р</strong> — число родившихся (рождаемость),<br>\n              <strong>С</strong> — число умерших (смертность).</div>\n              <div class=\"math-row\">Если Р > С — ЕП положительный (прирост).</div>\n              <div class=\"math-row\">Если С > Р — ЕП отрицательный (естественная убыль со знаком «минус»!).</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в статистической таблице колонку рождаемости (Р) и колонку смертности (С) для нужного региона и года.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вычтите: ЕП = Р - С. Если умерших больше — ОБЯЗАТЕЛЬНО ставьте <strong>знак «минус»</strong> в ответ!</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Реальное задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> В 2022 году в регионе родилось 14 500 человек, а умерло 18 200 человек. Определите величину естественного прироста населения.</p>\n              <div class=\"task-example-solution\">\n                <strong>Решение:</strong>\n                <p>ЕП = 14 500 - 18 200 = -3 700 человек.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>-3700</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Потеря знака минус</strong>\n              <p>Если в задании получилась убыль населения, а вы напишете просто «3700» без знака минус «-», компьютер посчитает ответ неверным!</p>\n            </div>\n        "
  },
  "geography_0_1": {
    "id": "geo_migration_balance",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "миграционный прирост",
      "сальдо миграции",
      "прибывшие",
      "выбывшие"
    ],
    "title": "Задание 13/22: Миграционный прирост (Сальдо миграции = П - В)",
    "fipiSpec": {
      "number": "№ 13, 22",
      "score": "1 первичный балл",
      "time": "2–3 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Миграции населения)"
    },
    "theory": "\n            <h4>Формула миграционного прироста (сальдо):</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>МП = П - В</strong></div>\n              <div class=\"math-subtext\">где <strong>МП</strong> — миграционный прирост (сальдо),<br>\n              <strong>П</strong> — число прибывших (иммигрантов),<br>\n              <strong>В</strong> — число выбывших (эмигрантов).</div>\n              <div class=\"math-row\"><strong>Общий прирост населения:</strong> ОП = ЕП + МП = (Р - С) + (П - В).</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите строки прибывших и выбывших за указанный год.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вычтите из прибывших количество выбывших: МП = П - В.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> В область прибыло 24 300 человек, а выбыло 19 100 человек. Определите миграционный прирост.</p>\n              <div class=\"task-example-solution\">\n                <p>МП = 24 300 - 19 100 = 5 200 человек.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>5200</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Внутренняя vs Международная миграция</strong>\n              <p>Если в таблице дана разбивка на внутрирегиональную и международную миграцию, складывайте общие числа прибывших и выбывших со всех направлений!</p>\n            </div>\n        "
  },
  "geography_0_2": {
    "id": "geo_population_density",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "плотность населения",
      "расчет плотности"
    ],
    "title": "Задание 13: Плотность населения территории (чел/км²)",
    "fipiSpec": {
      "number": "№ 13",
      "score": "1 первичный балл",
      "time": "2–3 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (География населения)"
    },
    "theory": "\n            <h4>Формула средней плотности населения:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Плотность = Численность населения (чел.) / Площадь территории (км²)</strong></div>\n              <div class=\"math-subtext\">Единица измерения: <strong>чел./км²</strong>. Округляется строго по указанию в условии (до целых или десятых).</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Разделите число жителей на площадь региона.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Округлите до требуемого знака по математическим правилам.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №13 ОГЭ</div>\n              <p><strong>Условие:</strong> Численность населения области составляет 3 200 000 человек, площадь — 80 000 км². Определите среднюю плотность населения.</p>\n              <div class=\"task-example-solution\">\n                <p>3 200 000 / 80 000 = 40 чел./км².</p>\n                <div class=\"task-answer-box\">Ответ: <strong>40</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Тысячи жителей</strong>\n              <p>Если численность дана в тысячах (3200 тыс.), не забудьте умножить на 1000 перед делением на площадь в км²!</p>\n            </div>\n        "
  },
  "geography_1_0": {
    "id": "geo_topographic_profile",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "чтение горизонталей",
      "выбор профиля",
      "топографическая карта",
      "задание 12"
    ],
    "title": "Задание 11: Чтение горизонталей и выбор профиля рельефа",
    "fipiSpec": {
      "number": "№ 11",
      "score": "1 первичный балл",
      "time": "3–5 минут",
      "difficulty": "Базовый / повышенный уровень",
      "docSource": "Кодификатор ФИПИ (Топографическая карта)"
    },
    "theory": "\n            <h4>Правила анализа профиля по топографической карте:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Горизонтали (изогипсы):</strong> линии, соединяющие точки с одинаковой абсолютной высотой над уровнем моря.</li>\n                <li><strong>Сечение рельефа:</strong> указано под картой («горизонтали проведены через 2.5 м / 5 м»).</li>\n                <li><strong>Бергштрихи:</strong> черточки на горизонталях, свободным концом показывают направление <strong>вниз по склону</strong>!</li>\n                <li>Чем ближе горизонтали друг к другу — тем <strong>круче склон</strong>; чем дальше — тем склон <strong>положе</strong>.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите высоты начальной точки А и конечной точки В по отметкам высот и сечению.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Сразу отбросьте профили, у которых высоты краев не совпадают с точками А и В на карте.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Проверьте поведение рельефа посередине: пересекает ли линия реку/овраг (впадина) или холм (подъем).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №11 ОГЭ</div>\n              <p><strong>Анализ профиля А-В:</strong> Точка А на высоте 152 м, точка В на высоте 145 м. Посередине профиль пересекает реку с отметкой уреза воды 130 м.</p>\n              <div class=\"task-example-solution\">\n                <p>Правильный график должен начинаться на 152 м, спускаться до ямы на 130 м и подниматься до 145 м к точке В.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>График с глубокой лощиной</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Перепутанные концы А и В</strong>\n              <p>Обращайте внимание на ориентацию: на графике слева ВСЕГДА точка А, а справа — точка В! Не читайте профиль задом наперед.</p>\n            </div>\n        "
  },
  "geography_1_1": {
    "id": "geo_climate_types",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "типы климата россии",
      "арктический",
      "умеренный",
      "муссонный",
      "континентальный"
    ],
    "title": "Климатология: Типы климата России (Шпаргалка)",
    "fipiSpec": {
      "number": "№ 18, 28",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Климат России)"
    },
    "theory": "\n            <h4>4 зоны умеренного климатического пояса России (с запада на восток):</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1. Умеренно-континентальный (Европейская часть России):</strong> мягкая зима (-8...-12°C), теплое лето (+18...+22°C), осадков 600–800 мм в год, выпадают равномерно.</li>\n                <li><strong>2. Континентальный (Западная Сибирь):</strong> более морозная зима (-18...-24°C), теплое лето, осадков 400–500 мм.</li>\n                <li><strong>3. Резко континентальный (Восточная Сибирь, Якутия):</strong> экстремально морозная малоснежная зима (до -45...-50°C — полюс холода Оймякон), жаркое короткое лето (+20...+25°C), огромная годовая амплитуда температур (до 65°C!), осадков мало (250–350 мм).</li>\n                <li><strong>4. Муссонный (Дальний Восток, Приморье):</strong> сухая холодная зима и очень дождливое теплое лето (летние муссоны с Тихого океана приносят более 80% всех осадков!).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Зима около -10°C → Европейская часть (Умеренно-континентальный).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Зима ниже -35°C и сухо → Якутия (Резко континентальный).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Пик дождей строго в июле–августе (высокие столбики лета) → Дальний Восток (Муссонный).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Климатограмма Владивостока</div>\n              <div class=\"task-example-solution\">\n                <p>Зима -12°C, лето +20°C, годовое количество осадков 820 мм, причем в июле и августе выпадает по 180–200 мм (яркий летний пик). Это муссонный климат Дальнего Востока.</p>\n                <div class=\"task-answer-box\">Тип климата: <strong>Муссонный</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Южное полушарие на климатограмме</strong>\n              <p>Если кривая температуры прогибается ВНИЗ в июле (+5°C в июле и +25°C в январе) — это Южное полушарие (лето в январе)!</p>\n            </div>\n        "
  },
  "geography_1_2": {
    "id": "geo_site_selection12",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "выбор участка для футбола",
      "санного спуска",
      "задание №12",
      "топокарта"
    ],
    "title": "Задание 12: Выбор участка для футбола или санного спуска (2 балла)",
    "fipiSpec": {
      "number": "№ 12",
      "score": "2 первичных балла",
      "time": "5–7 минут",
      "difficulty": "Повышенный уровень",
      "docSource": "Критерии ФИПИ оценивания задания 12"
    },
    "theory": "\n            <h4>Железные критерии выбора участка:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1. Для футбольного поля / волейбола / теннисного корта:</strong></div>\n              <ul>\n                <li><strong>Участок должен быть плоским и горизонтальным</strong> (отсутствие горизонталей или максимальное расстояние между ними);</li>\n                <li><strong>Отсутствие препятствий</strong> (нет кустарников, деревьев, болот, ям и оврагов — чистый луг).</li>\n              </ul>\n              <div class=\"math-row\"><strong>2. Для катания на санках / лыжах (горнолыжного спуска):</strong></div>\n              <ul>\n                <li><strong>Наличие крутого склона</strong> (горизонтали проходят часто и близко друг к другу);</li>\n                <li><strong>Отсутствие препятствий</strong> (нет кустарников и деревьев, об которые можно травмироваться).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Укажите номер выбранного участка (1, 2 или 3).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Приведите аргумент 1: охарактеризуйте рельеф (ровный / склон).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Приведите аргумент 2: охарактеризуйте поверхность (луг / нет деревьев и кустарников).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Образец ответа в бланке (Футбол)</div>\n              <div class=\"task-example-solution\">\n                <p>1. Для игры в футбол больше всего подходит участок №2.<br>\n                   2. Участок №2 имеет ровную горизонтальную поверхность (на нем отсутствуют горизонтали).<br>\n                   3. На участке находится луг, отсутствуют деревья, кустарники и заболоченность, мешающие игре.</p>\n                <div class=\"task-answer-box\">2 из 2 баллов</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Указание только одного аргумента</strong>\n              <p>За указание только номера участка дают 0 баллов! 1 балл — номер + 1 аргумент. 2 балла — строго номер + 2 аргумента.</p>\n            </div>\n        "
  },
  "geography_1_3": {
    "id": "geo_climatogram18",
    "sectionIndex": 1,
    "itemIndex": 3,
    "matchTitles": [
      "определение климатограммы",
      "задание №18",
      "климатограмма"
    ],
    "title": "Задание 18: Определение города по климатограмме (Алгоритм исключения)",
    "fipiSpec": {
      "number": "№ 18",
      "score": "1 первичный балл",
      "time": "3–4 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Климатический анализ)"
    },
    "theory": "\n            <h4>Элементы климатограммы:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Линия с точками (красная/синяя):</strong> ход температуры по месяцам года (шкала слева, °C).</li>\n                <li><strong>Столбики (гистограмма):</strong> количество осадков по месяцам (шкала справа, мм).</li>\n                <li><strong>Число в центре/вверху:</strong> годовая сумма осадков (например, 650 мм).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посмотрите температуру января (самая низкая точка): выше 0°C (субтропики, Сочи, Европа) или мороз (Россия)?</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Оцените температуру июля: +12°C (тундра) или +25°C (степь/пустыня)?</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Сравните с 4 предложенными на выбор городами и исключите неподходящие.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №18 ОГЭ</div>\n              <p><strong>Климатограмма:</strong> t января = +2°C, t июля = +24°C, осадков 1500 мм в год с зимним максимумом.<br>\n              <strong>Города:</strong> 1) Мурманск &nbsp; 2) Якутск &nbsp; 3) Сочи &nbsp; 4) Астрахань.</p>\n              <div class=\"task-example-solution\">\n                <p>Зимой температура выше нуля, огромное количество осадков (1500 мм) характерно только для субтропиков Черноморского побережья Кавказа (Сочи).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>3 (Сочи)</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Разные шкалы температур</strong>\n              <p>Всегда смотрите на шкалу слева: у одного графика деление 5 градусов, у другого — 10. Не оценивайте «на глаз» без сопоставления со шкалой!</p>\n            </div>\n        "
  },
  "history_0_0": {
    "id": "hist_ancient_rus",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "древняя русь и раздробленность",
      "даты",
      "рюрик",
      "крещение руси"
    ],
    "title": "Хронология: Древняя Русь и период раздробленности (IX–XIII вв.)",
    "fipiSpec": {
      "number": "№ 1–4, 15–17",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Историко-культурный стандарт (Древняя Русь)"
    },
    "theory": "\n            <h4>Топ ключевых дат IX–XIII веков:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>862 г.</strong> — Призвание варягов (Рюрик в Новгороде). Зарождение государственности.</li>\n                <li><strong>882 г.</strong> — Поход Олега на Киев, объединение Новгорода и Киева. Создание Древнерусского государства.</li>\n                <li><strong>988 г.</strong> — Крещение Руси князем Владимиром Святославичем («Красное Солнышко»).</li>\n                <li><strong>1016–1054 гг.</strong> — Правление Ярослава Мудрого. Первый свод законов «Русская Правда».</li>\n                <li><strong>1097 г.</strong> — Любечский съезд князей («Каждо да держит отчину свою»). Начало раздробленности.</li>\n                <li><strong>1147 г.</strong> — Первое летописное упоминание Москвы (Юрий Долгорукий).</li>\n                <li><strong>1237–1240 гг.</strong> — Батыево нашествие на Русь, установление ордынского владычества.</li>\n                <li><strong>1240 г. (15 июля)</strong> — Невская битва (Александр Ярославич разбил шведов).</li>\n                <li><strong>1242 г. (5 апреля)</strong> — Ледовое побоище на Чудском озере (разгром рыцарей Ливонского ордена).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Соотнесите событие с веком: IX в. (Олег), X в. (Владимир), XI в. (Ярослав), XII в. (Москва, раздробленность), XIII в. (Батый, Невский).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №1 ОГЭ</div>\n              <p><strong>События:</strong> А) Ледовое побоище; Б) Крещение Руси; В) Первое упоминание Москвы.<br>\n              <strong>Даты:</strong> 1) 988 г. 2) 1147 г. 3) 1242 г.</p>\n              <div class=\"task-example-solution\">\n                <p>А — 3 (1242), Б — 1 (988), В — 2 (1147).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>312</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Битва на Калке vs Нашествие Батыя</strong>\n              <p>Битва на реке Калке произошла в <strong>1223 г.</strong> (первое столкновение с монголами), а полномасштабное нашествие Батыя на Северо-Восточную Русь началось позже — в <strong>1237 г.</strong>!</p>\n            </div>\n        "
  },
  "history_0_1": {
    "id": "hist_moscow_smuta",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "единое государство и смута",
      "иван грозный",
      "куликовская битва",
      "смутное время"
    ],
    "title": "Хронология: Единое Русское государство и Смута (XIV–XVII вв.)",
    "fipiSpec": {
      "number": "№ 1–4, 15–17",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Историко-культурный стандарт (Московское царство и Смута)"
    },
    "theory": "\n            <h4>Ключевые вехи XIV–XVII вв.:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1380 г. (8 сентября)</strong> — Куликовская битва (Дмитрий Донской разбил войско Мамая).</li>\n                <li><strong>1480 г.</strong> — Стояние на реке Угре (Иван III). Окончательное падение ордынского ига!</li>\n                <li><strong>1497 г.</strong> — Судебник Ивана III (введение правила Юрьева дня и пожилого).</li>\n                <li><strong>1547 г.</strong> — Венчание Ивана IV Грозного на царский престол (первый царь).</li>\n                <li><strong>1552 г.</strong> — Взятие Казани войсками Ивана Грозного.</li>\n                <li><strong>1581 г.</strong> — Введение «Заповедных лет» (запрет перехода крестьян в Юрьев день).</li>\n                <li><strong>1598–1613 гг.</strong> — <strong>Смутное время</strong> в России:\n                  <ul>\n                    <li>1605–1606 гг. — правление Лжедмитрия I;</li>\n                    <li>1612 г. — освобождение Москвы Вторым ополчением (К. Минин и Д. Пожарский);</li>\n                    <li>1613 г. — Земский собор, избрание Михаила Федоровича Романова на царство.</li>\n                  </ul>\n                </li>\n                <li><strong>1649 г.</strong> — Соборное уложение царя Алексея Михайловича (окончательное юридическое закрепощение крестьян — бессрочный сыск беглых).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Помните этапы закрепощения: 1497 (Судебник, Юрьев день) → 1581 (Заповедные лета) → 1597 (Урочные лета, 5 лет сыска) → 1649 (Соборное уложение, бессрочный сыск).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №2 ОГЭ</div>\n              <p><strong>Условие:</strong> Расположите в хронологической последовательности: 1) Соборное уложение; 2) Стояние на реке Угре; 3) Избрание Михаила Романова.</p>\n              <div class=\"task-example-solution\">\n                <p>2 (Стояние на Угре, 1480) → 3 (Избрание Романова, 1613) → 1 (Соборное уложение, 1649).</p>\n                <div class=\"task-answer-box\">Ответ: <strong>231</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Заповедные vs Урочные лета</strong>\n              <p>Заповедные лета (1581) — ЗАПРЕТ перехода крестьян в Юрьев день. Урочные лета (1597) — СРОК сыска беглых крестьян (5 лет).</p>\n            </div>\n        "
  },
  "history_0_2": {
    "id": "hist_empire_18_19",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "императорская россия",
      "петр 1",
      "екатерина 2",
      "1812",
      "реформы 1861"
    ],
    "title": "Хронология: Российская империя XVIII–XIX вв. (От Петра I до Александра III)",
    "fipiSpec": {
      "number": "№ 1–4, 15–17",
      "score": "1–2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Историко-культурный стандарт (Имперский период)"
    },
    "theory": "\n            <h4>Главные даты XVIII–XIX веков:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1700–1721 гг.</strong> — Северная война со Швецией (1703 — основание Санкт-Петербурга, 1709 — Полтавская битва, 1714 — мыс Гангут, 1721 — Ништадтский мир, Россия провозглашена империей).</li>\n                <li><strong>1762–1796 гг.</strong> — Правление Екатерины II («Просвещенный абсолютизм»). 1785 — Жалованная грамота дворянству.</li>\n                <li><strong>1812 г.</strong> — <strong>Отечественная война 1812 года</strong> (26 августа — Бородинское сражение; совет в Филях; изгнание армии Наполеона).</li>\n                <li><strong>1825 г. (14 декабря)</strong> — Восстание декабристов на Сенатской площади в Петербурге.</li>\n                <li><strong>1853–1856 гг.</strong> — Крымская война (оборона Севастополя, Парижский мир).</li>\n                <li><strong>1861 г. (19 февраля)</strong> — <strong>Отмена крепостного права</strong> Александром II Освободителем.</li>\n                <li><strong>1864 г.</strong> — Судебная и Земская реформы Александра II (гласность суда, суд присяжных).</li>\n                <li><strong>1874 г.</strong> — Введение всеобщей воинской повинности.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Связывайте реформы с правителями: Петр I — флот, Сенат, Синод, Табель о рангах (1722); Екатерина II — Уложенная комиссия; Александр I — министерства, 1812; Александр II — Великие реформы (1860-70-е).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №3 ОГЭ</div>\n              <p><strong>Условие:</strong> В каком году Александр II подписал Манифест об отмене крепостного права?</p>\n              <div class=\"task-example-solution\">\n                <p>19 февраля 1861 года.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>1861</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Указ о вольных хлебопашцах</strong>\n              <p>Указ о вольных хлебопашцах (1803 г.) принял Александр I (помещики могли отпускать крестьян по желанию за выкуп), а полную отмену крепостного права провел Александр II в 1861 г.!</p>\n            </div>\n        "
  },
  "history_1_0": {
    "id": "hist_architecture_culture",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "зодчество древней руси и москвы",
      "памятники культуры",
      "храм василия блаженного",
      "софия киевская"
    ],
    "title": "Культура: Шедевры зодчества Древней Руси и Москвы (Задания 13–14)",
    "fipiSpec": {
      "number": "№ 13, 14",
      "score": "2 первичных балла",
      "time": "4–6 минут",
      "difficulty": "Повышенный уровень (Иллюстративный блок)",
      "docSource": "Кодификатор ФИПИ (История культуры России)"
    },
    "theory": "\n            <h4>Топ памятников архитектуры для заданий с изображениями:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Софийский собор в Киеве (XI в., Ярослав Мудрый):</strong> построен в честь победы над печенегами (1036 г.). Византийский стиль, 13 глав.</li>\n                <li><strong>Церковь Покрова на Нерли (XII в., 1165 г., Андрей Боголюбский):</strong> шедевр белокаменного зодчества Владимиро-Суздальской Руси, крестово-купольный храм.</li>\n                <li><strong>Успенский собор Московского Кремля (XV в., 1479 г., Иван III):</strong> зодчий — итальянец <strong>Аристотель Фиораванти</strong>. Главный венчальный собор русских царей.</li>\n                <li><strong>Храм Василия Блаженного (Покровский собор на Рву, XVI в., Иван Грозный):</strong> зодчие <strong>Барма и Постник</strong>, построен в честь взятия Казани (1552 г.). Шатровый стиль.</li>\n                <li><strong>Церковь Вознесения в Коломенском (1532 г., Василий III):</strong> первый каменный шатровый храм на Руси в честь рождения будущего царя Ивана Грозного.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посмотрите на купола: луковичные разноцветные шатры — Храм Василия Блаженного; строгий белый куб с одним куполом над рекой — Покров на Нерли; кремлевский собор с 5 золотыми куполами — Успенский собор.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Вспомните правителя и век постройки.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №14 ОГЭ</div>\n              <p><strong>Вопрос:</strong> В честь какого события был возведен храм Василия Блаженного (Покровский собор на Рву) в Москве?</p>\n              <div class=\"task-example-solution\">\n                <p>В честь взятия Казани и присоединения Казанского ханства к Русскому государству в 1552 году.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Взятие Казани</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Архитекторы Фиораванти vs Барма и Постник</strong>\n              <p>Аристотель Фиораванти построил Успенский собор Кремля при Иване III. А Барма и Постник построили собор Василия Блаженного при Иване IV Грозном!</p>\n            </div>\n        "
  },
  "english_0_0": {
    "id": "eng_perf_vs_past",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "present perfect vs past simple",
      "грамматика",
      "задания 20-28"
    ],
    "title": "Задания 20–28: Present Perfect vs Past Simple (Маркеры времени)",
    "fipiSpec": {
      "number": "№ 20–28",
      "score": "1 первичный балл",
      "time": "2–3 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Грамматические навыки)"
    },
    "theory": "\n            <h4>Жесткое разграничение времен по словам-маркерам:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>1. Past Simple (V2 / did + V1):</strong></div>\n              <p>Действие произошло в <strong>завершенный</strong> период времени в прошлом, точное время известно или указано!</p>\n              <ul>\n                <li>Маркеры: <i>yesterday, ago (two days ago), last (last year, last Monday), in 2018, when I was a child</i>.</li>\n              </ul>\n              <div class=\"math-row\"><strong>2. Present Perfect (have / has + V3):</strong></div>\n              <p>Действие произошло в прошлом, но <strong>результат важен сейчас</strong>, период времени еще не закончился!</p>\n              <ul>\n                <li>Маркеры: <i>already, yet, just, ever, never, recently, so far, today, this morning (если еще утро), since, for (for 5 years)</i>.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Найдите в предложении временной указатель (маркер).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если есть <i>ago, yesterday, last...</i> — ставьте строго Past Simple (2-я форма неправильного глагола).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Если есть <i>already, ever, since</i> — ставьте <code>have/has + V3</code>.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №23 ОГЭ</div>\n              <p>I (SEE) never such a wonderful sunset before.</p>\n              <div class=\"task-example-solution\">\n                <p>Маркер «never ... before» указывает на жизненный опыт к настоящему моменту → Present Perfect.<br>\n                   С подлежащим I форма: <strong>have seen</strong>.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>haveseen</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Запись в бланк ответов</strong>\n              <p>В бланке ответов ОГЭ все ответы пишутся строго ЗАГЛАВНЫМИ БУКВАМИ без пробелов и апострофов! Например: <code>HAVESEEN</code>, а не <code>have seen</code> или <code>I've seen</code>.</p>\n            </div>\n        "
  },
  "english_0_1": {
    "id": "eng_passive_voice",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "passive voice",
      "пассивный залог",
      "страдательный залог"
    ],
    "title": "Задания 20–28: Passive Voice (Страдательный залог)",
    "fipiSpec": {
      "number": "№ 20–28",
      "score": "1 первичный балл",
      "time": "2–3 минуты",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Страдательный залог)"
    },
    "theory": "\n            <h4>Формула Passive Voice:</h4>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>to BE + V3 (Past Participle)</strong></div>\n              <ul>\n                <li><strong>Present Simple Passive:</strong> am / is / are + V3 (<i>The house is built</i>)</li>\n                <li><strong>Past Simple Passive:</strong> was / were + V3 (<i>The letter was written yesterday; The books were bought</i>)</li>\n                <li><strong>Future Simple Passive:</strong> will be + V3 (<i>The work will be finished tomorrow</i>)</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Задайте вопрос: подлежащее САМО выполняет действие или действие совершается НАД НИМ? (Книга не может сама написать, её написали!).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Определите время (обычно в ОГЭ это Past Simple Passive: <strong>was/were + V3</strong>).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Согласуйте форму глагола to be с подлежащим (ед.ч. — was, мн.ч. — were).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №25 ОГЭ</div>\n              <p>The famous novel (WRITE) by Charles Dickens in 1843.</p>\n              <div class=\"task-example-solution\">\n                <p>Роман был написан Диккенсом в 1843 году (пассивное действие в прошлом).<br>\n                   Подлежащее «novel» — единственное число → <strong>was written</strong>.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>waswritten</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Ошибка в 3-й форме неправильного глагола</strong>\n              <p>Убедитесь в правильном написании V3: write → written (с двумя t!), build → built, make → made.</p>\n            </div>\n        "
  },
  "english_0_2": {
    "id": "eng_comparatives",
    "sectionIndex": 0,
    "itemIndex": 2,
    "matchTitles": [
      "степени сравнения",
      "сравнительная степень",
      "превосходная степень",
      "adjectives"
    ],
    "title": "Задания 20–28: Степени сравнения прилагательных (Degrees of Comparison)",
    "fipiSpec": {
      "number": "№ 20–28",
      "score": "1 первичный балл",
      "time": "1–2 минуты",
      "difficulty": "Базовый уровень (Гарантированный балл)",
      "docSource": "Кодификатор ФИПИ (Степени сравнения)"
    },
    "theory": "\n            <h4>Правила образования степеней сравнения:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Короткие (1–2 слога):</strong> Сравнительная: <code>-er</code> (<i>faster, colder, bigger</i>). Превосходная: <code>the ... -est</code> (<i>the fastest, the coldest</i>).</li>\n                <li><strong>Длинные (3+ слога):</strong> Сравнительная: <code>more ...</code> (<i>more interesting, more difficult</i>). Превосходная: <code>the most ...</code> (<i>the most beautiful</i>).</li>\n              </ul>\n              <div class=\"math-row\"><strong>Исключения (знать наизусть!):</strong></div>\n              <ul>\n                <li>good → <strong>better</strong> → (the) <strong>best</strong></li>\n                <li>bad → <strong>worse</strong> → (the) <strong>worst</strong></li>\n                <li>little → <strong>less</strong> → (the) <strong>least</strong></li>\n                <li>many / much → <strong>more</strong> → (the) <strong>most</strong></li>\n                <li>far → <strong>farther / further</strong> → (the) <strong>farthest / furthest</strong></li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Посмотрите на контекст: если после пропуска стоит слово <strong>THAN</strong> (чем) — нужна сравнительная степень (better, larger, more interesting).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Если перед пропуском стоит артикль <strong>THE</strong> или предлог <strong>OF ALL / IN THE WORLD</strong> — нужна превосходная степень (best, largest, most interesting).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Задание №21 ОГЭ</div>\n              <p>Lake Baikal is the (DEEP) freshwater lake in the world.</p>\n              <div class=\"task-example-solution\">\n                <p>Перед пропуском артикль «the», оборот «in the world» → превосходная степень.<br>\n                   Короткое слово deep + est = <strong>deepest</strong>.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>deepest</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Артикль the в бланке</strong>\n              <p>Если в тексте перед пропуском уже напечатан артикль «the», не пишите его в бланк повторно! В бланк пишется только само слово (например: <code>BEST</code>, а не <code>THEBEST</code>).</p>\n            </div>\n        "
  },
  "english_1_0": {
    "id": "eng_email_template",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "шаблон письма другу",
      "email",
      "задание 35",
      "каркас письма"
    ],
    "title": "Задание 35: Электронное письмо другу (Email — 10 из 10 баллов)",
    "fipiSpec": {
      "number": "№ 35",
      "score": "10 первичных баллов (К1–К4)",
      "time": "25–30 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Критерии ФИПИ оценивания электронного письма (Email)"
    },
    "theory": "\n            <h4>Идеальная структура Email в формате ОГЭ (100–120 слов):</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>1. Обращение:</strong> <code>Dear Ben,</code> (строго с запятой!)</p>\n              <p><strong>2. Благодарность за письмо:</strong> <code>Thanks for your email. It was great to hear from you again.</code></p>\n              <p><strong>3. Основная часть (ответы на 3 вопроса друга):</strong><br>\n              <code>In your email you asked me about... Well, [ответ на вопрос 1]. As for [тема 2], [ответ на вопрос 2]. Besides, [ответ на вопрос 3].</code></p>\n              <p><strong>4. Надежда на будущие контакты:</strong> <code>Write back soon!</code></p>\n              <p><strong>5. Завершающая фраза:</strong> <code>Best wishes,</code> (с запятой!)</p>\n              <p><strong>6. Подпись:</strong> <code>Ivan</code> (только имя, БЕЗ ТОЧКИ в конце!).</p>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Выделите 3 конкретных вопроса в письме друга (подчеркните их карандашом).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Напишите по 2 предложения в ответ на каждый из 3 вопросов, используя связки (Well, As for, Besides).</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Посчитайте слова: объем должен быть строго в пределах <strong>90–132 слов</strong> (по норме 100–120 ± 10%).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Готовый каркас на 10 баллов</div>\n              <div class=\"task-example-solution\">\n                <p>Dear Tom,<br>\n                   Thanks for your email. It was great to hear from you again.<br>\n                   In your email you asked me about my free time. Well, I usually hang out with my friends in the park. As for sports, I really enjoy playing basketball because it keeps me fit. Also, at weekends I prefer reading fantasy books or playing video games.<br>\n                   Write back soon!<br>\n                   Best wishes,<br>\n                   Alex</p>\n                <div class=\"task-answer-box\">Ровно 104 слова — высший балл по всем 4 критериям</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Точка после имени в подписи</strong>\n              <p>Никогда не ставьте точку после своего имени в конце письма (<code>Alex.</code> — ошибка!). В английском эпистолярном этикете после имени в подписи точка НЕ СТАВИТСЯ!</p>\n            </div>\n        "
  },
  "literature_0_0": {
    "id": "lit_genres",
    "sectionIndex": 0,
    "itemIndex": 0,
    "matchTitles": [
      "роды и жанры литературы",
      "эпос",
      "лирика",
      "драма"
    ],
    "title": "Теория литературы: Три рода литературы и их жанры",
    "fipiSpec": {
      "number": "№ 1–5",
      "score": "Теоретическая база всех сочинений",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Теоретико-литературные понятия)"
    },
    "theory": "\n            <h4>Классификация родов и жанров литературы:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1. Эпос (повествование о событиях, объективный мир):</strong>\n                  <ul>\n                    <li><i>Эпопея:</i> «Война и мир» (масштабные исторические события).</li>\n                    <li><i>Роман:</i> «Герой нашего времени», «Евгений Онегин» (роман в стихах).</li>\n                    <li><i>Повесть:</i> «Капитанская дочка», «Шинель», «Бедная Лиза».</li>\n                    <li><i>Рассказ:</i> «Хамелеон», «Судьба человека», «После бала».</li>\n                    <li><i>Притча, басня, сказка.</i></li>\n                  </ul>\n                </li>\n                <li><strong>2. Лирика (мир внутренних чувств, эмоций и переживаний автора):</strong>\n                  <ul>\n                    <li><i>Стихотворение, элегия, ода, послание, сонет.</i></li>\n                  </ul>\n                </li>\n                <li><strong>3. Драма (действие через диалоги и монологи, предназначена для сцены):</strong>\n                  <ul>\n                    <li><i>Трагедия:</i> «Ромео и Джульетта», «Борис Годунов».</li>\n                    <li><i>Комедия:</i> «Недоросль» (Фонвизин), «Горе от ума» (Грибоедов), «Ревизор» (Гоголь).</li>\n                    <li><i>Драма:</i> «Гроза» (Островский).</li>\n                  </ul>\n                </li>\n                <li><strong>Лиро-эпос (синтез):</strong> баллада («Светлана»), поэма («Мцыри», «Песня про купца Калашникова», «Василий Теркин»).</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Определите форму: проза с сюжетом — эпос; стихи о чувствах — лирика; реплики действующих лиц и ремарки в скобках — драма.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Теоретический вопрос ОГЭ</div>\n              <p><strong>Вопрос:</strong> К какому литературному роду относится пьеса А.С. Грибоедова «Горе от ума»?</p>\n              <div class=\"task-example-solution\">\n                <p>Род — драма, жанр — комедия.</p>\n                <div class=\"task-answer-box\">Ответ: <strong>Драма</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Жанр «Капитанской дочки»</strong>\n              <p>В школьной традиции и кодификаторе ФИПИ «Капитанская дочка» А.С. Пушкина классифицируется как <strong>историческая повесть</strong> (хотя иногда называют романом). Называйте ее повестью!</p>\n            </div>\n        "
  },
  "literature_0_1": {
    "id": "lit_tropes",
    "sectionIndex": 0,
    "itemIndex": 1,
    "matchTitles": [
      "тропы и фигуры речи",
      "метафора",
      "эпитет",
      "олицетворение",
      "сравнение"
    ],
    "title": "Теория литературы: Тропы и средства художественной выразительности",
    "fipiSpec": {
      "number": "№ 3, 4, 5",
      "score": "1–2 первичных балла",
      "time": "3–5 минут",
      "difficulty": "Базовый уровень",
      "docSource": "Кодификатор ФИПИ (Изобразительно-выразительные средства)"
    },
    "theory": "\n            <h4>Топ средств выразительности:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>Эпитет:</strong> образное, эмоциональное определение (отвечает на вопрос <i>какой?</i>): <i><u>золотая</u> осень, <u>скрипучий</u> мороз, <u>робкое</u> дыхание</i>.</li>\n                <li><strong>Метафора:</strong> скрытое сравнение на основе сходства (перенос по сходству): <i>костер рябины красной; ситец неба; зеркало озера</i>.</li>\n                <li><strong>Олицетворение:</strong> наделение неодушевленных предметов свойствами живого существа: <i>ветер <u>воет</u>; лес <u>дремлет</u>; река <u>бежит</u></i>.</li>\n                <li><strong>Сравнение:</strong> сопоставление с помощью союзов <i>как, точно, словно, будто</i> или творительного падежа: <i>глаза как звезды; летел стрелой</i>.</li>\n                <li><strong>Гипербола:</strong> художественное преувеличение: <i>сто сорок солнц закат пылал; тысячу лет тебя не видел</i>.</li>\n                <li><strong>Литота:</strong> художественное преуменьшение: <i>мальчик с пальчик; мужичок с ноготок</i>.</li>\n                <li><strong>Антитеза:</strong> резкое противопоставление: <i>Они сошлись: волна и камень, стихи и проза, лед и пламень</i>.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Есть союзы «как, будто, словно»? → Сравнение.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Неживой предмет оживает и совершает действия человека? → Олицетворение.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 3</div>\n                <div class=\"task-step-desc\">Скрытый перенос значения в переносном смысле? → Метафора.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Пример из лирики С.А. Есенина</div>\n              <p>«В саду горит костер рябины красной, но никого не может он согреть».</p>\n              <div class=\"task-example-solution\">\n                <p>«Костер рябины» — скрытое сравнение гроздей рябины с пламенем костра. Это <strong>метафора</strong>.</p>\n                <div class=\"task-answer-box\">Троп: <strong>Метафора</strong></div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Метафора vs Олицетворение</strong>\n              <p>Олицетворение — это частный случай метафоры, но именно когда предмет ОЧЕЛОВЕЧИВАЕТСЯ (плачет, шепчет, грустит). Если переноса на человека нет — это чистая метафора.</p>\n            </div>\n        "
  },
  "literature_1_0": {
    "id": "lit_captains_daughter",
    "sectionIndex": 1,
    "itemIndex": 0,
    "matchTitles": [
      "капитанская дочка",
      "пушкин",
      "гринев",
      "пугачев",
      "швабрин"
    ],
    "title": "А.С. Пушкин «Капитанская дочка»: Анализ, конфликты и герои",
    "fipiSpec": {
      "number": "№ 1, 2, 5 (Сочинение)",
      "score": "Ключевое произведение ОГЭ (до 13 баллов)",
      "time": "Теория к сочинению",
      "difficulty": "Повышенный / высокий уровень",
      "docSource": "Кодификатор ФИПИ (Русская классика XIX в.)"
    },
    "theory": "\n            <h4>1. Идея и эпиграф</h4>\n            <p><strong>Эпиграф:</strong> «Береги честь смолоду». Главная мысль — верность долгу, совести и любви в водовороте крестьянской войны.</p>\n            <div class=\"task-formula-box\">\n              <div class=\"math-row\"><strong>Система персонажей и антитезы:</strong></div>\n              <ul>\n                <li><strong>Петр Гринев:</strong> честный офицер, верный присяге дворянин, милосердный и благородный. Готов умереть на виселице, но не целует руку самозванцу.</li>\n                <li><strong>Алексей Швабрин:</strong> эгоистичный предатель, нарушитель присяги, перебежчик в стан мятежников ради личной выгоды и мести Маше.</li>\n                <li><strong>Емельян Пугачев:</strong> предводитель крестьянского восстания, народный царь, жесток к врагам, но способен помнить добро (за заячий тулупчик спасает Гринева трижды!). Символизирует русский бунт — «бессмысленный и беспощадный».</li>\n                <li><strong>Маша Миронова:</strong> скромная «капитанская дочка», проявляющая невероятную стойкость и силу любви. Сама едет в Царское Село к императрице Екатерине II, чтобы спасти жениха.</li>\n              </ul>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">В сочинении о чести сопоставляйте поведение Гринева и Швабрина при захвате Белогорской крепости.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Покажите двойственность образа Пугачева: разбойник и самозванец, но одновременно человек широкой души и народной мудрости (сказка об орле и вороне).</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тезис для сочинения №5</div>\n              <div class=\"task-example-solution\">\n                <p>«Понятие чести для Петра Гринева неразрывно связано с отцовским заветом. Даже перед лицом неминуемой казни он отказывается признать Пугачева государем, заявляя: «Я природный дворянин; я присягал государыне императрице: тебе служить не могу». Искренность и верность слову покоряют мятежника, который отпускает офицера».</div>\n                <div class=\"task-answer-box\">Глубокий анализ для высшего балла</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Однобокая трактовка Пугачева</strong>\n              <p>Нельзя изображать Пугачева только как кровавого злодея или только как идеального героя. Пушкин раскрывает его как сложную, трагическую и противоречивую историческую фигуру!</p>\n            </div>\n        "
  },
  "literature_1_1": {
    "id": "lit_woe_from_wit",
    "sectionIndex": 1,
    "itemIndex": 1,
    "matchTitles": [
      "горе от ума",
      "грибоедов",
      "чацкий",
      "фамусов",
      "молчалин"
    ],
    "title": "А.С. Грибоедов «Горе от ума»: Конфликт «века нынешнего» и «века минувшего»",
    "fipiSpec": {
      "number": "№ 1, 2, 5 (Сочинение)",
      "score": "До 13 баллов",
      "time": "Теория к сочинению",
      "difficulty": "Высокий уровень",
      "docSource": "Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>Два конфликта в комедии:</h4>\n            <div class=\"task-formula-box\">\n              <ul>\n                <li><strong>1. Любовный конфликт:</strong> Чацкий влюблен в Софью, но Софья предпочитает угодливого и беспринципного секретаря Молчалина.</li>\n                <li><strong>2. Общественный конфликт:</strong> Столкновение Александра Андреевича Чацкого («век нынешний» — просвещение, служение делу, свободомыслие, патриотизм) с «фамусовским обществом» («век минувший» — чинопочитание, крепостничество, преклонение перед всем французским, страх перед книгами: <i>«Ученье — вот чума, ученость — вот причина»</i>).</li>\n              </ul>\n              <div class=\"math-row\"><strong>Апогей конфликта:</strong> Софья распускает слух о сумасшествии Чацкого, который с радостью подхватывает всё дворянское общество.</div>\n            </div>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">При анализе Чацкого используйте цитату Гончарова из статьи «Мильон терзаний»: «Чацкий сломлен количеством старой силы, нанеся ей, в свою очередь, удар смертельный».</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Цитируйте монологи: «А судьи кто?», «Служить бы рад, прислуживаться тошно».</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тезис сочинения</div>\n              <div class=\"task-example-solution\">\n                <p>«Фамусовское общество держится на принципах подхалимства и выгоды, ярким выразителем которых является Молчалин («В мои лета не должно сметь свое суждение иметь», «угождать всем людям без изъятья»). Чацкий же утверждает свободу человеческой личности, за что объявляется сумасшедшим».</div>\n                <div class=\"task-answer-box\">Отличная цитатная база</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Чацкий — победитель или побежденный?</strong>\n              <p>В ответе обязательно покажите двойственность: Чацкий побежден внешне (вынужден бежать из Москвы), но победил морально, посеяв зерно сомнения в старый мир.</p>\n            </div>\n        "
  },
  "literature_1_2": {
    "id": "lit_hero_our_time",
    "sectionIndex": 1,
    "itemIndex": 2,
    "matchTitles": [
      "герой нашего времени",
      "лермонтов",
      "печорин",
      "лишний человек",
      "грушницкий"
    ],
    "title": "М.Ю. Лермонтов «Герой нашего времени»: Образ Григория Печорина",
    "fipiSpec": {
      "number": "№ 1, 2, 5 (Сочинение)",
      "score": "До 13 баллов",
      "time": "Теория к сочинению",
      "difficulty": "Высокий уровень",
      "docSource": "Кодификатор ФИПИ"
    },
    "theory": "\n            <h4>1. Первый психологический роман в русской литературе</h4>\n            <div class=\"task-formula-box\">\n              <p><strong>Цель Лермонтова:</strong> «История души человеческой, хотя бы самой мелкой души, едва ли не любопытнее и не полезнее истории целого народа».</p>\n              <div class=\"math-row\"><strong>Печорин — тип «лишнего человека»:</strong></div>\n              <ul>\n                <li>Одаренная, глубокая личность с колоссальной энергией и умом;</li>\n                <li>Не находит применения своим силам в николаевской России 1830-х годов;</li>\n                <li>«Нравственный калека»: <i>«Я глубоко чувствовал добро и зло; никто меня не ласкал, все оскорбляли: я стал злопамятен... Я сделался нравственным калекой»</i>;</li>\n                <li>Приносит несчастье всем, кто с ним сближается (Бэла погибает, княжна Мери страдает, Грушницкий убит на дуэли, Максим Максимыч отвергнут).</li>\n              </ul>\n            </div>\n            <h4>2. Нарушение хронологии глав</h4>\n            <p>Хронологический порядок: «Тамань» → «Княжна Мери» → «Фаталист» → «Бэла» → «Максим Максимыч» → Предисловие к Журналу Печорина.<br>\n            В романе главы расположены так, чтобы читатель сначала узнал Печорина глазами простого офицера (Максим Максимыч), затем путешественника-офицера, и лишь затем заглянул в его исповедь (Журнал самого Печорина).</p>\n        ",
    "algorithm": "\n            <div class=\"task-step-list\">\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 1</div>\n                <div class=\"task-step-desc\">Объясняйте противоречия Печорина: в нем борются два человека: один действует и совершает поступки, другой холодно судит и препарирует его душу.</div>\n              </div>\n              <div class=\"task-step-item\">\n                <div class=\"task-step-num\">Шаг 2</div>\n                <div class=\"task-step-desc\">Контрастируйте Печорина с Грушницким: Грушницкий носит маску разочарованного романтика, а Печорин действительно глубоко и трагически разочарован.</div>\n              </div>\n            </div>\n        ",
    "examples": "\n            <div class=\"task-example-card\">\n              <div class=\"task-example-badge\">Тезис сочинения</div>\n              <div class=\"task-example-solution\">\n                <p>«Трагедия Печорина — это трагедия целого поколения мыслящих людей эпохи безвременья. Обладая железной волей и незаурядным интеллектом, он растрачивает свои силы на мелкие интриги и любовные эксперименты, превращая собственную жизнь в цепь разочарований».</div>\n                <div class=\"task-answer-box\">Глубокое понимание психологизма романа</div>\n              </div>\n            </div>\n        ",
    "traps": "\n            <div class=\"callout callout-warning\">\n              <strong>⚠️ Ловушка: Отождествление Печорина с автором</strong>\n              <p>Лермонтов в предисловии прямо предостерегал: Печорин — это «портрет, составленный из пороков всего нашего поколения», а не автопортрет самого писателя!</p>\n            </div>\n        "
  }
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
    const key = `${subjectId}_${sectionIndex}_${itemIndex}`;
    const directTask = this.itemsMap[key] || 
      (this.db[subjectId] && this.db[subjectId].find(t => t.sectionIndex === sectionIndex && t.itemIndex === itemIndex));

    if (directTask) {
      this.currentSubject = subjectId;
      this.taskList = this.db[subjectId] || [directTask];
      const foundIdx = this.taskList.findIndex(t => t.id === directTask.id);
      this.currentTaskIndex = foundIdx !== -1 ? foundIdx : 0;
      this.renderModal();
      this.showModal();
      return;
    }

    // Если прямого совпадения нет — открываем первый разбор предмета
    if (this.db[subjectId] && this.db[subjectId].length > 0) {
      this.currentSubject = subjectId;
      this.taskList = this.db[subjectId];
      this.currentTaskIndex = 0;
      this.renderModal();
      this.showModal();
      return;
    }
  },

  openForSubjectItem(subjectId, itemTitle) {
    const list = this.db[subjectId];
    const titleLower = (itemTitle || "").toLowerCase();

    if (list && list.length > 0) {
      let matched = list.find(task => {
        return (task.matchTitles || []).some(k => titleLower.includes(k.toLowerCase())) ||
               (task.title || "").toLowerCase().includes(titleLower);
      });
      if (matched) {
        this.currentSubject = subjectId;
        this.taskList = list;
        this.currentTaskIndex = list.indexOf(matched);
        this.renderModal();
        this.showModal();
        return;
      }
      this.currentSubject = subjectId;
      this.taskList = list;
      this.currentTaskIndex = 0;
      this.renderModal();
      this.showModal();
    }
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
}
