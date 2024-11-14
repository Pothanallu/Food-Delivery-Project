import React, { useState, useEffect } from "react";
import "../styles/MenuC.css";

const MenuC = ({ city }) => {
  // Define the menu items for each city
  const menuItemsByCity = {
    Hyderabad: [
      { src: "biryani.jpg", label: "Biryani", price: "₹250" },
      { src: "shawarma.jpg", label: "Shawarma", price: "₹170" },
      { src: "idli.jpg", label: "Idli", price: "₹80" },
      { src: "parota.jpg", label: "Parota", price: "₹60" },
      { src: "dosa.jpg", label: "Dosa", price: "₹120" },
      { src: "salad.jpg", label: "Salad", price: "₹180" },
    ],
    Vijayawada: [
      { src: "pizza.jpg", label: "Pizzas", price: "₹300" },
      { src: "burger.jpg", label: "Burgers", price: "₹150" },
      { src: "cake.jpg", label: "Cakes", price: "₹150" },
      { src: "chinese.jpg", label: "Chinese", price: "₹280" },
      { src: "north_indian.jpg", label: "North Indian", price: "₹350" },
      { src: "pure_veg.jpg", label: "Pure Veg", price: "₹320" },
    ],
    Guntur: [
      { src: "pasta.jpg", label: "Pasta", price: "₹200" },
      { src: "dessert.jpg", label: "Desserts", price: "₹120" },
      { src: "juice.jpg", label: "Juices", price: "₹90" },
      { src: "south_indian.jpg", label: "South Indian", price: "₹220" },
      { src: "parota.jpg", label: "Parota", price: "₹60" },
      { src: "biryani.jpg", label: "Biryani", price: "₹250" },
    ],
  };

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (city && menuItemsByCity[city]) {
      setMenuItems(menuItemsByCity[city]); // Update menu based on city
    } else {
      setMenuItems([]); // Clear menu if no valid city
    }
  }, [city]);

  return (
    <div className="menu-container">
      <h1>Menu Items in {city}</h1>
      <div className="menu-grid">
        {menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.src} alt={item.label} className="menu-item-image" />
              <p className="menu-item-label">{item.label}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          ))
        ) : (
          <p>No menu items available for {city}.</p>
        )}
      </div>
    </div>
  );
};

export default MenuC;
