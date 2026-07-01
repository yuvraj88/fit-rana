const calGrads = {
  push:   'linear-gradient(135deg,rgba(255,107,53,0.35),rgba(192,57,43,0.35))',
  pull:   'linear-gradient(135deg,rgba(71,201,255,0.35),rgba(14,90,138,0.35))',
  legs:   'linear-gradient(135deg,rgba(167,139,250,0.35),rgba(91,33,182,0.35))',
  hiit:   'linear-gradient(135deg,rgba(232,255,71,0.35),rgba(156,163,0,0.35))',
  upper:  'linear-gradient(135deg,rgba(74,222,128,0.35),rgba(21,128,61,0.35))',
  active: 'linear-gradient(135deg,rgba(249,168,77,0.35),rgba(201,123,10,0.35))',
  run:    'linear-gradient(135deg,rgba(0,212,170,0.35),rgba(0,150,120,0.35))',
  taper:  'linear-gradient(135deg,rgba(148,163,184,0.25),rgba(100,116,139,0.25))',
  race:   'linear-gradient(135deg,rgba(245,158,11,0.4),rgba(217,119,6,0.4))',
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
      <div className="section-title"><span className="icon">📅</span> August 2026 — Shred + Race Build <div className="line"></div></div>
      <div style={{background:'rgba(255,107,53,0.06)',border:'1px solid rgba(255,107,53,0.25)',borderRadius:'10px',padding:'12px 16px',fontSize:'12px',marginBottom:'12px'}}>
        🔥 <strong style={{color:'var(--accent2)'}}>Month 3 — Shred + Run Peak:</strong> Carb cycling kicks in. Run 3×/week — intervals, tempo, and a long run. Peak week is Aug 17–23 (run 4.5–5K). Taper starts Aug 24 — reduce volume, protect the body for race day.
      </div>
      <div style={{background:'rgba(0,212,170,0.06)',border:'1px solid rgba(0,212,170,0.25)',borderRadius:'10px',padding:'10px 16px',fontSize:'12px',marginBottom:'16px'}}>
        🏃 <strong style={{color:'#00d4aa'}}>August Running Plan:</strong> Week 1–2: build to 4K · Week 3: peak 5K long run · Week 4: taper (cut mileage 40%) · Sep 1–5: race week (easy jogs only)
      </div>
      <div className="legend">
        <div className="legend-item"><div className="legend-dot" style={{background:'#ff6b35'}}></div> Push</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#47c9ff'}}></div> Pull</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#a78bfa'}}></div> Legs</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#e8ff47'}}></div> HIIT</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#4ade80'}}></div> Upper Body</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#00d4aa'}}></div> Run Training 🏃</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#94a3b8'}}></div> Taper</div>
        <div className="legend-item"><div className="legend-dot" style={{background:'#f59e0b'}}></div> Race Day 🏁</div>
      </div>
      <div className="cal-grid">
        <div className="cal-day-label">SUN</div>
        <div className="cal-day-label">MON</div>
        <div className="cal-day-label">TUE</div>
        <div className="cal-day-label">WED</div>
        <div className="cal-day-label">THU</div>
        <div className="cal-day-label">FRI</div>
        <div className="cal-day-label">SAT</div>

        {/* Aug 1 = Sat */}
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay type="run" num="1" focus="Easy Run 3.5K" core="warm up week" />

        {/* Week 1: Aug 2–8 */}
        <CalDay type="rest" num="2" focus="Rest" />
        <CalDay type="push" num="3" focus="Push" core="+ Core" />
        <CalDay type="run" num="4" focus="Run Intervals" core="500m × 6" />
        <CalDay type="legs" num="5" focus="Legs" core="+ Core" />
        <CalDay type="pull" num="6" focus="Pull" core="+ Core" />
        <CalDay type="hiit" num="7" focus="HIIT + Core" core="20 min" />
        <CalDay type="run" num="8" focus="Long Run 4K" core="easy pace" />

        {/* Week 2: Aug 9–15 */}
        <CalDay type="active" num="9" focus="Walk + Stretch" />
        <CalDay type="rest" num="10" focus="Rest" />
        <CalDay type="push" num="11" focus="Push" core="+ Core" />
        <CalDay type="run" num="12" focus="Tempo Run 3K" core="fast pace" />
        <CalDay type="legs" num="13" focus="Legs" core="+ Core" />
        <CalDay type="pull" num="14" focus="Pull" core="+ Core" />
        <CalDay type="run" num="15" focus="Long Run 4.5K" core="easy pace" />

        {/* Week 3: Aug 16–22 — PEAK WEEK */}
        <CalDay type="hiit" num="16" focus="HIIT + Core" core="25 min" />
        <CalDay type="rest" num="17" focus="Rest" />
        <CalDay type="push" num="18" focus="Push" core="+ Core" />
        <CalDay type="run" num="19" focus="Tempo Run 3.5K" core="race pace" />
        <CalDay type="legs" num="20" focus="Legs" core="+ Core" />
        <CalDay type="pull" num="21" focus="Pull" core="+ Core" />
        <CalDay type="run" num="22" focus="Peak Run 5K 🎯" core="race simulation" />

        {/* Week 4: Aug 23–29 — TAPER begins */}
        <CalDay type="taper" num="23" focus="Taper: Rest" />
        <CalDay type="taper" num="24" focus="Taper: Light Lift" core="50% weight" />
        <CalDay type="run" num="25" focus="Easy Run 3K" core="slow & easy" />
        <CalDay type="taper" num="26" focus="Taper: Rest" />
        <CalDay type="taper" num="27" focus="Taper: Light Lift" core="50% weight" />
        <CalDay type="run" num="28" focus="Easy Run 2K" core="very easy" />
        <CalDay type="taper" num="29" focus="Taper: Stretch" />

        {/* Week 5: Aug 30–31 */}
        <CalDay type="taper" num="30" focus="Taper: Walk" core="10 min easy" />
        <CalDay type="taper" num="31" focus="Rest + Hydrate" core="carb load prep" />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
        <CalDay empty />
      </div>

      {/* Sep 1–6 Race Week */}
      <div style={{marginTop:'28px'}}>
        <div className="section-title" style={{fontSize:'24px'}}><span className="icon">🏁</span> September 2026 — Race Week <div className="line"></div></div>
        <div style={{background:'rgba(245,158,11,0.06)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'10px',padding:'12px 16px',fontSize:'12px',marginBottom:'16px'}}>
          🏆 <strong style={{color:'#f59e0b'}}>Race Week Protocol:</strong> No heavy lifting. Light jogs only. Carb load Sep 5. Sleep 8+ hrs every night. Race day Sep 6 — trust your training.
        </div>
        <div className="cal-grid">
          <div className="cal-day-label">SUN</div>
          <div className="cal-day-label">MON</div>
          <div className="cal-day-label">TUE</div>
          <div className="cal-day-label">WED</div>
          <div className="cal-day-label">THU</div>
          <div className="cal-day-label">FRI</div>
          <div className="cal-day-label">SAT</div>

          {/* Sep 1 = Tue */}
          <CalDay empty />
          <CalDay empty />
          <CalDay type="run" num="1" focus="Easy Jog 2K" core="legs fresh" />
          <CalDay type="taper" num="2" focus="Rest + Stretch" core="no weights" />
          <CalDay type="run" num="3" focus="Shake-out 1K" core="very easy" />
          <CalDay type="taper" num="4" focus="Rest + Carb Load" core="pasta/rice + sleep" />
          <CalDay type="taper" num="5" focus="Rest + Prep" core="sleep early 9pm" />

          <CalDay type="race" num="6" focus="🏁 RACE DAY!" core="5KM — GO!" />
          <CalDay empty />
          <CalDay empty />
          <CalDay empty />
          <CalDay empty />
          <CalDay empty />
          <CalDay empty />
        </div>
      </div>

      <div style={{textAlign:'center',marginTop:'20px',padding:'20px',background:'rgba(245,158,11,0.08)',border:'2px solid rgba(245,158,11,0.4)',borderRadius:'12px'}}>
        🏆 <strong style={{color:'#f59e0b',fontSize:'16px'}}>September 6, 2026 — Race Day!</strong>
        <br /><br />
        <span style={{fontSize:'13px',color:'var(--text)'}}>Target: <strong style={{color:'var(--green)'}}>74 kg · Visible Abs · 5KM Finisher 🎽</strong></span>
        <br />
        <span style={{fontSize:'12px',color:'var(--muted)',marginTop:'8px',display:'block'}}>You trained for 97 days. Every run, every rep, every meal brought you here. Now go show up.</span>
      </div>
    </>
  )
}
