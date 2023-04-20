import { Routes, Route } from "react-router-dom";
import EventsHome from "./events-home.js";
import Activities from "./activities.js";
import Involved from "./involved.js";
import Member from "./member.js";

const Events = () => {
    return (
        <Routes>
            <Route path="/" element={<EventsHome />} />
            <Route path="activities" element={<Activities />} />
            <Route path="get-involved" element={<Involved />} />
            <Route path="member" element={<Member />} />
        </Routes>
    );
};

export default Events;