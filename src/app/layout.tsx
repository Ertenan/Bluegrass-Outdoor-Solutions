import type { Metadata, Viewport } from 'next';
import { Merriweather, Inter } from 'next/font/google';
import './globals.css';

const serif = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-serif',
  display: 'swap'
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Bluegrass Outdoor Solutions | Northern Kentucky Landscaping',
  description:
    'Premium lawncare, landscape design, patios, paths, mulching, and snow removal in Union, Florence, and Northern Kentucky.',
  metadataBase: new URL('https://bluegrassoutdoorsolutions.com'),
  openGraph: {
    title: 'Bluegrass Outdoor Solutions',
    description: 'Professional landscaping services in Northern Kentucky.',
    type: 'website'
  }
};

export const viewport: Viewport = {
  themeColor: '#001F3F',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
