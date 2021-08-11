const express = require('express');
const router = express.Router();
const {validateSignupRequest, isRequestValidated, validateSigninRequest} = require('../../validators/auth');
const {signup, signin, requireSignin, signout} = require('../../controllers/admin/auth')

router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);

router.post('/admin/signup',validateSignupRequest, isRequestValidated, signup );

router.post('/admin/signout', signout);

module.exports = router;

 