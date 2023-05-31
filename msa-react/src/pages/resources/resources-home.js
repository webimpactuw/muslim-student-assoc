import { NavLink } from "react-router-dom";

function ResourcesHome() {
    return (
        <div className="lantern-header header-background-purple">
            <h1 className="resources-heading">Resources</h1>
            <div className="links donate-page">
                <NavLink className="purple-btn-link" to="/resources/pray">
                    <button className="purple-button resources-pray">
                        WHERE TO PRAY
                    </button>
                </NavLink>
                <NavLink className="purple-btn-link" to="/resources/restaurants">
                    <button className="purple-button resources-restaurants">
                        HALAL RESTAURANTS
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ResourcesHome;