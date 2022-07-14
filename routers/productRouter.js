const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProducts,
    getNewWork,
    addProduct,
    updateProduct,
    deleteProduct,
    getSpecificProduct
} = require('../controllers/productController');

router.get('/allProducts', getAllProducts);

router.get('/category/:category', getProducts);

router.get('/newWork', getNewWork);

router.get('/productDetails/:id', getSpecificProduct);

router.post('/', addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;