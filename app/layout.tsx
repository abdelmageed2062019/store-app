import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';
import Providers from "@/app/providers";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'A nifty store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
      <Providers>
      <Navbar />
      <Container className={'py-20'}>{children}</Container>
      </Providers>
      </body>
    </html>
      </ClerkProvider>
  );
}
