import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Donate, Events, IH, Resources } from "./pages/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <div className="siteInfo" style={{display: 'none'}}> https://docs.google.com/document/d/1GUb-mtFHAmpuDcOZT3krG4qfXIh9IYd4yCdSCXQrOPs/edit?usp=sharing </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="donate/*" element={<Donate />} />
        <Route path="events/*" element={<Events />} />
        <Route path="islamic-house/*" element={<IH />} />
        <Route path="resources/*" element={<Resources />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
