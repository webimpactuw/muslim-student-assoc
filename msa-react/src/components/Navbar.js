import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import msaLogo from "../assets/msa-logo.png";

function Navbar() {
    
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
        </nav>
    )
};

export default Navbar;