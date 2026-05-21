function GenderSelect({ onSelect }) {
  const characters = [
    { gender: 'girl', img: '/images/girl/hero_face.png', label: '여자아이' },
    { gender: 'boy',  img: '/images/boy/hero_face.png',  label: '남자아이' },
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
      <div style={{
        fontFamily: "'Baloo 2', cursive",
        fontSize: '22px',
        fontWeight: '800',
        color: '#5b21b6',
        marginBottom: '6px'
      }}>주인공을 골라보세요!</div>
      <div style={{
        fontSize: '14px',
        color: '#9ca3af',
        marginBottom: '40px'
      }}>Who are you in this story?</div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {characters.map(({ gender, img, label }) => (
          <button
            key={gender}
            onClick={() => onSelect(gender)}
            style={{
              width: '140px',
              padding: '20px 12px',
              border: '2px solid #fce7f3',
              borderRadius: '20px',
              background: 'white',
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f472b6'
              e.currentTarget.style.background = '#fff0f5'
              e.currentTarget.style.transform = 'translateY(-6px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#fce7f3'
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <img
              src={img}
              alt={label}
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />
            <div style={{ fontSize: '14px', fontWeight: '800', color: '#5b21b6' }}>{label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default GenderSelect