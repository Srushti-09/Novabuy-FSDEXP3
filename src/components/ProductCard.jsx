import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toggleWishlist, selectIsWishlisted } from '../store/wishlistSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const isWishlisted = useSelector(selectIsWishlisted(product.id));
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <span className="product-emoji">{product.image}</span>
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
        <span className="product-category-tag">{product.category}</span>
      </div>
      <div className="product-card-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span className="rating-number">{product.rating}</span>
        </div>
        <div className="product-card-footer">
          <span className="product-price">₹{product.price.toLocaleString()}</span>
          <button
            className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? '✓ Added' : '+ Cart'}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
