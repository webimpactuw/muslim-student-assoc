import { Routes, Route } from "react-router-dom";
import AboutHome from "./about-home.js";
import Board from "./board.js";
import Islam from "./islam.js";
import Gallery from "./gallery.js";

function About() {
  return (
    <Routes>
      <Route path="/" element={<AboutHome />} />
      <Route path="board" element={<Board />} />
      <Route path="islam" element={<Islam />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  );
};
  
export default About;