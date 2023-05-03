import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavItem from "./NavItem";
import Hamburger from "./Hamburger";
import msaLogo from "../assets/nav/msa-logo.png";
import hambugerIcon from "../assets/nav/mobile-menu-icon.svg";
import menuX from "../assets/nav/x-button.svg";


function Navbar() {
    
    const [hamburgerOpen, setHamburgerOpen] = useState({display: 'none'});

    const menuOn = () => {
        setHamburgerOpen({display: 'block'});
    }
    const menuOff = () => {
        setHamburgerOpen({display: 'none'});
    }


    const pages = [
        { basePath: "/about", title: "About Us", 
            subPages:[
                { path: "/board", title: "Meet Our Board"},
                { path: "/islam", title: "What is Islam?"},
                { path: "/gallery", title: "Gallery"} 
            ] 
        },
        { basePath: "/islamic-house", title: "The IH", 
            subPages:[
                { path: "/library", title: "IH Library"},
                { path: "/programs", title: "Programs?"},
            ] 
        },
        { basePath: "/events", title: "Events", 
            subPages:[
                { path: "/activities", title: "Activities"},
                { path: "/get-involved", title: "Get Involved"},
                { path: "/member", title: "Become a Member"},
            ] 
        },
        { basePath: "/resources", title: "Resources", 
            subPages:[
                { path: "/pray", title: "Where to Pray"},
                { path: "/restaurants", title: "Halal Restaurants"},
                { path: "/delivery", title: "Al-Buraq Delivery"} 
            ] 
        },
        { basePath: "/contact", title: "Contact", 
            subPages:[] 
        }
    ];

    const dropDowns = pages.map((page, index) => 
        <NavItem key = {index} pages = {page} />
    );


    return (
        <nav>
            <NavLink className="logo" to="/"><img src={msaLogo} alt="MSA Logo" /></NavLink>
            <div className="dropdowns">
                {dropDowns}
                <NavLink className="donate purple-button" to="/donate">Donate</NavLink>
            </div>
            <div className="hamburger">
                <img className="hamburger-icon" src={hambugerIcon} onClick={menuOn}/>
                <div className="hamburger-list" style={hamburgerOpen}>
                    <img className="menuX" src={menuX} onClick={menuOff}/>
                    <Hamburger closeMenu={menuOff} pages={pages.slice(0, 4)}/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;