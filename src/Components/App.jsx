import React ,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateTimer from "./CreateTimer";


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
        <Footer />
    </div>
}

export default App;