'use client';

import clsx from 'clsx';
import { House, FolderKanban, Award, Code2, User, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useActiveSection } from '@/shared/hooks/useActiveSection';
import useScrollToSection from '@/shared/hooks/useScrollToSection';
import { NAV_ITEMS, SECTION_IDS } from '@/shared/config/navigation';

const NAV_ICONS: Record<string, LucideIcon> = {
  home: House,
  projects: FolderKanban,
  experience: Award,
  technologies: Code2,
  hr: User,
  contacts: MessageCircle,
};

export default function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const { handleScroll } = useScrollToSection();

  return (
    <>
      {/* ── Desktop: top floating pill ─────────────────────────── */}
      <nav className="hidden sm:flex fixed top-4 left-0 right-0 z-50 justify-center px-4">
        <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-background-secondary/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={clsx(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                active === id
                  ? 'bg-primary/15 text-primary'
                  : 'text-foreground-secondary/60 hover:text-foreground hover:bg-white/5',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mobile: bottom tab bar ─────────────────────────────── */}
      <nav
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-background-secondary/92 backdrop-blur-md border-t border-white/8"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const Icon = NAV_ICONS[id] ?? House;
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={clsx(
                'flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 transition-all duration-200 cursor-pointer',
                isActive ? 'text-primary' : 'text-foreground-secondary/45',
              )}
            >
              <Icon size={18} strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[9px] font-medium leading-none">{label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
