var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrlErg.js')


router.get('/get-all-tests', ctrl.getAllErgTests)
router.get('/get-results/:id', ctrl.getErgResults)
router.get('/upcoming-erg-test', ctrl.getUpcomingTest)
router.get('/:id-erg-results', ctrl.getErgResultByid)
router.post('/add-new-result', ctrl.addNewErgResult)
router.post('/add-erg-test', ctrl.addErgTest)
router.put('/edit-erg-test/:id', ctrl.editErgTest)

module.exports = router;
