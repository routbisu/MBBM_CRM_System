var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Brand Schema
var Schema = new Schema({
    BrandName : String
});

module.exports = mongoose.model('brand', Schema);