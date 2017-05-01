var express = require('express');
var wikiRouter = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

wikiRouter.get('/', function(req, res, next) {
  // res.send('got to GET /wiki/');
  res.redirect('/');
});
wikiRouter.post('/', function(req, res, next) {
  var page = Page.build({
    title: req.body.title,
    content: req.body.text
  });
  page.save();
})
wikiRouter.post('/', function(req, res, next) {
  // res.send('got to POST /wiki/');
  res.json(req.body);
  // console.log(req.body);

});
wikiRouter.get('/add', function(req, res, next) {
  res.render('addpage')
  // res.send('got to GET /wiki/add');
});

module.exports = wikiRouter;
