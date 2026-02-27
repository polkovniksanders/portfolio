import { Section, SectionTitle, Text, IconWithText } from '@/shared/ui';
import { data } from '../model/data';

export default function TechnologiesSection() {
  return (
    <Section id="technologies">
      <SectionTitle>Технологический стек</SectionTitle>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-8">
        {data.map(({ name, icon: Icon }) => (
          <IconWithText
            key={name}
            commonNode={<Text>{name}</Text>}
            highlightNode={<Icon className="w-12 h-12" strokeWidth={2.2} />}
          />
        ))}
      </div>
    </Section>
  );
}
