var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    Username : String,
    Password : String,
    IsAdmin : Boolean,
    Name : String
});

module.exports = mongoose.model('user', Schema);