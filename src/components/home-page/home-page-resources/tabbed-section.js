import './tabbed.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'
function Tabbed(){
  return(
    <div className='tabs-section'>
      <div className='tabs'>
        <input type="radio" className="learn" id="tabLearn" name="mytabs" checked="checked" />
        <label for="tabLearn"><img src={`${process.env.PUBLIC_URL}/images/book-svgrepo-com.svg`} alt="Katy Community" /></label>
        <div class="tab">
          <div className='stupid-div'>
            <div class="left-area">
              <h1>
                LEARN
              </h1>
              <p>about Katy's rich history</p>
            </div>
            <div class="right-area">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper.
              </p>
              <div className='link-holder'>
                <Link to="/timeline" className='link-tab'>
                  View Timeline
                </Link>
              </div>
            </div>
          </div>
        </div>
        <input type="radio" id="tabSearch" name="mytabs" checked="unchecked" />
        <label for="tabSearch"><img src={`${process.env.PUBLIC_URL}/images/searchicon.svg`} alt="Katy Community" /></label>
        <div class="tab">
          <div className='stupid-div'>
            <div class="left-area">
              <h1>
                Search
              </h1>
              <p>through our catalogue of over 100 resources</p>
            </div>
            <div class="right-area">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper.
              </p>
              <div className='link-holder'>
                <Link to="/resources" className='link-tab'>
                  Browse Resources
                </Link>
              </div>
            </div>
          </div>
        </div>   
        <input type="radio" id="tabJoin" name="mytabs" checked="unchecked" />
        <label for="tabJoin"><img src={`${process.env.PUBLIC_URL}/images/account-svgrepo-com.svg`} alt="Katy Community" /></label>
        <div class="tab">
          <div className='stupid-div'>
            <div class="left-area">
              <h1>
                Join
              </h1>
              <p>our community connecting the Katy Area</p>
            </div>
            <div class="right-area">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper aliquam diam, at facilisis leo posuere a. Donec faucibus dui sit amet rutrum semper.
              </p>
              <div className='link-holder'>
                <Link to="/timeline" className='link-tab'>
                  make account
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