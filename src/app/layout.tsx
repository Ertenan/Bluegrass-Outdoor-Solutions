import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { serviceListText } from '@/content/services';
import './globals.css';

const serif = localFont({
  src: './fonts/merriweather-latin.woff2',
  weight: '400 900',
  style: 'normal',
  variable: '--font-serif',
  display: 'swap'
});

const sans = localFont({
  src: './fonts/inter-latin.woff2',
  weight: '100 900',
  style: 'normal',
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Bluegrass Outdoor Solutions | Northern Kentucky Landscaping',
  description: `Professional ${serviceListText.toLowerCase()} in Union, Florence, and Northern Kentucky.`,
  metadataBase: new URL('https://bluegrassoutdoorsolutions.com'),
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    title: 'Bluegrass Outdoor Solutions',
    description: `Professional ${serviceListText.toLowerCase()} in Northern Kentucky.`,
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
