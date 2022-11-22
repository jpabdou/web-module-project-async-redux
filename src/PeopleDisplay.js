import React from "react";
import { connect } from 'react-redux';


function PeopleDisplay(props){
    return(
        <div>
            <ul>
                <li>height: {props.height} cm</li>
                <li>weight: {props.mass} kg</li>
                <li>birth year: {props.birth_year}</li>
                <li>gender: {props.gender}</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>{
    const result = state.people.find(element=> element.name === ownProps.name)
    return({
        height: result.height,
        mass: result.mass,
        birth_year: result.birth_year,
        gender: result.gender
    })
}

export default connect(mapStateToProps,{})(PeopleDisplay)
