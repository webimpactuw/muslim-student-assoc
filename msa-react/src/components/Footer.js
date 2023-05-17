function Footer() {
    function importAll(r) {
        let imgs = [];
        r.keys().map((item, index) => { imgs[index] = r(item); });
        return imgs;
    }
    const images = importAll(require.context('../assets/social-media', false, /\.(svg)$/));

    const links = ["https://www.instagram.com/msauw/", "https://www.facebook.com/uwmsa/", "https://discord.gg/kP4rYcEPe4", "https://www.tiktok.com/@msa.uw"];

    const a = images.map((src, index) => 
        <a href={links[index]} target="_blank" key={index}><img src={src} alt="Facebook"/></a>
    )

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