import ArrowSvg from "../../assets/arrow-down.svg"; 
import client from "../../client";
import { useEffect, useState } from "react";

function IHHome() {
    const query = "*[_id == 'text'] {IHaddress, aboutIH, IHlibrary}";

    const [content, setContent] = useState(null);
    useEffect(() => {
        client.fetch(query)
            .then((data) => setContent(data[0]));
    }, []);

    return (
        <div>
            <div className="header-section">
                <h1>The Islamic House</h1>
                <h3>At {content?.IHaddress}</h3>
            </div>
            
            <div className="body-section">
                <div className="about-ih">
                    <div className="ih-content">
                        <h2 className="about-the-ih-subhead">ABOUT THE IH</h2>
                        <p className="ih-description">
                            {content?.aboutIH}
                        </p>
                    </div>
                    <div className="ih-content-table">
                        <h6 className="prayer-times">Prayer Times</h6>
                        <iframe 
                            id="frame"
                            loading="lazy" 
                            src="https://masjidal.com/widget/simple/v3?masjid_id=RKxwXOdO" 
                            type="text/html" 
                            width="100%" 
                            height="600" 
                            frameborder="0" 
                            allowtransparency="true"
                        />
                    </div>
                </div>
                <div className="next-arrow-div">
                    <h6 className="read-full-story-subhead">Read the full story below</h6>
                    <a href="#history">
                        <img 
                            className="arrow-down"
                            src={ArrowSvg}
                            alt="Down Arrow"
                        />
                    </a>
                </div>

                <div className="ih-text">
                    <div className="ih-library-content">
                        <h2 className="about-the-ih-subhead">ISLAMIC HOUSE LIBRARY</h2>
                        <p className="ih-library-description">
                            {content?.IHlibrary}    
                        </p>
                    </div>
                    <h2 id="history" className="ih-history-title">THE HISTORY OF THE IH</h2>
                    <div className="ih-history-content">
                        <div className="column">
                            <p className="column-item-one">
                                The International Islamic House of Seattle, or just the Islamic House, was purchased in 1979 by Muslim students from a professor of Japanese Architecture at the University of Washington.
                                <br/><br/>
                                The house was designed and built with many unique features. Among them were: an indoor small garden that separated the stairwells inside the house, large open windows that let in sunlight and a deck with a view of Lake Washington. The downstairs was similar to the upstairs and had a large room that was used as a recreational area sporting equipment for ping pong, pool and other games. There were two small rooms with bathrooms attached to them that were used as study lounges and or as a gathering place. There was also a full kitchen with a pantry. On the outside, the house rested on top of a hill and was surrounded by beautiful trees.
                                <br/><br/>
                                At that time, young active UW students saw the demand and potential for such a house. They took the opportunity to invest in it as a place of their own, a place that would benefit not only Muslim students, but the entire community. It was a beacon of Islam for the University community and the rest of Seattle. It was a place for students and community members to perform their daily prayers and the Jummah Prayer on Fridays. Furthermore, it was a place for Islamic weddings, lectures, Eid celebrations, and interfaith dialogues.
                            </p>
                        </div>
                        <div className="column">
                            <p className="column-item-two">
                                In the early 1980s a decision was reached to hire a contractor to remodel and expand the house to allow for more efficient use of its space and to accommodate more people and activities. Unfortunately, poor planning on the part of the contractor lead to many mistakes. The contractor, after discovering that he grossly miscalculated the cost and effort of the project, aborted his work shortly after finishing the demolition component of the project.
                                <br/><br/>
                                The house was then left barren and without walls. Thereafter, the house deteriorated and turned into a garbage dump for nearby students and a sleeping place for the roaming homeless. The foundations of the house were shaky. The leaking roof caused damage to essentials like the bathrooms, and the heat and running water systems. The carpets and insulation were missing and the building had no interior walls in place. The yard was overgrown with weeds due to lack of maintenance, and the house was full of old construction scraps and moldy litter.
                                <br/><br/>
                                In the year 2000, MSA students decided to take up the project of reconstructing the rundown and neglected house. Through the grace of Allah and with the hard work and support of the Muslim Community, the Islamic House has been resuscitated back to life. As of 2011, and many fundraisers later, the Islamic House is now fully constructed, fully completed with carpeting, heating, and running appliances.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IHHome;