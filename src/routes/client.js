const router = require('express').Router();
const homeController = require('../controllers/client/HomeController');
const productsController = require('../controllers/client/ProductsController');

router.get('/', homeController.index);
router.get('/products', productsController.list);
router.get('/products/detail/:id', productsController.store);

module.exports = router;