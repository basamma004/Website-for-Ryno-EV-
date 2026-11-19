import { variants } from '../data/variants';
import EmiCalculator from './EmiCalculator';

export default function Variants({ compared, onToggleCompare }) {
  return (
    <section id="variants">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Variants</p>
          <h2>Three ways to spec a Ryno EV</h2>
          <p>Every variant carries the full safety suite. What changes is battery size, drive, and comfort features.</p>
        </div>

        <div className="var-grid">
          {Object.entries(variants).map(([name, v]) => (
            <div className={`var-card ${name === 'Summit' ? 'highlight' : ''}`} key={name}>
              <p className="var-tag">{name === 'Summit' ? 'Most popular' : name}</p>
              <p className="var-name">{name}</p>
              <p className="var-price">From {v.priceLabel} · {v.battery} · {v.drive.split(',')[0]}</p>
              <ul>
                {v.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <label className="compare-check">
                <input
                  type="checkbox"
                  checked={compared.includes(name)}
                  onChange={() => onToggleCompare(name)}
                />
                Add to compare
              </label>
              <a href="#drive" className={name === 'Summit' ? 'btn-primary' : 'btn-ghost'} style={{ textAlign: 'center' }}>
                Book a test drive
              </a>
            </div>
          ))}
        </div>

        <EmiCalculator />
      </div>
    </section>
  );
}
