const User = require('../models/userModel')

exports.getAddUser =(req, res, next)=>{
 res.render('add-user', {
  pageTitle: 'Add User'
 })
}

exports.postAddUser = (req, res, next) =>{
 const user = new User(req.body.username)
 user.save()
 console.log('console.log',user)
 res.redirect('/')
}

exports.getUser = (req, res, next) =>{
 User.fetchAll(users => {
  res.render('users', {
   pageTitle: 'Users',
   users: users
  })
 })
}



