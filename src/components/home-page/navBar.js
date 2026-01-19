import "./navBar.css";
import Search from "./search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GooeyNav from "./GooeyNav";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Resources", to: "/resources" },
  { label: "Events", to: "/events" },
  { label: "Map", to: "/map" },
  { label: "Timeline", to: "/timeline" }
];

const MORE_ITEMS = [
  { label: "Documentation", to: "/documentation" },
  { label: "Resources", to: "/resources" },
  { label: "Events", to: "/events" }
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
          <div className="more-dropdown">
            <select
              className="header-link"
              onChange={select}
              value={dropdownValue}
            >
              <option value="" disabled>
                More
              </option>
              {MORE_ITEMS.map(item => (
                <option key={item.to} value={item.to}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
