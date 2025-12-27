import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './navBar'; 
import TimelineApp from '../timeline/timelineApp';
import Banner from './banner'
import Resources from './resource-grid/resource-grid';
import About from './about'; 

function App() {
  return (
    <Router>
      <Navigation />      
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Resources />
            <About />
          </>
        } />
        <Route path="/timeline" element={<TimelineApp />} />
      </Routes>
    </Router>
  );
}

export default App;