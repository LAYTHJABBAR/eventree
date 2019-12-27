import { createStore, applyMiddleware } from "redux";
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from "redux-thunk";
import firebase from '../config/firebase';

const rrfconfig = {
    userProfile: 'users',
    attachAuthISReady: true,
    useFireStoreForProfile: true
}

const configureStore = () => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]
    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares), reactReduxFirebase(firebase, rrfconfig))
    const store = createStore(rootReducer, composedEnhancer)

    return store;
}
export default configureStore

