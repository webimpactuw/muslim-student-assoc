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


    const board = content ? content.map((person, index) => 
        <div className="board-member" key={index}>
            <img className="member-pic" src={urlFor(person.picture).size(300, 300).url()}/>
            <p>{person.name}</p>
            <h6>{person.position}</h6>
        </div>
    ) : null;

    console.log(board);
    return (
        <div>
            <div className="header-section">
                <h1>MSA Board</h1>
                <h3>MSA Officer Board 2022-2023 & Previous</h3>
            </div>
            <div className="info-text">
                <h2>Officer Board</h2>
                <p>The Officer Board does not do all of the work in MSA,
                     rather they seek to delegate responsibilities and roles to general members. 
                     The role of the Officer Board is to lead, while empowering everyone in the organization
                      to contribute to the MSA cause. Officers are volunteers, and are motivated individuals who 
                      sacrifice their time to better the MSA.
                </p>
            </div>
            <div className="board grey-bg">
                {board}
            </div>
        </div>
    );
};

export default Board;