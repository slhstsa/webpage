import React, { useState, useEffect, useRef } from "react";
import "./timeline.css";

const tsaImage = `${process.env.PUBLIC_URL}/images/tsa-logo.png`;

const timelineData = [
  {
    id: 0,
    year: "1893",
    title: "Railroad Beginnings",
    description:
      "Katy is founded as a railroad stop along the Missouri-Kansas-Texas (MKT) Railroad.",
    image: tsaImage,
  },
  {
    id: 1,
    year: "Early 1900s",
    title: "Rice Capital of the World",
    description:
      "Irrigation and farming take off, earning Katy its long-running rice capital nickname.",
    image: tsaImage,
  },
  {
    id: 2,
    year: "1940s-1950s",
    title: "Agriculture Shifts",
    description:
      "Rice farming declines and the local economy begins transitioning beyond agriculture.",
    image: tsaImage,
  },
  {
    id: 3,
    year: "1970s",
    title: "Interstate 10 Growth",
    description:
      "Construction of Interstate 10 accelerates suburban development and regional access.",
    image: tsaImage,
  },
  {
    id: 4,
    year: "1990s-2000s",
    title: "Master-Planned Boom",
    description:
      "Rapid population growth leads to major expansion and master-planned communities.",
    image: tsaImage,
  },
  {
    id: 5,
    year: "2010s-Present",
    title: "Continued Urban Growth",
    description:
      "Katy continues to grow with new neighborhoods, businesses, and community services.",
    image: tsaImage,
  },
];

const n = timelineData.length;

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const angleSep = 180 / (n + 1);
  const currentRotation = -(activeIndex * angleSep);
  const wrapperReference = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, n - 1));
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    const wrapper = wrapperReference.current;
    if (!wrapper) return;

    wrapper.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="timeline-wrapper" ref={wrapperReference}>
      <div className="content-box">
        <h1 className="content-title">{timelineData[activeIndex].title}</h1>
        <div className="content-card">
          <h2>{timelineData[activeIndex].year}</h2>
          <p>{timelineData[activeIndex].description}</p>
        </div>
      </div>

      <div
        className="circular-timeline"
        style={{ transform: `rotate(${currentRotation}deg)` }}
      >
        {timelineData.map((item, index) => {
          const angle = index * angleSep;

          return (
            <div
              key={index}
              className={`timeline-item ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.year}</div>
            </div>
          );
        })}
      </div>

      <img
        src={timelineData[activeIndex].image}
        alt="TSA logo"
        className="year-image"
      />

      
    </div>
  );
}

export default Timeline;
