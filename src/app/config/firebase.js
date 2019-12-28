import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFWLqo9cXK5Q95HaoWX4HBrXgG3VMW6as",
  authDomain: "eventree-263123.firebaseapp.com",
  databaseURL: "https://eventree-263123.firebaseio.com",
  projectId: "eventree-263123",
  storageBucket: "eventree-263123.appspot.com",
  messagingSenderId: "807443856072",
  appId: "1:807443856072:web:257ade881944a19a85c3fd"
};
  firebase.initializeApp(firebaseConfig)
  firebase.firestore();


  export default firebase;
