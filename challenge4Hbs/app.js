const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

const app = express();

// const users = [];

// I had to extract engine from 'express-handlebars' instead using it in a variable like const expressHbs = require('express-handlebar')
app.engine('hbs', engine({
 defaultLayout: 'main-layout',
 extname: 'hbs' 
})); 
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
//The code below is for when there wasn't a routes and util folders
// app.get('/', (req, res, next) => {
//   res.render('index', { pageTitle: 'Add User' });
// });

// app.get('/users', (req, res, next) => {
//   res.render('users', {
//     pageTitle: 'User',
//     users: users,
//     hasUsers: users.length > 0
//   });
// });

// app.post('/add-user', (req, res, next) => {
//   users.push({ name: req.body.username });
//   res.redirect('/users');
// });

const userData = require('./routes/index')
const userRoutes = require('./routes/users')
const pageNotFound = require('./routes/404')

app.use(userData.userData)
app.use(userRoutes.routes)
app.use(pageNotFound.routeError)

app.listen(3000);
