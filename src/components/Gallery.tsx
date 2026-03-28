import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const items = [
  { img: '/images/gallery-01.jpg', title: 'Composite Pool Deck', suburb: 'Mosman', cat: 'decking' },
  { img: '/images/gallery-02.jpg', title: 'Hardwood Entertainer', suburb: 'Balmoral', cat: 'decking' },
  { img: '/images/gallery-03.jpg', title: 'Aluminium Facade', suburb: 'Northwood', cat: 'cladding' },
  { img: '/images/gallery-04.jpg', title: 'Pool Surround Deck', suburb: 'Cremorne', cat: 'decking' },
  { img: '/images/gallery-05.jpg', title: 'Timber Batten Screen', suburb: 'Lane Cove', cat: 'cladding' },
  { img: '/images/gallery-06.jpg', title: 'Alfresco Kitchen', suburb: 'Willoughby', cat: 'alfresco' },
  { img: '/images/gallery-07.jpg', title: 'Interior Renovation', suburb: 'Neutral Bay', cat: 'interior' },
  { img: '/images/gallery-08.jpg', title: 'Cladding & Deck', suburb: 'Chatswood', cat: 'cladding' },
  { img: '/images/gallery-09.jpg', title: 'Full Build', suburb: 'Longueville', cat: 'decking' },
  { img: '/images/gallery-10.jpg', title: 'Composite Decking', suburb: 'Artarmon', cat: 'decking' },
  { img: '/images/gallery-11.jpg', title: 'Facade Cladding', suburb: 'St Leonards', cat: 'cladding' },
  { img: '/images/gallery-12.jpg', title: 'Alfresco Build', suburb: 'Pymble', cat: 'alfresco' },
  { img: '/images/gallery-13.jpg', title: 'Batten Wall Screen', suburb: 'Neutral Bay', cat: 'cladding' },
  { img: '/images/gallery-14.jpg', title: 'Curved Alfresco Kitchen', suburb: 'Northbridge', cat: 'alfresco' },
  { img: '/images/gallery-15.jpg', title: 'Hardwood Courtyard Deck', suburb: 'Pyrmont', cat: 'decking' },
  { img: '/images/gallery-16.jpg', title: 'Hardwood Entry Deck', suburb: 'Pyrmont', cat: 'decking' },
  { img: '/images/gallery-17.jpg', title: 'Composite Courtyard Deck', suburb: 'Rushcutters Bay', cat: 'decking' },
  { img: '/images/gallery-18.jpg', title: 'Composite Deck & Gardens', suburb: 'Rushcutters Bay', cat: 'decking' },
  { img: '/images/gallery-19.jpg', title: 'Alfresco Pergola & Deck', suburb: 'Penrith', cat: 'alfresco' },
  { img: '/images/gallery-20.jpg', title: 'Modern Facade Build', suburb: 'Ryde', cat: 'cladding' },
  { img: '/images/gallery-21.jpg', title: 'Custom Built-In Shelving', suburb: 'Mosman', cat: 'interior' },
  { img: '/images/gallery-22.jpg', title: 'Feature Wall & Fireplace', suburb: 'Lane Cove', cat: 'interior' },
  { img: '/images/gallery-23.jpg', title: 'Fireplace Feature Panel', suburb: 'Willoughby', cat: 'interior' },
  { img: '/images/gallery-24.jpg', title: 'Composite Ceiling Cladding', suburb: 'Northbridge', cat: 'cladding' },
]

const filters = ['All', 'Decking', 'Cladding', 'Interior', 'Alfresco']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const filtered = active === 'All' ? items : items.filter(i => i.cat === active.toLowerCase())

  return (
    <section id="projects" style={{ padding: '140px 80px', background: '#0A0805', borderTop: '1px solid rgba(194,168,122,0.06)' }}>
      <div ref={ref} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
        <div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="gold-line label-sm" style={{ marginBottom: 28 }}>
            Our Projects
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5vw, 72px)', fontWeight: 300, color: '#EDE8DF', lineHeight: 1.05 }}>
              The work speaks<br /><em style={{ color: '#C2A87A' }}>for itself.</em>
            </motion.h2>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: 'flex', gap: 4 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: '10px 20px',
              fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 400,
              background: active === f ? '#C2A87A' : 'transparent',
              color: active === f ? '#0A0805' : 'rgba(237,232,223,0.4)',
              border: '1px solid', borderColor: active === f ? '#C2A87A' : 'rgba(194,168,122,0.15)',
              transition: 'all 0.3s ease', cursor: 'pointer',
            }}>{f}</button>
          ))}
        </motion.div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '320px', gap: 2 }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div key={item.img} layout
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', overflow: 'hidden', height: '320px', cursor: 'pointer' }}
              whileHover="hover"
            >
              <motion.img variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} transition={{ duration: 0.35 }}
                style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.75)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 28 }}>
                <div className="label-sm" style={{ color: '#C2A87A', marginBottom: 6 }}>{item.suburb}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: '#EDE8DF' }}>{item.title}</div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
