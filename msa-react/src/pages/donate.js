import client from "../client";
import { useEffect, useState } from "react";

const Donate= () => {
    const query = "*[_id == 'links'] { ihdonate, msadonate }";

    const [content, setContent] = useState(null);
    useEffect(() => {
        client.fetch(query)
        .then((data) => setContent(data[0]));
    }, []);

    return (
      <div className="lantern-header header-background-purple">
            <h1 className="resources-heading">Donate</h1>
            <div className="links donate-page">
                <a href={content?.ihdonate} className="purple-btn-link" target="_blank">
                    <button className="purple-button">DONATE TO THE IH</button>
                </a>
                <a href={content?.msadonate} className="purple-btn-link" target="_blank">
                    <button className="purple-button">DONATE TO MSA</button>
                </a>
            </div>
        </div>
    );
};
    
export default Donate;