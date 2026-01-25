import { Link } from "react-router-dom";
import "../styles/pages.css";
import "./documentation.css";

function Documentation() {
  return (
    <div className="page-wrapper documentation-page">
      <header className="documentation-hero">
        <p className="doc-eyebrow">
          <span className="doc-highlight">REFERENCE</span> PAGE
        </p>
        <h1>
          Community <span className="doc-title-accent">Reference</span>
        </h1>
        <p className="doc-subtitle">
          A quick guide to the Good Old Katy hub, its layout, and the imagery that
          helps tell our story.
        </p>
      </header>

      <div className="documentation-content">
        <section className="doc-card">
          <h2 className="doc-heading">Community Corner</h2>
          <p>
            Good Old Katy is a community-built hub that gathers local resources,
            events, and history into one welcoming place. We spotlight neighbors,
            organizations, and stories that make Katy feel connected and alive.
          </p>
        </section>

        <section className="doc-card">
          <h2 className="doc-heading">How This Hub Helps</h2>
          <p>
            Use the site to discover services, track local happenings, explore the
            map, and step through the timeline of Katy's growth. Everything here
            is organized to keep the community informed, supported, and inspired.
          </p>
        </section>

        <div className="doc-grid">
          <section className="doc-card">
            <h2 className="doc-heading">Site Map</h2>
            <p className="doc-lead">
              A quick overview of the pages available across the community hub.
            </p>
            <div className="doc-columns">
              <div>
                <h3>General</h3>
                <ul className="doc-list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/documentation">Documentation</Link></li>
                </ul>
              </div>
              <div>
                <h3>Explore</h3>
                <ul className="doc-list">
                  <li><Link to="/resources">Resources</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/map">Map</Link></li>
                  <li><Link to="/timeline">Timeline</Link></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="doc-card">
            <h2 className="doc-heading">Documentation</h2>
            <ul className="doc-list doc-muted">
              <li>Plan of Work Log</li>
              <li>Copyright Checklist</li>
            </ul>
          </section>
        </div>

        <section className="doc-card">
          <h2 className="doc-heading">Built With</h2>
          <ul className="doc-list">
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                React
              </a>
            </li>
            <li>
              <a
                href="https://create-react-app.dev/docs/getting-started/"
                target="_blank"
                rel="noreferrer"
              >
                Create React App
              </a>
            </li>
          </ul>
        </section>

        <section className="doc-card">
          <h2 className="doc-heading">Sources</h2>
          <ul className="doc-list doc-sources">
            <li>
              <a href="https://www.shutterstock.com/image-photo/katy-tx-view-air-drone-2277819783" target="_blank" rel="noreferrer">
                Katy, TX aerial view (Shutterstock)
              </a>
            </li>
            <li>
              <a href="https://www.istockphoto.com/photo/houston-texas-downtown-drone-skyline-aerial-gm2168127480-588161879" target="_blank" rel="noreferrer">
                Downtown skyline aerial (iStock)
              </a>
            </li>
            <li>
              <a href="https://www.homes.com/local-guide/katy-tx/" target="_blank" rel="noreferrer">
                Katy, TX local guide photo (Homes.com)
              </a>
            </li>
            <li>
              <a href="https://www.houstonfoodbank.org/find-help/" target="_blank" rel="noreferrer">
                Houston Food Bank imagery (Houston Food Bank)
              </a>
            </li>
            <li>
              <a href="https://www.houstontexans.com/photos/houston-texans-ymca-slideshow-3127811#5afa7194-9138-4310-b35a-3cd8c9fb4ce6" target="_blank" rel="noreferrer">
                YMCA community center photo (Houston Texans)
              </a>
            </li>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:Richmond_TX_George_Library.JPG" target="_blank" rel="noreferrer">
                George Memorial Library, Richmond TX (Wikimedia Commons)
              </a>
            </li>
          </ul>
          <p className="doc-fineprint">
            Although this website was made with the listed frameworks above, the
            theme and all code was created by the Good Old Katy team.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Documentation;
