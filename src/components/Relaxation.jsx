export default function Relaxation() {
  return (
    <>
      <div className="section-title"><span className="icon">🧘</span> Relaxation &amp; Stress Management <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>High stress = high cortisol = stubborn belly fat. Relaxation is not laziness — it's a direct fat-loss strategy.</div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent3)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>🌬️ Breathing Techniques — 2–5 min, Anytime</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))',gap:'12px',marginBottom:'28px'}}>
        <div className="card" style={{borderTop:'3px solid var(--accent3)'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:'var(--accent3)',marginBottom:'8px'}}>📦 Box Breathing — Desk Stress</div>
          <ul className="meal-items">
            <li>Inhale 4 sec → Hold 4 sec → Exhale 4 sec → Hold 4 sec</li>
            <li>Repeat 4 cycles — takes under 2 minutes</li>
            <li>Instantly lowers heart rate and cortisol</li>
            <li>Best: mid-morning and post-lunch at your desk</li>
          </ul>
        </div>
        <div className="card" style={{borderTop:'3px solid #a78bfa'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:'#a78bfa',marginBottom:'8px'}}>🌙 4-7-8 Breathing — Before Sleep</div>
          <ul className="meal-items">
            <li>Inhale 4 sec → Hold 7 sec → Exhale 8 sec</li>
            <li>3–4 cycles before bed only</li>
            <li>Triggers parasympathetic (rest &amp; digest) mode</li>
            <li>Drops heart rate within 60 seconds</li>
          </ul>
        </div>
      </div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>🛁 Physical Relaxation</div>
      <div className="rules-grid" style={{marginBottom:'28px'}}>
        <div className="rule-card">
          <div className="rule-icon">🚿</div>
          <div><div className="rule-title">Cold-Warm Shower Contrast</div><div className="rule-desc">End every post-workout shower with 30 sec cold water. Reduces inflammation, boosts dopamine by 250%.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🛁</div>
          <div><div className="rule-title">Epsom Salt Bath (2×/week)</div><div className="rule-desc">2 cups Epsom salt in warm bath, soak 20 min. Magnesium absorbs through skin — reduces soreness and anxiety directly.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🔵</div>
          <div><div className="rule-title">Foam Rolling (5–10 min)</div><div className="rule-desc">IT band, quads, upper back after every workout. Breaks up muscle knots from 8 hrs of desk sitting.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🖥️</div>
          <div><div className="rule-title">2-Min Desk Reset (every 2 hrs)</div><div className="rule-desc">Close eyes, drop shoulders, unclench jaw. 5 deep breaths, look at something green. Resets nervous system mid-day.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">📓</div>
          <div><div className="rule-title">5-Min Journalling (Night)</div><div className="rule-desc">Write 3 things that went well today. Shifts brain from threat mode to gratitude. Measurably lowers cortisol before sleep.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🌿</div>
          <div><div className="rule-title">Saturday Nature Walk (30 min)</div><div className="rule-desc">Active recovery day — walk in a park, no earphones. 20 min in green space drops cortisol by 21%. Let your mind wander.</div></div>
        </div>
      </div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent2)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>🎵 Mental &amp; Passive Relaxation</div>
      <div className="rules-grid" style={{marginBottom:'28px'}}>
        <div className="rule-card">
          <div className="rule-icon">🎧</div>
          <div><div className="rule-title">Binaural Beats / Brown Noise</div><div className="rule-desc">Play during focus work or before sleep. 432 Hz music reduces anxiety measurably. Apps: Endel, Brain.fm.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">📵</div>
          <div><div className="rule-title">Digital Detox Windows</div><div className="rule-desc">No social media 6–7 AM and 9–10 PM. Morning scrolling spikes anxiety. Evening scrolling delays sleep by 45–60 min.</div></div>
        </div>
        <div className="rule-card">
          <div className="rule-icon">🌿</div>
          <div><div className="rule-title">Ashwagandha (Optional)</div><div className="rule-desc">300mg with dinner. Clinically reduces cortisol by 27% in 8 weeks. Best addition to your supplement stack at 37.</div></div>
        </div>
      </div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--green)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>📅 Daily Relaxation Micro-Schedule</div>
      <div className="card" style={{marginBottom:'24px'}}>
        <div className="water-row">
          <div className="water-time">6:00 AM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'30%',background:'linear-gradient(90deg,#47c9ff,#0e5a8a)'}}></div></div>
          <div className="drink-label">🌬️ Box breathing before workout (2 min)</div>
        </div>
        <div className="water-row">
          <div className="water-time">10:30 AM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'25%',background:'linear-gradient(90deg,#56ab2f,#a8e063)'}}></div></div>
          <div className="drink-label">🖥️ Desk reset + deep breaths (2 min)</div>
        </div>
        <div className="water-row">
          <div className="water-time">1:00 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'50%',background:'linear-gradient(90deg,#f9d423,#f83600)'}}></div></div>
          <div className="drink-label">☀️ Step outside after lunch (10 min)</div>
        </div>
        <div className="water-row">
          <div className="water-time">4:30 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'40%',background:'linear-gradient(90deg,#134e5e,#71b280)'}}></div></div>
          <div className="drink-label">🍵 Green tea + full screen break (10 min)</div>
        </div>
        <div className="water-row">
          <div className="water-time">7:00 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'55%',background:'linear-gradient(90deg,#a18cd1,#fbc2eb)'}}></div></div>
          <div className="drink-label">🔵 Foam rolling + light stretch (10 min)</div>
        </div>
        <div className="water-row">
          <div className="water-time">9:30 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'35%',background:'linear-gradient(90deg,#f7c59f,#e08e45)'}}></div></div>
          <div className="drink-label">📓 Journalling + 4-7-8 breathing (5 min)</div>
        </div>
        <div className="water-row" style={{borderBottom:'none'}}>
          <div className="water-time">10:00 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'100%',background:'linear-gradient(90deg,#2c3e50,#4a5568)'}}></div></div>
          <div className="drink-label">🌙 Lights out — dark, cool room</div>
        </div>
      </div>

      <div style={{background:'rgba(255,68,68,0.04)',border:'1px solid rgba(255,68,68,0.2)',borderRadius:'12px',padding:'16px'}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'#ff4444',marginBottom:'10px'}}>🚫 What Kills Relaxation</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'8px'}}>
          <div style={{fontSize:'12px'}}>❌ Work emails after 8 PM</div>
          <div style={{fontSize:'12px'}}>❌ Doomscrolling news before bed</div>
          <div style={{fontSize:'12px'}}>❌ Caffeine after 3 PM (stays 6–8 hrs)</div>
          <div style={{fontSize:'12px'}}>❌ Heavy meals after 8 PM</div>
          <div style={{fontSize:'12px'}}>❌ Weekend lie-ins past 8 AM</div>
          <div style={{fontSize:'12px'}}>❌ Skipping rest days to "catch up"</div>
        </div>
      </div>

      <div style={{marginTop:'28px'}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>🥒 Bonus: Pickle Juice — The Underrated Recovery Drink</div>
        <div className="meal-grid">
          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#3a6b35,#a8e063)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'32px'}}>🥒</span>
              <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>PICKLE JUICE</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">Post-workout or before lunch · 60–90ml</div><div className="meal-name">Naturally Fermented Pickle Brine</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">~5</div><div className="macro-label">kcal</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>⚡ <strong>Cramp relief</strong> — stops muscle cramps in 85 sec, faster than any sports drink</li>
                <li>🧂 <strong>Electrolytes</strong> — sodium, potassium, magnesium all in one shot</li>
                <li>🦠 <strong>Gut health</strong> — lactobacillus probiotics from fermentation reduce bloating</li>
                <li>📉 <strong>Blood sugar</strong> — reduces post-meal spike by up to 49% (massive for fat loss)</li>
                <li>💪 <strong>Recovery</strong> — acetic acid reduces soreness, improves glycogen replenishment</li>
                <li>✅ <strong>Dose:</strong> 60–90ml (3–4 tbsp) — naturally fermented only, not vinegar-based</li>
                <li>⚠️ <strong>Avoid if:</strong> you have high blood pressure — sodium content is significant</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f9d423,#56ab2f)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'28px'}}>🏠</span>
              <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>MAKE YOUR OWN</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">Make Sunday · Lasts 2 weeks</div><div className="meal-name">Homemade Pickle Brine</div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>500ml water + 2 tbsp Himalayan salt</li>
                <li>2 tbsp apple cider vinegar (with mother)</li>
                <li>1 tsp jeera + ½ tsp black pepper</li>
                <li>Slice 2 cucumbers into brine</li>
                <li>Refrigerate 48 hrs before drinking the brine</li>
                <li>Drink 60ml shots post-workout or pre-lunch</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#ff6b35,#c0392b)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'28px'}}>🆚</span>
              <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>VS SPORTS DRINKS</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">Why pickle juice wins</div><div className="meal-name">Pickle Juice vs Packaged Sports Drinks</div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>✅ Zero sugar vs 30–50g sugar in sports drinks</li>
                <li>✅ Natural electrolytes vs synthetic additives</li>
                <li>✅ Probiotic benefit — sports drinks have none</li>
                <li>✅ ~5 kcal vs 150+ kcal per serving</li>
                <li>✅ Costs ₹10 vs ₹80–150 per bottle</li>
                <li>✅ Cramp relief is clinically faster</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:'rgba(232,255,71,0.06)',border:'1px solid rgba(232,255,71,0.2)',borderRadius:'12px',padding:'16px',marginTop:'16px',fontSize:'13px'}}>
        🧠 <strong style={{color:'var(--accent)'}}>The Big Picture:</strong> Relaxation + pickle juice + proper sleep + hydration = lower cortisol = faster belly fat loss. These aren't extras — they're core to your results. Every stressed, sleep-deprived day undoes 2 good workout days.
      </div>
    </>
  )
}
