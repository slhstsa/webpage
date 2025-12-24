import "./banner.css"
import Search from './search'

function Banner(){
  return(
    <div class="banner-container">
      <img src="images/katy-stock.jpg" alt="katy/houston Skyline" class="banner-image"/>
      <div  class="search-bar-banner">
        <Search/>
      </div>
    </div>
  );
}

export default Banner;