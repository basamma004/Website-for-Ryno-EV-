import { banner } from '../assets/images';

export default function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Ryno EV parked on a frozen lake with mountains behind" />
      <div className="banner-overlay">
        <div className="banner-text">
          <h2 style={{ fontSize: 'clamp(24px,4vw,34px)', margin: 0 }}>Rated for -20°C to 50°C</h2>
          <p>Battery and cabin thermal management tested from the Himalayan cold to the Deccan heat.</p>
        </div>
      </div>
    </div>
  );
}
