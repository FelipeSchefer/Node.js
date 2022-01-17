const adminController = require('../controllers/adminController')
const express = require('express')
const router = express.Router()

router.get('/add-account', adminController.getAddAccounts)

router.get('/accounts', adminController.getAccounts)

router.post('/add-account', adminController.postAddAccounts)


module.exports = router