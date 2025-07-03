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
        'w-full flex flex-col items-center justify-center px-6 py-10 sm:px-6 sm:py-10 md:px-6 md:py-12 lg:px-12 lg:py-20',
        className,
      )}
    >
      {children}
    </section>
  );
}
