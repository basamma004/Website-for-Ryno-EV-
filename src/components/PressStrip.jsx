const items = [
  ['5-star', 'Adult occupant safety, Global NCAP equivalent protocol'],
  ['SUV of the Year — 2026', 'Indian Auto Awards, Electric SUV category'],
  ['Best EV Design — 2026', 'Auto Design Council'],
  ['#1 in owner satisfaction', 'Three-row EV segment, JD associates survey'],
];

export default function PressStrip() {
  return (
    <div className="press-strip">
      <div className="wrap press-row">
        {items.map(([title, body]) => (
          <div className="press-item" key={title}>
            <b>{title}</b>{body}
          </div>
        ))}
      </div>
    </div>
  );
}
