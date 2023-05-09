import client from "../../client";
import { useEffect, useState } from "react";
import urlFor from "../../urlfor";

function EventsHome() {
    const query = "*[_id == 'event'] { name, description, link, flyer } ";

    const [content, setContent] = useState([]);
    useEffect(() => {
        client.fetch(query)
            .then((data) => setContent(data[0]));
    }, []);

    // singleton event: name, desc, link, flyer
    const upcomingEvent = content ?
        <div className="upcoming-event">
            {content.flyer ? <img src={urlFor(content.flyer).size(580, 740).url()} /> : null}
            <div className="event-info">
                <h2>{content.name}</h2>
                <p>{content.description}</p>
                <button className="purple-button">
                    <a className="purple-btn-link"
                        href={content.link}
                        target="_blank"
                        rel="noopener">
                        RSVP HERE
                    </a>
                </button>
            </div>
        </div>
        : null;

    return (
        <div>
            <div className="header-section">
                <h1>Events</h1>
                <h3>Come out and join us at one of our events!</h3>
            </div>
            {upcomingEvent}
            <h2>Major Events of the Year</h2>
            <div className="pillars">
                <div>
                    <h3>MSA Conference</h3>
                    <p>Our most popular event of the year! This conference is held in winter for both UW Muslims and Seattle Muslims. World renowned speakers from around the country come to Seattle to speak on a theme that is relevant to Muslim students.</p>
                    <h3>MSA Banquet</h3>
                    <p>Our farewell dinner at the end of the year. The newly elected Officers officially begin their term, graduating seniors say their goodbyes and share their advice, and of course, it wouldn’t be a banquet without food!</p>
                    <h3>MSA Eid Celebration</h3>
                    <p>As of right now, this event is still in the works, but we intend to have a big Eid Celebration for all the Muslims on campus in the Spring.</p>
                </div>
                <div>
                    <h3>MSA Annual Fundraiser</h3>
                    <p>In the fall we have our annual fundraiser to raise money for every aspect of MSA in the coming year.</p>
                    <h3>MSA Culture Fest</h3>
                    <p>A showcase of the diverse ethnicities and nationalities that make up our Muslim Ummah. MSA students have tables for their countries, dress up in cultural clothing, share food, and more!</p>
                    <h3>MSA Believer's Voice</h3>
                    <p>Voted by many of our members as their FAVORITE event. Every Muslim has a story, whether that story be funny, sad, or even life changing. The Believer’s Voice is a platform for MSA members to tell and hear the unique stories of their peers never heard before.</p>
                </div>
            </div>
        </div>
    );
};

export default EventsHome;