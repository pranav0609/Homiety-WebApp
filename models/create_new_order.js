const mongoose = require('mongoose');
const Joi = require('joi');

const orderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    Number: {
        type: String
    },
    order: {
        type: String
    },
    address: {
        type: String
    }
})

const Order = mongoose.model('Order', orderSchema);

exports.orderSchema = orderSchema;
exports.Order = Order;