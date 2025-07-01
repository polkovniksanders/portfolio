import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  id: string;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'w-full flex flex-col items-center justify-center bg-black px-5 py-10',
        className,
      )}
    >
      {children}
    </section>
  );
}
