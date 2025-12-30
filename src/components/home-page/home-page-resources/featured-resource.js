import "./featured.css";
function Featured(){
  return(
    <div class="featured-show-container">
            <h1 class="featured-header">Featured Show</h1>
            <div class ="featured-show-content-box">
                <img class="featured-show-image" src="images/katy-stock.jpg" />
                <div class="featured-show-info-box">
                    <a  href="https://www.studiovii.org/">
                    <h2 class="school-name-presents">Studio vii presents...</h2>
                    <h1 class="show-name">MARY POPPINS</h1>
                    <h3 class="show-info">BY ROSENCRATZ AND GUILDENBERG</h3>
                    <p class="show-text">WATCH IT FEBRUARY 8, 9, AND 10 AT <br />SEVEN LAKES HIGH SCHOOL</p>
                    </a>
                </div>
            </div>
        </div>
  );
}

export default Featured;