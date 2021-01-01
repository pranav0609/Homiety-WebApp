const mongoose = require('mongoose');
const Joi = require('joi');

const adminSchema = new mongoose.Schema({
    number: {
        type: String, 
        unique: true,            
        minlength: 10,
        maxlength: 11,
        required: true
    },
    password: {
        type: String,             
        minlength: 3,
        maxlength: 1024,
        required: true
    },    
});

const Admin = mongoose.model('admin', adminSchema);

function validateAdmin(admin) {
    const schema = {
        password: Joi.string().min(3).max(255).required(),
        number: Joi.string().min(10).max(10).required()
    };

    return Joi.validate(admin, schema);
}

exports.Admin = Admin;
exports.validate = validateAdmin;