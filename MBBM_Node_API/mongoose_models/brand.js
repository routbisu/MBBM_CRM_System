/**
 * brand.js -> Mongoose schema for "Brands" table
 */

import mongoose from 'mongoose';

// Brand Schema
const BrandSchema = new mongoose.Schema({
    BrandName: String
});

const Brand = mongoose.model('brand', BrandSchema);

export { Brand };