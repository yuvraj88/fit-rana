export default function Marathon5K() {
  return (
    <>
      <div className="section-title"><span className="icon">🏃</span> 5KM Race Plan — Sep 6, 2026 <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>67 days of structured running layered on top of your weight training. Follow this and you'll cross the finish line strong.</div>

      {/* Race day stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:'12px',marginBottom:'28px'}}>
        {[
          {val:'5 KM',label:'Race Distance',color:'#f59e0b'},
          {val:'Sep 6',label:'Race Date',color:'#f59e0b'},
          {val:'97',label:'Days of Training',color:'var(--accent)'},
          {val:'3×/wk',label:'Run Frequency (Aug)',color:'#00d4aa'},
          {val:'<35 min',label:'Target Finish Time',color:'var(--green)'},
          {val:'2×/wk',label:'Run Frequency (Jul)',color:'#00d4aa'},
        ].map(s => (
          <div key={s.label} className="card" style={{textAlign:'center',padding:'16px 12px'}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'26px',color:s.color,lineHeight:1}}>{s.val}</div>
            <div style={{fontSize:'11px',color:'var(--muted)',marginTop:'4px'}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Week by week plan */}
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'#00d4aa',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>📅 Week-by-Week Running Schedule</div>

      <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
        {[
          {weeks:'Jul 1–7 (W1)',phase:'Base Building',thu:'Run Intervals: 400m × 4 (walk 90s between)',sat:'Easy Run: 2K at conversational pace',note:'Focus on form — chest up, short stride, arms relaxed'},
          {weeks:'Jul 8–14 (W2)',phase:'Base Building',thu:'Run Intervals: 400m × 6',sat:'Easy Run: 2.5K',note:'If breathing is hard, slow down — you should be able to talk'},
          {weeks:'Jul 15–21 (W3)',phase:'Build Phase',thu:'Tempo Run: 2K at faster (uncomfortable but sustainable) pace',sat:'Easy Run: 3K',note:'Tempo = you can say a few words, not full sentences'},
          {weeks:'Jul 22–28 (W4)',phase:'Build Phase',thu:'Tempo Run: 2.5K',sat:'Long Run: 3.5K easy',note:'End of July: 3.5K should feel manageable'},
          {weeks:'Jul 29–Aug 4 (W5)',phase:'Build Phase',thu:'Tempo Run: 3K',sat:'Long Run: 3.5K',note:'Add strides — 8× 20-sec fast bursts after easy run'},
          {weeks:'Aug 5–11 (W6)',phase:'Peak Phase',fri:'Intervals: 500m × 6 (rest 2 min)',sat:'Long Run: 4K easy',note:'Start running in the morning — simulates race conditions'},
          {weeks:'Aug 12–18 (W7)',phase:'Peak Phase',tue:'Tempo Run: 3K',sat:'Long Run: 4.5K easy',note:'This is your hardest week — trust it'},
          {weeks:'Aug 19–25 (W8)',phase:'Peak + Simulate',wed:'Race Simulation: 5K at goal pace — timed!',sat:'Recovery Run: 3K easy',note:'Your peak week. After the 5K sim, you know you can do it.'},
          {weeks:'Aug 26–Sep 1 (W9)',phase:'Taper',tue:'Easy Run: 3K very slow',fri:'Shake-out: 2K easy',note:'Taper week — reduce 40% volume. Legs will feel fresh and weird — that\'s normal.'},
          {weeks:'Sep 2–5 (W10)',phase:'Race Week',tue:'Easy Jog: 2K + strides',thu:'Shake-out: 1K only',note:'No new workouts. Just maintain. Sleep 8+ hrs. Eat well. Trust your training.'},
        ].map((w,i) => (
          <div key={i} className="card" style={{borderLeft:`3px solid ${w.phase.includes('Taper')||w.phase.includes('Race')?'#94a3b8':w.phase.includes('Peak')?'#f59e0b':'#00d4aa'}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'8px',flexWrap:'wrap',gap:'8px'}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:w.phase.includes('Taper')||w.phase.includes('Race')?'#94a3b8':w.phase.includes('Peak')?'#f59e0b':'#00d4aa'}}>{w.weeks}</div>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:'10px',padding:'3px 10px',borderRadius:'20px',background:'rgba(0,212,170,0.1)',color:'#00d4aa'}}>{w.phase}</div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'8px',marginBottom:'8px'}}>
              {w.thu && <div style={{fontSize:'12px'}}><span style={{color:'var(--muted)'}}>THU → </span>{w.thu}</div>}
              {w.tue && <div style={{fontSize:'12px'}}><span style={{color:'var(--muted)'}}>TUE → </span>{w.tue}</div>}
              {w.wed && <div style={{fontSize:'12px'}}><span style={{color:'var(--muted)'}}>WED → </span>{w.wed}</div>}
              {w.fri && <div style={{fontSize:'12px'}}><span style={{color:'var(--muted)'}}>FRI → </span>{w.fri}</div>}
              {w.sat && <div style={{fontSize:'12px'}}><span style={{color:'var(--muted)'}}>SAT → </span>{w.sat}</div>}
            </div>
            <div style={{fontSize:'11px',color:'var(--accent)',fontFamily:"'DM Mono',monospace"}}>💡 {w.note}</div>
          </div>
        ))}
      </div>

      {/* Race day protocol */}
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'#f59e0b',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>🏁 Race Day Protocol — September 6</div>
      <div className="rules-grid" style={{marginBottom:'24px'}}>
        <div className="rule-card" style={{borderColor:'rgba(245,158,11,0.3)'}}>
          <div className="rule-icon">🌅</div>
          <div><div className="rule-title">Wake Up 90 Min Before</div><div className="rule-desc">Eat a light carb meal — banana + toast + peanut butter. No heavy food. Hydrate 500ml water on waking.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(245,158,11,0.3)'}}>
          <div className="rule-icon">☕</div>
          <div><div className="rule-title">Black Coffee 45 Min Before</div><div className="rule-desc">Boosts performance by 12–15%. Don't try anything new on race day — you've trained with coffee, use it.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(245,158,11,0.3)'}}>
          <div className="rule-icon">🦵</div>
          <div><div className="rule-title">Warm Up 15 Min Before</div><div className="rule-desc">5 min brisk walk → leg swings → high knees → 3× 30-sec easy jog strides. Don't start cold.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(245,158,11,0.3)'}}>
          <div className="rule-icon">🏃</div>
          <div><div className="rule-title">Start Slower Than You Feel</div><div className="rule-desc">First 1km should feel easy. Going out too fast kills the last 2K. Save energy — negative split strategy wins.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(245,158,11,0.3)'}}>
          <div className="rule-icon">💧</div>
          <div><div className="rule-title">Hydrate at Every Station</div><div className="rule-desc">Drink at every water station even if not thirsty. 5K dehydration is real. Sip — don't gulp mid-run.</div></div>
        </div>
        <div className="rule-card" style={{borderColor:'rgba(245,158,11,0.3)'}}>
          <div className="rule-icon">🔥</div>
          <div><div className="rule-title">Last 1KM — Empty the Tank</div><div className="rule-desc">If you have anything left at the 4K mark, give it everything. The finish line is your goal — leave nothing behind.</div></div>
        </div>
      </div>

      {/* Pace guidance */}
      <div className="card" style={{marginBottom:'24px'}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'14px'}}>⏱️ Target Pace Guide (5KM = 5,000m)</div>
        {[
          {target:'Under 25 min','per-km':'5:00/km','level':'Elite — only if running is already your thing'},
          {target:'25–30 min','per-km':'5:00–6:00/km','level':'Strong — requires consistent training from today'},
          {target:'30–35 min','per-km':'6:00–7:00/km','level':'Solid — achievable with this plan. Aim here.','highlight':true},
          {target:'35–40 min','per-km':'7:00–8:00/km','level':'Comfortable — finishing strong, no injuries'},
          {target:'Any finish','per-km':'Walk if needed','level':'Still a win — you showed up and completed it'},
        ].map((p,i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px 0',borderBottom:'1px solid var(--border)',flexWrap:'wrap'}}
               className={p.highlight ? '' : ''}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',color:p.highlight?'var(--accent)':'var(--text)',width:'100px',flexShrink:0}}>{p.target}</div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:'11px',color:'#00d4aa',width:'100px',flexShrink:0}}>{p['per-km']}</div>
            <div style={{fontSize:'12px',color:p.highlight?'var(--text)':'var(--muted)',flex:1}}>{p.level}{p.highlight && <span style={{marginLeft:'8px',background:'var(--accent)',color:'#000',fontSize:'10px',padding:'2px 8px',borderRadius:'10px',fontFamily:"'DM Mono',monospace"}}>YOUR TARGET</span>}</div>
          </div>
        ))}
      </div>

      <div style={{background:'rgba(245,158,11,0.06)',border:'1px solid rgba(245,158,11,0.3)',borderRadius:'12px',padding:'16px',fontSize:'13px'}}>
        🧠 <strong style={{color:'#f59e0b'}}>The Secret:</strong> 97% of first-time 5K runners say the hardest part is the 3K mark — legs feel heavy, breathing spikes. This is normal. Slow down for 30 seconds, breathe through it, then pick back up. You will finish. Your training guarantees it.
      </div>
    </>
  )
}
