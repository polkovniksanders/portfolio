import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`text-accent text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-12 tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}
