import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { number: 150, suffix: '+', label: 'Projects Completed' },
  { number: 8, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Sydney-Based' },
  { number: 5, suffix: '★', label: 'Google Rated' },
]

export default function StatsBar() {
  return (
    <div
      style={{
        background: '#0D0B09',
        borderTop: '1px solid rgba(242,237,230,0.08)',
        borderBottom: '1px solid rgba(242,237,230,0.08)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            padding: '64px 24px',
            textAlign: 'center',
            ...(i > 0 && { borderLeft: '1px solid rgba(242,237,230,0.08)' }),
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 60,
              fontWeight: 300,
              color: '#EDE8E0',
              lineHeight: 1,
            }}
          >
            <Counter target={stat.number} suffix={stat.suffix} />
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#7A7268',
              fontWeight: 300,
              marginTop: 12,
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
