import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Thank You for Your Order!</h1>
      <p>We have received your order and will start preparing it soon.</p>
      <Link to="/">Back to Menu</Link> | <Link to="/history">View Order History</Link>
    </div>
  );
};

export default ConfirmationPage;
