export default function WaterSchedule() {
  return (
    <>
      <div className="section-title"><span className="icon">💧</span> Daily Water Schedule <div className="line"></div></div>
      <div style={{background:'rgba(71,201,255,0.08)',border:'1px solid rgba(71,201,255,0.25)',borderRadius:'10px',padding:'12px 16px',fontSize:'12px',marginBottom:'14px'}}>
        💊 <strong style={{color:'#47c9ff'}}>Creatine Note:</strong> Take 5g creatine mixed in your post-workout water (500ml). Creatine pulls water into muscles — this is why your intake goes up to <strong>3.8L+</strong>. You may notice slight weight gain (0.5–1kg) in week 1 — this is water in muscles, not fat. Don't panic.
      </div>
      <div className="card">
        <div className="water-row">
          <div className="water-time">Wake up (6 AM)</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'71%'}}></div></div>
          <div className="water-amt">500ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Before breakfast</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'35%'}}></div></div>
          <div className="water-amt">250ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Mid-morning</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'71%'}}></div></div>
          <div className="water-amt">500ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Before lunch</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'35%'}}></div></div>
          <div className="water-amt">250ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Afternoon</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'71%'}}></div></div>
          <div className="water-amt">500ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Pre-workout</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'50%'}}></div></div>
          <div className="water-amt">350ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Post-workout 💊 +5g Creatine</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'85%'}}></div></div>
          <div className="water-amt" style={{color:'#47c9ff'}}>600ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Evening / dinner</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'57%'}}></div></div>
          <div className="water-amt">400ml</div>
        </div>
        <div className="water-row">
          <div className="water-time">Before bed</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'35%'}}></div></div>
          <div className="water-amt">250ml</div>
        </div>
      </div>
      <div style={{fontSize:'12px',color:'var(--muted)',marginTop:'-8px',padding:'0 4px'}}>
        💡 Add a pinch of Himalayan salt to your morning 500ml — helps electrolytes. Total: <strong style={{color:'#47c9ff'}}>~3.6L on rest days · ~3.8–4L on workout days</strong>
      </div>
    </>
  )
}
