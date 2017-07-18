const practice = require('../models/APIpracticesModel.js')
const admin = require('../models/APIAdminModel.js')

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
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',practice);
        res.send(practice)
      })
    }else{
      practice.getPracticeAttendees().then((attendees)=>{

        res.send(attendees)
      })
    }
  }

  function addPracticeToAllUsers(req, res){
    console.log(req.body);
    let list = req.body.arrayToPost
    console.log(list);

    admin.addPracticeToAllUsers(list).then((confirmationId)=>{
      console.log(confirmationId);
    })
  }

module.exports = {
  getAllPractices, editIndividualPractice, getPracticeAttendees, addPracticeToAllUsers
}
