/**
 * App.js
 * - declare all required libraries
 * - setup all routing
 * - use restful style
 * - setup database setting
 * */
var http			= require('http');
var express	= require('express');
var path			= require('path');
var restify		= require('express-restify-mongoose');
var mongoose	= require('mongoose');
mongoose.connect('mongodb://localhost/todos');
var db				= mongoose.connection;

var ToDoSchema = new mongoose.Schema({
	text: { type: String, required: true },
	done: { type: Boolean, default: false }
});
var ToDoModel = mongoose.model('ToDo', ToDoSchema);

var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.errorHandler());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	restify.serve(app, ToDoModel, {
		//exclude: 'text,done'
	});
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(function (req, res) {
		res.sendfile(path.join(__dirname, 'public/index.html'));
	});
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});