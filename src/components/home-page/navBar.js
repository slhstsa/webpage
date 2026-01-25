import "./navBar.css";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Resources", to: "/resources" },
  { label: "Events", to: "/events" },
  { label: "Map", to: "/map" },
  { label: "Timeline", to: "/timeline" }
];

const MORE_ITEMS = [
  { label: "References", to: "/documentation" },
  { label: "Resources", to: "/resources" },
  { label: "Events", to: "/events" }
];

const MOBILE_ITEMS = Array.from(
  new Map([...NAV_ITEMS, ...MORE_ITEMS].map((item) => [item.to, item])).values()
);

function Navigation() {
  const navigate = useNavigate();
  const [dropdownValue, setDropdownValue] = useState("");
  const [mobileValue, setMobileValue] = useState("");
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const select = (event) => {
    const path = event.target.value;
    if (path) {
      navigate(path);
      setDropdownValue("");
    }
  };

  const selectMobile = (event) => {
    const path = event.target.value;
    if (path) {
      navigate(path);
      setMobileValue("");
    }
  };

  return (
    <div className="center-header">
      <div className={`nav-bar-container${isCompact ? " compact" : ""}`}>
        <div className="brand-mark">
          <div className="brand-text">GOOD <span><span className="O">O</span><span className="L">L</span><span className="D">D </span></span>KATY</div>
          <span className="brand-subtext">Resource Hub</span>
        </div>

        <nav className="banner-links-header">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav">
          <select
            className="mobile-nav-select"
            onChange={selectMobile}
            value={mobileValue}
          >
            <option value="" disabled>
              Menu
            </option>
            {MOBILE_ITEMS.map((item) => (
              <option key={item.to} value={item.to}>
                {item.label}
              </option>
            ))}
          </select>
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
