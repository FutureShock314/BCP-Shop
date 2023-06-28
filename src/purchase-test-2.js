import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDhotO15Sh5GMBR1Eo_Ol83W70ndyYcCvA",
    authDomain: "bcp-shop-3cf1e.firebaseapp.com",
    projectId: "bcp-shop-3cf1e",
    storageBucket: "bcp-shop-3cf1e.appspot.com",
    messagingSenderId: "180818875291",
    appId: "1:180818875291:web:3a11cb9065560aed0a873e",
    measurementId: "G-QYXLV35DG1"
});
const firestore = getFirestore(firebaseApp);

var tutor = '9DVE';
var name = 'Nathan';
//TODO READ DOC, GET LIST, APPEND, RE-WRITE


var item = () => {
  
}



const myDoc = doc(firestore, tutor+'/'+name);

const data = {
  item: item
};

await setDoc(myDoc, data)
  .then(() => {
    console.log('Document added successfully!');
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });