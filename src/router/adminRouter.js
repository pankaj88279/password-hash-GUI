const express=require('express');

const { admincontroller } = require('../controllers/admincontroller');


const adminRouter=express.Router();

adminRouter.post('/std',admincontroller)


exports.adminRouter=adminRouter