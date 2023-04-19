import client from "./client";
import React, { useEffect, useState } from "react";

function Test() {

    const [content, setContent] = useState(null);

    const query = "*[_type == 'programs'] { title, flyer{asset->{url}} } ";

    useEffect(() => {
        client.fetch(query)
            .then((data) => setContent(data));
    }, []);

    const posts = (content ?  content.map((a) => (
        {/* PUT CONTENT THAT IT MAPS TO HERE */}
    )) : null);

    return (
        <div>
            {posts}
        </div>
    );
}

export default Test;