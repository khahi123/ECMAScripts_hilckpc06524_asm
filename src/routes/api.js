const router = require('express').Router();
const categoriesController = require('../controllers/admin/CategoriesController');
const productsController = require('../controllers/api/Products');
const fs = require('fs');
const util = require('util');
const path = require('path');
const axios = require('axios');

router.get('/categories', categoriesController.all);
router.get('/products', productsController.all);

module.exports = router;