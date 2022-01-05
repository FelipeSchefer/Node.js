const users = []

exports.getAddUser = (req, res, next) =>{
 res.render('users', {
  pageTitle: 'Users',
  users: users
 })
}

exports.postAddUser = (req, res, next) =>{
 users.push({name: req.body.username})
 res.redirect('/users')
}

exports.getUser =(req, res, next)=>{
 res.render('index', {pageTitle: 'Add User'})
}