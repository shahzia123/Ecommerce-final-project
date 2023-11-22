const express = require('express');
const router=express.Router()
const orderController=require('../Controller/Order')

router.post('/createOrder',orderController.createOrder)
router.get('/',orderController.fetchOrdersByUser)
router.get('/fetchAllOrders',orderController.fetchAllOrders)
router.delete('/deleteOrder/:id',orderController.deleteOrder)
router.patch('/updateOrder/:id',orderController.updateOrder)


     

module.exports=router