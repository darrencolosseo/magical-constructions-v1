import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "The composite deck they built for our home is extraordinary. Neighbours stop us constantly to ask about it.",
    name: "James D.",
    location: "Harrington Park",
  },
  {
    quote: "Professional, precise and genuinely proud of their craft. Couldn't recommend more highly.",
    name: "Sarah M.",
    location: "Northwood",
  },
  {
    quote: "They transformed our outdoor space completely. The alfresco kitchen is better than we ever imagined.",
    name: "Michael T.",
    location: "Baulkham Hills",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section
      style={{ background: '#0D0B09', borderTop: '1px solid rgba(201,164,106,0.1)', padding: '112px 48px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="label-caps" style={{ textAlign: 'center', marginBottom: 48 }}>Testimonials</div>
      <div style={{ maxWidth: 768, margin: '0 auto', textAlign: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 120,
              lineHeight: 0.8,
              color: 'rgba(201,164,106,0.18)',
              display: 'block',
              marginBottom: 16,
            }}>"</span>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#F2EDE6',
            }}>
              {testimonials[current].quote}
            </p>
            <div style={{ width: 48, height: 1, background: '#C9A46A', margin: '24px auto' }} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A46A', fontWeight: 300 }}>
              {testimonials[current].name}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#5A5248', marginTop: 4, fontWeight: 300 }}>
              {testimonials[current].location}
            </div>
            <div style={{ letterSpacing: 3, color: '#C9A46A', marginTop: 12, fontSize: 14 }}>★★★★★</div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 40 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                border: '1px solid rgba(201,164,106,0.4)',
                background: i === current ? '#C9A46A' : 'transparent',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
