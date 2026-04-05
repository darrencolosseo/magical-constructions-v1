import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Quote', href: '#quote' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '16px 56px' : '28px 56px',
          background: scrolled ? 'rgba(10,8,5,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(194,168,122,0.08)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/images/logo.jpg" alt="Magical Constructions" style={{ height: 40, width: 40, objectFit: 'contain', borderRadius: 4 }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 300, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(237,232,223,0.5)' }}>Magical Constructions</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 44 }} className="desktop-nav">
          {links.map(link => (
            <a key={link.label} href={link.href} style={{ position: 'relative', fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,232,223,0.6)', fontWeight: 300, paddingBottom: 2, transition: 'color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#EDE8DF'; (e.currentTarget.querySelector('.nl') as HTMLElement).style.transform = 'scaleX(1)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(237,232,223,0.6)'; (e.currentTarget.querySelector('.nl') as HTMLElement).style.transform = 'scaleX(0)' }}
            >
              {link.label}
              <span className="nl" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: '#C2A87A', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s cubic-bezier(0.76,0,0.24,1)' }} />
            </a>
          ))}
          <a href="#quote" className="btn-gold" style={{ padding: '11px 26px' }}>Get a Quote</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }} className="hamburger" aria-label="Menu">
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} style={{ display: 'block', width: 22, height: 1, background: '#C2A87A', transformOrigin: 'center' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ display: 'block', width: 22, height: 1, background: '#C2A87A' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} style={{ display: 'block', width: 22, height: 1, background: '#C2A87A', transformOrigin: 'center' }} />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'fixed', inset: 0, background: '#0A0805', zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 48 }}
          >
            {links.map((link, i) => (
              <motion.a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: '#EDE8DF', letterSpacing: '0.02em' }}
              >{link.label}</motion.a>
            ))}
            <motion.a href="#quote" onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="btn-gold"
            >Get a Quote</motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .hamburger { display: flex !important; } }
      `}</style>
    </>
  )
}
