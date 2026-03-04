import { Section, SectionTitle } from '@/shared/ui';
import { data } from '../model/data';
import { ExperienceEntry } from '../model/types';

function RelevantCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background z-10" />
      <div className="rounded-xl border border-white/8 bg-background-secondary/50 p-5 hover:border-primary/25 transition-colors duration-300">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
          <h3 className="text-lg font-bold text-foreground">{entry.company}</h3>
          <span className="text-primary font-medium text-sm">{entry.role}</span>
          <span className="ml-auto text-sm text-foreground-secondary/70 tabular-nums">
            {entry.period}
          </span>
        </div>
        {entry.highlights && (
          <ul className="space-y-1.5 mb-4">
            {entry.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
        {entry.stack && (
          <div className="flex flex-wrap gap-1.5">
            {entry.stack.map((s) => (
              <span
                key={s}
                className="text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary/80 font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PartialCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-badge-primary/60 border-2 border-background z-10" />
      <div className="rounded-xl border border-white/5 bg-background-secondary/30 p-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <h3 className="text-base font-semibold text-foreground">{entry.company}</h3>
          <span className="text-badge-primary/80 text-sm">{entry.role}</span>
          <span className="ml-auto text-sm text-foreground-secondary/60 tabular-nums">
            {entry.period}
          </span>
        </div>
        {entry.description && (
          <p className="text-sm text-foreground-secondary">{entry.description}</p>
        )}
      </div>
    </div>
  );
}

function MinimalRow({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-8 py-1">
      <div className="absolute left-[3px] top-3 w-2 h-2 rounded-full bg-foreground-secondary/25 border border-foreground-secondary/20 z-10" />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm text-foreground-secondary/55">
        <span className="font-medium text-foreground-secondary/75">{entry.company}</span>
        <span>{entry.role}</span>
        <span className="ml-auto text-xs tabular-nums">{entry.period}</span>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionTitle>Опыт работы</SectionTitle>
      <div className="relative w-full max-w-2xl">
        {/* Vertical timeline line */}
        <div className="absolute left-[6px] top-2 bottom-4 w-px bg-gradient-to-b from-primary/50 via-badge-primary/30 to-foreground-secondary/10" />

        <div className="flex flex-col gap-5">
          {data.map((entry) => {
            if (entry.category === 'relevant') return <RelevantCard key={entry.id} entry={entry} />;
            if (entry.category === 'partial') return <PartialCard key={entry.id} entry={entry} />;
            return <MinimalRow key={entry.id} entry={entry} />;
          })}
        </div>
      </div>
    </Section>
  );
}
