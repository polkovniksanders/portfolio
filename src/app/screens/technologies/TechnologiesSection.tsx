import {
  Code,
  FileText,
  Database,
  GitBranch,
  Palette,
  Cpu,
  Zap,
  TerminalSquare,
  Server,
  Cloud,
  Hammer,
  BrainCog,
  DatabaseZap,
  FolderTree,
  ListChecks,
  SmilePlus,
  Send,
  Boxes,
} from 'lucide-react';
import Text from '@/components/Text';
import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';

const technologies = [
  { name: 'TypeScript', icon: Code },
  { name: 'JavaScript', icon: Zap },
  { name: 'React', icon: Cpu },
  { name: 'Next.js', icon: Cloud },
  { name: 'Redux', icon: FolderTree },
  { name: 'Telegram Mini App SDK', icon: Send },
  { name: 'Webpack/Vite', icon: TerminalSquare },
  { name: 'Styled Components', icon: Hammer },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'CSS 3 /SCSS/LESS', icon: FileText },
  { name: 'ANT Design', icon: Boxes },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Express', icon: DatabaseZap },
  { name: 'AI', icon: BrainCog },
  { name: 'Git', icon: GitBranch },
  { name: 'Jira', icon: ListChecks },
  { name: 'Soft Skills', icon: SmilePlus },
];

export default function TechnologiesSection() {
  return (
    <Section
      id='technologies'
      className='w-full flex flex-col items-center justify-center bg-black text-white px-5 py-10'
    >
      <SectionTitle>Технологический стек</SectionTitle>

      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-8'>
        {technologies.map(({ name, icon: Icon }) => (
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
