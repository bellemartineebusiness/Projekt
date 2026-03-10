import type { Metadata, Viewport } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
// NOTE: Do NOT add third-party analytics or marketing scripts (Google Analytics,
// GTM, Hotjar, Meta Pixel, etc.) directly to this layout.  All external scripts
// that require user consent must be injected via the cookie-gating helper:
//
//   import { loadExternalScriptWhenConsented } from '@/lib/cookieGate'
//
//   // Example – load Google Maps only after the user accepts analytics cookies:
//   loadExternalScriptWhenConsented(
//     'google-maps',
//     'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY',
//     'analytics'
//   )
//
// Call the helper inside a client component's useEffect so it runs in the browser.

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Projektgaranti Stockholm AB - Professionell Renovering i Stockholm',
  description: 'Erfarna hantverkare för badrum, kök och totalrenovering i Stockholmsområdet. ROT-avdrag. Kontakta oss för offert!',
  keywords: 'renovering Stockholm, badrumsrenovering, köksrenovering, ROT-avdrag, hantverkare Stockholm',
  icons: {
    icon: '/logo-icon.svg',
    shortcut: '/logo-icon.svg',
  },
  openGraph: {
    title: 'Projektgaranti Stockholm AB',
    description: 'Professionell renovering i Stockholmsområdet med garanti och ROT-avdrag.',
    type: 'website',
    locale: 'sv_SE',
  },
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
