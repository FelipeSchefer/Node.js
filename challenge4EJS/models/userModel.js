const path = require('path')
const fs = require('fs')

const p = path.join(
 path.dirname(require.main.filename),
 'data',
 'users.json'
)

const getUsersFromFile = callback =>{
 fs.readFile(p, (err, fileContent)=>{
  if(err){
   callback([])
  }else{
   callback(JSON.parse(fileContent))
  }
 })
}

module.exports = class User {
 constructor(u){
  this.user = u
 }

 save(){
  getUsersFromFile(users =>{
   users.push(this)
   fs.writeFile(p, JSON.stringify(users), (err) => {
    console.log(err)
   })
  })
 }

 static fetchAll(callback){
  getUsersFromFile(callback)
 }
}