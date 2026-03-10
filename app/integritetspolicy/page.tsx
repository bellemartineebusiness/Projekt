import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integritetspolicy & Cookiepolicy – Projektgaranti Stockholm AB',
  description:
    'Läs om hur Projektgaranti Stockholm AB behandlar personuppgifter och använder cookies enligt GDPR.',
}

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="bg-dark-bg text-white py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold">Integritetspolicy &amp; Cookiepolicy</h1>
          <p className="text-gray-400 mt-2 text-sm">Senast uppdaterad: mars 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 prose prose-gray max-w-none">
        {/* 1. Personuppgiftsansvarig */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Personuppgiftsansvarig</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Personuppgiftsansvarig för behandlingen av dina personuppgifter är:
          </p>
          <address className="not-italic bg-gray-50 rounded-xl p-5 text-gray-700 text-sm leading-loose border border-gray-200">
            <strong>Projektgaranti Stockholm AB</strong><br />
            {/* TODO: Ersätt 559XXXXX-XXXX med faktiskt organisationsnummer innan publicering */}
            Organisationsnummer: 559XXXXX-XXXX<br />
            Ekerövägen 51, 178 37 Ekerö<br />
            Telefon:{' '}
            <a href="tel:+46707401383" className="text-primary hover:underline">
              +46 70 740 1383
            </a>
            <br />
            E-post:{' '}
            <a href="mailto:info@projektgarantiab.se" className="text-primary hover:underline">
              info@projektgarantiab.se
            </a>
          </address>
        </section>

        {/* 2. Vilka uppgifter vi samlar in */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Vilka uppgifter vi samlar in</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Vi samlar in personuppgifter som du frivilligt lämnar till oss via kontaktformuläret på
            webbplatsen. Det kan röra sig om:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer (valfritt)</li>
            <li>Meddelande/projektbeskrivning</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            Vi samlar inte in känsliga personuppgifter och behandlar inga uppgifter om barn utan
            vårdnadshavares samtycke.
          </p>
        </section>

        {/* 3. Ändamål och rättslig grund */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Ändamål och rättslig grund</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Ändamål</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Rättslig grund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border border-gray-200">Besvara förfrågningar via kontaktformuläret</td>
                  <td className="py-3 px-4 border border-gray-200">Samtycke (artikel 6.1 a GDPR)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200">Upprätta och fullgöra avtal</td>
                  <td className="py-3 px-4 border border-gray-200">Avtal (artikel 6.1 b GDPR)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200">Uppfylla rättsliga skyldigheter (t.ex. bokföring)</td>
                  <td className="py-3 px-4 border border-gray-200">Rättslig förpliktelse (artikel 6.1 c GDPR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Samtyckeslogg och bevisföring */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Samtyckeslogg och bevisföring</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            När du lämnar ett samtycke till cookies och/eller andra behandlingar registreras detta i
            din webbläsare i <code className="bg-gray-100 px-1 rounded text-sm">cookie_consent</code>.
            För att kunna visa att ett giltigt samtycke lämnats och för revisionsändamål för vi även
            en server&#8209;baserad samtyckeslogg.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            Den serverbaserade loggen innehåller:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-3">
            <li>Datum och tidpunkt för samtycket</li>
            <li>Samtyckets version</li>
            <li>Vilka cookie&#8209;kategorier eller behandlingar som godkändes (t.ex. nödvändiga, analys, marknadsföring)</li>
            <li>En anonymiserad klientindikator (t.ex. en hash av användaragent och del av IP) för teknisk felsökning</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Vi lagrar dessa samtyckesposter i upp till 36 månader för att kunna bevisa giltigheten
            av samtycket vid exempelvis tillsyn eller tvist. Om du vill ha en kopia av ditt samtycke
            eller begära komplettering/ändring av informationen kan du kontakta oss via e&#8209;post:{' '}
            <a href="mailto:info@projektgarantiab.se" className="text-primary hover:underline">
              info@projektgarantiab.se
            </a>
            .
          </p>
        </section>

        {/* 5. Återkallande och ändring av samtycke */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Återkallande och ändring av samtycke</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Du kan när som helst ändra eller återkalla ditt samtycke. När du ändrar eller återkallar
            ett samtycke gäller följande:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-3">
            <li>Ändringen träder i kraft omedelbart för framtida behandlingar.</li>
            <li>
              Vi tar bort eller upphör med att köra icke&#8209;nödvändiga skript och tjänster från
              och med ändringen (t.ex. analys eller marknadsföringsverktyg).
            </li>
            <li>
              Eventuella redan genomförda behandlingar baserade på ett tidigare giltigt samtycke
              påverkas inte retroaktivt, men du kan begära radering av tidigare insamlad data genom
              att kontakta oss.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-3">
            Så här ändrar eller återkallar du ditt samtycke:
          </p>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-3">
            <li>
              Klicka på &quot;Hantera cookies&quot; i sidfoten eller i cookie&#8209;bannern på
              webbplatsen för att öppna cookie&#8209;inställningarna och ändra dina val.
            </li>
            <li>
              Du kan också skicka en begäran via e&#8209;post till{' '}
              <a href="mailto:info@projektgarantiab.se" className="text-primary hover:underline">
                info@projektgarantiab.se
              </a>
              . Vi bekräftar mottagandet och genomför ändringarna så snart som möjligt och senast
              inom 30 dagar.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed">
            När du begär borttagning av cookies kommer vi att radera motsvarande cookies från din
            webbläsare och stoppa framtida datainsamling för de berörda kategorierna. Observera att
            vissa funktioner på webbplatsen kan påverkas om nödvändiga cookies tas bort.
          </p>
        </section>

        {/* 6. Personuppgiftsbiträden och överföringar */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Personuppgiftsbiträden och överföringar</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            För att driva och drifta webbplatsen och våra tjänster använder vi externa leverantörer
            (personuppgiftsbiträden) som behandlar personuppgifter för vår räkning. Nedan anges
            exempel på kategorier av biträden och deras syften.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-3">
            <li>
              <strong>E&#8209;post och kommunikation</strong> (t.ex. e&#8209;postleverantör) –
              hanterar utskick och leverans av meddelanden.
            </li>
            <li>
              <strong>Hosting och driftsättning</strong> (t.ex. webbhotell eller molnleverantör) –
              lagrar webbplatsdata och loggar.
            </li>
            <li>
              <strong>Analys och prestanda</strong> (t.ex. Google Analytics) – samlar anonymiserade
              statistikdata om webbplatsanvändning (endast om du godkänner analyscookies).
            </li>
            <li>
              <strong>Karttjänster</strong> (t.ex. Google Maps) – tillhandahåller inbäddade kartor
              när du godkänner kartrelaterade cookies.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            I vissa fall kan dessa leverantörer behandla eller överföra data utanför EU/EES. I
            sådana fall använder vi lämpliga skyddsåtgärder, t.ex. standardavtalsklausuler (SCC)
            eller andra godkända mekanismer för dataöverföring, i enlighet med GDPR kapitel V. Vi
            ingår personuppgiftsbiträdesavtal med samtliga biträden för att säkerställa att dina
            uppgifter hanteras i enlighet med gällande dataskyddslagstiftning.
          </p>
        </section>

        {/* 7. Cookiepolicy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookiepolicy</h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Vad är cookies?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookies är små textfiler som lagras i din webbläsare när du besöker en webbplats. De
            används för att webbplatsen ska fungera korrekt, komma ihåg dina inställningar och
            förbättra din upplevelse.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Vilka cookies använder vi?</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Cookie</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Syfte</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-200">Varaktighet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-mono text-xs">cookie_consent</td>
                  <td className="py-3 px-4 border border-gray-200">Sparar ditt cookiesamtycke</td>
                  <td className="py-3 px-4 border border-gray-200">Nödvändig</td>
                  <td className="py-3 px-4 border border-gray-200">365 dagar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Vi använder för närvarande inga spårnings-, analys- eller marknadsföringscookies.
            Om detta förändras kommer denna policy att uppdateras och du kommer att tillfrågas om
            samtycke på nytt.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Hantera cookies</h3>
          <p className="text-gray-600 leading-relaxed">
            Du kan när som helst ändra eller återkalla ditt cookiesamtycke genom att klicka på{' '}
            <strong>Hantera cookies</strong> i sidfoten på webbplatsen. Du kan även stänga av
            cookies i din webbläsares inställningar, men det kan påverka webbplatsens funktionalitet.
          </p>
        </section>

        {/* 8. Säkerhet */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Säkerhet</h2>
          <p className="text-gray-600 leading-relaxed">
            Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina
            personuppgifter mot obehörig åtkomst, förlust eller förstörelse i enlighet med GDPR
            artikel 32.
          </p>
        </section>

        {/* 9. Ändringar */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Ändringar i denna policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Vi kan uppdatera denna policy vid behov. Senaste versionen publiceras alltid på denna
            sida med uppdateringsdatum angivet längst upp. Vid väsentliga förändringar meddelas du
            via cookiebanderollen på webbplatsen.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Kontakta oss</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Har du frågor om hur vi hanterar dina personuppgifter är du välkommen att kontakta oss:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>
              E-post:{' '}
              <a href="mailto:info@projektgarantiab.se" className="text-primary hover:underline">
                info@projektgarantiab.se
              </a>
            </li>
            <li>
              Telefon:{' '}
              <a href="tel:+46707401383" className="text-primary hover:underline">
                +46 70 740 1383
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
