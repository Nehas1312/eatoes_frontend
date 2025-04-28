import React from "react";
import { useCart } from "../context/CartContext";

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
      <p>Price: ₹{item.price}</p>
      <p>Description: {item.description}</p>
      <img src={item.imageUrl} alt={item.name} style={{ width: "100px" }} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MenuItemCard;
