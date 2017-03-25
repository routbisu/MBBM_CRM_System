"use strict";
// BASE SETUP
// =============================================================================
// Mongo DB Details
// ----------------
// mongo ds137110.mlab.com:37110/mbbm -u <dbuser> (admin) -p <dbpassword> (password)
// mongodb://admin:password@ds137110.mlab.com:37110/mbbm
// ==============================================================================

var express = require('express');                       
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://admin:password@ds137110.mlab.com:37110/mbbm'); 

// Models
var Product = require('./models/product');

// Instantiate Express
var app = express();

// Configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // Set our port

// ROUTES FOR OUR API
// =============================================================================
var productRouter = require('./routes/productRouter')(Product);

// REGISTER ROUTES -------------------------------
// All of the routes will be prefixed with /api
app.use('/api', productRouter);

// Middleware to use for all requests
/*productRouter.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});*/

app.get('/', function (req, res) {
    res.json({ message: 'MBBM API is running.' });  
    next();
});

// START THE SERVER
// =============================================================================
app.listen(port, function() {
    console.log('MBBM Rest API running at port: ' + port);
});