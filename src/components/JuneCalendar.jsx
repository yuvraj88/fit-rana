const calGrads = {
  push:   'linear-gradient(135deg,rgba(255,107,53,0.35),rgba(192,57,43,0.35))',
  pull:   'linear-gradient(135deg,rgba(71,201,255,0.35),rgba(14,90,138,0.35))',
  legs:   'linear-gradient(135deg,rgba(167,139,250,0.35),rgba(91,33,182,0.35))',
  hiit:   'linear-gradient(135deg,rgba(232,255,71,0.35),rgba(156,163,0,0.35))',
  upper:  'linear-gradient(135deg,rgba(74,222,128,0.35),rgba(21,128,61,0.35))',
  active: 'linear-gradient(135deg,rgba(249,168,77,0.35),rgba(201,123,10,0.35))',
}

function CalDay({ type, num, focus, core, empty }) {
  if (empty) return <div className="cal-day empty"></div>
  return (
    <div className={`cal-day ${type}`}>
      {type !== 'rest' && calGrads[type] && (
        <div style={{position:'absolute',inset:0,background:calGrads[type],borderRadius:'7px'}}></div>
      )}
      <div className="cal-day-inner">
        <div className="day-num">{num}</div>
        <div className="day-focus">{focus}</div>
        {core && <div className="day-core">{core}</div>}
      </div>
    </div>
  )
}

export default function JuneCalendar() {
  return (
    <>
      <div className="section-title"><span className="icon">📅</span> June 2026 — Workout Calendar <div className="line"></div></div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))',gap:'10px',marginBottom:'20px'}}>
        <div className="workout-banner">
          <div className="banner-art" style={{'--c1':'#ff6b35','--c2':'#c0392b'}}></div>
          <div className="banner-icon">🏋️</div>
          <div className="workout-banner-overlay"></div>
          <div className="workout-banner-content">
            <div className="workout-banner-title">PUSH</div>
            <div className="workout-banner-sub">Chest · Shoulders · Triceps</div>
          </div>
          <div className="workout-banner-badge" style={{background:'#ff6b35'}}>MON</div>
        </div>
        <div className="workout-banner">
          <div className="banner-art" style={{'--c1':'#47c9ff','--c2':'#0e5a8a'}}></div>
          <div className="banner-icon">💪</div>
          <div className="workout-banner-overlay"></div>
          <div className="workout-banner-content">
            <div className="workout-banner-title">PULL</div>
            <div className="workout-banner-sub">Back · Biceps · Rows</div>
          </div>
          <div className="workout-banner-badge" style={{background:'#47c9ff',color:'#000'}}>TUE</div>
        </div>
        <div className="workout-banner">
          <div className="banner-art" style={{'--c1':'#a78bfa','--c2':'#5b21b6'}}></div>
          <div className="banner-icon">🦵</div>
          <div className="workout-banner-overlay"></div>
          <div className="workout-banner-content">
            <div className="workout-banner-title">LEGS</div>
            <div className="workout-banner-sub">Quads · Glutes · Hamstrings</div>
          </div>
          <div className="workout-banner-badge" style={{background:'#a78bfa'}}>WED</div>
        </div>
        <div className="workout-banner">
          <div className="banner-art" style={{'--c1':'#e8ff47','--c2':'#9ca300'}}></div>
          <div className="banner-icon">⚡</div>
          <div className="workout-banner-overlay"></div>
          <div className="workout-banner-content">
            <div className="workout-banner-title">HIIT</div>
            <div className="workout-banner-sub">Cardio · Burn · Interval</div>
          </div>
          <div className="workout-banner-badge">THU</div>
        </div>
        <div className="workout-banner">
          <div className="banner-art" style={{'--c1':'#4ade80','--c2':'#15803d'}}></div>
          <div className="banner-icon">🔥</div>
          <div className="workout-banner-overlay"></div>
          <div className="workout-banner-content">
            <div className="workout-banner-title">ABS CORE</div>
            <div className="workout-banner-sub">Every session · 15–18 min</div>
          </div>
          <div className="workout-banner-badge" style={{background:'#4ade80',color:'#000'}}>DAILY</div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item"><div className="legend-dot" style={{background:'#ff6b35'}}></div> Push (Chest/Shoulders/Triceps)</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#47c9ff'}}></div> Pull (Back/Biceps)</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#a78bfa'}}></div> Legs + Glutes</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#e8ff47'}}></div> HIIT Cardio</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#4ade80'}}></div> Full Upper Body</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#f9a84d'}}></div> Active Recovery</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#2a2a2a'}}></div> Rest</div>
      </div>

      <div className="cal-grid">
        <div className="cal-day-label">SUN</div>
        <div className="cal-day-label">MON</div>
        <div className="cal-day-label">TUE</div>
        <div className="cal-day-label">WED</div>
        <div className="cal-day-label">THU</div>
        <div className="cal-day-label">FRI</div>
        <div className="cal-day-label">SAT</div>

        <CalDay empty />
        <CalDay type="push" num="1" focus="Push" core="+ Core" />
        <CalDay type="pull" num="2" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="3" focus="Legs" core="+ Core" />
        <CalDay type="hiit" num="4" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="5" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="6" focus="Walk / Yoga" />

        <CalDay type="rest" num="7" focus="Rest" />
        <CalDay type="push" num="8" focus="Push" core="+ Core" />
        <CalDay type="pull" num="9" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="10" focus="Legs" core="+ Core" />
        <CalDay type="hiit" num="11" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="12" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="13" focus="Walk / Yoga" />

        <CalDay type="rest" num="14" focus="Rest" />
        <CalDay type="push" num="15" focus="Push" core="+ Core" />
        <CalDay type="pull" num="16" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="17" focus="Legs" core="+ Core" />
        <CalDay type="hiit" num="18" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="19" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="20" focus="Walk / Yoga" />

        <CalDay type="rest" num="21" focus="Rest" />
        <CalDay type="push" num="22" focus="Push" core="+ Core" />
        <CalDay type="pull" num="23" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="24" focus="Legs" core="+ Core" />
        <CalDay type="hiit" num="25" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="26" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="27" focus="Walk / Yoga" />

        <CalDay type="rest" num="28" focus="Rest" />
        <CalDay type="push" num="29" focus="Push" core="+ Core" />
        <CalDay type="pull" num="30" focus="Pull" core="+ Core" />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
      </div>
    </>
  )
}
