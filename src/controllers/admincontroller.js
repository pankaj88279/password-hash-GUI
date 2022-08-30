const express=require('express');
const {User} = require('../modules/User');
const bcrypt = require('bcrypt');

let admincontroller=(req,res)=>{

    //console.log(req.body.email)
    console.log(req.body)
User.findOne({ email:req.body.email }, function (err, user) {
  console.log(user) 

if(user===null){
   
    console.log(req.body.password_hash)

    const salt = 10;

    let encryptpassword = bcrypt.hashSync(req.body.password_hash, salt );;

    req.body.password_hash = encryptpassword;

    const user = new User(req.body);

    user.save()
    .then((d)=>{
        res.status(200).json({
    
            msg:"user register"
        })
    }).catch((e)=>{
        res.status(404).json({
    
            msg:"unsuccessfull"
        })
    })

}else{
    res.status(600).json({
    
        msg:"user already register"
    });
}
})
}




exports.admincontroller=admincontroller