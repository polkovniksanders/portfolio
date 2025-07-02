import { PropsWithChildren } from 'react';

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className='bg-background-secondary rounded-2xl p-6 flex flex-col justify-between gap-4'>
      {children}
    </div>
  );
}
