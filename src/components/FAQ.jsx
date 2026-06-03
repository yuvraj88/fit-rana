export default function FAQ() {
  return (
    <>
      <div className="section-title"><span className="icon">❓</span> FAQ &amp; Troubleshooting <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>The most common questions — answered honestly.</div>

      <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
        <details style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'10px',padding:'16px',cursor:'pointer'}}>
          <summary style={{fontWeight:'600',fontSize:'14px',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Why am I not losing weight after 2 weeks? <span style={{color:'var(--accent)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px'}}>+</span></summary>
          <div style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.7'}}>
            Week 1–2 often shows no loss because creatine adds 0.5–1kg water weight. Also check: are you actually hitting your calorie deficit? Weigh and log everything for 3 days — most people underestimate by 300–400 kcal/day. If deficit is correct, trust the process — fat loss shows up on the scale in weeks 3–4.
          </div>
        </details>

        <details style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'10px',padding:'16px',cursor:'pointer'}}>
          <summary style={{fontWeight:'600',fontSize:'14px',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Can I skip a workout day? <span style={{color:'var(--accent)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px'}}>+</span></summary>
          <div style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.7'}}>
            Yes — life happens. Missing 1 day won't break results. But if you miss 2+ days in a row, your momentum breaks. Rule: if you miss morning, do 20 min of core + a 30-min brisk walk in the evening instead. Never go 2 consecutive days without movement.
          </div>
        </details>

        <details style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'10px',padding:'16px',cursor:'pointer'}}>
          <summary style={{fontWeight:'600',fontSize:'14px',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>The scale went up — did I gain fat? <span style={{color:'var(--accent)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px'}}>+</span></summary>
          <div style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.7'}}>
            Almost certainly not. Scale goes up due to: water retention (high sodium, carbs), muscle glycogen after a heavy workout, inflammation after a new exercise, hormonal fluctuation, or digestive contents. True fat gain requires eating 3500 kcal ABOVE maintenance — that's not happening on your plan. Check waist measurement — if that's stable or down, you're fine.
          </div>
        </details>

        <details style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'10px',padding:'16px',cursor:'pointer'}}>
          <summary style={{fontWeight:'600',fontSize:'14px',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>I'm always hungry — what do I do? <span style={{color:'var(--accent)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px'}}>+</span></summary>
          <div style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.7'}}>
            First check: are you drinking enough water? Dehydration mimics hunger. Drink 300ml water and wait 10 minutes. If still hungry: add more vegetables (zero-calorie bulk), increase protein slightly (+10g), or eat an extra boiled egg. Never skip meals trying to "save" calories — it backfires by slowing metabolism.
          </div>
        </details>

        <details style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'10px',padding:'16px',cursor:'pointer'}}>
          <summary style={{fontWeight:'600',fontSize:'14px',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>What if I'm travelling for work? <span style={{color:'var(--accent)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px'}}>+</span></summary>
          <div style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.7'}}>
            Pack: almonds, protein bar (low sugar), whey sachets. At restaurants: order dal + sabzi + roti, skip the rice or bread basket. Hotel gym: do the core routine + bodyweight push/pull (push-ups, pull-up bar, dips). Even 20 min counts. Prioritise sleep over late-night work sessions — that matters more than the gym.
          </div>
        </details>

        <details style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'10px',padding:'16px',cursor:'pointer'}}>
          <summary style={{fontWeight:'600',fontSize:'14px',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>When will I actually see my abs? <span style={{color:'var(--accent)',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px'}}>+</span></summary>
          <div style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.7'}}>
            Abs become visible at roughly 12–14% body fat for men. At 80kg, you likely carry 18–22% body fat. Losing 6kg of fat should get you to 14–16%, which means upper abs visible and clear V-taper by September 1st. Lower abs take longest — that's where cortisol stores fat last. This is why sleep, stress management, and consistency through August are critical.
          </div>
        </details>
      </div>
    </>
  )
}
