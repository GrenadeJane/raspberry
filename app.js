'use strict'
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
const shell = require('shelljs');
const child_process = require('child_process');
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//dom(app); 
// :: Dependencies in the personal code

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



// app.get('/test', (req, res) => {
// 	res.send( 200, {message : "hello world "});
// });


app.post('/remote',( req, res ) => {
	const body = req.body;
	 if ( body.blower ) {
		 console.log(body.blower);
		child_process.exec('"/home/pi/Documents/chacon_send_source/chacon_send" 0 12345678 1 ' +  body.blower );
		res.redirect('/');
	}
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './views/index.html'));
});
// app.get('/on', (req, res) => {
// 	child_process.exec('"/home/pi/Documents/chacon_send_source/chacon_send" 0 12345678 1 on');
// 	res.send( {message : "ON"});
// });

// app.get('/off', (req, res) => {
// 	child_process.exec('"/home/pi/Documents/chacon_send_source/chacon_send" 0 12345678 1 off');
// 	res.send( {message : "OFF"});
// });

app.listen(process.env.PORT || 80, () => console.log('listen to ' + process.env.PORT));
console.log('Server running');
