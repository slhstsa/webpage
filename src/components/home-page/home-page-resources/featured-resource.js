import Polaroid from './polaroid-pic';
import "./featured.css";

import { Link } from 'react-router-dom';
function Featured(){
  const img = (p) => `${process.env.PUBLIC_URL}${p}`;
  return(
    <div class="featured-resource-container">
      <div className="polaroid-holder">
        <Polaroid imageurl={img("/images/katy-stock.jpg")} text=""/>
      </div>  
      <div className="text-section">
        <div className='text-header'>
          Our Featured Resource"
        </div>
        <div className='featured-info'>
          Nonsense
        </div>
        <div className='flex-holder'>
          <Link>
            Visit Site
          </Link>
          <Link>
            Find
          </Link>
        </div>
      </div>
      <div className='next-button-container'>
        <button>
          <img src={`${process.env.PUBLIC_URL}/images/arrow-down.svg`} alt="Katy Community" />
        </button>
      </div>
    </div>
  );
}

export default Featured;