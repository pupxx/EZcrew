var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrlErg.js')


router.get('/get-results/:id', ctrl.getErgResults)
router.get('/upcoming-erg-test', ctrl.getUpcomingTest)

module.exports = router;
