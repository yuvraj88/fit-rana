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

export default function JulyCalendar() {
  return (
    <>
      <div className="section-title"><span className="icon">📅</span> July 2026 — Workout Calendar <div className="line"></div></div>
      <div style={{background:'rgba(232,255,71,0.06)',border:'1px solid rgba(232,255,71,0.2)',borderRadius:'10px',padding:'12px 16px',fontSize:'12px',marginBottom:'16px'}}>
        ⚡ <strong style={{color:'var(--accent)'}}>Month 2 — Intensity Phase:</strong> Add progressive overload (heavier weights each week). HIIT increases to 2×/week. Core work gets harder with cable/resistance band variations.
      </div>
      <div className="legend">
        <div className="legend-item"><div className="legend-dot" style={{background:'#ff6b35'}}></div> Push</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#47c9ff'}}></div> Pull</div>
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
        <CalDay empty />
        <CalDay empty />
        <CalDay type="push" num="1" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="2" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="3" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="4" focus="Walk / Yoga" />

        <CalDay type="rest" num="5" focus="Rest" />
        <CalDay type="pull" num="6" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="7" focus="Legs" core="+ Core" />
        <CalDay type="push" num="8" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="9" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="10" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="11" focus="Walk / Yoga" />

        <CalDay type="rest" num="12" focus="Rest" />
        <CalDay type="pull" num="13" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="14" focus="Legs" core="+ Core" />
        <CalDay type="push" num="15" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="16" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="17" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="18" focus="Walk / Yoga" />

        <CalDay type="rest" num="19" focus="Rest" />
        <CalDay type="pull" num="20" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="21" focus="Legs" core="+ Core" />
        <CalDay type="push" num="22" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="23" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="24" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="25" focus="Walk / Yoga" />

        <CalDay type="rest" num="26" focus="Rest" />
        <CalDay type="pull" num="27" focus="Pull" core="+ Core" />
        <CalDay type="legs" num="28" focus="Legs" core="+ Core" />
        <CalDay type="push" num="29" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="30" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="31" focus="Full Upper" core="+ Core" />
        <CalDay empty />
      </div>
    </>
  )
}
