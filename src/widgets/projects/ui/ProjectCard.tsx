import { ExternalLink, Lock, ChevronDown } from 'lucide-react';
import { Card, BlockTitle } from '@/shared/ui';
import { Project } from '../model/types';

const BADGE_COLORS = [
  'text-primary bg-primary/15',
  'text-badge-primary bg-badge-primary/15',
  'text-badge-secondary bg-badge-secondary/15',
  'text-white/80 bg-white/10',
];

const SECTION_LABEL: Record<string, string> = {
  problem: 'Задача',
  solve: 'Решение',
  result: 'Результат',
};

interface SectionProps {
  label: string;
  children: string;
  bold?: boolean;
}

function CardSection({ label, children, bold }: SectionProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-foreground-secondary/60">
        {SECTION_LABEL[label] ?? label}
      </span>
      <p className={`text-sm leading-relaxed text-foreground/80 ${bold ? 'font-semibold' : ''}`}>
        {children}
      </p>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <BlockTitle>{project.title}</BlockTitle>

        <details className="group">
          <summary className="flex items-center justify-between gap-2 cursor-pointer select-none list-none rounded-lg px-3 py-2 bg-white/5 hover:bg-white/8 transition-colors text-xs font-semibold tracking-[0.12em] uppercase text-foreground-secondary/70 hover:text-foreground-secondary">
            <span>Задача / Решение / Результат</span>
            <ChevronDown
              size={14}
              className="shrink-0 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <div className="flex flex-col gap-3.5 mt-3">
            <CardSection label="problem">{project.problem}</CardSection>
            <CardSection label="solve">{project.solve}</CardSection>
            <CardSection label="result" bold>
              {project.result}
            </CardSection>
          </div>
        </details>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-2">
        {project.stack.map((tech, j) => (
          <span
            key={tech}
            className={`px-2.5 py-1 rounded-full text-xs font-medium ${BADGE_COLORS[j % BADGE_COLORS.length]}`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-1">
        {project.link === null ? (
          <div className="flex items-center gap-2 text-foreground-secondary/50 text-xs">
            <Lock size={13} />
            <span>NDA / По запросу</span>
          </div>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <ExternalLink size={14} />
            Открыть проект
          </a>
        )}
      </div>
    </Card>
  );
}
