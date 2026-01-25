import Polaroid from './polaroid-pic';
import "./featured.css";
import {useState} from 'react';

import { Link } from 'react-router-dom';
function Featured(){
  const img = (p) => `${process.env.PUBLIC_URL}${p}`;
  

  const featuredSourceList = [[
    'Houston Food Bank',
    "Food & Basic Needs",
    '535 Portwall St. Houston TX 77029',
    'food bank',
    'pantry locator',
    'SNAP',
    'regional',
    'emergency food',
    "/images/food-bank.jpg",
    "donate",
    "https://www.houstonfoodbank.org/?gad_source=1&gad_campaignid=22841324772&gbraid=0AAAAAD8PsMZQH-6QJaSTFI74kLlGAWBm7&gclid=CjwKCAiAybfLBhAjEiwAI0mBBpNMVQ9Y1rgCJ0r1xUlyFpy7FiQsir78tAgg--GH7JxY75z0Ctsc_xoCtIMQAvD_BwE"
  ],[
    'YMCA International',
    "Legal & Immigration Aid",
    '3110 Hayes Road Suite 300, Houston, TX 77082',
    'refugees',
    'employment',
    'citizenship',
    'immigration',
    'all ages',
    "/images/ymca.jpg",
    "aid",
    "https://ymcahouston.org/locations/ymca-international-services?gad_source=1&gad_campaignid=23438547325&gbraid=0AAAAADuTxhs1zhGiM222Z6AnwahEGF_kT&gclid=CjwKCAiAybfLBhAjEiwAI0mBBpLcFVEUEL4F32l4l2IIiaI_GU23hmajOBQPrVD3i0hQcLn7-wA7IRoCUA4QAvD_BwE"
  ],[
    'Fort Bend Libraries',
    "Learning & Recreation",
    'Online/Multiple locations',
    'library',
    'information',
    'referrals',
    'internet access',
    'Fort Bend',
    "/images/library.jpg",
    "learn",
    "https://www.fortbendlibraries.gov/"
  ]];
  const [currentSource, setCurrentSource] = useState(0);
  
  function changeResource(){
    if(currentSource === 2){
      setCurrentSource(0)
    }
    else{
     setCurrentSource(currentSource+1)
    }

    
  }
  
  return(
    <div className="featured-resource-container">
      <div className="polaroid-holder">
        <Polaroid imageurl={img(featuredSourceList[currentSource][8])} text={featuredSourceList[currentSource][9]}/>
      </div>  
      <div className="text-section">
        <div className='text-header-please'>
          Our Featured Resources
        </div>
        <div className='featured-info'>
          <h2>{featuredSourceList[currentSource][0]}<span>{featuredSourceList[currentSource][1]}</span></h2>
          <p>{featuredSourceList[currentSource][2]}</p>
          <div className="aspects">
            <div className='aspect'>
              {featuredSourceList[currentSource][3]}
            </div>
            <div className='aspect'>
              {featuredSourceList[currentSource][4]}
            </div>
            <div className='aspect'>
              {featuredSourceList[currentSource][5]}
            </div>
            <div className='aspect'>
              {featuredSourceList[currentSource][6]}
            </div>
            <div className='aspect'>
              {featuredSourceList[currentSource][7]}
            </div>
          </div>
        </div>
        <div className='flex-holder'>
          <a href={featuredSourceList[currentSource][10]}className="link">
            Visit Site
          </a>
          <Link to="/resources" className='link'>
            Find
          </Link>
        </div>
      </div>
      <div onClick={() => changeResource()} className='next-button-container'>
        <button>
          <img src={`${process.env.PUBLIC_URL}/images/arrow-down.svg`} alt="Katy Community" />
        </button>
      </div>
    </div>
  );
}

export default Featured;