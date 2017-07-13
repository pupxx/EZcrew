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

module.exports = {
  getErgResults, getUpcomingTest
}
