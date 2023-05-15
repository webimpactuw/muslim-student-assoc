import HeaderWB from "../../components/HeaderWB";
import pic1 from "../../assets/site-pics/pic1.png";
import pic2 from "../../assets/site-pics/pic2.png";
import pic3 from "../../assets/site-pics/pic3.png";
import pic4 from "../../assets/site-pics/pic4.png";
import pic5 from "../../assets/site-pics/pic5.png";

function Activities() {
    const header = {
        title: "Activities",
        subtitle: "Check out our activities below!",
        buttons: [{to: "#", name: "GENERAL ACTIVITIES"}, 
        {to: "#", name: "SOCIAL ACTIVITIES"},
        {to: "#", name: "IH ACTIVITIES"}]
    } 

    return (
        <div>
            <HeaderWB props={header}/>
            {/* content */}
            <div>
                {/* general */}
                <div className="events-grid">
                    <img src={pic1} alt="MSA meeting image"/>
                    <div>
                        <h2>General Activites</h2>
                        <h6>General Meetings</h6>
                        <p>The bread and butter of MSA, these are our weekly meetings in MSA. These meetings offer a mix of religious, social, charitable, and educational activities. General Meetings are a great place to meet other Muslims, stay up to date with MSA news, and spend time de-stressing with other members!</p>
                    </div>
                    <img src={pic2} alt="Sheikh Umair Class"/>
                    <div>
                        <h6>Town Hall</h6>
                        <p>A meeting, that meets up every other week, where MSA members can voice their opinions, concerns, and suggestions and work with officers to make MSA the best it can be!</p>
                        <h6>Sheikh Umair's Class</h6>
                        <p>MSA at UW is blessed to have Sheikh Umair, a local scholar and instructor at Mihraab, hold weekly Islamic classes free of charge to MSA students.</p>
                    </div>
                    <img src={pic3} alt="MSA meeting image"/>
                    <div>
                        <h6>MSA Dawah Table</h6>
                        <p>As part of MSA’s mission to represent Islam on campus an educate non-Muslims about our faith, MSA has a table weekly outside of the HUB with Quran’s, pamphlets, and members ready to answer questions about Islam.</p>
                        <h6>Halaqahs</h6>
                        <p>We hold frequent halaqah’s during the quarter for MSA members to come together and discuss a wide variety of topics that interest them ranging from how to increase one’s iman to Islamic banking and finance.There are separate halaqah’s for brothers and sisters so as to allow them to discuss topics in a more comfortable setting.</p>
                    </div>
                </div>
                {/* social */}
                <div className="events-grid">
                    <img src={pic4} alt="3 members at photo spot"/>
                    <div>
                        <h2>Social Activites</h2>
                        <h6>MSA Welcome Back BBQ</h6>
                        <p>Every year on the first Friday of fall quarter, the MSA has a welcome back barbecue for new and existing Muslim students after Jummah at the IH. This BBQ is MSA’s first event of the year and is a chance to meet members of the MSA and become a part of the MSA community!</p>
                        <h6>Monthly Socials</h6>
                        <p>There are monthly social activities for MSA members to bond with one another and create a strong brotherhood and sisterhood on campus. Activities have included canoeing, bowling, dinners at the IH, tubing, flag football, a sisters party, and much more.</p>
                        <h6>Muslimtainment</h6>
                        <p>Our Muslim talent show on campus. Put on by MSA members, Muslimtainment is a showcase of talents, skits, and homemade movies.</p>
                    </div>
                </div>
                {/* ih */}
                <div className="events-grid">
                    <img src={pic5} alt="Gathering with food"/>
                    <div>
                        <h2>Islamic House Activites</h2>
                        <h6>Jummah Prayers</h6>
                        <p>
                            Khutbahs are delivered by students and imams from around the Seattle area. More information in Islamic House Page.                        
                        </p>
                        <h6>Ramadan Iftars</h6>
                        <p>
                            Every day in Ramadan, we are blessed to have catered iftar and dinner sponsored by community members and local businesses. Taraweeh prayers are also held at the IH.                        
                        </p>
                        <h6>Eid at the IH</h6>
                        <p>
                            Eid Prayers available for students and community members in the area. After the Eid Prayer, there is a community breakfast for everyone.
                        </p>
                        <h6>Seattle Super Smashdown</h6>
                        <p>
                            An annual Super Smash Bros.: Ultimate tournament held by the Islamic House.
                        </p>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Activities;