const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/users', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Set-Cookie', 'myCookie=hello; Path=/; Secure; domain=yamatotest.netlify.app');
    res.send('respond with a resource');
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.use('/.netlify/functions/express', require('../../routes/index'));
app.use('/.netlify/functions/express/users', require('../../routes/users'));

module.exports.handler = serverless(app);
