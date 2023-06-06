import urlFor from "../urlfor";

function ProgramCard ({prog, key}) {
    return (
        <div key={key} className="program-card">
            <h2>{prog.name}</h2>
            <h6>{prog.info}</h6>
            {prog.flyer ? 
                <img className="prog-flyer" src={urlFor(prog.flyer).url()} alt="flyer"/>
            : null }
            <p>{prog.description}</p>
        </div>
    )
}

export default ProgramCard;