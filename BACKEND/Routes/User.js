const express = require('express');
const router=express.Router()
const userController=require('../Controller/User')

router.patch('/updateUser/:id',userController.updateUser)
router.get('/fetchUserById/:id',userController.fetchUserById)


     

module.exports=router