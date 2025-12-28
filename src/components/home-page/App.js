import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './navBar'; 
import TimelineApp from '../timeline/timelineApp';

import RetroBanner from './retro-banner';
function App() {
  return (
    <Router>
      <Navigation />      
      <Routes>
        <Route path="/" element={
          <>
            <RetroBanner />
          </>
        } />
        <Route path="/timeline" element={<TimelineApp />} />
      </Routes>
    </Router>
  );
}

export default App;