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

module.exports = {
  getErgResults, getUpcomingTest, getErgResultByid
}
