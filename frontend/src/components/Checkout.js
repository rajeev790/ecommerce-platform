import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const handleCheckout = () => {
    // Add logic to handle checkout
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.product._id}>{item.product.name} - {item.quantity}</li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;