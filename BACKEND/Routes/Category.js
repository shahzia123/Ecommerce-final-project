const express = require('express');
const router=express.Router()
const categoryController=require('../Controller/Category')

router.post('/createCategory',categoryController.createCategory)
router.get('/fetchCategories',categoryController.fetchCategories)


     

module.exports=router