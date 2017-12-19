const path = require('path');
const express = require('express');
const http = require('http');

const app = express();

app.use('/js/*', express.static(path.join(__dirname, 'public', 'lib')));

app.get('/*', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Listening on port 3000'));