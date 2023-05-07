import client from "../../client";
import { useEffect, useState } from "react";

function Programs() {
    const query = "*[_type == 'programs'] { name, info, description }";

    const [content, setContent] = useState([]);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data));
    }, []);

    // program traits: name, info, desc. note: add key
    const programs = content ? content.map((prog) => 
        <div>{prog.name}
            {prog.info}
            {prog.description}
        </div>
    ) : null;

    return (
        <div>
            <h1>Programs</h1>
            {programs}
        </div>
    );
};

export default Programs;