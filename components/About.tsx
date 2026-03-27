'use client'

import { motion } from "framer-motion"
import { FaStar, FaHandshake, FaAward } from 'react-icons/fa'

const features = [
  {
    icon: FaStar,
    title: 'Kvalitet',
    description:
      'Vi använder endast material av högsta standard och följer branschens krav.',
  },
  {
    icon: FaHandshake,
    title: 'Pålitlighet',
    description:
      'Vi håller alltid det vi lovar, både vad gäller tidsplaner, budget och resultat.',
  },
  {
    icon: FaAward,
    title: 'Erfarenhet',
    description:
      'Med över 10 års erfarenhet hanterar vi alla typer av projekt smidigt och professionellt.',
  },
]

export default function About() {
  const smoothEase = [0.22, 1, 0.36, 1] as const

  return (
    <section id="om-oss" className="bg-white py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: smoothEase }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Om Projektgaranti Stockholm AB
          </h2>

          <div className="mx-auto mb-6 h-1 w-16 bg-primary" />

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
          Projektgaranti Stockholm AB är ett etablerat byggföretag i Stockholmsområdet med lång erfarenhet av renovering och ombyggnation. Våra skickliga hantverkare säkerställer kvalitetsarbete med garanti och stödjer dig hela vägen – från planering till färdigt projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.992 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16, mass: 0.8 }}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}