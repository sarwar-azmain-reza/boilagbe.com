// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: "AIzaSyCQuZFXn18jjFtvTk3XQ36mtgiWMQXkV5k",
// authDomain: "boi-lagbe.firebaseapp.com",
// projectId: "boi-lagbe",
// storageBucket: "boi-lagbe.appspot.com",
// messagingSenderId: "80046080858",
// appId: "1:80046080858:web:4cdbc7cadce86abb1c2963"