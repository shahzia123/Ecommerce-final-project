const express = require('express');
const router=express.Router()
const authController=require('../Controller/Auth')
// const passport = require('passport');

router.post('/createUser',authController.createUser)
router.post('/loginUser',authController.loginUser)
// router.get('/check',authController.checkUser);
   

module.exports=router