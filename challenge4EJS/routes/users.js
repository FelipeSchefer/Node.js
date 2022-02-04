const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router.get('/', userController.getIndex)

router.get('/accounts', userController.getAccounts)

router.get('/accounts/:accountId', userController.getAccount)

router.get('/cart', userController.getCart)

router.post('/cart', userController.postCart)

router.get('/orders', userController.getOrders)

router.get('/checkout', userController.getCheckout)

module.exports = router