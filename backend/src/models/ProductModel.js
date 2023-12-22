const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        tittle: { type: String, required: true, unique: true },
        url: { type: String, required: true },
        price: { type: String, required: true },
        thumbnail: { type: String, required: true },
        size: { type: Array, required: true },
        description: { type: String, required: true },
        image: { type: Array, required: true },
        
        // discount: { type: Number },
        // selled: { type: Number }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('products', productSchema);

module.exports = Product;
