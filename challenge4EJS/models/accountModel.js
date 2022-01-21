const path = require('path')
const fs = require('fs')

const p = path.join(
 path.dirname(require.main.filename),
 'data',
 'accounts.json'
)

const getAccountsFromFile = callback =>{
 fs.readFile(p, (err, fileContent)=>{
  if(err){
   callback([])
  }else{
   callback(JSON.parse(fileContent))
  }
 })
}

module.exports = class Account {
 constructor(aName, aNumber){
  this.accountName = aName
  this.accountNumber = aNumber
 }

 save(){
  this.id = Math.random().toString()
  getAccountsFromFile(accounts =>{
   accounts.push(this)
   fs.writeFile(p, JSON.stringify(accounts), (err) => {
    console.log(err)
   })
  })
 }

 static fetchAll(callback){
  getAccountsFromFile(callback)
 }

 static findById(id, callback){
  getAccountsFromFile(accounts =>{
   const account = accounts.find( a => a.id  === id)
   callback(account)
  })
 }
}