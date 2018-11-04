import { combineReducers } from 'redux';
import WeatherReducer from './reducer-weather';

const rootReducer = combineReducers({
  Weather: WeatherReducer
});

export default rootReducer;
