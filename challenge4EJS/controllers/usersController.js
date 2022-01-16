const User = require('../models/userModel')

exports.getAddUser =(req, res, next)=>{
 res.render('admin/add-user', {
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
  res.render('user/users', {
   pageTitle: 'Users',
   users: users
  })
 })
}



