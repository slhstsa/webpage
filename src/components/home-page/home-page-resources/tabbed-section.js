import './tabbed.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'
function Tabbed(){
  return(
    <div className='tabs-section'>
      <div className='tabs'>
        <input type="radio" className="learn" id="tabLearn" name="mytabs" checked="checked" />
        <label for="tabLearn">Learn</label>
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
              <Link to="/timeline" className='link-tab'>
                View Timeline
              </Link>
            </div>
          </div>
        </div>
        <input type="radio" id="tabSearch" name="mytabs" checked="checked" />
        <label for="tabSearch">Search</label>
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
              <Link to="/timeline" className='link-tab'>
                View Resources
              </Link>
            </div>
          </div>
        </div>   
        <input type="radio" id="tabJoin" name="mytabs" checked="checked" />
        <label for="tabJoin">Join</label>
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
              <Link to="/timeline" className='link-tab'>
                make account
              </Link>
            </div>
          </div>  
        </div>           
      </div>
    </div>
  );
}

export default Tabbed;