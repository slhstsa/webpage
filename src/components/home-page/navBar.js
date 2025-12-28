import './navBar.css';
import { Link, useNavigate } from 'react-router-dom'; 
import Search from './search';

function Navigation()
{
  const navigate = useNavigate();

  const select = (event) => {
    const path = event.target.value;
    if (path) {
      navigate(path);
    }
  };

  return(
    <div className="center-header">
      <div className="nav-bar-container">
        
        <Link to="/" className="logo"> 
          Home
        </Link>

        <div className="banner-links-header">
          <Link to="/map" className="header-link"> 
            Map
          </Link>
          <Link to="/timeline" className="header-link">
            Timeline
          </Link>
          
          <Search />
          
          <div className="more-option">
            <select 
              className="header-link" 
              onChange={select} 
              defaultValue="" 
              style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
            >
              <option value="" disabled>
                More <img src="images/arrow-down.svg" alt="dropdown-menu-arrow" class="down-arrow"/>
              </option>

              <option value="/documentation">
                Documentation
              </option>

              <option value="/resources">
                Resources
              </option>
              
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;


