import client from "../../client";
import { useEffect, useState } from "react";
import HeaderWB from "../../components/HeaderWB";
import ProgramCard from "../../components/ProgramCard";
import DownArrow from "../../components/DownArrow";

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

    return (
        <div>
            <div className="header-white">
                <h1>Programs</h1>
                <h3>Check out our programs below!</h3>
                    <div className="links">
                        <button className="purple-button" >
                            <a className="purple-btn-link" href="#programs" >
                                Upcoming
                            </a>
                        </button>
                    </div>
                <DownArrow />
            </div>
            <div className="grey-bg">
                <a id="programs">
                    <h2>Ongoing Programs</h2>
                </a>
                <div className="grid-col programs-list">
                    {programs}
                </div>
            </div>
        </div>
    );
};

export default Programs;