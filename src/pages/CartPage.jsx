import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotalPrice, clearCart } from '../store/cartSlice';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + tax;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <span className="empty-cart-icon">🛒</span>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="page-title">
          Shopping <span className="gradient-text">Cart</span>
        </h1>
        <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
          🗑️ Clear Cart
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>GST (18%)</span>
            <span>₹{tax.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-delivery">FREE</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>₹{grandTotal.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary btn-full">
            Proceed to Checkout →
          </Link>
          <Link to="/products" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
