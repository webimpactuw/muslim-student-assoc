import client from "../../client";
import { useEffect, useState } from "react";
import HeaderWB from "../../components/HeaderWB";

function Programs() {
    const query = "*[_type == 'programs'] { name, info, description }";

    const [content, setContent] = useState([]);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data));
    }, []);

    // program traits: name, info, desc. note: add key
    const programs = content ? content.map((prog, index) => 
        <div className="program" key={index}>
            <h2>{prog.name}</h2>
            <h3>{prog.info}</h3>
            <p>{prog.description}</p>
        </div>
    ) : null;

    const header = {
        title: "Programs",
        subtitle: "Check out our programs below!",
        buttons: [{to: "#programs", name: "UPCOMING"}]
    } 

    return (
        <div>
            <HeaderWB props={header}/>
            <a id="programs">
                <h2>Ongoing Programs</h2>
            </a>
            {programs}
        </div>
    );
};

export default Programs;