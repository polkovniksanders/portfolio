import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const getActiveId = (): string => {
      // If scrolled to the bottom of the page — last section is active
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) return ids[ids.length - 1] ?? ids[0] ?? '';

      const threshold = window.scrollY + window.innerHeight * 0.4;
      let current = ids[0] ?? '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) {
          current = id;
        }
      }

      return current;
    };

    const handleScroll = () => setActive(getActiveId());

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids]);

  return active;
}
