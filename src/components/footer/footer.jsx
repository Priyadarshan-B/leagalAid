import React, { useState } from "react";
import "./footer.css";
import Swal from "sweetalert2"; // Import SweetAlert2
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState(""); // State to handle the email input

  // Function to handle newsletter subscription
  const handleSubscribe = () => {
    if (email) {
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: `Thank you for subscribing, ${email}!`,
      });
      setEmail(""); // Reset email input after subscribing
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address!",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>1st floor, Amenities block,</p>
          <p>School of Excellence in Law,</p>
          <p>The Tamil Nadu Dr. Ambedkar Law University,</p>
          <p>M.G.R. Salai, Perungudi, Chennai - 600 113</p>
          <br />
          <p>Email: bpriyan18082004@gmail.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/9789769208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="mailto:bpriyan18082004@gmail.com">
              <FaEnvelope />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>LAC</h3>
          <ul className="footer-links">
            <li>
              <a href="/about">About LAC SOEL</a>
            </li>
            <li>
              <a href="/lac">The LAC</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/officebearers">Previous Office Bearers</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h3>Newsletter</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button onClick={handleSubscribe} className="subscribe-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
