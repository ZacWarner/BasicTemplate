const express = require('express');
const passport = require('passport');
const router = express.Router();

const auth = require('./auth');

router.use('/auth', auth);



module.exports = router;