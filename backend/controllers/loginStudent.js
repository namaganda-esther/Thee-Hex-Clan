const Login = require('../models/login');



const SaveLogin = (req,res)=>{
   let data = new Login({
        username: req.body.username,
        password: req.body.password
    })
    data.save()
    .then(res.render('/backend/public/html/login.html'))
    .catch((err)=>{
        res.json({msg:"oops something went wrong"}, err)
    })
}

module.exports = {
    SaveLogin
}