export default function Navbar({ isDark, toggleTheme }) {
  const links = [
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#meals', label: 'Meals' },
    { href: '#water', label: 'Water' },
    { href: '#calendar', label: 'Calendar' },
    { href: '#core', label: 'Core' },
    { href: '#rules', label: 'Rules' },
    { href: '#salads', label: 'Salads' },
    { href: '#rotation', label: 'Rotation' },
    { href: '#drinks', label: 'Drinks' },
    { href: '#supplements', label: 'Supps' },
    { href: '#tracker', label: 'Tracker' },
    { href: '#grocery', label: 'Grocery' },
    { href: '#sleep', label: 'Sleep' },
    { href: '#mindset', label: 'Mindset' },
    { href: '#faq', label: 'FAQ' },
    { href: '#relaxation', label: 'Relax' },
    { href: '#marathon', label: '🏁 5KM Race' },
  ]

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#hero">FIT RANA</a>
      <div className="navbar-links">
        {links.map(l => (
          <a key={l.href} className="navbar-link" href={l.href}>{l.label}</a>
        ))}
      </div>
      <button className="navbar-theme-btn" onClick={toggleTheme}>
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  )
}
