import { useState } from 'react';
import { heroFront, exteriorBlue } from '../assets/images';

const colors = [
  { name: 'Arctic Silver', img: heroFront, className: 'swatch-silver' },
  { name: 'Glacier Blue', img: exteriorBlue, className: 'swatch-blue' },
];

const specs = [
  ['501 km', 'MIDC certified range'],
  ['6.9 s', '0–100 km/h'],
  ['7', 'Seats, three rows'],
  ['20 min', '10–80% DC fast charge'],
];

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="hero">
      <img className="hero-img" src={colors[active].img} alt="Ryno EV front three-quarter view" />
      <div className="hero-scrim" />
      <div className="hero-inner">
        <p className="eyebrow">All-electric SUV</p>
        <h1>Ryno EV</h1>
        <p className="lede">
          A three-row electric SUV built for real distances — quiet power, a cabin that
          stretches out, and a range that doesn't ask you to plan around it.
        </p>

        <div className="color-row">
          <span className="color-label">{colors[active].name}</span>
          {colors.map((c, i) => (
            <button
              key={c.name}
              className={`swatch ${c.className} ${active === i ? 'active' : ''}`}
              aria-label={c.name}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className="cta-row">
          <a href="#drive" className="btn-primary">Book a test drive</a>
          <a href="#variants" className="btn-ghost">Explore variants</a>
        </div>
      </div>
      <div className="spec-strip wrap">
        {specs.map(([num, lbl]) => (
          <div key={lbl}>
            <div className="spec-num">{num}</div>
            <div className="spec-lbl">{lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
