const express = require('express');
const router = express.Router();
const { adminMiddleware, requireSignin} = require('../../middleware');

const { initialData } = require('../../controllers/admin/initialData');

router.post('/initialdata', requireSignin, adminMiddleware, initialData);

module.exports = router;

 