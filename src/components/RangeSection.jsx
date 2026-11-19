const stats = [
  ['78 kWh', 'Usable battery capacity'],
  ['150 kW', 'Peak DC fast-charge rate'],
  ['11 kW', 'Onboard AC charger'],
  ['5', 'Selectable drive modes'],
];

export default function RangeSection() {
  return (
    <section id="range">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Range &amp; charging</p>
          <h2>Built for the whole trip, not just the commute</h2>
          <p>A 78 kWh battery pack tuned for real-world efficiency, with fast charging that keeps stops short.</p>
        </div>
        <div className="stat-grid">
          {stats.map(([num, lbl]) => (
            <div className="stat-cell" key={lbl}>
              <div className="spec-num">{num}</div>
              <div className="spec-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
