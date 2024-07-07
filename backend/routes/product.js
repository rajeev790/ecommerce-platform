const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', productController.getProducts);
router.post('/', authMiddleware, productController.addProduct);

module.exports = router;