import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="hero-content">
        <span className="hero-badge">🔥 New Season Collection</span>
        <h1 className="hero-title">
          Discover <span className="gradient-text">Premium</span> Products
        </h1>
        <p className="hero-subtitle">
          Explore our curated collection of electronics, fashion, and home essentials.
          Unmatched quality at prices that make you smile.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">
            Shop Now <span className="btn-arrow">→</span>
          </Link>
          <Link to="/products" className="btn btn-outline">
            View Collection
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">12+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.5★</span>
            <span className="stat-label">Avg Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">Free</span>
            <span className="stat-label">Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
