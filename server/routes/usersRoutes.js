var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrlUsers.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', ctrl.getAllUsers)
router.get('/my-profile', ctrl.getSingleUserInfo);
router.patch('/edit/:id', ctrl.editUser)

module.exports = router;
