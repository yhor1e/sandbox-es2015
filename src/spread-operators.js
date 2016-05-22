'use strict'

// use var at blocked scope

console.log('------------------------------------------------')
console.log(' --- case 1   basic spread operators')

let numbers = [2, 4, 20, 43, 50, 23]
console.log(Math.max(...numbers))  // -> 50


console.log('\n --- case 2   concatenate spread operators')

let numbers1 = [1, 13]
let numbers2 = [21, 24]
console.log([...numbers1, ...numbers2]) // -> [ 1, 13, 21, 24 ]
