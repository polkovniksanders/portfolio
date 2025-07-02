import { PropsWithChildren } from 'react';

export default function BlockTitle({ children }: PropsWithChildren) {
  return <h4 className={'text-primary text-2xl font-bold'}>{children}</h4>;
}
