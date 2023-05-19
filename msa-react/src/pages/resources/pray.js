import ArrowSvg from "../../assets/arrow-down.svg"; 

function Pray() {
    return (
        <div>
            <div className="center-headings">
                <h1 className="pray-headings">Where to Pray?</h1>
            </div>
            <div className="pray-body-section">
                <div className="about-ih">
                    <div className="pray-content">
                        <h3 className="restaurant-pray-name">1. The Islamic House:</h3>
                        <p>Prayer times are posted to the right.</p>
                        <h3 className="restaurant-pray-name">2. HUB Sub-Basement Meditation Room</h3>
                        <p>Take elevators next to the HUB</p>
                        <p>Starbucks to the sub-basement. Need a Husky Card to access.</p>
                        <h3 className="restaurant-pray-name">3. Allen Red Research Commons</h3>
                        <p>Prayer rugs available outside of Allen Red C.</p>
                        <h3 className="restaurant-pray-name">4. First-Year Programs Office in Mary Gates Hall</h3>
                    </div>
                    <div className="pray-content-table" id="wrap">
                        <h6 className="prayer-times">Prayer Times</h6>
                        <img 
                            className="pray-arrow-down"
                            src={ArrowSvg}
                            alt="Down Arrow"
                        />
                        <iframe 
                            id="frame"
                            loading="lazy" 
                            src="https://masjidal.com/widget/simple/v3?masjid_id=RKxwXOdO" 
                            type="text/html" 
                            width="100%" 
                            height="100%" 
                            frameborder="0" 
                            allowtransparency="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pray;

<div>
                    <h3>1. The Islamic House:</h3>
                    <p>Prayer times are posted to the right.</p>
                    <h3>2. HUB Sub-Basement Meditation Room</h3>
                    <p>Take elevators next to the HUB</p>
                    <p>Starbucks to the sub-basement. Need a Husky Card to access.</p>
                    <h3>3. Allen Red Research Commons</h3>
                    <p>Prayer rugs available outside of Allen Red C.</p>
                    <h3>4. First-Year Programs Office in Mary Gates Hall</h3>
                </div>