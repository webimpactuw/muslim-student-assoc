import HeaderWB from "../../components/HeaderWB";

function Involved() {

    const header = {
        title: "Get Involved",
        description: "MSA is an organization that is only successful when its members are involved and when Muslim students on campus see the value in an organization like MSA. Being involved in MSA can be a big part of your college experience.",
    } 

    return (
        <div>
            <HeaderWB props={header}/>
        </div>
    );
};

export default Involved;