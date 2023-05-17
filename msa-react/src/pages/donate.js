import { NavLink } from "react-router-dom";

const Donate= () => {
    return (
      <div className="lantern-header header-background-purple">
            <h1 className="resources-heading">Donate</h1>
            <div className="links donate-links">
                <button className="purple-button">
                    <a href= "https://us.mohid.co/wa/seattle/ih/masjid/online/donation" className="purple-btn-link" to="/resources/restaurants">DONATE TO THE IH</a>
                </button>
                <button className="purple-button">
                    <NavLink className="purple-btn-link" to="/resources/delivery">DONATE TO MSA</NavLink>
                    {/* REMEMBER TO CHANGE NAVLINK */}
                </button>
            </div>
        </div>
    );
};
    
export default Donate;