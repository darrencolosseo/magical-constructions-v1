import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2400
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed', sub: 'Across greater Sydney' },
    { value: 8, suffix: '+', label: 'Years Experience', sub: 'Est. 2020' },
    { value: 100, suffix: '%', label: 'Sydney Based', sub: 'Local crew, always' },
    { value: 5, suffix: '★', label: 'Google Rating', sub: 'Verified reviews' },
  ]

  return (
    <section ref={ref} style={{ background: '#0D0B08', borderTop: '1px solid rgba(194,168,122,0.08)', borderBottom: '1px solid rgba(194,168,122,0.08)' }}>
      <div className="rsp-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rsp-stats-item"
            style={{
              padding: '56px 52px',
              borderRight: i < 3 ? '1px solid rgba(194,168,122,0.06)' : 'none',
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 300, color: '#C2A87A', lineHeight: 1, marginBottom: 14 }}>
              {inView ? <Counter target={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,232,223,0.4)', fontWeight: 400, marginBottom: 6 }}>{stat.label}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(194,168,122,0.5)', fontWeight: 300 }}>{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
