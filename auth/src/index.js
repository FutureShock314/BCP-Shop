//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
//import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

console.log('working!!!')


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDhotO15Sh5GMBR1Eo_Ol83W70ndyYcCvA",
    authDomain: "bcp-shop-3cf1e.firebaseapp.com",
    projectId: "bcp-shop-3cf1e",
    storageBucket: "bcp-shop-3cf1e.appspot.com",
    messagingSenderId: "180818875291",
    appId: "1:180818875291:web:3a11cb9065560aed0a873e",
    measurementId: "G-QYXLV35DG1"
});


const auth = getAuth(firebaseApp);

var email="someone@example.com";
var password="password";

//Create User with Email and Password
window.onload = function() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        document.getElementById("output3").innerHTML = "<em>running</em>";
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        document.getElementById("output1").innerHTML = errorCode;
        document.getElementById("output2").innerHTML = errorMessage;
        console.log(errorCode);
        console.log(errorMessage);
    });
};