import React, {useState} from "react";
import PlanetDisplay from "./PlanetDisplay"
import PeopleDisplay from "./PeopleDisplay"
import ShipDisplay from "./ShipDisplay"


export default function NameDisplay(props){
    const [reveal, setReveal] = useState(false)
    let display;
    if (props.ver === "planets"){
        display = <PlanetDisplay name={props.name}/>
    } else if (props.ver === "starships"){
        display = <ShipDisplay name={props.name}/>
    } else {
        display = <PeopleDisplay name={props.name}/>
    } 

    return(
        <div>
            <h3>{props.name}</h3>
            <span onClick={()=>setReveal(!reveal)}>{reveal ? "-" : "+"}</span>
            <div className="result">{reveal && display}</div>            
        </div>
    )
}
