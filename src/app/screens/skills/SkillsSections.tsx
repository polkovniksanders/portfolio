import SectionTitle from '@/components/typography/SectionTitle';
import Text from '@/components/typography/Text';
import { data } from '@/app/screens/skills/data';

export default function SkillsSections() {
  return (
    <section
      id='skills'
      className='w-full flex flex-col items-center justify-center bg-black  px-5 py-10'
    >
      <SectionTitle>Кратко обо мне</SectionTitle>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8'>
        {data.map(({ label, value }) => (
          <div key={label} className='flex flex-col items-center'>
            <span className='text-5xl font-extrabold text-primary mb-2'>
              {value}
            </span>
            <span className='text-lg text-gray-300 text-center'>{label}</span>
          </div>
        ))}
      </div>
      <Text className={'mt-6'}>
        А еще... У меня есть любимая жена, котик и отличная семья
      </Text>
    </section>
  );
}
