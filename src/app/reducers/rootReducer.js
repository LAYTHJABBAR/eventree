import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form';
import eventReducer from "../../components/event/eventReducer";
import modalReducer from "../../components/Modals/modalReducer"
  
export const rootReducer = combineReducers({
  // test: testReducer,
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer
})

