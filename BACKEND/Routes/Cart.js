const express = require('express');
const router=express.Router()
const cartController=require('../Controller/Cart')

router.post('/addToCart',cartController.addToCart)
router.get('/',cartController.fetchCartByUser)
router.delete('/deleteFromCart/:id',cartController.deleteFromCart)
router.patch('/updateCart/:id',cartController.updateCart)



     

module.exports=router