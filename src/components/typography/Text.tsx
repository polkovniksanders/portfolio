import { ReactNode } from 'react';

interface SectionTextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className = '' }: SectionTextProps) {
  return (
    <p
      className={`max-w-2xl text-lg sm:text-xl font-normal text-gray-300 ${className}`}
    >
      {children}
    </p>
  );
}
