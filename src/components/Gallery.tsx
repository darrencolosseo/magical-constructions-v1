import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Decking', 'Cladding & Facades', 'Interior', 'Alfresco']

const items = [
  { img: 'gallery-01.jpg', name: 'Composite Estate Deck', suburb: 'Harrington Park', cat: 'Decking' },
  { img: 'gallery-02.jpg', name: 'Merbau Hardwood Close-Up', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-03.jpg', name: 'Merbau Golden Hour Reflection', suburb: 'Oatley', cat: 'Decking' },
  { img: 'gallery-04.jpg', name: 'Batten Ceiling Interior', suburb: 'Sydney', cat: 'Interior' },
  { img: 'gallery-05.jpg', name: 'Composite Pool Surround', suburb: 'Harrington Park', cat: 'Decking' },
  { img: 'gallery-06.jpg', name: 'Freshly Oiled Deck', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-07.jpg', name: 'Aluminium Batten Facade', suburb: 'Northwood', cat: 'Cladding & Facades' },
  { img: 'gallery-08.jpg', name: 'Alfresco Kitchen Build', suburb: 'Baulkham Hills', cat: 'Alfresco' },
  { img: 'gallery-09.jpg', name: 'Charcoal Deck & Cladding', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-10.jpg', name: 'Estate Composite Deck', suburb: 'Harrington Park', cat: 'Decking' },
  { img: 'gallery-11.jpg', name: 'Hardwood Deck & Stone', suburb: 'Sydney', cat: 'Decking' },
  { img: 'gallery-12.jpg', name: 'Alfresco + Cladding', suburb: 'Towradgi', cat: 'Cladding & Facades' },
]

function GalleryItem({ item, active }: { item: typeof items[0]; active: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: active ? 1 : 0,
        transform: active ? 'scale(1)' : 'scale(0.95)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: active ? 'auto' : 'none',
        aspectRatio: '1 / 1',
      }}
    >
      <img
        src={`/images/${item.img}`}
        alt={item.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.8s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(13,11,9,0.7)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: '#F2EDE6' }}>
          {item.name}
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A46A', marginTop: 4, fontWeight: 300 }}>
          {item.suburb}
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <section id="projects" style={{ background: '#0D0B09', padding: '112px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-caps" style={{ marginBottom: 16 }}>Recent Work</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: '#F2EDE6' }}>Our Projects</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9A9088', marginTop: 16, marginBottom: 32, fontWeight: 300 }}>
            Projects across Sydney — Northwood, Harrington Park, Oatley, Towradgi, Baulkham Hills and beyond.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                border: `1px solid ${activeFilter === cat ? '#C9A46A' : '#2A2520'}`,
                background: activeFilter === cat ? 'rgba(201,164,106,0.05)' : 'transparent',
                color: activeFilter === cat ? '#C9A46A' : '#9A9088',
                padding: '8px 20px',
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 300,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
          {items.map(item => (
            <GalleryItem
              key={item.img}
              item={item}
              active={activeFilter === 'All' || item.cat === activeFilter}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
