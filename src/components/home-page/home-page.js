
import Banner from './home-page-resources/banner'; 
import Resources from './resource-grid/resource-grid';
import About from './home-page-resources/about'; 
import Polaroid from './home-page-resources/polaroid-pic';
import RetroBanner from './retro-banner';
import './home-page.css'
function Home(){
  return(
    <>
      <RetroBanner />
      <div class="polaroid-string">
        <div style={{transform: 'rotate(5deg)'}}><Polaroid imageurl = "images/katy-stock.jpg" text="learn"/></div>
        <div style={{transform: 'rotate(-5deg)'}}><Polaroid imageurl = "images/katy-hero.jpg" text="search"/></div>
        <div style={{transform: 'rotate(7deg)'}}><Polaroid imageurl = "images/katy-stock.jpg" text="join"/></div>
      </div>
      <About />
    </>
  );
}

export default Home;