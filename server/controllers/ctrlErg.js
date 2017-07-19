const erg = require('../models/APIergModel.js')

function getAllErgTests(req, res){
  erg.getAllErgTests().then((allErgTests)=>{
    res.send(allErgTests)
  })
}

function getErgResults(req, res){
  let id = req.params.id;
  erg.getErgResults(id).then((ergResults)=>{
    res.send(ergResults)
  })
}

function getUpcomingTest(req, res){
  erg.getupcomingTest().limit(1).then((upcomingTest)=>{
    res.send(upcomingTest)
  })
}

function getErgResultByid(req, res){
  let id = req.params.id
  console.log('now here');
  erg.getErgResultByid(id).then((ergTest)=>{
    res.send(ergTest)
  }).catch((err)=>{
    console.log('ERROR', err);
  });
}

function addNewErgResult(req, res){
  console.log('hi');
  console.log(req.body);
  let newResult = {
    user_id: req.body.userId,
    scheduledergtest_id: req.body.ergTestId,
    weight: req.body.body.weight,
    time: req.body.body.time,
    avgSplit: req.body.body.avgSplit,
    avgSr: req.body.body.avgSr
  }
  erg.addNewErgResult(newResult).then((addedErgResult)=>{
    res.send(addedErgResult)
  })
}


function editErgTest(req, res){
  let id = req.params.id;
  let ergTest = {
    scheduleCategory: req.body.scheduleCategory,
    scheduledFor: req.body.scheduledFor,
    testDescription: req.body.testDescription,
    title: req.body.title,
    year: req.body.year
  }
  erg.editErgTest(id, ergTest).then((editedTest)=>{
    res.send(editedTest)
  })
}

function addErgTest(req, res){
  let ergTest = {
    scheduleCategory: req.body.scheduleCategory,
    scheduledFor: req.body.scheduledFor,
    testDescription: req.body.testDescription,
    title: req.body.title,
    year: req.body.year
  }
  erg.addErgTest(ergTest).then((addedErgTest)=>{
    res.send(addedErgTest[0])
  })
}



module.exports = {
  getAllErgTests, getErgResults, getUpcomingTest, getErgResultByid, addNewErgResult, editErgTest, addErgTest
}
