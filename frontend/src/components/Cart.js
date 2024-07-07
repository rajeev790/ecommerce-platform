import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.product._id}>{item.product.name} - {item.quantity}</li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
    </div>
  );
}

export default Cart;