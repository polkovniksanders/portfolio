import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface MainButtonProps extends PropsWithChildren {
  className?: string;
  onClick: () => void;
}

export default function MainButton({
  children,
  className,
  onClick,
}: MainButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-6 py-3 rounded-full bg-primary text-black cursor-pointer font-semibold shadow hover:bg-primary/90 transition',
        className,
      )}
    >
      {children}
    </button>
  );
}
