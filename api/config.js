import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBik8AN9BH7uOB2dIbBbitHvvsgbdMBU9c",
    authDomain: "myspendtab.firebaseapp.com",
    databaseURL: "https://myspendtab.firebaseio.com",
    projectId: "myspendtab",
    storageBucket: "myspendtab.appspot.com",
    messagingSenderId: "881680037344"
};

export const Firebase = firebase.initializeApp(firebaseConfig);
