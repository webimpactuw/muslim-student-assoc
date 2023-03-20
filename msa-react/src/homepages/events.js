import { Routes, Route } from "react-router-dom";

const Events = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Events</p>} />
            <Route path="activities" element={<p>Activities</p>} />
            <Route path="get-involved" element={<p>Get Involved</p>} />
        </Routes>
    );
};

export default Events;