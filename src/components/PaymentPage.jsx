// PaymentPage.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Payment.css";

const PaymentPage = () => {
  const location = useLocation();
  const { name, image, price } = location.state || {}; // Retrieve passed data

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const [error, setError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const validateCardNumber = (cardNumber) => /^[0-9]{16}$/.test(cardNumber);

  const validateExpiryDate = (expiryDate) => {
    const [month, year] = expiryDate.split("/");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear().toString().slice(-2);

    return (
      month >= 1 &&
      month <= 12 &&
      year >= currentYear &&
      (year > currentYear || month >= currentMonth)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !paymentInfo.cardNumber ||
      !paymentInfo.cardExpiry ||
      !paymentInfo.cardCVC
    ) {
      setError("Please fill in all payment details.");
      return;
    }

    if (!validateCardNumber(paymentInfo.cardNumber)) {
      setError("Please enter a valid card number (16 digits).");
      return;
    }

    if (!validateExpiryDate(paymentInfo.cardExpiry)) {
      setError(
        "Please enter a valid expiry date (MM/YY). Ensure it's not expired."
      );
      return;
    }

    if (!/^[0-9]{3}$/.test(paymentInfo.cardCVC)) {
      setError("Please enter a valid CVC (3 digits).");
      return;
    }

    setPaymentSuccess(true);
    alert("Payment successful! Thank you for your order.");
  };

  return (
    <div className="payment-container">
      <h1>Payment Details</h1>

      {/* Display order details */}
      {name && image && price && (
        <div className="order-item">
          <img src={image} alt={name} className="order-item-image" />
          <p className="order-item-name">{name}</p>
          <p className="order-item-price">{price}</p>
        </div>
      )}

      {/* Payment form */}
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            required
            placeholder="Enter card number"
            maxLength="16"
            pattern="\d{16}"
            title="Card number should be 16 digits"
          />
        </div>

        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            name="cardExpiry"
            value={paymentInfo.cardExpiry}
            onChange={handleChange}
            required
            placeholder="MM/YY"
            maxLength="5"
            pattern="\d{2}/\d{2}"
            title="Expiry date should be MM/YY"
          />
        </div>

        <div className="form-group">
          <label>CVC:</label>
          <input
            type="text"
            name="cardCVC"
            value={paymentInfo.cardCVC}
            onChange={handleChange}
            required
            placeholder="Enter CVC"
            maxLength="3"
            pattern="\d{3}"
            title="CVC should be 3 digits"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="payment-button">
          Pay Now
        </button>

        {paymentSuccess && <p className="success">Payment successful!</p>}
      </form>
    </div>
  );
};

export default PaymentPage;
