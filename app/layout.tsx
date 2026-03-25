

import type { Metadata, Viewport } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Projektgaranti Stockholm AB - Professionell Renovering i Stockholm',
  description:
    'Erfarna hantverkare för badrum, kök och totalrenovering i Stockholmsområdet. ROT-avdrag. Kontakta oss för offert!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>
 
  {children}
  <CookieBanner />
</body>
    </html>
  )
}