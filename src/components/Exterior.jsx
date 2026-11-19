import { heroRear } from '../assets/images';

const features = [
  ['01', 'Full-width LED signature', 'Front and rear light bars connect the badge to the body, lit from the moment you unlock the car.'],
  ['02', 'Active aero wheels', '21-inch alloys shaped to cut drag without giving up the stance.'],
  ['03', 'Flush door handles', 'Retract on lock for a cleaner silhouette and a small but real efficiency gain.'],
  ['04', 'Skid plates, front and rear', 'Matte-finish protection that reads as intent, not add-on.'],
];

export default function Exterior() {
  return (
    <section id="design">
      <div className="wrap split">
        <img src={heroRear} alt="Ryno EV rear view on ice with mountains" />
        <div>
          <p className="kicker">Exterior</p>
          <h2>A shape built around the light</h2>
          <p style={{ color: 'var(--ink-dim)', fontSize: 15.5, lineHeight: 1.6, margin: '0 0 8px' }}>
            One continuous light bar runs the width of the tailgate. Up front, the same line
            traces the bonnet edge — the signature that identifies Ryno EV at a glance, day or night.
          </p>
          <ul className="feat-list">
            {features.map(([mark, title, body]) => (
              <li key={mark}>
                <span className="feat-mark">{mark}</span>
                <div className="feat-txt">
                  <b>{title}</b>
                  <span>{body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
