import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form';
import eventReducer from "../../components/event/eventReducer";
  
export const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer
})

