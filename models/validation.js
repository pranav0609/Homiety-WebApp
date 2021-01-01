const mongoose = require('mongoose');
const Joi = require('joi');

const numberSchema = new mongoose.Schema({
    number: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    password: {
        type: String,
        minlength: 3,
        maxlength: 1024,
        required: true
    }
})

const Number = mongoose.model('Number', numberSchema);

function validateNumber(number) {
    const schema = {
        number: Joi.string().min(10).max(10).required(),
        password: Joi.string().min(3).max(15).required()    
    };
    return Joi.validate(number, schema);
}

exports.numberSchema = numberSchema;
exports.Number = Number;
exports.validate = validateNumber;