export default function MarqueeTicker() {
  const text = "COMPOSITE DECKING · HARDWOOD DECKING · ALUMINIUM CLADDING · ALFRESCO KITCHENS · FACADE BUILDS · INTERIOR RENOVATIONS · CUSTOM BUILDS · SYDNEY · "

  return (
    <div style={{
      background: '#0D0B09',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      height: 48,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div
        style={{
          display: 'flex',
          animation: 'marquee-scroll 60s linear infinite',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {[text, text].map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(180,165,140,0.35)',
              fontWeight: 300,
              paddingRight: 40,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
