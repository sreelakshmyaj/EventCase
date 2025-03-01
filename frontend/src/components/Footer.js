import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We specialize in crafting unforgettable events, from weddings to corporate gatherings. Let us bring your vision to life.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><a href="#">Services</a></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@eventcase.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Kochi, Kerala, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EventCase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
