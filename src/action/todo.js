//Second Step - Define Action Creators

//import Actions
import { ADD_TODO, REMOVE_TODO } from "./action.types";

//Action creator defined below
export const addTodo = (todo) => ({
  //Set type to Action Name
  type: ADD_TODO,
  //Data
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
