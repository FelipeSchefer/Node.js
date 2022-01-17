const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router.get('/', userController.getIndex)

router.get('/accounts', userController.getAccounts)

router.get('/cart', userController.getCart)

router.get('/checkout', userController.getCheckout)

module.exports = router