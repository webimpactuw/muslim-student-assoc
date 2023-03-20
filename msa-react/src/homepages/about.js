import { Routes, Route } from "react-router-dom";
import AboutHome from "../subpages/about/about-home.js";

const About = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutHome />} />
      <Route path="board" element={<p>board</p>} />
      <Route path="islam" element={<p>islam</p>} />
      <Route path="gallery" element={<p>gallery</p>} />
    </Routes>
  );
};
  
export default About;