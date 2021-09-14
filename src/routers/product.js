const express = require('express'); 

const router = express.Router();
const { adminMiddleware, requireSignin, upload} = require('../middleware');
const {createProduct , getProductsBySlug, getProductDetailsById} = require('../controllers/product');
router.post('/product/create',requireSignin, adminMiddleware , upload.array('productPicture'), createProduct);
router.get('/products/:slug', getProductsBySlug);
router.get('/product/:productId', getProductDetailsById);
module.exports = router;
