import { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  const [markerVisible, setMarkerVisible] = useState(false);

  const handleMapClick = () => {
    setMarkerVisible(true);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-area">
            <h2>About Us</h2>
            <p>
              Good Old Katy is a Community hub and center for all things Houston
              and Katy Texas. We demonstrate the many opportunities and
              resources of over 600 square miles of Texan land. Our mission is
              to display the rich history of Katy and offer our aid to all of
              its inhabitants.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/texas.svg`}
            alt="Katy Community"
            onClick={handleMapClick}
            style={{ cursor: "pointer" }}
          />

          <img
            className="katy-marker"
            src={`${process.env.PUBLIC_URL}/images/katypin.svg`}
            alt="Community"
            style={{ opacity: markerVisible ? 1 : 0 }}
          />
        </div>

        <div className="right-section">
          <div className="katy-locate">Can you find where Katy is located?</div>
          <Link to="/map" className="plink">
            <div className="katy-link">
              See Katy Map
              <img
                src={`${process.env.PUBLIC_URL}/images/right-arrow.svg`}
                alt="right arrow"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
