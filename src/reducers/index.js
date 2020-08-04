import { combineReducers } from "redux";
import reducer from "./reducer";
import year from "./year";
const rootreducer = combineReducers({
  reducer,
  year
});
export default rootreducer;
