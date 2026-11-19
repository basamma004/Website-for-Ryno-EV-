import { useState, useEffect } from 'react';
import { variants } from '../data/variants';

const rows = [
  ['Price', (v) => v.priceLabel],
  ['Range', (v) => v.range],
  ['Drive', (v) => v.drive],
  ['Battery', (v) => v.battery],
  ['Seats', (v) => v.seats],
  ['ADAS', (v) => v.adas],
];

export default function CompareBar({ compared, onClear }) {
  const [tableOpen, setTableOpen] = useState(false);

  useEffect(() => {
    if (compared.length === 0) setTableOpen(false);
  }, [compared]);

  return (
    <div className={`compare-bar ${compared.length ? 'show' : ''}`}>
      <div className="compare-bar-inner">
        <div className="compare-names">
          {compared.length === 0 ? (
            'Select variants to compare'
          ) : (
            <>Comparing: {compared.map((c, i) => (
              <span key={c}><b>{c}</b>{i < compared.length - 1 ? ' vs ' : ''}</span>
            ))}</>
          )}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-ghost" style={{ padding: '9px 18px', fontSize: 13, cursor: 'pointer' }} onClick={() => setTableOpen(!tableOpen)}>
            View comparison
          </button>
          <button className="btn-ghost" style={{ padding: '9px 18px', fontSize: 13, cursor: 'pointer' }} onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
      <div className={`compare-table ${tableOpen ? 'show' : ''}`}>
        {compared.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Spec</th>
                {compared.map((c) => <th key={c}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, getVal]) => (
                <tr key={label}>
                  <td>{label}</td>
                  {compared.map((c) => <td key={c}>{getVal(variants[c])}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
