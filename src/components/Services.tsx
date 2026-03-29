import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  { title: 'Composite Decking', category: 'Outdoor Living', img: '/images/gallery-06.jpg', desc: 'Large-format boards, pool surrounds and precision framing built to last decades.' },
  { title: 'Hardwood Decking', category: 'Outdoor Living', img: '/images/gallery-04.jpg', desc: 'Spotted gum, blackbutt and ironbark. Sourced, cut and finished on-site.' },
  { title: 'Cladding & Facades', category: 'Exteriors', img: '/images/gallery-20.jpg', desc: 'Aluminium batten, fibre cement and timber cladding that transforms your home from the street.' },
  { title: 'Interior Renovations', category: 'Interiors', img: '/images/gallery-22.jpg', desc: 'Full-scope internal remodels with architectural joinery and premium finishes.' },
  { title: 'Alfresco Kitchens', category: 'Outdoor Living', img: '/images/gallery-14.jpg', desc: 'Custom outdoor kitchens and entertaining spaces built for the Sydney lifestyle.' },
  { title: 'Full Builds', category: 'Construction', img: '/images/gallery-20.jpg', desc: 'End-to-end project management for extensions, granny flats and new builds.' },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', height: '420px', cursor: 'pointer' }}
    >
      <motion.img
        src={service.img} alt={service.title}
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Base gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.92) 0%, rgba(10,8,5,0.3) 50%, transparent 100%)' }} />
      {/* Hover overlay */}
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
        style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.6)' }} />

      <div style={{ position: 'absolute', inset: 0, padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div className="label-sm" style={{ color: '#C2A87A', marginBottom: 10 }}>{service.category}</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: '#EDE8DF', lineHeight: 1.2, marginBottom: 14 }}>{service.title}</h3>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(237,232,223,0.65)', fontWeight: 300, lineHeight: 1.7, marginBottom: 20 }}
        >{service.desc}</motion.p>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div style={{ width: 24, height: 1, background: '#C2A87A' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C2A87A', fontWeight: 400 }}>Learn More</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="rsp-section" style={{ padding: '140px 80px', background: '#0A0805' }}>
      <div ref={ref} className="rsp-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72 }}>
        <div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="gold-line label-sm" style={{ marginBottom: 28 }}>
            What We Build
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5vw, 72px)', fontWeight: 300, color: '#EDE8DF', lineHeight: 1.05 }}>
              Every service,<br /><em style={{ color: '#C2A87A' }}>crafted with care.</em>
            </motion.h2>
          </div>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.35 }}
          style={{ maxWidth: 340, fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(237,232,223,0.45)', fontWeight: 300, lineHeight: 1.85, textAlign: 'right' }}>
          From the first site visit to the final coat of oil, we manage every aspect of your project with precision and care.
        </motion.p>
      </div>
      <div className="rsp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
      </div>
    </section>
  )
}
