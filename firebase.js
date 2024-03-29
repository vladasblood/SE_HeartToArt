// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5yZVYpHxHwbgkZ2-gUdkNttyF4n4bgEQ",
    authDomain: "hearttoart-a8546.firebaseapp.com",
    projectId: "hearttoart-a8546",
    storageBucket: "hearttoart-a8546.appspot.com",
    messagingSenderId: "201094491839",
    appId: "1:201094491839:web:aab3f94aefe3bbf4ffa00a"
};


let app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    db
};


