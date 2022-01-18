// const path = require('path');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', 'views')

/* this code below is routing the routes folder */
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/users')
const pageNotFound = require('./controllers/error') 

app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes)
app.use(userRoutes)
app.use(pageNotFound.get404)

app.listen(3000)