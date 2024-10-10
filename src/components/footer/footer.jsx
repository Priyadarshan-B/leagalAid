import React from "react";
import './footer.css';  // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MCA Official Facebook Page</h3>
          <div className="facebook-page">
            <iframe
              title="Facebook"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMootCourtAssociationSOEL&tabs&width=280&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="280"
              height="130"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
        <div className="footer-section">
          <h3>MCA</h3>
          <ul className="footer-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/the-mca">The MCA</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/mentorship">Mentorship</a></li>
            <li><a href="/previous-office-bearers">Previous Office Bearers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
