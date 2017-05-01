var express = require('express');
var wikiRouter = express.Router();

wikiRouter.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});
wikiRouter.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});
wikiRouter.get('/add', function(req, res, next) {
  res.render('addpage.html')
  // res.send('got to GET /wiki/add');
});

module.exports = wikiRouter;
