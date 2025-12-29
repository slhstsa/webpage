import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./home-page/navBar";
import Home from "./home-page/home-page";
import EventsList from "./events/EventsList";
import ResourcesList from "./resources/ResourcesList";
import TimelineApp from "./timeline/timelineApp";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<EventsList />} />
                <Route path="/resources" element={<ResourcesList />} />
                <Route path="/timeline" element={<TimelineApp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
