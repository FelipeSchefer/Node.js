const Account = require('../models/accountModel')

exports.getAddAccounts =(req, res, next)=>{
 res.render('admin/add-account', {
  pageTitle: 'Add Account',
  path: '/admin/add-account'
 })
}

exports.postAddAccounts = (req, res, next) =>{
 const accountName = req.body.accountName
 const accountNumber = req.body.accountNumber
 const account = new Account(accountName, accountNumber)
 account.save()
 res.redirect('/')
}

exports.getAccounts = (req, res, next) => {
 Account.fetchAll((accounts)=>{
  res.render('admin/accounts',{
   accts: accounts,
   pageTitle: 'Admin Accounts',
   path: '/admin/accounts'
   // path: '/admin/admin-accounts'
  })
 })
}