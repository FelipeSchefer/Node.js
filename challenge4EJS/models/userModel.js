const path = require('path')
const { dirname } = require('path')
const fs = require('fs')

module.exports = class User {
 constructor(u){
  this.user = u
 }

 save(){
  const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'users.json'
  )
  fs.readFile(p, (err, fileContent) => {
   let users = []
   if (!err){
    users = JSON.parse(fileContent)
   }
   users.push(this)
   fs.writeFile(p, JSON.stringify(users), (err) => {
    console.log(err)
   })
  })
 }

 static fetchAll(callback){
  const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'users.json'
  )
  fs.readFile(p, (err, fileContent)=>{
   if(err){
    callback([])
   }
   callback(JSON.parse(fileContent))
  })
 }
}