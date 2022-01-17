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
 constructor(aNumber, aName){
  this.accountNumber = aNumber
  this.accountName = aName
 }

 save(){
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
}