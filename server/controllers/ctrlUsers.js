const users = require('../models/APIusersModel.js')


function getSingleUserInfo(req, res) {
  users.getSingleUserInfo().then((singleUser)=>{
    res.send(singleUser);
  });
}

function editUser (req, res){
  let id = req.params.id;
  let userInfo = {
    userFirstName: req.body.userFirstName,
    userLastName: req.body.userLastName,
    phone: req.body.phone,
    userEmail: req.body.userEmail,
    weight: req.body.weight,
    gender: req.body.gender,
    position: req.body.position
  };
  users.editUser(id, userInfo).then((editedUser)=>{
    res.send(editedUser);
  })
}

module.exports = {
  getSingleUserInfo, editUser
}
