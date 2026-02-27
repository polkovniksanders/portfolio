import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-6 py-3 rounded-full font-semibold transition cursor-pointer',
        variant === 'primary' && 'bg-primary text-black shadow hover:bg-primary/90',
        variant === 'outline' && 'border border-primary text-primary hover:bg-primary/10',
        className,
      )}
    >
      {children}
    </button>
  );
}
