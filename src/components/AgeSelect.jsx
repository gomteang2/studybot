function AgeSelect({ onSelect }) {
  const ages = [
    { id: 0, label: 'Ages 5–7',   img: '/images/age/egg.png',     desc: 'Beginner' },
    { id: 1, label: 'Ages 8–10',  img: '/images/age/chick.png',   desc: 'Explorer' },
    { id: 2, label: 'Ages 11–13', img: '/images/age/chicken.png', desc: 'Advanced' },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 20px',
      background: '#fff5f7'
    }}>
      <img src="/images/age/chick.png" alt="" style={{ width: '64px', marginBottom: '16px' }} />
      <div style={{
        fontFamily: "'Baloo 2', cursive",
        fontSize: '26px',
        fontWeight: '800',
        color: '#5b21b6',
        marginBottom: '6px'
      }}>StoryPath</div>
      <div style={{
        fontSize: '15px',
        color: '#9ca3af',
        marginBottom: '40px'
      }}>나이를 선택해주세요!</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', maxWidth: '320px' }}>
        {ages.map(({ id, label, img, desc }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              border: '2px solid #fce7f3',
              borderRadius: '16px',
              background: 'white',
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s',
              width: '100%',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f472b6'
              e.currentTarget.style.background = '#fff0f5'
              e.currentTarget.style.transform = 'translateX(6px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#fce7f3'
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            <img src={img} alt={label} style={{ width: '52px', height: '52px', objectFit: 'contain' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#1f1f1f' }}>{label}</div>
              <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '600', marginTop: '2px' }}>{desc}</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: '20px', color: '#d1d5db' }}>›</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default AgeSelect