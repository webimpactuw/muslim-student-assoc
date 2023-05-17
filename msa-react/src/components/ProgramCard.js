function ProgramCard ({prog, key}) {
    return (
        <div key={key} className="program-card">
            <h2>{prog.name}</h2>
            <h6>{prog.info}</h6>
            <p>{prog.description}</p>
        </div>
    )
}

export default ProgramCard;