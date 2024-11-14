import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  const menuItems = [
    { src: "biryani.jpg", label: "Biryani", price: "₹250" },
    { src: "pizza.jpg", label: "Pizzas", price: "₹300" },
    { src: "dosa.jpg", label: "Dosa", price: "₹120" },
    { src: "idli.jpg", label: "Idli", price: "₹80" },
    { src: "north_indian.jpg", label: "North Indian", price: "₹350" },
    { src: "chinese.jpg", label: "Chinese", price: "₹280" },
    { src: "burger.jpg", label: "Burgers", price: "₹150" },
    { src: "pasta.jpg", label: "Pasta", price: "₹200" },
    { src: "salad.jpg", label: "Salad", price: "₹180" },
    { src: "dessert.jpg", label: "Desserts", price: "₹120" },
    { src: "shawarma.jpg", label: "Shawarma", price: "₹170" },
    { src: "juice.jpg", label: "Juices", price: "₹90" },
    { src: "south_indian.jpg", label: "South Indian", price: "₹220" },
    { src: "parota.jpg", label: "Parota", price: "₹60" },
    { src: "pure_veg.jpg", label: "Pure Veg", price: "₹320" },
    { src: "cake.jpg", label: "Cakes", price: "₹150" },
  ];

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.src} alt={item.label} className="menu-item-image" />
            <p className="menu-item-label">{item.label}</p>
            <p className="menu-item-price">{item.price}</p>
            <Link
              to="/order"
              state={{
                name: item.label,
                image: item.src,
                price: item.price,
              }}
            >
              <button className="order-btn">Order Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
