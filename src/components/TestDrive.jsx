import { useState } from 'react';

const studios = ['Indiranagar Studio', 'Whitefield Experience Centre', 'Koramangala Studio', 'Hebbal Delivery Hub'];

export default function TestDrive() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', variant: 'Summit', date: '', pincode: '' });
  const [message, setMessage] = useState('');
  const [nearest, setNearest] = useState('');

  const update = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    if (key === 'pincode') {
      if (value.trim().length >= 3) {
        const pick = studios[value.charCodeAt(0) % studios.length];
        setNearest(`Nearest: ${pick} — about 6 km away`);
      } else {
        setNearest('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    // In a real project, send `form` to your booking API here.
    setMessage(`Thanks, ${form.name.trim().split(' ')[0]} — we'll call you to confirm a slot.`);
    setForm({ name: '', phone: '', city: '', variant: 'Summit', date: '', pincode: '' });
    setNearest('');
  };

  return (
    <section id="drive" className="drive">
      <div className="wrap drive-wrap">
        <div>
          <p className="kicker">Test drive</p>
          <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', margin: '0 0 14px' }}>Book a test drive</h2>
          <p style={{ color: 'var(--ink-dim)', fontSize: 15.5, lineHeight: 1.6, maxWidth: 420 }}>
            Leave your details and your nearest Ryno EV studio will call to confirm a slot. No payment, no obligation.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row2">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" required placeholder="Your name" value={form.name} onChange={update('name')} />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" required placeholder="+91 00000 00000" value={form.phone} onChange={update('phone')} />
            </div>
          </div>
          <div className="row2">
            <div className="field">
              <label htmlFor="city">City</label>
              <input id="city" required placeholder="Your city" value={form.city} onChange={update('city')} />
            </div>
            <div className="field">
              <label htmlFor="variant">Preferred variant</label>
              <select id="variant" value={form.variant} onChange={update('variant')}>
                <option>Terra</option>
                <option>Summit</option>
                <option>Apex</option>
              </select>
            </div>
          </div>
          <div className="row2">
            <div className="field">
              <label htmlFor="date">Preferred date</label>
              <input id="date" type="date" value={form.date} onChange={update('date')} />
            </div>
            <div className="field">
              <label htmlFor="pincode">Pincode</label>
              <input id="pincode" inputMode="numeric" maxLength={6} placeholder="e.g. 560001" value={form.pincode} onChange={update('pincode')} />
            </div>
          </div>
          <div className="locator-result" dangerouslySetInnerHTML={{ __html: nearest.replace(/Nearest: (.*?) —/, 'Nearest: <b>$1</b> —') }} />
          <button type="submit" className="submit-btn">Request test drive</button>
          <div id="form-msg" className={message ? 'ok' : ''}>{message}</div>
        </form>
      </div>
    </section>
  );
}
