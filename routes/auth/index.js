const express = require('express');
const passport = require('passport');
const router = express.Router();


const login = require('./login');

router.post('/login', login);

// router.post('/register', register);

module.exports = router;