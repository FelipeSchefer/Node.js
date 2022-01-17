const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router.get('/cart', userController.getCart)

router.get('/checkout', userController.getCheckout)

router.get('/index', userController.getIndex)

router.get('/user-detail', userController)

router.get('/users', userController.getUser)

module.exports = router