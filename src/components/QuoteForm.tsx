import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'

type FormData = { name: string; email: string; phone: string; suburb: string; service: string; message: string }

const services = ['Composite Decking', 'Hardwood Decking', 'Cladding / Facade', 'Interior Renovation', 'Alfresco Kitchen', 'Full Build']

export default function QuoteForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const inputStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(194,168,122,0.2)',
    padding: '14px 0', fontFamily: "'Inter', sans-serif", fontSize: 14,
    color: '#EDE8DF', fontWeight: 300, outline: 'none', transition: 'border-color 0.3s ease',
  }

  return (
    <section id="quote" style={{ background: '#0D0B08', borderTop: '1px solid rgba(194,168,122,0.07)' }} ref={ref}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 720 }}>
        {/* Left */}
        <div style={{ padding: '120px 80px', borderRight: '1px solid rgba(194,168,122,0.07)' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="gold-line label-sm" style={{ marginBottom: 28 }}>
            Get in Touch
          </motion.div>
          <div style={{ overflow: 'hidden', marginBottom: 28 }}>
            <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(38px, 4vw, 60px)', fontWeight: 300, color: '#EDE8DF', lineHeight: 1.1 }}>
              Let's talk about<br /><em style={{ color: '#C2A87A' }}>your project.</em>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(237,232,223,0.4)', fontWeight: 300, lineHeight: 1.85, marginBottom: 52, maxWidth: 380 }}>
            We respond within 24 hours with a detailed, itemised proposal. No hidden costs, no surprises.
          </motion.p>
          {[
            'Response within 24 hours',
            'Free site visit & consultation',
            'Detailed itemised quote',
            'No obligation',
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 18 }}>
              <div style={{ width: 4, height: 4, background: '#C2A87A', borderRadius: '50%', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(237,232,223,0.55)', fontWeight: 300 }}>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Right */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ padding: '120px 80px' }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: 24 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, fontWeight: 300, color: '#C2A87A' }}>Thank you.</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(237,232,223,0.5)', fontWeight: 300, lineHeight: 1.8 }}>
                We'll be in touch within 24 hours with a detailed proposal for your project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(() => setSubmitted(true))} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B5E4A', fontWeight: 400, marginBottom: 4 }}>Full Name</label>
                  <input {...register('name', { required: true })} placeholder="Your name" style={{ ...inputStyle, borderBottomColor: errors.name ? '#C27A5A' : 'rgba(194,168,122,0.2)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B5E4A', fontWeight: 400, marginBottom: 4 }}>Email</label>
                  <input {...register('email', { required: true })} type="email" placeholder="your@email.com" style={{ ...inputStyle, borderBottomColor: errors.email ? '#C27A5A' : 'rgba(194,168,122,0.2)' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B5E4A', fontWeight: 400, marginBottom: 4 }}>Phone</label>
                  <input {...register('phone')} placeholder="04xx xxx xxx" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B5E4A', fontWeight: 400, marginBottom: 4 }}>Suburb</label>
                  <input {...register('suburb')} placeholder="Your suburb" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B5E4A', fontWeight: 400, marginBottom: 12 }}>Service Required</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {services.map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                      <input type="radio" {...register('service')} value={s} style={{ accentColor: '#C2A87A' }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(237,232,223,0.5)', fontWeight: 300 }}>{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B5E4A', fontWeight: 400, marginBottom: 4 }}>Tell us about your project</label>
                <textarea {...register('message')} placeholder="Brief description, timeline, budget range..." rows={4} style={{ ...inputStyle, resize: 'none' }} />
              </div>
              <div>
                <button type="submit" className="btn-gold">Submit Request</button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
