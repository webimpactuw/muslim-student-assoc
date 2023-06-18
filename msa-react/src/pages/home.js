import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../client";
import urlFor from "../urlfor";

const Home = () => {
    const query = "*[_id == 'homepics'] { 'images': [picture1, picture2, picture3, picture4, picture5]}";
    const query2 = "*[_id == 'text'] {home}";

    const [content, setContent] = useState(null);
    const [info, setInfo] = useState(null);
    useEffect(() => {
        client.fetch(query)
            .then((data) => setContent(data[0].images));
        client.fetch(query2)
            .then((data) => setInfo(data[0].home));
    }, []);

    return (
        <div className="homePage">
            <div className="home-header">
                <div className="home-header-txt">
                    <h1>Welcome, we&nbsp;are&nbsp;the <br/>Muslim Students Association!</h1>
                    <h3>AT THE UNIVERSITY OF WASHINGTON</h3>
                    <p>Join if you want to be a part of a supportive <br/>and inclusive community of Muslims on campus!</p>

                    <NavLink className="purple-btn-link" to="/events/get-involved">
                        <button className="purple-button">
                            GET INVOLVED
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="info-text">
                <h2>A Glimpse of MSA at UW</h2>
                <p>{info}</p>
            </div>
            {content ? 
                <div className="home-pics-sect">
                    <div className="picsLeft">
                        <img src={urlFor(content[0]).size(750, 500).url()} className="homepics" alt=""/>
                        <img src={urlFor(content[1]).size(750, 500).url()} className="homepics" alt=""/>
                    </div>
                    <div className="picsRight">
                        <img src={urlFor(content[2]).size(440, 325).url()} className="homepics" alt=""/>
                        <img src={urlFor(content[3]).size(440, 325).url()} className="homepics" alt=""/>
                        <img src={urlFor(content[4]).size(440, 325).url()} className="homepics" alt=""/>
                    </div>            
                </div>
            : null}
        </div>
    );
};
  
export default Home;