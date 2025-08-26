'use client';

import SectionTitle from '@/components/typography/SectionTitle';
import Section from '@/components/Section';
import Text from '@/components/typography/Text';
import { data } from '@/app/screens/projects/data';
import MainButton from '@/components/buttons/MainButton';
import { ExternalLink } from 'lucide-react';
import BlockTitle from '@/components/typography/BlockTitle';
import Card from '@/components/Card';

export default function ProjectsSection() {
  const viewProject = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section id={'projects'}>
      <SectionTitle>Проекты</SectionTitle>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8'>
        {data.map(project => (
          <Card key={project.id}>
            <div className={'flex flex-col gap-4'}>
              <BlockTitle>{project.title}</BlockTitle>

              <div className={'flex flex-col gap-2 mt-4'}>
                <h4 className={'font-bold uppercase'}>Проблематика</h4>
                <div className='text-base text-gray-200'>{project.problem}</div>
              </div>

              <div className={'flex flex-col gap-2'}>
                <h4 className={'font-bold uppercase'}>Решение</h4>
                <div className='text-base text-gray-200'>{project.solve}</div>
              </div>

              <div className={'flex flex-col gap-2'}>
                <h4 className={'font-bold uppercase'}>Результат</h4>
                <div className='text-base font-bold text-gray-200'>
                  {project.result}
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              {project.stack.map((tech, j) => {
                const badgeColors = [
                  'text-primary bg-primary/20',
                  'text-badge-primary bg-badge-primary/20',
                  'text-badge-secondary bg-badge-secondary/20',
                  'text-white bg-white/20',
                ];
                return (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[j % badgeColors.length]}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            {project.link === null ? (
              <Text>NDA / Presentation on Request</Text>
            ) : (
              <div className={'flex flex-row gap-4 items-center'}>
                <MainButton onClick={() => viewProject(project.link)}>
                  <ExternalLink />
                </MainButton>

                <p>Ссылка для просмотра (код или вживую)</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
