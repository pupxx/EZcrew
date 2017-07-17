const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ctrlAdmin.js');

router.get('/practices/view-all', ctrl.getAllPractices);
router.get('/announcements', ctrl.getAllAnnouncements)
router.get('/erg-tests', ctrl.getAllErgTests)
router.delete('/practices/remove/:id', ctrl.deletePractice)
router.post('/practices/add-practice', ctrl.addPractice)
router.post('/announcements/add-announcement', ctrl.addAnnouncement)
router.post('/erg-tests/add-erg-test', ctrl.addErgTest)
router.put('/practices/edit/:id', ctrl.editSinglePractice)
router.put('/announcements/edit-announcement/:id', ctrl.editAnnouncement)
router.put('/erg-tests/edit-erg-test/:id', ctrl.editErgTest)




module.exports = router
