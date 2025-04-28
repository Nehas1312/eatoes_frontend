import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Browse Menu</Link></p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item.name} - ₹{item.price}
                <button 
                  onClick={() => removeFromCart(item)}
                  style={{ marginLeft: "10px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>

          <Link to="/order">
            <button style={{ marginTop: "20px", padding: "10px 20px" }}>
              Place Order
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
