import { DAYS } from '../data/days'

function DaySelect({ onSelect, completedDays = [] }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff5f7',
      padding: '0 0 32px',
    }}>

      {/* 헤더 */}
      <div style={{
        background: 'linear-gradient(135deg, #f472b6, #a78bfa)',
        padding: '20px 16px 24px',
        marginBottom: '20px',
      }}>
        <div style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: '22px',
          fontWeight: '800',
          color: 'white',
          marginBottom: '4px',
        }}>어떤 날을 골라볼까요?</div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
          Choose your story day!
        </div>

        {/* 진행 표시 */}
        <div style={{
          marginTop: '14px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '10px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '8px',
            height: '8px',
            flex: 1,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              background: '#fcd34d',
              borderRadius: '8px',
              width: `${(completedDays.length / DAYS.length) * 100}%`,
              transition: 'width 0.5s ease',
            }} />
          </div>
          <span style={{
            fontSize: '12px',
            fontWeight: '700',
            color: 'white',
            whiteSpace: 'nowrap',
          }}>
            {completedDays.length} / {DAYS.length} 완료
          </span>
        </div>
      </div>

      {/* Day 목록 */}
      <div style={{
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {DAYS.map((day) => {
          const isCompleted = completedDays.includes(day.id)
          const isUnlocked  = day.unlocked || isCompleted
          const isLocked    = !isUnlocked

          return (
            <button
              key={day.id}
              onClick={() => !isLocked && onSelect(day.id)}
              disabled={isLocked}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 16px',
                border: `2px solid ${isCompleted ? '#f472b6' : isLocked ? '#f3f4f6' : '#fce7f3'}`,
                borderRadius: '16px',
                background: isCompleted ? '#fff0f7' : isLocked ? '#f9fafb' : 'white',
                cursor: isLocked ? 'default' : 'pointer',
                fontFamily: "'Nunito', sans-serif",
                textAlign: 'left',
                width: '100%',
                opacity: isLocked ? 0.6 : 1,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                if (!isLocked) {
                  e.currentTarget.style.borderColor = '#f472b6'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }
              }}
              onMouseLeave={e => {
                if (!isLocked) {
                  e.currentTarget.style.borderColor = isCompleted ? '#f472b6' : '#fce7f3'
                  e.currentTarget.style.transform = 'translateX(0)'
                }
              }}
            >
              {/* Day 번호 뱃지 */}
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: isCompleted
                  ? 'linear-gradient(135deg, #f472b6, #a78bfa)'
                  : isLocked
                    ? '#e5e7eb'
                    : 'linear-gradient(135deg, #fce7f3, #ede9fe)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <div style={{
                  fontSize: '10px',
                  fontWeight: '800',
                  color: isCompleted ? 'white' : isLocked ? '#9ca3af' : '#f472b6',
                  lineHeight: 1,
                }}>DAY</div>
                <div style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: '16px',
                  fontWeight: '800',
                  color: isCompleted ? 'white' : isLocked ? '#9ca3af' : '#5b21b6',
                  lineHeight: 1,
                }}>{day.day}</div>
              </div>

              {/* 제목 */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: '16px',
                  fontWeight: '700',
                  color: isLocked ? '#9ca3af' : '#1f1f1f',
                  marginBottom: '2px',
                }}>{day.title}</div>
                <div style={{
                  fontSize: '12px',
                  color: isLocked ? '#d1d5db' : '#9ca3af',
                  fontWeight: '600',
                }}>{day.titleEn}</div>
              </div>

              {/* 상태 아이콘 */}
              <div style={{ flexShrink: 0 }}>
                {isCompleted ? (
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#f472b6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : isLocked ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="10" rx="2"
                      fill="#d1d5db"/>
                    <path d="M8 11V7a4 4 0 018 0v4" stroke="#d1d5db"
                      strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#f472b6" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DaySelect