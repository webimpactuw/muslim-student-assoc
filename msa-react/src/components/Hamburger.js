import { NavLink } from "react-router-dom";
import { useState } from "react";
import BurgerItem from "./BurgerItem.js";

function Hamburger() {
    
    const [dropdownsDisplay, setDropdownsDisplay] = useState([
        "none", //about
        "none", //ih
        "none", //events
        "none", //resources
    ]);

    const setAbout = () => {
        setDropdownsDisplay([ "block" /*about*/, "none" /*ih*/, "none" /*events*/, "none" /*resources*/])
    }
    const setIH = () => {
        setDropdownsDisplay([ "none" /*about*/, "block" /*ih*/, "none" /*events*/, "none" /*resources*/])
    }
    const setEvents = () => {
        setDropdownsDisplay([ "none" /*about*/, "none" /*ih*/, "block" /*events*/, "none" /*resources*/])
    }
    const setResources = () => {
        setDropdownsDisplay([ "none" /*about*/, "none" /*ih*/, "none" /*events*/, "block" /*resources*/])
    }

    const setNone = () => {
        setDropdownsDisplay([ "none" /*about*/, "none" /*ih*/, "none" /*events*/, "none" /*resources*/])
    }
 
    const pages = [
        { basePath: "/about", title: "About Us", 
            subPages:[
                { path: "/board", title: "Meet Our Board"},
                { path: "/islam", title: "What is Islam?"},
                { path: "/gallery", title: "Gallery"} 
            ], 
            click: setAbout
        },
        { basePath: "/islamic-house", title: "The IH", 
            subPages:[
                { path: "/library", title: "IH Library"},
                { path: "/programs", title: "Programs?"},
            ],
            click: setIH
        },
        { basePath: "/events", title: "Events", 
            subPages:[
                { path: "/activities", title: "Activities"},
                { path: "/get-involved", title: "Get Involved"},
                { path: "/member", title: "Become a Member"},
            ],
            click: setEvents
        },
        { basePath: "/resources", title: "Resources", 
            subPages:[
                { path: "/pray", title: "Where to Pray"},
                { path: "/restaurants", title: "Halal Restaurants"},
                { path: "/delivery", title: "Al-Buraq Delivery"} 
            ],
            click: setResources
        },
    ];

    const dropDowns = pages.map((page, index) => 
        <BurgerItem 
            key={index} 
            pages={page} 
            styles={dropdownsDisplay} 
            num={index} 
            close={setNone}/>
    );

    return (
        <div >
            <ul className="burger-links">
                {dropDowns}
                <li>
                    <div >
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </li>
            </ul>
            <div className="donate-buffer">
                <NavLink className="mobile-donate purple-button" to="/donate">Donate</NavLink>
            </div>
        </div>
    )
};

export default Hamburger;