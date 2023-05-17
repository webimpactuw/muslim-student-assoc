import { Link } from "react-router-dom";
import Instagram from "../assets/social-media/1-instagram-purple.svg";
import Facebook from "../assets/social-media/2-Facebook-purple.svg";
import Discord from "../assets/social-media/3-discord-purple.svg";
import Email from "../assets/social-media/4-email-purple.svg";
import LinkTree from "../assets/social-media/5-linktree-purple.svg";

function Contact() {
    const links = ["", "https://www.instagram.com/msauw/", "https://discord.gg/kP4rYcEPe4", "https://www.facebook.com/uwmsa/", "https:www.linktr.ee/msauw"];

    return (
        <div className="contact-header header-section">
            <h1 className="contact-heading">Contact</h1>
            <div className="contact-info">
                <p className="questions">Feel free to contact us about any questions<br/> 
                you may have about our organization!</p>
                <div className="social-media-contact">
                    <div className="contact-social">
                        <a href="mailto:msauw@uw.edu">
                            <img 
                                className="contact-social-icon"
                                alt="Email"
                                src={Email} 
                            />
                        </a>
                        <p className="contact-social-text">Email: msauw@uw.edu</p>
                    </div>
                    <div className="contact-social">
                        <a href="https://www.instagram.com/msauw/">
                            <img 
                                className="contact-social-icon"
                                alt="Instagram"
                                src={Instagram} 
                            />
                        </a>
                        <p className="contact-social-text">Instagram: @msauw</p>
                    </div>
                    <div className="contact-social">
                        <a href="https://discord.gg/kP4rYcEPe4">
                            <img 
                                className="contact-social-icon"
                                alt="Discord"
                                src={Discord} 
                            />
                        </a>
                        <p className="contact-social-text">Discord: msauw</p>
                    </div>
                    <div className="contact-social">
                        <a href="https://www.facebook.com/uwmsa/">
                            <img 
                                className="contact-social-icon"
                                alt="FaceBook"
                                src={Facebook} 
                            />
                        </a>
                        <p className="contact-social-text">Facebook: uwmsa</p>
                    </div>
                    <div className="contact-social">
                        <a href="https://www.linktr.ee/msauw">
                            <img 
                                className="contact-social-icon"
                                alt="LinkTree"
                                src={LinkTree} 
                            />
                        </a>
                        <p className="contact-social-text">LinkTree: msauw</p>
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