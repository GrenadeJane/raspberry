'use strict'
const Groceries = require('./routes/mongoose.js');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var http = require('http');

//dom(app); 
// :: Dependencies in the personal code

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.get('/test', (req, res) => {
	res.send( 200, {message : "hello world "});
});


 http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'}); 
	  res.end('Hello World\n'); 
	}).listen(80);
console.log('Server running');
