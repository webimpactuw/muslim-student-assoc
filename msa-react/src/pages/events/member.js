import HeaderWB from "../../components/HeaderWB";
import Hug from "../../assets/site-pics/memberhug.svg";
function member() {
    const header = {
        title: "Become a Member",
        description: `Become an MSA member today! Members are the only ones able to have a say in how MSA should run, 
            attend MSA town halls, run for an Officer position, and vote in elections. 
            We strongly suggest that you become a member, as our organization’s success depends on our general member involvement.`
    } 

    return (
        <div>
            <HeaderWB props={header}/>
            <div className="member-info">
                <h2>Becoming a member is easy!</h2>
                
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
                <p>
                    The MSA Purpose Statement is a general statement of what MSA aims to do as outlined in our constitution. 
                    We ensure that all our activities fulfill this statement, and this statement outlines the scope of MSA’s 
                    involvement in Muslim affairs. The statement is below:
                </p>
                <p>
                    “The purpose of the Muslim Students Association at the University of Washington will be to provide a supportive 
                    and inclusive community on campus for Muslim students, serve as a representative for the authentic tradition of Islam 
                    on the UW campus, work towards strengthening faith in students and learning about Islam, empower Muslim students to become 
                    leaders in their communities, and serve the greater campus and Seattle community.”
                </p>
                
                <h6>Final Steps</h6>
                <p>
                    Please refer to the MSA Membership Guidelines regarding eligibility to vote in elections and run for office. 
                    The short version is, if you show up and are active, you get to vote. For the specifics, refer here: 
                </p>
                {/* <a target="_blank" rel="noopener" href="https://msauw.org/wp-content/uploads/2019/06/MSA-UW-Membership-Guidelines-2019-2020_.pdf">
                    MSA-UW Membership Guidelines 2019-2020</a> */}
                <p>
                    Once you are ready, fill out the form below to become a member!
                </p>
            </div>
        </div>
    );
}

export default member;