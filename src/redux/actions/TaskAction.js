import {ADDTASK, DELETETASK} from '../constants';

export const addTodo = taskData => {
  return {
    type: ADDTASK,
    payload: {
      id: new Date().getTime(),
      taskData: taskData,
    },
  };
};

export const deleteTodo = id => {
  return {
    type: DELETETASK,
    payload: id,
  };
};
