const User = require('../models/userModel')

exports.getAddUser =(req, res, next)=>{
 res.render('admin/add-user', {
  pageTitle: 'Add User'
 })
}

exports.postAddUser = (req, res, next) =>{
 const user = new User(req.body.username)
 user.save()
 res.redirect('/')
}

exports.getEditUser = (req, res, next) => {
 res.render('admin/edit-user',{
  pageTitle: 'Edit User',
  path: '/admin/edit-user'
 })
}

exports.getUsers = (req, res, next) => {
 User.fetchAll((user)=>{
  res.render('admin/users',{
   users: user,
   pageTitle: 'Admin User',
   path: '/admin/users'
  })
 })
}