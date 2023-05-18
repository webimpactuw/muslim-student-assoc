import client from "../client";
import { useEffect, useState } from "react";

import Instagram from "../assets/social-media/instagram.svg";
import Facebook from "../assets/social-media/facebook.svg";
import Discord from "../assets/social-media/discord.svg";
import Tiktok from "../assets/social-media/tiktok.svg";

function Footer() {
    const query = "*[_id == 'links'] { 'links': [instagram, facebook, discord, tiktok]}";

    const [content, setContent] = useState(null);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data[0].links));
    }, []);

    const images = [Instagram, Facebook, Discord, Tiktok]

    const a = content ? images.map((src, index) => 
        <a href={content[index]} target="_blank" key={index}>
            <img src={src} alt="Social Media Logo"/>
        </a>
    ) : null

    return (
        <div className="footer">
            <div className="footer-text">
                <h4>FOR MSA UPDATES</h4>
                <p>Best way to stay up to date on MSA: text @msauw2 to 81010</p>
                <p className="divider"></p>
                <h4>FOR IH UPDATES</h4>
                <p>Best way to stay up to date on IH announcements: text @ihuw to 81010</p>
            </div>
            <div className="social-media">
                <div className="social-media-icons">
                    <h4>SOCIAL MEDIA</h4>
                    {a}
                </div>
                <div className="made-with-love">
                    <p>Made with 💛 by DUBvelopers!</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;