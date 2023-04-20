import React from 'react';


function AboutHome() {
    return (
        <div className="About Page">
           <div className="About-Header">
            <div className="About-Text">
                <h1>About Us</h1>
                <h3>Learn more about us and what we do</h3>
                <button className="purple-button">BECOME A MEMBER</button>
            </div>
            </div>  
            
            
            <div className="Who-We-Are">
                <h2>WHO WE ARE</h2>
                <p>The Muslim Students Association at the University of Washington (MSA UW) is a student run 
                organization that was established in 1968, which seeks to serve Muslim students and 
                represent Islam on the UW campus and Seattle. </p>

                <p> MSA at UW is all about building a brotherhood/sisterhood atmosphere right here on 
                campus. Uniting for the sake of Allah in all our actions and strengthening our bonds of 
                iman. Making everlasting friendships on campus by helping each other in those dire times 
                of need. Reaching out to non-Muslims to spread cultural understanding.</p>
            </div>
            


            <div className="Our-Purpose">
                <h2>OUR PURPOSE</h2>
                <div>
                    <img src='./assets/icons/about/purpose-1.svg' alt="Purpose 1" class="image-left"/>
                </div>
                
            </div>
            
        </div>

    );
};

export default AboutHome;