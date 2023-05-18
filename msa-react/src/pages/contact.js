import Instagram from "../assets/contact/instagram-purple.svg";
import Facebook from "../assets/contact/facebook-purple.svg";
import Discord from "../assets/contact/discord-purple.svg";
import Email from "../assets/contact/email-purple.svg";
import LinkTree from "../assets/contact/linktree-purple.svg";

import client from "../client";
import { useEffect, useState } from "react";

function Contact() {
    const query = "*[_id == 'links'] { email, instagram, discord, facebook, linktree }";

    const [content, setContent] = useState(null);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data[0]));
    }, []);

    return (
        <div className="contact-header header-section">
            <h1 className="contact-heading">Contact</h1>
            <div className="contact-info">
                <p className="questions">Feel free to contact us about any questions<br/> 
                you may have about our organization!</p>

                <div className="social-media-contact">
                    <div className="contact-social">
                        <a href={content ? "mailto:" + content.email : null} target="_blank">
                            <img 
                                className="contact-social-icon"
                                alt="Email"
                                src={Email} 
                            />
                        </a>
                        <a href={content ? "mailto:" + content.email : null} target="_blank">
                            <p className="contact-social-text">Email: msauw@uw.edu</p>
                        </a>
                    </div>
                    <div className="contact-social">
                        <a href={content?.instagram} target="_blank">
                            <img 
                                className="contact-social-icon"
                                alt="Instagram"
                                src={Instagram} 
                            />
                        </a>
                        <a href={content?.instagram} target="_blank">
                            <p className="contact-social-text">Instagram: @msauw</p>
                        </a>
                    </div>
                    <div className="contact-social">
                        <a href={content?.discord} target="_blank">
                            <img 
                                className="contact-social-icon"
                                alt="Discord"
                                src={Discord} 
                            />
                        </a>
                        <a href={content?.discord} target="_blank">
                            <p className="contact-social-text">Discord: msauw</p>
                        </a>
                    </div>
                    <div className="contact-social">
                        <a href={content?.facebook} target="_blank">
                            <img 
                                className="contact-social-icon"
                                alt="FaceBook"
                                src={Facebook} 
                            />
                        </a>
                        <a href={content?.facebook} target="_blank">
                            <p className="contact-social-text">Facebook: uwmsa</p>
                        </a>
                    </div>
                    <div className="contact-social">
                        <a href={content?.linktree} target="_blank">
                            <img 
                                className="contact-social-icon"
                                alt="LinkTree"
                                src={LinkTree} 
                            />
                        </a>
                        <a href={content?.linktree} target="_blank">
                            <p className="contact-social-text">LinkTree: msauw</p>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h6 className="mail-address">Mailing Address:</h6>
                <p className="address">Muslim Students Association<br/>
                University of Washington<br/>
                4001 NE Stevens Way<br/>
                HUB 232, Box 352258, SAO Box 127<br/>
                Seattle, WA 98105<br/>
                </p>
            </div>
        </div>
        
    );
};

export default Contact;