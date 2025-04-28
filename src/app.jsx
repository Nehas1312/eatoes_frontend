import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import HistoryPage from "./pages/HistoryPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar /> {/* Always show Navbar */}
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  );
}

export default App;