function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">⚡ NovaBuy</span>
          <p className="footer-tagline">Premium products, curated for you.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="/products">All Products</a>
            <a href="/products">Electronics</a>
            <a href="/products">Fashion</a>
            <a href="/products">Home</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">FAQs</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 NovaBuy. Built with React, Redux & React Router.</p>
      </div>
    </footer>
  );
}

export default Footer;
