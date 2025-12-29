import "./navBar.css";
import Search from "./search";
import GooeyNav from "./GooeyNav";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Map", to: "/map" },
  { label: "Events", to: "/events" },
  { label: "Resources", to: "/resources" },
  { label: "Timeline", to: "/timeline" }
];

function Navigation() {
  return (
    <div className="center-header">
      <div className="nav-bar-container">
        <div className="brand-mark">
          <div className="brand-text">WE LIVE TOGETHER</div>
          <span className="brand-subtext">KATY</span>
        </div>

        <div className="banner-links-header">
          <GooeyNav items={NAV_ITEMS} />
        </div>

        <div className="nav-actions">
          <Search />
          <div className="more-option">
            <a href="#" className="header-link">
              More
            </a>
            <img
              src="images/arrow-down.svg"
              alt="dropdown-menu-arrow"
              className="down-arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
