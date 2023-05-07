import { NavLink } from "react-router-dom";
import { useState } from "react";
import BurgerItem from "./BurgerItem.js";

function Hamburger({closeMenu, pages}) {
 
    const [dropdownsDisplay, setDropdownsDisplay] = useState([
        "none", //about
        "none", //ih
        "none", //events
        "none", //resources
    ]);

    //about
    pages[0].click = () => {
        setDropdownsDisplay([ "block" /*about*/, "none", "none", "none"])
    }
    //ih
    pages[1].click = () => {
        setDropdownsDisplay([ "none", "block" /*ih*/, "none", "none"])
    }
    //events
    pages[2].click = () => {
        setDropdownsDisplay([ "none", "none", "block" /*events*/, "none"])
    }
    //resources
    pages[3].click = () => {
        setDropdownsDisplay([ "none", "none", "none", "block" /*resources*/])
    }

    const setNone = () => {
        setDropdownsDisplay([ "none", "none", "none", "none"])
    }

    const close = () => {
        setNone();
        closeMenu();        
    }

    const dropDowns = pages.map((page, index) => 
        <BurgerItem 
            key={index} 
            pages={page} 
            styles={dropdownsDisplay} 
            num={index} 
            closeBar={setNone}
            closeMenu={close}
            />
    );

    return (
        <div >
            <ul className="burger-links">
                {dropDowns}
                <li>
                    <div >
                        <NavLink to="/contact" onClick={close}>Contact</NavLink>
                    </div>
                </li>
            </ul>
            <div className="donate-buffer">
                <button className="mobile-donate purple-button">
                    <NavLink to="/donate" onClick={close}>
                        Donate
                    </NavLink>
                </button>            
            </div>
        </div>
    )
};

export default Hamburger;