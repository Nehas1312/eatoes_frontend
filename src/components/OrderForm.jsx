import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { placeOrder } from "../api/api";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    customer_name: "",
    phone_number: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await placeOrder({
        customer_name: formData.customer_name,
        phone_number: formData.phone_number,
        cart_items: cartItems
      });
      clearCart();
      navigate("/confirmation");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place Your Order</h2>
      <input
        type="text"
        name="customer_name"
        placeholder="Your Name"
        value={formData.customer_name}
        onChange={handleChange}
        required
      /><br /><br />
      <input
        type="text"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
        required
      /><br /><br />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
