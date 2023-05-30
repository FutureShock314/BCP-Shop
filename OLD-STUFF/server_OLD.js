/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



'use strict';

const express = require('express');

// Constants
const PORT = 5012;
const HOST = '127.0.0.1';
const fs = require('fs');

console.log('ho');


// App
const app = express();
app.get('/', (req, res) => {
    let my_data = fs.readFileSync('./index.html',{ encoding: 'utf8', flag: 'r' });
    console.info(my_data)
	res.send(my_data);
});

app.use(express.static('public'));
app.listen(PORT, HOST);
console.info(`Running on http://${HOST}:${PORT}`);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhotO15Sh5GMBR1Eo_Ol83W70ndyYcCvA",
  authDomain: "bcp-shop-3cf1e.firebaseapp.com",
  projectId: "bcp-shop-3cf1e",
  storageBucket: "bcp-shop-3cf1e.appspot.com",
  messagingSenderId: "180818875291",
  appId: "1:180818875291:web:3a11cb9065560aed0a873e",
  measurementId: "G-QYXLV35DG1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);