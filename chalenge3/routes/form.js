const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

router.get('/form', (req, res, next)=>{
 res.sendFile(path.join(rootDir, 'views', 'form.html'))
})

router.post('/form', (req, res, next)=>{
 console.log(req.body)
 res.redirect('/')
})

module.exports = router