import React, { useState, useEffect } from "react";
import h1 from "../../assets/h1.jpg";
import h2 from "../../assets/h2.jpg";
import h3 from "../../assets/h3.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./home.css";

function Home() {
  return <Body />;
}

function Body() {
  const images = [h1, h2, h3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          height="700px"
          width="100%"
        />
        <div className="slider-controls">
          <button className="prev-button" onClick={handlePrevious}>
            <ArrowBackIos />
          </button>
          <button className="next-button" onClick={handleNext}>
            <ArrowForwardIos />
          </button>
        </div>
      </div>
      <br />
      <h1>
        <center>About LAC (Legal Aid Clinic)</center>
      </h1>
      <div className="content">
        <p className="content-1">
          The Legal Aid Clinic, driven by a commitment to uphold the
          constitutional rights of the economically backward, indigent, and
          marginalised, serves as a vital institution dedicated to ensuring
          access to justice for all.
        </p>
        <p className="content-1">
          Rooted in the State's prime obligation to provide free legal aid, the
          clinic actively works with the Tamil Nadu Legal Services Authority and
          District Legal services Authority bridge the justice gap by offering
          complimentary legal services individuals unable to afford private
          representation.
        </p>
        <p className="content-1">
          With a multifaceted approach, the clinic not only provides advocacy
          and representation for marginalised populations in areas such as
          family law, housing, employment, and criminal defence but also focuses
          on education. Through legal education initiatives, data collection and
          analysis, community outreach programs, and engagement with law
          students at the Tamil Nadu Dr. Ambedkar Law University, the clinic
          empowers individuals with knowledge of their legal rights, fosters
          awareness about legal issues, and trains the next generation of legal
          professionals.
        </p>
        <p className="content-1">
          Additionally, the Legal Aid Clinic takes strides towards systemic
          change by identifying and addressing gaps in the legal system,
          participating policy advocacy, law reform initiatives, and strategic
          litigation bring about lasting improvements for
          disadvantaged communities.
        </p>
      </div>
    </div>
  );
}

export default Home;
