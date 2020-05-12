import React, { useState } from "react";
import mindate from "./mindate";

function CreateTimer(props){
    

    const [inputEvent,setEvent]=useState({
        eventName:"",
        eventDate:""
    });

    function handleChange(event){
         const {name,value}=event.target;

         setEvent(prevValue=>{
             return {
                 ...prevValue,
                 [name]:value
             }
         });
         console.log(name);
         console.log(value)

    }


    function submit(event){
        props.onAdd(inputEvent);
        event.preventDefault();
    }
   


    return <div>
        <form className="timer">
            <h2>Event Name</h2>
            <input onChange={handleChange} type="text" name="eventName" placeholder="enter the event name" value={inputEvent.eventName}></input>
            <h3>Enter date:</h3>
            <input onChange={handleChange} type="date"  name="eventDate"  min={mindate} required value={inputEvent.eventDate}></input>
            {/* <span class="validity"></span> */}
            <button onClick={submit} >add</button>
        </form>
    </div>
}


export default CreateTimer;