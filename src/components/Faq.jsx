import { useState, useRef } from 'react';

const faqs = [
  ['Can I charge Ryno EV at home?', "Yes. The 11 kW onboard charger works with a standard home wallbox and takes the battery from 10–100% overnight. A portable cable for regular sockets is included for slower top-ups."],
  ["What's the battery warranty?", '8 years or 160,000 km, whichever comes first, covering capacity retention above 70%. The motor and drivetrain carry the same cover.'],
  ['How long does DC fast charging really take?', '10–80% in about 20 minutes on a 150 kW charger. On a slower 50 kW public charger, plan on roughly 55–60 minutes for the same range.'],
  ['Is all-wheel drive available on every variant?', 'Terra is front-wheel drive only. Summit and Apex both come with dual-motor all-wheel drive as standard.'],
  ["What's included in the price shown?", 'Ex-showroom price before state road tax, registration, and insurance. Your local Ryno EV studio can confirm the full on-road figure and any state EV incentives you qualify for.'],
];

function FaqItem({ q, a, open, onToggle }) {
  const ref = useRef(null);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle}>
        {q}<span className="plus">+</span>
      </button>
      <div className="faq-a" ref={ref} style={{ maxHeight: open ? ref.current?.scrollHeight ?? 500 : 0 }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">FAQ</p>
          <h2>Questions people ask before switching</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <FaqItem
              key={q}
              q={q}
              a={a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
