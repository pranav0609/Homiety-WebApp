const { User} = require('../models/user');
const { Number, validate} = require('../models/validation');
const { Order } = require('../models/create_new_order');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const router =  express.Router();


router.post('/', async (req, res) => {
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({number: req.body.number});
        if(!user) return res.status(400).send('user_doesnt_exist');

        const password = await bcrypt.compare(req.body.password, user.password);
        if(!password) return res.status(400).send('invalid password');  

        new_order = new Order({
                name: user.Name,
                Number: user.number,
                order: 'plumbing-leaks',
                address: user.address
        })
        
        await new_order.save();
        res.render("update-address-order", {address_details: user.address, name_details: user.Name, id_details: new_order._id}); 
})
module.exports = router;