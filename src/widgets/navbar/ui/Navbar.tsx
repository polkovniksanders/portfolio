'use client';

import { useActiveSection } from '@/shared/hooks/useActiveSection';
import useScrollToSection from '@/shared/hooks/useScrollToSection';
import { NAV_ITEMS, SECTION_IDS } from '@/shared/config/navigation';

export default function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const { handleScroll } = useScrollToSection();

  return (
    <nav className="fixed top-0 w-full bg-black z-50">
      <ul className="flex gap-6 justify-center py-4">
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => handleScroll(id)}
              className={
                active === id
                  ? 'text-foreground-secondary font-bold underline underline-offset-4 transition'
                  : 'text-foreground-secondary/70 hover:text-primary transition'
              }
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
