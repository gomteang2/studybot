function ChoiceButton({ number, en, kr, type, onClick, disabled }) {
  const isSelected = !!type
  const bgColor     = type === 'good' ? '#ecfdf5' : type === 'bad' ? '#fef2f2' : type === 'neutral' ? '#fffbeb' : 'white'
  const borderColor = type === 'good' ? '#059669' : type === 'bad' ? '#dc2626' : type === 'neutral' ? '#d97706' : '#fce7f3'
  const numBg       = number === 1 ? '#a78bfa' : number === 2 ? '#f472b6' : '#fb923c'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: bgColor,
        border: `2px solid ${isSelected ? borderColor : '#fce7f3'}`,
        borderRadius: '14px',
        padding: '14px 16px',
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        textAlign: 'left',
        width: '100%',
        fontFamily: "'Nunito', sans-serif",
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        if (!disabled) {
          e.currentTarget.style.borderColor = '#f472b6'
          e.currentTarget.style.transform = 'translateX(4px)'
        }
      }}
      onMouseLeave={e => {
        if (!disabled) {
          e.currentTarget.style.borderColor = isSelected ? borderColor : '#fce7f3'
          e.currentTarget.style.transform = 'translateX(0)'
        }
      }}
    >
      <div style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: numBg,
        color: 'white',
        fontSize: '14px',
        fontWeight: '800',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: "'Baloo 2', cursive",
      }}>{number}</div>
      <div>
        <div style={{ fontSize: '14px', fontWeight: '700', color: '#1f1f1f', marginBottom: '2px' }}>{en}</div>
        <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600' }}>{kr}</div>
      </div>
    </button>
  )
}

export default ChoiceButton