import { NavLink } from "react-router-dom";
import client from "../client";
import { useEffect, useState } from "react";
import urlFor from "../urlfor";

const Home = () => {
    const query = "*[_id == 'homepics'] { picture1, 'images': [picture1, picture2, picture3, picture4, picture5]}";

    const [content, setContent] = useState(null);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data[0].images));
    }, []);

    return (
        <div className="homePage">
            <div className="home-header">
                <div className="home-header-txt">
                    <h1>Welcome, we&nbsp;are&nbsp;the <br/>Muslim Students Association!</h1>
                    <h3>AT THE UNIVERSITY OF WASHINGTON</h3>
                    <p>Join if you want to be a part of a supportive <br/>and inclusive community of Muslims on campus!</p>

                    <button className="purple-button"><NavLink className="purple-btn-link" to="/events/get-involved">GET INVOLVED</NavLink></button>
                </div>
            </div>
            <div className="info-text">
                <h2>A Glimpse of MSA at UW</h2>
                <p>MSA serves as the center of Muslim life on campus. From our weekly activities, 
                quarterly events, social activities, classes, charitable activities, and programs at 
                the Islamic House,<br/>
                MSA has become a highlight of many students’ college experiences at the UW. As one 
                of UW’s most active student organizations, MSA is a place to meet other Muslims, get 
                involved in engaging activities, and really make the most out of your time at UW!</p>
            </div>
            {content ? 
                <div className="home-pics-sect">
                    <div className="picsLeft">
                        <img src={urlFor(content[0]).size(750, 500).url()} className="homepics" />
                        <img src={urlFor(content[1]).size(750, 500).url()} className="homepics" />
                    </div>
                    <div className="picsRight">
                        <img src={urlFor(content[2]).size(440, 325).url()} className="homepics" />
                        <img src={urlFor(content[3]).size(440, 325).url()} className="homepics" />
                        <img src={urlFor(content[4]).size(440, 325).url()} className="homepics" />
                    </div>            
                </div>
            : null}
        </div>
    );
};
  
export default Home;