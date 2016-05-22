'use strict'

// use var at blocked scope

console.log('------------------------------------------------')
console.log(' --- case 1   rest operators')

let numbers = [2, 4, 20]
const plusTwo = (...numbers) => {
  numbers.forEach(v => {
    console.log(v + 2)
  })
}
plusTwo(...numbers) // -> 4 6 22
