import { Section, SectionTitle, IconWithText } from '@/shared/ui';
import { data } from '../model/data';
import CircuitBoard from './CircuitBoard';

export default function TechnologiesSection() {
  return (
    <Section id="technologies" className="relative overflow-hidden bg-background-secondary/30">
      <CircuitBoard />

      <div className="relative z-10 flex flex-col items-center w-full">
        <SectionTitle>Технологический стек</SectionTitle>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 w-full max-w-4xl">
          {data.map(({ name, icon: Icon }) => (
            <IconWithText
              key={name}
              commonNode={<span>{name}</span>}
              highlightNode={<Icon className="w-10 h-10" strokeWidth={1.8} />}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
