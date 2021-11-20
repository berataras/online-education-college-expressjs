const express = require('express');
const AuthController = require('../controllers/AuthController')

const router = express.Router();

router.route('/login').post(AuthController.login);
router.route('/logout').get(AuthController.logout);
router.route('/register').post(AuthController.register);

module.exports = router;