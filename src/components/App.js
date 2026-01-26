import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navigation from "./home-page/navBar";
import Home from "./home-page/home-page";
import EventsList from "./events/EventsList";
import ResourcesList from "./resources/ResourcesList";
import TimelineApp from "./timeline/timelineApp";
import Map from "./map/Map";
import Documentation from "./documentation/Documentation";
import ScrollToTop from "./home-page/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/resources" element={<ResourcesList />} />
        <Route path="/map" element={<Map />} />
        <Route path="/timeline" element={<TimelineApp />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
