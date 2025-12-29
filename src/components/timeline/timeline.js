import React, { useState, useEffect, useRef } from "react";
import "./timeline.css";

const n = 8;

const timelineData = Array.from({ length: n }, (_, i) => ({
  id: i,
  year: `202${i}`,
  title: `Placeholder Title ${i + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "images/placeholder-image.png",
}));

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
        alt="Katy Community"
        className="year-image"
      />

      
    </div>
  );
}

export default Timeline;
