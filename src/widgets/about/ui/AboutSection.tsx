'use client';

import { Code2, Heart, PawPrint, Activity, ExternalLink, Sparkles } from 'lucide-react';
import { Section, SectionTitle } from '@/shared/ui';
import { TELEGRAM_URL } from '@/shared/config/contacts';

const STARS = [
  { top: '8%', left: '3%', size: 2, delay: '0s', dur: '3.2s' },
  { top: '15%', left: '96%', size: 1.5, delay: '1.1s', dur: '4s' },
  { top: '80%', left: '2%', size: 1.5, delay: '2.3s', dur: '3.6s' },
  { top: '88%', left: '94%', size: 2, delay: '0.6s', dur: '4.4s' },
  { top: '50%', left: '98%', size: 1, delay: '1.8s', dur: '3s' },
];

const INFO_CARDS = [
  {
    icon: Code2,
    title: 'Разработчик',
    desc: 'Fullstack-инженер. Делаю современный веб, Telegram Mini Apps и AI-интеграции.',
    accent: 'primary' as const,
  },
  {
    icon: Heart,
    title: 'Семья',
    desc: 'Женат. Жена занимается управлением магазином на Wildberries.',
    accent: 'badge-secondary' as const,
  },
  {
    icon: PawPrint,
    title: 'Кот и попугай',
    desc: null,
    link: { href: 'https://t.me/stepka_and_twitty', label: 'Степка и Твитти' },
    accent: 'badge-primary' as const,
  },
  {
    icon: Activity,
    title: 'Бег',
    desc: 'Увлекаюсь бегом — лучший способ перезагрузиться и набраться энергии.',
    accent: 'primary' as const,
  },
];

const ACCENT_CLASSES = {
  primary: {
    icon: 'bg-primary/10 text-primary group-hover:bg-primary/20',
    border: 'hover:border-primary/30',
  },
  'badge-secondary': {
    icon: 'bg-badge-secondary/10 text-badge-secondary group-hover:bg-badge-secondary/20',
    border: 'hover:border-badge-secondary/30',
  },
  'badge-primary': {
    icon: 'bg-badge-primary/10 text-badge-primary group-hover:bg-badge-primary/20',
    border: 'hover:border-badge-primary/30',
  },
};

export default function AboutSection() {
  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Twinkling stars */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white pointer-events-none animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            ['--tw-duration' as string]: s.dur,
          }}
        />
      ))}

      <SectionTitle>Немного обо мне</SectionTitle>

      {/* Open-to-work card */}
      <div className="relative mb-6 rounded-2xl border border-primary/30 bg-primary/5 p-6 overflow-hidden group hover:border-primary/50 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-badge-primary/5 blur-[50px] pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-green-400 animate-status-ping" />
              <div className="relative w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-green-400">
              Открыт к работе
            </span>
          </div>

          <p className="text-foreground-secondary text-sm leading-relaxed sm:ml-2 max-w-lg">
            Ищу интересные проекты: fullstack-разработка, Telegram Mini Apps, AI-интеграции.
            Рассматриваю полную занятость и разовые заказы.
          </p>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold hover:bg-primary/25 transition-colors self-start sm:self-auto ml-auto"
          >
            <ExternalLink size={13} />
            Написать
          </a>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INFO_CARDS.map(({ icon: Icon, title, desc, link, accent }) => {
          const cls = ACCENT_CLASSES[accent];
          return (
            <div
              key={title}
              className={`rounded-2xl bg-background-secondary border border-white/5 ${cls.border} transition-colors duration-300 p-5 flex flex-col gap-3 group`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${cls.icon}`}
              >
                <Icon size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-1.5">{title}</div>
                {desc && (
                  <p className="text-xs text-foreground-secondary leading-relaxed">{desc}</p>
                )}
                {link && (
                  <p className="text-xs text-foreground-secondary leading-relaxed">
                    Дома живут кот Степка и попугай Твитти.{' '}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-badge-primary hover:opacity-80 underline underline-offset-2 transition-opacity"
                    >
                      Их Telegram-канал →
                    </a>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative sparkles */}
      <div className="absolute top-8 right-8 text-primary/15 animate-float pointer-events-none hidden lg:block">
        <Sparkles size={28} />
      </div>
    </Section>
  );
}
