const User = require('../models/userModel')

exports.getCart = (req, res, next) => {
 res.render('users/cart',{
  pageTitle: 'Cart',
  path: '/users/cart'
 })
}

exports.getCheckout = (req, res, next) => {
 res.render('users/checkout',{
  pageTitle: 'Checkout',
  path: '/users/checkout'
 })
}

exports.getUserDetail = (req, res, next) => {
 res.render('users/user-detail', {
  pageTitle: 'User Detail',
  path: '/users/user-detail'
 })
}

exports.getUser = (req, res, next) =>{
 User.fetchAll(users => {
  res.render('users/users', {
   pageTitle: 'Users',
   users: users,
   path: '/users/users'
  })
 })
}





