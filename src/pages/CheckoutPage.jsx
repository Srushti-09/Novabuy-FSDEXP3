import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotalPrice, clearCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
  });

  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + tax;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-animation">
          <span className="success-icon">🎉</span>
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you, <strong>{form.name}</strong>! Your order will be delivered to:</p>
        <p className="delivery-address">{form.address}, {form.city} - {form.zip}</p>
        <p className="order-id">Order ID: #NB{Date.now().toString().slice(-8)}</p>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <span className="empty-cart-icon">📦</span>
        <h2>Nothing to Checkout</h2>
        <p>Add items to your cart first.</p>
        <Link to="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="page-title">
        <span className="gradient-text">Checkout</span>
      </h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Details</h3>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 9876543210" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={form.address} onChange={handleChange} required placeholder="123, Street Name" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" value={form.city} onChange={handleChange} required placeholder="Mumbai" />
            </div>
            <div className="form-group">
              <label htmlFor="zip">PIN Code</label>
              <input type="text" id="zip" name="zip" value={form.zip} onChange={handleChange} required placeholder="400001" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full btn-lg">
            🛍️ Place Order — ₹{grandTotal.toLocaleString()}
          </button>
        </form>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="checkout-items">
            {cartItems.map(item => (
              <div key={item.id} className="checkout-item">
                <span className="checkout-item-emoji">{item.image}</span>
                <div className="checkout-item-details">
                  <span className="checkout-item-name">{item.name}</span>
                  <span className="checkout-item-qty">×{item.quantity}</span>
                </div>
                <span className="checkout-item-price">₹{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider"></div>
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
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
