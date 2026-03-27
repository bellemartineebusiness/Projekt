'use client'

import { motion } from "framer-motion"
import {
  FaCheckCircle,
  FaPercentage,
  FaHardHat,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const reasons = [
  {
    icon: FaCheckCircle,
    title: 'Kvalitetsgaranti',
    description:
      'Vi står för vårt arbete. Om du inte är nöjd åtgärdar vi det.',
  },
  {
    icon: FaPercentage,
    title: 'ROT-avdrag',
    description:
      'Spara upp till 50 % på arbetskostnaden.',
  },
  {
    icon: FaHardHat,
    title: 'Erfarna hantverkare',
    description:
      'Över 10 års erfarenhet ger trygghet i varje projekt.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Lokalt i Stockholm',
    description:
      'Vi finns nära dig och kan snabbt vara på plats.',
  },
]

export default function WhyChooseUs() {
  const smoothEase = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: smoothEase }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Varför välja oss?
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto mb-6" />

          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Vi sätter kunden i centrum och levererar resultat som överträffar förväntningarna.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.992 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16, mass: 0.8 }}
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md md:p-7"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {reason.title}
                </h3>

                <p className="text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}