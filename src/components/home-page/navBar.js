import "./navBar.css";
import Search from "./search";
import { Link, useNavigate } from 'react-router-dom'; 
import React, { useState } from 'react'; 
import GooeyNav from "./GooeyNav";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Map", to: "/map" },
  { label: "Events", to: "/events" },
  { label: "Timeline", to: "/timeline" }
];

function Navigation() {
  const navigate = useNavigate();
  
  const [dropdownValue, setDropdownValue] = useState(""); 

  const select = (event) => {
    const path = event.target.value;
    if (path) {
      navigate(path);
      setDropdownValue(""); 
    }
  };

  return (
    <div className="center-header">
      <div className="nav-bar-container">
        <div className="brand-mark">
          <div className="brand-text">GOOD <span><span className="O">O</span><span className="L">L</span><span className="D">D </span></span>KATY</div>
          <span className="brand-subtext">Resource Hub</span>
        </div>

        <div className="banner-links-header">
          <GooeyNav items={NAV_ITEMS} />
        </div>

        <div className="nav-actions">
          <Search />
          <div className="banner-links-header">
            <select 
              className="header-link" 
              onChange={select} 
              value={dropdownValue} 
              style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
            >
              <option value="" disabled>
                More 
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