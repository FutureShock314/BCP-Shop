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


function getHTML (path) {
    fs.readFile(path, (err, data) => {
        if (err) throw err
        return data;
    });
}

// App
const app = express();
app.get('/', (req, res) => {
	res.send(getHTML('./index.html'));
});

app.use(express.static('public'));
app.listen(PORT, HOST);
console.info(`Running on http://${HOST}:${PORT}`);