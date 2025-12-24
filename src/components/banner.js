import "./banner.css"
import Search from './search'

function Banner(){
  return(
    <div class="banner-container">
      <div class="banner-links-header">
        <a href="#" class="header-link">
          Map
        </a>
        <a href="#" class="header-link">
          Resources
        </a>
        <a href="#" class="header-link">
          Community
        </a>
      </div>
      <img src="images/katy-stock.jpg" alt="katy/houston Skyline" class="banner-image"/>
      <div  class="search-bar-banner">
        <Search/>
      </div>
    </div>
  );
}

export default Banner;