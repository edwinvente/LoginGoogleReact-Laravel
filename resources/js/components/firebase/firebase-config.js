import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkZlAuI02rXjDAf2BfciAHt-sLzvcRoaI",
    authDomain: "meteoro-fb013.firebaseapp.com",
    projectId: "meteoro-fb013",
    storageBucket: "meteoro-fb013.appspot.com",
    messagingSenderId: "537673918143",
    appId: "1:537673918143:web:d2a6070b7334ea569a480a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}