import './about.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About</h2>
          <p>
            We are TSA Members from SLHS. 
          </p>
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">Placeholder</span>
              <span className="stat-label">Placeholder</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/placeholder-image.png`} alt="Katy Community" />
        </div>
      </div>
    </section>
  );
}

export default About;
