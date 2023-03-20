import { Routes, Route } from "react-router-dom";

const Resources = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Resources</p>} />
            <Route path="pray" element={<p>Pray</p>} />
            <Route path="restaurants" element={<p>Halal Restaurants</p>} />
            <Route path="delivery" element={<p>Al-Buraq Delivery</p>} />
        </Routes>
    );
};
    
export default Resources;