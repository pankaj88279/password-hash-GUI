const express=require('express');
const { adminRouter } = require('./router/adminRouter');
const app=express();
require('dotenv').config();
app.use(express.json())

app.use(adminRouter)

var port=process.env.port
app.listen(port,()=>{
    console.log('running port',port)
})