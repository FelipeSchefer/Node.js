const usersController = require('../controllers/usersController')
const express = require('express')
const router = express.Router()

router.get('/add-user', usersController.getAddUser)

router.post('/add-user', usersController.postAddUser)

module.exports = router