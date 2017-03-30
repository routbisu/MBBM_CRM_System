var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Brand Schema
var Schema = new Schema({
    BrandID : String,
    ProductName : String,
    ProductDescription : String
});

module.exports = mongoose.model('product', Schema);