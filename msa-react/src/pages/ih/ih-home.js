import PrayerTimeSvg from "../../assets/prayer-times.svg";
import ArrowSvg from "../../assets/arrow-down.svg"; 

function IHHome() {

    return (
        <div>
            <div className="header-section">
                <h1>The Islamic House</h1>
                <h3>4625 22nd Ave NE, Seattle, WA 98105</h3>
            </div>
            
            <div className="body-section">
                <div className="about-ih">
                    <div className="ih-content">
                        <h2 className="about-the-ih-subhead">ABOUT THE IH</h2>
                        <p className="ih-description">
                            Established in 1979, the IH is a student-run mosque that has served as a hub of Muslim life at the UW. Through daily prayers, faith-based events, and social activities, students can come strengthen their faith and create long-lasting relationships with fellow Muslim brothers and sisters.
                            <br/><br/>
                            The IH also serves the greater Seattle community through weekly Jummah prayers, community dinners, and Sunday school programs for children. We are one of the few MSAs around the country that have a mosque we can call our own. 
                        </p>
                    </div>
                    <div className="ih-content-table">
                        <h6 className="prayer-times">Prayer Times</h6>
                        <iframe 
                            className="ih-content-table"
                            loading="lazy" 
                            src="https://masjidal.com/widget/simple/v3?masjid_id=RKxwXOdO" 
                            type="text/html" 
                            width="100%" 
                            height="600" 
                            frameborder="0" 
                            allowtransparency="true"
                        >
                </iframe>
                    </div>
                </div>

                <h2 className="ih-history-title">THE HISTORY OF THE IH</h2>
                <div className="next-arrow-div">
                    <h6 className="read-full-story-subhead">Read the full story below</h6>
                    <img 
                        className="arrow-down"
                        src={ArrowSvg}
                        alt="Down Arrow"
                    />
                </div>

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
    );
};

export default IHHome;