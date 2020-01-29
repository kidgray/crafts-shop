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

/* Function that allows for the storage of user info obtained
from Google/Facebook/etc auths in the Firebase database

Note that because this is an API (Firebase's firestore) request,
it's an asynchronous function.

userAuth is the user's authentication details (username, etc)
data is any additional data that needs to be passed in */
export const createUserProfileDoc = async(userAuth, data) => {
    // Only save user data to the database when a user
    // signs IN with a third-party app; if userAuth is null, 
    // that means a sign out happened
    if (!userAuth) {
        // If userAuth was null (recall null is a falsy value in JS)
        // just return; don't need to do anything.
        return;
    }

    // IF userAuth WAS NOT NULL

    // Get a documentRef object corresponding to the user's uid
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // Get the documentSnapshot corresponding to the documentRef
    // Recall that Firestore's CRUD methods are asynchronous, so
    // need to use the await keyword to wait for the response
    // from the Firestore DB
    const userSnapshot = await userRef.get();

    // If user's info isn't already in the database
    if (!userSnapshot.exists) {
        // Destructure the user's email and name
        // from userAuth object
        const { displayName, email } = userAuth;

        // Date that this document was created
        const creationDate = new Date();

        // Need to make an async request to the
        // Firestore DB to store this data
        try {
            // set() is Firestore's Create method
            await userRef.set({

                // User's name, email,
                // and account creation date
                // fields for the document
                displayName: displayName,
                email: email,
                creationDate: creationDate,

                // Use the spread operator to pass
                // in all additional data as properties
                // as well
                ...data
            });
        }
        catch (error) {
            console.log(`Encountered an error while trying to create an user: ${error.message}`);
        }
    }

    // Return userRef object, just in case something else needs to be done with it
    return userRef;
}

/* Function that allows Data Items to be exported to Firestore */
export const addCollectionAndDocuments = async (collectionName, docsToAdd) => {

    /* Create collectionRef object that will be used to create the collection */
    const collectionRef = firestore.collection(collectionName);

    /* Loop over the array of docs to be added and add them
    to Firestore in a batch request */
    const batch = firestore.batch();

    /* Loop over the array of shop items to be added to the database */
    docsToAdd.forEach(doc => {
        /* Create a new document Reference object for the current document */
        const newDocRef = collectionRef.doc();

        // Add the current document in docsToAdd to the batch of docs
        // that will be created on the Firestore database
        batch.set(newDocRef, doc);
    });

    // Fire the Batch request
    return await batch.commit();
};

/* Function that gets and modifies the whole snapshot of a collection
on a document by document basis */
export const convertCollectionSnapshotToMap = (collections) => {

    // Create the modified object that contains the category name,
    // items array, route name, and id of each category in the collection
    const editedCollection = collections.docs.map((doc) => {
        // Destructure the category name and items array
        // from the current document
        const { category, items } = doc.data();

        // Return a new object that contains the category name,
        // items array, and any other data the snapshot object
        // will need for the front end
        return {
            category: category,
            items: items,
            routeName: encodeURI(category.toLowerCase()),
            id: doc.id
        };
    });

    // Get and return the object map that will be stored inside
    // the shop reducer. This will iterate over every
    // category inside the editedCollection object.
    return editedCollection.reduce((acc, category) => {

        // For each category item inside the collections snapshot,
        // map the category's name (converted to lowercase) to the
        // category object (& therefore its data) itself 
        acc[category.category.toLowerCase()] = category;

        // Return the accumulator so that the next iteration of reduce()
        // will be able to use it
        return acc;
    }, {});
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