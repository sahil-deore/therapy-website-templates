import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400','500','600'] });
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
export const metadata: Metadata = {
  title: 'Stillwater Therapy | A space to feel more like yourself',
  description: 'A sample website for an individual therapy practice. Individual therapy, online and in person. Replace all sample practice details before publishing.',
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
