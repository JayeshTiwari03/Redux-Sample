//Third Step - Create Reducer which handles state

import { ADD_TODO, REMOVE_TODO } from "../action/action.types";

//Initial value of the state set to empty array
const initialState = [];
//Array for todo, could be object

//Reducer defined here below

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  // Use switch statement to lay out the reducer logic in response to different action type

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
