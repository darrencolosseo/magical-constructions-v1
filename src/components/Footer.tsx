import { Globe, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#060402', borderTop: '1px solid rgba(194,168,122,0.08)' }}>
      <div className="rsp-footer" style={{ padding: '100px 80px 64px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 80, borderBottom: '1px solid rgba(194,168,122,0.06)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: '#C2A87A' }}>MC</span>
            <span style={{ width: 1, height: 20, background: 'rgba(194,168,122,0.2)' }} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 300, color: '#EDE8DF', letterSpacing: '0.02em' }}>Magical Constructions</span>
          </div>
          <div style={{ fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(194,168,122,0.5)', marginBottom: 32 }}>Premium Carpentry · Sydney</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(237,232,223,0.3)', fontWeight: 300, lineHeight: 1.85, maxWidth: 360 }}>
            Sydney-based specialists in composite decking, hardwood decking, cladding, alfresco kitchens, custom front doors and interior fix outs. Every project treated as our own.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(194,168,122,0.4)', marginBottom: 28 }}>Navigation</div>
          {['Services', 'Projects', 'Process', 'Quote'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(237,232,223,0.4)', fontWeight: 300, marginBottom: 16, transition: 'color 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C2A87A')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,232,223,0.4)')}
            >{link}</a>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: "'Inter'", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(194,168,122,0.4)', marginBottom: 28 }}>Contact</div>
          {[
            { Icon: Phone, text: '0427 731 552', href: 'tel:0427731552' },
            { Icon: Mail, text: 'magicalconstructions@gmail.com', href: 'mailto:magicalconstructions@gmail.com' },
            { Icon: Globe, text: 'www.magicalconstruction.com.au', href: 'https://www.magicalconstruction.com.au' },
            { Icon: MapPin, text: 'Sydney, NSW', href: '#' },
          ].map(({ Icon, text, href }) => (
            <a key={text} href={href} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(237,232,223,0.35)', fontWeight: 300, marginBottom: 18, transition: 'color 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C2A87A')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,232,223,0.35)')}
            >
              <Icon size={14} strokeWidth={1.5} style={{ marginTop: 2, flexShrink: 0, color: '#C2A87A' }} />
              {text}
            </a>
          ))}
        </div>
      </div>

      <div className="rsp-footer-bar" style={{ padding: '28px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'rgba(237,232,223,0.18)', fontWeight: 300 }}>© 2026 Magical Constructions. All rights reserved.</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'rgba(237,232,223,0.18)', fontWeight: 300 }}>ABN: XX XXX XXX XXX</span>
      </div>
    </footer>
  )
}
