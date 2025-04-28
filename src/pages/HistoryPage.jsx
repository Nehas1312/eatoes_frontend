import React, { useState } from "react";
import { fetchOrdersByPhone } from "../api/api";

const HistoryPage = () => {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const data = await fetchOrdersByPhone(phone);
      setOrders(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("No orders found or error fetching orders.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>📜 View Your Order History</h1>
      <input
        type="text"
        placeholder="Enter your Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {orders.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Orders:</h2>
          {orders.map((order) => (
            <div key={order.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Name:</strong> {order.customer_name}</p>
              <p><strong>Phone:</strong> {order.phone_number}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {Array.isArray(order.cart_data) ? (
                  order.cart_data.map((item, index) => (
                    <li key={index}>
                      {item.name} - ₹{item.price}
                    </li>
                  ))
                ) : (
                  <li>Invalid Cart Data</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
