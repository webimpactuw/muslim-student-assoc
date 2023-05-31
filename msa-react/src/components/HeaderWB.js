import { NavLink } from "react-router-dom";
import DownArrow from "./DownArrow";

// white header section with buttons

// takes title, subtitle or description, 
// and array of objects with link *to* and name
// ex: {    
    // title: "PROGRAMS", 
    // subtitle: "Check out our programs below!",
    // links: [{to: "#programs", name: }] 
// } 
function HeaderWB ({props: {title, subtitle, description, buttons}}) {
    return (    
        <div className="header-white">
            <h1>{title}</h1>
            {subtitle ? <h3>{subtitle}</h3> : null}
            {description ? <p>{description}</p> : null}
            {buttons ? 
                <div className="links">
                    {buttons.map((link, index) =>
                        <div> 
                            {link.to.includes("#") ?                             
                                <a href={link.to} className="purple-btn-link">
                                    <button className="purple-button" key={index}>
                                        {link.name}
                                    </button>
                                </a>
                                :
                                <NavLink className="purple-btn-link" to={link.to} >
                                    <button className="purple-button" key={index}>
                                        {link.name}
                                    </button>
                                </NavLink>
                            }  
                        </div>
                    )}
                </div>
            : null}
            <DownArrow />
        </div>
    );
}
export default HeaderWB;