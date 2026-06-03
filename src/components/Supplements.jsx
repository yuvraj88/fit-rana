export default function Supplements() {
  return (
    <>
      <div className="section-title"><span className="icon">💊</span> Supplement Guide <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>At 37 with a desk job, these supplements fill the gaps your diet alone can't cover. Keep it simple — no exotic pills needed.</div>

      <div className="meal-grid">
        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#e8ff47,#9ca300)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>⚡</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(0,0,0,0.8)',letterSpacing:'0.1em'}}>CREATINE · DAILY</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Post-workout in 600ml water</div><div className="meal-name">Creatine Monohydrate</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val pro">5g</div><div className="macro-label">daily</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>5g/day — no loading phase needed</li>
              <li>Take post-workout with 600ml water always</li>
              <li>On rest days: take with morning meal</li>
              <li>Expect 0.5–1kg water weight gain in Week 1 — normal</li>
              <li>Increases strength by 10–15% within 4 weeks</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f7971e,#ffd200)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🥛</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(0,0,0,0.8)',letterSpacing:'0.1em'}}>WHEY PROTEIN</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Post-workout or mid-morning</div><div className="meal-name">Whey Protein Isolate</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val pro">25g</div><div className="macro-label">per scoop</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 scoop (25–30g protein) post-workout</li>
              <li>Choose isolate over concentrate — less bloating</li>
              <li>Mix in water, not milk — saves 80 kcal</li>
              <li>Skip on days you hit 132g protein from food</li>
              <li>Best brands: Optimum Nutrition, MuscleBlaze Biozyme</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f9d423,#e8890a)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>☀️</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>VITAMIN D3 + K2</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">With breakfast · Daily</div><div className="meal-name">Vitamin D3 + K2</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val pro">2000</div><div className="macro-label">IU/day</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>2000–4000 IU D3 daily — desk job = low sun exposure</li>
              <li>Always pair with K2 (100mcg) for absorption</li>
              <li>D3 deficiency directly causes belly fat accumulation</li>
              <li>Take with a fatty meal (breakfast or lunch)</li>
              <li>Critical at 37 — testosterone and fat loss both depend on it</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#4facfe,#00f2fe)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🐟</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>OMEGA-3</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">With lunch · Daily</div><div className="meal-name">Omega-3 Fish Oil</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val pro">1g</div><div className="macro-label">EPA+DHA</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1000mg EPA+DHA daily (check label, not just fish oil mg)</li>
              <li>Directly reduces visceral (belly) fat</li>
              <li>Reduces inflammation from desk sitting</li>
              <li>Take with lunch to avoid fish burps</li>
              <li>Vegetarian alt: Algae-based Omega-3 capsules</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#a18cd1,#fbc2eb)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🌙</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>MAGNESIUM</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Before bed · Daily</div><div className="meal-name">Magnesium Glycinate</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val pro">300</div><div className="macro-label">mg/day</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>300–400mg magnesium glycinate before bed</li>
              <li>Improves deep sleep quality — critical for fat loss</li>
              <li>Reduces muscle cramps from heavy training</li>
              <li>Lowers cortisol — directly shrinks belly fat</li>
              <li>Most Indians are deficient — especially desk workers</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#ff6b35,#c0392b)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🚫</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>AVOID THESE</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Not needed · Save your money</div><div className="meal-name">Supplements to Skip</div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>❌ Fat burners — raise heart rate, not worth it</li>
              <li>❌ Pre-workouts with sugar — spikes insulin</li>
              <li>❌ Mass gainers — opposite of your goal</li>
              <li>❌ BCAAs — covered by your whey + food protein</li>
              <li>❌ Detox teas — no evidence, often harmful</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
