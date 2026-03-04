'use client';

import { useState } from 'react';
import { Copy, Check, Eye, Phone, Send, ExternalLink } from 'lucide-react';
import { Section, SectionTitle } from '@/shared/ui';

// Contact data is stored as char-code arrays.
// Plain values are never in the static HTML or as string literals in the bundle.
// Decoded client-side only after explicit user interaction.
const PHONE_CODES = [43, 55, 57, 48, 54, 56, 54, 49, 49, 49, 56, 54];
const TG_CODES = [98, 101, 114, 103, 104, 117, 98];

const decode = (codes: number[]): string => String.fromCharCode(...codes);

interface ContactCardProps {
  label: string;
  sublabel: string;
  mask: string;
  codes: number[];
  icon: React.ElementType;
  iconClass: string;
  formatValue: (raw: string) => string;
  getHref: (raw: string) => string;
  hrefLabel: string;
}

function ContactCard({
  label,
  sublabel,
  mask,
  codes,
  icon: Icon,
  iconClass,
  formatValue,
  getHref,
  hrefLabel,
}: ContactCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const raw = decode(codes);
  const display = formatValue(raw);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(display);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-background-secondary rounded-3xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col gap-6 overflow-hidden">
      {/* Radial glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(248,148,88,0.07),transparent_65%)]" />

      {/* Icon badge */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconClass}`}>
        <Icon size={22} />
      </div>

      {/* Labels */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground-secondary/50">
          {sublabel}
        </span>
        <span className="text-xl font-bold">{label}</span>
      </div>

      {/* Value */}
      <div className="font-mono text-xl font-semibold tracking-widest h-8 flex items-center">
        {revealed ? (
          <span className="text-primary animate-fade-in">{display}</span>
        ) : (
          <span className="text-foreground-secondary/35 select-none">{mask}</span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 flex-wrap">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black text-sm font-semibold hover:bg-primary/85 transition-colors cursor-pointer"
          >
            <Eye size={14} />
            Показать
          </button>
        ) : (
          <>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/8 text-foreground text-sm font-medium hover:bg-white/12 transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              {copied ? 'Скопировано!' : 'Копировать'}
            </button>
            <a
              href={getHref(raw)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 text-primary text-sm font-medium hover:bg-primary/25 transition-colors"
            >
              <ExternalLink size={14} />
              {hrefLabel}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function ContactsSection() {
  return (
    <Section id="contacts" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-3 mb-14">
        <SectionTitle>Свяжитесь со мной</SectionTitle>
        <p className="text-foreground-secondary max-w-sm text-base leading-relaxed">
          Открыт к новым проектам, фрилансу и интересным предложениям.
          <br />
          Отвечаю быстро.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <ContactCard
          label="Телефон"
          sublabel="Звонок / WhatsApp"
          mask="+7 ••• •••-••-••"
          codes={PHONE_CODES}
          icon={Phone}
          iconClass="bg-primary/15 text-primary"
          formatValue={(raw) => raw}
          getHref={(raw) => `tel:${raw}`}
          hrefLabel="Позвонить"
        />
        <ContactCard
          label="Telegram"
          sublabel="Личные сообщения"
          mask="@•••••••"
          codes={TG_CODES}
          icon={Send}
          iconClass="bg-badge-primary/15 text-badge-primary"
          formatValue={(raw) => `@${raw}`}
          getHref={(raw) => `https://t.me/${raw}`}
          hrefLabel="Написать"
        />
      </div>
    </Section>
  );
}
