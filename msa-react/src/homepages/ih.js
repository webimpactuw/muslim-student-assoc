import { Routes, Route } from "react-router-dom";

const IH = () => {
    return (
        <Routes>
            <Route path="/" element={<p>THE IH</p>} />
            <Route path="library" element={<p>IH library</p>} />
            <Route path="programs" element={<p>programs</p>} />
        </Routes>
    );
};
    
export default IH;