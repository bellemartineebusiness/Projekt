'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { getStoredConsent } from '@/components/CookieBanner'

function useConsentAccepted() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const check = () => {
      const stored = getStoredConsent()
      setAccepted(stored?.status === 'accepted')
    }

    check()
    window.addEventListener('cookieConsentChanged', check)

    return () => window.removeEventListener('cookieConsentChanged', check)
  }, [])

  return accepted
}

const contactItems = [
  {
    icon: FaUser,
    title: 'Kontaktperson',
    content: (
      <>
        <p className="font-semibold text-gray-800">Joacim Lind</p>
        <p className="text-secondary">Ansvarig Fastighet</p>
      </>
    ),
  },
  {
    icon: FaPhone,
    title: 'Telefon',
    content: (
      <a
        href="tel:+46707401383"
        className="font-semibold text-gray-800 transition-colors hover:text-primary"
      >
        +46 70 740 1383
      </a>
    ),
  },
  {
    icon: FaEnvelope,
    title: 'E-post',
    content: (
      <a
        href="mailto:info@projektgarantiab.se"
        className="font-semibold text-gray-800 transition-colors hover:text-primary break-all"
      >
        info@projektgarantiab.se
      </a>
    ),
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Adress',
    content: (
      <>
        <p className="font-semibold text-gray-800">Ekerövägen 51</p>
        <p className="font-semibold text-gray-800">178 37 Ekerö</p>
      </>
    ),
  },
]

type FormDataType = {
  namn: string
  email: string
  telefon: string
  meddelande: string
  gdprConsent: boolean
}

export default function Contact() {
  const [formData, setFormData] = useState<FormDataType>({
    namn: '',
    email: '',
    telefon: '',
    meddelande: '',
    gdprConsent: false,
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const consentAccepted = useConsentAccepted()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
  const res = await fetch('https://formspree.io/f/blabla', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: formData.namn,
      email: formData.email,
      phone: formData.telefon,
      message: formData.meddelande,
      gdprConsent: formData.gdprConsent,
    }),
  })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(
          data?.errors?.[0]?.message ||
            data?.error ||
            'Något gick fel. Försök igen.'
        )
        return
      }

      setStatus('success')
      setFormData({
        namn: '',
        email: '',
        telefon: '',
        meddelande: '',
        gdprConsent: false,
      })

      setTimeout(() => setStatus('idle'), 8000)
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus('error')
      setErrorMsg('Nätverksfel. Kontrollera din anslutning och försök igen.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  return (
    <section id="kontakt" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Kontakta oss
          </h2>

          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto max-w-2xl text-base text-secondary sm:text-lg">
            Ta kontakt för en kostnadsfri konsultation och offert på ditt projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-800">
              Kontaktinformation
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                      <Icon size={24} />
                    </div>

                    <h4 className="mb-2 text-lg font-bold text-gray-800">
                      {item.title}
                    </h4>

                    <div className="leading-relaxed text-secondary">
                      {item.content}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {consentAccepted ? (
                  <iframe
                    title="Projektgaranti Stockholm AB karta"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.123456!2d17.814!3d59.278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7da4a8b0c0ab%3A0x1!2sEker%C3%B6v%C3%A4gen+51%2C+178+37+Eker%C3%B6%2C+Sverige!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                      <FaMapMarkerAlt size={22} />
                    </div>

                    <p className="mb-3 text-sm text-gray-600">
                      Kartan laddas inte utan ditt samtycke till cookies.
                    </p>

                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                      className="text-sm text-primary underline transition-colors hover:text-primary-dark"
                    >
                      Hantera cookieinställningar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-800">
              Skicka ett meddelande
            </h3>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-7">
              {status === 'success' && (
                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 font-medium text-green-700">
                  ✓ Tack! Ditt meddelande har skickats. Vi återkommer inom kort.
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
                  ✗ {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="namn"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Namn <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="namn"
                    name="namn"
                    required
                    value={formData.namn}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ditt namn"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    E-post <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="din@email.se"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+46 70 000 0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="meddelande"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Meddelande <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="meddelande"
                    name="meddelande"
                    required
                    rows={5}
                    value={formData.meddelande}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Berätta om ditt projekt..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    required
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 flex-shrink-0 accent-primary"
                  />

                  <label
                    htmlFor="gdprConsent"
                    className="text-sm leading-relaxed text-gray-600"
                  >
                    Jag godkänner att Projektgaranti Stockholm AB behandlar mina
                    personuppgifter för att besvara min förfrågan. Läs mer i vår{' '}
                    <Link
                      href="/integritetspolicy"
                      className="text-primary underline transition-colors hover:text-primary-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      integritetspolicy
                    </Link>
                    . <span className="text-primary">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}