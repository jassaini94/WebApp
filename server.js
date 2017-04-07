
//Add Dependencies//
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

//Create Application//
var app = express();

//Backend Controllers
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');
var expressionController = require('./server/controllers/expression-controller');
var usersController = require('./server/controllers/users-controller');

//Connect to MongoDB//
mongoose.connect('mongodb://jassaini:saini1994@ds013898.mlab.com:13898/jaspalsdatabase');

//Pass in Application Files//
app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/uploads', express.static(__dirname + '/uploads'));

//Set Landing Page//
app.get('/', function(req, res)
{
	res.sendfile('index.html');
});

//Authentication//
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

//Profile//
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);

//Expressions (Tweets)//
app.post('/api/expression/post', expressionController.postExpression);
app.post('/api/expression/get', expressionController.getExpressions);

//Users//
app.get('/api/users/get', usersController.getUsers);
app.post('/api/users/follow', usersController.followUser);


//Application listening//
var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);