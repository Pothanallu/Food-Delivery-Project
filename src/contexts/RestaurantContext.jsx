import React, { createContext, useState, useEffect } from "react";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Menu data for each restaurant
  const menuData = {
    "Biryani House": [
      { src: "/biryani.jpg", label: "Biryani", price: "₹250" },
      { src: "/cake.jpg", label: "Cakes", price: "₹150" },
      { src: "/burger.jpg", label: "Burgers", price: "₹150" },
      { src: "/salad.jpg", label: "Salad", price: "₹180" },
      { src: "/dessert.jpg", label: "Desserts", price: "₹120" },
    ],
    "Sagar Ratna": [
      { src: "/dosa.jpg", label: "Dosa", price: "₹120" },
      { src: "/idli.jpg", label: "Idli", price: "₹80" },
      { src: "/south_indian.jpg", label: "South Indian", price: "₹220" },
      { src: "/parota.jpg", label: "Parota", price: "₹60" },
      { src: "/cake.jpg", label: "Cakes", price: "₹150" },
    ],
    "Punjab Grill": [
      { src: "/north_indian.jpg", label: "North Indian", price: "₹350" },
      { src: "/chinese.jpg", label: "Chinese", price: "₹280" },
      { src: "/shawarma.jpg", label: "Shawarma", price: "₹170" },
      { src: "/juice.jpg", label: "Juices", price: "₹90" },
      { src: "/pure_veg.jpg", label: "Pure Veg", price: "₹320" },
    ],
    "Barbeque Nation": [
      { src: "/pizza.jpg", label: "Pizzas", price: "₹300" },
      { src: "/burger.jpg", label: "Burgers", price: "₹150" },
      { src: "/pasta.jpg", label: "Pasta", price: "₹200" },
      { src: "/salad.jpg", label: "Salad", price: "₹180" },
      { src: "/dessert.jpg", label: "Desserts", price: "₹120" },
    ],
    "Indian Accent": [
      { src: "/biryani.jpg", label: "Biryani", price: "₹250" },
      { src: "/north_indian.jpg", label: "North Indian", price: "₹350" },
      { src: "/chinese.jpg", label: "Chinese", price: "₹280" },
      { src: "/shawarma.jpg", label: "Shawarma", price: "₹170" },
      { src: "/pure_veg.jpg", label: "Pure Veg", price: "₹320" },
    ],
  };

  useEffect(() => {
    setRestaurants([
      { name: "Biryani House", cuisine: "Indian", image: "/biryani_house.jpg" },
      {
        name: "Sagar Ratna",
        cuisine: "South Indian",
        image: "/sagar_ratna.jpg",
      },
      {
        name: "Punjab Grill",
        cuisine: "North Indian",
        image: "/punjab_grill.jpg",
      },
      {
        name: "Barbeque Nation",
        cuisine: "Indian",
        image: "/barbeque_nation.jpg",
      },
      {
        name: "Indian Accent",
        cuisine: "Contemporary Indian",
        image: "/indian_accent.jpg",
      },
    ]);
  }, []);

  const handleAddItems = (dish) => {
    setCartItems([...cartItems, dish]);
    setTotalPrice(totalPrice + parseInt(dish.price.replace("₹", "")));
  };

  const handleRemoveItems = (dish) => {
    const updatedCart = cartItems.filter((item) => item.label !== dish.label);
    setCartItems(updatedCart);
    setTotalPrice(totalPrice - parseInt(dish.price.replace("₹", "")));
  };

  const emptyCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const value = {
    restaurants,
    selectedRestaurant,
    setSelectedRestaurant,
    cartItems,
    handleAddItems,
    handleRemoveItems,
    totalPrice,
    emptyCart,
    menuData,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };
