import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Menu.css";

const MenuR = () => {
  const { restaurantName } = useParams();

  const menuData = {
    "Annapurna Bhavan": [
      { src: "biryani.jpg", label: "Biryani", price: "₹250" },
      { src: "dosa.jpg", label: "Dosa", price: "₹120" },
      { src: "idli.jpg", label: "Idli", price: "₹80" },
      { src: "parota.jpg", label: "Parota", price: "₹60" },
    ],
    "Swadisht Dhaba": [
      { src: "north_indian.jpg", label: "North Indian", price: "₹350" },
      { src: "chinese.jpg", label: "Chinese", price: "₹280" },
      { src: "burger.jpg", label: "Burgers", price: "₹150" },
      { src: "salad.jpg", label: "Salad", price: "₹180" },
    ],
    "Punjabi Tandoor": [
      { src: "shawarma.jpg", label: "Shawarma", price: "₹170" },
      { src: "pizza.jpg", label: "Pizzas", price: "₹300" },
      { src: "pasta.jpg", label: "Pasta", price: "₹200" },
      { src: "juice.jpg", label: "Juices", price: "₹90" },
    ],
    "Royal Biryani House": [
      { src: "pure_veg.jpg", label: "Pure Veg", price: "₹320" },
      { src: "south_indian.jpg", label: "South Indian", price: "₹220" },
      { src: "dessert.jpg", label: "Desserts", price: "₹120" },
      { src: "cake.jpg", label: "Cakes", price: "₹150" },
    ],
  };

  const menuItems = menuData[restaurantName] || [];

  return (
    <div className="menu-container">
      <h1>Menu for {restaurantName}</h1>
      {menuItems.length === 0 ? (
        <p>No menu items available for this restaurant.</p>
      ) : (
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img
                src={`/images/${item.src}`}
                alt={item.label}
                className="menu-item-image"
              />
              <p className="menu-item-label">{item.label}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuR;
