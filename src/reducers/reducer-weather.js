//application has state- whether data which will be an array of cities with whether data
//reducers return state
//we combine these states with combineReducers() to get the application state
//initially when no search is made the array needs to be empty

import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
    switch(action.type){
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
            //we are not doing state.push(action.payload.data)
            //because we do not modify the current state
            //we always return a new instance of it.
            //and doing it this way also puts latest searched city at top
    }
    return state;
}