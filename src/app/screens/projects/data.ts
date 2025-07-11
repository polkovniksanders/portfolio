export interface ProjectDataProps {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link: null | string;
}

export const data: ProjectDataProps[] = [
  {
    id: 1,
    title: 'Medical dashboard',
    description:
      'Мультипользовательский дашборд для медицинских учреждений. SaaS-платформа для управления медициским оборудованием',
    stack: ['React', 'Redux Toolkit', 'Less', 'PHP', 'Docker'],
    link: 'https://kitactive.ru',
  },

  {
    id: 2,
    title: 'Telegram bot dashboard',
    description: 'Мультипользовательский дашборд для управления Telegram-ботом',
    stack: ['React', 'Redux Toolkit', 'Styled Components', 'Apexcharts'],
    link: 'https://spodial.com',
  },

  {
    id: 3,
    title: 'AI person generator',
    description:
      'Система генерирует краткое описание о человеке и его изображение  по ФИО, профессии и возрасту. Построена на AI. Может работать и открываться медленно из-за хостинга и бесплатный AI-моделей',
    stack: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'AI'],
    link: 'https://az-opal.vercel.app',
  },
  {
    id: 4,
    title: 'Market in Telegram',
    description:
      'Заказная разработка полнофунционального магазина в Telegram с возможностью оплаты crypto. По ссылке представлен DEV-контур',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Ant Design'],
    link: 'https://t.me/dev_mozhnostore_bot/dev_mozhno?startapp=1',
  },
  {
    id: 5,
    title: 'Telegram Shops',
    description:
      'Мультифункциональное Telegram App, которое позволяет создать и настроить собственный магазин в Telegram. Настраивать и создавать можно как через AI, Веб-админку или через отдельное Telegram-приложение',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'AI'],
    link: null,
  },
  {
    id: 6,
    title: 'Dribble dashboard',
    description: 'Случайный dashboard. Учебный проект.',
    stack: ['Next.JS', 'TypeScript', 'Redux Toolkit', 'Tailwind'],
    link: 'https://taskhub-two.vercel.app',
  },
  {
    id: 7,
    title: 'Fancy color generator',
    description:
      'Генератор 5 разных цветов с возможностью заблокировать и перевыбрать другие.',
    stack: ['JS', 'CSS', 'VanillaJS'],
    link: 'https://polkovniksanders.github.io/fancy-color-generator',
  },
];
