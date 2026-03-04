export type ExperienceCategory = 'relevant' | 'partial' | 'minimal';

export interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  period: string;
  category: ExperienceCategory;
  highlights?: string[];
  stack?: string[];
  description?: string;
}
