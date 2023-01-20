import { applyMiddleware, createStore } from "redux";
import thinkMiddleware from "redux-thunk";
// import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "../reducers"



const store = createStore (rootReducer, applyMiddleware(thinkMiddleware));

export default store;