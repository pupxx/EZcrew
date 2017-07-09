var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrlPractices.js')

  router.get('/', ctrl.getAllPractices)


module.exports = router;
