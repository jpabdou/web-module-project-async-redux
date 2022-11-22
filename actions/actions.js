export const DATA_CALL = "DATA_CALL";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
import axios from "axios";


  

export const dataCall = (loc) => dispatch=>{
    dispatch({type: DATA_CALL});
    axios.get(`https://swapi.dev/api/${loc}/`)
    .then(res =>
      dispatch({ type: FETCH_DATA_SUCCESS, payload: [loc, res.data.results] })
    )
    .catch(err => dispatch({ type: FETCH_DATA_FAIL, payload: err }));
    
}
