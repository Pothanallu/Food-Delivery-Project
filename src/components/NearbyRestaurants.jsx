import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Styles/NearbyRestaurants.css";

const NearbyRestaurants = () => {
  const nearbyRestaurants = [
    {
      name: "Annapurna Bhavan",
      distance: "1.2 km",
      rating: 4.5,
      image: "/images/annapurna-bhavan.jpg", // Corrected path
    },
    {
      name: "Swadisht Dhaba",
      distance: "2.0 km",
      rating: 4.7,
      image: "/images/swadisht-dhaba.jpg", // Corrected path
    },
    {
      name: "Punjabi Tandoor",
      distance: "0.8 km",
      rating: 4.3,
      image: "/images/punjabi-tandoor.jpg", // Corrected path
    },
    {
      name: "Royal Biryani House",
      distance: "1.5 km",
      rating: 4.6,
      image: "/images/royal-biryani-house.jpg", // Corrected path
    },
    // Add more as needed
  ];

  return (
    <div className="nearby-restaurants">
      {nearbyRestaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-card">
          {/* Link to the MenuR page using restaurant name */}
          <Link to={`/menuR/${encodeURIComponent(restaurant.name)}`}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image"
            />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.distance}</p>
            <p>⭐ {restaurant.rating}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NearbyRestaurants;
