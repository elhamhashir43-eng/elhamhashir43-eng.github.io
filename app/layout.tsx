import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elhamhashir43-eng.github.io'),
  title: {
    default: 'Matdan KSA | Independent Expertise',
    template: '%s',
  },
  description: 'Independent marine, engineering and risk expertise in the Kingdom of Saudi Arabia.',
  openGraph: {
    title: 'Matdan KSA | Independent Expertise',
    description: 'Independent expertise. The complete picture.',
    type: 'website',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Matdan KSA — Independent expertise. The complete picture.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matdan KSA | Independent Expertise',
    description: 'Independent expertise. The complete picture.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
