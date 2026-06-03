export default function MealRotation() {
  return (
    <>
      <div className="section-title"><span className="icon">🍽️</span> 7-Day High-Protein Meal Rotation <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>3 recipe days that repeat every 2 days — less prep, consistent results. All dinners are low-carb for overnight fat burn.</div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px',marginBottom:'28px'}}>
        <div style={{background:'var(--card)',border:'1px solid var(--border)',borderTop:'3px solid var(--accent3)',borderRadius:'10px',padding:'16px'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'22px',color:'var(--accent3)'}}>DAY A</div>
          <div style={{fontSize:'11px',color:'var(--muted)',marginBottom:'8px'}}>Mon · Thu</div>
          <div style={{fontSize:'12px',lineHeight:'1.8'}}>🥚 Masala Omelette + Paneer<br/>🍛 Brown Rice + Moong Dal<br/>🥘 Dry Paneer Bhurji + Curd</div>
          <div style={{marginTop:'10px',fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--green)'}}>~104g protein · ~1,290 kcal</div>
        </div>
        <div style={{background:'var(--card)',border:'1px solid var(--border)',borderTop:'3px solid var(--accent)',borderRadius:'10px',padding:'16px'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'22px',color:'var(--accent)'}}>DAY B</div>
          <div style={{fontSize:'11px',color:'var(--muted)',marginBottom:'8px'}}>Tue · Fri</div>
          <div style={{fontSize:'12px',lineHeight:'1.8'}}>🫙 Greek Yogurt Bowl + Eggs<br/>🫘 Kala Chana + Paneer Curry<br/>🍲 Masoor Dal + Paneer Soup</div>
          <div style={{marginTop:'10px',fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--green)'}}>~101g protein · ~1,260 kcal</div>
        </div>
        <div style={{background:'var(--card)',border:'1px solid var(--border)',borderTop:'3px solid var(--accent2)',borderRadius:'10px',padding:'16px'}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'22px',color:'var(--accent2)'}}>DAY C</div>
          <div style={{fontSize:'11px',color:'var(--muted)',marginBottom:'8px'}}>Wed · Sat</div>
          <div style={{fontSize:'12px',lineHeight:'1.8'}}>🥞 Besan Egg Cheela + Paneer<br/>🌾 Quinoa Rajma Paneer Bowl<br/>🥬 Palak Paneer Bowl</div>
          <div style={{marginTop:'10px',fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--green)'}}>~106g protein · ~1,290 kcal</div>
        </div>
      </div>

      <div className="card" style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
          <thead>
            <tr style={{borderBottom:'1px solid var(--border)'}}>
              <th style={{textAlign:'left',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em',width:'80px'}}>Day</th>
              <th style={{textAlign:'left',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>☀️ Breakfast</th>
              <th style={{textAlign:'left',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>🌤️ Lunch</th>
              <th style={{textAlign:'left',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>🌙 Dinner</th>
              <th style={{textAlign:'right',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(71,201,255,0.04)'}}>
              <td style={{padding:'12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--accent3)'}}>MON</td>
              <td style={{padding:'12px'}}>Masala Omelette + Paneer</td>
              <td style={{padding:'12px'}}>Brown Rice + Moong Dal + Paneer</td>
              <td style={{padding:'12px'}}>Dry Paneer Bhurji + Curd</td>
              <td style={{padding:'12px',textAlign:'right',fontFamily:"'DM Mono',monospace",color:'var(--green)'}}>~104g</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(232,255,71,0.04)'}}>
              <td style={{padding:'12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--accent)'}}>TUE</td>
              <td style={{padding:'12px'}}>Greek Yogurt Bowl + Boiled Eggs</td>
              <td style={{padding:'12px'}}>Kala Chana + Paneer Curry + Roti</td>
              <td style={{padding:'12px'}}>Masoor Dal + Paneer Soup</td>
              <td style={{padding:'12px',textAlign:'right',fontFamily:"'DM Mono',monospace",color:'var(--green)'}}>~101g</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(255,107,53,0.04)'}}>
              <td style={{padding:'12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--accent2)'}}>WED</td>
              <td style={{padding:'12px'}}>Besan Egg Cheela + Paneer Stuffing</td>
              <td style={{padding:'12px'}}>Quinoa Rajma Paneer Bowl</td>
              <td style={{padding:'12px'}}>Palak Paneer Bowl</td>
              <td style={{padding:'12px',textAlign:'right',fontFamily:"'DM Mono',monospace",color:'var(--green)'}}>~106g</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(71,201,255,0.04)'}}>
              <td style={{padding:'12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--accent3)'}}>THU</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Masala Omelette + Paneer</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Brown Rice + Moong Dal + Paneer</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Dry Paneer Bhurji + Curd</td>
              <td style={{padding:'12px',textAlign:'right',fontFamily:"'DM Mono',monospace",color:'var(--green)'}}>~104g</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(232,255,71,0.04)'}}>
              <td style={{padding:'12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--accent)'}}>FRI</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Greek Yogurt Bowl + Boiled Eggs</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Kala Chana + Paneer Curry + Roti</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Masoor Dal + Paneer Soup</td>
              <td style={{padding:'12px',textAlign:'right',fontFamily:"'DM Mono',monospace",color:'var(--green)'}}>~101g</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(255,107,53,0.04)'}}>
              <td style={{padding:'12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--accent2)'}}>SAT</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Besan Egg Cheela + Paneer Stuffing</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Quinoa Rajma Paneer Bowl</td>
              <td style={{padding:'12px',color:'var(--muted)'}}>🔁 Palak Paneer Bowl</td>
              <td style={{padding:'12px',textAlign:'right',fontFamily:"'DM Mono',monospace",color:'var(--green)'}}>~106g</td>
            </tr>
            <tr style={{background:'rgba(74,222,128,0.04)'}}>
              <td style={{padding:'12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--green)'}}>SUN</td>
              <td style={{padding:'12px'}}>Any Day A/B/C breakfast</td>
              <td style={{padding:'12px'}}>Light choice + big salad</td>
              <td style={{padding:'12px'}}>Soup or curd + salad only</td>
              <td style={{padding:'12px',textAlign:'right',fontFamily:"'DM Mono',monospace",color:'var(--green)'}}>~90g+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{marginTop:'28px'}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'22px',letterSpacing:'0.05em',marginBottom:'16px',color:'var(--text)'}}>📋 Full Recipe Details</div>

        <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent3)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'12px',marginTop:'20px'}}>DAY A — Mon &amp; Thu</div>
        <div className="meal-grid">
          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f7971e,#ffd200)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🥚</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(0,0,0,0.8)',letterSpacing:'0.1em'}}>BREAKFAST · ~38g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">8:00–8:30 AM · 10 min</div><div className="meal-name">Masala Omelette with Paneer</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">420</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">38g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>3 whole eggs + 50g paneer crumbled</li>
                <li>30g spinach + ¼ onion + 1 green chilli</li>
                <li>Turmeric + cumin + salt + pepper</li>
                <li>½ tsp ghee · serve with 1 whole wheat toast</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f46b45,#eea849)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🍛</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>LUNCH · ~32g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">1:00–1:30 PM · 20 min</div><div className="meal-name">Brown Rice + Moong Dal + Paneer</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">490</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">32g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>¾ cup brown rice + 1 cup moong dal cooked</li>
                <li>80g paneer cubed in cumin-tomato masala</li>
                <li>Turmeric + coriander powder + ½ tsp ghee</li>
                <li>+ cucumber-tomato salad on the side</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#a18cd1,#fbc2eb)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🥘</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>DINNER · ~34g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">7:30 PM · Low-carb</div><div className="meal-name">Dry Paneer Bhurji + Curd</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">380</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">34g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>120g paneer + 1 capsicum + 1 tomato</li>
                <li>Garam masala + coriander + red chilli + ghee</li>
                <li>Cook on high heat — golden paneer edges</li>
                <li>+ 1 cup low-fat curd as raita side</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'12px',marginTop:'28px'}}>DAY B — Tue &amp; Fri</div>
        <div className="meal-grid">
          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#4facfe,#00f2fe)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🫙</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>BREAKFAST · ~36g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">8:00 AM · Zero cooking</div><div className="meal-name">Greek Yogurt Protein Bowl + Eggs</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">410</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">36g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>200g low-fat Greek yogurt (unsweetened)</li>
                <li>2 boiled eggs + 10 almonds</li>
                <li>30g mixed seeds (flax, chia, sunflower)</li>
                <li>1 banana/apple + ½ tsp cinnamon</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#56ab2f,#a8e063)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🫘</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>LUNCH · ~35g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">1:00–1:30 PM · 25 min</div><div className="meal-name">Kala Chana + Paneer Curry + Roti</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">500</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">35g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>150g boiled kala chana + 100g paneer</li>
                <li>Tomato-onion masala + ginger-garlic paste</li>
                <li>Chole masala + turmeric + cumin + ½ tsp ghee</li>
                <li>+ 1 whole wheat roti + cucumber salad</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#f093fb,#f5576c)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🍲</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>DINNER · ~30g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">7:30 PM · Low-carb soup</div><div className="meal-name">Masoor Dal + Paneer Soup Bowl</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">360</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">30g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>¾ cup masoor dal boiled till mushy</li>
                <li>80g paneer added at the end</li>
                <li>Tadka: ghee + cumin + onion + tomato + ginger</li>
                <li>No roti, no rice — dal as a thick soup only</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent2)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'12px',marginTop:'28px'}}>DAY C — Wed &amp; Sat</div>
        <div className="meal-grid">
          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#ff9a9e,#fecfef)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🥞</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(80,0,0,0.7)',letterSpacing:'0.1em'}}>BREAKFAST · ~40g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">8:00 AM · 15 min</div><div className="meal-name">Besan Egg Cheela + Paneer Stuffing</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">430</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">40g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>½ cup besan + 2 eggs whisked into batter</li>
                <li>60g paneer grated + spinach/methi + onion</li>
                <li>Ajwain + turmeric + salt — cook thin, crispy</li>
                <li>Eat with a small bowl of curd</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#d4fc79,#96e6a1)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🌾</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(0,60,0,0.8)',letterSpacing:'0.1em'}}>LUNCH · ~34g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">1:00–1:30 PM · 20 min</div><div className="meal-name">Quinoa Rajma Paneer Power Bowl</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">490</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">34g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>½ cup quinoa cooked fluffy</li>
                <li>100g grilled paneer + 100g boiled rajma</li>
                <li>Cucumber + tomato + capsicum tossed in</li>
                <li>Lemon + olive oil + chaat masala dressing</li>
              </ul>
            </div>
          </div>

          <div className="meal-card">
            <div className="meal-img-grad" style={{background:'linear-gradient(135deg,#134e5e,#71b280)',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
              <span style={{fontSize:'24px'}}>🥬</span><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.1em'}}>DINNER · ~32g protein</span>
            </div>
            <div className="meal-header">
              <div><div className="meal-time">7:30 PM · Low-carb · No roti</div><div className="meal-name">Palak Paneer Bowl (No Roti)</div></div>
              <div className="meal-macros"><div className="macro"><div className="macro-val cal">370</div><div className="macro-label">kcal</div></div><div className="macro"><div className="macro-val pro">32g</div><div className="macro-label">protein</div></div></div>
            </div>
            <div className="meal-body">
              <ul className="meal-items">
                <li>150g fresh palak blanched + blended smooth</li>
                <li>150g paneer simmered in spinach gravy</li>
                <li>Ginger-garlic + garam masala + 2 tbsp curd</li>
                <li>Eat as a bowl — no bread, no rice needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:'rgba(232,255,71,0.06)',border:'1px solid rgba(232,255,71,0.2)',borderRadius:'12px',padding:'20px',marginTop:'24px'}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:'var(--accent)',marginBottom:'12px'}}>🔑 Belly-Fat Shred Rules</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))',gap:'10px'}}>
          <div style={{fontSize:'12px',color:'var(--text)'}}>🚫 <strong>No roti/rice at dinner</strong> — every night is low-carb to trigger overnight fat oxidation</div>
          <div style={{fontSize:'12px',color:'var(--text)'}}>🥛 <strong>Paneer at every meal</strong> — keeps you full, prevents muscle loss during deficit</div>
          <div style={{fontSize:'12px',color:'var(--text)'}}>🔁 <strong>Repeat every 2 days</strong> — less grocery shopping, easier to stay consistent</div>
          <div style={{fontSize:'12px',color:'var(--text)'}}>💊 <strong>Add whey protein shake</strong> — tops meals to your 132g daily protein target</div>
          <div style={{fontSize:'12px',color:'var(--text)'}}>🥗 <strong>Salad with every lunch</strong> — rotate the 4 salad recipes to add fibre + micronutrients</div>
          <div style={{fontSize:'12px',color:'var(--text)'}}>⏰ <strong>Eat dinner before 8 PM</strong> — late eating stores fat, especially at 37</div>
        </div>
      </div>
    </>
  )
}
