import { useSelector } from 'react-redux';
import { selectCartTotalQuantity } from '../store/cartSlice';
import { selectWishlistItems } from '../store/wishlistSlice';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const cartCount = useSelector(selectCartTotalQuantity);
  const wishlistCount = useSelector(selectWishlistItems).length;
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/products', label: 'Products', icon: '🛍️' },
    { path: '/wishlist', label: 'Wishlist', icon: '💜' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">NovaBuy</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-icon">{link.icon}</span>
              {link.label}
              {link.label === 'Wishlist' && wishlistCount > 0 && (
                <span className="nav-badge wishlist-badge">{wishlistCount}</span>
              )}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
