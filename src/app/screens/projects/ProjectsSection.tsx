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

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8'>
        {data.map(project => (
          <Card key={project.id}>
            <div className={'flex flex-col gap-4'}>
              <BlockTitle>{project.title}</BlockTitle>

              <div className='text-base text-gray-300'>
                {project.description}
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
              <div>
                <MainButton onClick={() => viewProject(project.link)}>
                  <ExternalLink />
                </MainButton>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
