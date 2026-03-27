import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background */}
      <img
        src="/images/hero-bg.jpg"
        alt="Magical Constructions"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.65) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(201,164,106,0.07) 0%, transparent 55%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ borderLeft: '2px solid #C9A46A', paddingLeft: 12, marginBottom: 32, display: 'inline-block', textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A46A', fontWeight: 300 }}>
              Sydney · Est. 2020
            </span>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 300,
            color: '#F2EDE6',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Built Different.<br />Finished Flawlessly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: '#8A8278',
            maxWidth: 560,
            margin: '0 auto 40px',
            fontWeight: 300,
            lineHeight: 1.75,
          }}
        >
          Premium cladding, composite decking & architectural builds — crafted for Sydney's finest homes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#quote"
            style={{
              background: 'linear-gradient(135deg, #C2A87A 0%, #A8895A 100%)',
              color: '#0D0B09',
              padding: '14px 32px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 0,
              fontWeight: 300,
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,164,106,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            Request a Quote
          </a>
          <a
            href="#projects"
            style={{
              border: '1px solid rgba(201,164,106,0.6)',
              color: 'rgba(201,164,106,0.9)',
              background: 'transparent',
              padding: '14px 32px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 0,
              fontWeight: 300,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A46A'; e.currentTarget.style.background = 'rgba(201,164,106,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,164,106,0.6)'; e.currentTarget.style.background = 'transparent' }}
          >
            View Projects ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div style={{ width: 1, height: 32, background: 'rgba(201,164,106,0.5)' }} />
        <ChevronDown size={16} color="rgba(201,164,106,0.5)" strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
