'use client';

import { Section, Text, Button } from '@/shared/ui';
import useScrollToSection from '@/shared/hooks/useScrollToSection';
import { TELEGRAM_URL } from '@/shared/config/contacts';

export default function HeroSection() {
  const { handleScroll } = useScrollToSection();

  return (
    <Section id="home">
      <div className="w-screen h-screen flex items-center justify-center transition-colors">
        <div className="z-10 flex flex-col items-center text-center gap-6 px-4">
          <span className="text-sm sm:text-base font-medium tracking-wide uppercase">
            Привет, я Слава
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Фронтенд-разработчик <br />
            <span className="text-primary">React & TypeScript</span>
          </h1>

          <Text>
            Разрабатываю современные интерфейсы, оптимизирую фронтенд под бизнес-задачи, создаю
            удобный и быстрый пользовательский опыт. Специализация — React, Redux, Tailwind, Styled
            Components, современный JavaScript.
          </Text>

          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <Button onClick={() => handleScroll('projects')}>Мои проекты</Button>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
