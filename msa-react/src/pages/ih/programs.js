import client from "../../client";
import { useEffect, useState } from "react";
import HeaderWB from "../../components/HeaderWB";
import ProgramCard from "../../components/ProgramCard";

function Programs() {
    const query = "*[_type == 'programs'] | order(_createdAt asc){ name, info, description }";

    const [content, setContent] = useState([]);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data));
    }, []);

    // program traits: name, info, desc. note: add key
    const programs = content ? content.map((prog, index) => 
        <ProgramCard prog={prog} key={index}/>
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
            <div className="grid-col programs-list">
                {programs}
            </div>
        </div>
    );
};

export default Programs;