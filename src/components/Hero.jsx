export default function Hero() {
  return (
    <div className="hero" id="hero">
      <canvas id="heroParticles"></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-tag">🎯 Transformation + Race Plan · June 1 – September 6, 2026</div>
        <h1>
          <span className="hero-line">LOSE <span className="hl">6KG</span></span><br />
          <span className="hero-line">RUN <span className="hl">5KM</span></span>
        </h1>
        <div className="hero-stats">
          <div className="stat"><div className="stat-val" data-count="80" data-suffix="kg">80kg</div><div className="stat-label">Current Weight</div></div>
          <div className="stat"><div className="stat-val" data-count="1830" data-comma="true">1,830</div><div className="stat-label">Daily Calories</div></div>
          <div className="stat"><div className="stat-val" data-count="132" data-suffix="g">132g</div><div className="stat-label">Daily Protein</div></div>
          <div className="stat"><div className="stat-val" data-count="3.8" data-suffix="L" data-decimal="true">3.8L</div><div className="stat-label">Daily Water</div></div>
          <div className="stat"><div className="stat-val" data-count="5" data-suffix="KM">5KM</div><div className="stat-label">Race Distance</div></div>
          <div className="stat"><div className="stat-val" style={{color:'#f59e0b',textShadow:'0 0 16px rgba(245,158,11,0.6)'}}>SEP 6</div><div className="stat-label">🏁 Race Day</div></div>
        </div>
      </div>
    </div>
  )
}
