import React, { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../contexts/RestaurantContext";
import MenuTR from "./MenuTR"; // Import the MenuTR component
import "../styles/RestaurantList.css"; // Ensure the correct path

const RestaurantList = () => {
  const { restaurants, setSelectedRestaurant, selectedRestaurant } =
    useContext(RestaurantContext);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant); // Set the selected restaurant
  };

  return (
    <div className="restaurant-list">
      {restaurants && restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.name} // Ensure the key is unique (restaurant name or id)
            restaurant={restaurant}
            onClick={() => handleRestaurantClick(restaurant)} // Set the selected restaurant
          />
        ))
      ) : (
        <p>No restaurants available.</p>
      )}
      {selectedRestaurant && <MenuTR />}{" "}
      {/* Render MenuTR when a restaurant is selected */}
    </div>
  );
};

export default RestaurantList;
