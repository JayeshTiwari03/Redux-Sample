import { createStore, combineReducers } from "redux";
//creating central store

import todos from "./reducer/todo";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
