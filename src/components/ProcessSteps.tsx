import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Free Consultation', desc: 'We discuss your vision, timeline and budget — no obligations, no pressure.' },
  { num: '02', title: 'Detailed Quote', desc: 'You receive a precise itemised quote within 48 hours of our site visit.' },
  { num: '03', title: 'Precision Build', desc: 'Our team executes with meticulous attention to every detail and finish.' },
  { num: '04', title: 'Final Handover', desc: "We walk the project with you and won't leave until you're completely satisfied." },
]

export default function ProcessSteps() {
  return (
    <section style={{ background: '#0B0A08', padding: '140px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label-caps" style={{ marginBottom: 16 }}>How We Work</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: '#F2EDE6' }}>
            From First Call to Final Finish
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                borderRight: '1px solid rgba(255,255,255,0.04)',
                ...(i === 0 && { borderLeft: '1px solid rgba(255,255,255,0.04)' }),
                position: 'relative',
              }}
            >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: 'rgba(201,164,106,0.02)',
                padding: '44px 36px',
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 88,
                fontWeight: 200,
                color: 'rgba(201,164,106,0.2)',
                lineHeight: 1,
              }}>
                {step.num}
              </div>
              <div style={{ width: 32, height: 1, background: '#C9A46A', margin: '16px 0' }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F2EDE6', fontWeight: 300 }}>
                {step.title}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.75, color: '#9A9088', marginTop: 12, fontWeight: 300 }}>
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: -16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(201,164,106,0.4)',
                  fontSize: 20,
                  zIndex: 10,
                }}>→</div>
              )}
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
