// BASE SETUP
// =============================================================================
// Mongo DB Details
// ----------------
// mongo ds137110.mlab.com:37110/mbbm -u <dbuser> (admin) -p <dbpassword> (password)
// mongodb://admin:password@ds137110.mlab.com:37110/mbbm
// ==============================================================================

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// Instantiate Express
var app = express();

// DATABASE CONNECTION
// ==============================================================================
mongoose.connect('mongodb://admin:password@ds137110.mlab.com:37110/mbbm'); 

// Models
var Brand = require('./models/brand');

// Configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
// =============================================================================
var brandRouter = require('./routes/brandRouter')(Brand);


// REGISTER ROUTES -------------------------------
// All of the routes will be prefixed with /api
app.use('/api', brandRouter);

// Middleware to use for all requests
/*brandRouter.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});*/


app.get('/', function(req, res) {
    res.json({ "Status": "MBBM API is running at port: " + port });
});

// START THE SERVER
// =============================================================================
app.listen(port, function() {
    console.log('MBBM Rest API running at port: ' + port);
});