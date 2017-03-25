var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema   = new Schema({
    ProductID : String,
    Size : String
});

module.exports = mongoose.model('productSize', Schema);