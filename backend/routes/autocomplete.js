

var express = require('express');
var router = express.Router();
var Product = require('../models/Product');

router.get('/', async function(req, res, next) {
  keyword = req.query.keyword;

  if (keyword) {
    products = await Product.find({ 'title': {  "$regex": keyword, "$options": "i" } });
    res.status(200).json(products)
  } else {
    res.status(500).json({ error: 'There seems to be missing keywords.' })
  }

  res.status(500);
});

module.exports = router;
