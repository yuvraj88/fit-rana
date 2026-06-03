const grads = {
  push:   'linear-gradient(135deg,rgba(255,107,53,0.35),rgba(192,57,43,0.35))',
  pull:   'linear-gradient(135deg,rgba(71,201,255,0.35),rgba(14,90,138,0.35))',
  legs:   'linear-gradient(135deg,rgba(167,139,250,0.35),rgba(91,33,182,0.35))',
  hiit:   'linear-gradient(135deg,rgba(232,255,71,0.35),rgba(156,163,0,0.35))',
  upper:  'linear-gradient(135deg,rgba(74,222,128,0.35),rgba(21,128,61,0.35))',
  active: 'linear-gradient(135deg,rgba(249,168,77,0.35),rgba(201,123,10,0.35))',
}

export default function CalDay({ type, num, focus, core }) {
  if (type === 'empty') return <div className="cal-day empty"></div>

  return (
    <div className={`cal-day ${type}`}>
      {grads[type] && (
        <div style={{ position: 'absolute', inset: 0, background: grads[type], borderRadius: '7px' }}></div>
      )}
      <div className="cal-day-inner">
        <div className="day-num">{num}</div>
        <div className="day-focus">{focus}</div>
        {core && <div className="day-core">+ Core</div>}
      </div>
    </div>
  )
}
