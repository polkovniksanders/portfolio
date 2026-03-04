'use client';

import { useEffect, useRef, useState } from 'react';

// Pixel art orange cat — Easter egg that peeks from the bottom-right on scroll.
// Each number maps to a color; 0 = transparent.
const PX = 7; // size of one "pixel" in real px

// prettier-ignore
const CAT_GRID = [
  [0,0,1,0,0,0,0,0,0,1,0,0], // ears — tips
  [0,1,1,1,0,0,0,0,1,1,1,0], // ears — outer
  [0,1,2,1,0,0,0,0,1,2,1,0], // ears — inner (light)
  [0,1,1,1,1,1,1,1,1,1,1,0], // forehead
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,3,3,1,1,1,1,3,3,1,1], // eyes (top)
  [1,1,3,3,1,1,1,1,3,3,1,1], // eyes (bottom)
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,1,1,1,1,1,1,2,2,1], // cheek patches
  [1,1,1,1,1,4,4,1,1,1,1,1], // nose
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1], // chin
  [0,1,1,1,1,1,1,1,1,1,1,0], // body
  [0,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,1,1,0,0], // body bottom
] as const;

const COLORS: Record<number, string> = {
  1: '#e07a38', // body orange
  2: '#f5c49a', // light inner ear / cheek
  3: '#6cc87a', // green eyes
  4: '#f5a0b8', // pink nose
};

const COLS = 12;
const ROWS = 16;
const CAT_W = COLS * PX; // 84px
const CAT_H = ROWS * PX; // 112px

// SVG of the cat with blinking eyes via CSS animation
function CatSvg() {
  return (
    <svg
      width={CAT_W}
      height={CAT_H}
      style={{ imageRendering: 'pixelated', display: 'block' }}
      aria-hidden="true"
    >
      {CAT_GRID.flatMap((row, ry) =>
        row.map((cell, rx) => {
          if (cell === 0) return null;
          const isEye = ry === 5 || ry === 6;
          return (
            <rect
              key={`${rx}-${ry}`}
              x={rx * PX}
              y={ry * PX}
              width={PX}
              height={PX}
              fill={COLORS[cell]}
              className={isEye ? 'animate-cat-blink' : undefined}
            />
          );
        }),
      )}
    </svg>
  );
}

export default function PixelCat() {
  const [visible, setVisible] = useState(false);
  // Offset from bottom — respects mobile bottom nav bar (≈60px)
  const [bottomOffset, setBottomOffset] = useState(0);

  const visibleRef = useRef(false);
  const scrollAccRef = useRef(0);
  const lastYRef = useRef(0);
  const lastShownRef = useRef(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Keep ref in sync with state so the scroll handler can read current visibility
  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  // Measure bottom nav height on mobile
  useEffect(() => {
    const update = () => setBottomOffset(window.innerWidth < 640 ? 60 : 0);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const MIN_INTERVAL_MS = 12_000;
    const SHOW_DURATION_MS = 4_200;
    const SCROLL_TRIGGER_PX = 500;
    const PROBABILITY = 0.45;

    lastYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollAccRef.current += Math.abs(currentY - lastYRef.current);
      lastYRef.current = currentY;

      if (scrollAccRef.current < SCROLL_TRIGGER_PX) return;
      scrollAccRef.current = 0;

      const now = Date.now();
      if (visibleRef.current) return;
      if (now - lastShownRef.current < MIN_INTERVAL_MS) return;
      if (Math.random() > PROBABILITY) return;

      lastShownRef.current = now;
      setVisible(true);
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setVisible(false), SHOW_DURATION_MS);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimerRef.current);
    };
  }, []);

  const dismiss = () => {
    clearTimeout(hideTimerRef.current);
    setVisible(false);
  };

  return (
    <div
      onClick={dismiss}
      style={{
        position: 'fixed',
        right: '20px',
        bottom: visible ? `${bottomOffset}px` : `-${CAT_H + 8}px`,
        zIndex: 60,
        cursor: 'pointer',
        transition: 'bottom 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
        filter: 'drop-shadow(0 -4px 16px rgba(224,122,56,0.45))',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Speech bubble */}
      <div
        style={{
          position: 'absolute',
          bottom: CAT_H + 8,
          right: 4,
          background: 'rgba(19, 18, 40, 0.95)',
          border: '1px solid rgba(248, 148, 88, 0.35)',
          borderRadius: 10,
          padding: '6px 10px',
          fontSize: 13,
          fontWeight: 500,
          color: '#f0e6de',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          // delay showing so bubble appears after cat slides in; hide instantly
          transition: visible
            ? 'opacity 0.25s 0.4s, transform 0.25s 0.4s'
            : 'opacity 0.15s, transform 0.15s',
          pointerEvents: 'none',
        }}
      >
        Привет! Я Степка 🐱
        {/* Bubble tail — border */}
        <span
          style={{
            position: 'absolute',
            bottom: -7,
            right: 18,
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderTop: '7px solid rgba(248, 148, 88, 0.35)',
          }}
        />
        {/* Bubble tail — fill */}
        <span
          style={{
            position: 'absolute',
            bottom: -5,
            right: 19,
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid rgba(19, 18, 40, 0.95)',
          }}
        />
      </div>

      <CatSvg />
    </div>
  );
}
