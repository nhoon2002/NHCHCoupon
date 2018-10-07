import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import sampleReducer from "./sampleReducer.js";
import categoryReducer from "./categoryReducer.js";
import modalReducer from "./modalReducer.js";
import notificationReducer from "./notificationReducer.js";
import sessionReducer from "./sessionReducer.js";
import loginReducer from "./loginReducer.js";

export default combineReducers({
  sampleReducer,
  categoryReducer,
  notificationReducer,
  modalReducer,
  sessionReducer,
  loginReducer,
  routing: routerReducer
});
