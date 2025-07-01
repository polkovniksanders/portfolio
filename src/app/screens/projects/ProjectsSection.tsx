import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';
import Text from '@/components/Text';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Medical dashboard',
      description:
        'Мультипользовательский дашборд для медицинских учреждений. SaaS-платформа для управления медициским оборудованием',
      stack: ['React', 'Redux Toolkit', 'Less', 'PHP', 'Docker'],
    },

    {
      title: 'Telegram bot dashboard',
      description:
        'Мультипользовательский дашборд для управления Telegram-ботом',
      stack: ['React', 'Redux Toolkit', 'Styled Components', 'Apexcharts'],
    },

    {
      title: 'AI person generator',
      description:
        'Система генерирует краткое описание о человеке и его изображение  по ФИО, профессии и возрасту. Построена на AI',
      stack: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'AI'],
    },
    {
      title: 'Market in Telegram',
      description:
        'Заказная разработка полнофунционального магазина в Telegram с возможностью оплаты crypto',
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'Ant Design'],
    },
    {
      title: 'Telegram Shops',
      description:
        'Мультифункциональное Telegram App, которое позволяет создать и настроить собственный магазин в Telegram. Настраивать и создавать можно как через AI, Веб-админку или через отдельное Telegram-приложение',
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'AI'],
    },
    {
      title: 'Место вашего проекта',
      description:
        'Закажите собственное приложение. Предпочитаю писать качественный код, если не горят ваши сроки',
      stack: ['Next.JS', 'TypeScript', 'Redux Toolkit', 'AI'],
    },
  ];

  return (
    <Section id={'projects'}>
      <SectionTitle>Проекты</SectionTitle>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8'>
        {projects.map(project => (
          <div
            key={project.title}
            className='bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between gap-4 hover:shadow-lg transition'
          >
            <div className={'flex flex-col gap-4'}>
              <Text className={'text-2xl font-bold'}>{project.title}</Text>
              <div className='text-base text-gray-300'>
                {project.description}
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              {project.stack.map((tech, j) => {
                const badgeColors = [
                  'text-primary bg-primary/10',
                  'text-pink-400 bg-pink-400/10',
                  'text-amber-400 bg-amber-400/10',
                ];
                return (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[j % 3]}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
