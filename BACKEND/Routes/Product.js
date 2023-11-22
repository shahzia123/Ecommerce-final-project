const express = require('express');
const router=express.Router()
const productController=require('../Controller/Product')

router.post('/createProduct',productController.createProduct)
router.get('/fetchAllProducts',productController.fetchAllProducts)
router.get('/fetchProductById/:id',productController.fetchProductById)
router.patch('/updateProduct/:id',productController.updateProduct)

     

module.exports=router