// Port for hosting Angular app
var port = process.env.PORT || 4000;

// Include express
var express = require('express');
var path = require('path');

// Instantiate Express
var app = express();

// Home page route
app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets/home.html'));
})







// START THE SERVER
// =============================================================================
app.listen(port, function() {
    console.log('MBBM Angular App is running at port: ' + port);
});