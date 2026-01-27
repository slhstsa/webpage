import React, { useState, useEffect, useRef } from "react";
import "./timeline.css";

const tsaImage = `${process.env.PUBLIC_URL}/images/tsa-logo.png`;

const timelineData = [
  {
    id: -1,
    year: "pre-1800s",
    title: "Native Land",
    description:
      "Before european colonization, Katy was prairie land used by the Karankawa Native tribes. ",
    fact: "Before coming under American territory, Katy was a part of Spain, France, Mexico, and the Republic of Texas.",
    image: `${process.env.PUBLIC_URL}/images/prairie.jpg`,
  },
  {
    id: 0,
    year: "1893",
    title: "Railroad Beginnings",
    description:
      "Katy is founded as a railroad stop along the Missouri-Kansas-Texas (MKT) Railroad.",
    fact: "Katy actually owes its name to this railroad! It became colloquially known as the K-T (Katy) by its riders.",
    image: `${process.env.PUBLIC_URL}/images/mkt_caboose.png`,
  },
  {
    id: 1,
    year: "Early 1900s",
    title: "Rice Capital of the World",
    description:
      "Thanks to the industrial developments in irrigation and farming, earning Katy its long-running nickname as the rice-capital.",
    fact: "Katy actually suffered a huge hit at the start of the 1900s from the Hurrican of 1900 that destroyed much of the town.",
    image: `${process.env.PUBLIC_URL}/images/rice.jpg`,
  },
  {
    id: 2,
    year: "1940s-1950s",
    title: "Economic Shifts",
    description:
      "Rice farming declines and the local economy begins transitioning beyond agriculture.",
    fact: "It was during this time that Katy was officially incorporated as a city.",
    image: `${process.env.PUBLIC_URL}/images/horses-real.jpg`,
  },
  {
    id: 3,
    year: "1970s",
    title: "Interstate 10 Growth",
    description:
      "Construction of Interstate 10 accelerates suburban development and regional access.",
    fact: "While I-10 was under construction since 1957, the final stretch of the highway was not finished until 1990.",
    image: `${process.env.PUBLIC_URL}/images/i10.jpeg`,
  },
  {
    id: 4,
    year: "1990s-2000s",
    title: "Master-Planned Boom",
    description:
      "Rapid population growth leads to major expansion and master-planned communities.",
    fact: "During this time Katy grew from around 8000 people to over 11000. Katy saw a 3000 person increase!",
    image: `${process.env.PUBLIC_URL}/images/katy-view.jpg`,
  },
  {
    id: 5,
    year: "2010s-Present",
    title: "Continued Urban Growth",
    description:
      "Katy continues to grow with new neighborhoods, businesses, and community services.",
    fact: "In 1919 KISD was found with only 1 school, and it now registers over 85,000 students and over 40 schools",
    image: `${process.env.PUBLIC_URL}/images/2nd-katy-stock.jpg`,
  },
];

const n = timelineData.length;

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const angleSep = 180 / (n + 1);
  const currentRotation = -(activeIndex * angleSep);
  const wrapperReference = useRef(null);
  const goPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setActiveIndex((prev) => Math.min(prev + 1, n - 1));

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
          <div className="fun-fact">
            {" "}
            Fun Fact: {timelineData[activeIndex].fact}
          </div>
        </div>
      </div>

      <div
        className="image-mask-container"
        style={{ transform: `rotate(${currentRotation * 0.6}deg)` }}
      >
        <img
          src={timelineData[activeIndex].image}
          alt=""
          className="masked-image"
          key={activeIndex}
          style={{
            transform: `
      rotate(${-currentRotation * 0.6}deg)
      scale(1.1)
      translateY(-400px)
    `,
          }}
        />
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
      <div className="wheel-nav">
        <button
          type="button"
          className="wheel-button prev"
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Previous timeline entry"
        >
          <span className="wheel-arrow">&lt;</span>
          <span className="wheel-text">Prev</span>
        </button>
        <button
          type="button"
          className="wheel-button next"
          onClick={goNext}
          disabled={activeIndex === n - 1}
          aria-label="Next timeline entry"
        >
          <span className="wheel-text">Next</span>
          <span className="wheel-arrow">&gt;</span>
        </button>
      </div>
    </div>
  );
}

export default Timeline;
