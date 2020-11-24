//Fourth Step - Redux store created and passed to Reducer created in Third Step rootReducer cause name was not given there

import { createStore, combineReducers } from "redux";

//creating central store

import todos from "./reducer/todo";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
