'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/shared/ui';
import useScrollToSection from '@/shared/hooks/useScrollToSection';
import { TELEGRAM_URL } from '@/shared/config/contacts';

const PHRASES = ['разработчик', 'Growth Engineer', 'React & TypeScript', 'Next.js & Node.js'];
const TYPING_SPEED = 75;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 400;

type TypingState = 'typing' | 'pausing' | 'deleting' | 'switching';

export default function HeroSection() {
  const { handleScroll } = useScrollToSection();
  const gridRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingState, setTypingState] = useState<TypingState>('typing');

  // Parallax on dot grid and glow blob
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (gridRef.current) gridRef.current.style.transform = `translateY(${y * 0.2}px)`;
      if (blobRef.current) blobRef.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Typing state machine
  useEffect(() => {
    const phrase = PHRASES[phraseIndex];

    if (typingState === 'typing') {
      if (displayText.length < phrase.length) {
        const t = setTimeout(
          () => setDisplayText(phrase.slice(0, displayText.length + 1)),
          TYPING_SPEED,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTypingState('pausing'), 0);
      return () => clearTimeout(t);
    }

    if (typingState === 'pausing') {
      const t = setTimeout(() => setTypingState('deleting'), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }

    if (typingState === 'deleting') {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), DELETING_SPEED);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTypingState('switching'), 0);
      return () => clearTimeout(t);
    }

    if (typingState === 'switching') {
      const t = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setTypingState('typing');
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }
  }, [displayText, phraseIndex, typingState]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Dot grid background with parallax */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(248,148,88,0.07) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blob with parallax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          ref={blobRef}
          className="w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] animate-pulse-glow will-change-transform"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl">
        <span className="animate-fade-in delay-100 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-foreground-secondary border border-white/10 rounded-full px-4 py-1.5 bg-white/5">
          Привет, я Слава
        </span>

        <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Fullstack
          <br />
          <span className="text-primary">
            {displayText}
            <span className="animate-blink inline-block w-[3px] h-[0.85em] bg-primary align-middle ml-0.5 rounded-sm" />
          </span>
        </h1>

        <p className="animate-fade-in-up delay-300 max-w-xl text-base sm:text-lg text-foreground-secondary leading-relaxed">
          React · Next.js · Node.js · PostgreSQL
          <br />
          Современный веб, Telegram Mini Apps и AI-интеграции
        </p>

        <div className="animate-fade-in-up delay-400 flex gap-3 mt-2 flex-wrap justify-center">
          <Button onClick={() => handleScroll('projects')}>Мои проекты</Button>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
          >
            Написать
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-500 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-secondary/40">
        <span className="text-[10px] tracking-[0.2em] uppercase">Скролл</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground-secondary/40 to-transparent" />
      </div>
    </section>
  );
}
