const express = require('express');
const router = express.Router();
const { adminMiddleware, requireSignin} = require('../../middleware');
const { updateOrder } = require('../../controllers/admin/order.admin');

router.post('/order/update', requireSignin, adminMiddleware, updateOrder);

module.exports = router;

 