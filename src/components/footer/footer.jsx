import React, { useState } from "react";
import "./footer.css";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaLinkedin, 
  FaInstagram, 
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState(""); 

  const handleSubscribe = () => {
    if (email) {
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: `Thank you for subscribing, ${email}!`,
      });
      setEmail("");
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
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>1st floor, Amenities block,</p>
          <p>School of Excellence in Law,</p>
          <p>The Tamil Nadu Dr. Ambedkar Law University,</p>
          <p>M.G.R. Salai, Perungudi, Chennai - 600 113</p>
          <br />
          <p>Email: legalaidclinic.soel@gmail.com </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            {/* <a
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
            </a> */}
            {/* <a
              href="https://wa.me/9789769208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a> */}
            <a href="mailto:legalaidclinic.soel@gmail.com ">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/legal-aid-clinic-tndalu-7b6463295/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/tndalu_lac/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a> */}
          </div>
        </div>
        <div className="footer-section">
          <h3>Faculty Coordinators</h3>
          <p> Dr. P. Brinda - +91 9003066025</p>
          <p>Dr. M. Sunil Gladson - +91 9444564019</p>
          <br />
          <h3> For any suggestions</h3>
          <p>S.V. Dhiraj - +918838602226
          (Student Coordinator)</p>
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

        
      </div>
    </footer>
  );
};

export default Footer;
