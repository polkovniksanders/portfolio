import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { data } from '@/app/screens/faq/data';

export default function FaqSection() {
  return (
    <Section id='hr'>
      <SectionTitle>Для HR</SectionTitle>

      <div className='max-w-2xl grid grid-cols-1  gap-6'>
        {data.map((faq, i) => (
          <div key={i} className='bg-neutral-900 rounded-2xl px-6 py-5'>
            <div className='font-semibold text-lg mb-2 text-primary'>
              {faq.question}
            </div>
            <div className='text-gray-300'>{faq.answer}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
