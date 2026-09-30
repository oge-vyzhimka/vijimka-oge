/**
 * ОГЭ-ВЫЖИМКА — Официальные методические материалы по Истории 2026/2027
 * Источник: ЕДСОО / ИСРО (https://edsoo.ru/wp-content/uploads/2026/08/istoriya.pdf)
 * Содержит 20 цельных аутентичных листов без изменений и сокращений
 */

const HISTORY_METOD_DATA = {
  title: "Информационно-методическое письмо об особенностях преподавания истории в 2026/2027 учебном году",
  shortTitle: "Методические материалы по Истории 2026/2027",
  sourceUrl: "https://edsoo.ru/wp-content/uploads/2026/08/istoriya.pdf",
  pdfPath: "docs/istoriya_metod.pdf",
  totalPages: 20,
  organization: "Институт стратегии развития образования (ИСРО / ЕДСОО)",
  pages: Array.from({ length: 20 }, (_, i) => ({
    pageNum: i + 1,
    image: `images/history_metod/page_${i + 1}.png`,
    title: `Лист ${i + 1} из 20`
  }))
};
