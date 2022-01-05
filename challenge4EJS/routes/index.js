const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/users', usersController.getAddUser)

router.post('/add-user', usersController.postAddUser)

module.exports = router