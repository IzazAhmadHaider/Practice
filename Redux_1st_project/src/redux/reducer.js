import { combineReducers } from "redux";
import counterslice from "./slices/counterslice";

const rootReducer = combineReducers({
  counter: counterslice,
});

export default rootReducer;
