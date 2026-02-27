import { Section, SectionTitle, Text, BlockTitle, Card } from '@/shared/ui';
import { data } from '../model/data';

export default function FaqSection() {
  return (
    <Section id="hr">
      <SectionTitle>Для HR</SectionTitle>

      <div className="max-w-2xl grid grid-cols-1 gap-8">
        {data.map((faq) => (
          <Card key={faq.id}>
            <BlockTitle>{faq.question}</BlockTitle>
            <Text>{faq.answer}</Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
