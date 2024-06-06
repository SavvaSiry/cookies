var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Устанавливаем cookie с именем "myCookie" и значением "hello"
  // с настройками SameSite, Domain и Secure
  res.setHeader('Set-Cookie', ['myCookie=hello; SameSite=None; Secure; domain=yamatotest.netlify.app']);

  // Отправляем ответ клиенту
  res.send('respond with a resource');
});

module.exports = router;
