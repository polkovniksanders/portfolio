import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';

const getFont = Source_Code_Pro({
  variable: '--font-sans',
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Портфолио | Попов Вячеслав',
  description:
    'Портфолио frontend-разработчика Попова Вячеслава. Проекты, стек, опыт, контакты.',
  keywords: [
    'Попов Вячеслав',
    'Frontend',
    'React',
    'Next.js',
    'Разработчик',
    'Портфолио',
    'TypeScript',
    'JavaScript',
    'Redux',
    'Tailwind CSS',
  ],
  authors: [
    { name: 'Попов Вячеслав', url: 'https://github.com/polkovniksanders' },
  ],
  creator: 'Попов Вячеслав',
  icons: {
    icon: '/og_icon.png',
    shortcut: '/favicon.ico',
    apple: '/og_icon.png',
  },
  openGraph: {
    title: 'Портфолио | Попов Вячеслав',
    description:
      'Портфолио frontend-разработчика Попова Вячеслава. Проекты, стек, опыт, контакты.',
    url: 'https://slava.berghub.ru',
    siteName: 'Портфолио | Попов Вячеслав',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Портфолио Попова Вячеслава',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://slava.berghub.ru'),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ru'>
      <body className={`${getFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
