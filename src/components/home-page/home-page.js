
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
        <Polaroid imageurl = "images/katy-stock.jpg"/>
        <Polaroid imageurl = "images/katy-stock.jpg"/>
        <Polaroid imageurl = "images/katy-stock.jpg"/>
      </div>
      
    </>
  );
}

export default Home;