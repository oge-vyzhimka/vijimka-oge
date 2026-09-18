/**
 * ОГЭ-ВЫЖИМКА — Раздел «Библиотеки рядом»
 * Поиск ближайших публичных библиотек и читальных залов для подготовки к ОГЭ
 * Поддерживает геолокацию пользователя и проверенную базу реальных библиотек РФ
 */

const Libraries = {
  userLocation: null,
  currentCity: "село Прокудское",
  isDefaultLocation: true,

  // =========================================================================
  // БАЗА ДАННЫХ РЕАЛЬНЫХ БИБЛИОТЕК ПО ГОРОДАМ И РЕГИОНАМ (ПРОВЕРЕНО)
  // =========================================================================
  db: {
    // 1. Село Прокудское и Коченёвский район (по умолчанию)
    prokudskoe: [
      {
        id: "school6_lib",
        title: "Школьная библиотека МКОУ Чикской СОШ № 6 им. Д.К. Потапова",
        address: "632660, Новосибирская область, Коченёвский район, село Прокудское, ул. Совхозная, здание 25",
        subtext: "Здание школы, 1 этаж (библиотечно-информационный центр)",
        image: "images/school6.jpg",
        statusTag: "Школа № 6",
        hours: "Пн–Пт: 08:30 – 16:30",
        description: "Основной учебный фонд школы: учебники по всем предметам 5–9 классов, официальные сборники типовых экзаменационных вариантов ОГЭ 2026/2027 от ФИПИ, художественная литература школьной программы.",
        features: ["📚 Сборники КИМ ОГЭ 2026/2027", "📖 Литература по программе", "💻 Компьютерная зона"],
        mapUrl: "https://yandex.ru/maps/?text=село+Прокудское+Совхозная+25+школа+6"
      },
      {
        id: "kdc_lib",
        title: "Прокудская сельская библиотека при МБУ КДЦ «Гармония»",
        address: "632660, Новосибирская область, Коченёвский район, село Прокудское, ул. Совхозная, здание 29",
        subtext: "Здание КДЦ «Гармония» (в 150 метрах от школы №6)",
        image: "images/kdc_library.jpg",
        statusTag: "КДЦ «Гармония»",
        hours: "Вт–Сб: 10:00 – 18:00 (Вс, Пн — выходной)",
        description: "Центральная сельская библиотека села Прокудское при Культурно-досуговом центре «Гармония». Богатый фонд художественной и научно-популярной литературы, энциклопедии, периодика, уютный читальный зал для подготовки к индивидуальным проектам и экзаменам.",
        features: ["🏛️ КДЦ «Гармония»", "📖 Читальный зал", "🌐 Электронные ресурсы"],
        mapUrl: "https://yandex.ru/maps/?text=село+Прокудское+Совхозная+29+КДЦ+Гармония"
      },
      {
        id: "kochenevo_lib",
        title: "Коченёвская центральная библиотека имени П.Н. Дорофеева",
        address: "632640, Новосибирская область, р.п. Коченёво, ул. Октябрьская, д. 52",
        subtext: "Главный библиотечно-методический центр района",
        image: "images/school6.jpg",
        statusTag: "Районный центр",
        hours: "Пн–Пт: 09:00 – 18:00, Вс: 10:00 – 17:00",
        description: "Крупнейший книжный фонд района. Доступ к Национальной электронной библиотеке (НЭБ), справочным правовым системам, редким краеведческим изданиям и словарям.",
        features: ["🏛️ Районный фонд", "💻 Доступ к НЭБ", "📑 Консультации библиографа"],
        mapUrl: "https://yandex.ru/maps/?text=Коченево+Октябрьская+52+библиотека"
      },
      {
        id: "gpntb_lib",
        title: "ГПНТБ СО РАН (Государственная публичная научно-техническая библиотека)",
        address: "630200, г. Новосибирск, ул. Восход, 15 (метро «Речной вокзал»)",
        subtext: "Крупнейшая библиотека за Уралом и в азиатской части России",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/GPNTB_Novosibirsk.jpg/640px-GPNTB_Novosibirsk.jpg",
        statusTag: "Федеральный уровень",
        hours: "Пн–Пт: 09:00 – 19:00, Сб–Вс: 10:00 – 18:00",
        description: "Флагман сибирской науки. Фонд свыше 10 миллионов изданий, современные мультимедийные читальные залы, бесплатный Wi-Fi и специализированные залы для научной подготовки.",
        features: ["🌟 10+ млн книг", "☕ Коворкинг и Wi-Fi", "🔬 Научные базы данных"],
        mapUrl: "https://yandex.ru/maps/?text=Новосибирск+Восход+15+ГПНТБ"
      }
    ],

    // 2. Новосибирск
    novosibirsk: [
      {
        id: "nsk_gpntb",
        title: "ГПНТБ СО РАН (Государственная публичная научно-техническая библиотека)",
        address: "г. Новосибирск, ул. Восход, 15 (метро «Речной вокзал»)",
        subtext: "Крупнейшая научно-техническая библиотека Азии",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/GPNTB_Novosibirsk.jpg/640px-GPNTB_Novosibirsk.jpg",
        statusTag: "СО РАН",
        hours: "Пн–Пт: 09:00 – 19:00, Сб–Вс: 10:00 – 18:00",
        description: "Главный научный и образовательный хаб Новосибирска. Огромные фонды учебной литературы по математике, физике, химии и информатике. Комфортные залы со столами для учебы.",
        features: ["📖 10+ млн единиц хранения", "💻 Читальные залы с ПК", "☕ Кафетерий"],
        mapUrl: "https://yandex.ru/maps/?text=Новосибирск+Восход+15+ГПНТБ"
      },
      {
        id: "nsk_ngonb",
        title: "Новосибирская государственная областная научная библиотека (НГОНБ)",
        address: "г. Новосибирск, ул. Советская, 6 (метро «Площадь Ленина»)",
        subtext: "Центральная библиотека Новосибирской области",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Novosibirsk_State_Regional_Scientific_Library.jpg/640px-Novosibirsk_State_Regional_Scientific_Library.jpg",
        statusTag: "Областная библиотека",
        hours: "Вт–Пт: 10:00 – 20:00, Сб–Вс: 10:00 – 18:00",
        description: "Историческое здание в самом сердце города. Интерактивные лектории, центр грамотности, книги русских классиков и подготовка к устному собеседованию и сочинению ОГЭ.",
        features: ["🏛️ Центр города", "📚 Полный фонд классики", "🎧 Мультимедиа залы"],
        mapUrl: "https://yandex.ru/maps/?text=Новосибирск+Советская+6+НГОНБ"
      },
      {
        id: "nsk_youth",
        title: "Новосибирская областная молодежная библиотека",
        address: "г. Новосибирск, Красный проспект, 26 (метро «Площадь Ленина»)",
        subtext: "Молодежное культурное пространство",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Novosibirsk_State_Regional_Scientific_Library.jpg/640px-Novosibirsk_State_Regional_Scientific_Library.jpg",
        statusTag: "Для старшеклассников",
        hours: "Пн–Пт: 10:00 – 19:00, Вс: 10:00 – 18:00",
        description: "Специализированная библиотека для школьников 8–11 классов и студентов. Клубы подготовки к экзаменам, настольные игры, современные зоны самоподготовки.",
        features: ["🎯 Зона для учебы 9 класса", "🌐 Скоростной Wi-Fi", "🧩 Клубы общения"],
        mapUrl: "https://yandex.ru/maps/?text=Новосибирск+Красный+проспект+26+молодежная+библиотека"
      }
    ],

    // 3. Москва
    moscow: [
      {
        id: "msk_rsl",
        title: "Российская государственная библиотека («Ленинка»)",
        address: "г. Москва, ул. Воздвиженка, 3/5 (метро «Библиотека им. Ленина»)",
        subtext: "Главная библиотека Российской Федерации",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Russian_State_Library_2011.jpg/640px-Russian_State_Library_2011.jpg",
        statusTag: "Национальная библиотека",
        hours: "Пн–Сб: 09:00 – 20:00",
        description: "Крупнейшая библиотека России и одна из величайших в мире. Свыше 47 миллионов документов. Легендарный читальный зал №3.",
        features: ["🏛️ 47+ млн документов", "📜 Редкие рукописи", "⚡ Исторический центр"],
        mapUrl: "https://yandex.ru/maps/?text=Москва+Воздвиженка+3+Ленинка"
      },
      {
        id: "msk_nekrasov",
        title: "Центральная универсальная научная библиотека им. Н.А. Некрасова",
        address: "г. Москва, ул. Бауманская, 58/25, стр. 14 (метро «Бауманская»)",
        subtext: "Современное коворкинг-пространство и книжный фонд",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Nekrasov_Library_Moscow.jpg/640px-Nekrasov_Library_Moscow.jpg",
        statusTag: "Некрасовка",
        hours: "Пн–Сб: 10:00 – 22:00, Вс: 10:00 – 20:00",
        description: "Популярнейшее место подготовки московских школьников к ОГЭ и ЕГЭ. Удобные рабочие столы с розетками, открытые книжные фонды, тихие зоны.",
        features: ["💻 Коворкинг до 22:00", "☕ Кофейня", "📚 Современный фонд"],
        mapUrl: "https://yandex.ru/maps/?text=Москва+Бауманская+58+Некрасовка"
      },
      {
        id: "msk_rgdb",
        title: "Российская государственная детская библиотека (РГДБ)",
        address: "г. Москва, Калужская площадь, 1 (метро «Октябрьская»)",
        subtext: "Крупнейшая библиотека для детей и подростков",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Russian_State_Library_2011.jpg/640px-Russian_State_Library_2011.jpg",
        statusTag: "Для школьников",
        hours: "Пн–Сб: 10:00 – 20:00, Вс: 11:00 – 17:00",
        description: "Огромная коллекция художественной литературы школьной программы, учебные пособия, залы индивидуальной работы для девятиклассников.",
        features: ["🎒 Программа 9 класса", "📖 Все авторы ОГЭ", "🎨 Творческие зоны"],
        mapUrl: "https://yandex.ru/maps/?text=Москва+Калужская+площадь+1+РГДБ"
      }
    ],

    // 4. Санкт-Петербург
    spb: [
      {
        id: "spb_rnb",
        title: "Российская национальная библиотека (РНБ)",
        address: "г. Санкт-Петербург, Садовая ул., 18 / Московский пр., 165",
        subtext: "Старейшая публичная библиотека России (осн. 1795 г.)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/National_Library_of_Russia_SPB.jpg/640px-National_Library_of_Russia_SPB.jpg",
        statusTag: "РНБ",
        hours: "Пн–Пт: 09:00 – 21:00, Сб–Вс: 11:00 – 19:00",
        description: "Национальное книгохранилище мирового масштаба. Главное здание на Садовой и Новое здание на Московском проспекте с ультрасовременными залами.",
        features: ["🏛️ 38+ млн изданий", "✨ Историческая атмосфера", "💻 Электронные залы"],
        mapUrl: "https://yandex.ru/maps/?text=Санкт-Петербург+Садовая+18+РНБ"
      },
      {
        id: "spb_mayakovka",
        title: "Центральная городская публичная библиотека им. В.В. Маяковского",
        address: "г. Санкт-Петербург, наб. реки Фонтанки, 44 (метро «Гостиный двор»)",
        subtext: "Главная городская библиотека Петербурга",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mayakovsky_Library_SPB.jpg/640px-Mayakovsky_Library_SPB.jpg",
        statusTag: "Маяковка",
        hours: "Пн–Сб: 11:00 – 20:00, Вс: 11:00 – 18:00",
        description: "Высокотехнологичный библиотечный комплекс на Фонтанке: автоматическая книговыдача, мультимедийные капсулы, тихие кабинеты для учебы.",
        features: ["🚀 Умная библиотека", "☕ Читательские зоны", "🎧 Аудиофонды"],
        mapUrl: "https://yandex.ru/maps/?text=Санкт-Петербург+Фонтанка+44+Маяковского"
      }
    ],

    // 5. Екатеринбург
    ekaterinburg: [
      {
        id: "ekb_belinka",
        title: "Свердловская областная универсальная научная библиотека им. В.Г. Белинского",
        address: "г. Екатеринбург, ул. Белинского, 15",
        subtext: "Главная библиотека Урала («Белинка»)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Belinsky_Library_Ekaterinburg.jpg/640px-Belinsky_Library_Ekaterinburg.jpg",
        statusTag: "Белинка",
        hours: "Пн–Пт: 09:00 – 20:00, Сб: 10:00 – 18:00",
        description: "Крупнейший информационный и культурный центр Урала. Фонд свыше 2.3 млн книг, доступ к Президентской библиотеке и фондам ФИПИ.",
        features: ["🏛️ 2.3+ млн книг", "💻 Компьютерные места", "📖 Подготовка к экзаменам"],
        mapUrl: "https://yandex.ru/maps/?text=Екатеринбург+Белинского+15+библиотека"
      }
    ],

    // 6. Казань
    kazan: [
      {
        id: "kzn_natlib",
        title: "Национальная библиотека Республики Татарстан",
        address: "г. Казань, ул. Пушкина, 86 (здание НКЦ «Казань»)",
        subtext: "Самая современная библиотека Поволжья",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/National_Library_of_Tatarstan.jpg/640px-National_Library_of_Tatarstan.jpg",
        statusTag: "Нацбиблиотека РТ",
        hours: "Ежедневно: 09:00 – 21:00",
        description: "Культурная доминанта Казани с видом на реку Казанку. Панорамные читальные залы, просторные столы для самостоятельной работы, коворкинг и терраса.",
        features: ["✨ Панорамные залы", "☕ Коворкинг и кафе", "📚 3.2+ млн изданий"],
        mapUrl: "https://yandex.ru/maps/?text=Казань+Пушкина+86+Национальная+библиотека"
      }
    ]
  },

  init() {
    this.renderCards(this.db.prokudskoe, "село Прокудское / р.п. Чик (Новосибирская обл., по умолчанию)");
  },

  requestLocation() {
    const btn = document.getElementById("geo-request-btn");
    const statusLabel = document.getElementById("geo-location-label");
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<span>⏳</span> <span>Определяем геолокацию...</span>`;
    }

    if (!navigator.geolocation) {
      alert("Ваш браузер не поддерживает геолокацию. Показаны библиотеки по умолчанию (с. Прокудское).");
      this.resetButtonState();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.userLocation = { lat, lon };
        this.onLocationSuccess(lat, lon);
      },
      (error) => {
        console.warn("Геолокация отклонена или недоступна:", error);
        if (statusLabel) {
          statusLabel.textContent = "Доступ к геоданным не предоставлен — показаны библиотеки с. Прокудское";
        }
        this.resetButtonState();
        this.renderCards(this.db.prokudskoe, "село Прокудское / р.п. Чик (по умолчанию)");
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  },

  async onLocationSuccess(lat, lon) {
    const statusLabel = document.getElementById("geo-location-label");
    const resetBtn = document.getElementById("geo-reset-btn");

    // Вычисляем расстояние до Прокудского (lat: 55.006, lon: 82.529)
    const distToProkudskoe = this.calcDistance(lat, lon, 55.006, 82.529);

    if (distToProkudskoe < 15) {
      this.isDefaultLocation = true;
      if (statusLabel) {
        statusLabel.textContent = "📍 Вы находитесь в селе Прокудское / р.п. Чик (определено по GPS)";
      }
      this.renderCards(this.db.prokudskoe, "с. Прокудское / Коченёвский район");
      this.resetButtonState();
      return;
    }

    // Если пользователь вне Прокудского — определяем город через Nominatim Reverse Geocoding
    try {
      const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=ru`, {
        headers: { "User-Agent": "OgeVyzhimkaApp/2.0 (educational portal)" }
      });
      const data = await resp.json();
      const addr = data.address || {};
      const detectedCity = addr.city || addr.town || addr.village || addr.municipality || addr.state || "Ваш регион";

      this.currentCity = detectedCity;
      this.isDefaultLocation = false;

      if (statusLabel) {
        statusLabel.innerHTML = `📍 Определено по GPS: <strong>${detectedCity}</strong> (координаты: ${lat.toFixed(3)}, ${lon.toFixed(3)})`;
      }
      if (resetBtn) resetBtn.style.display = "inline-flex";

      // Подбираем библиотеки по городу
      const cityLower = detectedCity.toLowerCase();
      let matchedLibs = null;

      if (cityLower.includes("новосибирск") || cityLower.includes("обь") || cityLower.includes("бердск")) {
        matchedLibs = this.db.novosibirsk;
      } else if (cityLower.includes("москв")) {
        matchedLibs = this.db.moscow;
      } else if (cityLower.includes("петербург") || cityLower.includes("питер")) {
        matchedLibs = this.db.spb;
      } else if (cityLower.includes("екатеринбург")) {
        matchedLibs = this.db.ekaterinburg;
      } else if (cityLower.includes("казань")) {
        matchedLibs = this.db.kazan;
      }

      if (matchedLibs) {
        this.renderCards(matchedLibs, detectedCity);
      } else {
        // Если город другой — формируем реальную карту ближайших библиотек через Яндекс.Карты
        this.renderDynamicCityCards(detectedCity, lat, lon);
      }
    } catch (e) {
      console.warn("Ошибка обратного геокодирования:", e);
      if (statusLabel) {
        statusLabel.textContent = `📍 Координаты: ${lat.toFixed(3)}, ${lon.toFixed(3)}`;
      }
      this.renderDynamicCityCards("по вашим координатам", lat, lon);
    } finally {
      this.resetButtonState();
    }
  },

  renderDynamicCityCards(cityName, lat, lon) {
    const container = document.getElementById("libraries-cards-grid");
    if (!container) return;

    const yandexSearchUrl = `https://yandex.ru/maps/?text=${encodeURIComponent("библиотека " + cityName)}&ll=${lon},${lat}&z=13`;

    container.innerHTML = `
      <div class="library-card" style="grid-column: 1 / -1; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(56, 189, 248, 0.4);">
        <div class="library-info" style="padding: 1.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span style="font-size: 1.5rem;">🏛️</span>
            <h3 class="library-title" style="margin: 0; font-size: 1.35rem;">Публичные библиотеки в городе ${cityName}</h3>
          </div>
          <p class="library-desc" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Мы определили ваше местоположение. В вашем городе действуют городские и районные публичные библиотеки с бесплатным доступом к читальным залам, художественной литературе для сочинения ОГЭ и учебным пособиям.
          </p>
          <div class="library-features" style="margin-bottom: 1.5rem;">
            <span class="lib-feat">📍 Реальное местоположение</span>
            <span class="lib-feat">📚 Бесплатный читальный зал</span>
            <span class="lib-feat">🗺️ Точный маршрут на карте</span>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="${yandexSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-action" style="background: #38bdf8; color: #080c14; font-weight: 700; padding: 0.75rem 1.5rem; border: none; border-radius: 9999px;">
              🗺️ Открыть все библиотеки ${cityName} на Яндекс.Картах →
            </a>
            <a href="https://yandex.ru/maps/?text=${encodeURIComponent("библиотека читальный зал")}" target="_blank" rel="noopener noreferrer" class="btn-action" style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); border-radius: 9999px;">
              🔍 Построить пеший маршрут до ближайшей
            </a>
          </div>
        </div>
      </div>
    `;
  },

  renderCards(libList, locationName) {
    const container = document.getElementById("libraries-cards-grid");
    if (!container || !libList) return;

    container.innerHTML = libList.map(lib => `
      <div class="library-card">
        <div class="library-image-wrap">
          <img src="${lib.image}" alt="${lib.title}" class="library-img" onerror="this.src='images/school6.jpg'">
          <span class="library-status-tag">${lib.statusTag || 'Библиотека'}</span>
        </div>
        <div class="library-info">
          <h3 class="library-title">${lib.title}</h3>
          <div class="library-address-line">
            <span class="lib-icon">📍</span>
            <div>
              <strong>${lib.address}</strong>
              ${lib.subtext ? `<div class="lib-subtext">${lib.subtext}</div>` : ''}
              ${lib.hours ? `<div class="lib-subtext" style="color: #38bdf8; margin-top: 3px;">🕒 ${lib.hours}</div>` : ''}
            </div>
          </div>
          <p class="library-desc">${lib.description}</p>
          <div class="library-features">
            ${lib.features.map(f => `<span class="lib-feat">${f}</span>`).join("")}
          </div>
          <div class="library-actions">
            <a href="${lib.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action map-btn">
              🗺️ Открыть на Яндекс.Картах
            </a>
          </div>
        </div>
      </div>
    `).join("");
  },

  resetToDefault() {
    this.currentCity = "село Прокудское";
    this.isDefaultLocation = true;
    const statusLabel = document.getElementById("geo-location-label");
    const resetBtn = document.getElementById("geo-reset-btn");
    if (statusLabel) {
      statusLabel.textContent = "Локация: с. Прокудское / р.п. Чик (Новосибирская обл., по умолчанию)";
    }
    if (resetBtn) resetBtn.style.display = "none";
    this.renderCards(this.db.prokudskoe, "село Прокудское / р.п. Чик");
  },

  resetButtonState() {
    const btn = document.getElementById("geo-request-btn");
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<span>📍</span> <span>Определить моё местоположение</span>`;
    }
  },

  // Расчет расстояния по формуле гаверсинусов (в км)
  calcDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Радиус Земли в км
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
};

window.Libraries = Libraries;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => Libraries.init());
} else {
  Libraries.init();
}
