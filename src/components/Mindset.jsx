export default function Mindset() {
  return (
    <>
      <div className="section-title"><span className="icon">🧠</span> Mindset &amp; Motivation <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>The plan is 30% physical, 70% mental. Most people quit at week 3 — know what's coming so you don't.</div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))',gap:'16px',marginBottom:'24px'}}>
        <div className="card" style={{borderTop:'3px solid var(--accent3)'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:'var(--accent3)',marginBottom:'8px'}}>🔄 Scale Plateau? Do This</div>
          <ul className="meal-items">
            <li>Reduce carbs by 20g for 1 week (skip rice at lunch)</li>
            <li>Add 10 min extra HIIT to 2 sessions</li>
            <li>Check sodium intake — excess causes water retention</li>
            <li>Measure waist — fat loss continues even when scale stalls</li>
          </ul>
        </div>

        <div className="card" style={{borderTop:'3px solid var(--accent)'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:'var(--accent)',marginBottom:'8px'}}>🍕 Cheat Meal Rules</div>
          <ul className="meal-items">
            <li>1 cheat meal per week max — not a cheat day</li>
            <li>Schedule it (Saturday lunch works best)</li>
            <li>Eat what you want, but stop at one plate</li>
            <li>Train before the cheat meal — muscles absorb more</li>
            <li>Back to plan immediately — no guilt spiral</li>
          </ul>
        </div>

        <div className="card" style={{borderTop:'3px solid var(--accent2)'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:'var(--accent2)',marginBottom:'8px'}}>✈️ Travelling / Social Eating</div>
          <ul className="meal-items">
            <li>Always eat protein first at any meal</li>
            <li>Choose dal + sabzi over biryani or pasta</li>
            <li>Skip starters, eat main course mindfully</li>
            <li>Water before every meal — kills 20% of hunger</li>
            <li>1 missed workout = not a failure, just continue</li>
          </ul>
        </div>

        <div className="card" style={{borderTop:'3px solid var(--green)'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:'var(--green)',marginBottom:'8px'}}>🏆 Milestone Rewards</div>
          <ul className="meal-items">
            <li>−1 kg: New workout gear or shoes</li>
            <li>−2 kg: Book a spa or massage session</li>
            <li>−3 kg: New outfit in target size</li>
            <li>−5 kg: Weekend trip or experience</li>
            <li>Goal reached: Whatever you've been dreaming of 🎯</li>
          </ul>
        </div>
      </div>

      <div style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'12px',padding:'20px',textAlign:'center'}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'36px',color:'var(--accent)',lineHeight:'1',marginBottom:'8px'}}>"THE SCALE MEASURES GRAVITY.<br/>NOT YOUR PROGRESS."</div>
        <div style={{fontSize:'12px',color:'var(--muted)'}}>Track energy levels, strength gains, how clothes fit, and waist measurements — not just the number on the scale.</div>
      </div>
    </>
  )
}
