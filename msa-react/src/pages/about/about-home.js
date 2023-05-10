import React from 'react';
import purpose1 from "../../assets/about/purpose-1.svg";
import purpose2 from "../../assets/about/purpose-2.svg";
import purpose3 from "../../assets/about/purpose-3.svg";
import purpose4 from "../../assets/about/purpose-4.svg";
import purpose5 from "../../assets/about/purpose-5.svg";
import prayerPhoto from "../../assets/about/prayer-photo.svg";
import mosquePhoto from "../../assets/about/mosque-photo.svg";
import quranPhoto from "../../assets/about/quran-photo.svg";



function AboutHome() {
    return (
        <div className="About Page">
           <div className="About-Header">
                <h1>About Us</h1>
                <h3>Learn more about us and what we do</h3>
                <button className="purple-button">BECOME A MEMBER</button>
            </div>
              
            
            
            <div className="info-text">
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
                <div className="purpose-header">
                    <h2>OUR PURPOSE</h2>
                </div>
                <div className="about-container">

                
                    <div className="purposes">
                        <div>
                        <img src={purpose1} alt="Purpose 1" class="image-left"/>
                        </div>
                        <div>
                        <img src={purpose2} alt="Purpose 2" class="image-left"/>
                        </div>
                        <div>
                        <img src={purpose3} alt="Purpose 3" class="image-left"/>
                        </div>
                        <div>
                        <img src={purpose4} alt="Purpose 4" class="image-left"/>
                        </div>
                        <div>
                        <img src={purpose5} alt="Purpose 5" class="image-left"/>
                        </div>
                    
                    </div>
                    <div className="purpose-pictures">
                        <div>
                            <img src={prayerPhoto} alt="Prayer Photo" class="image-right"/>
                        </div>
                        <div>
                            <img src={mosquePhoto} alt="Mosque Photo" class="image-right"/>
                        </div>
                        <div>
                            <img src={quranPhoto} alt="Quran Photo" class="image-right"/>
                        </div>
                        
                    </div>

                </div>
                
            </div>
            
        </div>

    );
};

export default AboutHome;