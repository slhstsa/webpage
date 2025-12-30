import About from "./home-page-resources/about";
import Polaroid from "./home-page-resources/polaroid-pic";
import RetroBanner from "./retro-banner";
import "./home-page.css";

function Home() {
  const img = (p) => `${process.env.PUBLIC_URL}${p}`;

  return (
    <>
      <RetroBanner />

      <div className="polaroid-string">
        <div style={{ transform: "rotate(5deg)" }}>
          <Polaroid imageurl={img("/images/katy-stock.jpg")} text="learn" />
        </div>

        <div style={{ transform: "rotate(-5deg)" }}>
          <Polaroid imageurl={img("/images/katy-hero.jpg")} text="search" />
        </div>

        <div style={{ transform: "rotate(7deg)" }}>
          <Polaroid imageurl={img("/images/katy-stock.jpg")} text="join" />
        </div>
      </div>

      <About />
    </>
  );
}

export default Home;
