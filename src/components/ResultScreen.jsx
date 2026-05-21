import { CHARACTERS } from '../data/characters'

function ResultScreen({ selectedTypes, gender, onRestart }) {
  const goodCount = selectedTypes.filter(t => t === 'good').length
  const allGood   = selectedTypes.every(t => t === 'good')
  const anyBad    = selectedTypes.some(t => t === 'bad')

  const heroImg = CHARACTERS.hero[gender]?.['hero_happy']

  let tagBg, tagColor, tag, title, subtitle
  if (allGood) {
    tagBg = '#ecfdf5'; tagColor = '#047857'; tag = 'Best Friend Ending!'
    title = "You're Amazing!"
    subtitle = 'Your friend is so happy you helped! You showed kindness, courage, and great English!'
  } else if (anyBad && goodCount === 0) {
    tagBg = '#fef2f2'; tagColor = '#991b1b'; tag = 'Keep Growing!'
    title = 'Every Day Is a New Chance!'
    subtitle = 'Things got tough — but you learned a LOT today. Tomorrow you can choose kindness. Every mistake is a stepping stone.'
  } else {
    tagBg = '#fffbeb'; tagColor = '#92400e'; tag = 'Good Effort!'
    title = "You're Learning!"
    subtitle = "Some kind choices, some tricky ones — that's real life! Your English shone throughout."
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>

      {/* 캐릭터 */}
      {heroImg && (
        <img
          src={heroImg}
          alt="hero"
          style={{ height: '140px', objectFit: 'contain', marginBottom: '16px' }}
        />
      )}

      {/* 태그 */}
      <div style={{
        display: 'inline-block',
        background: tagBg,
        color: tagColor,
        padding: '6px 18px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '700',
        marginBottom: '12px',
        border: `1px solid ${tagColor}30`
      }}>{tag}</div>

      <div style={{
        fontFamily: "'Baloo 2', cursive",
        fontSize: '22px',
        fontWeight: '800',
        color: '#1f1f1f',
        marginBottom: '8px'
      }}>{title}</div>

      <div style={{
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '24px',
        lineHeight: '1.6',
        padding: '0 8px'
      }}>{subtitle}</div>

      {/* 점수 */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        border: '2px solid #fce7f3',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <div style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: '48px',
          fontWeight: '800',
          color: '#f472b6'
        }}>{goodCount}</div>
        <div style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '600', marginBottom: '12px' }}>
          Kind Choices
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {selectedTypes.map((t, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#6b7280',
              fontWeight: '600'
            }}>
              <span>Choice {i + 1}</span>
              <span style={{
                padding: '2px 10px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: '700',
                background: t === 'good' ? '#ecfdf5' : t === 'neutral' ? '#fffbeb' : '#fef2f2',
                color:      t === 'good' ? '#047857' : t === 'neutral' ? '#92400e' : '#991b1b',
              }}>
                {t === 'good' ? 'Kind' : t === 'neutral' ? 'Neutral' : 'Unkind'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onRestart}
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #f472b6, #a78bfa)',
          color: 'white',
          border: 'none',
          borderRadius: '14px',
          padding: '14px',
          fontFamily: "'Baloo 2', cursive",
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
        }}
      >Play Again</button>
    </div>
  )
}

export default ResultScreen