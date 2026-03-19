export const NAV_LINKS = [
  { label: "услуги", href: "#services" },
  { label: "кейсы", href: "#cases" },
  { label: "наш подход", href: "#approach" },
] as const;

export const SERVICES = [
  "функции коммерческого департамента",
  "функции CMO",
  "сборка отделов продаж и маркетинга",
  "цифровизация маркетинга и продаж",
  "управление продуктом",
  "креативное производство и дизайн цифровых продуктов",
  "спецпроекты в digital",
  "игровые механики в digital",
  "медиабаинг",
  "консалтинг",
] as const;

export interface ApproachItem {
  number: string;
  title: string;
  bullets: string[];
}

export const APPROACH_ITEMS: ApproachItem[] = [
  {
    number: "01",
    title: "сквозная аналитика и дашборды.",
    bullets: [
      "умеем находить решения быстрых переходов на data-driven маркетинг",
      "создаем единую систему цифровых показателей в маркетинге и продажах",
      "объединяем данные из всех источников",
      "создаем понятные цифровые системы управления",
      "повышаем качество принимаемых управленческих решений на основе данных",
    ],
  },
  {
    number: "02",
    title: "performance-маркетинг.",
    bullets: [
      "привлекаем покупки, заявки и инсталлы. лидогенерация для выхода на новые рынки",
      "тестируем гипотезы на небольших бюджетах и масштабируем эффективные",
      "формируем выделенную команду, которая через эксперименты добивается повышения дохода или LTV",
      "адаптируем web-ресурсы и контент для роста органического трафика",
      "создаем микс каналов для снижения стоимости CPA и роста ROMI",
    ],
  },
  {
    number: "03",
    title: "эффективная система продаж.",
    bullets: [
      "проведем комплексный аудит продаж",
      "рассчитаем ресурсы и орг. структуру",
      "спроектируем процессы для роста бизнеса",
      "подберем оптимальный CJM и технологический стек",
      "определим опорные и ключевые показатели в продажах",
      "создадим рабочие документы, базы знаний и регламенты продаж",
      "соберем команду",
      "вместе доведем продажи до плановых показателей",
    ],
  },
];

export const APPROACH_PRINCIPLES = [
  "принимаем решения на основе данных.",
  "отвечаем за всю воронку продаж.",
  "собираем выделенные команды топовых экспертов на каждом проекте.",
  "работаем по гипотезам.",
  "делаем больше, чем обещали.",
  "достигаем результатов.",
] as const;

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
  slug?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "аналитика сервиса проката авто в Нью-Йорке",
    description: "",
    image: "/images/tild3630-6230-4463-b564-626462643732__image.jpg",
    comingSoon: true,
    slug: "servis-prokata-avto-v-ny",
  },
  {
    title: "тебе на «а».",
    description:
      "как продвигали игру «Города» от Яндекс Плюс и Путешествия в Telegram и сократили стоимость клика в 2 раза.",
    image: "/images/tild3735-6433-4662-b936-373865336636__image-preview-goroda.jpg",
    slug: "goroda",
  },
  {
    title: "большая трансформация бренда The Serpent – кейс today",
    description:
      "или как сделать ×3 в выручке и узнаваемости бренда за 6 месяцев.",
    image: "/images/tild6533-3931-4230-b262-336138393431__image-preview-bt.jpg",
    slug: "bolshaya-transformatsia",
  },
];

export const CLIENT_LOGOS = [
  { name: "Яндекс Путешествия", src: "/images/tild6430-3339-4237-b865-663133383761__logo_ya_travel.svg" },
  { name: "Яндекс Практикум", src: "/images/tild3664-3735-4462-b831-326535363330__logo_ya_prak.svg" },
  { name: "Яндекс Лайтбокс", src: "/images/tild3031-6161-4361-a431-366333653065__logo_ya_litebox.svg" },
  { name: "The Serpent", src: "/images/tild3461-3034-4831-b331-346131346363__logo_ya_serpent.svg" },
  { name: "Яндекс Здоровье", src: "/images/tild6164-3733-4534-b362-373764326439__logo_ya_health.svg" },
  { name: "RealCar", src: "/images/tild6330-3264-4537-a433-653663663431__logo_ya_realcar.svg" },
] as const;

export const CONTACT = {
  phone: "+7 993 614 06 17",
  email: "hello@today-agency.ru",
  address: "127299, г. Москва, ул. Космонавта Волкова, 6а, офис 59",
  telegram: "https://t.me/shigabetdinov",
} as const;

export const FOOTER_NAV = [
  { label: "услуги", href: "#services" },
  { label: "кейсы", href: "#cases" },
  { label: "наш подход", href: "#approach" },
] as const;
