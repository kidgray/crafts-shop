/* Import Firebase Utility library */
import firebase from 'firebase/app';

/* Import the Firebase Database utility */
import 'firebase/firestore';

/* Import the Firebase Authentication utility */
import 'firebase/auth';

/* Firebase Configuration for the craftshop App */
const firebaseConfig = {
    apiKey: "AIzaSyAcvE46gztxi9SlcvpbEek41-YapF7jqB8",
    authDomain: "craftshop-db.firebaseapp.com",
    databaseURL: "https://craftshop-db.firebaseio.com",
    projectId: "craftshop-db",
    storageBucket: "craftshop-db.appspot.com",
    messagingSenderId: "656239688143",
    appId: "1:656239688143:web:4019f9ac3e1593e5b1baba",
    measurementId: "G-LNETRHHDQX"
};

/* Initialize Firebase */
firebase.initializeApp(firebaseConfig);

/* Export authentication utility */
export const auth = firebase.auth();

/* Export database utility */
export const firestore = firebase.firestore();

/* --- Setting up the Google Authentication utility. Refer to the Firebase Documentation
if you don't remember how to do this. It's somewhat complicated. ---*/

// This gives access to the GoogleAuthProvider class from the auth library.
const googleProvider = new firebase.auth.GoogleAuthProvider();

// This triggers the Google Sign-in/Account Selection pop-up when you use
// this Google Authentication provider.
googleProvider.setCustomParameters({prompt: 'select_account'});


// The signInWithPopup() method takes an instance of a class provided
// by the auth library; there's a class for Google (which I declared above),
// a class for Twitter... lots of them. Check Docs. 
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


/* --- Setting up the Facebook Authentication utility. Refer to Firebase Docs if you don't
remember how to do this, just like the Google one. --- */

// This gives access to the FacebookAuthProvider class from the auth library
// const facebookProvider = new firebase.auth.FacebookAuthProvider();

// This triggers the Facebook Sign-in Popup when you use this Facebook
// Authentication provider. 
// facebookProvider.setCustomParameters({'display': 'popup'});

// signInWithPopup() method for the Facebook Authentication utility
// export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);