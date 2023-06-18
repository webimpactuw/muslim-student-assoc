import client from "../../client";
import { useEffect, useState } from "react";
import urlFor from "../../urlfor";

function Board() {
    const query = "*[_type == 'board'] | order(order asc) {  position,   name,  picture }";
    const subQuery = "*[_id == 'text'] { subtitle, board } "

    const [content, setContent] = useState([]);
    const [info, setInfo] = useState(null);
    useEffect(() => {
        client.fetch(query)
            .then((data) => setContent(data));
        client.fetch(subQuery)
            .then((data) => setInfo(data[0]));
    }, []);


    const board = content ? content.map((person, index) => 
        <div className="board-member" key={index}>
            <img className="member-pic" alt="board member headshot"
                src={urlFor(person.picture).size(300, 300).url()}/>
            <p>{person.name}</p>
            <h6>{person.position}</h6>
        </div>
    ) : null;

    console.log(board);
    return (
        <div>
            <div className="header-section">
                <h1>MSA Board</h1>
                <h3>MSA Officer Board  {info?.subtitle}</h3>
            </div>
            <div className="info-text">
                <h2>Officer Board</h2>
                <p>
                    {info?.board}
                </p>
            </div>
            <div className="board grey-bg">
                {board}
            </div>
        </div>
    );
};

export default Board;