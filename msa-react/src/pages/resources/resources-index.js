import { Routes, Route } from "react-router-dom";
import ResourcesHome from "./resources-home";
import Pray from "./pray";
import Restaurants from "./restaurants";
import Delivery from "./delivery";

const Resources = () => {
    return (
        <Routes>
            <Route path="/" element={<ResourcesHome />} />
            <Route path="pray" element={<Pray />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="delivery" element={<Delivery />} />
        </Routes>
    );
};
    
export default Resources;