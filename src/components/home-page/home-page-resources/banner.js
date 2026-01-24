import "./banner.css"

function Banner(){
  return(
    <div className="banner-container">
      <div className="banner-title">
        We Live Together:   <p>Katy Texas Resources</p>
      </div>
      <img src="/images/katy-stock.jpg" alt="katy/houston Skyline" className="banner-image"/>
    </div>
  );
}

export default Banner;
