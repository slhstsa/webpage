import "./featured.css";
function Featured(){
  return(
    <div class="featured-resource-container">
            <h1 class="featured-header">A special look into Katy's best resources</h1>
            <div class ="featured-resource-content-box">
                <img src="/images/katy-stock.jpg" alt="katy/houston Skyline" class="banner-image"/>
                <div class="featured-resource-info-box">
                    <a  href="https://www.studiovii.org/">
                    <h2 class="school-name-presents">good old katy...</h2>
                    <h1 class="resource-name">The Ballard House</h1>
                    <h3 class="resource-info">BY ROSENCRATZ AND GUILDENBERG</h3>
                    <p class="resource-text">WATCH IT FEBRUARY 8, 9, AND 10 AT <br />SEVEN LAKES HIGH SCHOOL</p>
                    </a>
                </div>
            </div>
        </div>
  );
}

export default Featured;