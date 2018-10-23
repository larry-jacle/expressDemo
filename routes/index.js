var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //render方法两个参数，一个是path，一个是data
  res.render('index', { title: 'My first Ejs Template Show',users:[{name:'jacle'},{name:'larry'}],title2:"<h1>title show</h1>"});
});

module.exports = router;
