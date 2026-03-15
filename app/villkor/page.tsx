import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Villkor – Projektgaranti Stockholm AB',
  description:
    'Läs om villkoren för användning av Projektgaranti Stockholm ABs webbplats och tjänster.',
}

export default function VillkorPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold">Villkor för webbplats och tjänster</h1>
          <p className="text-gray-400 mt-2 text-sm">Senast uppdaterad: mars 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 prose prose-gray max-w-none">

        {/* 1. Företagsinformation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Företagsinformation</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Denna webbplats drivs av:
          </p>
          <address className="not-italic bg-gray-50 rounded-xl p-5 text-gray-700 text-sm leading-loose border border-gray-200">
            <strong>Projektgaranti Stockholm AB</strong><br />
            {/* TODO: Ersätt 559XXXXX-XXXX med faktiskt organisationsnummer innan publicering */}
            Organisationsnummer: 556717-4395<br />
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

        {/* 2. Webbplatsens syfte */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Webbplatsens syfte</h2>
          <p className="text-gray-600 leading-relaxed">
            Webbplatsen är en informations- och kontaktkanal för Projektgaranti Stockholm AB.
            Besökare kan läsa om våra renoveringstjänster och skicka in förfrågningar om offert via
            kontaktformuläret. Inga tjänster köps eller betalas direkt via webbplatsen.
          </p>
        </section>

        {/* 3. Användning av webbplatsen */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Användning av webbplatsen</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Du förbinder dig att använda webbplatsen på ett lagligt och korrekt sätt. Det är inte
            tillåtet att:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>använda webbplatsen för att sprida skadlig kod, spam eller vilseledande information</li>
            <li>försöka komma åt system eller data utan behörighet</li>
            <li>kopiera, publicera eller distribuera webbplatsens innehåll utan skriftligt tillstånd</li>
          </ul>
        </section>

        {/* 4. Offert och avtalsprocess */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Offert och avtalsprocess</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Att skicka in en förfrågan via kontaktformuläret innebär inte att ett bindande avtal
            ingås. Ett avtal uppstår först när båda parter skriftligen har accepterat en offert.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Alla priser i offerter anges exklusive moms om inget annat anges. ROT-avdrag hanteras
            enligt Skatteverkets vid var tid gällande regler.
          </p>
        </section>

        {/* 5. Immateriella rättigheter */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Immateriella rättigheter</h2>
          <p className="text-gray-600 leading-relaxed">
            Allt innehåll på webbplatsen – texter, bilder, logotyper och grafik – ägs av
            Projektgaranti Stockholm AB eller dess licensgivare och skyddas av upphovsrätt. Innehållet
            får inte reproduceras, distribueras eller användas kommersiellt utan skriftligt tillstånd.
          </p>
        </section>

        {/* 6. Ansvarsbegränsning */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Ansvarsbegränsning</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Webbplatsens innehåll tillhandahålls i informationssyfte. Projektgaranti Stockholm AB
            ansvarar inte för:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>eventuella fel eller brister i webbplatsens information</li>
            <li>avbrott eller tekniska fel som gör webbplatsen otillgänglig</li>
            <li>innehåll på externa webbplatser som länkas till från webbplatsen</li>
          </ul>
        </section>

        {/* 7. Tillämplig lag och tvistlösning */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Tillämplig lag och tvistlösning</h2>
          <p className="text-gray-600 leading-relaxed">
            Dessa villkor regleras av svensk rätt. Tvister som uppstår i samband med webbplatsen
            eller våra tjänster ska i första hand lösas genom förhandling. Om förhandling inte leder
            till lösning avgörs tvisten av allmän domstol i Sverige. Konsumenter kan även vända sig
            till{' '}
            <a
              href="https://www.arn.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Allmänna reklamationsnämnden (ARN)
            </a>
            .
          </p>
        </section>

        {/* 8. Ändringar av villkoren */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Ändringar av villkoren</h2>
          <p className="text-gray-600 leading-relaxed">
            Vi förbehåller oss rätten att uppdatera dessa villkor vid behov. Den senaste versionen
            publiceras alltid på denna sida med uppdateringsdatum angivet längst upp. Fortsatt
            användning av webbplatsen efter en uppdatering innebär att du accepterar de ändrade
            villkoren.
          </p>
        </section>

        {/* 9. Personuppgifter och cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Personuppgifter och cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Hur vi hanterar personuppgifter och cookies beskrivs i vår{' '}
            <Link href="/integritetspolicy" className="text-primary hover:underline">
              Integritetspolicy &amp; Cookiepolicy
            </Link>
            .
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Kontakta oss</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Har du frågor om dessa villkor är du välkommen att kontakta oss:
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
