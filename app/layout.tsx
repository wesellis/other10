import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Other10 | Enterprise Innovation Lab',
  description:
    'Building enterprise-grade SaaS platforms, AI-powered tools, and innovative digital solutions. View our portfolio of production-ready applications and ongoing projects.',
  authors: [{ name: 'Other10' }],
  keywords:
    'SaaS, enterprise software, AI tools, Azure, FastAPI, Next.js, React, Python, full-stack development',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
