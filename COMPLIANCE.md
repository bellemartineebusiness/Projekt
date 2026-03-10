# GDPR & Cookie Compliance – Projektgaranti Stockholm AB

Senast uppdaterad: 2026-03-10

## Sammanfattning av gjorda ändringar

Denna fil dokumenterar de GDPR- och cookie-kompliansändringar som genomförts i kodbasen.

---

## Ändrade filer

| Fil | Typ av ändring |
|-----|---------------|
| `lib/cookieGate.ts` | **Ny fil** – cookie-gating helper för externa skript |
| `app/integritetspolicy/page.tsx` | Organisationsnummer (556717-4395), förbättrad cookiesektion med `cookie_consent`-detaljer, återkallningsinstruktioner, "Senast uppdaterad: 2026-03-10" |
| `components/CookieBanner.tsx` | Knapptext "Återkalla / Spara val" för tydligare återkallningsmöjlighet |
| `app/api/contact/route.ts` | Removed `console.log` of personal data; replaced with safe placeholder comment for email provider wiring |
| `app/layout.tsx` | Added gating comment explaining how to load external scripts (e.g. Google Maps) only after user consent |
| `COMPLIANCE.md` | **Ny fil** – denna dokumentationsfil |

---

## Inventering av analytics/trackers

Sökning efter: `gtag`, `google-analytics`, `googletagmanager`, `gtm`, `plausible`, `fbq`, `facebook`, `hotjar`, `@vercel/analytics`, `umami`, `segment`, `matomo`

**Resultat: Inga tredjepartsspårare hittades i kodbasen.** Inga analytics-skript är inkluderade eller injiceras.

---

## `lib/cookieGate.ts` – cookie-gating

API:
```ts
loadExternalScriptWhenConsented(id: string, src: string, category: 'analytics' | 'marketing' | 'necessary'): void
```

Funktionen:
- Läser samtycke från `cookie_consent`-cookien via `getStoredConsent()` (från `CookieBanner.tsx`).
- För `necessary`-kategori: laddar skriptet omedelbart.
- För `analytics`/`marketing`: laddar skriptet endast om `status === 'accepted'`, annars väntar den på `cookieConsentChanged`-eventet.

Använd denna funktion för alla framtida externa skript av typ analytics eller marketing.

---

## Kontaktformulär

Kontaktformuläret (`components/Contact.tsx` + `app/api/contact/route.ts`) är bevarat och orört.

Persondata (namn, e-post, telefon, meddelande) loggas **inte** längre till serverns konsol. `app/api/contact/route.ts` innehåller nu enbart en platshållarkommentar med instruktioner om hur man kopplar in en e-postleverantör (Resend/Nodemailer/SendGrid).

> ⚠️ **OBS:** Formuläret validerar och accepterar inskickade uppgifter men **levererar dem inte** (skickar inget e-postmeddelande och sparar inget till databas) förrän en e-postleverantör kopplas in. Formuläret returnerar `{ success: true }` för att inte avslöja konfigurationsdetaljer för slutanvändaren, men ansvarig driftsättare måste implementera faktisk e-postleverans innan formuläret är produktionsklar.

Uppgifterna som samlas in via formuläret är: namn, e-post, telefon (valfritt), meddelande, GDPR-samtycke. Rättslig grund: samtycke (GDPR art. 6.1 a). Lagringstid: 24 månader.

---

## Hur man testar att inga skript laddas före samtycke

1. Öppna webbplatsen i ett **privat/inkognito-fönster** (inga tidigare cookies).
2. Öppna DevTools (F12).
3. Gå till fliken **Network** och filtrera på "JS" eller "Script".
4. Ladda om sidan utan att acceptera cookie-bannern.
5. Verifiera att **inga** skript laddas från domäner som:
   - `google-analytics.com`
   - `googletagmanager.com`
   - `plausible.io`
   - `connect.facebook.net`
   - `hotjar.com`
   - Andra okända tredjepartsdomäner
6. Gå till fliken **Application → Cookies** och kontrollera att ingen `cookie_consent`-cookie är satt (förutom om du accepterat).
7. Klicka **"Acceptera alla"** i cookie-bannern och verifiera att `cookie_consent` nu är satt med `status: "accepted"`, `version: "2"` och ett datum.
8. Klicka **"Hantera cookies"** i sidfoten och välj **"Återkalla / Spara val"** – verifiera att cookien uppdateras till `status: "necessary"`.

---

## Verifiering av `cookie_consent`-cookien

Öppna DevTools → Application → Cookies → din domän. Cookien `cookie_consent` ska innehålla:
```json
{"status":"accepted","version":"2","date":"2026-03-10T...Z"}
```
eller
```json
{"status":"necessary","version":"2","date":"2026-03-10T...Z"}
```

---

## Juridisk granskning krävs

> **⚠️ Viktigt:** Dessa tekniska ändringar minskar risken men ersätter **inte** juridisk rådgivning. En jurist eller dataskyddsspecialist (DPO) bör granska:
> - Integritetspolicyn i sin helhet
> - Huruvida personuppgiftsbiträdesavtal (DPA) är tecknade med Vercel och andra leverantörer
> - Hantering av befintlig persondata i loggar/backuper
> - Huruvida samtyckets utformning uppfyller GDPR:s krav på frivillighet, specificitet och information
> - Anmälningsskyldighet till IMY om tillämpligt

Kontakta [Integritetsskyddsmyndigheten (IMY)](https://www.imy.se) vid frågor om tillsyn.

---

## Tredjepartsleverantörer som används

| Leverantör | Syfte | Dataplats | Avtal |
|-----------|-------|-----------|-------|
| Vercel | Hosting | EU/USA (SCCs) | [Privacy Policy](https://vercel.com/legal/privacy-policy) |
| Google Maps | Kartvisning (laddas endast vid samtycke) | USA (SCCs) | [Privacy Policy](https://policies.google.com/privacy) |

Inga data överförs till Google Analytics eller liknande spåringstjänster.
