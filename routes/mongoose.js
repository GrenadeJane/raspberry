// mdp : raspberry6 usr: root

'use strict'
var mongoose = require('mongoose');

let uri;
uri = 'mongodb://root:raspberry6@ds247191.mlab.com:47191/raspberry-grenade'; 

mongoose.connect(uri,  { useNewUrlParser: true } )
	.then(() => console.log('Connected to MongoDB ... '))
	.catch(err => console.log('Could not connect to MongoDB ...', err));

	const Groceries = mongoose.model('Groceries', new mongoose.Schema({
		sender : {
			type : String, 
			min : 3, 
			max :25 
		},
		list : {
			type : Array(String),
			
		},
		price : Number
	}));

module.exports = Groceries; 