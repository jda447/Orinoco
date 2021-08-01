const express = require('express');
const path = require('path');
const router = express.Router();
const cameraRoutes = require('./routes/camera');
//const teddyRoutes = require('./routes/teddy');
//const furnitureRoutes = require('./routes/furniture');

var myCart = {};

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static('css'));

app.use('/', express.static(path.join(__dirname, '/')));
app.use(express.static('/'));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static('node_modules'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/cameras', cameraRoutes);


app.get('/', function(req, res){
  
  res.sendFile(path.join(__dirname+'/index.html'));
  
});

app.get('/single_product/:id', (req, res) => { 
  
  res.render('single_product',{id: req.params.id });
  
  
});
app.get('/show_cart', (req, res) => {
  res.render('show_cart');
  
});
app.post('/show_cart', (req, res) => {
  
});
app.get('/order_confirmation/:first/:last/:orderId/:amount', (req, res) => {
  
  res.render('order_confirmation',{first: req.params.first,last: req.params.last,orderId: req.params.orderId,amount: req.params.amount});
});



module.exports = app;
