import { combineReducers } from "redux";
import eventReducer from "../../components/event/eventReducer";

export const rootReducer = combineReducers({
  // test: testReducer,
  events: eventReducer
})

