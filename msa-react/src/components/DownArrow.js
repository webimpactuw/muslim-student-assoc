import ArrowSvg from "../assets/arrow-down.svg";

function DownArrow () {
    return (
        <div className="header-arrow-down">
            <h6>Find out more below</h6>
            <img 
                className="arrow-down"
                src={ArrowSvg}
                alt="Down Arrow"
            />
        </div>
    )
}

export default DownArrow;
