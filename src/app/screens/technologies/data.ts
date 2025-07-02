import {
  Boxes,
  BrainCog,
  Cloud,
  Code,
  Cpu,
  Database,
  DatabaseZap,
  FileText,
  FolderTree,
  GitBranch,
  Hammer,
  ListChecks,
  LucideIcon,
  Palette,
  Send,
  Server,
  SmilePlus,
  TerminalSquare,
  Zap,
} from 'lucide-react';

interface DataProps {
  name: string;
  icon: LucideIcon;
}

export const data: DataProps[] = [
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
  { name: 'PostgresSQL', icon: Database },
  { name: 'Express', icon: DatabaseZap },
  { name: 'AI', icon: BrainCog },
  { name: 'Git', icon: GitBranch },
  { name: 'Jira', icon: ListChecks },
  { name: 'Soft Skills', icon: SmilePlus },
];
