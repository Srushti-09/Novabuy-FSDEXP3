import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductById } from '../store/productsSlice';
import { addToCart } from '../store/cartSlice';
import { toggleWishlist, selectIsWishlisted } from '../store/wishlistSlice';
import { useState } from 'react';

function ProductDetailPage() {
  const { id } = useParams();
  const product = useSelector(selectProductById(id));
  const dispatch = useDispatch();
  const isWishlisted = useSelector(selectIsWishlisted(Number(id)));
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="not-found-page">
        <span className="not-found-icon">😕</span>
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
      </div>

      <div className="product-detail-content">
        <div className="product-detail-image">
          <span className="detail-emoji">{product.image}</span>
          <span className="detail-category-tag">{product.category}</span>
        </div>

        <div className="product-detail-info">
          <h1 className="detail-name">{product.name}</h1>

          <div className="detail-rating">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
            <span className="rating-text">{product.rating} / 5.0</span>
          </div>

          <p className="detail-price">₹{product.price.toLocaleString()}</p>

          <p className="detail-description">{product.description}</p>

          <div className="detail-features">
            <div className="feature">
              <span>🚚</span> Free Delivery
            </div>
            <div className="feature">
              <span>🔄</span> 30-Day Returns
            </div>
            <div className="feature">
              <span>🛡️</span> 1-Year Warranty
            </div>
          </div>

          <div className="detail-actions">
            <button
              className={`btn btn-primary btn-lg ${addedToCart ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {addedToCart ? '✓ Added to Cart' : '🛒 Add to Cart'}
            </button>
            <button
              className={`btn btn-outline btn-lg ${isWishlisted ? 'wishlisted' : ''}`}
              onClick={() => dispatch(toggleWishlist(product))}
            >
              {isWishlisted ? '❤️ Wishlisted' : '🤍 Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
