const express = require('express')
const app = express()

app.use('/user',(req, res, next)=>{
 console.log('middleware /user')
 res.send("<h1>middleware /user</h1>")
})

app.use('/',(req, res, next)=>{
 console.log('middleware /')
 res.send("<p>it is middleware /</p>")
})

app.listen(3000)