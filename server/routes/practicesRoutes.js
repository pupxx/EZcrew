var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrlPractices.js')

  router.get('/', ctrl.getAllPractices)
  router.get('/attendees', ctrl.getPracticeAttendees)
  router.post('/bulk-add', ctrl.addPracticeToAllUsers)
  router.put('/edit/:id', ctrl.editIndividualPractice)



module.exports = router;
