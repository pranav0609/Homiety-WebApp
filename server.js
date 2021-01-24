const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var methodOverride = require('method-override');
const { User } = require('./models/user');
const register = require('./routes/register');
const fixing = require('./routes/valdated_fixing');
const update = require('./routes/main-update-address');
const deletion = require('./routes/main-delete-orders');
const update_fix = require('./routes/order-update-address');
const leaks = require('./routes/validated_leaks');
const replacement = require('./routes/validated_replacement');
const elec_repair = require('./routes/validated_electrician_repair');
const elec_install = require('./routes/validated_electrician_installation');
const elec_repalce = require('./routes/validated_electrician_replacement');
const house = require('./routes/validated_housekeeping');
const saloon_women = require('./routes/validated_saloon_women');
const saloon_men = require('./routes/validated_saloon_men');
const painting = require('./routes/validated_painting');
const pest_control = require('./routes/validated_pest_control');
const gardening = require('./routes/validated_garden');
const renovation = require('./routes/validated_renovation');
const auth = require('./routes/auth');
const admin_auth = require('./routes/admin_auth');

mongoose.connect('mongodb+srv://new_user:9M7TEjeFhWdbAeXV@cluster0.psuux.mongodb.net/homiety?retryWrites=true&w=majority')
            .then(() => console.log('connected to homiety'))
            .catch(err => console.log('could not connect.'));

app.set('views', './frontend');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets', express.static('assets'));
app.use(methodOverride('_method'));
app.use('/register', register);
app.use('/myaccount', update);
app.use('/myaccount', deletion);
app.use('/services/plumbing/fixing', fixing);
app.use('/services/plumbing/fixing', update_fix);
app.use('/services/plumbing/leaks', leaks);
app.use('/services/plumbing/replacement', replacement);
app.use('/services/electrician/repair', elec_repair);
app.use('/services/electrician/installation', elec_install);
app.use('/services/electrician/replacement', elec_repalce);
app.use('/services/housekeeping', house);
app.use('/services/saloon/women', saloon_women);
app.use('/services/saloon/men', saloon_men);
app.use('/services/painting', painting);
app.use('/services/pest-control', pest_control);
app.use('/services/gardening', gardening);
app.use('/services/renovation', renovation);
app.use('/myaccount', auth);
app.use('/admin', admin_auth);

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/services', (req, res) => {
    res.render('our_services.ejs');
})

app.get('/rates', (req, res) => {
    res.render('rate_card.ejs');
})

app.get('/contact', (req, res) => {
    res.render('contact_us.ejs');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})
app.get('/myaccount', (req, res) => {
    res.render('myaccont_authentication.ejs');
})
app.get('/services/plumbing', (req, res) => {
    res.render('plumbing.ejs');
})

app.get('/services/electrician', (req, res) => {
    res.render('electrician.ejs');
})


app.get('/services/saloon', (req, res) => {
    res.render('saloon.ejs');
})

app.get('/services/plumbing/fixing', (req, res) => {
    res.render('final_order_plumbing_fixing.ejs', { order: 'plumbling-fixing'});
})

app.get('/services/plumbing/leaks', (req, res) => {
    res.render('final_order_plumbing_leaks.ejs', { order: 'plumbling-leaks'});
})

app.get('/services/plumbing/replacement', (req, res) => {
    res.render('final_order_plumbing_replacement.ejs', { order: 'plumbling-replacement'});
})

app.get('/services/electrician/repair', (req, res) => {
    res.render('final_order_electrician_repair.ejs', { order: 'electrician-repair'});
})

app.get('/services/electrician/installation', (req, res) => {
    res.render('final_order_electrician_installation.ejs', { order: 'electrician-installation'});
})

app.get('/services/electrician/replacement', (req, res) => {
    res.render('final_order_electrician_replacement.ejs', { order: 'electrician-replacement'});
})

app.get('/services/housekeeping', (req, res) => {
    res.render('final_order_housekeeping.ejs', { order: 'Housekeeping'});
})

app.get('/services/saloon/women', (req, res) => {
    res.render('final_order_saloon_women.ejs', { order: 'Salon - Women'});
})

app.get('/services/saloon/men', (req, res) => {
    res.render('final_order_saloon_men.ejs', { order: 'Saloon - Men'});
})

app.get('/services/painting', (req, res) => {
    res.render('final_order_painting.ejs', { order: 'House Painting'});
})

app.get('/services/pest-control', (req, res) => {
    res.render('final_order_pest.ejs', { order: 'Pest Control'});
})

app.get('/services/gardening', (req, res) => {
    res.render('final_order_gardening.ejs', { order: 'Gardening'});
})

app.get('/services/renovation', (req, res) => {
    res.render('final_order_renovation.ejs', { order: 'Renovation'});
})

app.get('/admin', (req, res) => {
    res.render('admin.ejs');
})

app.get('/admin', (req, res) => {
    res.render('index_admin.ejs');
})

app.get("/", function (req, res) {
    res.render("index",{ details: null })
    })
    app.get("/getdetails", function (req, res) {   
    User.find({}, function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { details: users })
        }
    })
    })

app.listen(1000);