import { ExperienceEntry } from './types';

export const data: ExperienceEntry[] = [
  {
    id: 1,
    company: 'Фабрика ИТ',
    role: 'Fullstack-разработчик',
    period: 'Май 2023 — н.в.',
    category: 'relevant',
    highlights: [
      '100% Lighthouse Performance на ключевых страницах',
      '-40% времени на операции клиентов',
      '+35% скорости команды через AI-интеграции',
      '-23% ручного тестирования (RTL + Jest)',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'TMA SDK'],
  },
  {
    id: 2,
    company: 'Кит Актив',
    role: 'Frontend-разработчик',
    period: 'Май 2019 — Май 2023',
    category: 'relevant',
    highlights: [
      'Миграция кодовой базы с JS на TypeScript',
      'Внедрение культуры code review в команде',
      'Интеграция со Swagger/OpenAPI',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'Less', 'Sass', 'PHP'],
  },
  {
    id: 3,
    company: 'Белый Кит / Кит Актив',
    role: 'Маркетинг и Growth',
    period: 'Апрель 2016 — Май 2023',
    category: 'partial',
    description:
      'Ведение рекламы в Google Ads и Яндекс.Директ, ручная вёрстка лендингов, email-маркетинг, аналитика (GTM, Метрика, GA).',
  },
  {
    id: 4,
    company: 'ТРЦ Фокус',
    role: 'SMM и контент',
    period: '2013 — 2016',
    category: 'minimal',
  },
  {
    id: 5,
    company: 'Телеканал ОТВ',
    role: 'Редактор контента',
    period: '2012 — 2013',
    category: 'minimal',
  },
  {
    id: 6,
    company: 'АН Оптима',
    role: 'Менеджер по рекламе',
    period: '2011 — 2012',
    category: 'minimal',
  },
];
