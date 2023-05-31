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

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('no user!');
    }
});

const firestore = getFirestore();

let username;
let fname;
let lname;
let email;
window.onload = function() {
    var form = document.getElementsByClassName('user_data_form')[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        username = document.getElementById('username').value;
        fname = document.getElementById('fname').value;
        lname = document.getElementById('lname').value;
        email = document.getElementById('email').value;
        const user = doc(firestore, 'users/'+username);
        function addUser() {
        const docData = {
            first_name: fname,
            last_name: lname,
            email: email
        };
        setDoc(user, docData);
        };
        addUser();
    });
};





