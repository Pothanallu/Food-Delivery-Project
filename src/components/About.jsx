// About.js
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to Food Delivery, your go-to app for delicious meals delivered right to your doorstep!</p>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make quality food accessible and convenient for everyone. Whether you're craving local flavors, global cuisines, or fast-food favorites, we connect you with top restaurants to satisfy your every craving.
        </p>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Wide Selection of Restaurants:</strong> Explore a variety of local and international cuisines.</li>
          <li><strong>Real-Time Order Tracking:</strong> Stay updated on your order status from preparation to delivery.</li>
          <li><strong>Easy Payment Options:</strong> Choose from multiple payment methods for a seamless experience.</li>
          <li><strong>Fast and Reliable Delivery:</strong> Our trusted delivery partners ensure your food arrives fresh and on time.</li>
        </ul>
      </section>

      <section className="values-section">
        <h2>Why Choose Us?</h2>
        <p>
          At Food Delivery, we prioritize quality, convenience, and customer satisfaction. Our user-friendly platform, efficient delivery network, and commitment to excellent service make us the preferred choice for food lovers across the city.
        </p>
      </section>

      <section className="safety-section">
        <h2>Our Commitment to Safety</h2>
        <p>
          Your health and safety are our top priority. We work closely with our restaurant partners to ensure food safety standards and contactless delivery options.
        </p>
      </section>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have questions or feedback? Reach out to us anytime at <a href="mailto:support@fooddeliveryapp.com">support@fooddeliveryapp.com</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
