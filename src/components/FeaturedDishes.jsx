import React from "react";
import "../Styles/FeaturedDishes.css";

const FeaturedDishes = () => {
  const featuredDishes = [
    { name: "Paneer Butter Masala", image: "paneer_butter_masala.jpg", price: "₹250", description: "Rich and creamy paneer curry." },
    { name: "Hyderabadi Biryani", image: "hyderabadi_biryani.jpg", price: "₹300", description: "Aromatic and flavorful biryani." },
    { name: "Masala Dosa", image: "masala_dosa.jpg", price: "₹120", description: "Crispy dosa filled with spicy potato." },
    { name: "Chole Bhature", image: "chole_bhature.jpg", price: "₹150", description: "Spiced chickpeas with fried bread." },
    // Add more dishes as needed
  ];

  return (
    <div className="featured-dishes">
      {featuredDishes.map((dish, index) => (
        <div key={index} className="dish-card">
          <img src={dish.image} alt={dish.name} className="dish-image" />
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p className="price">{dish.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedDishes;
