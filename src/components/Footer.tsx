import { Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#080706', borderTop: '1px solid rgba(201,164,106,0.2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
        {/* Col 1 */}
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#C2A87A', fontWeight: 300 }}>Magical Constructions</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#5A5248', letterSpacing: '0.1em', marginTop: 4, fontWeight: 300 }}>Premium Builds · Sydney</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#5A5248', maxWidth: 280, lineHeight: 1.7, marginTop: 16, fontWeight: 300 }}>
            Sydney-based builders specialising in custom decking, cladding, facades and architectural residential builds.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <div className="label-caps" style={{ marginBottom: 16, color: '#6A6258' }}>Navigation</div>
          {['Services', 'Projects', 'Quote', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: '#9A9088',
                textDecoration: 'none',
                marginBottom: 8,
                fontWeight: 300,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F2EDE6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A9088')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Col 3 */}
        <div>
          <div className="label-caps" style={{ marginBottom: 16, color: '#6A6258' }}>Contact</div>
          {[
            { icon: ExternalLink, text: '@magicalconstructions', href: 'https://www.instagram.com/magicalconstructions/' },
            { icon: Mail, text: 'hello@magicalconstructions.com.au', href: 'mailto:hello@magicalconstructions.com.au' },
            { icon: MapPin, text: 'Sydney, NSW', href: '#' },
          ].map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: '#9A9088',
                textDecoration: 'none',
                marginBottom: 12,
                fontWeight: 300,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F2EDE6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A9088')}
            >
              <Icon size={14} color="#5A5248" strokeWidth={1.5} />
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        background: '#060504',
        borderTop: '1px solid #1A1710',
        padding: '16px 48px',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
        fontSize: 10,
        color: '#3A3530',
        letterSpacing: '0.1em',
        fontWeight: 300,
      }}>
        © 2026 Magical Constructions. All rights reserved. ABN: XX XXX XXX XXX
      </div>
    </footer>
  )
}
