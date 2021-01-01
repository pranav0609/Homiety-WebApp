const { User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.put('/:id', async (req, res) => {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, () => {            
        res.redirect('/myaccount');
    })   
});

module.exports = router;