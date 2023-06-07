//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
//import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from 'firebase/auth';
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

let email;
let password;
window.onload = () => {
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  console.log('Email: ' + email);
  console.log('Password: ' + password);
  
  document.getElementById('add-user').addEventListener("click", function() {
    accountCreate(auth, email, password);
  });
  document.getElementById('sign-in').addEventListener("click", function() {
    accountLogin(auth, email, password);
  });
  document.getElementById('sign-out').addEventListener("click", function() {
    accountSignOut();
  });
}





//* Create Account *//
var accountCreate = function(auth, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User: ' + user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error Code: ' + errorCode);
      console.error('Error Message: ' + errorMessage);
    });
}

//* Login Account *//
var accountLogin = function(auth, email, password) {
  window.onload = function() {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error Code: ' + errorCode);
        console.error('Error Message: ' + errorMessage);
      });
  };
}

//* Sign-out Account *//
var accountSignOut = function() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}