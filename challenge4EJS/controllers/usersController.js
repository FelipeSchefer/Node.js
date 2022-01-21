const Product = require('../../EXPRESS/models/product')
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
 Product.findById(acctId, account => {
  console.log(account)
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








