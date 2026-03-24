import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <span className="cart-item-emoji">{item.image}</span>
      </div>
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <span className="cart-item-category">{item.category}</span>
        <span className="cart-item-price">₹{item.price.toLocaleString()}</span>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          >
            −
          </button>
          <span className="qty-display">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            +
          </button>
        </div>
        <span className="cart-item-total">₹{(item.price * item.quantity).toLocaleString()}</span>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
