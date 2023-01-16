import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA5XbDrlb4L-q3j7fxSztfwyfd2cMbwS_c",
    authDomain: "truth-exposed.firebaseapp.com",
    projectId: "truth-exposed",
    storageBucket: "truth-exposed.appspot.com",
    messagingSenderId: "239922680806",
    appId: "1:239922680806:web:87ddaabaf131eaccf0fc27",
    measurementId: "G-NFZQCH5EYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// Initialize Cloud Firestore and get a reference to the service


export default db;