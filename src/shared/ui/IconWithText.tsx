import { ReactNode } from 'react';

interface IconWithTextProps {
  commonNode: ReactNode;
  highlightNode: ReactNode;
}

export default function IconWithText({ commonNode, highlightNode }: IconWithTextProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center group cursor-default">
      <div className="text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-200">
        {highlightNode}
      </div>
      <div className="text-foreground-secondary/60 group-hover:text-foreground-secondary transition-colors duration-200 text-sm">
        {commonNode}
      </div>
    </div>
  );
}
