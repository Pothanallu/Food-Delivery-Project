import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import RestaurantList from "./components/RestaurantList";
import FeaturedDishes from "./components/FeaturedDishes";
import NearbyRestaurants from "./components/NearbyRestaurants";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import MenuR from "./components/MenuR";
import MenuC from "./components/MenuC";
import Order from "./components/Order";
import PaymentPage from "./components/PaymentPage";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Handle city search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setCity(value);
    setIsSearching(!!value);
  };

  return (
    <div className="container">
      {/* Global Navbar */}
      <Navbar
        city={city}
        setCity={setCity}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        handleSearch={handleSearch}
      />

      {/* Routes */}
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Homepage route */}
        <Route path="/home" element={<HomePage />} />

        {/* Menu routes */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/menuR" element={<MenuR />} />
        <Route path="/menuR/:restaurantName" element={<MenuR />} />

        {/* Conditional rendering for city-based search */}
        {isSearching && city && (
          <Route path="/menu/search" element={<MenuC city={city} />} />
        )}

        {/* Restaurants route */}
        <Route path="/restaurants" element={<RestaurantList />} />

        {/* Order page route */}
        <Route path="/order" element={<Order />} />

        {/* Payment page route */}
        <Route path="/payment" element={<PaymentPage />} />

        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
