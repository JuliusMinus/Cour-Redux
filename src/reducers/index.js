import { combineReducers } from "redux";
import postReducer from "./postreducer";
import userReducer from "./user.reducer";

export default combineReducers({
  postReducer,
  userReducer,
})