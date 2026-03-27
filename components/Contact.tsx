'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
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
      <a href="tel:+46707401383" className="font-semibold text-gray-800 hover:text-primary">
        +46 70 740 1383
      </a>
    ),
  },
  {
    icon: FaEnvelope,
    title: 'E-post',
    content: (
      <a href="mailto:info@projektgarantiab.se" className="font-semibold text-gray-800 hover:text-primary break-all">
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
        setErrorMsg(data?.errors?.[0]?.message || data?.error || 'Något gick fel.')
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
    } catch {
      setStatus('error')
      setErrorMsg('Nätverksfel. Försök igen.')
    }
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <section id="kontakt" className="bg-white py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }} // ✅ FIX
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        {/* HEADER */}
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Kontakta oss
          </h2>

          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto max-w-2xl text-base text-secondary sm:text-lg">
            Ta kontakt för en kostnadsfri konsultation och offert.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-800">
              Kontaktinformation
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} // ✅ FIX
                    className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                      <Icon size={24} />
                    </div>

                    <h4 className="mb-2 text-lg font-bold text-gray-800">
                      {item.title}
                    </h4>

                    <div className="text-secondary">
                      {item.content}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // ✅ FIX
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-7"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              Skicka ett meddelande
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="namn" required placeholder="Namn"
                value={formData.namn} onChange={handleChange}
                className="w-full border p-3 rounded-lg" />

              <input type="email" name="email" required placeholder="E-post"
                value={formData.email} onChange={handleChange}
                className="w-full border p-3 rounded-lg" />

              <textarea name="meddelande" required placeholder="Meddelande"
                value={formData.meddelande} onChange={handleChange}
                rows={5}
                className="w-full border p-3 rounded-lg" />

              <button className="w-full bg-primary text-white py-3 rounded-lg">
                {status === 'sending' ? 'Skickar...' : 'Skicka'}
              </button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}