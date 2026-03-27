import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    name: 'Composite Decking',
    image: '/images/service-decking-composite.jpg',
    description: 'Large-format composite boards. Precision-framed pool surrounds. Built to last decades.',
  },
  {
    name: 'Hardwood Decking',
    image: '/images/service-decking-hardwood.jpg',
    description: 'Spotted gum, merbau & ironbark. Freshly oiled. Finished to perfection.',
  },
  {
    name: 'Aluminium Cladding & Facades',
    image: '/images/service-cladding.jpg',
    description: 'Architectural batten profiles, castellated cladding & facade transformations.',
  },
  {
    name: 'Interior Renovations',
    image: '/images/service-interior.jpg',
    description: 'Timber batten ceilings, feature walls & high-end interior finishes.',
  },
  {
    name: 'Alfresco Kitchens',
    image: '/images/service-alfresco.jpg',
    description: 'Custom outdoor kitchens built for the way Australians live.',
  },
  {
    name: 'Full Builds & Renovations',
    image: '/images/service-builds.jpg',
    description: 'End-to-end residential builds. Architecturally considered. Flawlessly executed.',
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: `1px solid ${hovered ? 'rgba(201,164,106,0.35)' : 'rgba(255,255,255,0.05)'}`,
        borderRight: `1px solid ${hovered ? 'rgba(201,164,106,0.35)' : 'rgba(255,255,255,0.05)'}`,
        borderBottom: `1px solid ${hovered ? 'rgba(201,164,106,0.35)' : 'rgba(255,255,255,0.05)'}`,
        borderLeft: `1px solid ${hovered ? 'rgba(201,164,106,0.35)' : 'rgba(255,255,255,0.05)'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 0.4s ease, transform 0.4s ease',
      }}
    >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#131109',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <div style={{ height: 320, overflow: 'hidden' }}>
        <img
          src={service.image}
          alt={service.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.8s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: '32px 32px 40px' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: '#F2EDE6', marginBottom: 12 }}>
          {service.name}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.8, color: '#9A9088', marginBottom: 24, fontWeight: 300 }}>
          {service.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A46A', fontWeight: 300 }}>
            Explore
          </span>
          <ArrowRight
            size={12}
            color="#C9A46A"
            strokeWidth={1.5}
            style={{ transform: hovered ? 'translateX(6px)' : 'translateX(0)', transition: 'transform 0.4s ease' }}
          />
        </div>
        <div style={{ height: 1, background: '#C9A46A', width: hovered ? '100%' : 0, transition: 'width 0.5s ease', marginTop: 8 }} />
      </div>
    </motion.div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" style={{ background: '#0D0B09', padding: '140px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label-caps" style={{ marginBottom: 16 }}>What We Build</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, fontWeight: 300, color: '#F2EDE6' }}>
            Every Detail. Every Time.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map(service => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
