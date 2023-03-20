import { NavLink } from "react-router-dom";

const NavItem = ({pages}) => {
    const subPages = pages.subPages.map((subPage) => 
        <NavLink to={pages.basePath + subPage.path}>{subPage.title}</NavLink>
    );

    return (
        <td>
            <div class="navItem">
                <button class="dropbtn">
                    <NavLink to={pages.basePath}>{pages.title}</NavLink>
                </button>
                <div class="dropdown-content">
                    {subPages}
                </div>
            </div>
        </td>
    );
}

export default NavItem;