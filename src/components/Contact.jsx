// Contact.js
import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumber: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to backend)
    console.log("Contact form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", orderNumber: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We're here to help! Reach out with any questions or feedback.</p>

      {/* Contact Information Section */}
      <div className="contact-info">
        <p><strong>Customer Support:</strong></p>
        <p>Phone: +91 (987) 654-3210</p> {/* Updated phone number for India */}
        <p><a href="mailto:support@fooddeliveryapp.com">support@fooddeliveryapp.com</a></p> {/* Updated email for India */}
        <div className="social-media">
          <p>Follow us on:</p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> {/* Added LinkedIn */}
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Order Number (optional):
          <input
            type="text"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
