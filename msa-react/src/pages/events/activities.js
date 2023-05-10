import HeaderWB from "../../components/HeaderWB";
function Activities() {
    const header = {
        title: "Activities",
        subtitle: "Check out our activities below!",
        buttons: [{to: "#", name: "GENERAL ACTIVITIES"}, 
        {to: "#", name: "SOCIAL ACTIVITIES"},
        {to: "#", name: "IH ACTIVITIES"}]
    } 

    return (
        <div>
            <HeaderWB props={header}/>
        </div>
    );
};

export default Activities;