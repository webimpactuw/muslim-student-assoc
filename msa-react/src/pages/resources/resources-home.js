import { NavLink } from "react-router-dom";

function ResourcesHome() {
    return (
        <div className="lantern-header header-background-purple">
            <h1 className="resources-heading">Resources</h1>
            <div className="links donate-page">
                <button className="purple-button resources-pray">
                    <NavLink className="purple-btn-link" to="/resources/pray">WHERE TO PRAY</NavLink>
                </button>
                <button className="purple-button resources-restaurants">
                    <NavLink className="purple-btn-link" to="/resources/restaurants">HALAL RESTAURANTS</NavLink>
                </button>
            </div>
        </div>
    );
};

export default ResourcesHome;