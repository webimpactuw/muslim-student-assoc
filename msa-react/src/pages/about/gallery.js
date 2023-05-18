import client from "../../client";
import { useEffect, useState } from "react";
import urlFor from "../../urlfor";

function Gallery() {
    // newest first
    const query = "*[_type == 'gallery'] | order(_createdAt desc) { info,  pictures[] }";

    const [content, setContent] = useState([]);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data));
    }, []);

    //each gallery entry has a title and array of images, access with post.info and map the images
    const posts = content ? content.map((post, index) => 
        <div key={index}>{post.info}
            {post.pictures.map((pic) => <img src={urlFor(pic).url()}/> )}
        </div>
    ) : null;

    return (
        <h1>Gallery
            {posts}
        </h1>
    );
};

export default Gallery;