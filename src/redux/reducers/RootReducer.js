import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';
import TaskReducer from './TaskReducer';

const RootReducer = combineReducers({
  tasks: TaskReducer,
  weather: WeatherReducer,
});

export default RootReducer;
