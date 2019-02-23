const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const theme_controller = require('./theme.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', theme_controller.getData);
router.post('/create', theme_controller.addData);
// router.put('/update', theme_controller.putData);
module.exports = router;