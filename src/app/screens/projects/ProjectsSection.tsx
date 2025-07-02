'use client';

import SectionTitle from '@/components/typography/SectionTitle';
import Section from '@/components/Section';
import Text from '@/components/typography/Text';
import { data } from '@/app/screens/projects/data';
import MainButton from '@/components/buttons/MainButton';
import { ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const viewProject = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section id={'projects'}>
      <SectionTitle>Проекты</SectionTitle>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8'>
        {data.map(project => (
          <div
            key={project.id}
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

            {project.link === null ? (
              <Text>NDA</Text>
            ) : (
              <div>
                <MainButton onClick={() => viewProject(project.link)}>
                  <ExternalLink />
                </MainButton>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
