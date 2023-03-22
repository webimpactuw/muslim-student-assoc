import { Routes, Route } from "react-router-dom";
import EventsHome from "./events-home.js";
import Activities from "./activities.js";
import Involved from "./involved.js";

const Events = () => {
    return (
        <Routes>
            <Route path="/" element={<EventsHome />} />
            <Route path="activities" element={<Activities />} />
            <Route path="get-involved" element={<Involved />} />
        </Routes>
    );
};

export default Events;