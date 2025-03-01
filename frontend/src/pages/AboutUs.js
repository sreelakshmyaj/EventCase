import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-container">
        <div className="about-text">
          <h1>Who We Are</h1>
          <p>
            Welcome to <strong>EventCase</strong> – your trusted partner in crafting
            unforgettable events! Whether it's a dreamy wedding, a high-energy
            corporate event, or a private celebration, we make every moment
            extraordinary.
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Passionate & Creative Event Planners</li>
            <li>End-to-End Event Management</li>
            <li>Industry Experts & Top-tier Vendors</li>
            <li>Tailored Experiences for Every Occasion</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="https://cdn.pixabay.com/photo/2018/09/05/08/05/party-3655712_1280.jpg" alt="About EventCase" />
        </div>
      </div>

      <div className="about-journey">
        <h2>Our Journey</h2>
        <p>
          Founded in 2025, EventCase started with a vision to revolutionize event
          planning. Over the years, we've successfully brought countless
          celebrations to life with innovative ideas and seamless execution.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
