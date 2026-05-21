function FeedbackPanel({ choice, age }) {
  if (!choice) return null

  const { type, emoji, feedbackTitle, emotionText, grammarText } = choice

  const panelColor = type === 'good' ? '#ecfdf5' : type === 'bad' ? '#fef2f2' : '#fffbeb'
  const borderColor = type === 'good' ? '#6ee7b7' : type === 'bad' ? '#fca5a5' : '#fcd34d'
  const titleColor = type === 'good' ? '#047857' : type === 'bad' ? '#991b1b' : '#92400e'
  const emotionBg = type === 'good' ? '#d1fae5' : type === 'bad' ? '#fee2e2' : '#fef3c7'
  const emotionText2 = type === 'good' ? '#047857' : type === 'bad' ? '#991b1b' : '#92400e'
  const emotionLabel = type === 'good' ? '#065f46' : type === 'bad' ? '#7f1d1d' : '#78350f'

  return (
    <div style={{
      background: panelColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <span style={{ fontSize: '26px' }}>{emoji}</span>
        <span style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: '16px',
          fontWeight: '700',
          color: titleColor
        }}>
          {Array.isArray(feedbackTitle) ? feedbackTitle[age] : feedbackTitle}
        </span>
      </div>

      <div style={{
        background: emotionBg,
        borderRadius: '10px',
        padding: '10px 12px',
        marginBottom: '8px'
      }}>
        <div style={{
          fontSize: '10px',
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          color: emotionLabel,
          marginBottom: '4px'
        }}>💛 How this feels</div>
        <div style={{ fontSize: '13px', color: emotionText2, lineHeight: '1.5', fontWeight: '600' }}>
          {Array.isArray(emotionText) ? emotionText[age] : emotionText}
        </div>
      </div>

      <div style={{
        background: '#ede9fe',
        borderRadius: '10px',
        padding: '10px 12px'
      }}>
        <div style={{
          fontSize: '10px',
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          color: '#3730a3',
          marginBottom: '4px'
        }}>✏️ Great English!</div>
        <div style={{ fontSize: '13px', color: '#4338ca', lineHeight: '1.5', fontWeight: '600' }}>
          {Array.isArray(grammarText) ? grammarText[age] : grammarText}
        </div>
      </div>
    </div>
  )
}

export default FeedbackPanel