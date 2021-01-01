const {Admin, validate} = require('../models/admin_model');
// currently the admin password is not encrypted
// will encrypt the admin password later and then use bcrypt
// const bcrypt = require('bcrypt');
const express = require('express');
const { Order } = require('../models/create_new_order');
const router =  express.Router();


router.post('/', async (req, res) => {
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let user = await Admin.findOne({number: req.body.number});
        if(!user) return res.status(400).send('incorrect username');

        const password = await Admin.findOne({password: req.body.password});
        if(!password) return res.status(400).send('Invalid password');

        await Order.find(
                function (err, orders) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.render("index_admin", { details: orders, user_details: user })
                        }
                    })
        
})

module.exports = router;