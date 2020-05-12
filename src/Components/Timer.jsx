import React, { useState,useEffect } from "react";
// import remainingTime from "./remainingTime"

function Timer(props){

    function remainingTime(){
        const d=new Date(props.eventDate);
        d.setHours(0,0,0);
        const now=new Date();
        
        var t = d - now; 
        var timeleft={};
    
        if(t>0){
           timeleft={
             days : Math.floor(t / (1000 * 60 * 60 * 24)),
             hours : Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)),
             minutes : Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
             seconds : Math.floor((t % (1000 * 60)) / 1000)
           }
        }
        return timeleft;
        
    }


    const [timeleft,updatetimeleft]=useState(remainingTime);

    useEffect(()=>{
        setTimeout(() => {
            updatetimeleft(remainingTime);
        }, 1000);
    });
    

    console.log(timeleft);


    
    return <div className="eventcreater">
        <h1>{props.eventName}</h1>
        <p>days:{timeleft.days}, hours:{timeleft.hours}, minutes:{timeleft.minutes}, seconds:{timeleft.seconds} </p>

    </div>
}

export default Timer;