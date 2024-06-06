const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/users', (req, res) => {
    res.cookie('myCookie', 'hello', {
        sameSite: 'None', // или 'Strict' в зависимости от требований
        secure: true,    // установите true, если ваш сайт работает по HTTPS
        domain: '.netlify.app' // укажите ваш домен здесь
    });
    res.send('respond with a resource');
});

app.use('/.netlify/functions/express', require('../../routes/index'));
app.use('/.netlify/functions/express/users', require('../../routes/users'));

module.exports.handler = serverless(app);
