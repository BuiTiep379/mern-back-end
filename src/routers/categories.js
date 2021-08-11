const express = require('express'); 
const multer = require('multer');
const path = require('path');
const shortid = require('shortid');
const router = express.Router();
const { adminMiddleware, requireSignin} = require('../middleware');
const {addCategory, getCategories} = require('../controllers/category');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
   
const upload = multer({ storage: storage })

router.post('/category/create',requireSignin, adminMiddleware, upload.single("categoryImage"), addCategory);
router.get('/category/getCategory', getCategories);


module.exports = router;
