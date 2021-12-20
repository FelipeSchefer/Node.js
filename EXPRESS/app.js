const express = require('express')

const app = express()

app.use('/add-product',(req, res, next)=>{
 console.log('In the middleware')
 res.send('<h1>The "Add product" page</h1>')
 next()
})

app.use('/',(req, res, next)=>{
 console.log('another middleware')
 res.send('<h1>Hello from Express</h1>')
})

app.listen(3000)
