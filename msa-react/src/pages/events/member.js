import HeaderWB from "../../components/HeaderWB";

function member() {
    const header = {
        title: "Become a Member",
        description: "Become an MSA member today! Members are the only ones able to have a say in how MSA should run, attend MSA town halls, run for an Officer position, and vote in elections. We strongly suggest that you become a member, as our organization’s success depends on our general member involvement."
    } 

    return (
        <div>
            <HeaderWB props={header}/>
        </div>
    );
}

export default member;