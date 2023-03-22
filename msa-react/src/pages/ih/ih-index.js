import { Routes, Route } from "react-router-dom";
import IHHome from "./ih-home";
import Library from "./library";
import Programs from "./programs";


const IH = () => {
    return (
        <Routes>
            <Route path="/" element={<IHHome />} />
            <Route path="library" element={<Library />} />
            <Route path="programs" element={<Programs />} />
        </Routes>
    );
};
    
export default IH;