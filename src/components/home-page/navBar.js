import './navBar.css';
import { Link } from 'react-router-dom'; 
import Search from './search';

function Navigation()
{
  return(
    <div className="center-header">
      <div className="nav-bar-container">
        
        <Link to="/" className="logo"> 
          Home
        </Link>

        <div className="banner-links-header">
          <a href="#" className="header-link">
            Map
          </a>

          <Link to="/timeline" className="header-link">
            Timeline
          </Link>
          <Search />
          <div class="more-option">
            <a href="#" className="header-link">
            More
            </a>
            <img src="images/arrow-down.svg" alt="dropdown-menu-arrow" class="down-arrow"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;