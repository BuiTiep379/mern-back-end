const express = require('express'); 

const router = express.Router();
const { adminMiddleware, requireSignin, upload} = require('../../middleware');
const { createPage, getPage } = require('../../controllers/admin/page');
router.post('/page/create',requireSignin, adminMiddleware, upload.fields([
    { name: 'banners' },
    { name: 'products' }
]), createPage);

router.get('/page/:category/:type', getPage);

module.exports = router;
