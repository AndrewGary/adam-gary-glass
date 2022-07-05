const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    colors: [{
        type: String
    }],
    images: [{
        type: String
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);