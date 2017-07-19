const admin = require('../models/APIadminModel.js')


function getAllPractices(req, res){
  admin.getAllPractices().then((allPractices)=>{
    res.send(allPractices);
  });
}

function addPractice(req, res){
  let practice = {
    date: req.body.date,
    practiceDescription: req.body.practiceDescription
  }
  admin.addPractice(practice).then((addedPractice)=>{
    let id = addedPractice[0].id
    admin.getPracticeById(id).then((practice)=>{
      res.send(practice[0])
    })
  })
}

function editSinglePractice(req, res){
  let id = req.params.id;
  let body = {
    date: req.body.date,
    practiceDescription: req.body.practiceDescription
  }

  admin.editSinglePractice(id, body).then((editedPractice)=>{
    res.send('editedPractice');
  });
}

function getAllAnnouncements(req, res){
  admin.getAllAnnouncements().then((allAnnouncements)=>{
    res.send(allAnnouncements);
  });
}

function addAnnouncement(req, res){
  let announcement = {
    announcement: req.body.announcement
  }
  admin.addAnnouncement(announcement).then((addedAnnouncement)=>{
    res.send(addedAnnouncement)
  });
}

function editAnnouncement(req, res){
  let id = req.params.id;
  let body = {
    announcement: req.body.announcement
  }
  admin.editAnnouncement(id, body).then((editedAnnouncement)=>{
    res.send('editedAnnouncement');
  });
}

function getAllErgTests(req, res){
  admin.getAllErgTests().then((allErgTests)=>{
    res.send(allErgTests);
  });
}

function addErgTest(req, res){
  let ergTest = {
    title: req.body.title,
    testDescription: req.body.testDescription,
    scheduledFor: req.body.scheduledFor,
    scheduleCategory: req.body.scheduleCategory,
    year: req.body.year
  }
  admin.addErgTest(ergTest).then((addedErgTest)=>{
    res.send('addedErgTest');
  });
}

function editErgTest(req, res){
  let id = req.params.id
  let body = {
    title: req.body.title,
    testDescription: req.body.testDescription,
    scheduledFor: req.body.scheduledFor,
    scheduleCategory: req.body.scheduleCategory,
    year: req.body.year
  }
  admin.editErgTest(id, body).then((editedErgTest)=>{
    res.send(editedErgTest);
  });
}

function deletePractice(req, res){
  let id = req.params.id;
  admin.deletePractice(id).then(()=>{
    res.send({message: 'Successful'})
  }).catch((err)=>{
    res.send('err')
  })
}

function deleteErgTest(req, res){
  let id = req.params.id
  console.log(id);
  admin.deleteErgTest(id).then(()=>{
    res.sendStatus(200)
  }).catch((err)=>{
    res.sendStatus(500)
  })
}

module.exports = {
  getAllPractices, addPractice, editSinglePractice, getAllAnnouncements, addAnnouncement, editAnnouncement,  getAllErgTests, addErgTest, editErgTest, deletePractice, deleteErgTest
}
