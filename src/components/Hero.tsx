import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Parallax bg */}
      <motion.div style={{ position: 'absolute', inset: '-10%', y: imageY }}>
        <img src="/images/hero-bg.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      </motion.div>

      {/* Layered overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, rgba(10,8,5,0.88) 0%, rgba(10,8,5,0.55) 50%, rgba(10,8,5,0.2) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.8) 0%, transparent 45%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,8,5,0.6) 0%, transparent 20%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 60%, rgba(194,168,122,0.05) 0%, transparent 60%)' }} />

      {/* Content */}
      <motion.div className="rsp-hero" style={{ position: 'relative', zIndex: 10, padding: '0 80px', maxWidth: 960, y: textY, opacity }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}
        >
          <div style={{ width: 40, height: 1, background: '#C2A87A' }} />
          <span className="label-sm" style={{ color: 'rgba(194,168,122,0.7)' }}>Sydney · Est. 2020</span>
        </motion.div>

        {/* Headline line 1 */}
        <div style={{ overflow: 'hidden', marginBottom: 4 }}>
          <motion.h1
            initial={{ y: '105%' }} animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(60px, 7.5vw, 108px)', fontWeight: 300, color: '#EDE8DF', lineHeight: 1.0, letterSpacing: '-0.01em' }}
          >Built Different.
          </motion.h1>
        </div>
        {/* Headline line 2 */}
        <div style={{ overflow: 'hidden', marginBottom: 52 }}>
          <motion.h1
            initial={{ y: '105%' }} animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(60px, 7.5vw, 108px)', fontWeight: 300, color: '#C2A87A', lineHeight: 1.0, letterSpacing: '-0.01em', fontStyle: 'italic' }}
          >Finished Flawlessly.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: 'rgba(237,232,223,0.55)', maxWidth: 500, fontWeight: 300, lineHeight: 1.85, marginBottom: 52, letterSpacing: '0.01em' }}
        >
          Premium cladding, composite decking and architectural builds. Crafted with precision for Sydney's most discerning homes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a href="#quote" className="btn-gold">Request a Quote</a>
          <a href="#projects" className="btn-outline-gold">View Projects</a>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 56, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
      >
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(194,168,122,0.5))' }} />
      </motion.div>
    </section>
  )
}
