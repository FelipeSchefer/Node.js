const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const router = express.Router()

router.get('/',(req, res, next)=>{
 //you can use two different approaches it is totally up to you, with one you have to create a folder 'util' and a file 'path.js' 
 res.sendFile(path.join(rootDir, 'views', 'shop.html'))
 // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
})

module.exports = router