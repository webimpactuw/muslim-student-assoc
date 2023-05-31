import { NavLink } from "react-router-dom";
import arrowDown from "../assets/white-arrow-down.svg";
import arrowRight from "../assets/right-arrow.svg";

function BurgerItem({ pages, styles, num, closeBar, closeMenu }) {
    const subPages = pages.subPages.map((subPage, index) =>
        <li key={index} className="subpages">
            <NavLink to={pages.basePath + subPage.path}
                key={subPage.path}
                onClick={closeMenu}>
                {subPage.title}
            </NavLink>
        </li>
    );

    const style = { display: styles[num] };

    const img = (styles[num] === 'none' ?
        <img className="hamburger-arrow" src={arrowRight} alt="arrow to open menu" /> :
        <img className="hamburger-arrow" src={arrowDown} alt="arrow to close menu"/>);

    return (
        <li>
            <div onClick={styles[num] === 'none' ? pages.click : closeBar}>
                <NavLink to={pages.basePath} onClick={closeMenu}>{pages.title}</NavLink>
                {img}
                <ul className="subpage-cont" style={style}>
                    {subPages}
                </ul>
            </div>
        </li>
    );
}
export default BurgerItem;
