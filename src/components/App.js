import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './home-page/navBar'; 
import TimelineApp from './timeline/timelineApp';

import RetroBanner from './home-page/retro-banner';
import Home from './home-page/home-page'

function App() {
  return (
    <Router>
      <Navigation />      
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        } />
        <Route path="/timeline" element={<TimelineApp />} />
      </Routes>
    </Router>
  );
}

export default App;