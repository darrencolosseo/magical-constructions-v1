import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

const items = [
  'Every job approached like it\'s our own home',
  'Real project photos — what you see is what you get',
  'Sydney-based team, available and accountable',
  'From concept to completion — we manage it all',
  'Transparent pricing, no hidden costs, ever',
  'Workmanship warranty on every project',
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const imgRef = useRef(null)
  const imgInView = useInView(imgRef, { once: true, margin: '-60px' })

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#0A0805' }}>
      {/* Left image with parallax feel */}
      <motion.div ref={imgRef}
        initial={{ opacity: 0, scale: 1.04 }} animate={imgInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ minHeight: 680, overflow: 'hidden', position: 'relative' }}
      >
        <img src="/images/why-us.jpg" alt="Magical Constructions quality" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 70%, #0A0805 100%)' }} />
      </motion.div>

      {/* Right content */}
      <div ref={ref} style={{ padding: '100px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid rgba(194,168,122,0.07)' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="gold-line label-sm" style={{ marginBottom: 28 }}>
          The Magical Difference
        </motion.div>
        <div style={{ overflow: 'hidden', marginBottom: 48 }}>
          <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4vw, 58px)', fontWeight: 300, color: '#EDE8DF', lineHeight: 1.1 }}>
            Premium Finishes.<br /><em style={{ color: '#C2A87A' }}>No Shortcuts.</em>
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 52 }}>
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
            >
              <Check size={14} strokeWidth={1.5} color="#C2A87A" style={{ marginTop: 5, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(237,232,223,0.65)', fontWeight: 300, lineHeight: 1.65 }}>{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }}>
          <a href="#quote" className="btn-gold" style={{ alignSelf: 'flex-start', display: 'inline-block' }}>Start Your Project</a>
        </motion.div>
      </div>
    </section>
  )
}
