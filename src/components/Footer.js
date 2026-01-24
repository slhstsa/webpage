import './footer.css'
function Footer(){
  return(
    <footer>
      <div className='footer'>
      <h2>
        GOOD <span className="O">O</span><span className="L">L</span><span className="D">D</span> KATY
      </h2>

      <div className='subscribe-section'>
        
        <div className="email-input">
        <input className="join-bar" type="text" placeholder='example@email.com' /> 
        <button className='join-button'> JOIN</button>
        </div>
        <p>
          Join our mailing list and receive community updates
        </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;