import { Routes, Route } from "react-router-dom";
import ResourcesHome from "./resources-home";
import Pray from "./pray";
import Restaurants from "./restaurants";

const Resources = () => {
    return (
        <Routes>
            <Route path="/" element={<ResourcesHome />} />
            <Route path="pray" element={<Pray />} />
            <Route path="restaurants" element={<Restaurants />} />
        </Routes>
    );
};
    
export default Resources;