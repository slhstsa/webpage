import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './navBar'; 
import TimelineApp from '../timeline/timelineApp';
import Home from './home-page'
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