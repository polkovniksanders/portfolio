import { Section, SectionTitle, Text, IconWithText } from '@/shared/ui';
import { data } from '../model/data';

export default function SkillsSection() {
  return (
    <Section className="h-screen" id="skills">
      <SectionTitle>Обо мне в цифрах</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {data.map(({ label, value }) => (
          <IconWithText
            key={label}
            commonNode={<Text>{label}</Text>}
            highlightNode={<span className="font-extrabold text-5xl">{value}</span>}
          />
        ))}
      </div>
      <Text className="mt-6">А еще... У меня есть любимая жена, котик и я увлекаюсь бегом</Text>
    </Section>
  );
}
