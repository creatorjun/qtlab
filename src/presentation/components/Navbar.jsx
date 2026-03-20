// src/presentation/components/Navbar.jsx

import { useState, useEffect } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(NAV_ITEMS.map(n => n.id))

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold tracking-tight text-sm">Han Junhee</a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm transition-colors ${active === id ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="text-sm text-gray-400 hover:text-white" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
