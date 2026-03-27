'use client'

import { motion } from "framer-motion"
import {
  FaBath,
  FaUtensils,
  FaHome,
  FaPaintRoller,
  FaLayerGroup,
  FaClipboardList,
} from 'react-icons/fa'

const services = [
  {
    icon: FaBath,
    title: 'Badrumsrenovering',
    description: 'Totalrenovering med moderna lösningar och hög standard.',
  },
  {
    icon: FaUtensils,
    title: 'Köksrenovering',
    description: 'Skapa ditt drömkök med smarta och funktionella lösningar.',
  },
  {
    icon: FaHome,
    title: 'Totalrenovering',
    description: 'Helrenovering av lägenheter och hus från golv till tak.',
  },
  {
    icon: FaPaintRoller,
    title: 'Målning',
    description: 'Professionell invändig och utvändig målning.',
  },
  {
    icon: FaLayerGroup,
    title: 'Golvläggning',
    description: 'Trä, klinker, vinyl – vi lägger alla typer av golv med precision.',
  },
  {
    icon: FaClipboardList,
    title: 'ROT avdrag & Projektledning',
    description: 'Vi sköter hela projektet och hjälper dig med ROT-avdrag.',
  },
]

export default function Services() {
  return (
    <section id="tjanster" className="bg-gray-50 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }} // ✅ FIX
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Våra tjänster
          </h2>

          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto max-w-2xl text-base text-secondary sm:text-lg">
            Vi erbjuder ett brett utbud av renoveringstjänster för både privatpersoner och företag
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }} // ✅ FIX
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-7"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-secondary">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}