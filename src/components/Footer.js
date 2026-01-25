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
          <input className="join-bar" type="text" placeholder='Suggest here!' /> 
          <button className='join-button'>SEND</button>
          </div>
          <p>
            Missing a vital resource? Suggest one here to <br/>contribute to the community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;