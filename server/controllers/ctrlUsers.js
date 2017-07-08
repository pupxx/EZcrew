const users = require('../models/APIusersModel.js')


function getSingleUserInfo(req, res) {
  users.getSingleUserInfo().then((singleUser)=>{
    res.send(singleUser);
  })
}

module.exports = {
  getSingleUserInfo
}
