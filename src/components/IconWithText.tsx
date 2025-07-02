import { ReactNode } from 'react';

interface IconWithText {
  commonNode: ReactNode;
  highlightNode: ReactNode;
}

export default function IconWithText({
  commonNode,
  highlightNode,
}: IconWithText) {
  return (
    <div className='flex flex-col items-center gap-3 text-center hover:scale-110 transition-transform'>
      <div className={'text-primary'}>{highlightNode}</div>

      <div> {commonNode} </div>
    </div>
  );
}
