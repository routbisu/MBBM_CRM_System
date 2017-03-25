var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Role Schema
var Schema   = new Schema({
    PersonID : String,
    Role : Number
});

module.exports = mongoose.model('role', Schema);