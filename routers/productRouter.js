const express = require('express');
const router = express.Router();

const {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getSpecificProduct
} = require('../controllers/productController');

router.get('/:category', getProducts)

router.get('/productDetails/:id', getSpecificProduct);

router.post('/', addProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;