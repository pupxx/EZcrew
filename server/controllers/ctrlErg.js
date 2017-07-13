const erg = require('../models/APIergModel.js')

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

module.exports = {
  getErgResults, getUpcomingTest, getErgResultByid, addNewErgResult
}
