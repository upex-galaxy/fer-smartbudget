import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Nunito, Sora } from 'next/font/google';

import { AuthProvider } from '@/contexts/auth-context';

import './globals.css';

const headingFont = Sora({ subsets: ['latin'], variable: '--font-heading' });
const bodyFont = Nunito({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'BajaNumeros! | Presupuestos desde audios de WhatsApp',
  description:
    'Convierte acuerdos hablados en presupuestos editables y exportables en minutos, sin recaptura manual.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)]`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
