const express = require('express');
const router=express.Router()
const brandController=require('../Controller/Brand')

router.post('/createBrand',brandController.createBrand)
router.get('/fetchBrands',brandController.fetchBrands)


     

module.exports=router