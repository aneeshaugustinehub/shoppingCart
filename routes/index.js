var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

let produtcs = [
  {
    name:"Iphone 11 pro",
    category:"mobile",
    description: "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
    Image:"https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
  },
  {
    name:"Samsung Galaxy S22 Ultra",
    category:"mobile",
    description: "Samsung Galaxy S22 Ultra 5G Phantom Black,256GB Storage",
    Image:"https://m.media-amazon.com/images/I/71Ntz1Yy4kL._SX679_.jpg"
  },
  {
    name:"Google Pixel 7 Pro",
    category:"mobile",
    description: "Google Pixel 7 Pro (Hazel, 128 GB) (12 GB RAM)",
    Image:"https://m.media-amazon.com/images/I/51f4A6Tr8zL._SX679_.jpg"
  },
  {
    name:"ASUS ROG 6",
    category:"mobile",
    description: "ASUS ROG 6 Cell Phone, 6.78” FHD+ 2448x1080 165Hz, 6000mAh Battery",
    Image:"https://m.media-amazon.com/images/I/81SUeteCxGL._AC_SX466_.jpg"
  }
]

  res.render('index', {produtcs});
});

module.exports = router;
