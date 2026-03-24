import { useSelector, useDispatch } from 'react-redux';
import { selectWishlistItems, toggleWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

function WishlistPage() {
  const wishlistItems = useSelector(selectWishlistItems);
  const dispatch = useDispatch();

  const handleMoveToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(toggleWishlist(product));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <span className="empty-cart-icon">💜</span>
        <h2>Your Wishlist is Empty</h2>
        <p>Save items you love to your wishlist.</p>
        <Link to="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1 className="page-title">
        My <span className="gradient-text">Wishlist</span>
      </h1>
      <p className="page-subtitle">{wishlistItems.length} saved items</p>

      <div className="wishlist-grid">
        {wishlistItems.map(item => (
          <div key={item.id} className="wishlist-card">
            <Link to={`/product/${item.id}`} className="wishlist-card-link">
              <div className="wishlist-card-image">
                <span className="wishlist-emoji">{item.image}</span>
              </div>
              <div className="wishlist-card-info">
                <h4>{item.name}</h4>
                <span className="wishlist-price">₹{item.price.toLocaleString()}</span>
              </div>
            </Link>
            <div className="wishlist-card-actions">
              <button className="btn btn-primary btn-sm" onClick={() => handleMoveToCart(item)}>
                🛒 Move to Cart
              </button>
              <button className="btn btn-outline btn-sm" onClick={() => dispatch(toggleWishlist(item))}>
                ✕ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
