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