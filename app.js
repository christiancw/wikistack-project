'use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var routes = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');
var models = require('./models');


// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);


// logging middleware
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public')));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests
//
app.use('/', routes);
//

models.db.sync({})
.then(function() {
  // start the server
  var PORT = 1337;
  app.listen(PORT, function(){
    console.log(`Server listening on port ${PORT}`);
  });
})
.catch(console.error);



// modular routing that uses io inside it
// app.use('/', routes);
//
// app.use(function (err, req, res, next) {
//   console.error(err);
//   res.status(err.status || 500).send(err.message);
// });
