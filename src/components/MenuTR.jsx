import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext"; // Import the context
import "../styles/MenuTR.css"; // Ensure this file exists for styling

const MenuTR = () => {
  const { selectedRestaurant, menuData, handleAddItems } =
    useContext(RestaurantContext);

  if (!selectedRestaurant) return <p>Select a restaurant</p>; // If no restaurant is selected, prompt the user to select one

  const menu = menuData[selectedRestaurant.name]; // Get the menu for the selected restaurant

  return (
    <div className="menu">
      <h3>Menu for {selectedRestaurant.name}</h3>
      <div className="menu-items">
        {menu.map((dish, index) => (
          <div key={index} className="menu-item">
            <img src={`/images/${dish.src}`} alt={dish.label} />
            <p>{dish.label}</p>
            <p>{dish.price}</p>
            <button onClick={() => handleAddItems(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTR;
