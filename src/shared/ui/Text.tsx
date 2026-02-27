import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className = '' }: TextProps) {
  return (
    <p
      className={`max-w-2xl text-lg sm:text-xl text-foreground-secondary font-normal ${className}`}
    >
      {children}
    </p>
  );
}
