import React from "react";
import { connect } from 'react-redux';


function ShipDisplay(props){
    return(
        <div>
            <ul>
                <li>manufacturer: {props.manufacturer}</li>
                <li>cost: {props.cost_in_credits} credits</li>
                <li>crew: {props.crew}</li>
                <li>passengers: {props.passengers}</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>{
    const result = state.starships.find(element=> element.name === ownProps.name)
    return({
        manufacturer: result.manufacturer,
        cost_in_credits: result.cost_in_credits,
        crew: result.crew,
        passengers: result.passengers
    })
}

export default connect(mapStateToProps,{})(ShipDisplay)
