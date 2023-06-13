//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
//import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut
} from 'firebase/auth';

console.log('working (home-page)')


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


var accountSignOut = () => {
  signOut(auth)
  .then(() => {
    console.log('Sign-Out Account successful');
    window.location = '/';
    // Sign-out successful.
  }).catch((error) => {
    console.error(error)
  });
};


let sign_out_function = () => {
  console.log("window loaded");
  console.log("Elements with sign-out class: " + getElementsByClass('sign-out'));
  document.getElementsByClass('sign-out')[0].addEventListener("click", () => {
    accountSignOut();
  });
};


window.addEventListener("load", sign_out_function(), false);
