const  {mongoose}  = require('../config/db');

require('dotenv').config();

let userschema= new mongoose.Schema({
    
            name: String ,
            surname:String,
            
            email:{
              type:String,
                require:true
            },
            password_hash:String
    
            });
                
            

const user=mongoose.model('User',userschema );

exports.User=user