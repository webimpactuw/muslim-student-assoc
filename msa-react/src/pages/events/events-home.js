import client from "../../client";
import { useEffect, useState } from "react";
import urlFor from "../../urlfor";

function EventsHome() {
    const singleQuery = "*[_id == 'event'] { name, description, link, flyer } ";
    const majorQuery = "*[_type == 'events'] | order(_createdAt asc) { name, description}";

    const [content, setContent] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        client.fetch(singleQuery)
            .then((data) => setContent(data[0]));
        client.fetch(majorQuery)
            .then((data) => setEvents(data));
    }, []);

    // singleton event: name, desc, link, flyer
    const upcomingEvent = content ?
        <div className="grid-col upcoming-event">
            {content.flyer ? <img src={urlFor(content.flyer).size(580, 740).url()} /> : null}
            <div className="events-info">
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
            <h2 className="events-head">Major Events of the Year</h2>
            <div className="grid-col" style={{alignItems: "start"}}>
                {events?.map((event, index) => 
                    <div key={index}> 
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default EventsHome;