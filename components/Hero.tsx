'use client'

import { motion } from "framer-motion"
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const smoothEase = [0.22, 1, 0.36, 1] as const

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)

    if (el) {
      const navHeight = window.innerWidth < 640 ? 74 : 92
      const elementTop = el.getBoundingClientRect().top + window.scrollY
      const offsetTop = elementTop - navHeight

      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  // 🔥 SAMMA ANIMATION-STYLE SOM ABOUT
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.12,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 64, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 82, damping: 16, mass: 0.75 },
    },
  }

  return (
    <section
      id="hem"
      className="relative flex min-h-svh items-center justify-center overflow-hidden pt-20 sm:pt-24"
      style={{
        background:
          'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a1a2e 100%)',
      }}
    >
      {/* 🔥 Bakgrundsmönster */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(178, 58, 72, 0.1) 40px,
            rgba(178, 58, 72, 0.1) 80px
          )`,
        }}
      />

      {/* 🔥 CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6"
      >
        <motion.div variants={item} className="-mt-6 mb-6 sm:-mt-7 sm:mb-8">
          <Image
            src="/lind.png"
            alt="Projektgaranti Stockholm AB"
            width={300}
            height={200}
            priority
            className="mx-auto w-52 sm:w-72 md:w-96"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-5 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Professionell renovering i{' '}
          <span className="text-primary">Stockholmsområdet</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-3 text-lg text-gray-300 sm:text-xl md:text-2xl"
        >
         Med garanti och ROT-avdrag
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mb-8 max-w-2xl text-base text-gray-400 sm:mb-10 sm:text-lg"
        >
          Vi erbjuder erfarna hantverkare för badrum, kök och totalrenoveringar, och levererar alltid kvalitet du kan lita på.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.button
            onClick={() => scrollToSection('kontakt')}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 360, damping: 22 }}
            className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-250 ease-out hover:-translate-y-px hover:bg-primary-dark active:scale-[0.99] sm:w-auto sm:text-lg"
          >
            Kontakta oss
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('tjanster')}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 360, damping: 22 }}
            className="w-full rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-250 ease-out hover:-translate-y-px hover:bg-white hover:text-gray-900 active:scale-[0.99] sm:w-auto sm:text-lg"
          >
            Våra tjänster
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🔥 PIL */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: smoothEase }}
        onClick={() => scrollToSection('om-oss')}
        className="group absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center justify-center text-white opacity-80 transition-all duration-300 hover:opacity-100 sm:flex"
        whileHover={{ y: 2 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Scroll down"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]">
          <div className="flex flex-col items-center -space-y-1 animate-bounce">
            <FaChevronDown size={14} className="opacity-60" />
            <FaChevronDown size={16} />
          </div>
        </div>
      </motion.button>
    </section>
  )
}