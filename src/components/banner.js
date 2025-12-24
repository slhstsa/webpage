import "./banner.css"
import Search from './search'

function Banner(){
  return(
    <div class="banner-container">
      <div class="banner-title">
        We Live Together:   <p>Katy Texas Resources</p>
      </div>
      <img src="images/katy-stock.jpg" alt="katy/houston Skyline" class="banner-image"/>
      <div  class="search-bar-banner">
        <Search/>
      </div>
    </div>
  );
}

export default Banner;