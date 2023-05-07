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
    <div>{content.name} {content.description}{content.link}
    {content.flyer ? urlFor(content.flyer).url() : null }
    </div>
    : null;

    return (
        <h1>Events {upcomingEvent}</h1>
    );
};

export default EventsHome;