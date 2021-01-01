const { Order } = require('../models/create_new_order');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.delete('/:id', async (req, res) => {
    await Order.findOneAndRemove({ _id: req.body.id }, () => {            
        res.redirect('/myaccount');
    });
    
});

module.exports = router;
