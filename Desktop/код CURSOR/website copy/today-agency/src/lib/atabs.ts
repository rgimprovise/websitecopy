/**
 * Контент и метаданные расширения A-TABS.
 *
 * Используется на страницах /a-tabs/* (главная, support, privacy-policy,
 * terms-of-use, data-handling, open-source-notices).
 *
 * Identity синхронизирована с пакетом A-TABS_Clean_Legal_Package_v2 от
 * 11 мая 2026 года. Publisher указан латиницей, как требует Google
 * Chrome Web Store при модерации.
 */

export const ATABS = {
  name: "A-TABS: Links Organizer",
  shortName: "A-TABS",
  tagline:
    "Local-first browser extension for saving and organizing tabs and links into clean, reusable collections — no account, no ads, no cloud storage.",
  taglineShort:
    "Organize tabs and links into local collections without accounts, ads, or cloud storage.",
  publisher: {
    /** Имя, под которым расширение опубликовано в Chrome Web Store. */
    displayName: "Aleks Frame",
    /** Реальное лицо, отвечающее за расширение. */
    responsible: "Aleksandr Khrushch",
    /** Страна резидентства responsible publisher. */
    country: "Argentina",
    /** Юридический адрес для legal contact. */
    address: {
      line1: "Olleros 3570, 7",
      line2: "Dolores, Buenos Aires, 7100",
      country: "Argentina",
    },
    /** Trader status в Chrome Web Store. */
    traderStatus: "Non-trader",
  },
  contact: {
    /** Юридическая почта (legal contact). */
    legalEmail: "hruschbevictory@gmail.com",
    /** Поддержка для пользователей. */
    supportEmail: "RLS.TEAM@YANDEX.RU",
  },
  paths: {
    home: "/a-tabs/",
    support: "/a-tabs/support/",
    privacyPolicy: "/a-tabs/privacy-policy/",
    termsOfUse: "/a-tabs/terms-of-use/",
    dataHandling: "/a-tabs/data-handling/",
    openSourceNotices: "/a-tabs/open-source-notices/",
  },
  urls: {
    /** Project page (absolute URL — нужен в legal текстах). */
    home: "https://alarcev.n8nrgimprovise.space/a-tabs",
    privacyPolicy: "https://alarcev.n8nrgimprovise.space/a-tabs/privacy-policy",
    termsOfUse: "https://alarcev.n8nrgimprovise.space/a-tabs/terms-of-use",
    dataHandling: "https://alarcev.n8nrgimprovise.space/a-tabs/data-handling",
    support: "https://alarcev.n8nrgimprovise.space/a-tabs/support",
    /** Chrome Web Store URL — заполнить после публикации. */
    chromeWebStore: null as string | null,
  },
  /**
   * Дата редакции легальных документов. Должна совпадать с "Last Updated"
   * в исходных .md из A-TABS_Clean_Legal_Package_v2.
   */
  legalEdition: "May 11, 2026",
  /**
   * Единая формулировка про hosting, которую вставляем на каждую
   * легальную страницу — снимает риск, что Google решит, что Alarcev
   * это publisher расширения.
   */
  hostingNotice:
    "This document is hosted on the Alarcev website for convenience. The Chrome Web Store publisher and responsible party for the Extension is Aleksandr Khrushch, publishing under the Chrome Web Store name Aleks Frame. Alarcev may host project pages and legal documents, but Alarcev is not the Chrome Web Store publisher of the Extension unless expressly stated otherwise.",
  /**
   * Короткое описание для project page (брифовый шаг 1-3).
   * Источник: 04_Chrome_Web_Store_Publication_Answers.md, секция 4.
   */
  description:
    "A-TABS: Links Organizer helps you keep your browser workspace organized by saving tabs and links into clean, reusable collections. Instead of keeping dozens of tabs open, you can save your current work session and return to it later.",
  descriptionExtra:
    "The extension is designed as a simple local tool for tab and link organization. It does not require an account, does not include ads, does not sell data, and does not upload your saved collections to a remote server. Core extension data is stored locally on your device.",
  /** Ключевые функции (3-5 штук, как просит бриф). */
  features: [
    "Save current tabs into reusable collections",
    "Organize links by projects, topics, or tasks",
    "Search saved links and collections",
    "Reopen saved browser sessions when needed",
    "Keep extension data locally on your device",
  ],
  /** Privacy-first блок для project page. */
  privacyPoints: [
    "No account or sign-in required",
    "No advertising and no hidden in-extension monetization",
    "No analytics, telemetry, or behavioral tracking",
    "Local storage on your device — no cloud upload",
    "No selling, renting, or trading of user data",
  ],
  /**
   * Слайды для общей страницы /a-tabs/ и /a-tabs/support/.
   * Файлы лежат в public/images/a-tabs/.
   */
  slides: [
    {
      file: "easy-saving.png",
      caption: "Easy saving your tabs into clean collections",
      alt:
        "A-TABS screenshot: personal workspace with BASIS and AI & TOOLS groups, headline EASY SAVING YOUR TABS INTO CLEAN COLLECTIONS",
    },
    {
      file: "smart-search.png",
      caption: "Smart search across your saved tabs",
      alt:
        "A-TABS screenshot: search query git finds GitHub in saved collections, headline SMART SEARCH",
    },
    {
      file: "group-links.png",
      caption: "Group links by project, topic, or task",
      alt:
        "A-TABS screenshot: an open Google group with nested tabs gmail, drive, docs, headline GROUP LINKS BY PROJECT, TOPIC, OR TASK",
    },
    {
      file: "local-storage.png",
      caption: "Local storage — no account required",
      alt:
        "A-TABS screenshot: open tabs panel on the side, workspace dimmed, headline LOCAL STORAGE — NO ACCOUNT REQUIRED",
    },
    {
      file: "reusable-workspace.png",
      caption: "Turn open tabs into a reusable workspace",
      alt:
        "A-TABS screenshot: Spaces panel with Личное and Склад workspaces, headline TURN OPEN TABS INTO A REUSABLE WORKSPACE",
    },
    {
      file: "marquee-tile.png",
      caption: "A-TABS — local links organizer with mobile icons",
      alt:
        "A-TABS marquee: logo, headline A-TABS LOCAL LINKS ORGANIZER WITH MOBILE ICONS, tagline SAVE TABS / REDUCE CLUTTER / STAY FOCUSED",
    },
  ],
} as const;

export type ATabs = typeof ATABS;
