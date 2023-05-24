import HeaderWB from "../../components/HeaderWB";
import { NavLink } from "react-router-dom";
import pic6 from "../../assets/site-pics/pic6.png";
import pic7 from "../../assets/site-pics/pic7.png";
import pic8 from "../../assets/site-pics/pic8.png";

function Involved() {

    const header = {
        title: "Get Involved",
        description: "MSA is an organization that is only successful when its members are involved and when Muslim students on campus see the value in an organization like MSA. Being involved in MSA can be a big part of your college experience.",
    } 

    return (
        <div>
            <HeaderWB props={header}/>

            <div className="grey-bg">
                <h2 className="involved-subhead">Ways to Get Involved</h2>
                <div className="grid-col">
                    <img src={pic6} alt="MSA Meeting"/>
                    <div className="involved-elmt">
                        <h6>Come to Our Events and Meetings</h6>
                        <p>
                            Attend our general meetings, quarterly events, IH Jummah, social events, and other activities. This is the best chance for you to meet other Muslims on campus, get involved in engaging activities, and really make the most out of your time at UW! You do not need to be an MSA member to attend our events and activities unless stated otherwise.
                        </p>
                        <button className="purple-button" >
                            <NavLink to="/events" className="purple-btn-link">SEE OUR EVENTS</NavLink>
                        </button>
                    </div>

                    <img src={pic7} alt="3 Brothers"/>
                    <div className="involved-elmt">
                        <h6>Become a member</h6>
                        <p>
                            Membership is free and is available to all UW Muslim students, both undergraduate and graduate. Membership will allow you to have a say in how MSA is run, attend MSA town halls, run for office, and vote in elections. Membership is not required in order to attend our events and activities, but we highly recommend it if you would like to have a say in how MSA is run.
                        </p>
                        <button className="purple-button" >
                            <NavLink to="/events/member" className="purple-btn-link">BECOME A  MEMBER</NavLink>
                        </button>
                    </div>
                    
                    <img src={pic8} alt="Sheikh Umair"/>
                    <div className="involved-elmt">
                        <h6>Run for Office and Vote in Elections</h6>
                        <p>
                            If you want to work towards advancing MSA’s cause on campus, bettering Muslim life on campus, and get engaged in meaningful service, run for an MSA Officer position!                        
                        </p>
                        <p>
                            MSA is an organization that needs to grow in order to thrive. By having new leadership year after year, Officers are able to build upon the successes of previous Boards. 
                        </p>
                        <p>
                        If you don’t want to run, come and vote in elections! Remember, any member can run for an Officer position, but only active members for two quarters can vote in elections. For full details, visit our MSA Membership Guidelines for this year.
                        </p>
                        <button className="purple-button" >
                            <a target="_blank" rel="noopener" className="purple-btn-link" href="">VIEW GUIDELINES</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Involved;