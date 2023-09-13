import { combineReducers,createStore } from "redux";

import CounterReducer from "./Reducers/CounterReducer";
const reducer=combineReducers({c:CounterReducer})
var store=new createStore(reducer)
export default store