'use client'

import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)

    if (el) {
      const navHeight = 92
      const elementTop = el.getBoundingClientRect().top + window.scrollY
      const offsetTop = elementTop - navHeight

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="hem"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-[60px]"
      style={{
        background:
          'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a1a2e 100%)',
      }}
    >
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-6 sm:mb-8">
          <Image
            src="/lind.png"
            alt="Projektgaranti Stockholm AB"
            width={300}
            height={200}
            priority
            className="mx-auto w-52 sm:w-72 md:w-96"
          />
        </div>

        <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Professionell renovering i{' '}
          <span className="text-primary">Stockholmsområdet</span>
        </h1>

        <p className="mb-3 text-lg text-gray-300 sm:text-xl md:text-2xl">
          Med garanti och ROT-avdrag
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-base text-gray-400 sm:mb-10 sm:text-lg">
          Erfarna hantverkare för badrum, kök och totalrenovering. Vi levererar
          kvalitet du kan lita på.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => scrollToSection('kontakt')}
            className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-primary-dark sm:text-lg"
          >
            Kontakta oss
          </button>

          <button
            onClick={() => scrollToSection('tjanster')}
            className="rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-gray-900 sm:text-lg"
          >
            Våra tjänster
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('om-oss')}
        className="group absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center text-white opacity-80 transition-all duration-300 hover:opacity-100"
        aria-label="Scroll down"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]">
          <div className="flex flex-col items-center -space-y-1 animate-bounce">
            <FaChevronDown size={14} className="opacity-60" />
            <FaChevronDown size={16} />
          </div>
        </div>
      </button>
    </section>
  )
}