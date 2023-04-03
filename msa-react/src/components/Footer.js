import facebookLogo from "../assets/facebook-logo.png";
import youtubeLogo from "../assets/youtube-logo-cropped.png";
import instagramLogo from "../assets/instagram-logo.png";
import tiktokLogo from "../assets/tiktok-logo.png";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-text">
                <h3>FOR MSA UPDATES</h3>
                <p>Best way to stay up to date on MSA: text @msauw2 to 81010</p>
                <p className="divider"></p>
                <h3>FOR IH UPDATES</h3>
                <p>Best way to stay up to date on IH announcements: text @ihuw to 81010</p>
            </div>
            <div className="social-media">
                <h3>SOCIAL MEDIA</h3>
                <div className="social-media-icons">
                    <a href="https://www.facebook.com/" target="_blank"><img src={facebookLogo} alt="Facebook"/></a>
                    <a href="https://www.instagram.com" target="_blank"><img src={instagramLogo} alt="Youtube"/></a>
                    <a href="https://www.tiktok.com" target="_blank"><img src={tiktokLogo} alt="Facebook"/></a>
                    <a href="https://www.youtube.com/" target="_blank"><img src={youtubeLogo} alt="Youtube"/></a>
                </div>
                <div className="made-with-love">
                    <p>Made with 💛 by DUBvelopers!</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;