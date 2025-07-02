import Text from '@/components/typography/Text';
import SectionTitle from '@/components/typography/SectionTitle';
import Section from '@/components/Section';
import { data } from '@/app/screens/technologies/data';

export default function TechnologiesSection() {
  return (
    <Section
      id='technologies'
      className='w-full flex flex-col items-center justify-center bg-black text-white px-5 py-10'
    >
      <SectionTitle>Технологический стек</SectionTitle>

      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-8'>
        {data.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className='flex flex-col items-center gap-3 text-center hover:scale-110 transition-transform'
            title={name}
          >
            <Icon
              className='w-12 h-12 text-primary drop-shadow'
              strokeWidth={2.2}
            />

            <Text>{name}</Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
