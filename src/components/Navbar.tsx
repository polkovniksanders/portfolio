'use client';

import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = ['home', 'skills', 'technologies', 'projects', 'hr'];

export default function Navbar() {
  const active = useActiveSection(sectionIds);

  // Функция для скролла к секции
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className='fixed top-0 w-full bg-black z-50'>
      <ul className='flex gap-6 justify-center py-4'>
        {sectionIds.map(id => (
          <li key={id} className='cursor-pointer'>
            <span
              onClick={() => handleScroll(id)}
              className={
                active === id
                  ? 'text-primary font-bold underline underline-offset-4 transition'
                  : 'text-white/70 hover:text-primary transition'
              }
              style={{ userSelect: 'none' }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
