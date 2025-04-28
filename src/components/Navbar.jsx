import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav style={{
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", marginRight: "20px" }}>
          🏠 Menu
        </Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none", marginRight: "20px" }}>
          🛒 Cart ({cartItems.length})
        </Link>
        <Link to="/history" style={{ color: "#fff", textDecoration: "none" }}>
          📜 Order History
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
