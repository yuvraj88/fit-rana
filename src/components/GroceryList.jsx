export default function GroceryList() {
  return (
    <>
      <div className="section-title"><span className="icon">🛒</span> Weekly Grocery List <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>Everything you need for one full week of the plan. Buy these once — prep on Sunday, cook fresh daily.</div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))',gap:'16px',marginBottom:'24px'}}>
        <div className="card">
          <div className="card-title" style={{color:'var(--accent)'}}>🥚 Proteins</div>
          <ul className="meal-items">
            <li>Eggs — 1.5 dozen (18 eggs)</li>
            <li>Paneer — 600g (buy 2×300g packs)</li>
            <li>Greek yogurt — 500g (unsweetened)</li>
            <li>Low-fat curd — 1kg</li>
            <li>Whey protein — as per stock</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title" style={{color:'var(--accent2)'}}>🥦 Vegetables</div>
          <ul className="meal-items">
            <li>Cucumber — 6 pcs</li>
            <li>Tomatoes — 8–10 pcs</li>
            <li>Spinach (palak) — 500g</li>
            <li>Capsicum — 3 pcs (mixed colours)</li>
            <li>Onion — 4 pcs · Garlic — 1 bulb · Ginger — 100g</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title" style={{color:'var(--accent3)'}}>🌾 Grains &amp; Legumes</div>
          <ul className="meal-items">
            <li>Brown rice — 500g</li>
            <li>Whole wheat atta — 1kg</li>
            <li>Moong dal — 250g</li>
            <li>Masoor dal — 250g</li>
            <li>Kala chana — 250g (soak overnight)</li>
            <li>Rajma — 250g · Quinoa — 250g</li>
            <li>Besan (chickpea flour) — 250g</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title" style={{color:'var(--green)'}}>🌿 Herbs &amp; Spices</div>
          <ul className="meal-items">
            <li>Fresh coriander — 1 bunch</li>
            <li>Fresh mint — 1 bunch</li>
            <li>Green chillies — 8–10 pcs</li>
            <li>Turmeric, cumin, coriander powder</li>
            <li>Garam masala, chaat masala, black salt</li>
            <li>Ajwain (carom seeds)</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title" style={{color:'#f9a84d'}}>🥜 Healthy Fats &amp; Seeds</div>
          <ul className="meal-items">
            <li>Almonds — 100g</li>
            <li>Chia seeds — 100g</li>
            <li>Flaxseeds — 100g</li>
            <li>Sunflower + pumpkin seeds — 100g mix</li>
            <li>Ghee — 100g · Olive oil — 250ml</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title" style={{color:'#a78bfa'}}>🍋 Drinks &amp; Extras</div>
          <ul className="meal-items">
            <li>Lemons — 8–10 pcs</li>
            <li>Tender coconut — 3–4 (or 1L packaged as backup)</li>
            <li>Green tea bags — 1 box</li>
            <li>Sabja (basil seeds) + jeera</li>
            <li>Himalayan pink salt</li>
            <li>Low-fat milk — 1L (for turmeric milk)</li>
          </ul>
        </div>
      </div>

      <div style={{background:'rgba(74,222,128,0.06)',border:'1px solid rgba(74,222,128,0.2)',borderRadius:'10px',padding:'14px 18px',fontSize:'12px',color:'var(--text)'}}>
        💡 <strong>Bulk Buy Tips:</strong> Dals, grains, seeds, and spices — buy monthly in bulk (saves 30–40%). Paneer, eggs, and veggies — buy twice a week for freshness. Soak kala chana and rajma overnight on Saturday for Sunday prep.
      </div>
    </>
  )
}
