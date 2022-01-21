const fs = require('fs')
const path = require('path')

const p = path.join(
 path.dirname(process.mainModule.filename),
 'data',
 'products.json'
)

const getProductsFromFile = (callback) =>{
 fs.readFile(p, (err, fileContent)=>{
  if(err){
   callback([])
  }else{
   callback(JSON.parse(fileContent))
  }
 })
}

module.exports = class Product {
 constructor(title, imageURL, description, price){
  this.title = title
  this.imageURL = imageURL
  this.description = description
  this.price = price
 }

 save(){
  this.id = Math.random().toString()
  getProductsFromFile(products =>{
   products.push(this)
   fs.writeFile(p, JSON.stringify(products), (err) => {
    console.log(err) 
   })
  })
 }

 static fetchAll(callback){
  getProductsFromFile(callback)
 }
}