import React from "react";


function CreateTimer(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;


    return <div>
        <form className="timer">
            <h2>Event Name</h2>
            <input type="text" name="event"></input>
            <h3>Enter date:</h3>
            <input type="date"  name="date"   min={today} required></input>
            {/* <span class="validity"></span> */}
            <button >add</button>
        </form>
    </div>
}


export default CreateTimer;