var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrlPractices.js')

  router.get('/', ctrl.getAllPractices)
  router.put('/edit/:id', ctrl.editIndividualPractice)


module.exports = router;
