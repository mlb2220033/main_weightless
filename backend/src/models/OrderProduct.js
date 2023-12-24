const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            name: { type: String, required: true },
            amount: { type: Number, required: true },
            image: { type: Array, required: true },
            price: { type: Number, required: true },
            
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                required: true,
            },
        },
    ],
    shippingAddress: {
        fullName: { type: String,  },
        address: { type: String,  },
        city: { type: String,  },
        phone: { type: Number,  },
    },
    paymentMethod: { type: String, },
    itemsPrice: { type: Number,  },
    shippingPrice: { type: Number,  },
    totalPrice: { type: Number,  },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User',  },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
},
    {
        timestamps: true,
    }
);
const Order = mongoose.model('orders', orderSchema);
module.exports = Order