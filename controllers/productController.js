const asyncHandler = require('express-async-handler')

const Product = require('../models/productsModel');
const { cloudinary } = require('../utils/cloudinary');

const getProducts = asyncHandler(async (req, res) => {

    const products = await Product.find({ category: req.params.category})
    
    res.status(200).json(products)
})

const getSpecificProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    
    res.status(200).json(product)
})

const addProduct = asyncHandler(async (req, res) => {
    let productBeingAdded = {
        name: req.body.data.name,
        description: req.body.data.description,
        price: req.body.data.price,
        category: req.body.data.category,
        images: []
    }
    const imageURLs = []

    for(let i = 0; i < req.body.data.images.length; i++){
        const uploadedResponse = await cloudinary.uploader.upload(req.body.data.images[i], {
            upload_preset: 'dev_setups'
        })

        imageURLs.push(uploadedResponse.secure_url);
    }

    productBeingAdded.images = imageURLs;

    // console.log('productBeingAdded: ', productBeingAdded);

    const product = await Product.create(productBeingAdded);

    console.log('product after upload: ', product);

    res.status(200).json(product);
})

const updateProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'update product'})
})

const deleteProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Product'})
})

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getSpecificProduct
}