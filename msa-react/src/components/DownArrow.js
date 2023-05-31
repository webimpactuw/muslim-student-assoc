import ArrowSvg from "../assets/arrow-down.svg";

function DownArrow ({to}) {
    return (
        <div className="header-arrow-down">
            <h6>Find out more below</h6>
            <a href={to ? to : ""}>
                <img 
                    className="arrow-down"
                    src={ArrowSvg}
                    alt="Down Arrow"
                />
            </a>
        </div>
    )
}

export default DownArrow;
