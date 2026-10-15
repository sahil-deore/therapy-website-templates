import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { site } from '@/content/site';
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400','500','600'], display: 'swap' });
export const metadata: Metadata = { title: `${site.brand} | ${site.descriptor}`, description: site.heroDescription, robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>; }
