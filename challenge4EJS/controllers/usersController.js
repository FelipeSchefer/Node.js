const Account = require('../models/accountModel')

exports.getAccounts = (req, res, next) =>{
 Account.fetchAll(accounts => {
  res.render('users/account-list', {
   accts: accounts,
   pageTitle: 'All Accounts',
   path: '/accounts'
  })
 })
}

exports.getAccount = (req, res, next) => {
 const acctId = req.params.accountId
 Account.findById(acctId, account => {
  res.render('users/account-detail', {
   account: account,
   pageTitle: account.title,
   path: '/accounts'
  })
 })
}

exports.getIndex = (req, res, next) => {
 Account.fetchAll(accounts => {
  res.render('users/index', {
   accts: accounts,
   pageTitle: 'Index',
   path: '/'
  })
 })
}

exports.getCart = (req, res, next) => {
 res.render('users/cart',{
  pageTitle: 'Cart',
  path: '/cart'
 })
}

exports.postCart = (req, res, next) => {
 const accountId = req.body.accountId
 console.log(accountId)
 res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
 res.render('users/orders', {
  pageTitle: 'Orders',
  path: '/orders'
 })
}

exports.getCheckout = (req, res, next) => {
 res.render('checkout',{
  pageTitle: 'Checkout',
  path: '/checkout'
 })
}








