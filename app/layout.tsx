import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VU HONG DUC - エンジニアポートフォリオ',
  description: 'VU HONG DUCのエンジニアポートフォリオサイト。Java、Spring Framework、AWS等の開発経験とスキルを紹介。',
  keywords: 'エンジニア, ポートフォリオ, Java, Spring, AWS, フルスタック, VU HONG DUC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="/static/portfolio.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}