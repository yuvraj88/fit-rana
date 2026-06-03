export default function SaladRecipes() {
  return (
    <>
      <div className="section-title"><span className="icon">🥗</span> Salad Recipes — Cucumber · Tomato · Paneer <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>Every recipe uses cucumber, tomato &amp; paneer as the base. Rotate daily to avoid boredom.</div>

      <div className="meal-grid">
        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#56ab2f,#a8e063)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🥗</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>CLASSIC</span>
          </div>
          <div className="meal-header">
            <div>
              <div className="meal-time">5 min · No cooking</div>
              <div className="meal-name">Classic Cucumber Tomato Paneer</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">~180</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">14g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 cucumber diced + 2 tomatoes chopped</li>
              <li>100g paneer cubed</li>
              <li>½ red onion + fresh coriander</li>
              <li>1 tbsp lemon juice + ½ tsp chaat masala + black salt</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f7971e,#ffd200)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>💪</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(0,0,0,0.8)',letterSpacing:'0.1em'}}>POWER BOWL</span>
          </div>
          <div className="meal-header">
            <div>
              <div className="meal-time">10 min · ~30g protein</div>
              <div className="meal-name">Chana Paneer Power Salad</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">~320</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">30g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 cucumber + 2 tomatoes + 1 capsicum</li>
              <li>100g grilled paneer + 150g boiled chickpeas</li>
              <li>Dressing: lemon + olive oil + cumin + chaat masala</li>
              <li>Garnish: fresh mint leaves</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#4facfe,#00f2fe)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🌍</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>MEDITERRANEAN</span>
          </div>
          <div className="meal-header">
            <div>
              <div className="meal-time">10 min · Tangy dressing</div>
              <div className="meal-name">Mediterranean with Mustard-Lemon</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">~260</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">18g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 cucumber + 2 tomatoes + baby spinach</li>
              <li>100g paneer crumbled + sweet corn + black olives</li>
              <li>Dressing: lemon + Dijon mustard + olive oil + honey</li>
              <li>Top: mixed seeds (sunflower, pumpkin)</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f46b45,#ee4540)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <span style={{fontSize:'28px'}}>🌶️</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.95)',letterSpacing:'0.1em'}}>DESI CHAAT</span>
          </div>
          <div className="meal-header">
            <div>
              <div className="meal-time">8 min · Street-food style</div>
              <div className="meal-name">Desi Spicy Chaat-Style Paneer</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">~200</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">16g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 cucumber + 2 tomatoes + raw mango</li>
              <li>100g paneer + ½ onion + green chilli</li>
              <li>Chaat masala + red chilli + black salt + lemon</li>
              <li>Top: pomegranate seeds + coriander + mint</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
