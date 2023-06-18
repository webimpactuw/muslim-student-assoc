import React from 'react';
import { NavLink } from 'react-router-dom';
import purpose1 from "../../assets/about/purpose-1.svg";
import purpose2 from "../../assets/about/purpose-2.svg";
import purpose3 from "../../assets/about/purpose-3.svg";
import purpose4 from "../../assets/about/purpose-4.svg";
import purpose5 from "../../assets/about/purpose-5.svg";
import prayerPhoto from "../../assets/about/prayer-photo.svg";
import mosquePhoto from "../../assets/about/mosque-photo.svg";
import quranPhoto from "../../assets/about/quran-photo.svg";
import client from "../../client";
import { useEffect, useState } from "react";

function AboutHome() {
    const query = "*[_id == 'text'] {about}";

    const [content, setContent] = useState(null);
    useEffect(() => {
        client.fetch(query)
            .then((data) => setContent(data[0].about));
    }, []);

    return (
        <div className="About Page">
           <div className="header-section About-Header">
                <h1>About Us</h1>
                <h3>Learn more about us and what we do</h3>
                <NavLink className="purple-btn-link" to="/events/member">
                    <button className="purple-button">
                        BECOME A MEMBER
                    </button>
                </NavLink>
            </div>
              
            
            <div className="info-text">
                <h2>WHO WE ARE</h2>
                <p>{content}.</p>
            </div>
            

            <div className="Our-Purpose grey-bg">
                <div className="purpose-header">
                    <h2>OUR PURPOSE</h2>
                </div>

                <div className="about-container">
                    <div className="purposes">
                        <img src={purpose1} alt="Purpose 1"/>
                        <img src={purpose2} alt="Purpose 2"/>
                        <img src={purpose3} alt="Purpose 3"/>
                        <img src={purpose4} alt="Purpose 4"/>
                        <img src={purpose5} alt="Purpose 5"/>
                    </div>
                    <div className="purpose-pictures">
                        <img src={prayerPhoto} alt="Prayer"/>
                        <img src={mosquePhoto} alt="Mosque"/>
                        <img src={quranPhoto} alt="Quran"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutHome;