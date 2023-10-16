const {ADDTASK, DELETETASK} = require('../constants');

const initialState = {
  taskData: [],
};

const TaskReducer = (state = initialState, action) => {
  // console.log(action.payload, '///');
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        taskData: [...state.taskData, action.payload],
      };
    case DELETETASK:
      return {
        ...state,
        taskData: state.taskData.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};
export default TaskReducer;
