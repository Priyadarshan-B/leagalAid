import React from "react";
import "./card.css";

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">View More</button>
      </div>
    </div>
  );
}

export default Card;
