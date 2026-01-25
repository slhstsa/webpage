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
              Good Old Katy is a resource hub and center for all things Houston and Katy texas. We demonstrate the many opportunities and resources of over 600 square miles of texan land. Our mission is to display the rich history of Katy and offer our aid to all of its inhabitants.
            </p>
            
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
