const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))) // when we use the Folder "public" to style our css we have to add this piece of code so it can work on the browser 

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use((req, res, next)=>{
 res.status(404).sendFile(path.join(__dirname, './','views', '404.html'))
})

app.listen(3000)
