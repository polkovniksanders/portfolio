import Text from '@/components/typography/Text';
import SectionTitle from '@/components/typography/SectionTitle';
import Section from '@/components/Section';
import { data } from '@/app/screens/technologies/data';
import IconWithText from '@/components/IconWithText';

export default function TechnologiesSection() {
  return (
    <Section id='technologies'>
      <SectionTitle>Технологический стек</SectionTitle>

      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-8'>
        {data.map(({ name, icon: Icon }) => (
          <IconWithText
            key={name}
            commonNode={<Text>{name}</Text>}
            highlightNode={<Icon className='w-12 h-12' strokeWidth={2.2} />}
          />
        ))}
      </div>
    </Section>
  );
}
