// =============================================================================
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
var Product = require('./models/product');


// Configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
// =============================================================================
var brandRouter = require('./routes/brandRouter')(Brand);
var productRouter = require('./routes/productRouter')(Product, Brand);

// REGISTER ROUTES -------------------------------
// All of the routes will be prefixed with /api
app.use('/api', brandRouter);
app.use('/api', productRouter);

app.get('/', function(req, res) {
    res.json({ "Status": "MBBM API is running at port: " + port });
});

// START THE SERVER
// =============================================================================
app.listen(port, function() {
    console.log('MBBM Rest API running at port: ' + port);
});