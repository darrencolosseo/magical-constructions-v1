import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Layers2, TreePine, Building2, Home, UtensilsCrossed, Hammer } from 'lucide-react'

const serviceOptions = [
  { label: 'Composite Decking', icon: Layers2 },
  { label: 'Hardwood Decking', icon: TreePine },
  { label: 'Cladding / Facade', icon: Building2 },
  { label: 'Interior Build', icon: Home },
  { label: 'Alfresco Kitchen', icon: UtensilsCrossed },
  { label: 'Full Renovation', icon: Hammer },
]

const budgets = ['Under $10,000', '$10,000–$25,000', '$25,000–$50,000', '$50,000+', 'Not sure']
const timelines = ['ASAP', 'Within 1–3 months', 'Just planning ahead']

const inputStyle = {
  background: '#131109',
  borderTop: '1px solid #2A2520',
  borderRight: '1px solid #2A2520',
  borderBottom: '1px solid #2A2520',
  borderLeft: '1px solid #2A2520',
  color: '#F2EDE6',
  padding: '12px 16px',
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  width: '100%',
  outline: 'none',
  borderRadius: 0,
}

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedTimeline, setSelectedTimeline] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = () => {
    setSubmitted(true)
  }

  return (
    <section id="quote" style={{ background: '#0D0B09', borderTop: '1px solid rgba(201,164,106,0.2)', padding: '112px 0' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-caps" style={{ marginBottom: 16 }}>Free Quote</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: '#F2EDE6' }}>
            Tell Us About Your Project
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9A9088', marginTop: 12, marginBottom: 48, fontWeight: 300 }}>
            We respond within 24 hours with a detailed proposal.
          </p>
        </motion.div>

        {/* Progress */}
        {!submitted && (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 48 }}>
            {[1, 2, 3].map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < 2 ? 1 : 'none' }}>
                <div style={{
                  width: 32,
                  height: 32,
                  border: step >= s ? 'none' : '1px solid rgba(201,164,106,0.3)',
                  background: step >= s ? '#C9A46A' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: step >= s ? '#0D0B09' : '#5A5248',
                  fontWeight: 300,
                  flexShrink: 0,
                }}>
                  {s}
                </div>
                {i < 2 && (
                  <div style={{ flex: 1, height: 1, background: step > s ? 'rgba(201,164,106,0.8)' : 'rgba(201,164,106,0.2)', margin: '0 8px' }} />
                )}
              </div>
            ))}
          </div>
        )}

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '60px 0' }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" style={{ margin: '0 auto' }}>
              <motion.circle
                cx="40" cy="40" r="36"
                fill="none"
                stroke="#C9A46A"
                strokeWidth="2"
                strokeDasharray="226"
                initial={{ strokeDashoffset: 226 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.path
                d="M24 40 L36 52 L56 30"
                fill="none"
                stroke="#C9A46A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </svg>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontStyle: 'italic', fontWeight: 300, color: '#F2EDE6', marginTop: 32 }}>
              Request Received.
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9A9088', marginTop: 12, fontWeight: 300 }}>
              We'll be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9A9088', marginBottom: 24, fontWeight: 300 }}>
                  What are you looking for?
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                  {serviceOptions.map(opt => {
                    const Icon = opt.icon
                    const selected = selectedService === opt.label
                    return (
                      <div
                        key={opt.label}
                        onClick={() => setSelectedService(opt.label)}
                        style={{
                          position: 'relative',
                          background: selected ? 'rgba(201,164,106,0.07)' : '#131109',
                          border: `1px solid ${selected ? '#C9A46A' : '#2A2520'}`,
                          padding: '28px 20px',
                          minHeight: 130,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 16,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {selected && (
                          <span style={{ position: 'absolute', top: 8, right: 8, fontFamily: "'Inter'", fontSize: 9, color: '#C9A46A', fontWeight: 300 }}>✓</span>
                        )}
                        <Icon size={24} strokeWidth={1.5} color={selected ? '#C9A46A' : '#5A5248'} />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: selected ? '#C9A46A' : '#9A9088', fontWeight: 300, textAlign: 'center' }}>
                          {opt.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div style={{ marginTop: 40, display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    style={{
                      background: 'linear-gradient(135deg, #C9A46A 0%, #B8924F 100%)',
                      color: '#0D0B09',
                      padding: '14px 32px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 300,
                    }}
                  >
                    Next Step →
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <div style={{ marginBottom: 24 }}>
                  <textarea
                    {...register('description')}
                    rows={4}
                    placeholder="e.g. 80sqm composite deck with built-in pool surround and glass balustrade, teak tone finish..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <input
                    {...register('suburb')}
                    placeholder="Your suburb"
                    style={inputStyle}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9A9088', marginBottom: 12, fontWeight: 300 }}>Budget</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {budgets.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        style={{
                          border: `1px solid ${selectedBudget === b ? '#C9A46A' : '#2A2520'}`,
                          background: selectedBudget === b ? 'rgba(201,164,106,0.07)' : '#131109',
                          color: selectedBudget === b ? '#C9A46A' : '#9A9088',
                          padding: '8px 16px',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          letterSpacing: '0.1em',
                          cursor: 'pointer',
                          fontWeight: 300,
                          transition: 'all 0.3s ease',
                        }}
                      >{b}</button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 40 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9A9088', marginBottom: 12, fontWeight: 300 }}>Timeline</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {timelines.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTimeline(t)}
                        style={{
                          border: `1px solid ${selectedTimeline === t ? '#C9A46A' : '#2A2520'}`,
                          background: selectedTimeline === t ? 'rgba(201,164,106,0.07)' : '#131109',
                          color: selectedTimeline === t ? '#C9A46A' : '#9A9088',
                          padding: '8px 16px',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          letterSpacing: '0.1em',
                          cursor: 'pointer',
                          fontWeight: 300,
                          transition: 'all 0.3s ease',
                        }}
                      >{t}</button>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{
                      border: '1px solid #2A2520',
                      background: 'transparent',
                      color: '#9A9088',
                      padding: '14px 32px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontWeight: 300,
                    }}
                  >← Back</button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    style={{
                      background: 'linear-gradient(135deg, #C9A46A 0%, #B8924F 100%)',
                      color: '#0D0B09',
                      padding: '14px 32px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 300,
                    }}
                  >Next Step →</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <input
                    {...register('firstName', { required: true })}
                    placeholder="First Name"
                    style={{ ...inputStyle, borderTop: `1px solid ${errors.firstName ? '#C9A46A' : '#2A2520'}`, borderRight: `1px solid ${errors.firstName ? '#C9A46A' : '#2A2520'}`, borderBottom: `1px solid ${errors.firstName ? '#C9A46A' : '#2A2520'}`, borderLeft: `1px solid ${errors.firstName ? '#C9A46A' : '#2A2520'}` }}
                  />
                  <input
                    {...register('lastName', { required: true })}
                    placeholder="Last Name"
                    style={{ ...inputStyle, borderTop: `1px solid ${errors.lastName ? '#C9A46A' : '#2A2520'}`, borderRight: `1px solid ${errors.lastName ? '#C9A46A' : '#2A2520'}`, borderBottom: `1px solid ${errors.lastName ? '#C9A46A' : '#2A2520'}`, borderLeft: `1px solid ${errors.lastName ? '#C9A46A' : '#2A2520'}` }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    placeholder="Email"
                    type="email"
                    style={{ ...inputStyle, borderColor: errors.email ? '#C9A46A' : '#2A2520' }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input
                    {...register('phone')}
                    placeholder="Phone"
                    type="tel"
                    style={inputStyle}
                  />
                </div>
                <div style={{ marginBottom: 40 }}>
                  <select
                    {...register('source')}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="" style={{ background: '#131109' }}>How did you find us?</option>
                    <option value="instagram" style={{ background: '#131109' }}>Instagram</option>
                    <option value="google" style={{ background: '#131109' }}>Google</option>
                    <option value="referral" style={{ background: '#131109' }}>Referral</option>
                    <option value="other" style={{ background: '#131109' }}>Other</option>
                  </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    style={{
                      border: '1px solid #2A2520',
                      background: 'transparent',
                      color: '#9A9088',
                      padding: '14px 32px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontWeight: 300,
                    }}
                  >← Back</button>
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(135deg, #C9A46A 0%, #B8924F 100%)',
                      color: '#0D0B09',
                      padding: '14px 48px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 300,
                    }}
                  >Submit Request</button>
                </div>
              </motion.div>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
