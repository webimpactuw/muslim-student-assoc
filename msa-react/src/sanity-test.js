import client from "./client";
import React, { useEffect, useState } from "react";

function Test() {

    const [content, setContent] = useState(null);
    useEffect(() => {
        // client.fetch('*[_type == "board"] {  position,   name,  picture{asset->{url}} }' )
        client.fetch('*[_type == "programs"] {  title, flyer{asset->{url}}  }' )
            .then((data) => setContent(data));
    }, []);

    const posts = (content && content.map((a) => (
        <div>
            {/* <p> {a.title} </p> */}
            {/* PUT CONTENT THAT IT MAPS TO HERE */}
        </div>
    )));

    return (
        <div>
            {posts}
        </div>
    );
}

export default Test;