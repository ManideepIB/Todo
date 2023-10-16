const {combineReducers} = require('redux');
const {default: TaskReducer} = require('./TaskReducer');

const RootReducer = combineReducers({
  tasks: TaskReducer,
});

export default RootReducer;
