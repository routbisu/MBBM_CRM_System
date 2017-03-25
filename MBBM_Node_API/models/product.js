var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Product Schema
var Schema   = new Schema({
    BrandID : String,
    ProductName : String,
    ProductDesription : String
});

module.exports = mongoose.model('product', Schema);