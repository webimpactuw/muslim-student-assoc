import { NavLink } from "react-router-dom";

function ResourcesHome() {
    return (
        <div className="lantern-header header-background-purple">
            <h1 className="resources-heading">Resources</h1>
            <div className="links">
                <div style={{width: "300px"}}>

                    <button className="purple-button resources-pray">
                        <NavLink className="purple-btn-link" to="/resources/pray">WHERE TO PRAY</NavLink>
                    </button>
                </div>
                <div style={{width: "300px"}}>
                    <button className="purple-button resources-restaurants">
                        <NavLink className="purple-btn-link" to="/resources/restaurants">HALAL RESTAURANTS</NavLink>
                    </button>
                </div>
                {/* <div style={{width: "300px"}}>
                    <button className="purple-button resources-delivery">
                        <NavLink className="purple-btn-link" to="/resources/delivery">AL-BURAQ DELIVERY</NavLink>
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default ResourcesHome;