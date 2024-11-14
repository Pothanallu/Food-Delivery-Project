import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import RestaurantList from "./RestaurantList";
import Menu from "./Menu";
import RestaurantChains from "./RestaurantChains";
import { RestaurantContext } from "../contexts/RestaurantContext";
import FeaturedDishes from "./FeaturedDishes";
import NearbyRestaurants from "./NearbyRestaurants";
import MenuC from "./MenuC";
import "../styles/HomePage.css";

const HomePage = () => {
  const { selectedRestaurant } = useContext(RestaurantContext) || {};
  const [city, setCity] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const scrollContainerRef = useRef(null);

  // Handle city search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setCity(value);
    setIsSearching(Boolean(value));
  };

  // Updated cuisine items
  const cuisines = [
    { src: "biryani.jpg", label: "Biryani" },
    { src: "pizza.jpg", label: "Pizzas" },
    { src: "dosa.jpg", label: "Dosa" },
    { src: "idli.jpg", label: "Idli" },
    { src: "north_indian.jpg", label: "North Indian" },
    { src: "chinese.jpg", label: "Chinese" },
    { src: "burger.jpg", label: "Burgers" },
    { src: "pasta.jpg", label: "Pasta" },
    { src: "salad.jpg", label: "Salad" },
    { src: "dessert.jpg", label: "Desserts" },
    { src: "shawarma.jpg", label: "Shawarma" },
    { src: "juice.jpg", label: "Juices" },
    { src: "south_indian.jpg", label: "South Indian" },
    { src: "parota.jpg", label: "Parota" },
    { src: "pure_veg.jpg", label: "Pure Veg" },
    { src: "cake.jpg", label: "Cakes" },
  ];

  return (
    <div className="container">
      {/* Scrollable Cuisine Section */}
      <div className="scroll-container" ref={scrollContainerRef}>
        <h3 className="cuisine-title">Popular Cuisines</h3>
        <div className="scroll-items">
          <button className="scroll-button left">{"<"}</button>

          {cuisines.map((cuisine, idx) => (
            <div className="scroll-item" key={idx}>
              {/* Link for each cuisine */}
              <Link to={`/menu`}>
                <img src={cuisine.src} alt={cuisine.label} />
                <p>{cuisine.label}</p>
              </Link>
            </div>
          ))}

          <button className="scroll-button right">{">"}</button>
        </div>
      </div>

      {/* Conditional rendering for city-based menu */}
      {isSearching && city && <MenuC city={city} />}

      {/* Restaurant List Section */}
      <h3 className="section-title">Explore Restaurants</h3>
      <RestaurantList />

      {/* Featured Dishes Section */}
      <h3 className="section-title">Featured Dishes</h3>
      <FeaturedDishes />

      {/* Nearby Restaurants Section */}
      <h3 className="section-title">Nearby Restaurants</h3>
      <NearbyRestaurants />

      {/* Restaurant Chains Section */}
      <h3 className="section-title">Popular Restaurant Chains</h3>
      <RestaurantChains />
    </div>
  );
};

export default HomePage;
