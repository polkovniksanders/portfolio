'use client';

import Section from '@/components/Section';
import Text from '@/components/typography/Text';
import MainButton from '@/components/buttons/MainButton';
import useScrollToSection from '@/hooks/useScrollToSection';
import { CONTACT } from '@/config/options';

export default function HomeSection() {
  const { handleScroll } = useScrollToSection();
  const contact = () => {
    window.open(`https://t.me/${CONTACT}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section id={'home'}>
      <div className='w-screen h-screen flex items-center justify-center bg-black text-white transition-colors'>
        <div className='z-10 flex flex-col items-center text-center gap-6 px-4'>
          <span className='text-sm sm:text-base font-medium tracking-wide uppercase'>
            Привет, я Слава
          </span>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold'>
            Фронтенд-разработчик <br />
            <span className='text-primary'>React & TypeScript</span>
          </h1>

          <Text>
            Разрабатываю современные интерфейсы, оптимизирую фронтенд под
            бизнес-задачи, создаю удобный и быстрый пользовательский опыт.
            Специализация — React, Redux, Tailwind, Styled Components,
            современный JavaScript.
          </Text>

          <p className='max-w-xl text-base sm:text-lg mt-4'></p>
          <div className='flex gap-4 mt-6 flex-wrap justify-center'>
            <MainButton onClick={() => handleScroll('projects')}>
              Мои проекты
            </MainButton>

            <a
              onClick={contact}
              className='px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition'
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
