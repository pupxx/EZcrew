const practice = require('../models/APIpracticesModel.js')

  function getAllPractices(req, res){
    practice.getAllPractices().then((allPractices)=>{
      res.send(allPractices)
    })
  }

module.exports = {
  getAllPractices
}
