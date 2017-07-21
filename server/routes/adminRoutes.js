const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ctrlAdmin.js');

router.get('/practices/view-all', ctrl.getAllPractices);
router.get('/announcements', ctrl.getAllAnnouncements)
router.get('/erg-tests', ctrl.getAllErgTests)
router.get('/get-all-erg-results', ctrl.getAllErgResults)
router.delete('/practices/remove/:id', ctrl.deletePractice)
router.delete('/delete-erg-test/:id', ctrl.deleteErgTest)
router.post('/practices/add-practice', ctrl.addPractice)
router.post('/announcements/add-announcement', ctrl.addAnnouncement)
router.post('/erg-tests/add-erg-test', ctrl.addErgTest)
router.put('/practices/edit/:id', ctrl.editSinglePractice)
router.put('/announcements/edit-announcement/:id', ctrl.editAnnouncement)
router.put('/erg-tests/edit-erg-test/:id', ctrl.editErgTest)




module.exports = router
