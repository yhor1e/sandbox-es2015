'use strict'

// use var at blocked scope

console.log('------------------------------------------------')
console.log(' --- case 1   use {}')

const add1 = (a, b) => {
  return a + b
}
console.log(add1(2, 5)) // -> 7


console.log('\n --- case 2   not use {}')

const add2 = (a, b) => a + b
console.log(add2(3, 6)) // -> 9


console.log('\n --- case 3   no prameters, use ()')

const eight = () => 3 + 5
console.log(eight())

console.log('\n --- case 4   no prameters, use _')

const nine = _ => 3 + 6
console.log(nine())


console.log('\n --- case 5   what dose `this` means ')

const ten = _ => {
  console.log('`this` is ' + this)
  return 3 + 7
}
ten()
