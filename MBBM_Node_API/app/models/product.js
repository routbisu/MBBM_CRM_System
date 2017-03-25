var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Product Schema
var Product   = new Schema({
    ProductName : String,
    ProductPrice : Number
});

module.exports = mongoose.model('product', Product);