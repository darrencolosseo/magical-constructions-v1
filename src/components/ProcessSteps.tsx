import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', title: 'Free Consultation', desc: 'We visit your site, understand your vision and work through your budget together. No obligations, no fees.' },
  { num: '02', title: 'Detailed Quote', desc: 'A comprehensive, itemised quote delivered within 48 hours. No hidden costs, no surprises.' },
  { num: '03', title: 'Precision Build', desc: 'Our experienced tradespeople execute with meticulous attention to detail and daily updates.' },
  { num: '04', title: 'Final Handover', desc: 'A thorough walkthrough, complete documentation, and ongoing support after completion.' },
]

export default function ProcessSteps() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="rsp-section" style={{ padding: '140px 80px', background: '#0D0B08', borderTop: '1px solid rgba(194,168,122,0.06)' }}>
      <div ref={ref} style={{ marginBottom: 88 }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="gold-line label-sm" style={{ marginBottom: 28 }}>
          How We Work
        </motion.div>
        <div style={{ overflow: 'hidden' }}>
          <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5vw, 72px)', fontWeight: 300, color: '#EDE8DF', lineHeight: 1.05 }}>
            From first call<br /><em style={{ color: '#C2A87A' }}>to final finish.</em>
          </motion.h2>
        </div>
      </div>

      <div className="rsp-process" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
        {/* Connecting gold line — runs from center of circle 01 to center of circle 04 */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rsp-process-line" style={{ position: 'absolute', top: 28, left: 28, right: 'calc(25% - 28px)', height: 1, background: 'linear-gradient(to right, #C2A87A, rgba(194,168,122,0.3))', transformOrigin: 'left', zIndex: 0 }}
        />

        {steps.map((step, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Number circle — left-aligned to match text below */}
            <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid rgba(194,168,122,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 44, background: '#0D0B08', position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 400, color: '#C2A87A' }}>{step.num}</span>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: '#EDE8DF', marginBottom: 18, lineHeight: 1.2, paddingRight: i < 3 ? 32 : 0 }}>{step.title}</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(237,232,223,0.4)', fontWeight: 300, lineHeight: 1.8, paddingRight: i < 3 ? 32 : 0 }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
