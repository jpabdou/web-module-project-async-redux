import { DATA_CALL,FETCH_DATA_FAIL,FETCH_DATA_SUCCESS } from "../actions/actions";


const initialState = {
    planets: [],
    starships: [],
    people: [],
    isFetching: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_DATA_SUCCESS:
            const loc = action.payload[0]
            return {
                ...state,
                [loc]: [...state[loc], ...action.payload[1]],
                isFetching: false
            }
        case DATA_CALL:
            return {
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
}

export default reducer;
