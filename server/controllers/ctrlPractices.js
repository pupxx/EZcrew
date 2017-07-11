const practice = require('../models/APIpracticesModel.js')

  function getAllPractices(req, res){
    practice.getAllPractices().limit(15).then((allPractices)=>{
      res.send(allPractices)
    })
  }

  function editIndividualPractice(req, res){
    let id = req.params.id;
    let practiceId = req.body.practice_id;
    let editedPractice = {
      attending: req.body.attending
    }

    practice.editIndividualPractice(id, practiceId, editedPractice).then((edited)=>{
      res.send(edited)
    }).catch((err)=>{
      console.log('errer', err);
    })
  }

  function getPracticeAttendees (req, res){
    practice.getPracticeAttendees().then((attendees)=>{
      res.send(attendees)
    })
  }

module.exports = {
  getAllPractices, editIndividualPractice, getPracticeAttendees
}
