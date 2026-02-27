import { ExternalLink } from 'lucide-react';
import { Card, BlockTitle, Text } from '@/shared/ui';
import { Project } from '../model/types';

const BADGE_COLORS = [
  'text-primary bg-primary/20',
  'text-badge-primary bg-badge-primary/20',
  'text-badge-secondary bg-badge-secondary/20',
  'text-white bg-white/20',
];

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <BlockTitle>{project.title}</BlockTitle>

        <div className="flex flex-col gap-2 mt-4">
          <h4 className="font-bold uppercase">Проблематика</h4>
          <div className="text-base text-gray-200">{project.problem}</div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold uppercase">Решение</h4>
          <div className="text-base text-gray-200">{project.solve}</div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold uppercase">Результат</h4>
          <div className="text-base font-bold text-gray-200">{project.result}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, j) => (
          <span
            key={tech}
            className={`px-3 py-1 rounded-full text-sm font-medium ${BADGE_COLORS[j % BADGE_COLORS.length]}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link === null ? (
        <Text>NDA / Presentation on Request</Text>
      ) : (
        <div className="flex flex-row gap-4 items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-primary text-black font-semibold shadow hover:bg-primary/90 transition inline-flex items-center"
          >
            <ExternalLink />
          </a>
          <p>Ссылка для просмотра (код или вживую)</p>
        </div>
      )}
    </Card>
  );
}
