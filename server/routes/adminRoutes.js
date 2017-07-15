const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ctrlAdmin.js');

router.get('/practices', ctrl.getAllPractices);
// router.post('/announcements/add-announcement', ctrl.addAnnouncement)
router.post('/practices/add-practice', ctrl.addPractice)
router.put('/practices/edit:id', ctrl.editSinglePractice)



module.exports = router
