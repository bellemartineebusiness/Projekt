/**
 * cookieGate.ts
 *
 * Helper for loading external scripts only when the user has given consent.
 * Reads consent from the `cookie_consent` cookie (set by CookieBanner.tsx) and
 * either loads the script immediately or waits for the `cookieConsentChanged`
 * window event before injecting it.
 *
 * Usage:
 *   loadExternalScriptWhenConsented('my-script', 'https://example.com/script.js', 'analytics')
 */

import { getStoredConsent } from '@/components/CookieBanner'

export type ScriptCategory = 'analytics' | 'marketing' | 'necessary'

/**
 * Injects an external <script> tag into the document only when the user has
 * accepted cookies of the given category. For 'necessary' scripts the tag is
 * always injected immediately.
 *
 * @param id       Unique id for the <script> element (prevents duplicate injection).
 * @param src      The URL of the external script.
 * @param category Cookie category required for the script to load.
 */
export function loadExternalScriptWhenConsented(
  id: string,
  src: string,
  category: ScriptCategory
): void {
  if (typeof document === 'undefined') return

  function injectScript() {
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true
    document.head.appendChild(script)
  }

  if (category === 'necessary') {
    injectScript()
    return
  }

  const stored = getStoredConsent()
  if (stored?.status === 'accepted') {
    injectScript()
    return
  }

  function onConsentChanged(event: Event) {
    const detail = (event as CustomEvent<{ status: string }>).detail
    if (detail?.status === 'accepted') {
      injectScript()
      window.removeEventListener('cookieConsentChanged', onConsentChanged)
    }
  }

  window.addEventListener('cookieConsentChanged', onConsentChanged)
}
