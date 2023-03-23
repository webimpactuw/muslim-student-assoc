import { NavLink } from "react-router-dom";

function NavItem ({title, basePath, subPages}) {
    const subPageLinks = subPages.map((subPage) => 
        <NavLink key={subPage.path} to={basePath + subPage.path}>{subPage.title}</NavLink>
    );

    return (
        <div className="navItem">
            <button className="dropbtn">
                <NavLink to={basePath}>{title}</NavLink>
            </button>
            <div className="dropdown-content">
                {subPageLinks}
            </div>
        </div>
    );
}

export default NavItem;