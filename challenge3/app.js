const express = require('express')       // npm install --save express
const bodyParser = require('body-parser')// npm install --save body-parser
const path = require('path')      
const rootDir = require('./util/path')       
const app = express()

const homeFile = require('./routes/home')
const formFile = require('./routes/form')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/challenge', formFile)
app.use(homeFile)

app.use((req, res, next) =>{
 res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})


app.listen(3000)



