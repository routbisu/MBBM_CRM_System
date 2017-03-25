var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema   = new Schema({
    StockID : String,
    QuantityKG : Number,
    QuantityPc : Number,
    BillingUnit : String,
    UnitPrice : Number,
    TransactionType : String
});

module.exports = mongoose.model('transactionDetails', Schema);