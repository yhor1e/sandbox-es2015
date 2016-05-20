'use strict'

// use var at blocked scope

console.log('------------------------------------------------')
console.log(' --- case 1   var a = 1')

{
  var a = 1
}

console.log('a', a)  // -> 1

console.log('\n --- case 2   let b = 2')
{
  let b = 2
  console.log('in block scope b ', b)  // -> 2
}

try {
  console.log('out of block scope b ', b)  // syntax error
}
catch(e){
  console.log(e.message)
}

console.log('\n --- case 3    for (var i = 0; i < 10; i++)')

// example for loop
// use var
for (var i = 0; i < 10; i++) {
}

console.log('out of block scope i ', i, '.')  // -> 10

console.log('\n --- case 4    for (let j = 0; j < 10; j++)')

// use var
for (let j = 0; j < 10; j++) {
}

try {
  console.log('out of block scope j', j, '.')  // syntax error
} catch (e){
  console.log(e.message)
}

console.log('\n------------------------------------------------')
console.log(' --- case 5    const c = "foo"; c = "bar"')

const c = 'foo';

try {
  c = 'bar';  // -> syntax error
} catch(e) {
  console.log(e.message)
}
console.log(c);

console.log('\n --- case 6    const d = {name: "foo"}; d.name = "bar"; d = {name: "baz"}')

const d = {name: 'foo'};
console.log(d.name); // -> foo

d.name = 'bar'
console.log(d.name); // -> bar

try {
  d = {name: 'baz'} // -> syntax error
} catch(e) {
  console.log(e.message)
}
