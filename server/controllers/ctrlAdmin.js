const admin = require('../models/APIadminModel.js')

console.log('controller linked');


function getAllPractices(req, res){
  admin.getAllPractices().then((allPractices)=>{
    res.send(allPractices)
  })
}

function addPractice(req, res){
  let practice = {
    date: req.body.date,
    practiceDescription: req.body.practiceDescription
  }
  admin.addPractice(practice).then((addedPractice)=>{
    res.send(addedPractice);
  });
}

function editSinglePractice(req, res){
  let id = req.params.id;
  let body = {
    date: req.body.date,
    practiceDescription: req.body.practiceDescription
  }
  admin.editSinglePractice(id, body).then((editedPractice)=>{
    res.send('editedPractice')
  })
}




module.exports = {
  addPractice, getAllPractices, editSinglePractice
}
