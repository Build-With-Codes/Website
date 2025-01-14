import './globals.css'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CookieConsent from './components/CookieConsent';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Build with Code',
  description: 'Your one-stop resource for frontend, backend, and monetization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          {children}
          <CookieConsent />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

