const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// const users = []

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

// this commented code was used when there wasn't either util nor routes folders  
// app.get('/',(req, res, next)=>{
//  res.render('index', {pageTitle: 'Add User'})
// })

// app.get('/users', (req, res, next) =>{
//  res.render('users', {
//   pageTitle: 'Users',
//   users: users
//  })
// })

// app.post('/add-user', (req, res, next) =>{
//  users.push({name: req.body.username})
//  res.redirect('/users')
// })

// app.use((req, res, next) => {
//  res.status(404).render('404', { pageTitle: 'Page Not Found', path:'' });
// });

/* this code below is routing the routes folder */
const userRoutes = require('./routes/index')
const userList = require('./routes/users')
const pageNotFound = require('./routes/404')

app.use(userRoutes)
app.use(userList)
app.use(pageNotFound.routesError)

app.listen(3000)