const practice = require('../models/APIpracticesModel.js')
const admin = require('../models/APIadminModel.js')

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
    let id = req.params.id

    if(id){
      practice.getPracticeAttendeesByPracticeId(id).then((practice)=>{
        res.send(practice)
      })
    }else{
      practice.getPracticeAttendees().then((attendees)=>{

        res.send(attendees)
      })
    }
  }

  function addPracticeToAllUsers(req, res){
    let list = req.body.arrayToPost

    admin.addPracticeToAllUsers(list).then((confirmationId)=>{
    }).catch((err)=>{
      next(err)
    })
  }

module.exports = {
  getAllPractices, editIndividualPractice, getPracticeAttendees, addPracticeToAllUsers
}
