import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfiB_i338MS4Dtk1SgAlbAwk7MkhtVG60",
    authDomain: "quiz-app-6b66e.firebaseapp.com",
    databaseURL: "https://quiz-app-6b66e-default-rtdb.firebaseio.com",
    projectId: "quiz-app-6b66e",
    storageBucket: "quiz-app-6b66e.appspot.com",
    messagingSenderId: "222974045408",
    appId: "1:222974045408:web:7cc6a1bd8433c7bb757485",
    measurementId: "G-BEWNRF6W84",
};

export const app = initializeApp(firebaseConfig);
