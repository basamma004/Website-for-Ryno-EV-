import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ['#design', 'Design'],
    ['#interior', 'Interior'],
    ['#range', 'Range & Charging'],
    ['#variants', 'Variants'],
    ['#faq', 'FAQ'],
  ];

  return (
    <header className="site-header">
      <nav>
        <div className="brand">RYNO<span>EV</span></div>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <a href="#drive" className="nav-cta d-none d-md-inline-block">Book a test drive</a>
      </nav>
    </header>
  );
}
