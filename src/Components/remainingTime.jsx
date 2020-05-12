import React from "react";

function remainingTime(props){
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

export default remainingTime;