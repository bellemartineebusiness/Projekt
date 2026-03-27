'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '#hem', label: 'Hem' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hem')

  const getNavHeight = () => (window.innerWidth < 640 ? 74 : 92)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = ['hem', 'om-oss', 'tjanster', 'kontakt']

      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    const id = href.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
      const navHeight = getNavHeight()
      const elementTop = el.getBoundingClientRect().top + window.scrollY
      const offsetTop = elementTop - navHeight

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="flex h-18.5 items-center justify-between px-4 sm:h-23 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Projektgaranti Stockholm AB – Till startsidan"
        >
          <div className="relative h-14.5 w-48.75 overflow-visible sm:h-22.5 sm:w-85 lg:w-105">
            <Image
              src="/lind.png"
              alt="Projektgaranti Stockholm AB"
              fill
              priority
              className="object-contain object-left scale-[1]"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-[16px] font-semibold transition-colors duration-200 hover:text-primary ${
                  activeSection === id ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    activeSection === id ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            )
          })}

          <button
            onClick={() => handleNavClick('#kontakt')}
            className="rounded-xl bg-primary px-6 py-3 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            Få offert
          </button>
        </div>

        <button
          className="rounded-md p-2 text-gray-700 transition-colors hover:text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100svh-74px)] overflow-y-auto border-t border-gray-100 bg-white shadow-lg md:hidden sm:max-h-[calc(100svh-92px)]">
          <div className="space-y-2 px-4 py-4">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full rounded-xl px-4 py-3 text-left font-semibold transition-colors duration-200 hover:bg-gray-50 hover:text-primary ${
                    activeSection === id ? 'bg-red-50 text-primary' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}

            <button
              onClick={() => handleNavClick('#kontakt')}
              className="mt-2 block w-full rounded-xl bg-primary px-4 py-3 text-center font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Få offert
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}