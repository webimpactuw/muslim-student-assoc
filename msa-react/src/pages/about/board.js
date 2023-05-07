import client from "../../client";
import { useEffect, useState } from "react";
import urlFor from "../../urlfor";

function Board() {
    const query = "*[_type == 'board'] | order(order asc) {  position,   name,  picture }";

    const [content, setContent] = useState([]);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data));
    }, []);


    //each board member object has a name, position, and picture, accessible as seen below
    //note: add key
    const board = content ? content.map((person) => 
        <div>{person.name}
            {person.position}
            <img src={urlFor(person.picture).url()}/>
        </div>
    ) : null;

    console.log(board);
    return (
        <h1>MSA Board
            {board}
        </h1>
    );
};

export default Board;