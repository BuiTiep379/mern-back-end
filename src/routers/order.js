const express = require('express');
const router = express.Router();
const { requireSignin, userMiddleware } = require('../middleware');
const { addOrder, getOrders } = require("../controllers/order");

router.post("/addOrder", requireSignin, userMiddleware, addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);

module.exports = router;