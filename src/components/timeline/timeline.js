import React, { useState } from "react";
import "./timeline.css";

// Generate placeholder data

const n = 8; 

const timelineData = Array.from({ length: n }, (_, i) => ({
  id: i,
  year: `202${i}`,
  title: `Placeholder Title ${i + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}));

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const angleSep = 180 / (n + 1);

  const currentRotation = -(activeIndex * angleSep);

  return (
    <div className="timeline-wrapper">
      <div className="content-box">
        <h1 className="content-title">{timelineData[activeIndex].title}</h1>
        <div className="content-card">
          <h2>{timelineData[activeIndex].year}</h2>
          <p>{timelineData[activeIndex].description}</p>
        </div>
      </div>
      <div
        className="circular-timeline"
        style={{
          transform: `rotate(${currentRotation}deg)`,
        }}
      >
        {timelineData.map((item, index) => {
          const angle = index * angleSep;

          return (
            <div
              key={index}
              className={`timeline-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-date">{item.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;