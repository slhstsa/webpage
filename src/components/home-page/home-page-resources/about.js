import { Link } from 'react-router-dom';
import './about.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className='about-text-area'>
              <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper. Nam pretium imperdiet enim, id facilisis libero tempus.
            </p>
            <div className="stats-container">
              <div className="stat">
                <span className="stat-number">Placeholder</span>
                <span className="stat-label">Placeholder</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/texas.svg`} alt="Katy Community" />
          <img className="katy-marker"src={`${process.env.PUBLIC_URL}/images/katypin.svg`} alt="Community" />
        </div>
        <div className='right-section'>
          <div className="katy-locate">
            Can you find where Katy is located?
          </div>
          
          <div className='katy-link'>
            <Link to="/map"className='plink'>
            See Katy Map
            </Link>
            <img src={`${process.env.PUBLIC_URL}/images/right-arrow.svg`} alt='right arrow' />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
