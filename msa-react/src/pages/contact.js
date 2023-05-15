function Contact() {
    const links = ["", "https://www.instagram.com/msauw/", "https://discord.gg/kP4rYcEPe4", "https://www.facebook.com/uwmsa/", "https:www.linktr.ee/msauw"];

    return (
        <div className="contact-header header-section">
            <h1 className="contact-heading">Contact</h1>
            <div className="contact-info">
                <p className="questions">Feel free to contact us about any questions<br/> 
                you may have about our organization!</p>
                <div className="social-media-contact">
                    <div className="social">
                        {/* <a href="mailto:msauw@uw.edu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                                <img 
                                    className="email"
                                    href="./assets/social-media/4-email.svg" 
                                    width="100" 
                                    height="100" 
                                />
                            </svg>
                        </a> */}
                        <p>msauw@uw.edu</p>
                    </div>
                    <div className="social">
                        <p>@msauw</p>
                    </div>
                    <div className="social">
                        <p>msauw</p>
                    </div>
                    <div className="social">
                        <p>Muslim Students Association - University of Washington</p>
                    </div>
                    <div className="social">
                        <p>Linktree</p>
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