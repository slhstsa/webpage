import './navBar.css';

function Navigation()
{
  return(
    <div class="center-header">
      <div class="nav-bar-container">
        <a href="#" class="logo"> 
          We Live Together
        </a>
        <div class="banner-links-header">
          <a href="#" class="header-link">
            Map
          </a>
          <a href="#" class="header-link">
            Timeline
          </a>
          <a href="#" class="header-link">
            Resources
          </a>
          <a href="#" class="header-link">
            Community
          </a>
           <a href="#" class="header-link">
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;