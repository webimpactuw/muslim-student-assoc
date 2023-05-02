import { NavLink } from "react-router-dom";
import arrowDown from "../assets/white-arrow-down.svg";
import arrowRight from "../assets/right-arrow.svg";

function BurgerItem ({pages, styles, num, close}) {
    const subPages = pages.subPages.map((subPage, index) => 
        <li key={index} className="subpages">
            <NavLink to={pages.basePath + subPage.path} key={subPage.path}>{subPage.title}</NavLink>
        </li>
    );

    const style = { display: styles[num]};

    const img = (styles[num] === 'none' ?
    // <img className="hamburger-arrow" onClick={pages.click} src={arrowRight}/> :
    // <img className="hamburger-arrow" onClick={close} src={arrowDown}/>);
    <img className="hamburger-arrow" src={arrowRight}/> :
    <img className="hamburger-arrow" src={arrowDown}/>);

    return (
        <li>
            <div onClick={styles[num] === 'none' ? pages.click : close}>
                <NavLink to={pages.basePath}>{pages.title}</NavLink>
                {img}
                <ul className="subpage-cont" style={style}>
                    {subPages}
                </ul>
            </div>
        </li>
    );
}
export default BurgerItem;
