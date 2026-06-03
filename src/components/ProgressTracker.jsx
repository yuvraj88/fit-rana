export default function ProgressTracker() {
  return (
    <>
      <div className="section-title"><span className="icon">📏</span> Weekly Progress Tracker <div className="line"></div></div>
      <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'20px'}}>Weigh every Monday morning — fasted, same time. Measure waist at navel level. Track honestly.</div>

      <div className="card" style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px',minWidth:'600px'}}>
          <thead>
            <tr style={{borderBottom:'2px solid var(--border)'}}>
              <th style={{textAlign:'left',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>Week</th>
              <th style={{textAlign:'left',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>Date</th>
              <th style={{textAlign:'center',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.1em'}}>Weight (kg)</th>
              <th style={{textAlign:'center',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--accent2)',textTransform:'uppercase',letterSpacing:'0.1em'}}>Waist (cm)</th>
              <th style={{textAlign:'center',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--accent3)',textTransform:'uppercase',letterSpacing:'0.1em'}}>Change</th>
              <th style={{textAlign:'left',padding:'10px 12px',fontFamily:"'DM Mono',monospace",fontSize:'10px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(232,255,71,0.06)'}}>
              <td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--accent)'}}>START</td>
              <td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jun 1</td>
              <td style={{padding:'10px 12px',textAlign:'center'}}><strong>80.0</strong></td>
              <td style={{padding:'10px 12px',textAlign:'center'}}>___</td>
              <td style={{padding:'10px 12px',textAlign:'center',color:'var(--muted)'}}>—</td>
              <td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Baseline</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W1</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jun 8</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W2</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jun 15</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W3</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jun 22</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(71,201,255,0.04)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--accent3)'}}>W4</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jun 29</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>End of June</td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W5</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jul 6</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W6</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jul 13</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W7</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jul 20</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)',background:'rgba(232,255,71,0.04)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--accent)'}}>W8</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Jul 27</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>End of July</td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W9</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Aug 3</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W10</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Aug 10</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{borderBottom:'1px solid var(--border)'}}><td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'16px',color:'var(--muted)'}}>W11</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Aug 17</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',textAlign:'center'}}>___</td><td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}></td></tr>
            <tr style={{background:'rgba(74,222,128,0.08)',borderBottom:'2px solid var(--green)'}}>
              <td style={{padding:'10px 12px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'18px',color:'var(--green)'}}>GOAL</td>
              <td style={{padding:'10px 12px',color:'var(--muted)',fontSize:'12px'}}>Sep 1</td>
              <td style={{padding:'10px 12px',textAlign:'center',color:'var(--green)'}}><strong>74.0</strong></td>
              <td style={{padding:'10px 12px',textAlign:'center',color:'var(--green)'}}>___</td>
              <td style={{padding:'10px 12px',textAlign:'center',color:'var(--green)'}}>−6 kg</td>
              <td style={{padding:'10px 12px',color:'var(--green)',fontSize:'12px'}}>🏆 Visible Abs!</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{fontSize:'12px',color:'var(--muted)',marginTop:'8px',padding:'0 4px'}}>💡 Print this page and fill in each Monday. Don't weigh more than once a week — daily fluctuations will mess with your mindset.</div>
    </>
  )
}
