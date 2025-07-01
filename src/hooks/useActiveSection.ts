import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[], threshold = 0.4) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    };

    const observer = new window.IntersectionObserver(handler, { threshold });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, threshold]);

  return active;
}
