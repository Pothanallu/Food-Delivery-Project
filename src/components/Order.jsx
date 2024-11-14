// Order.js
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Order.css";

const Order = () => {
  const location = useLocation();
  const { name, image, price } = location.state || {}; // Fallback if state is undefined

  // If any of the order details are missing, show an error message
  if (!name || !image || !price) {
    return <p className="error-message">Error: Order details are missing.</p>;
  }

  return (
    <div className="order-container">
      <h1>Order Details</h1>

      {/* Display the order item details */}
      <div className="order-item">
        <img src={image} alt={name} className="order-item-image" />
        <p className="order-item-name">{name}</p>
        <p className="order-item-price">{price}</p>
      </div>

      {/* Link to payment page, passing the data */}
      <Link
        to="/payment"
        state={{ name, image, price }} // Pass data to Payment Page
      >
        <button className="order-btn">Proceed to Payment</button>
      </Link>
    </div>
  );
};

export default Order;
