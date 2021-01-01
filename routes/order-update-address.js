const { Order } = require('../models/create_new_order');
const mongoose = require('mongoose');
const express = require('express');
const router =  express.Router();


router.put('/', async (req, res) => {

    
        Order.findOneAndUpdate({ _id: req.body._id }, {address: req.body.Address}, { new: true }, () => {
            
                res.redirect('/');
                       
        });
    

});
module.exports = router;