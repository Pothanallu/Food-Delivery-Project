import React from "react";
import "../styles/RestaurantCard.css"; // Ensure the correct path

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      <img
        src={`/images/${restaurant.image}`} // Ensure images are in /public/images
        alt={restaurant.name}
        className="restaurant-card-image"
      />
      <h2 className="restaurant-card-name">{restaurant.name}</h2>
      <p className="restaurant-card-cuisine">{restaurant.cuisine}</p>
    </div>
  );
};

export default RestaurantCard;
