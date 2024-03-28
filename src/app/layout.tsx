import { type Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { RootLayout } from '@/components/RootLayout';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: 'GreatIdea.dev',
    default: "GreatIdea.dev - Mississippi's Premier Software Development Team",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full bg-neutral-950 text-base antialiased'>
      <body className='flex min-h-full flex-col'>
        <Analytics />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
