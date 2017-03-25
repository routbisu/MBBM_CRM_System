var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema   = new Schema({
    ProductID : String,
    ProductSize : String,
    ProductMaterial : String,
    ProductType : String,
    ProductQuantity : Number,
    ProductPieces : Number,
    MinStockLimitKG : Number,
    MaxStockLimitKG : Number,
    MinStockLimitPc : Number,
    MaxStockLimitPc : Number
});

module.exports = mongoose.model('stockDetail', Schema);