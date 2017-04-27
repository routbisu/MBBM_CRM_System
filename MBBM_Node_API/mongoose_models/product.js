/**
 * product.js -> Mongoose schema for "Products" table
 */

import mongoose from 'mongoose';

// Product Schema
const ProductSchema = new mongoose.Schema({
    BrandID: String,
    ProductName: String,
    ProductDescription: String
});

const Product = mongoose.model('product', ProductSchema);

export { Product };