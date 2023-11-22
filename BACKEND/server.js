const express = require('express');
const server = express();
const mongoose = require('mongoose');
const productsRouter = require('./Routes/Product');
const brandRouter = require('./Routes/Brand');
const categorytRouter=require('./Routes/Category');
const authRouter=require('./Routes/Auth');
const usersRouter=require('./Routes/User');
const cartRouter=require('./Routes/Cart')
const Route = express.Router();
const cors = require('cors')
server.use(cors({
    exposedHeaders:['X-Total-Count']
}))

//middlewares
server.use(express.json()); // to parse req.body
main().catch(err=> console.log(err));
server.use('/products', productsRouter);
server.use('/brands', brandRouter);
server.use('/categories', categorytRouter);
server.use('/auth', authRouter);
server.use('/users', usersRouter);
server.use('/cart',cartRouter)
// server.use("/products",productApi)

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB');
    console.log('database connected')
}

// server.get('/',(req, res)=>{
//     res.json({status:'success'})
// })

server.listen(8080, ()=>{
    console.log('server started')
})