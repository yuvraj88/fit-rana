export default function Roadmap() {
  return (
    <>
      <div className="section-title"><span className="icon">🗺️</span> 4-Month Roadmap <div className="line"></div></div>
      <div className="phases" style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
        <div className="phase phase-1">
          <div className="phase-content">
            <div className="phase-num">01</div>
            <div className="phase-month">JUNE — Foundation</div>
            <div className="phase-focus">Build the habit. Lock in form. Enter consistent calorie deficit.</div>
            <div className="phase-target">Target: <span>−2.5 kg</span></div>
          </div>
        </div>
        <div className="phase phase-2">
          <div className="phase-content">
            <div className="phase-num">02</div>
            <div className="phase-month">JULY — Intensity + Run</div>
            <div className="phase-focus">Progressive overload. HIIT 2×/week. Begin run intervals — 2 sessions/week building to 3K.</div>
            <div className="phase-target">Target: <span>−2 kg · 3K comfortable</span></div>
          </div>
        </div>
        <div className="phase phase-3">
          <div className="phase-content">
            <div className="phase-num">03</div>
            <div className="phase-month">AUG — Shred + Run Build</div>
            <div className="phase-focus">Carb cycling. Run 3×/week — intervals + tempo + long run up to 5K. Abs visible this month.</div>
            <div className="phase-target">Target: <span>−1.5 kg · 5K ready</span></div>
          </div>
        </div>
        <div className="phase" style={{borderTop:'3px solid #f59e0b'}}>
          <div className="phase-content">
            <div className="phase-num" style={{color:'rgba(245,158,11,0.3)'}}>04</div>
            <div className="phase-month" style={{color:'#f59e0b'}}>SEP 1–6 — Race Week</div>
            <div className="phase-focus">Taper. Light runs only. Carb load Sep 5. Race day Sep 6 — run your 5K strong.</div>
            <div className="phase-target" style={{background:'rgba(245,158,11,0.1)'}}>Target: <span style={{color:'#f59e0b'}}>🏁 Finish 5KM Race</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
