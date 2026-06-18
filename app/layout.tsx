import '@mantine/core/styles.css';
import './globals.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/fonts/DotGothic16-Regular.ttf',
});

export const metadata = {
  title: 'Todo App',
  description: 'Next.js + Mantine で作った Todo アプリ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning >
      <head>
        <ColorSchemeScript />
      </head>
      <body className={myFont.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
