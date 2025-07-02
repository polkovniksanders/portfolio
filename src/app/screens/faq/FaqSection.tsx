import Section from '@/components/Section';
import SectionTitle from '@/components/typography/SectionTitle';
import { data } from '@/app/screens/faq/data';
import Text from '@/components/typography/Text';
import BlockTitle from '@/components/typography/BlockTitle';
import Card from '@/components/Card';

export default function FaqSection() {
  return (
    <Section id='hr'>
      <SectionTitle>Для HR</SectionTitle>

      <div className='max-w-2xl grid grid-cols-1  gap-8'>
        {data.map(faq => (
          <Card key={faq.id}>
            <BlockTitle>{faq.question}</BlockTitle>
            <Text>{faq.answer}</Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
