import { Section, SectionTitle } from '@/shared/ui';
import { data } from '../model/data';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionTitle>Проекты</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...data]
          .sort((a, b) => a.position - b.position)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </Section>
  );
}
