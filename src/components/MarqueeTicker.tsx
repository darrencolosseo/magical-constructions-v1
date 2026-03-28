export default function MarqueeTicker() {
  const items = ['Composite Decking', 'Hardwood Decking', 'Cladding & Facades', 'Alfresco Kitchens', 'Interior Renovations', 'Full Builds', 'Pool Surrounds', 'Batten Screens']
  const repeated = [...items, ...items]

  return (
    <div style={{ background: '#0D0B08', borderTop: '1px solid rgba(194,168,122,0.08)', borderBottom: '1px solid rgba(194,168,122,0.08)', padding: '22px 0', overflow: 'hidden' }}>
      <div className="marquee-track" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
        {repeated.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', paddingRight: 64 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,232,223,0.25)', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>{item}</span>
            <span style={{ marginLeft: 64, width: 4, height: 4, borderRadius: '50%', background: 'rgba(194,168,122,0.3)', display: 'inline-block', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  )
}
