import React, { useEffect, useState } from "react";
import MenuItemCard from "../components/MenuItemCard";
import { getMenuItems } from "../api/api";
import { Link } from "react-router-dom";
import "../pages/MenuPage.css";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const items = await getMenuItems();
      console.log("Fetched menu items:", items); // Debug: Log items to verify imageUrl
      setMenuItems(items);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
      <div className="menu-items">
        {menuItems.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;