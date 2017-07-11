const practice = require('../models/APIpracticesModel.js')

  function getAllPractices(req, res){
    practice.getAllPractices().limit(12).then((allPractices)=>{
      console.log(allPractices);
      res.send(allPractices)
    })
  }

module.exports = {
  getAllPractices
}
