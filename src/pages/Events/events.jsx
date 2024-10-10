import React, { useState, useEffect } from "react";
import Card from "../../components/card/card";
import cardImage from "../../assets/h1.jpg";
import noResult from "../../assets/no_result.png";
import "./events.css";

const eventData = [
  {
    image: cardImage,
    title: "Legal Aid Clinic",
    description:
      "The Legal Aid Clinic, driven by a commitment to uphold the constitutional rights, serves as a vital institution to ensure access to justice for all.",
    content: "Detailed information about Legal Aid Clinic...",
    eventLink: "https://drive.google.com/file/d/1ERpDI146kjPeZvieSOpI_OnOe5JKptQt/view?usp=drive_link",
    incharges: ["Priyan", "Harish"],
  },
  {
    image: cardImage,
    title: "Community Outreach",
    description:
      "Our clinic focuses on community outreach programs and engagement with law students, fostering awareness and legal education.",
    content: "Detailed information about Community Outreach...",
    eventLink: "https://drive.google.com/file/d/1ERpDI146kjPeZvieSOpI_OnOe5JKptQt/view?usp=drive_link",
    incharges: ["Vishnu", "Sujith"],
  },
  {
    image: cardImage,
    title: "Justice for All",
    description:
      "By identifying gaps in the legal system, we participate in policy advocacy, law reform, and strategic litigation to bring about systemic change.",
    content: "Detailed information about Justice for All...",
    eventLink: "https://drive.google.com/file/d/1ERpDI146kjPeZvieSOpI_OnOe5JKptQt/view?usp=drive_link",
    incharges: ["Nithya", "Nandhini"],
  },
];

function Slider({ event, onClose }) {
  if (!event) return null;

  const handleOutsideClick = (e) => {
    if (e.target.className === "slider-container open") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="slider-container open">
      <div className="slider-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{event.title}</h2>
        <img src={event.image} alt={event.title} className="slider-image" />
        <p>{event.description}</p>
        <p>
          <strong>Incharges:</strong> {event.incharges.join(", ")}
        </p>
        <a
          href={event.eventLink}
          target="_blank"
          rel="noopener noreferrer"
          className="event-link"
        >
          Drive Link
        </a>
      </div>
    </div>
  );
}

function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseSlider = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="search-flex">
        <h1>
          <center>Events</center>
        </h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="card-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} onClick={() => handleCardClick(event)}>
              <Card
                image={event.image}
                title={event.title}
                description={event.description}
              />
            </div>
          ))
        ) : (
          <div className="no-result">
            <img src={noResult} alt="no events" />
          </div>
        )}
      </div>

      <Slider event={selectedEvent} onClose={handleCloseSlider} />
    </div>
  );
}

export default Events;
