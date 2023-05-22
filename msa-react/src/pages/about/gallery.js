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
        <div key={index}>
            <h2>{post.info}</h2>

            <div className="gallery-img-row">
                {post.pictures.map((pic, picIndex) => (
                <img
                          key={picIndex}
                          className="gallery-img-polaroid"
                          src={urlFor(pic).url()}
                        />
                      ))}
            </div>

        </div>
    ) : null;

    return (
        <div>
            <div className="header-section">
                <h1>Gallery</h1>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
};

export default Gallery;