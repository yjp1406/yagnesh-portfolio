import { Link } from 'react-router-dom'
import { useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 transform">
      <nav className="rounded-xl bg-[#0d1224]/20 backdrop-blur-md shadow-md border border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold text-white">
            <span className='text-lg uppercase'>Yagnesh Patel</span>
            {/* <span className="text-sm bg-gradient-to-r from-pink-500 via-indigo-400 to-teal-400 bg-clip-text text-transparent">.dev</span> */}
          </Link>

          <ul className="hidden md:flex md:items-center md:gap-6">
            {sections.map(s => (
              <li key={s.id}>
                <a
                  href={`/#${s.id}`}
                  className="text-sm font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-pink-500"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-pink-500"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* desktop only placeholder for action buttons if needed */}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-4 space-y-2">
            {sections.map(s => (
              <a
                key={s.id}
                href={`/#${s.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-white/90 hover:text-pink-500"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}


