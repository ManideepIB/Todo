const {configureStore} = require('@reduxjs/toolkit');
const {default: RootReducer} = require('../reducers/RootReducer');
const {default: thunk} = require('redux-thunk');

const store = configureStore({
  reducer: RootReducer,
  middleware: [thunk],
});

export default store;
