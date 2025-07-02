import { ReactNode } from 'react';

interface SectionTextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className = '' }: SectionTextProps) {
  return (
    <p
      className={`max-w-2xl text-lg sm:text-xl  text-text-color font-normal ${className}`}
    >
      {children}
    </p>
  );
}
