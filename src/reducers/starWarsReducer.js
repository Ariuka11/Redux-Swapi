import {
  FETCH_STARWARS_START,
  FETCH_STARWARS_SUCCESS,
  FETCH_STARWARS_FAILURE
   } from '../actions';


const initialState = {
  characters: [],
  error: '',
  isFetching: false

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('charReducer', action);
  switch (action.type) {
      case FETCH_STARWARS_START:
        return {
        ...state,
        isFetching : true,
        error: ''
      }
      case FETCH_STARWARS_SUCCESS:
        return {
          ...state,
          characters: action.payload,
          isFetching: false,
          error: ''
        }
      case FETCH_STARWARS_FAILURE:
        return {
          ...state,
          error: action.payload
        }  
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
      default:
        return state;
  }
};


