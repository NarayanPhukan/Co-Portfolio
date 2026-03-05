import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Poppins, Sora } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Narayan Phukan | Full Stack MERN Developer',
  description:
    'Premium portfolio of Narayan Phukan - Full Stack MERN Stack Developer. Specializing in React, Node.js, Express, and MongoDB.',
  keywords: [
    'MERN Stack',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Narayan Phukan' }],
  creator: 'Narayan Phukan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://narayanphukan.com',
    title: 'Narayan Phukan | Full Stack MERN Developer',
    description:
      'Premium portfolio of Narayan Phukan - Full Stack MERN Stack Developer.',
    siteName: 'Narayan Phukan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narayan Phukan | Full Stack MERN Developer',
    description:
      'Premium portfolio of Narayan Phukan - Full Stack MERN Stack Developer.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://narayanphukan.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${sora.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
