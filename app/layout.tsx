import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'NAD | Newlander Air Management Design',
  description: 'Advanced Air Suspension Management system with mobile app control. Built for enthusiasts.',
  icons: {
    icon: 'https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/nad-module.png',
    apple: 'https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/nad-module.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-[#0b0f14] text-slate-300 antialiased selection:bg-[#00ffd0]/30 selection:text-[#00ffd0]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
