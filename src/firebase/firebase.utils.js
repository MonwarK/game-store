import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//config settings provided
const config = {
    apiKey: "AIzaSyDwS7sowmPJveZGYREhM2GtXBYmRMqXzaU",
    authDomain: "golden-rhino-1ab1d.firebaseapp.com",
    projectId: "golden-rhino-1ab1d",
    storageBucket: "golden-rhino-1ab1d.appspot.com",
    messagingSenderId: "136150703818",
    appId: "1:136150703818:web:6a6e693bb195e4c25a9e33",
    measurementId: "G-89SM8PJCCW"
}

//Initialize FireBase
firebase.initializeApp(config);

///FIRESTORE

//
export const firestore = firebase.firestore();

///AUTHENTICATION
export const auth = firebase.auth();

//Used to login with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : "select_account"});

//Adds user to database after google login
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if User auth doens't exist, do nothing
    if(!userAuth) return;

    //find database path of user/uid
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    console.log(snapshot)
    
    //if it doesn't exist, create it
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } 
        catch (err) {
            console.log(err);
        }
    }

    return userRef;

}

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;