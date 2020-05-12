import React ,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateTimer from "./CreateTimer";
import Timer from "./Timer";


function App(){
    const [allevent,addEvent]=useState([]);

    function eventadd(inputEvent){
        addEvent(prevValue=>{
            return [
                ...prevValue,
                inputEvent
            ]
        })
    }


    return <div>
        <Header />
        <CreateTimer 
            onAdd={eventadd}
        />
       { allevent.map((event,index)=>{
            return <Timer
                key={index}
                index={index}
                eventName={event.eventName}
                eventDate={event.eventDate}

            />
        })}
        <Footer />
        
    </div>
}

export default App;