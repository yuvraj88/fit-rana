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

export default function AugustCalendar() {
  return (
    <>
      <div className="section-title"><span className="icon">📅</span> August 2026 — Workout Calendar <div className="line"></div></div>
      <div style={{background:'rgba(255,107,53,0.06)',border:'1px solid rgba(255,107,53,0.25)',borderRadius:'10px',padding:'12px 16px',fontSize:'12px',marginBottom:'16px'}}>
        🔥 <strong style={{color:'var(--accent2)'}}>Month 3 — Shred Phase:</strong> HIIT goes to 3×/week. Introduce carb cycling (reduce carbs on rest days). Add stomach vacuum exercise daily for deep core. Abs start becoming visible this month.
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
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay type="active" num="1" focus="Walk / Yoga" />

        <CalDay type="rest" num="2" focus="Rest" />
        <CalDay type="push" num="3" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="4" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="legs" num="5" focus="Legs" core="+ Core" />
        <CalDay type="pull" num="6" focus="Pull" core="+ Core" />
        <CalDay type="hiit" num="7" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="8" focus="Full Upper" core="+ Core" />

        <CalDay type="active" num="9" focus="Walk / Yoga" />
        <CalDay type="rest" num="10" focus="Rest" />
        <CalDay type="push" num="11" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="12" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="legs" num="13" focus="Legs" core="+ Core" />
        <CalDay type="pull" num="14" focus="Pull" core="+ Core" />
        <CalDay type="hiit" num="15" focus="HIIT Cardio" core="+ Core" />

        <CalDay type="upper" num="16" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="17" focus="Walk / Yoga" />
        <CalDay type="rest" num="18" focus="Rest" />
        <CalDay type="push" num="19" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="20" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="legs" num="21" focus="Legs" core="+ Core" />
        <CalDay type="pull" num="22" focus="Pull" core="+ Core" />

        <CalDay type="hiit" num="23" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="upper" num="24" focus="Full Upper" core="+ Core" />
        <CalDay type="active" num="25" focus="Walk / Yoga" />
        <CalDay type="rest" num="26" focus="Rest" />
        <CalDay type="push" num="27" focus="Push" core="+ Core" />
        <CalDay type="hiit" num="28" focus="HIIT Cardio" core="+ Core" />
        <CalDay type="legs" num="29" focus="Legs" core="+ Core" />

        <CalDay type="pull" num="30" focus="Pull" core="+ Core" />
        <CalDay type="upper" num="31" focus="Full Upper 🏁" core="+ Core" />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
      </div>
      <div style={{textAlign:'center',marginTop:'16px',padding:'16px',background:'rgba(232,255,71,0.06)',border:'1px solid rgba(232,255,71,0.2)',borderRadius:'10px'}}>
        🏆 <strong style={{color:'var(--accent)'}}>September 1, 2026 — Goal Complete!</strong> &nbsp;·&nbsp; Target: <strong style={{color:'var(--green)'}}>74 kg · Visible Abs · 90 Days Strong</strong>
      </div>
    </>
  )
}
