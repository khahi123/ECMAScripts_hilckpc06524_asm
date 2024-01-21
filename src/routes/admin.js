const router = require('express').Router();
const homeController = require('../controllers/admin/HomeController');
const productsController = require('../controllers/admin/ProductsController');

router.get('/', homeController.index);
router.get('/products', productsController.list);
router.get('/products/add', productsController.add);
router.post('/products/add', productsController.add);

module.exports = router;