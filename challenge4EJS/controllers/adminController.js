const Account = require('../models/accountModel')

exports.getAddAccounts =(req, res, next)=>{
 res.render('admin/add-account', {
  pageTitle: 'Add Account',
  path: '/admin/add-account'
 })
}

exports.postAddAccounts = (req, res, next) =>{
 const account = new Account(req.body.accountName, req.body.accountNumber)
 account.save()
 res.redirect('/')
}

exports.getAccounts = (req, res, next) => {
 Account.fetchAll((accounts)=>{
  res.render('admin/accounts',{
   accts: accounts,
   pageTitle: 'Admin Account',
   path: '/admin/accounts'
  })
 })
}