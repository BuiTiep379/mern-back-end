const express = require('express'); 

const router = express.Router();
const { userMiddleware, requireSignin} = require('../middleware');
const { addItemToCart } = require('../controllers/cart');

router.post('/user/cart/addtocart',requireSignin, userMiddleware, addItemToCart);


module.exports = router;
