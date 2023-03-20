import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Donate, Events, IH, Resources } from "./homepages/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="donate/*" element={<Donate />} />
        <Route path="events/*" element={<Events />} />
        <Route path="islamic-house/*" element={<IH />} />
        <Route path="resources/*" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
