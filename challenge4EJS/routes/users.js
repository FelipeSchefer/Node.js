const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router.get('/', userController.getUser)

module.exports = router