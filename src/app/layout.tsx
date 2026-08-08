import type { Metadata } from 'next';
import config from '@/lib/config';
import './globals.css';

const { meta } = config;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: ['wedding', 'invitation', 'undangan', 'pernikahan', 'digital'],
  authors: [{ name: 'Wedding Invitation' }],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: meta.title,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
