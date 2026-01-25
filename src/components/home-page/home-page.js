import About from "./home-page-resources/about";
import Polaroid from "./home-page-resources/polaroid-pic";
import RetroBanner from "./retro-banner";
import "./home-page.css";
import Tabbed from './home-page-resources/tabbed-section'
import Featured from './home-page-resources/featured-resource'

function Home() {
  const img = (p) => `${process.env.PUBLIC_URL}${p}`;

  return (
    <>
      <RetroBanner />

      <div className="polaroid-string">
        <div style={{ transform: "rotate(5deg)" }}>
          <Polaroid imageurl={img("/images/katy-stock.jpg")} text="learn" />
        </div>

        <div style={{ transform: "rotate(-5deg)"}}>
          <Polaroid imageurl={img("/images/katy-hero.jpg")} text="search" />
        </div>

        <div style={{ transform: "rotate(7deg)" }}>
          <Polaroid imageurl={img("/images/katy-tx.jpg")} text="join" />
        </div>
      </div>
      <About />
      
      <Tabbed />
      <Featured />

      
    </>
  );
}

export default Home;
