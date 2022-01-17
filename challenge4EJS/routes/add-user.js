const adminController = require('../controllers/adminController')
const express = require('express')
const router = express.Router()

router.get('/add-user', adminController.getAddUser)

router.post('/add-user', adminController.postAddUser)

router.get('/edit-user', adminController.editUser)

router.get('/users', adminController.getUsers)

module.exports = router