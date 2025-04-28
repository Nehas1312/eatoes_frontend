import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to Menu</Link></p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ borderBottom: "1px solid gray", marginBottom: "10px" }}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
          <h2>Total: ₹{totalPrice}</h2>
          <Link to="/order">Proceed to Order</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
