import React from "react";
import "../styles/RestaurantChains.css";

const RestaurantChains = () => {
  return (
    <div className="scroll-container">
      <h3 className="title">Explore Top Restaurants</h3>
      <div className="items-container">
        <div className="scroll-item1">
          <img src="pizzahut.jpg" alt="Pizza Hut" />
          <p>Pizza Hut</p>
        </div>
        <div className="scroll-item1">
          <img src="dominos.jpg" alt="Domino's Pizza" />
          <p>Domino's Pizza</p>
        </div>
        <div className="scroll-item1">
          <img src="kfc.jpg" alt="KFC" />
          <p>KFC</p>
        </div>
        <div className="scroll-item1">
          <img src="mcdonalds.jpg" alt="McDonald's" />
          <p>McDonald's</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantChains;
