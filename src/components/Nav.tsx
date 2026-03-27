import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Services', 'Projects', 'Quote']

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(13,11,9,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,164,106,0.12)' : '1px solid transparent',
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: '#C2A87A', fontWeight: 300 }}>MC</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9A9088', fontWeight: 300 }}>Magical Constructions</span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="hidden md:flex">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.12em', color: '#9A9088', textDecoration: 'none', transition: 'color 0.3s ease', fontWeight: 300 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#EDE8E0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A9088')}
            >
              {link}
            </a>
          ))}
          <a
            href="#quote"
            style={{
              border: '1px solid #C9A46A',
              background: 'transparent',
              color: '#C9A46A',
              padding: '8px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
              fontWeight: 300,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,164,106,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Get a Quote
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          style={{ background: 'none', border: 'none', color: '#C9A46A', cursor: 'pointer', padding: 4 }}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(13,11,9,0.97)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 40,
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: 24, right: 48, background: 'none', border: 'none', color: '#C9A46A', cursor: 'pointer' }}
            >
              <X size={22} strokeWidth={1.5} />
            </button>
            {[...links, 'Contact'].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 36,
                  color: '#F2EDE6',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
