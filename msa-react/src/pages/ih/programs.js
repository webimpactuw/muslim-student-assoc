import client from "../../client";
import { useEffect, useState } from "react";
import ProgramCard from "../../components/ProgramCard";
import HeaderWB from "../../components/HeaderWB";

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
        buttons: [{to: "#programs", name: "UPCOMING"}],
        scrollTo: "#programs",
    } 

    return (
        <div>
            <HeaderWB props={header}/>
            <div className="grey-bg">
                <h2 id="programs" className="program-head">Ongoing Programs</h2>
                <div className="grid-col programs-list">
                    {programs}
                </div>
            </div>
        </div>
    );
};

export default Programs;