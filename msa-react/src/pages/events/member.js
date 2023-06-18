import HeaderWB from "../../components/HeaderWB";
import Hug from "../../assets/site-pics/memberhug.svg";
import client from "../../client";
import { useEffect, useState } from "react";

function Member() {
    const query = "*[_id == 'links'] { membership }";
    const query2 = "*[_id == 'text'] { member, purpose }";

    const [content, setContent] = useState(null);
    const [info, setInfo] = useState(null);
    useEffect(() => {
        client.fetch(query)
            .then((data) => setContent(data[0].membership));
        client.fetch(query2)
            .then((data) => setInfo(data[0]));
    }, []);

    const header = {
        title: "Become a Member",
        description: info?.member,
        scrollTo: "#member"
    } 

    return (
        <div>
            <HeaderWB props={header}/>
            <div className="member-info">
                <h2 id="member">Becoming a member is easy!</h2>
                
                <div className="member-list">
                    <div>
                        <h6>The only requirements are:</h6>
                        <ul>
                            <li>The student must be a Muslim.</li>
                            <li>The student must be enrolled at UW Seattle. Students who have graduated cannot be members. </li>
                            <li>The student must be in full agreement with the MSA purpose statement.</li>
                        </ul>
                    </div>
                    <img src={Hug} className="hug-pic" alt="two hugging cartoon"/>
                </div>

                <h6>What is the purpose statement?</h6>
                <p className="purpose">
                    The MSA Purpose Statement is a general statement of what MSA aims to do as outlined in our constitution. 
                    We ensure that all our activities fulfill this statement, and this statement outlines the scope of MSA’s 
                    involvement in Muslim affairs. The statement is below:
                </p>
                <p>
                    “{info?.purpose}”
                </p>
                
                <h6>Final Steps</h6>
                <p>
                    Please refer to the MSA Membership Guidelines regarding eligibility to vote in elections and run for office. 
                    The short version is, if you show up and are active, you get to vote.  
                </p>
                <a target="_blank" rel="noopener" href={content ? content : ""} style={{textDecoration:"underline"}}>
                    MSA-UW Membership Guidelines</a>
                <p>
                    Once you are ready, fill out the form below to become a member!
                </p>
            </div>
        </div>
    );
}

export default Member;