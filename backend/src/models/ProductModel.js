const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: { type: String},
        rating: { type: String},
        price: { type: Number},
        size: { type: Array},
        image: { type: Array},
        type: { type: Array},
        description: { type: String},
        
        
        // discount: { type: Number },
        // selled: { type: Number }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('products', productSchema);

module.exports = Product;
