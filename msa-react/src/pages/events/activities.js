import HeaderWB from "../../components/HeaderWB";
import pic1 from "../../assets/site-pics/pic1.png";
import pic2 from "../../assets/site-pics/pic2.png";
import pic3 from "../../assets/site-pics/pic3.png";
import pic4 from "../../assets/site-pics/pic4.png";
import pic5 from "../../assets/site-pics/pic5.png";
import client from "../../client";
import { useEffect, useState } from "react";

function Activities() {
    const genQuery = "*[_type == 'activities' && type== 'General Activities'] | order(_createdAt asc) {name, description}";
    const ihQuery = "*[_type == 'activities' && type== 'Islamic House Activities'] | order(_createdAt asc) {name, description}";
    const socQuery = "*[_type == 'activities' && type== 'Social Activities'] | order(_createdAt asc) {name, description}";

    const [genActivity, setGenActivity] = useState([]);
    const [ihActivity, setIHActivity] = useState([]);
    const [socActivity, setSocActivity] = useState([]);
    useEffect(() => {
        client.fetch(genQuery)
            .then((data) => setGenActivity(data));
        client.fetch(socQuery)
            .then((data) => setSocActivity(data));
        client.fetch(ihQuery)
            .then((data) => setIHActivity(data));
    }, []);

    const header = {
        title: "Activities",
        subtitle: "Check out our activities below!",
        buttons: [{to: "#activity-general", name: "GENERAL ACTIVITIES"}, 
        {to: "#activity-social", name: "SOCIAL ACTIVITIES"},
        {to: "#activity-ih", name: "IH ACTIVITIES"}],
        scrollTo: "#activity-general",
    } 

    return (
        <div>
            <HeaderWB props={header}/>

            <div className="activities grey-bg">
                <div className="grid-col">
                    <div />
                    <h2 id="activity-general">General Activities</h2>

                    <div>
                        <img src={pic1} alt="MSA meeting"/>
                        <img src={pic2} alt="Sheikh Umair Class"/>
                        <img src={pic3} alt="MSA meeting"/>
                    </div>
                    <div>
                        {genActivity?.map((activity, index) => 
                            <div key={index}>
                                <h6>{activity.name}</h6>
                                <p>{activity.description}</p>
                            </div>)}
                    </div>
                </div>

                <div className="grid-col">
                    <div />
                    <h2 id="activity-social">Social Activities</h2>

                    <img src={pic4} alt="3 members under arch"/>
                    <div>
                        {socActivity?.map((activity, index) => 
                            <div key={index}>
                                <h6>{activity.name}</h6>
                                <p>{activity.description}</p>
                            </div>)}
                    </div>
                </div>

                <div className="grid-col">
                    <div />
                    <h2 id="activity-ih">Islamic House Activities</h2>

                    <img src={pic5} alt="Gathering with food"/>
                    <div>
                       {ihActivity?.map((activity, index) => 
                            <div key={index}>
                                <h6>{activity.name}</h6>
                                <p>{activity.description}</p>
                            </div>)}
                    </div>                    
                </div>

            </div>
        </div>
    );
};

export default Activities;