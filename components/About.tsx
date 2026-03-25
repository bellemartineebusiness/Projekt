'use client'

import { motion } from "framer-motion"
import { FaStar, FaHandshake, FaAward } from 'react-icons/fa'

const features = [
  {
    icon: FaStar,
    title: 'Kvalitet',
    description:
      'Vi använder enbart material av högsta kvalitet och lever upp till branschens krav.',
  },
  {
    icon: FaHandshake,
    title: 'Pålitlighet',
    description:
      'Vi håller det vi lovar – tidsplaner, budgetar och kvalitetsstandarder.',
  },
  {
    icon: FaAward,
    title: 'Erfarenhet',
    description:
      'Över 10 år i branschen ger oss erfarenheten att hantera alla typer av projekt.',
  },
]

export default function About() {
  return (
    <section id="om-oss" className="bg-white py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }} // ✅ tillbaka som innan
        viewport={{ once: true }} // ✅ enda fixen
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Om Projektgaranti Stockholm AB
          </h2>

          <div className="mx-auto mb-6 h-1 w-16 bg-primary" />

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
            Vi är ett etablerat byggföretag i Stockholmsområdet med lång erfarenhet av
            renovering och ombyggnation. Våra erfarna hantverkare levererar kvalitetsarbete
            med garanti. Vi hjälper dig från planering till färdigt projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 100, scale: 0.8 }} // ✅ tillbaka som innan
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }} // ✅ tillbaka
                viewport={{ once: true }} // ✅ fix
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8"
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