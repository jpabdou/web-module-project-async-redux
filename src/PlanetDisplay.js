import React from "react";
import { connect } from 'react-redux';


function PlanetDisplay(props){
    return(
        <div>
            <ul>
                <li>climate: {props.climate}</li>
                <li>diameter: {props.diameter}</li>
                <li>terrain: {props.terrain}</li>
                <li>population: {props.population}</li>
            </ul>
        </div>
    )
}
const mapStateToProps = (state, ownProps) =>{
    const result = state.planets.find(element=> element.name === ownProps.name)
    return({
        climate: result.climate,
        diameter: result.diameter,
        terrain: result.terrain,
        population: result.population
    })
}

export default connect(mapStateToProps,{})(PlanetDisplay)
