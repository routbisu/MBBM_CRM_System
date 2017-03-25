var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema   = new Schema({
    PersonID : String,
    SubTotal : Number,
    Discount : Number,
    GrandTotal : Number,
    BillingTime : String
});

module.exports = mongoose.model('transaction', Schema);