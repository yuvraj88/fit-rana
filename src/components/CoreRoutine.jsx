export default function CoreRoutine() {
  return (
    <>
      <div className="section-title"><span className="icon">🔥</span> Daily Core Routine (15–18 min) <div className="line"></div></div>
      <div className="card">
        <div className="card-title">Do this at the END of every workout session</div>
        <div className="exercise-row">
          <div className="exercise-num">01</div>
          <div className="exercise-img" style={{background:'#1a1a2e',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',flexShrink:0}}>🐛</div>
          <div className="exercise-info">
            <div className="exercise-name">Dead Bug</div>
            <div className="exercise-tip">Arms up, lower opposite arm + leg slowly. Protects lower back.</div>
          </div>
          <div className="exercise-sets">3 × 12 reps<br/><span style={{color:'var(--muted)',fontSize:'10px'}}>30s rest</span></div>
        </div>
        <div className="exercise-row">
          <div className="exercise-num">02</div>
          <div className="exercise-img" style={{background:'#0f3460',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',flexShrink:0}}>🧱</div>
          <div className="exercise-info">
            <div className="exercise-name">Plank (Hold)</div>
            <div className="exercise-tip">Elbows under shoulders. Don't let hips sag or rise.</div>
          </div>
          <div className="exercise-sets">3 × 45 sec<br/><span style={{color:'var(--muted)',fontSize:'10px'}}>30s rest</span></div>
        </div>
        <div className="exercise-row">
          <div className="exercise-num">03</div>
          <div className="exercise-img" style={{background:'#1a2e1a',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',flexShrink:0}}>🚴</div>
          <div className="exercise-info">
            <div className="exercise-name">Bicycle Crunches</div>
            <div className="exercise-tip">Slow and controlled. Don't yank your neck.</div>
          </div>
          <div className="exercise-sets">3 × 20 reps<br/><span style={{color:'var(--muted)',fontSize:'10px'}}>30s rest</span></div>
        </div>
        <div className="exercise-row">
          <div className="exercise-num">04</div>
          <div className="exercise-img" style={{background:'#2e1a1a',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',flexShrink:0}}>🦵</div>
          <div className="exercise-info">
            <div className="exercise-name">Hanging / Lying Leg Raises</div>
            <div className="exercise-tip">Lower slowly (3 sec). Lower abs + hip flexors.</div>
          </div>
          <div className="exercise-sets">3 × 15 reps<br/><span style={{color:'var(--muted)',fontSize:'10px'}}>30s rest</span></div>
        </div>
        <div className="exercise-row">
          <div className="exercise-num">05</div>
          <div className="exercise-img" style={{background:'#1a2e2e',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',flexShrink:0}}>🏃</div>
          <div className="exercise-info">
            <div className="exercise-name">Mountain Climbers</div>
            <div className="exercise-tip">Fast pace. Great for cardio + core combo.</div>
          </div>
          <div className="exercise-sets">3 × 30 sec<br/><span style={{color:'var(--muted)',fontSize:'10px'}}>30s rest</span></div>
        </div>
      </div>
      <div style={{background:'rgba(232,255,71,0.06)',border:'1px solid rgba(232,255,71,0.2)',borderRadius:'10px',padding:'14px 18px',fontSize:'13px',color:'var(--text)',marginTop:'8px'}}>
        ⚡ <strong>The truth about abs:</strong> Your core routine builds the muscle. Your calorie deficit reveals it. Both are essential — one without the other won't get you there.
      </div>
    </>
  )
}
