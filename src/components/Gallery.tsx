import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const items = [
  // — Alfresco & Pergola —
  { img: '/images/gallery-01.jpg', title: 'Alfresco Pavilion & Deck', suburb: 'Cronulla', cat: 'alfresco' },
  { img: '/images/gallery-14.jpg', title: 'Curved Alfresco Kitchen', suburb: 'Manly', cat: 'alfresco' },
  { img: '/images/gallery-19.jpg', title: 'Pergola & Composite Deck', suburb: 'Penrith', cat: 'alfresco' },
  { img: '/images/mc-03.jpg', title: 'Pergola & Composite Deck', suburb: 'Sydney', cat: 'alfresco' },

  // — Composite Decking —
  { img: '/images/gallery-05.jpg', title: 'Large Composite Terrace', suburb: 'Newport', cat: 'decking' },
  { img: '/images/gallery-06.jpg', title: 'Composite Pool Deck', suburb: 'Mosman', cat: 'decking' },
  { img: '/images/gallery-09.jpg', title: 'Composite Pool Surround', suburb: 'Mosman', cat: 'decking' },
  { img: '/images/mc-04.jpg', title: 'Composite Deck & Spa', suburb: 'Sydney', cat: 'decking' },
  { img: '/images/mc-06.jpg', title: 'Waterfront Composite Deck', suburb: 'Sydney', cat: 'decking' },

  // — Hardwood Decking —
  { img: '/images/gallery-04.jpg', title: 'Hardwood Entertainer Deck', suburb: 'Cremorne', cat: 'decking' },
  { img: '/images/mc-07.jpg', title: 'Freshly Oiled Hardwood Deck', suburb: 'Sydney', cat: 'decking' },
  { img: '/images/mc-09.jpg', title: 'Hardwood Deck & Bench Seating', suburb: 'Sydney', cat: 'decking' },
  { img: '/images/mc-10.jpg', title: 'Hardwood Deck & Glass Balustrade', suburb: 'Sydney', cat: 'decking' },

  // — Deck Replacement: Before & After (Pyrmont — kept together) —
  { img: '/images/gallery-17.jpg', title: 'Deck Replacement: Before', suburb: 'Pyrmont', cat: 'decking' },
  { img: '/images/gallery-11.jpg', title: 'Deck Replacement: Progress', suburb: 'Pyrmont', cat: 'decking' },
  { img: '/images/gallery-15.jpg', title: 'Deck Replacement: After', suburb: 'Pyrmont', cat: 'decking' },

  // — Deck Restoration: Before & After (kept together) —
  { img: '/images/mc-11.jpg', title: 'Deck Restoration: Before', suburb: 'Sydney', cat: 'decking' },
  { img: '/images/mc-13.jpg', title: 'Deck Restoration: After', suburb: 'Sydney', cat: 'decking' },

  // — Cladding & Facade —
  { img: '/images/gallery-12.jpg', title: 'Facade Cladding & Stairs', suburb: 'Balmoral', cat: 'cladding' },
  { img: '/images/gallery-13.jpg', title: 'Black Batten Screen', suburb: 'Neutral Bay', cat: 'cladding' },
  { img: '/images/gallery-20.jpg', title: 'Modern Facade Build', suburb: 'Ryde', cat: 'cladding' },
  { img: '/images/gallery-24.jpg', title: 'Timber Slat Ceiling', suburb: 'Northbridge', cat: 'cladding' },
  { img: '/images/mc-15.jpg', title: 'Render & Batten Cladding', suburb: 'Sydney', cat: 'cladding' },
  { img: '/images/mc-17.jpg', title: 'Timber Batten Facade', suburb: 'Sydney', cat: 'cladding' },

  // — Custom Front Doors —
  { img: '/images/mc-23.jpg', title: 'Custom Black Batten Door', suburb: 'Sydney', cat: 'doors' },
  { img: '/images/mc-24.jpg', title: 'Modern Black Entry', suburb: 'Sydney', cat: 'doors' },

  // — Interior Fix Outs —
  { img: '/images/gallery-21.jpg', title: 'Custom Joinery & Fireplace', suburb: 'Mosman', cat: 'interior' },
  { img: '/images/gallery-22.jpg', title: 'Shiplap Fireplace Feature Wall', suburb: 'Lane Cove', cat: 'interior' },
  { img: '/images/gallery-23.jpg', title: 'Fireplace & Media Wall', suburb: 'Willoughby', cat: 'interior' },
  { img: '/images/mc-18.jpg', title: 'Luxury Custom Joinery', suburb: 'Sydney', cat: 'interior' },
  { img: '/images/mc-19.jpg', title: 'Walk-in Wardrobe', suburb: 'Sydney', cat: 'interior' },
  { img: '/images/mc-21.jpg', title: 'Fireplace Feature Wall', suburb: 'Sydney', cat: 'interior' },
  { img: '/images/mc-22.jpg', title: 'Timber Slat Ceiling & Marble Island', suburb: 'Sydney', cat: 'interior' },
]

const filters = ['All', 'Decking', 'Cladding', 'Fix Outs', 'Alfresco', 'Doors']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const filtered = active === 'All' ? items : items.filter(i => {
    if (active === 'Fix Outs') return i.cat === 'interior'
    if (active === 'Doors') return i.cat === 'doors'
    return i.cat === active.toLowerCase()
  })

  return (
    <section id="projects" className="rsp-section" style={{ padding: '140px 80px', background: '#0A0805', borderTop: '1px solid rgba(194,168,122,0.06)' }}>
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
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
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

      <div className="rsp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '320px', gap: 2 }}>
        <AnimatePresence mode="sync">
          {filtered.map((item, i) => (
            <motion.div key={item.img}
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', overflow: 'hidden', height: '320px', cursor: 'pointer', willChange: 'transform' }}
              className="gallery-card"
            >
              <img
                src={item.img} alt={item.title}
                loading={i < 6 ? 'eager' : 'lazy'} decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
                className="gallery-img"
              />
              <div className="gallery-overlay"
                style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.75)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 28, opacity: 0, transition: 'opacity 0.35s ease' }}>
                <div className="label-sm" style={{ color: '#C2A87A', marginBottom: 6 }}>{item.suburb}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: '#EDE8DF' }}>{item.title}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
