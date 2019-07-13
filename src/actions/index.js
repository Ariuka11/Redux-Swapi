// import { dispatch } from "C:/Users/Ariuka/AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range";
import axios from 'axios';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const FETCH_STARWARS_START = 'FETCH_STARWARS_START';
export const FETCH_STARWARS_SUCCESS = 'FETCH_STARWARS_SUCCESS';
export const FETCH_STARWARS_FAILURE = 'FETCH_STARWARS_FAILURE';

export const getStarwars = () => dispatch => {
    dispatch({type:FETCH_STARWARS_START });
    axios
    .get('https://swapi.co/api/people/')
    .then(res =>
        dispatch({type : FETCH_STARWARS_SUCCESS, payload: res.data.results}) 
    )
    .catch(err => dispatch({type : FETCH_STARWARS_FAILURE, payload: err}))
}