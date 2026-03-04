import { PropsWithChildren } from 'react';

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="bg-background-secondary rounded-2xl p-6 flex flex-col justify-between gap-4 border border-white/5 hover:border-primary/25 transition-colors duration-300">
      {children}
    </div>
  );
}
