import { interiorDash, infotainment, cluster, seats, exteriorBlue } from '../assets/images';

const cards = [
  ['10.25" floating touchscreen', 'Wireless Android Auto and CarPlay, over-the-air updates, and a dedicated EV screen for range and charge status.'],
  ["Digital driver's cluster", 'Configurable readouts for range, regen level, and drive mode, angled toward the driver.'],
  ['Ventilated front seats', 'Perforated leatherette with heating and cooling across the front row.'],
  ['Panoramic sunroof', 'Runs nearly the full length of the cabin, with one-touch voice control.'],
];

const gallery = [
  [infotainment, 'Ryno EV infotainment screen showing navigation and battery range', 'Split-screen infotainment with live range and charge level'],
  [cluster, 'Ryno EV steering wheel and digital instrument cluster', 'Multifunction wheel and configurable digital cluster'],
  [seats, 'Ryno EV front seats with embossed Ryno EV lettering', 'Ventilated front seats, embroidered with the Ryno EV mark'],
  [exteriorBlue, 'Ryno EV in blue shown on stage at launch', 'On stage: the Ryno EV launch reveal'],
];

export default function Interior() {
  return (
    <section id="interior" className="interior">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Interior</p>
          <h2>A cabin that keeps up with the drive</h2>
          <p>10.25-inch touchscreen, a fully digital driver's display, and switchgear that stays where your hand expects it.</p>
        </div>
        <img src={interiorDash} alt="Ryno EV dashboard and steering wheel" style={{ borderRadius: 2 }} />
        <div className="int-grid">
          {cards.map(([title, body]) => (
            <div className="int-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <div className="gal-grid">
          {gallery.map(([src, alt, caption]) => (
            <div className="gal-item" key={caption}>
              <img src={src} alt={alt} />
              <p>{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
