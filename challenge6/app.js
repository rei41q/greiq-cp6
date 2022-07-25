const express = require('express');
const userRouter = require('./src/user_game/1_user_game.route')
const app = express()
const port = 8001
app
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.use(userRouter);
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

app