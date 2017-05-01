var express = require('express');
var router = express.Router();
var wikiRouter = require('./wiki');
var userRouter = require('./user');

module.exports = router;
router.get('/', function(req, res, next) {
  // console.log(Object.keys(req).indexOf('body'));
  res.send('got something: ');
});
router.use('/wiki', wikiRouter);

