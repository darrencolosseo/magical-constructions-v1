import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: "The attention to detail was extraordinary. From the first consultation to the final walkthrough, the team were professional, communicative and genuinely proud of their work. Our deck is the envy of the neighbourhood.",
    name: 'Sarah M.',
    location: 'Mosman, NSW',
    project: 'Composite Decking & Alfresco',
  },
  {
    quote: "We had a complex cladding project that three other builders turned down. Magical Constructions took it on, managed the council requirements, and delivered a result that exceeded our expectations.",
    name: 'James & Cath R.',
    location: 'Northwood, NSW',
    project: 'Aluminium Facade Cladding',
  },
  {
    quote: "Responsive, honest, and skilled. They completed our full renovation on time and on budget — something we didn't think was possible. We'll use them for every future project.",
    name: 'Michael T.',
    location: 'Lane Cove, NSW',
    project: 'Interior Renovation & Deck',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  const t = testimonials[index]

  return (
    <section ref={ref} style={{ padding: '140px 80px', background: '#080604', borderTop: '1px solid rgba(194,168,122,0.07)' }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="gold-line label-sm" style={{ marginBottom: 80 }}>
          Client Testimonials
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={index}
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 120, lineHeight: 0.7, color: 'rgba(194,168,122,0.2)', marginBottom: 40, userSelect: 'none' }}>"</div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(26px, 3vw, 42px)',
              fontWeight: 300, fontStyle: 'italic',
              color: '#EDE8DF', lineHeight: 1.5,
              letterSpacing: '-0.01em', marginBottom: 60,
            }}>{t.quote}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 400, color: '#EDE8DF', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>{t.name}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(237,232,223,0.35)', fontWeight: 300 }}>{t.location} · {t.project}</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#C2A87A', fontSize: 14 }}>★</span>)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', gap: 10, marginTop: 64 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} style={{
              width: i === index ? 32 : 6, height: 6,
              background: i === index ? '#C2A87A' : 'rgba(194,168,122,0.2)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}
