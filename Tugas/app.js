const express = require('express');
// const ProductRouter = require('./src/database/product/product.route');
const userRouter = require('./src/user/user.route')
const ProductRouter = require('./src/product (Tugas)/1_product.route')
const app = express()
const port =  8001


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.use(userRouter);
app.use(ProductRouter);
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))