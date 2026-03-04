import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={clsx('text-3xl sm:text-4xl md:text-5xl font-bold mb-12 tracking-tight', className)}
    >
      {children}
      <span className="block w-12 h-1 bg-primary rounded-full mt-4" />
    </h2>
  );
}
