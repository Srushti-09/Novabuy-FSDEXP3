import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/productsSlice';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import { Link } from 'react-router-dom';

function HomePage() {
  const allProducts = useSelector(selectAllProducts);
  const featured = allProducts.slice(0, 4);

  return (
    <div className="home-page">
      <HeroSection />

      <section className="section featured-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Featured</span> Products
          </h2>
          <Link to="/products" className="see-all-link">
            See All →
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="section categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-cards">
          <Link to="/products" className="category-card" onClick={() => {}}>
            <span className="category-icon">📱</span>
            <span className="category-name">Electronics</span>
            <span className="category-count">5 items</span>
          </Link>
          <Link to="/products" className="category-card">
            <span className="category-icon">👗</span>
            <span className="category-name">Fashion</span>
            <span className="category-count">4 items</span>
          </Link>
          <Link to="/products" className="category-card">
            <span className="category-icon">🏠</span>
            <span className="category-name">Home</span>
            <span className="category-count">3 items</span>
          </Link>
        </div>
      </section>

      <section className="section promo-banner">
        <div className="promo-content">
          <h2>🚀 Free Shipping on Orders Over ₹2,000</h2>
          <p>Shop premium products and get them delivered to your doorstep — no extra cost.</p>
          <Link to="/products" className="btn btn-primary">Start Shopping</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
