// const person = {
//   name: 'Felipe',
//   age: 27,
//   greet(){
//     console.log('hi I am ' + this.name)
//   }
// }
// const printName = ({name}) => {
//   console.log(name)
// }
// printName(person)

// const {name, age} = person
// console.log('my name is ' + name + ' ,and I am ' + age)

// const myArray = ['car','motorcycle']
// const [position0, position1] = myArray
// console.log("do you want a " + position0 + ' or ' + position1)
// /////////////////
// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Done!')
//       }, 1500)
//   })
//   return promise
// }

// setTimeout(()=>{
//   console.log('Time is done!')
//   fetchData()
//     .then(text =>{
//       console.log(text)
//       return fetchData()
//     })
//     .then(text2 =>{
//       console.log(text2)
//     })
// },2000)

// console.log('hello')
// console.log('hi')
///////////////////////////////////

let felipe = new Promise((resolve, reject) => {
  let add = 1+1
  if (add == 2) {
    resolve('success')
  }
  else{
    reject('failed')
  }
})
felipe.then(message => {
  console.log("Felipe completed " + message + "fully his promise")
})
.catch(message => {
  console.log("Felipe " + message + " on completing his promise")
})
