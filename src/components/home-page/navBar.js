import './navBar.css';
import { Link } from 'react-router-dom'; 

function Navigation()
{
  return(
    <div className="center-header">
      <div className="nav-bar-container">
        
        <Link to="/" className="logo"> 
          We Live Together
        </Link>

        <div className="banner-links-header">
          <a href="#" className="header-link">
            Map
          </a>

          <Link to="/timeline" className="header-link">
            Timeline
          </Link>

          <a href="#" className="header-link">
            Resources
          </a>
          <a href="#" className="header-link">
            Community
          </a>
           <a href="#" className="header-link">
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;