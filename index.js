require('dotenv').config();
// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var bcrypt = require('bcrypt');
var app = express();
// JSON web token dependencies, including a secret key to sign the token
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;

// mongoose models and connection
var mongoose = require('mongoose');
var Models = require('./models/schemas');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipesite');

//Decode POST data in JSON and URL encoded formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Setup Path directory (static)
app.use(express.static(path.join(__dirname, 'static')));
//Observe server activity
app.use(require('morgan')('dev'));

// app.use('/api/favorites', require('./controllers/favorites'));
// app.use('/api/users', require('./controllers/users'));

// Replace the above routes with the following

// app.use('/api/favorites', expressJWT({secret: secret}), require('./controllers/users'));
app.use('/api/users', expressJWT({secret: secret}).unless({
  path: [{ url: '/api/users', methods: ['POST'] }]
}), require('./controllers/users'));

// this middleware will check if expressJWT did not authorize the user, and return a message
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({ message: 'You need an authorization token to view this information.' });
  }
});

// sign in stuff happens here
// POST /api/auth - if authenticated, return a signed JWT
app.post('/api/auth', function(req, res) {
  Models.User.findOne({ email: req.body.email }, function(err, user) {
    // return 401 if error or no user
    if (err || !user) return res.status(401).send({ message: 'User not found' });
    // attempt to authenticate a user
    var isAuthenticated = user.authenticated(req.body.password);
    // return 401 if invalid password or error
    if (err || !isAuthenticated) return res.status(401).send({ message: 'User not authenticated' });
    // sign the JWT with the user payload and secret, then return
    var token = jwt.sign(user.toJSON(), secret);
    return res.send({ user: user, token: token });
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

var server = app.listen((process.env.PORT || 3000), function(){
  console.log('listening on 3000');
});

module.exports = server;
