import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const items = [
  "Every job approached like it's our own home",
  "Real project photos — what you see is what you get",
  "Sydney-based team, available and accountable",
  "From concept to completion — we manage it all",
]

export default function WhyUs() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* Left image */}
      <div style={{ minHeight: 600, overflow: 'hidden' }}>
        <img
          src="/images/why-us.jpg"
          alt="Why Magical Constructions"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right content */}
      <div style={{ background: '#0D0B09', borderLeft: '1px solid rgba(201,164,106,0.12)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        style={{
          padding: '96px 72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div className="gold-line-left" style={{ fontFamily: "'Inter'", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A7A6A', fontWeight: 300, marginBottom: 8 }}>The Magical Difference</div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 44,
          fontWeight: 300,
          color: '#F2EDE6',
          marginTop: 20,
          marginBottom: 40,
          lineHeight: 1.2,
        }}>
          Premium Finishes.<br />No Shortcuts.<br />No Excuses.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <Check size={16} color="#C9A46A" strokeWidth={1.5} style={{ marginTop: 4, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#EDE8E0', lineHeight: 1.6, fontWeight: 300 }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#quote"
          style={{
            display: 'inline-block',
            marginTop: 40,
            background: 'linear-gradient(135deg, #C9A46A 0%, #B8924F 100%)',
            color: '#0D0B09',
            padding: '14px 32px',
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 300,
            alignSelf: 'flex-start',
          }}
        >
          Start Your Project →
        </a>
      </motion.div>
      </div>
    </section>
  )
}
