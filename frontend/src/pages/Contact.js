import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>

        <div className="contact-content">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={24} className="icon" />
              <p>123 Event Street, Kochi, India</p>
            </div>
            <div className="contact-item">
              <Phone size={24} className="icon" />
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-item">
              <Mail size={24} className="icon" />
              <p>support@eventcase.com</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="contact-map">
          <h2>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.2586589284886!2d76.26730415102099!3d10.01592897548988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d54cb9c92d3%3A0xcda99f4371f730!2sKochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
