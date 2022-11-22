import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {dataCall} from "../actions/actions.js"
import NameDisplay from './NameDisplay';


function App(props) {
  const [reveal, setReveal] = useState({starships: false, people: false, planets: false})

  return (
    <div className="App">
      <header>
        <h1>Star Wars API Async Redux Project</h1>
        {props.error && <h2 className="error">{props.error.message}</h2>}
        <div className='buttons'>
          <button onClick={()=>props.dataCall("people")}>Fetch People </button>
          <button onClick={()=>props.dataCall("planets")}>Fetch Planets </button>
          <button onClick={()=>props.dataCall("starships")}>Fetch Ships </button>
        </div>
      </header>
      <h2>People</h2>
      <span onClick={()=>setReveal({...reveal, people:!reveal.people})}>{reveal.people ? "-" : "+"}</span>
      <div className='data'>{reveal.people && props.people.map((person,idx)=>{return(<NameDisplay key={idx} ver="people" name={person.name} />)})}</div>
      <h2>Planets</h2>
      <span onClick={()=>setReveal({...reveal, planets:!reveal.planets})}>{reveal.planets ? "-" : "+"}</span>
      <div className='data'>{reveal.planets && props.planets.map((planet,idx)=>{return(<NameDisplay key={idx} ver="planets" name={planet.name}/>)})}</div>
      <h2>Ships</h2>
      <span onClick={()=>setReveal({...reveal, starships:!reveal.starships})}>{reveal.starships ? "-" : "+"}</span>
      <div className='data'>{reveal.starships && props.starships.map((ship,idx)=>{return(<NameDisplay key={idx} ver="starships" name={ship.name}/>)})}</div>


    </div>
  );
}

const mapStateToProps = state =>{
  return({
    planets: state.planets,
    starships: state.starships,
    people:state.people,
    isFetching: state.isFetching,
    error: state.error
  })
}

export default connect(mapStateToProps,{dataCall})(App);
