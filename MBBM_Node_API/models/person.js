var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Person Schema
var Schema = new Schema({
    FirstName : String,
    LastName : String,
    Address : String,
    City : String,
    State : String,
    PinCode : Number,
    PhoneNumber : String
});

module.exports = mongoose.model('person', Schema);