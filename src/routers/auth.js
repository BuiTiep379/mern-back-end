const express = require('express');
const router = express.Router();
const {validateSignupRequest, isRequestValidated, validateSigninRequest} = require('../validators/auth');

const {signup, signin} = require('../controllers/auth');

router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest, isRequestValidated, signin);


module.exports = router;

