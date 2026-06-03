export default function Drinks() {
  return (
    <>
      <div className="section-title"><span className="icon">🥤</span> Drinks — Hydration &amp; Electrolytes <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>All eggetarian-friendly, low-calorie, and belly-fat safe. Rotate daily for best results.</div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent3)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>💧 Daily Essentials — Drink Every Day</div>
      <div className="meal-grid" style={{marginBottom:'28px'}}>
        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f9d423,#f83600)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🍋</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>WARM LEMON WATER</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">6:00 AM · First thing</div><div className="meal-name">Warm Lemon Water</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~5</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>½ lemon juice in 500ml warm water</li>
              <li>Kickstarts metabolism + alkalizes the body</li>
              <li>Flushes cortisol (belly fat hormone)</li>
              <li>Add pinch Himalayan salt for electrolytes</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#56ab2f,#a8e063)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🥥</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>COCONUT WATER</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Post-workout or mid-morning</div><div className="meal-name">Fresh Coconut Water</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~45</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>Natural potassium, magnesium, sodium</li>
              <li>Best electrolyte drink — zero additives</li>
              <li>Always fresh tender coconut, not packaged</li>
              <li>Avoid flavoured/sweetened versions</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#c79037,#8b5e0a)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🌿</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>JEERA WATER</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Before lunch</div><div className="meal-name">Cumin (Jeera) Water</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~5</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 tsp jeera boiled in 500ml water, cooled</li>
              <li>Reduces bloating + aids digestion</li>
              <li>Directly targets belly fat accumulation</li>
              <li>Drink 20 min before meals</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>⚡ Electrolyte Drinks — Especially on Workout Days</div>
      <div className="meal-grid" style={{marginBottom:'28px'}}>
        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#4facfe,#00f2fe)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🧂</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>HOMEMADE ORS</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Post-workout · Best recovery drink</div><div className="meal-name">Homemade ORS</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~15</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>500ml water + pinch Himalayan salt</li>
              <li>Pinch of sugar + lemon juice</li>
              <li>Replenishes sodium + potassium lost in sweat</li>
              <li>Better than any commercial sports drink</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#a1c4fd,#c2e9fb)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🫧</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(0,50,100,0.8)',letterSpacing:'0.1em'}}>CHIA SEED WATER</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Afternoon · Slow-release hydration</div><div className="meal-name">Chia Seed Water</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~60</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 tbsp chia seeds soaked in 500ml water 20 min</li>
              <li>Add lemon juice + pinch salt</li>
              <li>Slow-release hydration — stays in system longer</li>
              <li>High omega-3 — directly reduces visceral fat</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#84fab0,#8fd3f4)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🌱</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(0,60,40,0.8)',letterSpacing:'0.1em'}}>SABJA COOLER</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Summer afternoon · Zero calories</div><div className="meal-name">Sabja (Basil Seed) Cooler</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~10</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 tsp sabja seeds soaked in 400ml water</li>
              <li>Add mint leaves + lemon juice</li>
              <li>Cools the body — great in summer heat</li>
              <li>Aids gut health, zero calories</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent2)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>🍵 Hot Drinks — Morning &amp; Evening</div>
      <div className="meal-grid" style={{marginBottom:'28px'}}>
        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#2c1a0e,#6f3a0a)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>☕</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>BLACK COFFEE</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">6:30 AM · Pre-workout</div><div className="meal-name">Black Coffee</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~5</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>Zero calories — no milk, no sugar, strictly black</li>
              <li>Boosts fat oxidation by ~11%</li>
              <li>Increases workout performance by 12–15%</li>
              <li>Drink 30 min before workout for best effect</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#134e5e,#71b280)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🍵</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>GREEN TEA</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">4–5 PM · Max 3 cups/day</div><div className="meal-name">Green Tea</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~5</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>EGCG compound directly targets belly fat</li>
              <li>2–3 cups daily, not after 6 PM (caffeine)</li>
              <li>Brew at 80°C — boiling water kills antioxidants</li>
              <li>No sugar, no milk — defeats the purpose</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f7c59f,#e08e45)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🌙</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>TURMERIC MILK</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Before bed · ~6g protein</div><div className="meal-name">Turmeric Milk (Haldi Doodh)</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~80</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">6g</div><div className="macro-label">protein</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>200ml warm low-fat milk + ½ tsp turmeric</li>
              <li>Pinch black pepper (activates curcumin 20x)</li>
              <li>Anti-inflammatory — reduces cortisol overnight</li>
              <li>Improves sleep quality + muscle recovery</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#ffb347,#ffcc33)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🫚</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(80,40,0,0.85)',letterSpacing:'0.1em'}}>GINGER LEMON TEA</span>
          </div>
          <div className="meal-header">
            <div><div className="meal-time">Any time · Thermogenic</div><div className="meal-name">Ginger Lemon Tea</div></div>
            <div className="meal-macros"><div className="macro"><div className="macro-val cal">~10</div><div className="macro-label">kcal</div></div></div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>Fresh ginger boiled in 400ml water + lemon</li>
              <li>Pinch black pepper for absorption boost</li>
              <li>Thermogenic — raises body temp, burns more calories</li>
              <li>Great after meals to prevent bloating</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--green)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>📅 Daily Drink Schedule</div>
      <div className="card" style={{marginBottom:'24px'}}>
        <div className="water-row">
          <div className="water-time">6:00 AM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'100%',background:'linear-gradient(90deg,#f9d423,#f83600)'}}></div></div>
          <div className="drink-label">🍋 Warm Lemon Water (500ml)</div>
        </div>
        <div className="water-row">
          <div className="water-time">6:30 AM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'20%',background:'#3a1a05'}}></div></div>
          <div className="drink-label">☕ Black Coffee (pre-workout)</div>
        </div>
        <div className="water-row">
          <div className="water-time">8:30 AM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'60%'}}></div></div>
          <div className="drink-label">💧 Plain Water (300ml)</div>
        </div>
        <div className="water-row">
          <div className="water-time">10:30 AM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'100%',background:'linear-gradient(90deg,#56ab2f,#a8e063)'}}></div></div>
          <div className="drink-label">🥥 Coconut Water or Chia Water</div>
        </div>
        <div className="water-row">
          <div className="water-time">1:00 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'70%',background:'linear-gradient(90deg,#c79037,#8b5e0a)'}}></div></div>
          <div className="drink-label">🌿 Jeera Water (before lunch)</div>
        </div>
        <div className="water-row">
          <div className="water-time">3:00 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'50%',background:'linear-gradient(90deg,#134e5e,#71b280)'}}></div></div>
          <div className="drink-label">🍵 Green Tea</div>
        </div>
        <div className="water-row">
          <div className="water-time">5:00 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'80%',background:'linear-gradient(90deg,#84fab0,#8fd3f4)'}}></div></div>
          <div className="drink-label">🌱 Sabja Cooler or Plain Water</div>
        </div>
        <div className="water-row">
          <div className="water-time">7:00 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'60%',background:'linear-gradient(90deg,#ffb347,#ffcc33)'}}></div></div>
          <div className="drink-label">🫚 Ginger Lemon Tea</div>
        </div>
        <div className="water-row" style={{borderBottom:'none'}}>
          <div className="water-time">9:30 PM</div>
          <div className="water-bar-wrap"><div className="water-bar" style={{width:'40%',background:'linear-gradient(90deg,#f7c59f,#e08e45)'}}></div></div>
          <div className="drink-label">🌙 Turmeric Milk (before bed)</div>
        </div>
      </div>

      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'#ff4444',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>🚫 Drinks to Avoid Completely</div>
      <div className="rules-grid">
        <div className="rule-card" style={{borderColor:'rgba(255,68,68,0.2)',background:'rgba(255,68,68,0.04)'}}>
          <div className="rule-icon">🧃</div>
          <div><div className="rule-title">Packaged Fruit Juices</div><div className="rule-desc">30–40g sugar per serving. Spikes insulin and stores fat around the belly instantly.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(255,68,68,0.2)',background:'rgba(255,68,68,0.04)'}}>
          <div className="rule-icon">⚡</div>
          <div><div className="rule-title">Energy Drinks</div><div className="rule-desc">High sugar + caffeine overload. Raises cortisol, disrupts sleep, stores belly fat.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(255,68,68,0.2)',background:'rgba(255,68,68,0.04)'}}>
          <div className="rule-icon">🥤</div>
          <div><div className="rule-title">Soda &amp; Diet Soda</div><div className="rule-desc">Causes bloating + gut disruption. Diet soda still spikes insulin via sweeteners.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(255,68,68,0.2)',background:'rgba(255,68,68,0.04)'}}>
          <div className="rule-icon">🍵</div>
          <div><div className="rule-title">Milk Tea with Sugar</div><div className="rule-desc">150+ empty calories per cup, 3–4x/day = 600 kcal wasted. Kills your deficit.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(255,68,68,0.2)',background:'rgba(255,68,68,0.04)'}}>
          <div className="rule-icon">🍺</div>
          <div><div className="rule-title">Alcohol</div><div className="rule-desc">Suppresses fat burning for 48 hrs after one drink. Your worst enemy during shred phase.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(255,68,68,0.2)',background:'rgba(255,68,68,0.04)'}}>
          <div className="rule-icon">🥥</div>
          <div><div className="rule-title">Flavoured Coconut Water</div><div className="rule-desc">Added sugar defeats the electrolyte benefit. Always go fresh tender coconut only.</div></div>
        </div>
      </div>

      <div style={{background:'rgba(71,201,255,0.06)',border:'1px solid rgba(71,201,255,0.2)',borderRadius:'12px',padding:'16px',marginTop:'8px',fontSize:'13px'}}>
        💧 <strong style={{color:'var(--accent3)'}}>Total daily fluid target with creatine:</strong> ~3.8–4L on workout days · ~3.6L on rest days. Your drinks above cover ~1.5L — the rest comes from plain water throughout the day.
      </div>
    </>
  )
}
