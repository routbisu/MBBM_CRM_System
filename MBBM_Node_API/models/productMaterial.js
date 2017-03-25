var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema   = new Schema({
    ProductID : String,
    Material : String
});

module.exports = mongoose.model('productMaterial', Schema);