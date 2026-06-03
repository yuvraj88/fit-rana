export default function MealPlan() {
  return (
    <>
      <div className="section-title"><span className="icon">🍽️</span> Daily Meal Plan <div className="line"></div></div>

      <div className="meal-grid">
        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f6a623,#e8623a)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}><span style={{fontSize:'28px'}}>🍌</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>PRE-WORKOUT</span></div>
          <div className="meal-header">
            <div>
              <div className="meal-time">6:00 AM · Pre-Workout</div>
              <div className="meal-name">Fuel Up</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">90</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">1g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 banana (medium)</li>
              <li>Black coffee — no sugar, no milk</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f7971e,#ffd200)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}><span style={{fontSize:'28px'}}>🥚</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>BREAKFAST</span></div>
          <div className="meal-header">
            <div>
              <div className="meal-time">8:00–8:30 AM · Post-Workout</div>
              <div className="meal-name">Power Breakfast</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">460</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">35g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>3 whole eggs (scrambled or boiled)</li>
              <li>2 slices whole wheat toast</li>
              <li>1 cup low-fat Greek yogurt (unsweetened)</li>
              <li>½ tsp ghee or olive oil for cooking</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#56ab2f,#a8e063)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}><span style={{fontSize:'28px'}}>💪</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>MID-MORNING</span></div>
          <div className="meal-header">
            <div>
              <div className="meal-time">11:00 AM · Mid-Morning</div>
              <div className="meal-name">Protein Snack</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">225</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">28g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 scoop whey protein in water <em>OR</em> 100g paneer cubes</li>
              <li>10–12 almonds</li>
              <li>1 glass of water (300ml)</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f46b45,#eea849)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}><span style={{fontSize:'28px'}}>🍛</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>LUNCH</span></div>
          <div className="meal-header">
            <div>
              <div className="meal-time">1:00–1:30 PM · Lunch</div>
              <div className="meal-name">Biggest Meal 🔥</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">490</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">26g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>1 cup cooked dal (moong / chana / masoor)</li>
              <li>¾ cup brown rice <em>OR</em> 1 whole wheat roti</li>
              <li>1 cup sabzi (any veg, min oil)</li>
              <li>Big salad: cucumber, tomato, onion + lemon</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#4facfe,#00f2fe)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}><span style={{fontSize:'28px'}}>🥚</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>SNACK</span></div>
          <div className="meal-header">
            <div>
              <div className="meal-time">4:30–5:00 PM · Evening</div>
              <div className="meal-name">Afternoon Boost</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">180</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">14g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>2 boiled eggs</li>
              <li>1 apple <em>OR</em> cucumber sticks with hummus</li>
            </ul>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#a18cd1,#fbc2eb)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}><span style={{fontSize:'28px'}}>🍳</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>DINNER</span></div>
          <div className="meal-header">
            <div>
              <div className="meal-time">7:30–8:00 PM · Dinner</div>
              <div className="meal-name">Light &amp; Protein-Rich</div>
            </div>
            <div className="meal-macros">
              <div className="macro"><div className="macro-val cal">380</div><div className="macro-label">kcal</div></div>
              <div className="macro"><div className="macro-val pro">32g</div><div className="macro-label">protein</div></div>
            </div>
          </div>
          <div className="meal-body">
            <ul className="meal-items">
              <li>2-egg omelette with spinach / mushroom / onion</li>
              <li>1 bowl vegetable soup <em>OR</em> green salad</li>
              <li>100g paneer <em>OR</em> 1 cup curd (low-fat)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="totals-bar">
        <div className="t-label">Daily Totals</div>
        <div className="t-vals">
          <div className="t-item"><div className="t-num">1,835</div><div className="t-sub">Calories</div></div>
          <div className="t-item"><div className="t-num">132g</div><div className="t-sub">Protein</div></div>
          <div className="t-item"><div className="t-num">~160g</div><div className="t-sub">Carbs</div></div>
          <div className="t-item"><div className="t-num">~50g</div><div className="t-sub">Fats</div></div>
        </div>
      </div>
    </>
  )
}
