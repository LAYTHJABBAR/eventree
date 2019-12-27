import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form';
import eventReducer from "../../components/event/eventReducer";
import modalReducer from "../../components/Modals/modalReducer"
import authReducer from "../../components/authantication/authReducer";
import asyncReducer from "../../components/async/asyncReducer";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
  
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
})

export default rootReducer

