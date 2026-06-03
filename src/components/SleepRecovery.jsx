export default function SleepRecovery() {
  return (
    <>
      <div className="section-title"><span className="icon">😴</span> Sleep &amp; Recovery Guide <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>At 37, recovery IS training. Poor sleep adds 2–3x more belly fat regardless of how well you eat or train.</div>

      <div className="rules-grid">
        <div className="rule-card">
          <div className="rule-icon">🕙</div>
          <div><div className="rule-title">Sleep Window: 10 PM – 6 AM</div><div className="rule-desc">Your body burns fat and builds muscle between 10 PM–2 AM during deep sleep. Missing this window means missed results.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">📱</div>
          <div><div className="rule-title">Screens Off by 9:30 PM</div><div className="rule-desc">Blue light suppresses melatonin by 50%. Switch to dark mode at 8 PM. Phone out of bedroom entirely.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🌡️</div>
          <div><div className="rule-title">Cool Room = Better Fat Burn</div><div className="rule-desc">Sleeping in a cooler room (18–20°C) activates brown fat, which burns calories passively overnight.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🧘</div>
          <div><div className="rule-title">5-Min Pre-Sleep Stretch</div><div className="rule-desc">Hip flexor stretch + child's pose + spinal twist. Reverses 8 hrs of desk sitting. Signals nervous system to recover.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">⚠️</div>
          <div><div className="rule-title">Signs of Overtraining</div><div className="rule-desc">Persistent fatigue, irritability, plateau in lifts, poor sleep, constant soreness — take 2 full rest days immediately.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🏖️</div>
          <div><div className="rule-title">Rest Days Are Not Cheat Days</div><div className="rule-desc">Rest days = muscle repair + fat loss consolidation. Keep eating clean, keep water intake up, go for a 30-min walk.</div></div>
        </div>
      </div>

      <div style={{background:'rgba(161,139,250,0.06)',border:'1px solid rgba(161,139,250,0.2)',borderRadius:'10px',padding:'16px',marginTop:'4px'}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'#a78bfa',marginBottom:'8px'}}>⚡ Ideal Evening Routine (9–10 PM)</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
          <span style={{background:'rgba(161,139,250,0.1)',border:'1px solid rgba(161,139,250,0.2)',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}>9:00 PM — Last meal done</span>
          <span style={{background:'rgba(161,139,250,0.1)',border:'1px solid rgba(161,139,250,0.2)',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}>9:15 PM — Turmeric milk</span>
          <span style={{background:'rgba(161,139,250,0.1)',border:'1px solid rgba(161,139,250,0.2)',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}>9:30 PM — Screens off</span>
          <span style={{background:'rgba(161,139,250,0.1)',border:'1px solid rgba(161,139,250,0.2)',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}>9:45 PM — 5-min stretch</span>
          <span style={{background:'rgba(161,139,250,0.1)',border:'1px solid rgba(161,139,250,0.2)',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}>10:00 PM — Lights out</span>
        </div>
      </div>
    </>
  )
}
