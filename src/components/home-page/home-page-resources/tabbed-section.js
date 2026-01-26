import './tabbed.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'
function Tabbed(){
  return(
    <div className='tabs-section'>
      <div className='tabs'>
        <input type="radio" id="tabLearn" checked="checked" name="mytabs" />
        <label for="tabLearn"><img src={`${process.env.PUBLIC_URL}/images/book-svgrepo-com.svg`} alt="Katy Community" /></label>
        <div className="tab">
          <div className='stupid-div'>
            <div className="left-area">
              <h1>
                LEARN
              </h1>
              <p>about Katy's rich history</p>
            </div>
            <div className="right-area">
              <p>
                Using our interactive timeline, take a detailed look into over a century of development, civilization, and culture. Throughout its timespan the Houston area has gone through many different names, flags, and faces, so feel free to flip through the chapter book of our history and discover how Katy as we know it came to be. We seek to not just help the people of katy, but to educate them as well.
              </p>
              <div className='link-holder'>
                <Link to="/timeline" className='link-tab'>
                  View Timeline
                </Link>
              </div>
            </div>
          </div>
        </div>
        <input type="radio" id="tabSearch" name="mytabs" checked="unchecked"/>
        <label for="tabSearch"><img src={`${process.env.PUBLIC_URL}/images/searchicon.svg`} alt="Katy Community" /></label>
        <div className="tab">
          <div className='stupid-div'>
            <div className="left-area">
              <h1>
                Search
              </h1>
              <p>through our catalogue of over 100 resources</p>
            </div>
            <div className="right-area">
              <p>
                The Houston community is one of uplifting one another and helping each other through hard times. Especially was we approach winter storm season there is no better time to explore all the different resources and services Katy has to offer. Use our huge catalogue of resources to enrich your life in Katy. From food banks to libraries to shelters, there are hundreds of different ways to pitch in and help in your community.
              </p>
              <div className='link-holder'>
                <Link to="/resources" className='link-tab'>
                  Browse Resources
                </Link>
              </div>
            </div>
          </div>
        </div>   
        <input type="radio" id="tabJoin" name="mytabs" checked="unchecked"/>
        <label for="tabJoin"><img src={`${process.env.PUBLIC_URL}/images/account-svgrepo-com.svg`} alt="Katy Community" /></label>
        <div className="tab">
          <div className='stupid-div'>
            <div className="left-area">
              <h1>
                Join
              </h1>
              <p>our community connecting the Katy Area</p>
            </div>
            <div className="right-area">
              <p>
                The Good Old Katy project is not just about helping Houstonians, but also about connecting Katy together. Here we offer a look into many different events and ways Katy citizens can connect with eachother and join their greater community. From christmas socials, game nights, and markets, we offer a look into many different events throughout the year. Additionally, help contribute to the Good Old Katy project by suggesting resources and events that are lacking in our community.
              </p>
              <div className='link-holder'>
                <Link to="/events" className='link-tab'>
                  view community
                </Link>
              </div>
            </div>
          </div>  
        </div>           
      </div>
    </div>
  );
}

export default Tabbed;