import { useState, useMemo } from 'react';
import { variants } from '../data/variants';

const RATE = 0.09;

export default function EmiCalculator() {
  const [variant, setVariant] = useState('Summit');
  const [down, setDown] = useState(4);
  const [tenure, setTenure] = useState(5);

  const { emi, principal } = useMemo(() => {
    const price = variants[variant].price * 100000;
    const dp = Math.min(down * 100000, price - 50000);
    const p = Math.max(price - dp, 0);
    const monthlyRate = RATE / 12;
    const n = tenure * 12;
    const payment = (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    return { emi: payment, principal: p };
  }, [variant, down, tenure]);

  return (
    <div className="emi-box">
      <div>
        <h3>Estimate your monthly payment</h3>
        <div className="emi-field">
          <label><span>Variant</span><span>{variant} — {variants[variant].priceLabel}</span></label>
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            {Object.keys(variants).map((v) => (
              <option key={v} value={v}>{v} — {variants[v].priceLabel}</option>
            ))}
          </select>
        </div>
        <div className="emi-field">
          <label><span>Down payment</span><span>₹{down.toFixed(1)} lakh</span></label>
          <input type="range" min="1" max="15" step="0.5" value={down} onChange={(e) => setDown(parseFloat(e.target.value))} />
        </div>
        <div className="emi-field">
          <label><span>Loan tenure</span><span>{tenure} {tenure === 1 ? 'year' : 'years'}</span></label>
          <input type="range" min="1" max="8" step="1" value={tenure} onChange={(e) => setTenure(parseInt(e.target.value, 10))} />
        </div>
      </div>
      <div className="emi-result">
        <div className="amount">₹{Math.round(emi).toLocaleString('en-IN')}/mo</div>
        <div className="cap">estimated EMI per month at 9% p.a.</div>
        <div className="sub">on a loan of ₹{(principal / 100000).toFixed(1)} lakh</div>
      </div>
    </div>
  );
}
