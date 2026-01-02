import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./home-page/navBar";
import Home from "./home-page/home-page";
import EventsList from "./events/EventsList";
import ResourcesList from "./resources/ResourcesList";
import TimelineApp from "./timeline/timelineApp";
import Map from "./map/Map";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/resources" element={<ResourcesList />} />
        <Route path="/map" element={<Map />} />
        <Route path="/timeline" element={<TimelineApp />} />
      </Routes>
    </>
  );
}

export default App;
