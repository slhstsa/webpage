import './navBar.css';
import { Link } from 'react-router-dom'; 
import Search from './search';
function Navigation()
{
  return(
    <div className="center-header">
      <div className="nav-bar-container">
        <a href="#" className="header-link">
          Documentation
        </a>

        <Link to="/timeline" className="header-link">
          Home
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
  );
}

export default Navigation;